const Reservation = require("../models/medicine");


const deleteReservation = async(req,res)=>{
const id=req.body.id;
Reservation.deleteOne({ _id: id}, function (err) {
    if (err) return handleError(err);
    res.send("Medicine deleted successfully!");
  });
}

module.exports=deleteReservation;