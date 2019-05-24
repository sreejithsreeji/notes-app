const express=require('express');
const router=express.Router();
const authController=require('../controllers/authcontroller.js');

router.post('/register',(req,res)=>{
    console.log('registration routes');
    authController.register(req,res);
});



router.post('/login',(req,res)=>{
    console.log('login routes')
    authController.login(req,res);
})


module.exports=router;