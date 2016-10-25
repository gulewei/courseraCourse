(function () {

  angular.module('ShoppingListCheckOff', [])
  .controller('toBuyController', toBuyController)
  .controller('alreadyBuyController', alreadyBuyController)
  .service('listCheckService', listCheckService);

  toBuyController.$inject = ['listCheckService'];
  function toBuyController (listCheckService) {
    var toBuy = this;
    toBuy.list = listCheckService.getToBuy();
    toBuy.moveItem = listCheckService.moveItem;
  }
  
  alreadyBuyController.$inject = ['listCheckService'];
  function alreadyBuyController (listCheckService) {
    var alreadyBuy = this;
    alreadyBuy.list = listCheckService.getalreadyBuy();
  }
  
  function listCheckService () {
    var service = this;
    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "apples", quantity: 8 },
      { name: "cups", quantity: 6 },
      { name: "noodles", quantity: 4 },
      { name: "beers", quantity: 2 }
    ];
    var alreadyBuy = [];

    service.getToBuy = function () {
      return toBuy;
    }

    service.getalreadyBuy = function () {
      return alreadyBuy;
    }

    service.moveItem = function (index) {
      alreadyBuy.push(toBuy[index]);
      toBuy.splice(index, 1);
    }
  }

})();