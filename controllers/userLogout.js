

const userLogout = async(req,res)=>{
    const authHeader=req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    res.send("Logout successfull!").sendStatus(204);
}

module.exports=userLogout;