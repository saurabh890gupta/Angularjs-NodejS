app.controller('forgetPassController',function($scope,$http,$location){
    $scope.forgetsignup=function(obj){
        console.log('my data is',obj);
        var val = $location.search().email;
        console.log('link query',val);
        // if(val===obj.email){
        $http({
           url : 'http://localhost:4000/api/setNewPassword?email='+val+'',       //for query parameter
           // url : 'http://localhost:4000/api/setNewPassword',
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
            if (response.data==="login successful")
            {
                alert('you Change Password successfully');
           
                $location.path('/Login');
            }
            else
            {
                if (response.data==="Passwords are not matching!")
                {
                    alert('Passwords are not matching!');
                    return false;
                   
                }
                else if(response.data==="User not found")
                {
                    alert('User not found');
                    return false;
                   
                }
                else if(response.data==="Passwords are not matching and user not found")
                {
                    alert('Passwords are not matching and user not found');
                    return false;
                   
                }
            // alert(response);
            // return false;
          }
      
          })
          .catch(function(response){
       
            console.log("error responding",response);
          })
        // }
        // else{
        //     alert('email are not match');
        //     console.log("email id not match");
        // }
    }
});

