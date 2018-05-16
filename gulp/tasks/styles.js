var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
    return gulp.src('./docs/assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
      .on('error', function(error) {
          console.log(error.toString());
          this.emit('end');
      })
      .pipe(gulp.dest('./docs/temp/styles'));
  });