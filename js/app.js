/**
 * Created by sankalp.jain on 5/23/2016.
 */

(function () {

    var app = angular.module('littleamigosapp',['ngRoute']);

    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'home.html'
                }).
                when('/about', {
                    templateUrl: 'about.html'
                }).
                when('/events', {
                    templateUrl: 'events.html'
                }).
                when('/gallery', {
                    templateUrl: 'gallery.html',
                    controller: 'galleryController'
                }).
                when('/contact', {
                    templateUrl: 'contact.html'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);

    app.controller('littleamigoscontroller',['$scope','$location',function(scope,location){
        scope.changeView = function(viewName){
            location.path(viewName);
        }
        scope.$on('$routeChangeSuccess',function(){
            $("li.little-amigos-preschool-tab").removeClass("active-tab");
            $("li.little-amigos-preschool-tab."+location.path().slice(1)).addClass("active-tab");
        })
    }]);

    app.controller('galleryController',['$scope',function(scope){
        $('.fotorama').fotorama({
            nav: "thumbs",
            navposition: "top",
            thumbborderwidth: "4"
        });
    }]);

}());
