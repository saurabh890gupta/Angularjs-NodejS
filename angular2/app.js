var app=angular.module('myapp' , ['ui.router','ngStorage' ,]);

app.controller('myctrl' , function($scope,$localStorage,$http,$location){
 
    $scope.isLoggedIn=$localStorage.loggedIn ;
 
 $scope.logout=function(){
    // $localStorage.loggedIn =false;
    // $scope.isLoggedIn=$localStorage.loggedIn ;

    var txt;
    var r = confirm("Are you sure you want to logout");
    if (r == true) {
        txt = "You pressed OK!";
        $http({
            url : 'http://localhost:4000/api/logOut',
            method : "GET",
            headers : {'Content-Type' : 'application/json'}
        })
        .then(function(response){
            sessionStorage.clear();
            console.log("logout response",response);
            $localStorage.loggedIn =false;
            $scope.isLoggedIn=$localStorage.loggedIn;
            alert('you succfully logout');
            $location.path('propertyscroll');   
        })
        .catch(function(response){
            console.log("error in posting",response);
        })
    
    } else {
        txt = "You pressed Cancel!";
    }
    // document.getElementById("demo").innerHTML = txt;
    
    // $http({
    //     url : 'http://localhost:4000/api/logOut',
    //     method : "GET",
    //     headers : {'Content-Type' : 'application/json'}
    // })
    // .then(function(response){
    //     console.log("logout response",response);
    //     $localStorage.loggedIn =false;
    //     $scope.isLoggedIn=$localStorage.loggedIn;
    //     alert('you succfully logout');
    //     $location.path('propertyscroll');   
    // })
    // .catch(function(response){
    //     console.log("error in posting",response);
    // })

}
});

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/propertyscroll');

    $stateProvider
                    // .state('HomeOuter' , {
                    //     url:'/HomeOuter',
                    //     templateUrl:'pages/HomeOuter.html',
                    // })
                    .state('Home' , {
                        url:'/Home',
                        templateUrl:'tamplate/Home.html',
                        controller : 'DemoController'
                    })
                    .state('About' , {
                        url:'/About',
                        templateUrl:'tamplate/About.html',
                        controller : 'TabController'
                    })
                    .state('Contact' , {
                        url:'/Contact',
                        templateUrl:'tamplate/Contact.html',
                        controller : "ContactCtrl"
                    })
                    .state('Property' , {
                        url:'/Property',
                        templateUrl:'tamplate/Property.html',
                        controller : 'ProControllers',
                    })
                    .state('Login' , {
                        url:'/Login',
                        templateUrl:'tamplate/Login.html',
                        controller : 'loginControllers'
                    })
                    .state('Signup' , {
                        url:'/Signup',
                        templateUrl:'tamplate/Signup.html',
                        controller : 'signupController'
                    })
                    .state('Bs' , {
                        url:'/Bs',
                        templateUrl:'tamplate/Bs.html',
                        controller : 'helincave'
                    })
                    .state('Forgetpassword' , {
                        url:"/Forgetpassword",
                        templateUrl:'tamplate/Forgetpassword.html',
                        controller : 'forgetPassController'
                    })
       //static pass query parameter in url
                    // .state('Forgetpassword' , {
                    //     url:"/Forgetpassword?email&pass",
                    //     templateUrl:'tamplate/Forgetpassword.html',
                    //     controller : 'forgetPassController'
                    // })
                    .state('Term&Conditon' , {
                        url:'/Term&Conditon',
                        templateUrl:'tamplate/Term&Conditon.html',
                       
                    })
                    .state('banner' , {
                        url:'/banner',
                        templateUrl:'tamplate/banner.html',
                        controller:'bannerCtrl'
                       
                    })
                    .state('propertyscroll' , {
                        url:'/propertyscroll',
                        templateUrl:'tamplate/propertyscroll.html',
                        controller:'propertyscroll'
                       
                    })
                    .state('slideshow' , {
                        url:'/slideshow',
                        templateUrl:'tamplate/slideshow.html',
                        controller:'slideshowCtrl'
                       
                    })
                    .state('detailsproperty' , {
                        url:'/detailsproperty',
                        templateUrl:'tamplate/detailsproperty.html',
                        controller:'detailspropertyCtrl'
                     })
                     .state('EmailverifiForgetpass' , {
                        url:'/EmailverifiForgetpass',
                        templateUrl:'tamplate/EmailverifiForgetpass.html',
                        controller:'EmailverifiForgetpass'
                     })
                     .state('adminDashboard' , {
                        url:'/adminDashboard',
                        templateUrl:'tamplate/adminDashboard.html',
                        controller:'adminDashboardCtrl'
                     })
                     .state('adminDashboard.adminUserDetails' , {
                        url:'/adminUserDetails',
                        templateUrl:'tamplate/adminUserDetails.html',
                        controller:'adminUserDetailsCtrl'
                     })
                     .state('adminDashboard.adminUserProperty' , {
                        url:'/adminUserProperty',
                        templateUrl:'tamplate/adminUserProperty.html',
                        controller:'adminUserPropertyCtrl'
                     });
                           
});