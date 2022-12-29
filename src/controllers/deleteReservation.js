const Reservation = require("../models/reservation");


const deleteReservation = async(req,res)=>{
const id=req.body.id;
const doctorID=req.body.doctorID
Reservation.deleteOne({ _id: id}, function (err) {
    if (err) return handleError(err);
  });
  const reservations = await Reservation.find({ doctorID: doctorID }).exec();
  res.json(reservations);
}

module.exports=deleteReservation;