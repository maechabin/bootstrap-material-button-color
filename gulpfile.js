'use strict';

var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/color/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
        prefix: "cb-materialbtn-",
    }))
    .pipe(gulp.dest('./dist/color'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/color/*.scss', ['sass']);
});
