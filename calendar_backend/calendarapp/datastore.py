from urllib.parse import urlencode

import requests

from calendar_backend import settings


def confirm(data):
    if type(data) == list:
        return True
    elif type(data) == dict:
        return False
    else:
        return False


class DataBase:
    def __init__(self, request=None):
        self.writeUrl = "https://api.zuri.chat/data/write"
        self.readUrl = "https://api.zuri.chat/data/read/{plug_id}/{coll_name}/{org_id}?{query}"
        self.deleteUrl = "https://api.zuri.chat/data/delete"
        if request is None:
            self.plgn_id = settings.PLUGIN_ID
            self.org_id = settings.ORGANIZATION_ID
        else:
            self.plgn_id = request.data.get("plugin_id")
            self.org_id = request.data.get("org_id")

    def post(self, collection_name, data):
        self.plgn_id = settings.PLUGIN_ID
        self.org_id = settings.ORGANIZATION_ID
        self.writeUrl = "https://api.zuri.chat/data/write"
        body = dict(
            plugin_id=self.plgn_id,
            organization_id=self.org_id,
            collection_name=collection_name,
            bulk_write=confirm(data),
            payload=data
        )
        try:
            response = requests.post(url=self.writeUrl, json=body)
        except requests.exceptions.RequestException as x:
            print(x)
            return None
        if 200 <= response.status_code < 300:
            data.update({"_id": response.json().get("data", {}).get("object_id")})
            return data
        else:
            return {"error": response.json()}

    def get(self, collection_name, lookup={}):
        try:
            query = urlencode(lookup)
        except Exception as x:
            print(x)
            return None

        url = self.readUrl.format(
            plug_id=self.plgn_id,
            org_id=self.org_id,
            coll_name=collection_name,
            query=query
        )

        try:
            response = requests.get(url=url)
        except requests.exceptions.RequestException as x:
            print(x)
            return None
        if 200 <= response.status_code < 300:
            return response.json().get("data")
        else:
            return {"error": response.json()}

    def put(self, collection_name, data, lookup=None, object_id=None):
        body = dict(
            plugin_id=self.plgn_id,
            organization_id=self.org_id,
            collection_name=collection_name,
            bulk_write=confirm(data),
            payload=data
        )
        bulk_write = body.get("bulk_write")
        if bulk_write:
            if lookup is None:
                return {"error": "Filter must be set for multiple data"}
            body.update({"filter": lookup})
        else:
            if object_id is None:
                return {"error": "Object ID must be set for multiple data"}
            body.update({"object_id": object_id})

        response = requests.put(self.writeUrl, json=body)
        if 200 <= response.status_code < 300:
            if not bulk_write:
                obj = {"_id": object_id}
                response = self.get(collection_name, obj)
                return response
            else:
                response = self.get(collection_name)
                return response
        return {"error": response}

    def delete(self, collection_name, _id):
        body = dict(
            plugin_id=self.plgn_id,
            organization_id=self.org_id,
            collection_name=collection_name,
            object_id=_id,
        )
        try:
            response = requests.post(url=self.deleteUrl, json=body)
        except requests.exceptions.RequestException as x:
            print(x)
            return None
        if 200 <= response.status_code < 300:
            return response.json()
        else:
            return {"error": response.json()}


def send_data2centrifugo(room, data):
    url = "https://realtime.zuri.chat/api"
    headers = {'Content-type': 'application/json', 'Authorization': 'apikey ' + settings.CENTRIFUGO_API_KEY}
    command = {
        "method": "publish",
        "params": {
            "channel": room,
            "data": data
        }
    }
    try:
        response = requests.post(url=url, headers=headers, json=command)
        return {
            "status_code": response.status_code,
            "message": response.json()
        }
    except Exception as x:
        print(x)

