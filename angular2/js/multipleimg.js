app.controller('UploadController1', function($scope) {
    $scope.imageSrc = "";
    
    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });
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

app.factory("fileReader", function($q, $log) {
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

  var onProgress = function(reader, scope) {
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


// app.directive('ngFiles', ['$parse', function ($parse) {
// 	function fn_link(scope, element, attrs) {
// 		var onChange = $parse(attrs.ngFiles);
// 		element.on('change', function (event) {
// 			onChange(scope, { $files: event.target.files });
// 		});
// 	};
// 	return {
// 		link: fn_link
// 	}
// } ])
// .controller('myCntrl', function ($scope, $http) {
// //Get File
// 	var formdata = new FormData();
// 	$scope.getTheFiles = function ($files) {              
// 		angular.forEach($files, function (value, key) {
// 			formdata.append(key, value);
// 		});
// 	};
// 	// NOW UPLOAD THE FILES.
// 	$scope.uploadFiles = function () {
// 		var request = {
// 			   method: 'POST',
// 			   url: 'uploadFile.php',
// 			   data: formdata,
// 			   headers: {
// 				   'Content-Type': undefined
// 			   }
// 		};
// 		   $http(request).success(function(data) {
// 			 $scope.msg=data.message;                 
// 			  console.log('success!');
// 			})
// 			.error(function(data) {
// 			  $scope.msg=data.message;
// 			});
// 	}
// });


// app.controller('mainCtrl', ['$scope', 'Upload',"ngFileUpload", function ($scope, $timeout, Upload,fileReader){
// 	}]);
	

	