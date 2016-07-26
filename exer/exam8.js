var app8=angular.module("app8",[]);
app8.controller("Myctrl",function($scope){
$scope.name="Uma";
$scope.x=["uma","abc","def","qwe","jyd","nbv","loi","fdf"];
$scope.people=[
  {id:"1",name:"uma"},
  {id:"4",name:"PK"},
  {id:"2",name:"pk"},
  {id:"5",name:"Ammu"},
  {id:"3",name:"maheswari"}];
  $scope.getkey=function(x){
    $scope.sortkey=x;
  }
  $scope.currDate = new Date();
  $scope.mystr = "Early brain surgery.Archeologists found evidence that primitive barain surgery was performed by drilling a hole in the skull";
});
