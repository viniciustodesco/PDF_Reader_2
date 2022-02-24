
const fs = require('fs')
const tesseract = require("node-tesseract-ocr")
const { pdf } = require("pdf-to-img")
const directoryService = require("./directoryService")
const cropImageService = require("./cropImage")


const config = {
    lang: "eng",
    oem: 1,
    psm: 1,
    dpi: 1200
}
var callback = (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
}

async function convert(file) {
    const image = await pdf('./PDFs/' + file, { scale: 20 })
    const fileImagName = file.replace('.pdf', '.png')
    const filetxtname = fileImagName.replace('.png', '.txt')
    const fileNamePath = './images/' + fileImagName;
    let passou = false;

    for await (const page of image) {
        if (!passou) {
            passou = true
            fs.writeFile(fileNamePath, page, callback);
        }
    }
    await cropImageService.cropImage(fileNamePath)
    setTimeout( async () => {
        await tesseract
            .recognize('./images/' + fileImagName, config)
            .then((data) => {
                directoryService.writeFile('./dados/' + filetxtname, data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, 500);

}




module.exports = { convert }
