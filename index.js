const tesseract = require("node-tesseract-ocr")
const { pdf } = require("pdf-to-img")
const fs = require('fs')
const moveFrom = "./PDFs";
const moveTo = "./images";
const path = require('path');
const config = {
  lang: "eng",
  oem: 1,
  psm: 1,
  dpi:1200
}

init()
async function init() {

  const directoryPath = path.join(__dirname, 'PDFs');

  fs.readdir(directoryPath, async function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      await convert(element)
    }
  })
}
async function convert(file) {
  const image = await pdf('./PDFs/' + file, { scale: 20 })
  const fileImagName = file.replace('.pdf', '.png')
  const filetxtname = fileImagName.replace('.png', '.txt')
  console.log('IMAGE == M', file)

  let passou = false;
  for await (const page of image) {
    if (!passou) {
      passou = true
      console.log('pAGE', image[page])
      fs.writeFile('./images/' + fileImagName, page, callback);
    }
  }
  setTimeout(async () => {
    await tesseract
      .recognize('./images/' + fileImagName, config)
      .then((data) => {

        fs.writeFile('./dados/' + filetxtname, data, (err) => {
          if (err) throw err;
          console.log('O arquivo foi criado!');
        });
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, 500)
}
var callback = (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
}


