import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

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
}