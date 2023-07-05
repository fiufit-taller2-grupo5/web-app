# Web App

React App for FiuFit Admins.

## Running Locally

The ideal way to run this project is using docker compose. In the development-setup repository, there is a docker compose that will run all services needed for the basic functionality of the application, including the API Gateway. For this, clone or pull the development-setup repository, and run the following command:

docker compose up --build.

That will start the Web App at port 3001, and the other services at their respective ports wired by service name, as well as the postgres database.

This project works with hot-reload, so any local change to the code should be reflected on the running application.

## What is it for

The idea of this App, is to function as an Admin Dashboard.
You can:

1. Check for system metrics, such as users created, training plan createds, etc.
2. Create and delete Admins
3. Block users and trainings
4. See all users and trainings

Good luck!
