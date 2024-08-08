import { Tweet } from "../models/tweet.model.js";
import { User } from "../models/user.model.js";

export const createTweet = async (req, res) => {
    try {
        const {description , id} = req.body;

        if(!description || !id){
            return res.status(401).json({
                message:"All fields are required!!!",
                success: false
            })
        };

        await Tweet.create({
            description,
            userId:id
        });

        return res.status(201).json({
            message:"Tweet created successfully!!!",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
};


export const deleteTweet = async (req , res ) => {
    try {
        const {id} = req.params;
        console.log(id);

        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Tweet deleted successfully!!!",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
};

export const likedOrDisliked = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const user =  await User.findById(loggedInUserId);

        const tweetId = req.params.id;
        const tweet = await Tweet.findById(tweetId);

        if(tweet.like.includes(loggedInUserId)){
            // dislike
            await Tweet.findByIdAndUpdate(tweetId,{$pull:{like:loggedInUserId}});
            res.status(200).json({
                message:`${user.name} disliked your tweet`
            })
        }else{
            // like
            await Tweet.findByIdAndUpdate(tweetId,{$push:{like:loggedInUserId}});
            res.status(200).json({
            message:`${user.name} liked your tweet`
            })
        }
    } catch (error) {
        console.log(error)
    }

}