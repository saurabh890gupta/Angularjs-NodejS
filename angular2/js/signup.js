

app.controller('signupController',['$scope','$http','$location','$localStorage',function($scope,$http,$location,$localStorage){
    $scope.signup=function(obj){
      if($scope.obj.pass===$scope.obj.repeatPass){
        console.log('my data is',obj);
      
        $http({
            url : 'http://localhost:4000/api/signup',
            method : "POST",
            dataType: "json",
            data :  obj,
            headers : {'Content-Type' : 'application/json'}
          })         
        .then(function(response){
            console.log(response.result);
            if (response.result==="user exist")
            {
              alert("you are already exsit you use your email id");
              return false;
            }
            else
            {
              $localStorage.loggedIn=true;
              location.reload();
              alert('you Ragistred successfully');
              $location.path('/Home');
          }
          })
          .catch(function(response){
            console.log("error in posting",response);
          })
        }
        else{
          alert("password are not match");
        }
    }

    //login with facebook
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '356041078478891',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
        
    FB.AppEvents.logPageView();   
       //fbSDKLoaded() 
    };
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
     
      document.getElementById('loginbtn').addEventListener('click',loginWithFacebook, false)

      function loginWithFacebook(){
      FB.login(response=>{
        console.log("fb result find in data",response);
        const {authResponse:{accessToken,userID,name,} 
      }=response
        $http('http://localhost:4000/api/loginwithfb',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({accessToken,userID,name})
        }).then(res=>{
            console.log(res);
        })
        FB.api('/me', function(response) {
            console.log("facebook data find ",JSON.stringify(response));
        });

    },{scope: 'public_profile,email'})
    return false
}

//End login with facebook


}]);

app.directive("passwordVerify", function() {
  return {
     require: "ngModel",
     scope: {
       passwordVerify: '='
     },
     link: function(scope, element, attrs, ctrl) {
       scope.$watch(function() {
           var combined;

           if (scope.passwordVerify || ctrl.$viewValue) {
              combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
           }                    
           return combined;
       }, function(value) {
           if (value) {
               ctrl.$parsers.unshift(function(viewValue) {
                   var origin = scope.passwordVerify;
                   if (origin !== viewValue) {
                       ctrl.$setValidity("passwordVerify", false);
                       return undefined;
                   } else {
                       ctrl.$setValidity("passwordVerify", true);
                       return viewValue;
                   }
               });
           }
       });
    }
  };
});