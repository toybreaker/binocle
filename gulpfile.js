'use strict';
// GULP here process sass and enable browsersync
// sourcemap handled automagically by gulp-ruby-sass
// images task to optimize images.

// w/watch function now... and it works!!!!!
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');

var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var reload       = browserSync.reload;

// Reponsive sizing
gulp.task('images', function () {
  return gulp.src('./_src/images/**/*')
    .pipe(responsive({
      '*.jpg': [{
        width: 320,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-320'
        }
      }, {
        width: 640,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        width: 1024,
        quality: 51,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        width: 1680,
        quality: 71,
        progressive: true,
        rename: {
          suffix: '-1680'
        }
      }]
    }))
    .pipe(gulp.dest('./assets/p'));
});

// Compress jpegs
gulp.task('imagemin', function () {
  return gulp.src('./assets/p/*.jpg')
      pipe(imagemin({
        progressive: true
      }))
      .pipe(gulp.dest('./assets/p/min'));
});



// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync({
    proxy: "binocle.dev"
  });

  gulp.watch("_sass/*.scss", ['sass']);
  gulp.watch("*.css").on('change', reload);
  gulp.watch("*.htm").on('change', reload);
  gulp.watch("*.js").on('change', reload);
});


gulp.task('sass', function () {
  return gulp.src('_sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('assets/css'))// Write CSS (& Source maps)?
      .pipe(filter('**/*.css')) // Filtering stream to only css files
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', ['serve']);
