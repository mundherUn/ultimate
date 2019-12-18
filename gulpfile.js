var gulp = require("gulp"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass"),
    prefixer = require("gulp-autoprefixer"),
    pug = require("gulp-pug"),
    livereload = require("gulp-livereload"),
    maps = require("gulp-sourcemaps"),
    minify = require("gulp-minify");
// HTML Task
gulp.task("html", function() {
    return gulp
        .src("stage/html/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("dist"))
        .pipe(livereload());
});
// JS CSS
gulp.task("css", function() {
    return gulp
        .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
        .pipe(maps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(prefixer())
        .pipe(concat("main.css"))
        .pipe(maps.write("."))
        .pipe(gulp.dest("dist/css"))
        .pipe(livereload());
});
// JS Task
gulp.task("js", function() {
    return gulp
        .src("stage/js/*.js")
        .pipe(concat("main.js"))
        .pipe(minify())
        .pipe(gulp.dest("dist/js"))
        .pipe(livereload());
});
// Watch Tasks
gulp.task("watch", function() {
    // require("./server.js");
    // livereload.listen();
    gulp.watch("stage/html/**/*.pug", ["html"]);
    gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ["css"]);
    gulp.watch("stage/js/*.js", ["js"]);
});