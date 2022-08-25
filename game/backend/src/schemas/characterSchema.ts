import { inventorySchema } from './inventorySchema';
import { equipmentSchema } from './equipmentSchema';
import mongoose from "mongoose";

export const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        required: false,
        default: 1
    },
    experience: {
        type: Number,
        required: false,
        default: 0
    },
    health: {
        type: Number,
        required: false,
        default: 100
    },
    mana: {
        type: Number,
        required: false,
        default: 100
    },
    location: {
        type: String,
        required: false,
        default: "home"
    },
    inventory: {
        type: [inventorySchema],
        required: false,
        default: {
            "slot_01": "",
            "slot_02": "",
            "slot_03": "",
            "slot_04": "",
            "slot_05": "",
            "slot_06": ""
        }
    },
    equipment: {
        type: [equipmentSchema],
        required: false,
        default: {
            head: "",
            hands: "",
            chest: "",
            legs: "",
            feet: "",
            mainHand: "",
            offHand: ""
        }
    }
});

