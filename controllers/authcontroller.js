const userModel=require('../models/user.js');
const register=(req,res)=>{
    const user=req.body;
    //console.log(user);
    userModel.register(user)
    .then(data=>{
        if(data){
      
            res.status(201)
            .send({
                status:true,
                code:201,
                message:'user registartion completed',
                token:data.token
            })
        }else{
            res.status(409).send({
                status:false,
                code:409,
                message:'user already exists'
            });
        }
    })
    .catch(err=>{
        res.status(500).send('internal server error');
    })
}

const login=(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;

    userModel.loginManager(email,password)
    .then(data=>{
        //console.log(data)
        if(data.length>0 ){
            res.status(200)
            .send({
                status:true,
                code:201,
                message:'login successfull',
                token:data[0].token
            })
        }else{
            res.status(400).send({
                status:false,
                code:400,
                message:'invalid credentils'
            });
        }
    })
}

const logout=(req,res)=>{
    userModel.logout(req.query.email)
    .then(data=>{
        res.status(200).send({
            status:true,
            code:200,
            message:'logout sucessfully'
        });
    })
}

module.exports={
    register,
    login,
    logout
}