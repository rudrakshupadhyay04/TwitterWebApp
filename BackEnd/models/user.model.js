import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        bookmarks: {
            type: Array,
            default: [],
        },
        followers:{
            type: Array,
            default: []
        },
        following:{
            type:Array,
            default: []
        },
        
    },
    {timestamps:true}
);

export const User = mongoose.model("User", userSchema);