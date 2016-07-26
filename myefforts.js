var app1=angular.module("app1",[]);
  var content=[];
app1.controller("UserForm",function($scope,$http,$compile){

  $http.get("http://localhost:3000/profiles/1")
  .then(function(response) {
      $scope.content = response.data;
      // console.log($scope.content.Person_Details);
  }, function(response) {
      $scope.content = "Something went wrong";
  });
 //  $scope.edit=function(){
 //    var divElement = angular.element(document.querySelector('name'));
 //    var appendHtml = $compile('<div>uma PK</uma>')($scope);
 // divElement.append(appendHtml);
 //   };
  //console.log($scope.content.Name);

  });
app1.directive("mypro", function() {
  return function(scope, element, attrs) {
 scope.edit=function(){
  //  var b=document.querySelector('#email');
  //  console.log(attr);
   var e=scope.content.Person_Details.e_mail;
   var gehrigHTML = "<input type='text' id='email' ng-model='email'/>";
            var replacement = angular.element(gehrigHTML);
            replacement.attr("value",e);
            angular.element(document.querySelector('#email'))
            .replaceWith(replacement);}
  }
});
