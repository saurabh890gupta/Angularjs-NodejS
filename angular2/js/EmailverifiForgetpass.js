app.controller('EmailverifiForgetpass',function($scope,$http,$location){
    $scope.forgetpass=function(obj){
        console.log('my data is',obj);
      
       
        $http({
            url : 'http://localhost:4000/api/forgetpassword',
            method : "POST",
            dataType: "json",
            data :  obj,
            headers : {'Content-Type' : 'application/json'}
          })
        // .then(function (response) {
        //      alert('ur succesfull submit');
        //     $location.path('/Home');
        //     console.log( $location.path());
        //  }).catch(function (response) {
        //     console.error("error in posting",response);
         //  });
         
        .then(function(response){
            console.log(response.data);
            if (response.data==="user exist")
            {
                alert('email is verifie u can chang password');
           
                $location.path('/Login');
            }
            else
            {
                alert('User not found');
                return false;
          
            }
      
        })
        .catch(function(response){
    
        console.log("error responding",response);
        })
    }
});

