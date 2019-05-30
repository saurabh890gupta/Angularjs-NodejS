 
 app.controller('DemoController', ['$scope','$http','$location','fileUploads' ,function($scope,_$http,_$location,fileUploads) {
   
    // // this.readAsDataURL = function( filename){
    //     console.log("dnfjksfjks",$scope.filename);
   
  
    
    $scope.fSubmit = function(){
       
        var formData = {
           fimage: $scope.filename,
           fname: $scope.fname,
           fprice:$scope.fprice,
            
        }
        console.log('fi',formData );
        var file = formData;
        
        console.log('file is ',file);
        var uploadsUrl = "/fileUploads";
        fileUploads.uploadFilesToUrl(file, uploadsUrl);
     };
    // }
  }]);


  app.service('fileUploads',  function ($http,$location,$localStorage) {
    this.uploadFilesToUrl = function(file, uploadsUrl){
       var fd = new FormData();
       console.log("sdfhsdfdh",file);
       fd.append('file', file);
     $http({
        url : 'http://localhost:4000/api/filessubdata',
        method : "POST",
        dataType: "json",
        data :  file,
        headers : {'Content-Type' : 'application/json'},
    })
        .then(function (response) {
            console.log("sdfnjksdfhjk",response.data);
            $localStorage.loggedIn=false;
            location.reload();
                 alert('ur succesfull submit');
                $location.path('/Home');
             console.log( $location.path());
             })
             .catch(function (response) {
             console.error("error in posting",response);
             })
            }
            
            
 });
 
 app.directive("fileput", [function() {
    return {
      scope: {
        fileput: "=",
        filepreview: "=",
        filename :"=",
        
      },
       link: function(scope, element, attributes) {
        element.bind("change", function(changeEvent) {
        scope.fileput = changeEvent.target.files[0];
         console.log("file show",scope.fileput);
         
        scope.filename = changeEvent.target.files[0].name;
        console.log("filepath:",scope.filename);
            var reader = new FileReader();
          reader.onload = function(loadEvent) {
            scope.$apply(function() {
              scope.filepreview = loadEvent.target.result;
              
            });
          }
          reader.readAsDataURL(scope.fileput,scope.filename);
          
        });
      }
    }
  }]);

