var app6=angular.module('app6',[]);
app6.controller('petctrl',function($scope,$rootScope){
  $scope.pet=[
    {realname:"Uma",petname:"ammu"},
    {realname:"maheswari",petname:"PK"}
  ];
  $scope.getpet=function()
  {
    name=$scope.pet_name;
    $scope.petdata="Not Found";
    for(var i=0;i<$scope.pet.length;i++)
    {
      if($scope.pet[i].petname === name)
      {
          $scope.petdata=$scope.pet[i].petname+ "\'s RealName is  " +$scope.pet[i].realname;
      }
    }
  };
  $scope.$on("petupdates", function(event, args)
  {
   $scope.pet.push({
     realname: args.realname, petname: args.petname
   });
 });
 $scope.addnewpet = function(realname, petname){
   $rootScope.$broadcast("petupdates",
   {
     realname: realname, petname: petname
   });
 };
});
