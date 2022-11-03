const medicine = require("../models/medicine");


const deleteMedicine = async(req,res)=>{
// const userID=req.user.id;
// const medicineName=req.body.medicineName;
const id=req.body.id;
medicine.deleteOne({ _id: id}, function (err) {
    if (err) return handleError(err);
    res.send("Medicine deleted successfully!");
  });
}

module.exports=deleteMedicine;