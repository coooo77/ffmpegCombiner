const fs = require('fs');

const {
  readFilesAndSortThem,
  listMaker
} = require('./util/helper')

const {
  dirLocation,
  fileNameClipper
} = require('./config/config')

const fileNames = readFilesAndSortThem(dirLocation, fileNameClipper)

listMaker(dirLocation,fileNames)

console.log('Done!')