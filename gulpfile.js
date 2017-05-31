const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const conventionalChangelog = require('gulp-conventional-changelog');

const includedFiles = [
    'src/flexgrid/**/*'
];

const excludedFiles = [
    'src/flexgrid/_grid-demo.scss'
];

/**
 * generate changelog based on the
 * conventional changelog package
 */
gulp.task('write-changelog', () => {
    return gulp.src('CHANGELOG.md', {
        buffer: false
    })
        .pipe(conventionalChangelog({
            preset: 'angular',
            releaseCount: 0
        }))
        .pipe(gulp.dest('./'));
});

/**
 *  Deletes the dist directory
 */
gulp.task('clean', () => {
    return del('dist/**', {force:true});
});

/**
 *  Copy all relevant resource files
 */
gulp.task('copy-files', () => {
    return gulp.src([`!${excludedFiles}`, `${includedFiles}`])
        .pipe(gulp.dest('dist'));
});

gulp.task('compile', () => {
    runSequence(
        'write-changelog',
        'clean',
        'copy-files'
    )
});

gulp.task('create-package', ['compile']);

