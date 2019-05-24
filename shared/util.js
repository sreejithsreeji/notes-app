const crypto=require('crypto');

const getHash=(data)=>{
    const SECREAT='Manchester@13';
    return crypto.createHmac('sha256',SECREAT)
    .update(data.toString())
    .digest('hex')
}

module.exports={
    getHash
}