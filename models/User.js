const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    phoneNumber:{
      type:String,
      required:true
    },
    password: {
        type: String,
        required:true
    },
    role: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model("User", userSchema);