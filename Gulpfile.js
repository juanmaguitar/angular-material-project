'use strict';

var gulp = require('gulp');
var taskLoader = require('gulp-simple-task-loader');
var loadPlugins = require('gulp-load-plugins');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

var configPlugins = {
	// DEBUG: true,
	pattern: ['gulp-*', 'gulp.*', '[a-z]*'],
}
var plugins = loadPlugins( configPlugins );

var configProject = {

	// dirs path
	dirBase: 'app',
	dirDist: 'dist',

	// app paths
	dirScripts: 'app/scripts',
	dirStylus: 'app/stylesheets/stylus',
	dirSass: 'app/stylesheets/sass',
	dirCss: 'app/stylesheets/css',
	dirTpl: 'app/views',
	dirImg: 'app/img',
	dirSvg: 'app/svg',
	dirLib: 'app/lib',
	fontsPath : 'app/lib/components-font-awesome/fonts/**',

	htmlFiles : [
		'app/index.html',
		'app/views/post-detail.tpl.html',
		'app/views/post-list.tpl.html',
		'app/views/post-create.tpl.html'
	],

	// dist paths
	dirDistJs: 'dist/js',
	dirDistCss: 'dist/css',
	dirDistImg: 'dist/img',
	dirDistSvg: 'dist/svg',
	dirDistFonts: 'dist/fonts'

}

var configTasks = {
	taskDirectory: 'gulp-tasks',
	filenameDelimiter: '-',
	tasknameDelimiter: ':',
	plugins: plugins,
	config: configProject
}

// https://gist.github.com/floatdrop/8269868
var _gulpsrc = gulp.src;
gulp.src = function() {
    return _gulpsrc.apply(gulp, arguments)
    .pipe(plumber({
        errorHandler: function(err) {
            notify.onError({
                title:    "Gulp Error",
                message:  "Error: <%= error.message %>",
                sound:    "Bottle"
            })(err);
            this.emit('end');
        }
    }));
};

taskLoader( configTasks, gulp );
