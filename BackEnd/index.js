import express from "express";
import dotenv from 'dotenv';
import dataBaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.routes.js';
import tweetRoutes from './routes/tweet.routes.js';

dotenv.config({
    path:".env"
})

dataBaseConnection();
const app  = express();


// middlewares
// app.use(express.urlencoded({
//     extendes:true
// }));
app.use(express.json());
app.use(cookieParser());

// api
app.use("/api/user",userRoutes )
app.use("/api/tweet", tweetRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})