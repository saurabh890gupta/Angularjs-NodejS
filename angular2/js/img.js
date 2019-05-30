 
  
 app.controller('TabController', ['$scope','$http','$location','propertydata' ,function($scope,_$http,_$location,propertydata) {
    
  $scope.tab = 1;
  
  $scope.setTab = function(newTab){
    // if( $scope.obj.propertyprice|| $scope.obj.propertyname|| $scope.obj.phone){
      $scope.tab = newTab;
    //  }
    
      // else{
      //   return false;
      // }
     
};
$scope.isSet = function(tabNum){
  return $scope.tab === tabNum;
};
$scope.propertySubmit = function(obk){
   var formData = $scope.obk;
  
  console.log('my data is',formData);
  
  var calData = "/propertydata";
  propertydata.uploadDataToUrl(formData, calData);
};
}]);
app.service('propertydata',  function ($http,$location) {
this.uploadDataToUrl=function(formData,calData){
  console.log('my data is',formData);
  $http({
      url : 'http://localhost:4000/api/propertydetail',
      method : "POST",
      dataType: "json",
      data :  formData,
      headers : {'Content-Type' : 'application/json'}
    })
   .then(function (response) {
    console.log(response.data);
        alert('ur succesfull submit');
       $location.path('/Home');
       console.log( $location.path());
    })
    // .catch(function (response) {
  //     console.error("error in posting",response);



  //  });
   
  // .then(function(response){
  //     console.log(response.data);
  //     if (response.data==="user exist")
  //     {
  //       alert("you are already exsit you use your email id");
  //       return false;
  //     }
  //     else
  //     {
  //     alert('you Ragistred successfully');
     
  //     $location.path('/Home');
  //   }
    //})
    .catch(function(response){
      console.log("error in posting",response);
    })
}
});