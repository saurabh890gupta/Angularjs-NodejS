app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
 }]);

 app.service('fileUpload',  function ($http,$location) {
    this.uploadFileToUrl = function(file){
       var fd = new FormData();
       console.log("sdfhsdfdh",file);
       fd.append('file', file);
    
    //    $http.post('http://localhost:4000/api/propertydetails', fd, {
    //     transformRequest: angular.identity,
    //     headers: {'Content-Type': undefined}
    //  })
  
       
       $http({
        url : 'http://localhost:4000/api/propertydetails',
        method : "POST",
        dataType: "json",
        data :  file,
        headers : {'Content-Type' : 'application/json'},
    })
        .then(function (response) {
                 alert('ur succesfull submit');
                $location.path('/Home');
             console.log( $location.path());
             })
             .catch(function (response) {
             console.error("error in posting",response);
             })
            }
            
            
 });

 app.controller('helincave', ['$scope', 'fileUpload', function($scope, fileUpload){
    $scope.uploadFile = function(){
       var file = $scope.myFile;
       
       console.log('file is ' );
       console.dir(file);
       
       var uploadUrl = "/fileUpload";
       fileUpload.uploadFileToUrl(file, uploadUrl);
    };
 }]);