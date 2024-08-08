import expres from 'express';
import { isAuthanticated } from '../config/auth.js';
import { createTweet, deleteTweet, likedOrDisliked } from '../controllers/tweet.controller.js';

const router = expres.Router();

router.post("/create", isAuthanticated ,createTweet);
router.delete("/delete/:id", isAuthanticated,deleteTweet);
router.put("/like/:id", isAuthanticated,likedOrDisliked);

export default router;