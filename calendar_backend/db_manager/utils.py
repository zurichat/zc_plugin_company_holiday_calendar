import requests
import random, json

PLUGIN_ID = "6132913ba921b9ec34e2033a"
COLLECTION_NAME = 'Calendar'
ORGANIZATION_ID = "328564"

write_endpoint = "https://api.zuri.chat/data/write"
read_endpoint = f"https://api.zuri.chat/data/read/{PLUGIN_ID}/{COLLECTION_NAME}/{ORGANIZATION_ID}"


def write_data_to_db(data, many=True, object_id= None, data_filter= None):

    write_data = {
                    "plugin_id": PLUGIN_ID,
                    "organization_id": ORGANIZATION_ID,
                    "collection_name": COLLECTION_NAME,
                    "bulk_write": many,
                    "object_id": object_id,
                    "filter": {},
                    "payload": data
                }
    json_data = json.dumps(write_data)
    response = requests.post(write_endpoint, json=json_data)
    return response

def read_data_from_db():
    response = requests.get(read_endpoint)
    py_response = response.content
    return py_response

    