
app.controller("MyCtrlv", function($scope) {
    $scope.dataSet = [
        {name:"hoge",index:0},
        {name:"piyo",index:1},
        {name:"fuga",index:2}
    ],
    $scope.current = $scope.dataSet[0],
    $scope.next = function(){
        var i = $scope.getIndex($scope.current.index, 1);
        $scope.current = $scope.dataSet[i];
    },
    $scope.previous = function(){
        var i = $scope.getIndex($scope.current.index, -1);
        $scope.current = $scope.dataSet[i];
    },
    $scope.getIndex = function(currentIndex, shift){
        var len = $scope.dataSet.length;
        return (((currentIndex + shift) + len) % len)
    }
});