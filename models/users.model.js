const mongoose = require('mongoose');

const UserModelSchema = mongoose.Schema({
    user_id: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
    role: {
        type: "string",
        enum: ["admin","user"],
        default: "user",
        required: true,
    }
});
module.exports = mongoose.model("users", UserModelSchema);