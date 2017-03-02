// var gulp  = require('gulp'),
//     gutil = require('gulp-util');
//
// create a default task and just log a message
// gulp.task('default', function() {
//   return gutil.log('Gulp is running!')
// });

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');
    server = require('gulp-server-livereload');
    connect = require('gulp-connect');

// define the default task and add the watch task to it
gulp.task('default', ['connect']);

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('src/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('css', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/stylesheets'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  livereload.listen({basePath: 'docs'});
  gulp.watch('src/javascript/**/*.js', ['jshint']);
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/index.html', ['html']);
});

//livereload
gulp.task('connect', function() {
    connect.server({
      livereload: true,
      directoryListing: true,
      defaultFile: 'index.html'
    });
    gulp.watch('docs/index.html', ['html']);
});
