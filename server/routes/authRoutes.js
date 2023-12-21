import express from 'express';

import { registerUser, loginUser, getUser, profile } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', getUser);
router.post('/profile', profile);

export default router;
