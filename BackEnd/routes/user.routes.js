import express from 'express';
import { Bookmark, getMyProfile, getOtherUser, Login, Logout, Register } from '../controllers/user.controller.js';
import { isAuthanticated } from '../config/auth.js';

const router  = express.Router();

router.post('/register', Register);
router.post('/login', Login);
router.get('/logout', Logout);
router.put('/bookmark/:id',isAuthanticated, Bookmark);
router.get('/profile/:id',isAuthanticated, getMyProfile);
router.get('/otherUser/:id',isAuthanticated, getOtherUser);


export default router;