const noteModel=require('../models/notes.js');
const createNote=(req,res)=>{

    const file={
        image:req.file.path
    }
    const note=Object.assign({},req.body,file);
    //console.log(req.file)
    noteModel.createNote(note)
    .then(()=>{
        res.status(201)
        .send({
            status:true,
            code:201,
            message:'A new note is created',
        })
    })
    .catch(err=>{
        res.status(500).send(err)
    })
    
}

module.exports={
    createNote
}