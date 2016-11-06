(function () {

    angular.module('NarrowItDownApp', [])
        .controller('foundItemsController', foundItemsController)
        .controller('NarrowItDownController', NarrowItDownController)
        .factory('MenuSearch', MenuSearchService)
        .directive('foundItems', foundItemsDirectve);


    function foundItemsController () {
        var fi = this;
    }
    
    function foundItemsDirectve() {
        return {
            restrick: 'E',
            templateUrl: 'found-items.tpl.html',
            scope: {
                foundList: '=found'
            },
            controller: 'foundItemsController'
        }
    }

    function MenuSearchService($http) {
        var reqData;
        return {
            getMatchedMenuItems: function (searchIterm) {
                var req = {
                    url: 'http://davids-restaurant.herokuapp.com/menu_items.json'
                }
                return $http(req).then(function (result) {
                    // process result and only keep items that match
                    reqData = result.data.menu_items;
                    console.log('result in service', result);
                    var foundItems = [];
                    for(var i=0; i<reqData.length; i++) {
                        if(reqData[i].description.indexOf(searchIterm)>-1) {
                            foundItems.push(reqData[i]);
                        }
                    }                

                    // return processed items
                    return foundItems;
                });
            }
        }
    }

    function NarrowItDownController(MenuSearch, $timeout) {
        var nid = this;
        var found = MenuSearch.getMatchedMenuItems('chicken');
        $timeout(function () {
            nid.found = found.$$state.value;
            console.log('nid.found: ', nid.found);
        }, 3000);
    }


})();