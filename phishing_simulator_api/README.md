# 🚀 Phishing backend part 

This provides a RESTful API with websocket for managing phishing structure as a backend. 

### ⚙️ Configuration

1. Look at the test.env file for environment configurations.

2. Create a .env file in the root directory and configure your environment variables based on the settings provided in test.env. (Before moving forward configure your MongoDB configuration. Create database if still not exists)

   ```bash
    cp test.env .env

Edit .env file to match your local configuration.

1. Install dependencies. Use --force due to deprecated module reasons:

   ```bash
    npm install --force

### 📋 Usage

1. After installing the dependencies, you can start the application using the following command:

   ```bash
    npm run start

This will start the application and begin monitoring the websites specified in the config.json file.


### 📄 Swagger Documentation

After starting the application, you can explore the API documentation using Swagger UI:

    {serverhost}:{port}/documentation

For example, if running locally:

    http://localhost:3000/documentation

Swagger UI provides a user-friendly interface to interact with and test the API endpoints.