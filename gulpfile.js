const gulp = require('gulp');
const tsc  = require('gulp-typescript');

// Чтоб таска была синхронной и галп знал,
// когда она завершилась - нужно возвращать значение
// return gulp.src('index.js').pipe(uglify()).pipe(gulp.dest('dist'));

gulp.task('default', function() {
    // Do whatever u want!
});