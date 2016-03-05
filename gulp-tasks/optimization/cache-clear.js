'use strict';

// https://github.com/jgable/gulp-cache/issues/9
module.exports = function( gulp, config, plugins ) {

	var cache = plugins.cache;

	return function()  {

		cache.clearAll();

	};
};
