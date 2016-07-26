var Myapp=angular.module('Myapp',[]);
Myapp.controller('cont',function($scope)
{
  $scope.add_tax=true;
  $scope.mytotal=false;
  $scope.current_total=0;
$scope.display=function(){
  $Myname=$scope.name;
  };
// $scope.myrand=Math.floor((Math.random()*100)+1);
$scope.Cost=function(){
  $scope.$watch('cost',update);
};
var update=function()
{
    $scope.tax=$scope.add_tax ? $scope.cost*0.15 : 0.0;
    $scope.total=$scope.mytotal ? parseFloat($scope.cost)+$scope.tax:0.0;
}
$scope.add=function(){
  console.log(parseFloat($scope.current_total));
    $scope.current_total+=$scope.total;
};
  $scope.snipping_options=[
    {price:2.0,pname:"pencil"},
    {price:5.0,pname:"ruler"},
    {price:50.0,pname:"pen"}
  ];
  $scope.snipping=$scope.snipping_options[0];
// <<<<<<------radio button------>>>>>>>
  // $scope.snipping_options=[
  //   {price:200.0,pname:"Book"},
  //   {price:500.0,pname:"Bag"},
  //   {price:50.0,pname:"Marker"}
  // ];
  // $scope.snipping=200.0;
// <<<<<<------radio button end ------>>>>>>>
});




// var Myapp1=angular.module('Myapp1',[]);
Myapp.controller('Mycont',function($scope)
{
$scope.employee=[
  {name:"uma",phone:["1234","1121"]},
  {name:"ammu",phone:["5678"]},
  {name:"Umapk",phone:["9101"]}
];
$scope.show=function(){
  $scope.phone_details=true;
};
$scope.hide=function(){
$scope.phone_details=false;
};
});






Myapp.controller('user_cont',function($scope){
  $scope.user=null;
});
