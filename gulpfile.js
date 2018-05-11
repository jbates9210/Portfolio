var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

/*
gulp.task('default', function() {
  console.log('Gulp task created.');
});
*/
/*
gulp.task('html', function() {
  console.log('Gulp HTML Task');
});
*/

gulp.task('styles', function() {
  return gulp.src('./docs/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./docs/temp/styles'));
});

gulp.task('watch', function() {
  watch('./docs/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
