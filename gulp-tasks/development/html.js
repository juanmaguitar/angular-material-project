'use strict';

// Recarga el navegador cuando hay cambios en el HTML

module.exports = function( gulp, config, plugins ) {

	var browserSync = plugins.browserSync;

	return function()  {

		return gulp.src('./app/**/*.html')
			.on('error', function(err) {
				console.log(err);
			})
			.pipe( browserSync.stream() );

	};

};
