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
        required: true,
        default: 1
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    health: {
        type: Number,
        required: true,
        default: 100
    },
    mana: {
        type: Number,
        required: true,
        default: 100
    },
    location: {
        type: String,
        required: true,
        default: "home"
    },
    inventory: {
        type: inventorySchema,
        required: true,
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
        type: equipmentSchema,
        required: true,
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
