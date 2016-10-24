(function () {
  angular.module('shopList', []).
  controller('shopListController', function ($scope) {
    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "apples", quantity: 8 },
      { name: "cups", quantity: 6 },
      { name: "noodles", quantity: 4 },
      { name: "beers", quantity: 2 }
    ];
    $scope.toBuy = toBuy;
    var alreadyBuy = [];
    $scope.alreadyBuy = alreadyBuy;
    $scope.NothingBought = true;
    $scope.EverythingBought = false;

    $scope.moveItem = function (index) {
      alreadyBuy.push(toBuy[index]);
      toBuy.splice(index, 1);
      $scope.EverythingBought = toBuy.length === 0? true: false;
      $scope.NothingBought = alreadyBuy.length === 0? true: false;
    }
  })

})();