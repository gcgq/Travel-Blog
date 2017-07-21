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
      l.push(snapshotChild.val());
    });
  });
  return l;
};
list = updateList();

var app = angular.module("app", []);

app.controller("blogController", ['$scope', '$http', function($scope, $http){
  $scope.categories = ['career', 'lifestyle', 'travel'];
  $http.get("../data/data.json").then(function(result){
    $scope.blogs = result.data[0];
  });
}]);



app.controller("mailingListSignUp", ["$scope", function($scope){
  $scope.newSubscriber = { email: "", signUpDate: null };
  $scope.signUp = function(){
    $scope.newSubscriber.signUpDate = new Date().getTime();
    // console.log($scope.newSubscriber);
    // console.log(Date($scope.newSubscriber.signUpDate));
    firebase.database().ref('/mailing_list/' + CryptoJS.MD5($scope.newSubscriber.email)).set($scope.newSubscriber);
    $scope.newSubscriber = { email: "", signUpDate: null }
  };
}]);

app.controller("getMailingList", ['$scope', function($scope){
  $scope.list = []
  $scope.update = function(){
    $scope.list = updateList();
    console.log($scope.list);
  }
}]);
