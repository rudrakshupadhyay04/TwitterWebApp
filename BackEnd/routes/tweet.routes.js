import expres from 'express';
import { isAuthanticated } from '../config/auth.js';
import { createTweet, deleteTweet } from '../controllers/tweet.controller.js';

const router = expres.Router();

router.post("/create", isAuthanticated ,createTweet);
router.delete("/delete/:id", deleteTweet);

export default router;