/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
    migrations: {
      directory: "./migrations/migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};

export default config;