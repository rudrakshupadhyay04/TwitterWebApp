import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({
    path:'../config/.env'
});


const dataBaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('connected to database')
    }).catch((error) => {
        console.log(error);
    })
}

export default dataBaseConnection;