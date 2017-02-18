// Subtle Cut Media gulp file DEVELOPMENT

// requires
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

// Default task
gulp.task('default', ['browser-sync']);

// Browsersync server
gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init({
    proxy: 'http://localhost:3002',
    files: '*'
  });
});

// Nodemon
gulp.task('nodemon', function () {
  nodemon({
    script: 'index.js'
  });
});
