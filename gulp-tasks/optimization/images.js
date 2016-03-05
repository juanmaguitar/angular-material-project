'use strict';

module.exports = function( gulp, config, plugins ) {

	var cache = plugins.cache;
	var imagemin = plugins.imagemin;

	var dirImg = config.dirImg;
	var dirDistImg = config.dirDistImg;

	var dirSvg = config.dirSvg;
	var dirDistSvg = config.dirDistSvg;

	return function()  {

		var configImagenMin = {
	    interlaced: true,
	    optimizationLevel: 3,
	    progressive: true
		};

		gulp.src( dirImg+'/**/*.+(png|jpg|jpeg|gif)')
			// Caching images that ran through imagemin
			.pipe( cache(imagemin(configImagenMin)) )
			.pipe( gulp.dest(dirDistImg) );

		gulp.src( dirSvg+'/**/*.svg')
			.pipe( gulp.dest(dirDistSvg) );

	};
};
