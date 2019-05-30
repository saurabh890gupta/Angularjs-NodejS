 
 app.controller('ProControllers' ,function($scope,$http,$location) {
  $scope.propertyfn=function(){
    alert("pl submit new property can not show property");
  }
  
  $scope.redirect=function(x){
    console.log("find by id ",x._id);
       $location.path('/detailsproperty').search({X: x._id,Name: x.fname ,Price:x.fprice,});
  }

   $http.get('http://localhost:4000/api/propertydata')
  .then(function(response) {
    console.log("data is find",response.data);
    $scope.data = response.data;
              var fimage=[];
              var fname=[];
              var fprice=[];
                // data.forEach((data)=>{
                //                 fimage.push(data.fimage);
                //                 fname.push(data.fname);
                //                 fprice.push(data.fprice);
                                        
                //                         $scope.fimage = data.fimage;
                //                         console.log("images upload",$scope.fimage);
                //                         $scope.fname = data.fname;
                //                         console.log("name upload", $scope.fname);
                //                         $scope.fprice = data.fprice;
                //                         console.log("price upload", $scope.fprice);
                //                                 // var x=[];
                //                                 // var y=[];
                //                                 // var m=[];
                                              
                //                                 // for(var i=0; i<6; i++)
                //                                 // {
                //                                 //  x[i]=  $scope.fimage[i];
                                              
                //                                 //   y[i]= $scope.fname[i];
                //                                 //   console.log(y[i]);
                //                                 //   m[i]= $scope.fprice[i];
                //                                 //   console.log(m[i]);
                //                                 // } 
                //   });
     
  });

//pagination use

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
});
