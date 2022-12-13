const { src, dest } = require("gulp")

module.exports = function copyimage() {
  return src("dev/image/*").pipe(dest("build-min/image"))
}
