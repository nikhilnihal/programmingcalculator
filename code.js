/// this is an external javascript file for prac1.html ,it has extension of .js

var myApp = angular.module("myModule",[]);///2 parameter hota h, 2nd one is for dependency.  module creation , module is just like main function
///this module is named as "myModule". modules can stores controller,filters etc. with it.

///now we are creating a controller and it is registered in module. controller have functions inside it
myApp.controller("myController", function($scope){
			
	var technologies = [
	 {name: "H.C.F of two Numbers", link:"http://nikhilnihal.blogspot.in/2016/08/lcm-and-hcf-program.html" },
	 {name: "L.C.M of two Numbers" , link:"http://nikhilnihal.blogspot.in/2016/08/lcm-and-hcf-program.html"},
     {name: "Ratio of two Numbers", link:"http://nikhilnihal.blogspot.in/2016/08/ratio-of-two-numbers.html" },
	 {name: "XOR of two Numbers" , link:"http://nikhilnihal.blogspot.in/2016/08/logical-xor-program.html"},
	 {name: "OR of two Numbers", link:"http://nikhilnihal.blogspot.in/2016/08/logical-or-program.html"},
	 {name: "AND of two Numbers", link:"http://nikhilnihal.blogspot.in/2016/08/logical-and-program.html"},
	 {name: "Power of two Numbers", link:"http://nikhilnihal.blogspot.in/2016/08/power-finding-program.html"},
	 {name: "Decimal to Binary", link:"http://nikhilnihal.blogspot.in/2016/08/program-for-decimal-to-binary-conversion.html"},
	 {name: "Binary to Decimal", link:"http://nikhilnihal.blogspot.in/2016/08/program-for-binary-to-decimal-conversion.html"},
	]
	
	$scope.technologies=technologies;
	
	$scope.rowlimit=5;
	$scope.sortColumn="name";
	$scope.reverseSort =false;
	
	$scope.sortData = function(column){
	  $scope.reverseSort =($scope.sortColumn==column) ? !$scope.reverseSort:false;	
	  $scope.sortColumn=column;
	}
	
	$scope.getSortClass = function(column){
		if($scope.sortColumn==column){
			return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
		}
		return '';	
	}

	$scope.incrementLike = function(technology){
	  $scope.show=technology.name;
	  alert(technology.name);
	}
}); 