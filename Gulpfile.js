// https://css-tricks.com/gulp-for-beginners/
// https://markgoodyear.com/2014/01/getting-started-with-gulp/
// https://github.com/osscafe/gulp-cheatsheet
// https://www.smashingmagazine.com/2014/06/building-with-gulp/

// TODO:
// https://www.npmjs.com/package/gulp-pug
// https://www.npmjs.com/package/gulp-layout

var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// ----

gulp.task('hello', function() {
  console.log('Hello Zell');
});

// gulp.watch('app/scss/**/*.scss', ['sass']);
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // other watchers
  // reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});
