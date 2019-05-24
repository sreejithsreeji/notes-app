const schemaObject=require('../validaters/user-schema.js');
const joi=require('joi');

let validate=(req,res,next)=>{
    
    const userSchema=schemaObject.schema.register;
       joi.validate(req.body,userSchema,(err,result)=>{
        if(err){
            res.status(400).send({
                code:400,
                message:err.details[0].message
            })
        }else{
            next()
        }
    
       });
      
    }

    module.exports={
        validate
    }