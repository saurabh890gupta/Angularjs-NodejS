app.controller('TabController' ,   function($scope ,_$http,_$location, uploadService){
    
    
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
  

});