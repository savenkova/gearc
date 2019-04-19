var gulp = require('gulp'),
    sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css/style.css'))
});
