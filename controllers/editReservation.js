const Reservation=require('../models/medicine');

const editReservation = async (req,res)=>{
    const resID=req.body.id;
    const dateAndTime=req.body.dateAndTime;
    const specialty=req.body.specialty;
    const timestamp=new Date();
    const query={_id: resID};
    const slot= await Reservation.findOne(query);
    console.log(slot);
    if(slot!=null){
        await Reservation.findOneAndUpdate(query, {$set:{ specialty:specialty, dateAndTime:dateAndTime, timestamp:timestamp}});
        res.send("Reservation updated successfully!");
    }else{
        res.send("Sorry an error occured, please try again.");
    }
}

module.exports=editReservation;



