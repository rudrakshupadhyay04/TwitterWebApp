import express from "express";
import dotenv from 'dotenv';
import dataBaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoutes from './routes/user.routes.js';
import tweetRoutes from './routes/tweet.routes.js';
import cors from 'cors';

dotenv.config({
    path:".env"
})

dataBaseConnection();
const app  = express();


// middlewares
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: "http://localhost:3000",
    credentials:true
}
app.use(cors(corsOption));

// api
app.use("/api/user",userRoutes )
app.use("/api/tweet", tweetRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})