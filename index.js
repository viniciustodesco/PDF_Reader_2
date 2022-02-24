const { asyncParallelForEach, BACK_OFF_RETRY } = require('async-parallel-foreach')
const directoryService = require("./services/directoryService")
const ocrService = require("./services/ocrService")
const renameFileService = require("./services/renameFileService")
const securePdfService = require("./services/securePdfService")
const path = require('path');

init()
async function init() {
  const directoryPath = path.join(__dirname, 'PDFs');
  const destPath = path.join(__dirname, 'pdfRenamed');
  const files = await directoryService.listAllFilesInFolder(directoryPath);
  const parallelLimit = 50
  const results = await asyncParallelForEach(files, parallelLimit, async (element, index) => {
    console.log(index + ' de ' + files.length + ' INICIO' )
    const text = await ocrService.convert(element)
    const data = await renameFileService.coppyPdf(element, destPath, text)
    await securePdfService.encrypt(destPath, data.fileName, data.cpf.substring(0, 5))
    console.log(index + ' de ' + files.length + ' FIM' )
  }, {
    times: 10,  // try at most 10 times
    interval: BACK_OFF_RETRY.exponential()
  })
}
