const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function image() {
  return src([
    "source/**/image/*.{jpg,png,svg,gif}",
    "!source/**/image/sprite*/*.{jpg,png,svg,gif}",
  ])
    .pipe($.destClean("dev"))
    .pipe($.changed("dev"))
    .pipe(
      $.image({
        optipng: ["-i 1", "-strip all", "-fix", "-o7", "-force"],
        pngquant: ["--speed=1", "--force", 256],
        zopflipng: ["-y", "--lossy_8bit", "--lossy_transparent"],
        jpegRecompress: [
          "--strip",
          "--quality",
          "medium",
          "--min",
          60,
          "--max",
          90,
        ],
        mozjpeg: ["-optimize", "-progressive"],
        gifsicle: ["--optimize"],
        svgo: ["--enable", "cleanupIDs", "--disable", "convertColors"],
      })
    )
    .pipe($.debug({ title: "image" }))
    .pipe(dest("dev"))
}
