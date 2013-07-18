(function() {
  'use strict';
  angular.module('animatedBackgroundApp', []).config(function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }).run(function() {
    window.addEventListener('load', function() {
      return setTimeout(function() {
        return window.scrollTo(0, 0);
      }, 0);
    });
    return window.ondevicemotion = function(event) {
      var accelerationX, accelerationY, bgX, bgY, mobile;
      accelerationX = event.accelerationIncludingGravity.x;
      accelerationY = event.accelerationIncludingGravity.y;
      bgX = (50 - accelerationX).toFixed(3);
      bgY = ((50 - accelerationY).toFixed(3)) * 4;
      mobile = document.getElementById('mobile');
      mobile.style.backgroundPositionX = "" + bgX + "%";
      return mobile.style.backgroundPositionY = "" + bgY + "%";
    };
  });

}).call(this);
