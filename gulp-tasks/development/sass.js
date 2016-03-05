'use strict';

// Pre-procesa archivos Stylus a CSS y recarga los cambios

module.exports = function( gulp, config, plugins ) {

	var sass = plugins.sass;
	var browserSync = plugins.browserSync;

	var dirSass = config.dirSass;
	var dirCss = config.dirCss;
	var sassFiles = dirSass + '/**/*.sass';

	return function() {

		var sassConfig = {
			errLogToConsole: true
		};

		return gulp.src( sassFiles )
			.pipe( sass(sassConfig) )
			.pipe( gulp.dest(dirCss) )
			.pipe( browserSync.stream() )

	};

};
