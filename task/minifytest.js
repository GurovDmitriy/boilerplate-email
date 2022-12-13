const { src, dest } = require('gulp');
const $ = require("gulp-load-plugins")()

module.exports = function minify() {
  return src('build-test/*.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(dest('build-test-min'))
};
