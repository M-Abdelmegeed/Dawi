const Medicine=require('../models/medicine');

const getMedicine= async (req,res)=>{
const userID=req.user.id;
const medicines = await Medicine.find({ pharmacistID: userID }).exec();
res.json(medicines);
}

module.exports=getMedicine;