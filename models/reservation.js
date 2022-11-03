const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    specialty: {
        type: String,
        required: true,
    },
    dateAndTime: {
        type: Date,
        required:true
    },
    doctorID: {
        type: String,
        required:true
    },
    doctorName:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model("Reservation", reservationSchema);