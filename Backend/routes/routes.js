import express from 'express';

import { addBooks, getBooks } from '../controllers/controllers.js'

const router = express.Router();

router.get('/', getBooks)
router.post('/add', addBooks)

export default router;