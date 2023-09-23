Claro, aquí tienes un ejemplo de un archivo README para tu aplicación "hubspot-endpoints" que utiliza Node.js 18.x y está alojada en GitHub:

---

# HubSpot Endpoints

## Overview

HubSpot Endpoints is a Node.js application that provides endpoints for integrating with the HubSpot API. It allows you to manage contacts and deals in your HubSpot account through a simple API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 18.x installed
- HubSpot API key (set as an environment variable or in a `.env` file)
- Server_Port (set as an environment variable or in a `.env` file)
- Git for version control (optional)

## Getting Started

To get started with HubSpot Endpoints, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/jValdezR/hubspot_endpoints.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hubspot_endpoints
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add your HubSpot API key:

   ```env
   HUBSPOT_API_TOKEN=your_hubspot_api_key_here
   SERVER_PORT=your_server_port
   ```

   Replace `your_hubspot_api_key_here` with your actual HubSpot API key.
   Replace `your_server_port` with the free port that you want to use.

5. Start the application in development mode:

   ```bash
   npm run dev
   ```

   This will start the application using nodemon, which automatically restarts the server when code changes are detected.

6. Your HubSpot Endpoints API should now be running locally at `http://localhost:your_port_number`.

## Usage

First, you need to create the Webhook on pipedrive to receive the information when a contact or deal is being created. Use the Postman Collection, you just need configure the enviroment variables and setup your api token from pipedrive to get authorization.

You can use the HubSpot Endpoints API to perform various actions with your HubSpot account, including adding contacts and deals. Here are some example API endpoints:

- `POST /webhooklistener/`: Receive webhook events from HubSpot.

For detailed information on API endpoints and their usage, refer to the API documentation or the code in the `src/controllers` directory.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name.
3. Make your changes and test them thoroughly.
4. Submit a pull request to the `main` branch of this repository.

## License

This project is licensed under the [ISC License](LICENSE).

## Contact

If you have any questions or need assistance, feel free to reach out to the project maintainer:

- Jesus Daniel Valdez Rodriguez
- GitHub: [https://github.com/jValdezR](https://github.com/jValdezR)

---