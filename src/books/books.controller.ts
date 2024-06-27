
import { Context } from "hono";
import { BooksService, getBookService, createBookService, updateBookService, deleteBookService } from "./books.service";

export const listBooks = async (c: Context) => {
    try {

        const limit = Number(c.req.query('limit'))

        const data = await BooksService(limit);
        if (data == null || data.length == 0) {
            return c.text("Books not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getBooks = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const Books = await getBookService(id);
    if (Books == undefined) {
        return c.text("Books not found", 404);
    }
    return c.json(Books, 200);
}
export const createBooks = async (c: Context) => {
    try {
        const Books = await c.req.json();
        console.log(Books);
        const createdBooks = await createBookService(Books);


        if (!createdBooks) return c.text("Books not created", 404);
        return c.json({ msg: createdBooks }, 201);

    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updateBooks = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const Books = await c.req.json();
    try {
        const searchedBooks = await getBookService(id);
        if (searchedBooks == undefined) return c.text("Books not found", 404);
        const res = await updateBookService(id, Books);
        if (!res) return c.text("Books not updated", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleteBooks = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    try {
        const Books = await getBookService(id);
        if (Books == undefined) return c.text("Books not found", 404);
        const res = await deleteBookService(id);
        if (!res) return c.text("Books not deleted", 404);

        return c.json({ msg: res }, 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}


