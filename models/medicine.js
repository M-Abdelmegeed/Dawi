const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    expiryDate: {
        type: String,
        required:true
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model("Medicine", medicineSchema);