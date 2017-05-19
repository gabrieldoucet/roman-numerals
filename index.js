/**
 * Created by Gabriel on 19/05/2017.
 */

angular.module('romanNumerals', [])
  .controller('mainController', ['$scope', function ($scope) {

    $scope.error = false;
    $scope.$watch('input', function (newVal) {
      // The parsing is executed here to deal with compatibility issues
      let intValue = parseInt(newVal);
      if (Number.isInteger(intValue)) {
        if (intValue >= 1 && intValue <= 3999) {
          $scope.error  = false;
          $scope.result = intToRoman(intValue);
        } else {
          $scope.error  = true;
          $scope.result = '';
        }
      } else {
        if (!newVal) {
          $scope.error  = false;
          $scope.result = '';
        } else {
          $scope.error  = true;
          $scope.result = '';
        }
      }
    });
  }]);