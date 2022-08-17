const mongoosee = require('mongoose');


const userSchema = new mongoosee.Schema({
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
    }
});


const User = mongoosee.model("User", userSchema);

module.exports = User;
