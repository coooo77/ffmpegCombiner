const fs = require('fs');

const {
  readFilesAndSortThem,
  listMaker,
  cmdCommandMaker
} = require('./util/helper')

const {
  fileNameClipper
} = require('./config/config')

const fileNames = readFilesAndSortThem('./files', fileNameClipper)

listMaker('./files', fileNames)

const command = cmdCommandMaker(__dirname, fileNames)

console.log('Done!')