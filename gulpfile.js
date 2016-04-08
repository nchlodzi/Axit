
var gulp = require('gulp');
var sass = require('gulp-sass');
// var jshint = require('gulp-jshint');

var paths = {
    styles: {
        files: 'sass/**/*.scss',
        dest: 'css/'
    }
}

gulp.task('sass', function (){
   gulp.src(paths.styles.files)
   .pipe(sass({
       outputStyle: 'expanded',
       sourceComments: 'map'
   }))
   .pipe(gulp.dest(paths.styles.dest))
});

// gulp.task('jshint', function() {
//  return gulp.src('js/*.js')
//    .pipe(jshint())
//    .pipe(jshint.reporter('default'));
// });


gulp.task('watch', function(){
		gulp.watch('sass/*.scss', ['sass']);

})