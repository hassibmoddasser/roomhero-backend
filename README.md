# RoomHero Backend

The REST APIs of the RoomHero platform

## Features

- Built with Express and MongoDB
- Consistent coding styles
- Linting with eslint
- Environment variables from .env files with dotenv
- Integration and Unit tests with jest and supertest
- API versioning and access
- API documentation and comments
- Error handler and middleware
- Faker package for generating dummy data for testing

## Requirements

- Node v14+
- Yarn/NPM

## Getting Started

Clone the repo and make it yours

```bash
gh repo clone hassibmoddasser/roomhero-backend
```

Install the dependencies

```bash
yarn install

# or

npm install
```

Create a `.env` file and set the following environment variables: 

```bash
NODE_ENV = development
PORT = 3030
MONGO_URI = mongodb://mongodb:<port>/<database>
```

Run the server using the following command:

```bash
yarn run dev

# or

npm run dev
```

## Scripts

```bash
# running in production
yarn start

# running locally
yarn dev

# running tests
yarn test
```