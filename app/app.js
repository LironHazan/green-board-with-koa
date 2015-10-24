'use strict';

angular
	.module('green-board-app', [
		'ui.router',
		'ui.bootstrap',
		'ngStorage',
		'GreenBoard'
	])
	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
		$urlRouterProvider.otherwise('/home');

		//initialize get if not there
		if (!$httpProvider.defaults.headers.get) {
			$httpProvider.defaults.headers.get = {};
		}
		//disable IE ajax request caching
		/* jshint ignore:start */
		$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
		// extra
		$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
		$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
		/* jshint ignore:end */
	});
