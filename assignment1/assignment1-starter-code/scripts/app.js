(function(){
    'use strict';

    angular.module('lunchCheckerApp', [])

    .controller('lunchController', function($scope) {
        $scope.lunchItems = '';
        $scope.message = '';

        $scope.lunchCheck = function() {
            if(isEmptyString($scope.lunchItems)) {
                $scope.message = "Please enter data first";
                return;
            }

            var items = $scope.lunchItems.split(',');
            var count = items.length;
            items.map(function(item) {
                if(isEmptyString(item))
                    count -= 1; 
            });
            $scope.message = count > 3 ? "Too much!" : "Enjoy!"; 

        };

        function isEmptyString(str) {
            var found = str.match(/\S/);

            return found ? false : true;
        }

    });

})();