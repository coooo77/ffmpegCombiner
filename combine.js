const { writeFile } = require('fs');
const { exec } = require('child_process')

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

writeFile(`./files/combine.bat`, command, error => console.log(error))

exec('start ' + `${__dirname}` + `\\files\\combine.bat`)

console.log('Done!')