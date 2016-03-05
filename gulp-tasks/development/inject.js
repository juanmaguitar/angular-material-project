'use strict';

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.HTML

module.exports = function( gulp, config, plugins ) {

	var inject = plugins.inject;
	var angularFilesort = plugins.angularFilesort;
	var dirScripts = config.dirScripts;
	var dirCss = config.dirCss;
	var dirBase = config.dirBase;
	var jsFiles = dirScripts + '/**/*.js';
	var cssFiles = dirCss + '/**/*.css ';

	return function() {

		var sources = gulp.src([ jsFiles, cssFiles ]).pipe( angularFilesort() );
		var configInject = {
			read: false,
			ignorePath: '/' + dirBase
		}

		gulp.src('index.html', { cwd: dirBase })
			.pipe( inject(sources, configInject) )
			.pipe( gulp.dest(dirBase) );

	};

};
