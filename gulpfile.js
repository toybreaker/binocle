'use strict';
// GULP image tasks to work images.

// w/watch function now... and it works!!!!!
var changeCase   = require('change-case');
var gulp         = require('gulp');
var gm           = require('gulp-gm');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');

// GM GraphicsMagick w/ gulp4
// OK!
gulp.task('tifs', function(done) {
  gulp.src('./_src/p_tif/*.tif')
    .pipe(gm(function (gmfile) {
      return gmfile.setFormat('jpg');
    }))
    .pipe(gulp.dest('./_src/p_jpeg'));
  done();
});


// Reponsive sizing w/ gulp4
// NOTE: this does not create the destination dir for the work. Create it manually and move files inside. This task create jpgs in ./assets/p/
// OK!
gulp.task('jpgs', function (done) {
  return gulp.src('./_src/p_jpg/*.jpg')
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
  done();
});


// Rename all to lowercase w/ gulp4
// OK!
gulp.task(function lower() {
  return gulp.src( './_src/p_lower/*.*' )
    .pipe(rename(function(fix) {
       fix.basename = changeCase.lowerCase(fix.basename);
     }))
    .pipe(gulp.dest( './_src/p_jpg' ));
});
