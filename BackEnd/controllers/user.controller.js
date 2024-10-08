import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const Register =  async (req, res) => {
    try {
        const {name, email, username, password} = req.body;

        // basic validation
        if(!name || !email || !username || !password){
            return res.status(401).json({
                message: "All field are required",
                success: false
            })
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message: "User already exist",
                success: false
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 16);
        await User.create({
            name,
            username,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })

    } catch (error) {
        console.log(error);
    }
};

export const Login = async (req, res) => {
    try {
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(401).json({
                message: "All fields are required!!!",
                success: false
            })
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                message: "You have entered the worng credential!!",
                success: false
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password );
        if(!isMatch){
            return res.status(401).json({
                message: 'You have entered the worng credential!!',
                success: false
            })
        }

        const tokenData = {
            userId: user._id
        }
        const token  = jwt.sign(tokenData, process.env.TOKEN_SECRET , {expiresIn: "1d"});
        return res.status(201).cookie("token", token, {expiresIn: "id", httpOnly:true}).json({
            message:`Welcome back ${user.name}`,
            success: true
        })
    } catch (error) {
        console.log(error)
    }
};

export const Logout = async (req, res) => {
    try {
        return res.cookie("token", "" , {expiresIn: new Date(Date.now())}).json({
            message:`Logged out sucessfully!!!`,
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            success: false,
            error: error.message
        });
    }
};

export const Bookmark = async (req,res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);
    
        if(user.bookmarks.includes(tweetId)){
            // remove
            await User.findByIdAndUpdate(loggedInUserId, {$pull:{bookmarks:tweetId}});
            return res.status(200).json({
                message: "Removed from bookmark"
            })
        }else {
            await User.findByIdAndUpdate(loggedInUserId,{$push:{bookmarks:tweetId}});
            return res.status(200).json({
                message:"Saved to bookmarks"
            })
        }
        
    } catch (error) {
        console.log(error);
    }
};

export const getMyProfile = async (req,res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id).select("-password");
        return res.status(200).json({
            user,
        })
    } catch (error) {
        console.log(error);
    }
};

export const getOtherUser = async (req,res) => {
    try {
        const {id} = req.params;
        const otherUser = await User.find({_id:{$ne:id}}).select(-"password");
        if(!otherUser){
            return res.status(401).json({
                message:"Currently do not have any user!!!"
            })
        }

        return res.status(200).json({
            otherUser
        })
    } catch (error) {
        console.log(error);
    }
};

export const followAndUnfollow = async (req,res) => {
    try {
        const loggedInUserId = req.body.id;
        const userId = req.params.id;

        const loggedInUser = await User.findById(loggedInUserId);
        const user = await User.findById(userId);

        if(! user.followers.includes(loggedInUserId)){
            await user.updateOne({$push:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$push:{following:userId}});
            return res.status(200).json({
                message:`${loggedInUser.name} started following ${user.name}`
            })
        }else{
            await user.updateOne({$pull:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$pull:{following:userId}});
            return res.status(200).json({
                message:`${loggedInUser.name} unfollow ${user.name}`
            })
        }
    } catch (error) {
        console.log(error);
    }

}