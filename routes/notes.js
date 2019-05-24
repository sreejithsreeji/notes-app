const auth=require('../middlewares/auth.js');
const express=require('express');
const router=express.Router({mergeParams:true});
const multer=require('multer');
const uploadCtrl=require('../shared/upload.js');
const noteCtrl=require('../controllers/notecontroller.js');

router.use(auth.tokenvalidater);


const uploadConfig = {
    engine: multer,
    folder: "/uploads",
    fileType: "image/jpeg",
    maxSize: 1 * 1000 * 1000,
    field: "image"
  };
  const upload = uploadCtrl.upload(uploadConfig);
  
  let uploadFile = (req, res, next) => {
    upload(req, res, err => {
      if (err) {
        res.status(200).send({
          status: false,
          code: err.code,
          message:
            err.code == "LIMIT_FILE_SIZE"
              ? "File exceeds maximum limits..Max file size should be below 2MB"
              : err
        });
      } else {
        next();
      }
    });
  };


router.get('/',(req,res)=>{
    console.log(req.params)
})

router.post('/',uploadFile,(req,res)=>{

  noteCtrl.createNote(req,res);

})


module.exports=router;