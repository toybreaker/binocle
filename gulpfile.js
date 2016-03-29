'use strict';
// GULP here process sass and enable browsersync
// sourcemap handled automagically by gulp-ruby-sass
// images task to optimize images. (not complete!)

// w/watch function now... and it works!!!!!
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');
var changeCase   = require('change-case');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');

// testing...
var rename       = require('gulp-gm');
var gulpSharp    = require('gulp-sharp');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
// end testing

var reload       = browserSync.reload;



//GM

// not OK! TIFFFetchNormalTag error
gulp.task("tif", function () {
  gulp.src('./_src/p/*.tif')

    .pipe(gm(function (gmfile) {

      return gmfile.format("jpg");

    }, {
      imageMagick: true
    }))

    .pipe(gulp.dest('./_src/p_jpegged'));
});

// not OK!
// vips warning: TIFFFetchNormalTag: Incompatible type for "RichTIFFIPTC"; tag ignored
gulp.task("tifasync", function () {

  gulp.src('./_src/p/*.tif')
    .pipe(gm(function (gmfile, done) {

      gmfile.convert(function (err, convert) {

        done(null, gmfile
          .format("jpg")
        );

      });

    }, {
      imageMagick: true
    }))
    .pipe(gulp.dest('./_src/p_jpegged'));
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

// Reponsive sizing

// OK!
gulp.task('jpg', function () {
  return gulp.src('./_src/p/*.jpg')
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


// start______TEST STUFF__________

// shouild work, but doesnt..
gulp.task('tif', function () {
  return gulp.src('./_src/p_lowercased/*.tif')
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


// working only with jpg and how to rename?
gulp.task('imageresize', function() {
  return gulp.src('./_src/p_lowercased/*.+(jpeg|jpg|png|tiff|webp)')
    .pipe(imageResize({ width: 1920 }))
    .pipe(rename(function (path) { path.basename += "-1920"; }))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./assets/p'))
    .pipe(rename({
      suffix: '@2x'
    }))
    .pipe(imageResize({ width: 960 }))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./assets/p'))
});

// sharp lab.. maybe not
gulp.task('sha', function(){

  return gulp.src( './_src/p_lowercased/*.+(jpeg|jpg|png|tiff|webp)' )
    .pipe(gulpSharp({
      resize : [640],
      max : true,
      quality : 55,
      progressive : true
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

// end______TEST STUFF__________


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
