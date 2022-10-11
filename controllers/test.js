

const testConnection = async (req,res)=>{
    console.log("Request for lala");
    const username=req.body.userName;
    const password = req.body.password;
    res.send(`Password is : ${password}, name is ${username}`);
}

module.exports=testConnection;