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



fs.readdir(`${basePath}/images/`, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    
    //listing all files using forEach
    files.forEach(function (file) {
        if( file === '.DS_Store')
            return;
        baseUrl = upload_images_to_cloudinary(`${basePath}/images/${file}`)
    });
});


const upload_images_to_cloudinary = (image_local_file) => {
    cloudinary.uploader.upload(image_local_file, {folder: "BabyBots", content: [image_local_file] }, (error, result)=>{
        if( result ){            
            let json_path = image_local_file.replace('.png','').replace('/images', '/json')
            const jsonFile = JSON.parse(fs.readFileSync(json_path));
            jsonFile.image = result.url
            jsonFile.file_url = result.url
            fs.writeFileSync(json_path, JSON.stringify(jsonFile, null, 2));   
            console.log(result)         
        }
        if( error ){
            console.log('error upload image to cloudinary')
        }        
        return result
    })
  }
