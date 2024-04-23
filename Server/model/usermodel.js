const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    mobilenumber: {
        required: true,
        type: Number,
    },
    profileUrl: {
        required:true,
        type: String 
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false 
    },
    
});


module.exports = mongoose.model("UserDatas", Userschema);
