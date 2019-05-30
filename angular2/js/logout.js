app.controller('logoutControllers' ,function($scope,$http,$location,_$uibModalInstance){
    $scope.close = function() {
        $uibModalInstance.close(mode);
      
    }
    $scope.logout = function() {
        sessionStorage.clear();
        console.log('callded')
        $api.get('logout')
            .then(function() {
                $scope.alert = null;
                $rootScope.user = null;
                $scope.close();
                $state.go('Home');
              
            })
            
            .catch(function(reason) {
                console.error(reason);
            });
    };

});