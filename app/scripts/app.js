'use strict';

angular.module('myApp',['ngMaterial', 'ngMdIcons', 'users'])
	.config(function($mdIconProvider, $mdThemingProvider){
		$mdIconProvider
			.defaultIconSet('../images/avatars.svg', 128)
			.icon('share', '../images/share-option.svg', 24)

			$mdThemingProvider.theme('default')
				.primaryPalette('brown')
				.accentPalette('red')

});
