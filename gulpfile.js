/*eslint-env node */

const gulp = require("gulp");
const eslint = require('gulp-eslint');
const jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('default', ['lint'], function() {
    gulp.watch('js/**/*.js', ['lint']);
});

gulp.task('lint', function() {
    return (
        gulp
            .src(['js/**/*.js'])
            // eslint() attaches the lint output to the eslint property
            // of the file object so it can be used by other modules.
            .pipe(eslint())
            // eslint.format() outputs the lint results to the console.
            // Alternatively use eslint.formatEach() (see Docs).
            .pipe(eslint.format())
            // To have the process exit with an error code (1) on
            // lint error, return the stream and pipe to failOnError last.
            .pipe(eslint.failOnError())
    );
});

gulp.task('tests', function() {
    return gulp
        .src('jasmine/spec/feedreader.js')
        .pipe(jasmineBrowser.specRunner({ console: true }))
        .pipe(jasmineBrowser.headless({ driver: 'chrome' }));
});

// gulp.task('tests', function() {
//     gulp
//         .src('jasmine/spec/feedreader.js')
//         .pipe(jasmineBrowser.specRunner())
//         .pipe(jasmineBrowser.server({ port: 3001 }));
// });