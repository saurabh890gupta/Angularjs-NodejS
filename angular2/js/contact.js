
app.controller('ContactCtrl' , function($scope,$http,$location){
    
    $scope.IsVisible = false;
    $scope.ShowHide = function(){
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }

    $scope.ContactUs=function(obj){
        console.log('my data is',obj);
        var formData = {
            name:$scope.obj.name,
            email:$scope.obj.email,
            contact:$scope.obj.contact,
            address:$scope.obj.address,
            query:$scope.obj.query,
        }
        $http({
            url : 'http://localhost:4000/api/contactus',
            method : "POST",
            dataType: "json",
            data :  formData,
            headers : {'Content-Type' : 'application/json'}
        })
        .then(function(response){
            console.log("your query ragisterd");
            location.reload();
            alert('your query ragisterd');
           
        })
        .catch(function(response){
            console.log("error in posting",response);
        })
    }
});


