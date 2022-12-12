const Medicine=require('../models/medicine');

const editMedicine = async (req,res)=>{
    const medID=req.body.id;
    const name=req.body.name;
    const expiryDate=req.body.expiryDate;
    // const timestamp=new Date();
    // const pharmacistID=req.user.id;
    const query={_id: medID};
    const med= await Medicine.findOne(query);
    console.log(med);
    if(med!=null){
        await Medicine.findOneAndUpdate(query,{$set: { name:name, expiryDate:expiryDate}});
        res.send("Medicine updated successfully!");
    }else{
        res.send("Sorry an error occured, please try again.");
    }
}

module.exports=editMedicine;



