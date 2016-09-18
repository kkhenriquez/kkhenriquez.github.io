var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});


gulp.task('useref', function() {
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulpIf('*.css', cssnano()))
	.pipe(gulp.dest('home'))
});

gulp.task('images', function() {
	return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('home/img'))
});

gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('home/fonts'))
});

gulp.task('script', function() {
	return gulp.src('app/js/modernizr.custom.js')
	.pipe(gulp.dest('home/js'))
});

gulp.task('clean:home', function() {
	return del.sync('home');
})

gulp.task('build', function (callback) {
	runSequence('clean:home', ['sass', 'images', 'fonts', 'script'], 'useref', callback)
});

gulp.task('default', function (callback) {
	runSequence(['sass', 'browserSync', 'watch'], callback)
});