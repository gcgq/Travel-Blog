var blogHeaderFooter = angular.module("blogHeaderFooter", []);

angular.module("blogHeaderFooter").directive("blogHeader", function(){
  return {
    templateUrl: "../templates/blog-header.html"
  }
});

angular.module("blogHeaderFooter").directive("blogFooter", function(){
  return {
    templateUrl: "../templates/blog-footer.html",
    controller: function($scope){
      $scope.list = [];
      $scope.update = function(){
        $scope.list = updateList();
      }
    }
  };
});
