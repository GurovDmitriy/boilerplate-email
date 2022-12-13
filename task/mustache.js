const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function mustache() {
  return src("dev/**/*.html")
    .pipe($.mustache("source/data/data.json", {}, {}))
    .pipe(dest("dev"))
}
