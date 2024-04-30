import { type Config } from 'drizzle-kit'

export default {
  schema: './src/server/db/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!
  },
  tablesFilter: ['eotv_*']
} satisfies Config
