require("dotenv").config();
const Medicine=require('../models/medicine');

const addMedicine = async (req,res)=>{
    console.log(req.user);
    const body=req.body;
    const newMedicine = new Medicine({
        name: body.name,
        expiryDate:body.expiryDate,
        // image:body.image,
        timestamp:new Date(),
        pharmacistID:req.user.id
    });
    await newMedicine.save();
    res.send("New medicine added successfully!");
}

module.exports=addMedicine;