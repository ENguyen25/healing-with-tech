import express from 'express';

import { getPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/:id', getPost);

export default router;
