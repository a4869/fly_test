var 
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	rigger = require('gulp-rigger'),
	rename = require('gulp-rename'),
	imagemin    = require('gulp-imagemin'),
	pngquant    = require('imagemin-pngquant'),
	jpegoptim = require('imagemin-jpegoptim'),
    mozjpeg = require('imagemin-mozjpeg'),
	autoprefixer    = require('gulp-autoprefixer'),
	uglify    = require('gulp-uglify'),
	svgmin    = require('gulp-svgmin'),
	cssnano = require('gulp-cssnano'),
	gutil = require('gulp-util'),
	cache = require('gulp-cache')
	;

// абсолютный путь к папке с проектом
MySiteFolder = '';

gulp.task('scss', function(){
	return gulp.src(MySiteFolder+'src/scss/*.scss')
	.pipe(sass().on('error', gutil.log))
	.pipe(autoprefixer({
        browsers: ['since 2011'],
        cascade: false
    }))
    .pipe(gulp.dest(MySiteFolder+'www/files/css'))
});

gulp.task('js', function(){
	gulp.src([MySiteFolder+'src/js/*.js', '!'+MySiteFolder+'src/js/js.js'])
	.pipe(rigger().on('error', gutil.log))
	.pipe(gulp.dest(MySiteFolder+'www/files/js/'))
	
	// обчщий сборщик, собирает только риггером
	gulp.src([MySiteFolder+'src/js/js.js'])
	.pipe(rigger().on('error', gutil.log))
	.pipe(gulp.dest(MySiteFolder+'www/files/js/'));
	
});

gulp.task('watch', function() {
	console.log('start watch for '+MySiteFolder);
	watch([MySiteFolder+'src/scss/**/*.scss'], function(event, cb) {
        gulp.start('scss');
    });
    watch([MySiteFolder+'src/js/**/*.js'], function(event, cb) {
        gulp.start('js');
    });
});
