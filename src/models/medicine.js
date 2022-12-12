const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: Date,
        required:true
    },
    image: {
        type: String,
    },
    timestamp:{
        type:Date,
        required:true
    },
    pharmacistID:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Medicine", medicineSchema);