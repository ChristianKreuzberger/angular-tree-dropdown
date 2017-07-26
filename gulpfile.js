var gulp = require('gulp');
var gulpUglify = require('gulp-uglify');
var gulpRename = require('gulp-rename');
var gulpCleanCss = require('gulp-clean-css');

var destinationFolder = "dist/";

var src_js_file = "src/angular-uib-tree-dropdown.js";
var src_css_file = "src/angular-uib-tree-dropdown.css";


gulp.task('build', ['minify_js', 'minify_css', 'copy']);

gulp.task('minify_js', function() {
    return gulp.src(src_js_file)
        .pipe(gulpUglify())
        .pipe(gulpRename({ suffix: '.min' }))
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('minify_css', function() {
    return gulp.src(src_css_file)
        .pipe(gulpCleanCss({compatibility: 'ie8'}))
        .pipe(gulpRename({ suffix: '.min' }))
        .pipe(gulp.dest(destinationFolder));
});

gulp.task('copy', function() {
    return gulp.src([src_js_file, src_css_file])
        .pipe(gulp.dest(destinationFolder));
});