import express from "express";
import dotenv from 'dotenv';
import dataBaseConnection from "./config/database.js";

dotenv.config({
    path:".env"
})

dataBaseConnection();
const app  = express();

app.listen(process.env.PORT, () => {
    console.log(`Server listen at port ${process.env.PORT}`);
})