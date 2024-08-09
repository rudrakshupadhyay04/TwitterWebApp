import express from 'express';
import { Bookmark, Login, Logout, Register } from '../controllers/user.controller.js';
import { isAuthanticated } from '../config/auth.js';

const router  = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/logout', Logout);
router.put('/bookmark/:id',isAuthanticated, Bookmark);


export default router;