const User = require('../models/User');

const testConnection = async (req,res)=>{
    // await User.deleteMany({ firstName: "Lala"});
    // res.send("Records deleted successfully!");
    // const firstName=req.body.firstName;
    // const person= await User.findOne({firstName:firstName}).exec();
    // console.log(person.image);
    // res.json(person.image);
}

posts=[
{   
    firstName:'Lala',
    title:"Lala's post"
},
{
    firstName:'7amo',
    title:"7amo's post"
}
]


const getPosts = async (req,res)=>{
try{
    res.json(posts.filter(post=> post.firstName === req.user.firstName))
}catch(err){
    console.log(err);
    res.send("Invalid auth token");
}
}

module.exports={testConnection,getPosts};