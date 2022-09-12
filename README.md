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
  - Common services.
    - Keyword details.
    - Movies by keyword.
    - Image url.
    - Trending movies.
    - Available regions.
    - Content providers.
  - Movie services.
    - Latest movie.
    - Movie alternative titles.
    - Movie credits.
    - Movie details.
    - Movie genre list.
    - Movie images.
    - Movie keywords.
    - Movie videos.
    - Now playing movies.
    - Popular movies.
    - Recommendation movies.
    - Similar movies.
    - Top rated movies.
    - Upcoming movies.
  - Tv
    - Latest tv show.
    - On the air tv shows.
    - Popular tv shows.
    - Recommendation tv shows.
    - Similar tv shows.
    - Top rated tv shows.
    - Tv show alternative titles.
    - Tv show content ratings.
    - Tv show credits.
    - Tv show details.
    - Tv show genre list.
    - Tv show keywords.
    - Tv show reviews.
    - Tv show translation.
    - Tv show videos.
    - Tv show watch providers.

## Main tech stacks

- Nest.js
- TypeScript
- GraphQL
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
