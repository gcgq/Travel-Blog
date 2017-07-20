var app = angular.module("app", [])

app.controller("blogController", ['$scope', '$http', function($scope, $http){
  $scope.categories = ['career', 'lifestyle', 'travel'];
  $http.get("../data/data.json").then(function(result){
    $scope.blogs = result.data[0];
    console.log($scope.blogs['career'][0].title)
  });
}])
