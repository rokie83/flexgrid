const gulp = require('gulp');
const del = require('del');
const runSequence = require('run-sequence');
const conventionalChangelog = require('gulp-conventional-changelog');
//const ngc = require('@angular/compiler-cli/src/main').main;
//const inlineResources = require('./scripts/inline-resources');
//const autoprefixer = require('gulp-autoprefixer');

// const moduleResources = [
//     'src/common/assets/**/*',
//     'src/common/README.md',
//     'src/common/package.json',
//     'src/flexgrid/**/*',
//     'src/design/**/*',
//     'src/material-custom/**/*'
// ];
//
// /**
//  *  Run the Angular compiler, ngc. This will output all
//  *  compiled modules to the /dist folder.
//  */
// gulp.task('ngc', () => {
//     return ngc({
//         project: 'src/common/tsconfig.aot.json'
//     });
// });
//
// /**
//  *  Copy all relevant resource files.
//  */
// gulp.task('copy-resources', () => {
//     return gulp.src(moduleResources, {'base': './src'})
//         .pipe(gulp.dest('dist'));
// });
//
// /**
//  *  Copy html files into dist/common/components.
//  */
// gulp.task('copy-html', () => {
//     return gulp.src('src/common/components/**/*.html')
//         .pipe(gulp.dest('dist/common/components'));
// });
//
// /**
//  *  Compile scss into css and copy those files into dist/common/components.
//  */
// gulp.task('compile-scss-copy-css', () => {
//     return gulp.src('src/common/components/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('dist/common/components'));
// });
//
// /**
//  *  Inline template (.html) and style (.css) files into the the component .ts files.
//  */
// gulp.task('inline-resources', () => inlineResources('dist/common/components'));
//
//
// gulp.task('compile', () => {
//     runSequence(
//         'ngc',
//         'copy-resources',
//         'copy-html',
//         'compile-scss-copy-css',
//         'inline-resources'
//     )
// });

//gulp.task('create-packages', ['compile']);

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
 *  Copy all relevant resource files.
 */
gulp.task('copy-files', () => {
    return gulp.src(['!src/flexgrid/_grid-demo.scss', 'src/flexgrid/**/*'])
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

