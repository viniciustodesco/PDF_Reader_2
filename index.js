/*const tesseract = require("node-tesseract-ocr")

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize('./teste.png', config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })*/

  //import { fromPath } from "pdf2pic";
 /* const { fromPath } = require("pdf2pic");
  const { mkdirsSync } = require("fs-extra");
  const rimraf = require("rimraf");
  
  module.exports = () => {
    const specimen1 = "./teste.pdf";
  
    const outputDirectory = "./images";
    
    rimraf.sync(outputDirectory);
    
    mkdirsSync(outputDirectory);
    
    const baseOptions = {
      width: 2550,
      height: 3300,
      density: 330,
      savePath: outputDirectory
    };
    
    const convert = fromPath(specimen1, baseOptions);
    
    return convert(1);
  }

  import { fromPath } from "pdf2pic";

const options = {
  density: 100,
  saveFilename: "pdfconverted",
  savePath: "/images",
  format: "png",
  width: 600,
  height: 600
};
const storeAsImage = fromPath("./teste2.pdf", options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");
  return resolve;
}) .catch((error) => {
  console.log(error.message)
})

var PDFImage = require("pdf-image").PDFImage;
const fs = require("fs")
 
var pdfImage = new PDFImage("teste2.pdf");
pdfImage.convertPage(0).then(function (imagePath) {
  // 0-th page (first page) of the slide.pdf is available as slide-0.png
  fs.existsSync("teste2-0.png") // => true
}).catch((error) => {
  console.log(error)
});

const pdf = require("pdf2pic")
const options = {
  density: 100,
  saveFilename: "untitled",
  savePath: "./images",
  format: "png",
  width: 600,
  height: 600
};

const storeAsImage = pdf.fromPath("./teste2.pdf", options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");
  return resolve;
}).catch((error) => {
  console.log(error)
})*/

var PDFImage = require("pdf-image").PDFImage;
 
var pdfImage = new PDFImage("teste2.pdf");
pdfImage.convertPage(0).then(function (imagePath) {
  // 0-th page (first page) of the slide.pdf is available as slide-0.png
  fs.existsSync("/tmp/slide-0.png") // => true
  console.log(error)
});  console.log(error)