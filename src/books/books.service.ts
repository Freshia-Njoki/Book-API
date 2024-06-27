import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIBooks, TSBooks, BooksTable } from "../drizzle/schema";

export const BooksService = async (limit?: number): Promise<TSBooks[] | null> => {
    if (limit) {
        return await db.query.BooksTable.findMany({
            limit: limit
        });
    }
    return await db.query.BooksTable.findMany();
}

export const getBookService = async (id: number): Promise<TIBooks | undefined> => {
    return await db.query.BooksTable.findFirst({
        where: eq(BooksTable.id, id)
    })
}

export const createBookService = async (Book: TIBooks) => {
    await db.insert(BooksTable).values(Book)
    return "Book created successfully";
}

export const updateBookService = async (id: number, Book: TIBooks) => {
    await db.update(BooksTable).set(Book).where(eq(BooksTable.id, id))
    return "Book updated successfully";
}

export const deleteBookService = async (id: number) => {
    await db.delete(BooksTable).where(eq(BooksTable.id, id))
    return "Book deleted successfully";
}

