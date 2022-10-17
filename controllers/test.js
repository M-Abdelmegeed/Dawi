

const testConnection = async (req,res)=>{
    console.log("Request for lala");
    const username=req.body.userName;
    const password = req.body.password;
    res.send(`Password is : ${password}, name is ${username}`);
}

posts=[
{   
    userName:'Kyle',
    title:'Post 1'
},
{
    userName:'7amo',
    title:"7amo's post"
}
]


const getPosts = async (req,res)=>{
try{
    res.json(posts.filter(post=> post.userName === req.user.name))
}catch(err){
    console.log(err);
    res.send("Invalid auth token");
}
}

module.exports={testConnection,getPosts};