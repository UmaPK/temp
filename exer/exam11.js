var app11 = angular.module('app11', []);
app11.directive("item", function() {
    var directive = {};
    directive.restrict = 'AEC';
    directive.template = "{{item.name}} \'s pirce is {{item.value}}";
    directive.scope = { item: "=name" };
    directive.compile = function(element, attributes){
      var linkFunc = function($scope, element, attributes){
        element.bind('click', function() {
          element.html('disappeared');
        });
      }
      return linkFunc;
    }
    return directive;
});
app11.controller("mainCtrl", function($scope) {
    $scope.bag = {name: "bag", value: 2098};
    $scope.hankAaron =  {name: "pencil",value: 305};
    $scope.babeRuth = {name: "ruler", value: 42};
    $scope.myitem=[{name: "bag", value: 2098}, {name: "pencil",value: 305},{name: "ruler", value: 42}];

    });
