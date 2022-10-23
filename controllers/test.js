

const testConnection = async (req,res)=>{
    console.log("Request for lala");
    const username=req.body.userName;
    const password = req.body.password;
    res.send(`Password is : ${password}, name is ${username}`);
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