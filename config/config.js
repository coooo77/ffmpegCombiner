module.exports = {
  fileNameClipper: '_',
  forceUnsafeFileNameToCombine: true,
  suffix: 'combined',
  deleteOriginalFilesAfterCombing: false,
  muteConfig: {
    muteAllCombinedFiles: true,
    blockList: ['userName']
  }
}

//如果ffmpeg沒有按裝在全域的情況下，資料夾位置dirLocation需要有ffmpeg.exe才能順利執行合併檔案