'use strict';

angular.module('myApp',[
		'ngMaterial',
		'ngMdIcons',
		'users',
		'templates', // cached templates w/ gulp task
		'app.config'  // dinamically generated based on the environment
	])
	.config(function($mdIconProvider, $mdThemingProvider, envConfig){

		var baseDir = envConfig.baseDir;

		$mdIconProvider
			.defaultIconSet( baseDir + '/svg/avatars.svg', 128)
			.icon('share', baseDir + '/svg/share-option.svg', 24);

		$mdThemingProvider.theme('default')
			.primaryPalette('brown')
			.accentPalette('red');

});
