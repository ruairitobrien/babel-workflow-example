var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('build', function () {
    return gulp.src('client/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest("public/js"));
});

gulp.task('serve', ['build'], function () {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    
    gulp.watch('client/js/**/*.js', ['build']);
    gulp.watch('public/**').on('change', browserSync.reload)    
});

gulp.task('default', ['serve']);

