var app7=angular.module("app7",[]);
app7.controller("parentctrl",function($scope){
  this.name="Uma";
  this.age="21";
  this.Myclick=function(){
    alert(this.name + " says " + this.age);
  };
});
app7.controller('childctrl', function($controller) {
   var mychild = this;
  mychild.child = $controller('parenttrl', {});
  mychild.child.name = "PK";
  mychild.child.address ="sivakasi";
  mychild.child.biodata = function(){
     alert(this.name + " says " + this.age + " and " + this.address);
  }
});
