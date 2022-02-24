
const directoryService = require("./services/directoryService")
const ocrService = require("./services/ocrService")
const renameFileService = require("./services/renameFileService")
const path = require('path');

init()
async function init() {
  const directoryPath = path.join(__dirname, 'PDFs');
  const destPath = path.join(__dirname, 'pdfRenamed');
  const files = await directoryService.listAllFilesInFolder(directoryPath);
  for (let index = 0; index < files.length; index++) {
    const element = files[index];
    const text = await ocrService.convert(element)
    await renameFileService.coppyPdf(element, destPath, text)
  }
}
