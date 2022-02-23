const tesseract = require("node-tesseract-ocr")
const { pdf } = require("pdf-to-img")
const fs = require('fs')
const moveFrom = "./PDFs";
const moveTo = "./images";
const path = require('path');
const config = {
  lang: "eng",  oem: 1,  psm: 3,DPI:1200}
const { asyncParallelForEach, BACK_OFF_RETRY } = require('async-parallel-foreach')


init()
async function init() {

  const directoryPath = path.join(__dirname, 'PDFs');

  fs.readdir(directoryPath, async function (err, files) {
    const parallelLimit = 5
    const results = await asyncParallelForEach(files, parallelLimit, async (element, index) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    console.log('element   ',element )
      const fileImagName = element.replace('.pdf', '.png')
      const filetxtname = fileImagName.replace('.png', '.txt')
        await tesseract
          .recognize('./images/' + fileImagName, config)
          .then((data) => {
    
            fs.writeFile('./dados/' + filetxtname, data, (err) => {
              if (err) throw err;
              console.log('O arquivo foi criado!');
            });
          })
  }, { 
    times: 10,  // try at most 10 times
    interval: BACK_OFF_RETRY.exponential()
  })
})
}