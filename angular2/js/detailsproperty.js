app.controller('detailspropertyCtrl' , function($scope,$location){
 
    var urlParams = $location.search();
        console.log('urlParams12',urlParams);
        $scope.Id=urlParams.X;
        $scope.Name=urlParams.Name;
        $scope.Price=urlParams.Price;
        console.log('called');
    });
    