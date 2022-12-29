require("dotenv").config();
const Medicine=require('../models/medicine');

const addMedicine2 = async (req,res)=>{
    console.log(req.user);
    const userID=req.user.id;
    const body=req.body;
    const newMedicine = new Medicine({
        name: body.name,
        expiryDate:body.expiryDate,
        timestamp:new Date(),
        pharmacistID:body.id
    });
    await newMedicine.save();
    const medicines = await Medicine.find({ pharmacistID: userID }).exec();
    res.json(medicines);
    // res.send("New medicine added successfully!");
}
// Kimos comment

module.exports=addMedicine2;