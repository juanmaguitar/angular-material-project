'use strict';

// Busca en las carpetas de estilos y javascript los archivos que hayamos creado
// para inyectarlos en el index.HTML

module.exports = function( gulp, config, plugins ) {

	var inject = plugins.inject;
	var notify = plugins.notify;

	var angularFilesort = plugins.angularFilesort;
	var dirScripts = config.dirScripts;
	var dirCss = config.dirCss;
	var dirBase = config.dirBase;
	var jsFiles = dirScripts + '/**/*.js';
	var cssFiles = dirCss + '/**/*.css ';

	return function() {

		var sourcesJs = gulp.src( jsFiles ).pipe( angularFilesort() );
		var sourcesCss = gulp.src( cssFiles );

		var configInject = {
			read: false,
			ignorePath: '/' + dirBase
		}

		// inject js w/ angularFileSort
		gulp.src('index.html', { cwd: dirBase })
			.pipe( inject(sourcesJs, configInject) )
			.pipe( gulp.dest(dirBase) )
			.pipe( notify("js files injected!") );

		// inject css
		gulp.src('index.html', { cwd: dirBase })
			.pipe( inject(sourcesCss, configInject) )
			.pipe( gulp.dest(dirBase) )
			.pipe( notify("css files injected!") );

	};

};
