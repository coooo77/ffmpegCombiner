const fs = require('fs');
const {
  suffix,
  forceUnsafeFileNameToCombine
} = require('../config/config')

module.exports = {
  readFilesAndSortThem(dirLocation, fileNameClipper) {
    const fileNames = {}
    // Question:會不會有名稱排序的問題?
    fs.readdirSync(dirLocation).forEach(file => {
      if (file.indexOf('.mp4') !== -1) {
        const fileName = file.split(fileNameClipper)
        const name = fileName[0]
        if (!fileNames[name]) {
          fileNames[name] = [file]
        } else {
          fileNames[name].push(file)
        }
      }
    });

    return fileNames
  },
  listMaker(dirLocation, fileNames) {
    //開始製作合併需要的list
    for (userName in fileNames) {
      let text = ''
      for (files of fileNames[userName]) {
        text += `file '${files}'\n`
      }
      fs.writeFileSync(`${dirLocation}/${userName}.txt`, text)
    }
  },
  cmdCommandMaker(dirname, fileNames) {
    let command = `cd ${dirname}\\files\n`
    for (name in fileNames) {
      const combinedFileName = fileNames[name][0].replace('.mp4', `_${suffix}.mp4`)
      const combineSetting = forceUnsafeFileNameToCombine ? '-safe 0' : ''
      command += `ffmpeg -f concat ${combineSetting} -i ${name}.txt -c copy ${combinedFileName}\n`
    }
    return command
  }
}