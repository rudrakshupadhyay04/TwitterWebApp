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