var jsonfile = require('jsonfile');

async function createFile(prefix, data) {
    try {

        return new Promise((resolve, reject) => {
                jsonfile.writeFile(`./${prefix}.json`, data, { spaces: 4 }, (err) => {
                    if (err) {
                        console.log(`Error writing file: ${err}`);
                        reject(`Error writing file: ${err}`);
                    } else {
                        resolve('The promised task was performed successfully.');
                    }
                });
        });
    } catch (error) {
        console.log('ERROR ARQUIVO ===->', error)
    }
}
module.exports = { createFile }
