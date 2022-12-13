const { src, dest } = require('gulp')
const path = require('path')
const $ = require("gulp-load-plugins")()

module.exports = function minify() {
    return src(
        "build-min",
        "build-test"
    )
    .pipe(
      $.flatmap((stream, dir) => {
        console.log(path.relative(dir))
        console.log(`${dir}/*.html`)
        return src(`${dir}/*.html`)
        .pipe(
          $.htmlmin({
            collapseWhitespace: true,
            minifyCSS: true
          })
          .pipe(
            dest(dir)
          )
        )
      })
    )
}
