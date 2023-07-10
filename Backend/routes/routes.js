import express from 'express';

import { addBooks, deleteBook, getBooks } from '../controllers/controllers.js'

const router = express.Router();

router.get('/', getBooks)
router.post('/add', addBooks)
router.delete('/delete/:id', deleteBook)

export default router;