const Reservation=require('../models/reservation');

const makeReservation = async (req,res)=>{
    console.log(req.user);
    const body=req.body;
    const newReservation = new Reservation({
        specialty: body.specialty,
        dateAndTime:body.dateAndTime,
        timestamp:new Date(),
        doctorID:body.doctorID,
        doctorName:body.doctorName,
    });
    await newReservation.save();
    const reservations = await Reservation.find({ doctorID:doctorID }).exec();
    res.json(reservations);
    // res.send("Slot added successfully");
}

module.exports=makeReservation;