var gulp = require('gulp'),
    /*watch = require('gulp-watch'),*/
    sass = require('gulp-sass'),
    jade = require('gulp-jade');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css/style.css'))
});

gulp.task('jade', function() {
    return gulp.src('app/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/style.scss', gulp.series('sass'));
    gulp.watch('app/*.jade', gulp.series('jade'));
});