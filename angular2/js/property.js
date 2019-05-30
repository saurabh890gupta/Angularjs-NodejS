app.controller('propertyController'['$scope',function($scope ,_$http,_$location, uploadService){
 

  
 //tab system
  $scope.tab = 1;
  
  $scope.setTab = function(newTab){
    // if( $scope.obj.propertyprice|| $scope.obj.propertyname|| $scope.obj.phone){
      $scope.tab = newTab;
    //  }
    
      // else{
      //   return false;
      // }
};
$scope.isSet = function(tabNum){
  return $scope.tab === tabNum;
};
//end tab system
  //fileupload1



  $scope.$watch('file', function(newfile, oldfile) {
    if(angular.equals(newfile, oldfile) ){
      return;
    }

    uploadService.upload(newfile).then(function(res){
      // DO SOMETHING WITH THE RESULT!
      console.log("result", res);
    })
});
  
app.directive("fileinput", [function() {
  return {
    scope: {
      fileinput: "=",
      filepreview: "="
    },
    link: function(scope, element, _attributes) {
      element.bind("change", function(changeEvent) {
        scope.fileinput = changeEvent.target.files[0];
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
          scope.$apply(function() {
            scope.filepreview = loadEvent.target.result;
          });
        }
        reader.readAsDataURL(scope.fileinput);
      });
    }
  }
}]);











    $scope.imageSrc = "";
    
    $scope.$on("fileProgress", function(_e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });


app.directive("ngFileSelect", function(fileReader, $timeout) {
  return {
    scope: {
      ngModel: '='
    },
    link: function($scope, el) {
      function getFile(file) {
        fileReader.readAsDataUrl(file, $scope)
          .then(function(result) {
            $timeout(function() {
              $scope.ngModel = result;
            });
          });
      }

      el.bind("change", function(e) {
        var file = (e.srcElement || e.target).files[0];
        getFile(file);
      });
    }
  };
});

app.factory("fileReader", function($q, _$log) {
var onLoad = function(reader, deferred, scope) {
  return function() {
    scope.$apply(function() {
      deferred.resolve(reader.result);
    });
  };
};

var onError = function(reader, deferred, scope) {
  return function() {
    scope.$apply(function() {
      deferred.reject(reader.result);
    });
  };
};

var onProgress = function(_reader, scope) {
  return function(event) {
    scope.$broadcast("fileProgress", {
      total: event.total,
      loaded: event.loaded
    });
  };
};

var getReader = function(deferred, scope) {
  var reader = new FileReader();
  reader.onload = onLoad(reader, deferred, scope);
  reader.onerror = onError(reader, deferred, scope);
  reader.onprogress = onProgress(reader, scope);
  return reader;
};

var readAsDataURL = function(file, scope) {
  var deferred = $q.defer();

  var reader = getReader(deferred, scope);
  reader.readAsDataURL(file);

  return deferred.promise;
};

return {
  readAsDataUrl: readAsDataURL
};
});



























  //endfile upload
  //secondfile
//   $scope.imageSrc = "";
    
//   $scope.$on("fileProgress", function(e, progress) {
//     $scope.progress = progress.loaded / progress.total;
//   });





// app.directive("ngFileSelect", function(fileReader, $timeout) {
//   return {
//     scope: {
//       ngModel: '='
//     },
//     link: function($scope, el) {
//       function getFile(file) {
//         fileReader.readAsDataUrl(file, $scope)
//           .then(function(result) {
//             $timeout(function() {
//               $scope.ngModel = result;
//             });
//           });
//       }

//       el.bind("change", function(e) {
//         var file = (e.srcElement || e.target).files[0];
//         getFile(file);
//       });
//     }
//   };
// });

// app.factory("fileReader", function($q, $log) {
// var onLoad = function(reader, deferred, scope) {
//   return function() {
//     scope.$apply(function() {
//       deferred.resolve(reader.result);
//     });
//   };
// };

// var onError = function(reader, deferred, scope) {
//   return function() {
//     scope.$apply(function() {
//       deferred.reject(reader.result);
//     });
//   };
// };

// var onProgress = function(reader, scope) {
//   return function(event) {
//     scope.$broadcast("fileProgress", {
//       total: event.total,
//       loaded: event.loaded
//     });
//   };
// };

// var getReader = function(deferred, scope) {
//   var reader = new FileReader();
//   reader.onload = onLoad(reader, deferred, scope);
//   reader.onerror = onError(reader, deferred, scope);
//   reader.onprogress = onProgress(reader, scope);
//   return reader;
// };

// var readAsDataURL = function(file, scope) {
//   var deferred = $q.defer();

//   var reader = getReader(deferred, scope);
//   reader.readAsDataURL(file);

//   return deferred.promise;
// };

// return {
//   readAsDataUrl: readAsDataURL
// };
// });
 
  //endsecondfile

   
    
    
    // $scope.PropertySubmit=function(){
    //     console.log('my data is',obj);
    //     $http({
    //         url : 'http://localhost:4000/api/property',
    //         method : "post",
    //         data : obj,
    //         headers : {'Content-Type' : 'application/json'}
    //       })
    //      .then(function (response) {
    //          alert('ur succesfull submit');
    //         $location.path('/Home');
    //         console.log( $location.path());
    //      }).catch(function (response) {
    //        console.error("error in posting");
    //      });
    // }
}]);

