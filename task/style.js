const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()
const mjmlEngine = require("mjml")

module.exports = function style() {
  return src("source/mjml/*.mjml")
    .pipe(
      $.mjml(mjmlEngine, {
        minify: false,
        validationLevel: "strict",
      })
    )
    .pipe(dest("dev"))
}
