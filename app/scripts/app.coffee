'use strict'

angular.module('animatedBackgroundApp', [])
	.config ($routeProvider) ->
		$routeProvider
			.when '/',
				templateUrl: 'views/main.html'
				controller: 'MainCtrl'
			.otherwise
				redirectTo: '/'
	.run () ->
		window.addEventListener 'load', () ->
			setTimeout () ->
				window.scrollTo 0, 0
			, 0

		window.ondevicemotion = (event) ->
			accelerationX = event.accelerationIncludingGravity.x  
			accelerationY = event.accelerationIncludingGravity.y 
			bgX = (50 - accelerationX).toFixed 3
			bgY = ((50 - accelerationY).toFixed 3) * 4
			mobile = document.getElementById 'mobile'
			mobile.style.backgroundPositionX = "#{bgX}%"
			mobile.style.backgroundPositionY = "#{bgY}%"