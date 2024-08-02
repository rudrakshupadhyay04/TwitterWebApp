import express from "express";
import dotenv from 'dotenv';
import dataBaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import router from './routes/user.routes.js';

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
app.use("/api/user",router )

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})