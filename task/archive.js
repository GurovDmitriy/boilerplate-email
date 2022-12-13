const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function archive() {
  const folderNameArray = process.cwd().split(/[\\|\/]/)
  const folderName = folderNameArray[folderNameArray.length - 1]
  return src("build/**")
    .pipe(
      $.zip(folderName + ".zip", {
        compress: false,
      })
    )
    .pipe(dest("build"))
}
