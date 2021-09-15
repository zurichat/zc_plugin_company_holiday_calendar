# ZC-COMPANY HOLIDAY CALENDAR PLUGIN

# Team Plugin-holiday-calendar

This is a a calendar plugin that allows users with different privledges have access to some or all of the calendar features.features like creation of event,holiday notfications etc.
This plug in is a monolithic plugin.

## Technologies used are

- Html.
- Css.
- Javascript.
- Python.

## Frontend framework used

- ReactJs

## Backend framework used

- Django.
- Django rest framework.
- Djongo (MongoDB database engine for django)

## To work on this project:

- Fork the repo
- Clone the repo to your system
- Switch to the develop branch

```
git checkout -b develop
```

- Set your github repo as the remote for your local git repo:

```
git remote add <unique_remote_name> <github_repo_url>.git
```

e.g

```
git remote add origin https://github.com/Ifeadewumi/zc_plugin_company_holiday_calendar.git
```

DO NOT ADD THE ZURI_HOLIDAY_CALENDAR PLUGIN REPO AS YOUR REMOTE.

- Navigate to the relevant folder (calendar_frontend or calendar_backend)
- Do your work
- Stage the changed files you'll like to upload:

```
git add *
```

for all files. replace `*` with specific file names if you're only interested in those files.

- Commit to the develop branch with a clear, descriptive message and issue number, e.g.

```
git commit -m "Fixed models and bugs for leave request as per issue #1299."
```

- Push to the develop branch of the remote repo:

```
git push -u origin develop
```

- Do a pull request to the develop branch

## Installation instructions for frontend

## Installation instructions for backend

- Make sure you are in a virtual environment.
  - You can use the `virtualenv` package. If it's not installed on your local machine, install from your terminal, using
  ```
  pip install virtualenv
  ```
  - Once you have `virtualenv` on your machine, create a virtual environment with a name you choose:
  ```
  virtualenv <environment_name>
  ```
  - Next, activate the environment:
  ```
  <environment_name>\Scripts\activate
  ```
- Navigate to the `calendar_backend/calendar_backend` folder
- Install the packages in the requirements.txt file

```
pip install -r requirements.txt
```

- Once you're done, you can use
  `pip freeze > requirements.txt`
  to update the `requirements.txt` file if you installed new packages during your work.
  Otherwise, there's no need to `pip freeze`.
- Exit the virtual environment with

```
deactivate
```

=======

# Steps to install virtualenv for for backend:

- Browse to the calendar_backend folder.
- type pip install virtualenv to install virtualenv
- type virtualenv venv to create venv folder
- activate the venv by typing source venv/bin/activate if you are using linux or type venv/Scripts/activate.bat if you are using windows.
- install all dependencies on the requirements.txt by typing pip install -r requirements.txt to install all at once.
