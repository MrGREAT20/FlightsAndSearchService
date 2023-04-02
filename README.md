# Welcome to Flights Services

## Project Setup
    -clone the project on your local
    -Execute 'npm install' on the same path as of your root directory of the downloaded project
    -Create a ".env" file and add the following environmental variables
        -  `PORT=3000`
    -Inside the 'src/config' folder create a new file 'config.json' and then add the following piece of json

    ```
    {
  "development": {
    "username": <YOUR DB LOGIN>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

    ```