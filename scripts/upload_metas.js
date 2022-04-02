const cloudinary = require('cloudinary').v2
const fs = require('fs');
const path = require('path');
const CLOUDINARY_URL='cloudinary://998958793215586:kdk4NwnXAo_bXad8sg-yVqOJG78@df2comv35'
const CLOUDINARY_API_KEY ='998958793215586'
const CLOUDINARY_API_SECRET ='kdk4NwnXAo_bXad8sg-yVqOJG78'
const CLOUDINARY_NAME = 'df2comv35'

  cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY, 
      api_secret: CLOUDINARY_API_SECRET,
      secure: true
  })


const basePath = process.cwd()+'/Assets'


fs.readdir(`${basePath}/json/`, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    //listing all files using forEach
    files.forEach(function (file) {
        if( file === '.DS_Store')
            return;
        baseUrl = upload_jsons_to_cloudinary(`${basePath}/json/${file}`)
        //console.log(`${basePath}/json/${file}`)
    });
});

const upload_jsons_to_cloudinary = (json_local_file) => {

    cloudinary.uploader.upload(json_local_file, {folder: "BabyBots", use_filename: true, unique_filename: false , resource_type: "auto" }, (error, result)=>{
        console.log(json_local_file)
        if( result ){
            console.log(result)
        }
        if( error ){
            console.log('error upload json to cloudinary')
        }        
        return result
    })
  }
