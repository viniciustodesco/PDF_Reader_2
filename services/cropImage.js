var PNGCrop = require('png-crop');
const directoryService = require("./directoryService")

var config1 = { width: 2750, height: 55, top: 830, left: 50 };

async function cropImage(fileName) {
    try {
        return new Promise((resolve, reject) => {
            const tempFileName = fileName.replace('.png', '_NEW.png');
                PNGCrop.crop(fileName, tempFileName, config1, async function (err) {
                    await directoryService.deleteFile(fileName);
                    await directoryService.renameFile(tempFileName, fileName);
                    resolve(fileName);
                    console.log("Image cropped and saved");
                });
                console.log('O arquivo foi deletetado!');
        });

    } catch (error) {
        console.log(error)
    }
}

module.exports = { cropImage }
