require('./css/bootstrap.min.css');
var angular = require('angular');
var app = angular.module('myApp', []);
var transform = function(data) {
    return $.param(data);
};

app.controller("myCtrl", ["$scope", "$http", function($scope, $http) {
    $scope.httpConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        transformRequest: transform
    };
	$scope.getData = function(){
		$http.get("./json/1.json").success(function(data){
			if(data.resultCode != 1){
				alert(data.resultMsg);
				return
			}
			console.log("get it");
			parseTree(data.objlist);
			$scope.treeData = data.objlist;
			$scope.refreshTime = new Date().getTime();
		});
	};
	$scope.getData();
    //递归实现
    function parseTree(treeNodes){
        if (!treeNodes || !treeNodes.length) return;
        for (var i = 0, len = treeNodes.length; i < len; i++) {
            var childs = treeNodes[i].nodes;
            treeNodes[i].$$isExpand = true;
            if(treeNodes[i].level == 2){
            	continue;
            }
            if(childs && childs.length > 0){
                parseTree(childs);
            }
        }
    };
}]);

require('./directives/topology/topology.js')(app);