
const path = require('path');
const directoryService = require("./services/directoryService")
const fileService = require("./services/fileService")
const securePdfService = require("./services/securePdfService")
const { v4: uuidv4 } = require('uuid');
const ltrim = require('ltrim');

init()
async function init() {
    const paths = path.join(__dirname, 'pdfRenamed/');
    const dest = path.join(__dirname, 'pdfRenamed/final/');
    const files = await directoryService.listAllFilesInFolder(paths);
    let arrObj = []
    for (const file of files) {
        const fullName = file.replace('-2021', '')

        const cpf = fullName.replace(/\D/g, "");
        const name = ltrim((file.split(cpf)[1]).replace(/[^a-zA-Z ]/g, "").replace('pdf', ""))
        console.log('cpf', cpf)
        console.log('name', name)
        const uuidName =  uuidv4() + '.pdf'
        if(cpf.length != 11) {
            console.log('ERROR', file)
        }else {
            await directoryService.copyFile(paths + file,dest + uuidName)
        
            await securePdfService.encrypt(paths, file, cpf.substring(0, 5), uuidName)
    
            arrObj.push({
                fileName: uuidName,
                url: 'https://premmiar.s3.us-east-2.amazonaws.com/'+ uuidName,
                cpf,
                name
            })
        }
    }
    await fileService.createFile('result', arrObj)
}

