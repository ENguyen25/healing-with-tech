import express from 'express';
import { verifyJWT } from '../helpers/verifyJWT.js';

import { registerUser, loginUser, getUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', verifyJWT, getUser);

export default router;
