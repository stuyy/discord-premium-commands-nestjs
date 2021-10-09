# Premium Commands Nest.js API

This is the code repository for the Discord Premium Commands API.

Find the tutorial playlist [here](https://www.youtube.com/playlist?list=PL_cUvD4qzbkxWAuRwfZLqAh_F0FatQdvI)

# Installation & Setup

**Prerequisites**

- This is a Nest.js project. It is highly recommended you install the `nest` cli tool. To find information on that, please visit the official nest.js docs [here](https://docs.nestjs.com/)
- Install a database. In this project, we use MySQL. For the ORM, we use TypeORM. Since TypeORM is flexible and supports different databases, you can use an alternative such as PostgreSQL and it should work fine. You may use any TypeORM to connect to any of the supported databases, listed here: https://typeorm.io/#/connection-options/common-connection-options
- Create a Stripe account & retrieve test mode API keys.

1. Clone the repository
2. Install all dependencies by running `yarn install` or `npm install`.
3. Setup the project environment variables.

   - Create a file called `.env.development` and copy and paste the following

   ```
    PORT=
    # MySQL Connection
    MYSQL_DB_HOST=
    MYSQL_DB_PORT=
    MYSQL_DB_USERNAME=
    MYSQL_DB_PASSWORD=
    MYSQL_DB_DATABASE=
    # Cookie Secret
    COOKIE_SECRET=

    # Stripe Credentials
    STRIPE_SECRET_KEY=

    # Discord OAuth Credentials
    DISCORD_CLIENT_ID=
    DISCORD_CLIENT_SECRET=
    DISCORD_REDIRECT_URI=
   ```

- For `PORT`, this is the port your Nest.js API will run on. In the tutorial, we use 3001 for the port.
- For MySQL credentials, be sure to provide all of the necessary values in order to connect to the database.
- For `COOKIE_SECRET`, use any string for development mode. This value is used to encrypt the cookie.
- For `STRIPE_SECRET_KEY`, use the secret key from Stripe API (NOT THE PUBLISHABLE KEY), and make sure the key is in test mode.
- For Discord credentials, retrieve that from the Discord Developer Portal.
