const Reservation=require('../models/reservation');

const getReservation= async (req,res)=>{
const userID=req.user.id;
const reservations = await Reservation.find({ doctorID: userID }).exec();
res.json(reservations);
}

module.exports=getReservation;