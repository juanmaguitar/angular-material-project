'use strict';

angular.module('myApp',['ngMaterial', 'users'])
	.config(function($mdIconProvider){
		$mdIconProvider.defaultIconSet('../images/avatars.svg', 128);
	});
