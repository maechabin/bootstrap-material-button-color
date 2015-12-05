'use strict';

var gulp = require('gulp');
var header = require("gulp-header");
var rename = require("gulp-rename");
var sass = require('gulp-sass');

var pkg = require("./package.json");
var version = pkg.version;
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join("\n");

gulp.task('sass:color', function () {
  gulp.src('./src/color/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
        prefix: "cb-materialbtn-",
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('./dist/color'));
});

gulp.task('sass:all', function () {
  gulp.src('./src/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(rename('cb-materialbtn.css'))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('./dist'))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename('cb-materialbtn.min.css'))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('./dist'))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(rename('cb-materialbtn.' + version + '.min.css'))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass:all']);
});
