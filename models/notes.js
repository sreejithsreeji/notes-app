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

module.exports={
    createNote
}