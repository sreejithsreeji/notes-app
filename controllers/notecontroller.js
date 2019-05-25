const noteModel=require('../models/notes.js');
const createNote=(req,res)=>{

    const file={
        image:req.file.path,
        createdBy:req.userId
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

const updateNote=(req,res)=>{
    const noteId=req.params.id;
    const file={
        image:req.file.path
    }
    const note=Object.assign({},req.body,file);
    //console.log(req.file)
    noteModel.updateNote(noteId,note)
    .then((data)=>{
        if(data.changedRows>0){
            res.status(200)
            .send({
                status:true,
                code:201,
                message:'note updated successfully',
            })
        }else{
            res.status(200)
            .send({
                status:true,
                code:200,
                message:'nothing to update',
            })
        }
      
    })
    .catch(err=>{
        res.status(500).send(err)
    })
    
}

const deleteNote=(req,res)=>{
    noteModel.deleteNote(req.params.id)
    .then(response=>{
        if(response.affectedRows>0){
            res.send({
                status:true,
                code:200,
                message:'note deleted successfully',
            })

        }else{
            res.send({
                status:true,
                code:404,
                message:'not found'
            })
        }
    })
}

const getCreatedNotes=(req,res)=>{
    noteModel.getAllNotes(req.params.userId)
    .then(notes=>{
        res.send({
            status:true,
            code:200,
            message:'Notes created by you',
            result:notes.length>0?notes:[]
        })
        
    })
}

module.exports={
    createNote,
    updateNote,
    deleteNote,
    getCreatedNotes
}