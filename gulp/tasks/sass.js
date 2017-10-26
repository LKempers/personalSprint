module.exports = function (gulp, plugins) {
return function() { gulp.src(['assets/sass/style.scss'])
        .pipe(plugins.sass())
        .pipe(plugins.minify())
        .pipe(gulp.dest('dest')); };
};