const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required:true
    },
    userName:{
        type:String,
    },
    phoneNumber:{
      type:String  
    },
    password: {
        type: String ,
    },
});

module.exports = mongoose.model("User", userSchema);