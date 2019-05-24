const user=require('../models/user.js');
const moment=require('moment');

const tokenvalidater=(req,res,next)=>{
    const token=req.params.token;
    if(token){
        user.getTokenDetails(token)
        .then(tokenDetails=>{
            if(tokenDetails.length>0){
                if(isTokenValid(tokenDetails[0].token_created_at)){
                    console.log('token valid');
                    next();

                }else{
                    console.log('token is expired');
                    res.status(403)
                    .send({
                        code:403,
                        message:'resource forbidden'
                    })
                }
                
            }else{
                res.status(403).send({
                    code:403,
                    message:'resource forbidden'
                })
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }else{
        console.log('token is not present');
        res.status(400).send({
            code:400,
            message:'Bad request'
        })
    }

    const isTokenValid=(createdTime)=>{
        const duration=120;
        const now=moment().valueOf();
        const expiredTime=moment(createdTime).add(duration,'minutes').valueOf();

        if(now<expiredTime){
            return(true)
        }else{
            return(false)
        }
    }
}

module.exports={
    tokenvalidater
}