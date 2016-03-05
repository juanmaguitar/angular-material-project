'use strict';

// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas

module.exports = function( gulp, config, plugins ) {

	var dirBase = config.dirBase;
	var dirScripts = config.dirScripts;
	var dirSass = config.dirSass;

	return function()  {

			gulp.watch([ dirBase+'/**/*.html' ],['html']);
			gulp.watch([ dirSass+'/**/*.sass'],['sass']);
			gulp.watch([ dirScripts+'/**/*.js'],['jshint']);
			gulp.watch(['./bower.json'],['wiredep']);

	};

};