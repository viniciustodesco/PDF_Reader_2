const tesseract = require("node-tesseract-ocr")
const {pdf} = require("pdf-to-img")
const fs = require('fs')
const moveFrom = "./PDFs";
const moveTo = "./images";
const path = require( 'path' );
const config = {
  lang: "POR",
  oem: 1,
  psm: 3,
}

/*async function init() {
  
  const image = await pdf("./PDFs/slide.pdf",{scale:15})
      console.log(image)
          for await (const page of image) {
              console.log(page)
              fs.writeFile('file.png',page, callback);
  }
          await tesseract
                  .recognize('./file.png', config)
                  .then((text) => {
                    console.log(text)
          })
  .catch((error) => {
            console.log(error.message)
  })
}
init()

var callback = (err) => {
          if (err) throw err;
          console.log('It\'s saved!');
}


async function init(){
  try {
      const files = await fs.promises.readdir( moveFrom );

      for( const file of files ) {
          const fromPath = path.join( moveFrom, file );
          const convertTo = path.join( convertTo, file );
          const stat = await fs.promises.stat( fromPath );

          if( stat.isFile() )
              console.log( "'%s' is a file.", fromPath );
          else if( stat.isDirectory() )
              console.log( "'%s' is a directory.", fromPath );          
  
            const image = await pdf(fromPath,{scale:15})
                console.log(image)
                    for await (const page of image) {
                        console.log(page)
                        fs.writeFile(convertTo,page, callback);
            }
                    await tesseract
                            .recognize(convertTo, config)
                            .then((text) => {
                              console.log(text)
                    })
            .catch((error) => {
                      console.log(error.message)
            })
          }
          init()

          var callback = (err) => {
                    if (err) throw err;
                    console.log('It\'s saved!');
            }
      }catch(err){
        console.log(err);
      }} */


const directoryPath = path.join(__dirname, 'PDFs');
async function init() {  
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
     files.forEach(function (file) {

          const image = await pdf('./PDFs/' + file,{scale:15})
              console.log(image)
                  for await (const page of image) {
                      console.log(page)
                      fs.writeFile('./images/'+ image ,page, callback);
          }
                  await tesseract
                          .recognize('./images/'+ image, config)
                          .then((text) => {
                            console.log(text)
                  })
          .catch((error) => {
                    console.log(error.message)
          })
        

    });
})}
init()
        
var callback = (err) => {
          if (err) throw err;
          console.log('It\'s saved!');
}