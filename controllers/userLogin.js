require('dotenv').config()
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');


const userLogin = async (req,res)=>{
    // Authenticate User
    const userName=req.body.userName;
    const user = {name:userName};
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken:accessToken});
}

const authenticateToken = (req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
        // {expiresIn:'15s'},
        (err, user)=>{
        if(err) return res.send("Invalid token").sendStatus(403);
        req.user=user;
        next();
    })
}

module.exports={userLogin,authenticateToken};