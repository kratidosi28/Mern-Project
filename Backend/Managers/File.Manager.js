const fs = require('fs');
const path = require('path');
const multer = require('multer');

// PATH DATA OF WHERE TO STORE FILES
const { PATHS } = require("../Configs/constants");
const { IMAGES } = PATHS;

// SAVE THIS TEMP FOLDER PATH ONE TIME
let tempPath = {
    original: path.join(__dirname, "./../Assets/Images" + IMAGES.TEMP + IMAGES.ORIGINAL + "/"),
    thumb: path.join(__dirname, "./../Assets/Images" + IMAGES.TEMP + IMAGES.THUMB + "/")
}
tempPath[IMAGES.ORIGINAL] = tempPath.original
tempPath[IMAGES.THUMB] = tempPath.thumb;


module.exports = class FileManager {

    //Multer setup
    static upload() {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                console.log("img", tempPath.original);
                cb(null, tempPath.original)
            },
            filename: function (req, file, cb) {
                let fileName = FileManager.getNameFormFileName(file.originalname)
                if (!req.body[file.fieldname]) {
                    req.body[file.fieldname] = []
                }
                req.body[file.fieldname].push(fileName)
                cb(null, fileName)
            }
        })

        return multer({ storage })
    }

    static getNameFormFileName(fileName) {
        return fileName.split('.')[0].replace(/[^A-Z0-9]/ig, "_") + '_' + Date.now() + '_' + Math.floor(Math.random() * 999) + 99 + path.extname(fileName);
    }

    //Get url from cloud
    static getUrl(pathName, fileName) {
        const key = pathName + "/" + fileName
        return `http://localhost:5000/Images/Temp${key}`
    }

}