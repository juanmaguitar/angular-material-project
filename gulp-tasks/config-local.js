'use strict';

// Creates config constants based on the environment (passed as parameter)

module.exports = function( gulp, config, plugins ) {

	var ngConfig = plugins.ngConfig;
  var bufferToVinyl = plugins.bufferToVinyl;

  var dirScripts = config.dirScripts;

  var confEnv = { environment: "local" };

	var configJson = JSON.stringify(config);
  var srcJson = gulp.src(configJson);

	return function()  {

    return bufferToVinyl
        .stream( new Buffer(configJson), 'config.js')
        .pipe( ngConfig('app.config', confEnv) )
        .pipe( gulp.dest(dirScripts) );

	};

};
