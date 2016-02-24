'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');

gulp.task('u', function () {
    return gulp.src('rok.css')
        .pipe(uncss({
            html: ['index.htm']
        }))
        .pipe(gulp.dest('./uncss/'));
});

gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
