var mailingList = angular.module("mailingList", []);

angular.module("mailingList").directive("mailingList", function(){
  return{
    templateUrl: "../templates/mailing-list.html",
    controller: function($scope){
      $scope.list = [];
      $scope.update = function(){
        $scope.list = updateList();
      }
    }
  };
});

angular.module("mailingList").directive("listData",function(){
  return {
    templateUrl: "../templates/list-data.html"
  };
});
