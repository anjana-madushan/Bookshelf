import express from 'express';

import { addBooks, deleteBook, getABook, getBooks, updateBook } from '../controllers/controllers.js'

const router = express.Router();

router.get('/', getBooks)
router.get('/:id', getABook)
router.post('/add', addBooks)
router.delete('/delete/:id', deleteBook)
router.put('/update/:id', updateBook)

export default router;