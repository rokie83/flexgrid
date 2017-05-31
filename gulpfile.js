const fs = require('fs');
const del = require('del');
const gulp = require('gulp');
const bump = require('gulp-bump');
const git = require('gulp-git');
const argv = require('yargs').argv;
const runSequence = require('run-sequence');
const conventionalChangelog = require('gulp-conventional-changelog');

const rootDir = './src/flexgrid';

const includedFiles = [
    'src/flexgrid/**/*'
];

const excludedFiles = [
    'src/flexgrid/_grid-demo.scss'
];

let semRelease = () => {

    let version;
    switch (argv.type) {
        case 'major':
            return version = 'major';
            break;
        case 'minor':
            return version = 'minor';
            break;
        case 'patch':
            return version = 'patch';
            break;
        default:
            console.log(`
        🦄  🌈     PLEASE ADD A SEMVER RELEASE TYPE    🌈  🦄

        Following flags are valid
        
        gulp release    
            
            --type=major        💥  A RELEASE WITH BREAKING CHANGES                    
            --type=minor        ✨  A FEATURE RELEASE WITHOUT BREAKING CHANGES  
            --type=patch        🐞  A BUGFIX RELEASE

            `);
        return false;
    }
};

/**
 * Parse the relevant package.json for the version
 */
let getPackageJsonVersion = () => {
    return JSON.parse(fs.readFileSync(`${rootDir}/package.json`, 'utf8')).version;
};

/**
 * Update package.json version depending on argument
 */
gulp.task('update-packagejson', () => {
    if (semRelease()) {
        return gulp.src(`${rootDir}/package.json`)
            .pipe(bump({type: semRelease()}))
            .pipe(gulp.dest(rootDir));
    }
});

/**
 * Generate changelog based on the
 * conventional changelog package (https://github.com/bcoe/conventional-changelog-standard/blob/master/convention.md)
 */
gulp.task('write-changelog', () => {
    return gulp.src('CHANGELOG.md', {
        buffer: false
    })
        .pipe(conventionalChangelog({
            pkg: {path: rootDir},
            preset: 'angular',
            releaseCount: 0,
        }))
        .pipe(gulp.dest('./'));
});

/**
 *  Deletes the dist directory
 */
gulp.task('clean', () => {
    return del('dist/**', {force: true});
});

/**
 *  Copy all relevant resource files
 */
gulp.task('copy-files', () => {
    return gulp.src([`!${excludedFiles}`, `${includedFiles}`])
        .pipe(gulp.dest('dist'));
});

gulp.task('release', () => {
    runSequence(
        'update-packagejson',
        'write-changelog',
        'clean',
        'copy-files'
    )
});

gulp.task('create-package', ['release']);

