const gulp = require('gulp')

const concat = require('gulp-concat')
const terser = require('gulp-terser')

module.exports = function copyDependencies() {
    return gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
            '#src/scripts/jquery.spincrement.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
            'node_modules/svg4everybody/dist/svg4everybody.legacy.min.js',
        ])
        .pipe(concat('libs.min.js'))
        //.pipe(terser())
        .pipe(gulp.dest('./dist/scripts/'))
}
