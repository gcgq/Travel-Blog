var routes = angular.module("routes", ["ngRoute"])

routes.config(['$routeProvider', function($routeProvider){
    $routeProvider.when("/",  {
      templateUrl: "templates/main.html"
    }).when("/blog/:currentCategory",{
      templateUrl: "templates/category.html",
      controller: 'blogController'
    }).when("/list",{
      templateUrl: "templates/mailing-list.html"
    }).when("/about",{
      templateUrl: "templates/about.html"
    });
}]);
