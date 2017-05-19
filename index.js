/**
 * Created by Gabriel on 19/05/2017.
 */

angular.module('romanNumerals', [])
  .controller('mainController', ['$scope', function ($scope) {

    $scope.error = false;
    $scope.$watch('input', function (newVal) {
      if (newVal >= 1 && newVal <= 3999) {
        $scope.error  = false;
        $scope.result = intToRoman(newVal);
      } else if (newVal !== null && (newVal < 1 || newVal >= 4000)) {
        $scope.error  = true;
        $scope.result = '';
      } else {
        $scope.error  = false;
        $scope.result = '';
      }
    });
  }]);