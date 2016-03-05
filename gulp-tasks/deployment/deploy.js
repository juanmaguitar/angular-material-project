'use strict';

// Busca errores en el JS y nos los muestra por pantalla

module.exports = function( gulp, config, plugins ) {

	var deploy = plugins.ghPages;

	var dirDist = config.dirDist;
	var distFiles = dirDist + '/**/*';

	return function()  {

		gulp.src( distFiles )
			.pipe( deploy() );

	};
};
