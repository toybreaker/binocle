'use strict';
// GULP here process sass and enable browsersync
// sourcemap handled automagically by gulp-ruby-sass
// images task to optimize images. (+experiments)

// w/watch function now... and it works!!!!!
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');
var changeCase   = require('change-case');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');
var gm           = require('gulp-gm');

var reload       = browserSync.reload;

// GM GraphicsMagick
// OK!
gulp.task("tifs", function () {

  gulp.src('./_src/p_input/*.tif')
    .pipe(gm(function (gmfile) {

      return gmfile.setFormat('jpg');

    }))

    .pipe(gulp.dest('./_src/p_jpeg'));
});


// Reponsive sizing
// NOTE: this does not create the destination dir for the work. Create it manually and move files inside. This task create jpgs in ./assets/p/
// OK!
gulp.task('jpgs', function () {
  return gulp.src('./_src/p_jpeg/*.jpg')
    .pipe(responsive({
      '*.jpg': [{
        //nexus5
        width: 640,
        quality: 61,
        progressive: true,
        sharper: true,
        rename: {
          suffix: '-640'
        }
      }, {
        //ipad
        width: 1024,
        quality: 66,
        progressive: true,
        rename: {
          suffix: '-1024'
        }
      }, {
        //fullHD
        width: 1920,
        quality: 71,
        progressive: true,
        rename: {
          suffix: '-1920'
        }
      }]
    }))
    .pipe(gulp.dest('./assets/p'));
});


// Rename all to lowercase
// OK!
gulp.task("lower", function () {
  return gulp.src( './_src/p_input/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(gulp.dest( './_src/p' ));
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
