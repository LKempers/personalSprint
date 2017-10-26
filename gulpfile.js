'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

function getTask(task){
    return require('./gulp/tasks/' + task)(gulp, plugins);
}

gulp.task('sass', getTask('sass'));
gulp.task('scripts', getTask('scripts'));

gulp.task('default', ['scripts', 'sass'], function () {
    gulp.watch('assets/js/**/*.js', ['scripts']);
    gulp.watch('assets/sass/**/*.{sass,scss}', ['sass']);
});