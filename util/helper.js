const fs = require('fs');

module.exports = {
  readFilesAndSortThem(dirLocation, fileNameClipper) {
    const fileNames = {}
    // Question:會不會有名稱排序的問題?
    fs.readdirSync(dirLocation).forEach(file => {
      if (file.indexOf('.txt') === -1) {
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
  }
}