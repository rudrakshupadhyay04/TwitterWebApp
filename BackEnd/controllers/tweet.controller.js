import { Tweet } from "../models/tweet.model.js";

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
}