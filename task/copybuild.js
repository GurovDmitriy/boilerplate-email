const { src, dest } = require("gulp")

module.exports = function copybuild() {
  return src("dev/**/*").pipe(dest("build"))
}
