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
gulp.task('jpg', function () {
  return gulp.src('./_src/images/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        //nexus5
        width: 640,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        //ipad
        width: 1024,
        quality: 51,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }]
    }))
    .pipe(gulp.dest('./assets/p'));
});

gulp.task('tif', function () {
  return gulp.src('./_src/images/*.tif')
    .pipe(responsive({
      '*.tif': [{
        //nexus5
        width: 640,
        quality: 51,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640',
          extname: '.jpg'
        }
      }, {
        //ipad
        width: 1024,
        quality: 51,
        progressive: true,
        rename: {
          suffix: '-1024',
          extname: '.jpg'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 44,
        progressive: true,
        rename: {
          suffix: '-1920',
          extname: '.jpg'
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
