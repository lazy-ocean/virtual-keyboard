const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const del = require("del");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
const inlinesource = require("gulp-inline-source");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const combine = require("gulp-scss-combine");
const rename = require("gulp-rename");
const csso = require("gulp-csso");

gulp.task("css", () =>
  gulp
    .src("src/sass/main.scss")
    .pipe(combine())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("build"))
);

gulp.task("sass", () =>
  gulp
    .src("src/sass/main.scss")
    .pipe(combine())
    .pipe(sass())
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("build"))
);

gulp.task("server", () => {
  server.init({
    server: "build",
    index: "index.html",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("src/sass/**/*.scss", gulp.series("css", "sass", "refresh"));
  gulp.watch("src/*.html", gulp.series("copy", "refresh"));
  gulp.watch("src/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", (done) => {
  server.reload();
  done();
});

gulp.task("html", () =>
  gulp
    .src("src/*.html")
    .pipe(posthtml([include()]))
    .pipe(
      inlinesource({
        rootpath: "build/",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
);

gulp.task("copy", () => gulp.src("src/*.html").pipe(gulp.dest("build")));

gulp.task("img", () => gulp.src("src/img/**/*").pipe(gulp.dest("build/img")));

gulp.task("js", () =>
  browserify({
    entries: "./src/js/index.js",
  })
    .transform("babelify", {
      presets: ["@babel/preset-env"],
    })
    .bundle()
    .pipe(source("./index.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("build"))
);

gulp.task("clean", () => del("build"));

gulp.task("assets", gulp.series("clean", "js", "css", "img"));
gulp.task("build", gulp.series("assets", "html"));
gulp.task("start", gulp.series("assets", "copy", "server"));