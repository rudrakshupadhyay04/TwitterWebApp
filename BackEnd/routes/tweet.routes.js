import expres from 'express';
import { isAuthanticated } from '../config/auth.js';
import { createTweet } from '../controllers/tweet.controller.js';

const router = expres.Router();

router.post("/create", isAuthanticated ,createTweet);

export default router;