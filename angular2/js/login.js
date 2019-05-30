app.controller('loginControllers' ,function($scope,$http,$location,$localStorage,$rootScope){
//     $rootScope.$on('$locationChangeSuccess', function() {
//         $rootScope.actualLocation = $location.path();
//     });        

//    $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
//         if($rootScope.actualLocation === newLocation) {
//             alert('Why did you use history back?');
//         }
//     });
if(sessionStorage.getItem('token')){
    $location.path('/Home');
}
    $scope.login=function(obj){
        var formData = {
            email: $scope.obj.email,
            password: $scope.obj.password,
        }
        console.log('my data is',formData);
        $http({
            url : "http://localhost:4000/api/login",
            method : "POST",
            dataType: "json",
            data : formData,
            headers : {'Content-Type' : 'application/json'}
            }).then(function(response){
                console.log("node login token data",response);
                var obj=response.data; //dat take in obj for fetch
                var getdata=[];
                if(response.data.token) //for store token in local storage
                {
                    sessionStorage.setItem('token',response.data.token);
                }
                getdata.push(obj.data);  //we fetch particular data from array
                console.log("getdatafind",getdata[0]); //print array data
                if (getdata[0]==="login successful")
                {
                    $localStorage.loggedIn=true;
                    location.reload();
                //   this is comment for popup after success 
                    // $scope.successMessage = "Form submitted successfully";
                    // $scope.isDisplay = true;
                    // $timeout(function () {
                    //     console.log("hellofhdf")
                    //     $scope.isDisplay = false;
                    //     $location.path('/Home');
                    // }, 5000);
                    alert("login successful");
                    $location.path('/Home');
                   
                    //$state.go("adminDashboard.adminUserDetails")
                }
                else{
                    alert("password is not match");
                    return false;
                }
            }) 
            .catch(function (response) {
                console.error("error in posting",response);
            });
            
    }
  
})
