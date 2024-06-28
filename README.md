# CryptoFolio Full Stack Web Application

## Overview

This full-stack web application tracks cryptocurrency prices in real-time. The frontend is built with React, and the backend is managed using AWS Amplify, utilizing DynamoDB for data storage. Users can sign up, monitor the current prices of various cryptocurrencies, and create and edit watchlists. Visit :

https://main.d2pujeh9fcxm5.amplifyapp.com/

## Features

- Real-time cryptocurrency price tracking
- User authentication and profile management
- Price alert notifications
- Responsive and user-friendly interface

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing and navigation within the application.
- **Axios**: For making HTTP requests to the backend.
- **Material-UI**: For responsive and modern UI components.

### Backend

- **AWS Amplify**: A set of tools and services that enables mobile and front-end web developers to build secure, scalable full-stack applications.
  - **Amplify Auth**: For user authentication and authorization.
  - **Amplify API**: For managing GraphQL and REST APIs.
  - **Amplify DynamoDB**: For managing local storage and syncing with the cloud.
  - **Amplify Hosting**: For deploying and hosting the application.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your local machine.
- AWS account with Amplify CLI configured.

### Frontend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Moe131/cryptofolio.git
    cd cryptofolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

### Backend Setup

1. Install the Amplify CLI:
    ```bash
    npm install -g @aws-amplify/cli
    ```

2. Configure Amplify in your project:
    ```bash
    amplify init
    ```

3. Add authentication:
    ```bash
    amplify add auth
    ```

4. Add API:
    ```bash
    amplify add api
    ```

5. Deploy the backend resources:
    ```bash
    amplify push
    ```

6. Connect the frontend to Amplify:
    ```javascript
    // src/aws-exports.js
    import Amplify from 'aws-amplify';
    import awsExports from './aws-exports';
    Amplify.configure(awsExports);
    ```

## Usage

1. **Sign Up / Login**: Users can sign up for a new account or log in with existing credentials.
2. **Dashboard**: View the current prices of various cryptocurrencies.
3. **Price Alerts**: Set up alerts to be notified when a cryptocurrency reaches a certain price.
4. **Historical Data**: View and analyze historical price data through charts.

## Contributing

We welcome contributions to improve the application. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [CoinGecko API](https://www.coingecko.com/en/api) for providing cryptocurrency data.
- [AWS Amplify](https://aws.amazon.com/amplify/) for the backend infrastructure.
- [React](https://reactjs.org/) for the frontend framework.

---

Thank you for using our Crypto Price Tracking application! If you have any questions or need further assistance, please feel free to reach out.
