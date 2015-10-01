var app = angular.module('forex', []);

app.controller('Ctrl', function($scope) {
  
  $scope.entry = 0;
  $scope.exit = 0;
  //$scope.totalPipWorth = ($scope.outputShort / $scope.entry) * $scope.lotsize;

  
  $scope.calculatePipsLong = function() {
    
    $scope.outputLong = Math.round(($scope.exit - $scope.entry) * 10000); 
  }
  
  $scope.calculatePipsShort = function() {
    
    $scope.outputLong = Math.round(($scope.entry - $scope.exit) * 10000); 
  }
  
  $scope.calculatePipWorth = function() {
    
  	$scope.pipWorth = (1 / $scope.entry) * $scope.lotsize;
  }

    $scope.TotalPipWorthShort = function() {
    
  	$scope.totalPipsAmount = ($scope.pipWorth / $scope.outputLong) * $scope.lotsize;
  }
  });