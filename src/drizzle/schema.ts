
import {integer, pgTable,serial, varchar} from "drizzle-orm/pg-core";


export const BooksTable = pgTable("books", {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    author: varchar('author').notNull(),
    publicationYear: integer('publicationYear').notNull(),
})

export type TIBooks = typeof BooksTable.$inferInsert;
export type TSBooks = typeof BooksTable.$inferSelect;