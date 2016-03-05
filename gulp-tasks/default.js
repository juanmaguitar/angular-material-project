'use strict';

module.exports = function( gulp, config, plugins ) {

	var runSequence = plugins.runSequence;

	return function() {

		runSequence(['stylus', 'inject', 'wiredep', 'server', 'watch'])

	};

};
