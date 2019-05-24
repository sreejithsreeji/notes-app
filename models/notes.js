const con=require('../dbconfig.js');
const moment=require('moment');


const createNote=(note)=>{
    const data={
        title:note.title,
        text:note.text,
        image:note.image?note.image:null,
        created_by:note.createdBy,
        created_at:moment().format(),
        updated_at:moment().format()
    }

    const sql='insert into notes set ?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[data],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

const updateNote=(noteId,note)=>{
    const sql='update notes set ? where id=?';
    const data={
        title:note.title,
        text:note.text,
        image:note.image?note.image:null,
        created_by:note.createdBy,
        created_at:moment().format()
    }
    return new Promise((resolve,reject)=>{
        con.query(sql,[data,noteId],(err,rows,fields)=>{
            if(err) reject(err);
            //console.log(rows)
            resolve(rows);
        })
    })
}

const deleteNote=(noteId)=>{
    const sql='delete from notes where id=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[noteId],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })

}

const getAllNotes=(userId)=>{
    const sql='select * from notes where created_by=?';
    return new Promise((resolve,reject)=>{
        con.query(sql,[userId],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        })
    })
}

module.exports={
    createNote,
    updateNote,
    deleteNote,
    getAllNotes
}