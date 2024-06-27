import { z } from 'zod'


export const booksSchema = z.object({
    title: z.string(),
    author: z.string(),
    publicationYear: z.number()
})