const Reservation=require('../models/reservation');

const makeReservation = async (req,res)=>{
    console.log(req.user);
    const body=req.body;
    const newReservation = new Reservation({
        specialty: body.specialty,
        dateAndTime:body.dateAndTime,
        timestamp:new Date(),
        doctorID:req.user.id,
        doctorName:req.user.firstName,
    });
    await newReservation.save();
    res.send("Slot added successfully");

}

module.exports=makeReservation;