import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const isAuthanticated = async (req , res, next) => {
    try {
        const token = req.cookies.token;
        // console.log(token);

        if(!token){
            return res.status(401).json({
                message: "User is not authanticated!!!!",     
                success: false       
            })
        }

        const verify = jwt.verify(token , process.env.TOKEN_SECRET);
        // console.log(verify);
        req.user = verify.userId;
        next();
        
    } catch (error) {
        console.log(error);
    }
};
