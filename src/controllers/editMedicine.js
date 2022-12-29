const Medicine=require('../models/medicine');

const editMedicine = async (req,res)=>{
    const medID=req.body.id;
    const name=req.body.name;
    const expiryDate=req.body.expiryDate;
    // const timestamp=new Date();
    const pharmacistID=req.body.pharmacistID;
    const query={_id: medID};
    const med= await Medicine.findOne(query);
    console.log(med);
    if(med!=null){
        await Medicine.findOneAndUpdate(query,{$set: { name:name, expiryDate:expiryDate}});
        const medicines = await Medicine.find({ pharmacistID: pharmacistID }).exec();
        res.json(medicines);
        // res.send("Medicine updated successfully!");
    }else{
        res.send("Sorry, please try again!");
    }
}

module.exports=editMedicine;



