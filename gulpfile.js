var path = require('path');
var gulp = require('gulp');
var babelify = require('babelify')
var browserify = require('browserify');
var watchify = require('watchify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync').create();


/**
 * Every value specific to this particular project is contained here.
 */
var gulpOptions = {
    jsMain: 'main.js',
    jsSourceDir: __dirname + '/client/js',
    jsOutDir: __dirname + '/public/js',
    server: {
        baseDir: './public'
    }
}

/**
 * Get a bunlder that will use browserify to process modules and babel to transpile ES6 code.
 * 
 * @param source the entry point script to be bundled
 */
function getBuilder(source) {
    return watchify(browserify(source, { debug: true }).transform(babelify));
}

/**
 * Pre-process and bundle up all the front end stuff
 * 
 * @param builder - the configured bunlder to use for building
 * @param options - configuration options for building frontend assets
 */
function build(builder, options) {
    builder.bundle()
        .on('error', function (err) { console.error(err); this.emit('end'); })
        .pipe(source(options.jsMain))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(options.jsOutDir));
}

/**
 * Serve up the front end which in this case just initialises browser sync 
 */
function serve(options) {
    browserSync.init(options);
}

gulp.task('build', function () {
    var builder = getBuilder(path.join(gulpOptions.jsSourceDir, gulpOptions.jsMain));
    build(builder, gulpOptions);
});

gulp.task('serve', ['build'], function () {
    serve(gulpOptions);
});

gulp.task('serve-watch', ['build'], function () {
    serve(gulpOptions);
    gulp.watch('client/js/**/*.js', ['build']);
    gulp.watch('public/**').on('change', browserSync.reload)
});

gulp.task('default', ['serve-watch']);

