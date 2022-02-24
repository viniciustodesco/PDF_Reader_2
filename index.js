
const directoryService = require("./services/directoryService")
const ocrService = require("./services/ocrService")
const path = require('path');

init()
async function init() {
  const directoryPath = path.join(__dirname, 'PDFs');
  const files = await directoryService.listAllFilesInFolder(directoryPath);
  console.log(files)
  for (let index = 0; index < files.length; index++) {
      const element = files[index];
      await  ocrService.convert(element)
    }
}
