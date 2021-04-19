# taxi-map-backend
This project was bootstrapped with [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

The main module is the `TaxiModule`, with a `/` route to fetch taxis; given a `latitude` and `longitude` (and a `count` optionally).

### Development
To run the app in development, you can run `npm run start:dev` which will start the server on `http://localhost:3000`.

Create a `.env` in the root directory and set the `TAXI_API` environment variable to the desired 3rd party api: ex: `https://www.google.com/api/drivers`.

Ensure that the `taxi-map-frontend` app is up and running on `http://localhost:3001`.


### Dependencies
1. `class-validator` and `class-transformer`: For query parameter validation
2. `rxjs` for handling http requests


### Improvements
1. Tests
2. Retry logic for 3rd party API
3. Config module (for 3rd party endpoint and other secrets)

