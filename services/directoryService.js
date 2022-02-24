
const fs = require('fs')


async function listAllFilesInFolder(directoryPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, async function (err, files) {
            resolve(files);
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
        })
    });
}

async function writeFile(directoryPath, data) {
    fs.writeFile(directoryPath, data, (err) => {
        if (err) throw err;
        console.log('O arquivo foi criado!');
    });
}
async function copyFile(src, dest) {
    fs.copyFile(src,dest, (err) => {
        if (err) throw err;
        console.log('O arquivo foi movido!');
    });
}
async function deleteFile(directoryPath) {
    return new Promise((resolve, reject) => {
        fs.unlink(directoryPath, (err) => {
            if (err) throw err;
            resolve(directoryPath);
            console.log('O arquivo foi deletetado!');
        });
    });
}

async function renameFile(originPath, destPath) {
    return new Promise((resolve, reject) => {
        fs.rename(originPath,destPath ,  (err) => {
            if (err) throw err;
            resolve(originPath);
            console.log('O arquivo foi renomeado!');
        });
    });
}


module.exports = { listAllFilesInFolder, writeFile, deleteFile, renameFile, copyFile }
