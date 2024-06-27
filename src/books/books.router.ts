import { Hono } from "hono";
import { listBooks, getBooks, createBooks, updateBooks, deleteBooks} from "./books.controller"
import { zValidator } from "@hono/zod-validator";
import { booksSchema } from "../validators";
export const bookRouter = new Hono();

bookRouter.get("/books", listBooks);
bookRouter.get("/books/:id", getBooks)
bookRouter.post("/books", zValidator('json', booksSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), createBooks)
bookRouter.put("/books/:id", updateBooks)

bookRouter.delete("/books/:id", deleteBooks)

