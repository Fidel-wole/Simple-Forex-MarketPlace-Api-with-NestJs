
## Forex Marketplace

Forex Marketplace is a platform that facilitates buying and selling of foreign exchange (forex) with real-time conversion rates fetched from an external API. This project is implemented using NestJS, TypeScript, TypeORM, and MongoDB, following a microservices architecture.

## Table of Contents

- Features
- Service Architecture
- Monorepo Structure
- Technology Stack
- Setup
- Usage
- Contributing
- License

## Features

The Forex Marketplace platform offers the following features:

- Wallet Service: Manages balances and transactions within user wallets.
- Transaction and Order Service: Handles the creation and management of forex transactions and orders.
- User and Authentication Service: Manages user registration, authentication, and profile management.
- Integration/Rate Service: Fetches current forex rates from an external API and makes them available to other services via gRPC.

## Service Architecture

The system is composed of the following microservices:

1. Wallet Service
2. Transaction and Order Service
3. User and Authentication Service
4. Integration/Rate Service

## Monorepo Structure

The project follows a monorepo structure using tools like Nx or Lerna. Each service is a separate package/app within the repository, and shared libraries (e.g., logging, error handling) are included as internal packages.

## Technology Stack

- Backend Framework: NestJS with TypeScript
- Database: MongoDB integrated using Mongoose
- Internal Communication: gRPC
- External API: REST for user-facing endpoints

## Setup

To set up the project locally, follow these steps:

1. Clone the repository.
```bash
git clone https://github.com/Fidel-wole/Simple -Forex-Marketplace-With-NestJs.git
```
2. Install dependencies.
3. Set up environment variables.
4. Set up MongoDB.
5. Start the services.

## Usage

Once the services are running, you can interact with the Forex Marketplace through its APIs.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License