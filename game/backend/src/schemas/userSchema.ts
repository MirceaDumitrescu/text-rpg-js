import mongoose from "mongoose";
import { characterSchema } from "./characterSchema";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    characterData: {
        type: characterSchema,
        required: true
    }
});


export const UserModel = mongoose.model("User", userSchema);

