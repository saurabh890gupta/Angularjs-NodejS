app.controller('propertyscroll' ,function($scope,$http,$location) {
  // var urlParams = $location.search();
  // console.log('urlParams13',urlParams);
  // $scope.key=urlParams.key;
  // $scope.city=urlParams.city;
  // $scope.state=urlParams.state;
  // console.log('called');




  // $http.get('http://localhost:4000/api/fileGet')
  // .then(function(response) {
  //   console.log("image data found",response.data);
  //   $scope.data = response.data;
  //       console.log($scope.data)
  //         var __dirname=[];
         
  // } )         
  
     $http.get('http://localhost:4000/api/propertydatascroll')
    .then(function(response) {
      console.log("propertyscroll data found",response.data);
      $scope.data = response.data;
            var fimage =[];
            var fname=[];
            var fprice=[];
           
    } )          
    $http.get('http://localhost:4000/api/PropertyDataSchema')
    .then(function(response) {
      console.log("safe data found",response.data);
      $scope.result = response.data;
            
            var phone=[];
            var propertydescreption=[];
            var propertystate=[];
            var propertycity=[];
            var propertystatus=[];
    } )          
    });
  
    