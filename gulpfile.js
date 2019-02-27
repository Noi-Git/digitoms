var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  del = require('del')


gulp.task('deleteDistFolder', function () {
  return del("./docs")
})


gulp.task('optimizeImages', ['deleteDistFolder'], function () {
  return gulp.src('./img/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/img"))
})


gulp.task('build', ['deleteDistFolder', 'optimizeImages'])