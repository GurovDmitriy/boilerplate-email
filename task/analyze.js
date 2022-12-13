const { src } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function analyze() {
return src("./build/**/*")
    .pipe($.sizereport({
        "index.html": {
            maxSize: 100000,
        },
    }));
}
