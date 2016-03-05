'use strict';

// Pre-procesa archivos Stylus a CSS y recarga los cambios

module.exports = function( gulp, config, plugins ) {

	var sass = plugins.sass;
	var browserSync = plugins.browserSync;

	var dirSass = config.dirSass;
	var dirCss = config.dirCss;
	var sassFiles = dirSass + '/**/*.sass';

	return function( ) {

		gulp.src( sassFiles )
			.pipe( sass() )
			.pipe( gulp.dest(dirCss) )
			.on('error', function(err) {
				console.log(err);
			})
			.pipe( browserSync.stream() );

	};

};
