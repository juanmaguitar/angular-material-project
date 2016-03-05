'use strict';

angular.module('myApp',[
		'ngMaterial',
		'ngMdIcons',
		'users',
		'templates' // cached templates w/ gulp task
	])
	.config(function($mdIconProvider, $mdThemingProvider){

		$mdIconProvider
			.defaultIconSet('../svg/avatars.svg', 128)
			.icon('share', '../svg/share-option.svg', 24);

		$mdThemingProvider.theme('default')
			.primaryPalette('brown')
			.accentPalette('red');

});
