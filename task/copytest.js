const { src, dest } = require("gulp")

module.exports = function copytest() {
  return src("build/**/*.html").pipe(dest("build-test"))
}
