// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAUdi0hKoKU496sZ5iYfvAocU2o3TOgvxk",
  authDomain: "travel-blog-557b9.firebaseapp.com",
  databaseURL: "https://travel-blog-557b9.firebaseio.com",
  projectId: "travel-blog-557b9",
  storageBucket: "travel-blog-557b9.appspot.com",
  messagingSenderId: "1041838092466"
};
firebase.initializeApp(firebaseConfig);

//retrieve mailing list on page load; this version doesn't listen for asynchronous
//updates to the list, and is for demonstration purposes as I fumble my way through
//retrieving data from Firebase.
var updateList = function(){
  l = []
  firebase.database().ref('/mailing_list/').on('value',
  function(snapshot){
    snapshot.forEach(function(snapshotChild){
      l.push({
        email: snapshotChild.val().email,
        signUpDate: new Date(snapshotChild.val().signUpDate)
      });
    });
  });
  return l;
};
var list = updateList();

var app = angular.module("app", ['routes', 'mailingList', 'blogHeaderFooter']);

app.controller("blogController", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $scope.currentCategory = $routeParams.currentCategory;
  $scope.categories = ['career', 'lifestyle', 'travel'];
  $http.get("../data/data.json").then(function(result){
    $scope.blogs = result.data[0];
  });
}]);
