angular.module('app10',[])
.directive('myDirective',function(){
return function(scope,element,attr){
  var data=scope[attr["myDirective"]];
  if(angular.isArray(data)){
    var items=attr["arrayItem"];
    var listele=angular.element("<div>");
    element.append(listele);
    for(var j=0;j<data.length;j++)
    {
      listele.append(angular.element('<p>').text(scope.$eval(items,data[j])));
    }
    listele.after(angular.element("<p id='Eraser'>").text("Eraser"));
    listele.prepend(angular.element("<p id='Bag'>").text("Bag"));
    scope.fun=function()
    {
      var bagHTML = "<span id='#Bag'>shoe</span>";
      var replacement = angular.element(bagHTML);
      angular.element(document.querySelector('#Bag')).replaceWith(replacement);}
    }
    scope.fun1=function()
    {
      angular.element(document.querySelector('#Eraser')).remove();
    }
    scope.fun2=function()
    {
    listele.after(angular.element("<p id='new'>").text(scope.new));
    // listele.after(angular.element("<br/>"));
    }
}
})
.controller("mainCtrl",function($scope){
  $scope.supermarket=[{item:"pen",value:"12"},
  {item:"pencil",value:"21"},
  {item:"ruler",value:"42"}];
});
