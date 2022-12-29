const Medicine = require("../models/medicine");


const deleteMedicine = async(req,res)=>{
const id=req.body.id;
const pharmacistID=req.body.pharmacistID;
Medicine.deleteOne({ _id: id}, function (err) {
    if (err) return handleError(err);
  });
  const medicines = await Medicine.find({ pharmacistID: pharmacistID }).exec();
  res.json(medicines);
}

module.exports=deleteMedicine;