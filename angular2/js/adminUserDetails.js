app.controller("adminUserDetailsCtrl",function($scope,$http,$location,$state){
    $scope.DeleteUser=function(x){

    var txt;
    var r = confirm("Are you sure you want to delete this data");
    if (r == true) {
        txt = "You pressed OK!";
        console.log('email data found of dlete', x.email)
        $http.post('http://localhost:4000/api/signupDataDelete',{ email:x.email,})
        .then(function(response) {
          if (response.data==="Done") {
            // location.reload();
            alert("user remove successfully");
            $state.reload();
            // $location.path('/adminUserDetails');
             }
          else{
            alert("user can not be delete");
          }
          console.log("signupDataAdmin data found",response);        
        } )     
    
    
    } else {
        txt = "You pressed Cancel!";
    }
  }



    //     console.log('email data found of dlete', x.email)
    //     $http.post('http://localhost:4000/api/signupDataDelete',{ email:x.email,})
    //     .then(function(response) {
    //       if (response.data==="Done") {
    //         // location.reload();
    //         alert("user remove successfully");
    //         $state.reload();
    //         // $location.path('/adminUserDetails');
    //          }
    //       else{
    //         alert("user can not be delete");
    //       }
    //       console.log("signupDataAdmin data found",response);        
    //     } )     
    // }
    $http.get('http://localhost:4000/api/signupDataAdmin')
    .then(function(response) {
      console.log("signupDataAdmin data found",response.data);
      $scope.result = response.data;
      var user_name=[];
      var email=[];
      var address=[];              
    } )      

    $scope.itemsPerPage = 6;
    $scope.currentPage = 0;
    $scope.items = [];
  
    for (var i=0; i<50; i++) {
      $scope.items.push({ id: i, name: "name "+ i, description: "description " + i });
    }
  
    $scope.range = function() {
      var rangeSize = 5;
      var ret = [];
      var start;
  
      start = $scope.currentPage;
      if ( start > $scope.pageCount()-rangeSize ) {
        start = $scope.pageCount()-rangeSize+1;
      }
  
      for (var i=start; i<start+rangeSize; i++) {
        ret.push(i);
      }
      return ret;
    };
  
    $scope.prevPage = function() {
      if ($scope.currentPage > 0) {
        $scope.currentPage--;
      }
    };
  
    $scope.prevPageDisabled = function() {
      return $scope.currentPage === 0 ? "disabled" : "";
    };
  
    $scope.pageCount = function() {
      return Math.ceil($scope.items.length/$scope.itemsPerPage)-1;
    };
  
    $scope.nextPage = function() {
      if ($scope.currentPage < $scope.pageCount()) {
        $scope.currentPage++;
      }
    };
  
    $scope.nextPageDisabled = function() {
      return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
    };
  
    $scope.setPage = function(n) {
      $scope.currentPage = n;
    };
});
// app.filter('offset', function() {
//   return function(input, start) {
//     start = parseInt(start, 10);
//     return input.slice(start);
//   };
// //pagination end
// });

app.filter('offset', function() {
  return function(input, start) {
      if (!input || !input.length) { return; }
      // start = +start; //parse to int
      return input.slice(start);
  }
})