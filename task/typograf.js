const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

module.exports = function typograf() {
  return src([
    "source/mjml/**/*.mjml",
    "!source/mjml/**/attributes.mjml",
    "!source/mjml/**/style-inline.mjml",
    "!source/mjml/**/style.mjml",
    "!source/mjml/**/*-attributes.mjml",
    "!source/mjml/**/*-inline.mjml",
    "!source/mjml/**/*-style.mjml",
  ])
    .pipe(
      $.typograf({
        locale: ["ru", "en-US"],
        htmlEntity: { type: "name" },
      })
    )
    .pipe(dest("source/mjml"))
}
