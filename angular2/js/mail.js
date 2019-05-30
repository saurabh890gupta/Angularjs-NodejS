app.controller('MainCtrl', ['$scope', '$interval', '$http', '$location', '$anchorScroll', 
function($scope, $interval, $http, $location, $anchorScroll) {
  $scope.message = {};

  $scope.sendMail = function () {
    $scope.message = {}; 

    $http.post('/sendQuote', $scope.message).
       success(function(data, status, headers, config) {
         // you can clear $scope.message if you want here
         $scope.message = data.message;
         console.log($scope.message)
      });
  }
}]);