// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm'
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar
} from 'drizzle-orm/pg-core'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `eotv_${name}`)

export const events = createTable(
  'events',
  {
    id: serial('id').primaryKey(),
    clerkId: varchar('clerkId', { length: 50 }),
    eventName: varchar('eventName', { length: 50 }),
    houseNumber: varchar('houseNumber', { length: 50 }),
    dateOfEvent: timestamp('dateOfEvent', { mode: 'date'  }),
    category: varchar('category', { length: 50 }),
    startTime: varchar('startTime', { length: 50 }),
    endTime: varchar('endTime', { length: 50 }),
    eventHost: varchar('eventHost', { length: 50 }),
    eventDetails: varchar('eventDetails', { length: 1024 }),
    createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp('updatedAt')
  },
  (example) => ({
    nameIndex: index('title_idx').on(example.eventName)
  })
)
