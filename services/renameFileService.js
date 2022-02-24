const directoryService = require("./directoryService")

async function coppyPdf(origin, dest, text) {
  console.log('origin, dest, text', origin, dest, text)
  return new Promise((resolve, reject) => {
    text = text.replace(/(\r\n|\n|\r)/gm,"");
    const cpf = text.split(' ')[0]
    const newFileName = `${cpf}-${text.replace(cpf + ' ', '')}-2021.pdf`
    const newFileNameDirecty = `./pdfRenamed/${newFileName}`
    const oldFileNameDirecty = `./PDFs/${origin}`
    console.log('newFileName', newFileName)
    directoryService.copyFile(oldFileNameDirecty, newFileNameDirecty)
  });
}

module.exports = { coppyPdf }