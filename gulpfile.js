// Gulpfile developed from:
// https://github.com/zellwk/gulp-starter-csstricks
// https://github.com/roots/sage
// http://justinmccandless.com/post/a-tutorial-for-getting-started-with-gulp

// See README for more help and info

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');

// Development Tasks 
// -----------------


gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in main.css.source/styles and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Passes it through gulp-sass and deal with errors
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('css/')); // Outputs it in the css folder
})

gulp.task('sass:production', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in main.css.source/styles and children dirs
    .pipe(sass({ outputStyle: 'compressed' })) // Passes it through a gulp-sass
    .pipe(gulpIf('*.css', cssnano())) // Minify css
    .pipe(gulp.dest('dist/')); // Outputs it in the css folder
})

// Watchers
gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass']);
})


// Build Sequences
// ---------------

gulp.task('clear', function (done) {
  return cache.clearAll(done);
})

gulp.task('default', function(callback) {
  runSequence(['sass', 'watch'],
    callback
  )
})

gulp.task('build:production', function(callback) {
  runSequence(
    ['sass:production'],
    callback
  )
})
