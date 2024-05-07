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
    eventName: varchar('eventName', { length: 50 }).notNull(),
    houseNumber: varchar('houseNumber', { length: 50 }).notNull(),
    dateOfEvent: varchar('dateOfEvent', { length: 50 }).notNull(),
    category: varchar('category', { length: 50 }).notNull(),
    startTime: varchar('startTime', { length: 50 }).notNull(),
    endTime: varchar('endTime', { length: 50 }).notNull(),
    eventHost: varchar('eventHost', { length: 50 }).notNull(),
    eventDetails: varchar('eventDetails', { length: 1024 }).notNull(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt')
  },
  (example) => ({
    nameIndex: index('title_idx').on(example.eventName)
  })
)
