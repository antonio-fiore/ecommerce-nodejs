const path = require('path')
const busboy = require('connect-busboy')

const FileUploader = {};

FileUploader.uploadProductImage = (req,res)=>{
    req.pipe()
}

module.exports=FileUploader;