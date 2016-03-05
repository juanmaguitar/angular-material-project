'use strict';

// Creates config constants based on the environment (passed as parameter)

module.exports = function( gulp, config, plugins ) {

	var ngConfig = plugins.ngConfig;
  var bufferToVinyl = plugins.bufferToVinyl;

  var dirScripts = config.dirScripts;

	var env = getArg("--env");
  var confEnv = { environment: env };

	var configJson = JSON.stringify(config);
  var srcJson = gulp.src(configJson);


	function getArg(key) {
	  var index = process.argv.indexOf(key);
	  var next = process.argv[index + 1];
	  return (index < 0) ? null : (!next || next[0] === "-") ? true : next;
	}

	return function()  {

    return bufferToVinyl
        .stream( new Buffer(configJson), 'config.js')
        .pipe( ngConfig('app.config', confEnv) )
        .pipe( gulp.dest(dirScripts) );

	};

};
