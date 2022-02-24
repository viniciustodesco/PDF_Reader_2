const directoryService = require("./directoryService")

async function coppyPdf(origin, dest, text) {
  console.log('origin, dest, text', origin, dest, text)
  return new Promise(async (resolve, reject) => {
    console.log('===================>', text)
    text = text.replace(/(\r\n|\n|\r)/gm, "");
    const cpf = text.split(' ')[0]
    console.log('===================>', text)
    const newFileName = `${cpf}-${text.replace(cpf + ' ', '')}-2021.pdf`
    const newFileNameDirectory = `./pdfRenamed/${newFileName}`
    const oldFileNameDirectory = `./PDFs/${origin}`
    console.log('newFileName', newFileName)
    await directoryService.copyFile(oldFileNameDirectory, newFileNameDirectory)
    setTimeout(async () => {
      resolve({ cpf, fileName: newFileName })
    });
  }, 500);
}

module.exports = { coppyPdf }