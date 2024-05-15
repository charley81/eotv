import { type Config } from 'drizzle-kit'

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: 'postgresql',
  driver: 'pg',
  dbCredentials: {
    url: process.env.POSTGRES_URL!
  },
  tablesFilter: ['eotv_*']
}) satisfies Config
