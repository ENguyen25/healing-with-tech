import express from 'express';

import { getPost } from '../controllers/postController.js';

const router = express.Router();

router.get('/:id', getPost);

export default router;
