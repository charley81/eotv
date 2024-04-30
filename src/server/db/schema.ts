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
import { title } from 'process'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `global-db_${name}`)

export const posts = createTable(
  'post',
  {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 50 }).notNull(),
    content: varchar('content', { length: 1024 }).notNull(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt')
  },
  (example) => ({
    nameIndex: index('title_idx').on(example.title)
  })
)

// export const posts = createTable(
//   'events',
//   {
//     id: serial('id').primaryKey(),
//     eventName: varchar('eventName', { length: 50 }).notNull(),
//     image: varchar('image', { length: 800 }).notNull(),
//     houseNumber: varchar('houseNumber', { length: 50 }).notNull(),
//     dateOfEvent: date('date').notNull(),
//     category: enum('category', ['music', 'sports', 'food', 'art', 'other']),
//     startTime: timestamp('startTime').notNull(),
//     endTime: timestamp('endTime').notNull(),
//     NameOfHost: varchar('NameOfHost', { length: 50 }).notNull(),
//     eventDetails: varchar('eventDetails', { length: 1024 }).notNull(),

//     createdAt: timestamp('created_at')
//       .default(sql`CURRENT_TIMESTAMP`)
//       .notNull(),
//     updatedAt: timestamp('updatedAt')
//   },
//   (example) => ({
//     nameIndex: index('title_idx').on(example.eventName)
//   })
// )
