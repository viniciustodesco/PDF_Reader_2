const muhammara = require('muhammara');

async function encrypt(path, file, password, newName) {
    
    const name = newName ?? file
    const outputFilePath = path + '/PDFPass2/' + name
    try {
        const pass = 'er2smHVuhanGK3wZ'
        const readStream = new muhammara.PDFRStreamForFile(path + '\\' + file);
        const writeStream = new muhammara.PDFWStreamForFile(outputFilePath);
        muhammara.recrypt(readStream, writeStream, {
            userPassword: password,
            ownerPassword: pass,
            userProtectionFlag: 4
        });
        return outputFilePath;
    } catch (error) {
        console.log('-===>', error);
        if (error.code = 'ENOENT') {
            await encrypt(path, file, password)
        }else {
            return false;
        }
    }
}






module.exports = { encrypt }
