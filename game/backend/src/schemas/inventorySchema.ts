import mongoose from 'mongoose';

export const inventorySchema = new mongoose.Schema({
    slot_01: {
        type: String,
        required: false,
        default: ""
    },
    slot_02: {
        type: String,
        required: false,
        default: ""
    },
    slot_03: {
        type: String,
        required: false,
        default: ""
    },
    slot_04: {
        type: String,
        required: false,
        default: ""
    },
    slot_05: {
        type: String,
        required: false,
        default: ""
    },
    slot_06: {
        type: String,
        required: false,
        default: ""
    }});

