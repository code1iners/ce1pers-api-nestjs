# Ce1pers API

This project serve various API services.

## Services

- Members (Done)

  - Create/Retrieve/Update/Delete.
  - Me.
  - Login.

- Auth (Done)

  - Designed as dynamic module.
  - Member authentication with JWT.
  - Implement middleware for authentication.
  - Implement Auth Guard for authorization.
  - Implement Auth Member decorator.

- Weathers (Done)

  - Current weather by coordinates/locations.
  - 5 Day / 3 Hour weather forecast.
  - Air pollution.
  - Geocoding.
  - Weather widget (Pending).

- Movies / Tv (Processing)

## Main tech stacks

- Nest.js
- TypeScript
- Prisma
- Planet Scale
- Heroku

## How to play

### Prerequisites

- Have `.env` file with environment variables.

  - `PRIVATE_KEY` => Secret key for backend system.
  - `DATABASE_URL` => Database URL (MySQL).

### Playing

- Install dependencies.

  ```bash
  npm install
  ```

- Start database.

  ```bash
  npm run db:open # Open database.
  npm run db:studio # (Optional) Database visualization.
  ```

- Start server as development mode.

  ```bash
  npm run dev # Start app on development.
  ```
