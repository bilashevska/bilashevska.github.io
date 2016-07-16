var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concatCss = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	rename = require("gulp-rename"),
	notify = require("gulp-notify"),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload')
	connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    root: 'gulp_sass',
    livereload: true
  });
});

gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss('styles.css'))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename('styles.min.css'))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(livereload())
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('watch', function (){
    gulp.watch('scss/*.css',['default'])
    gulp.watch('*.html',['default'])
})
gulp.task('sass', function(){
  return gulp.src('scss/*.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(gulp.dest('css'))
});
gulp.task('default', ['connect','html','sass', 'css', 'watch']);
