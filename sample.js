angular.module("Myapp",[])
.controller("ctrl", function($scope,$http)
{
  $scope.nest_arr=[];
  $scope.profile=[];
  $scope.getData=function()
  {
    $http.get("http://localhost:3000/profile").success(function(data)
    {
      if(data[0].Name==="uma")
      {
        $scope.profile.push(data[0].Education);
          $scope.nest_arr=data[0].Education.SSC;
      }
      console.log($scope.nest_arr);
    });
    }
});
