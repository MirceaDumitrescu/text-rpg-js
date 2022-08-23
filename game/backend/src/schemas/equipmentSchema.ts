import mongoose from "mongoose";

export const equipmentSchema = new mongoose.Schema({
    head: {
        type: String,
        required: false,
        default: ""
    },
    hands: {
        type: String,
        required: false,
        default: ""
    },
    chest: {
        type: String,
        required: false,
        default: ""
    },
    legs: {
        type: String,
        required: false,
        default: ""
    },
    feet: {
        type: String,
        required: false,
        default: ""
    },
    mainHand: {
        type: String,
        required: false,
        default: ""
    },
    offHand: {
        type: String,
        required: false,
        default: ""
    }
});
