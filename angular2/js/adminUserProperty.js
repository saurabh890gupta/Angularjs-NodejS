app.controller('adminUserPropertyCtrl',function($scope,$http,$location,$state){

  $scope.IsVis = false;
  $scope.bar = function(index,propertyleaseperioud,propertyminbed){
     console.log("hello",index);
     console.log("hel",propertyleaseperioud);
     console.log("hello word",propertyminbed);
     $scope.pass=index;
     $scope.leaseperioud=propertyleaseperioud;
     $scope.minbed=propertyminbed;
      $scope.IsVis = $scope.IsVis  ? false : true;
  }
    $scope.DeleteUserProperty=function(x){
          var txt;
          var r = confirm("Are you sure you want to delete this data");
          if (r == true) {
              txt = "You pressed OK!";
              console.log('user property data found of dlete', x._id);
            // $http.post('http://localhost:4000/api/propertyDataDelet?_id='+x._id+'')
              $http.post('http://localhost:4000/api/propertyDataDelet',{ _id:x._id,})
              .then(function(response) {
                    if (response.data==="Done") {
                      alert("user property remove successfully");
                      //$location.path('.adminUserProperty');
                      $state.reload();
                    //$state.go('adminDashboard.adminUserProperty');
                    }
                    else{
                      alert("user property can not be delte");
                    }
                    console.log("userproprty data found",response);
              } )     
          }
          else {
              txt = "You pressed Cancel!";
          }
        // console.log('user property data found of dlete', x._id)
        // $http.post('http://localhost:4000/api/propertyDataDelet',{ _id:x._id,})
        // .then(function(response) {
        //   if (response.data==="Done") {
        //     alert("user property remove successfully");
        //     //$location.path('.adminUserProperty');
        //     $state.reload();
        //    //$state.go('adminDashboard.adminUserProperty');
        //      }
        //   else{
        //     alert("user property can not be delte");
        //   }
        //   console.log("userproprty data found",response);
        // } )     
    }
    $http.get('http://localhost:4000/api/PropertyDataSchema')
    .then(function(response) {
      console.log("safe data found",response);
      $scope.result = response.data;
            var propertyname=[];
            var phone=[];
            var propertyprice=[];
            var propertystate=[];
            var propertystatus=[];
            var propertycity=[];
            var propertyleaseperioud=[];
            var propertylaundryroom=[];
            var propertyleaseperioud=[];
            var propertyminbed=[];
            var propertyarea=[];
    } )  
    // $scope.IsVisible = false;
    // $scope.ShowHide = function(){
    //     $scope.IsVisible = $scope.IsVisible  ? false : true;
    // }

        // //data drop down
        // $scope.selectTableRow = function ($index, x) {
            
    
        //     if ($scope.tableRowExpanded === false && $scope.tableRowIndexExpandedCurr === "" && $scope.x._idExpanded === "") {
        //         $scope.tableRowIndexExpandedPrev = "";
        //         $scope.tableRowExpanded = true;
        //         $scope.tableRowIndexExpandedCurr = index;
        //         $scope.storeIdExpanded = x._id;
        //         $scope.dayDataCollapse[index] = true;
        //     } else if ($scope.tableRowExpanded === true) {
        //         if ($scope.tableRowIndexExpandedCurr === index && $scope.x._idExpanded === x._id) {
        //             $scope.tableRowExpanded = false;
        //             $scope.tableRowIndexExpandedCurr = "";
        //             $scope.storeIdExpanded = "";
        //             $scope.dayDataCollapse[index] = false;
        //         } else {
        //             $scope.tableRowIndexExpandedPrev = $scope.tableRowIndexExpandedCurr;
        //             $scope.tableRowIndexExpandedCurr = index;
        //             $scope.storeIdExpanded = storeId;
        //             $scope.dayDataCollapse[$scope.tableRowIndexExpandedPrev] = false;
        //             $scope.dayDataCollapse[$scope.tableRowIndexExpandedCurr] = true;
        //         }
        //     }
    
        // };

        // //data drop down

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