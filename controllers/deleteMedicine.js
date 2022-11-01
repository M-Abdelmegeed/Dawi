const medicine = require("../models/medicine");


const deleteMedicine = async(req,res)=>{
const userID=req.user.id;
const medicineName=req.body.medicineName;
medicine.deleteOne({ name: medicineName,pharmacistID:userID }, function (err) {
    if (err) return handleError(err);
    res.send("Medicine deleted successfully!");
  });
}

module.exports=deleteMedicine;