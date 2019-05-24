const JOI=require('joi');

const schema={
    register:JOI.object().keys({
        firstname:JOI.string()
        .regex(/^[A-Za-z]{3,20}/) 
        .required(),
        lastname:JOI.string()
        .regex(/^[A-Za-z]{1,20}/) 
        .required(),
        email:JOI.string().email({ minDomainSegments: 2 }).min(3).required(),
        password:JOI.string()
        .min(8).
        regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/)
        .required(),
        address:JOI.string()
        .required()
    })
}

module.exports={
    schema
}