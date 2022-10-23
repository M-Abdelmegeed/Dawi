const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name: {
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
    },
});

module.exports = mongoose.model("Medicine", medicineSchema);