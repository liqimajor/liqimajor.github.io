module.exports = function(ngModule) {
	ngModule.directive('topology', ["$http", topologyFn]);
	require('./topology.less');

	function topologyFn($http) {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				trees: '=',
				reftime: '=',
				colors: '=',
				refdata: '&'
			},
			template: require('./topology.html'),
			controller: function($scope) {
				$scope.addNode = function(item, $event) {
                    $http.get('./json/2.json').success(function(data){
						if(data.resultCode != 1){
							alert(data.resultMsg);
							return
						}
						item.nodes = [{
	                            "id": 54,
	                            "name": "孩子节点",
	                            "parentId": 50,
	                            "grade": 5,
	                            "extendId": 24421,
	                            "isScore": 1,
	                            "score": 100,
	                            "logic": 0,
	                            "weight": null,
	                            "extends2": null,
	                            "extends3": null,
	                            "nodes": null
	                        }
	                    ];
					});
				};
				$scope.modeNode = function(item, $event) {
					
				};
				$scope.delNode = function(item, $event) {
					console.log(this);
					console.log($scope);
					delNode($scope.trees, item);
				    function delNode(treeNodes, item){
				        if (!treeNodes || !treeNodes.length) return;
				        for (var i = 0, len = treeNodes.length; i < len; i++) {
				            var childs = treeNodes[i].nodes;
				            if(treeNodes[i].id == item.id){
				            	treeNodes.splice(i, 1);
				            	return;
				            }
				            if(childs && childs.length > 0){
				                delNode(childs, item);
				            }
				        }
				    }
					$event.stopPropagation();
				};
				$scope.itemExpanded = function(item, $event) {
					item.$$isExpand = !item.$$isExpand;
					$event.stopPropagation();
				};
//				$scope.getItemIcon = function(item) {
//					var isLeaf = $scope.isLeaf(item);
//
//					if (isLeaf) {
//						return 'fa fa-leaf';
//					}
//					return item.$$isExpand ? 'expand' : '';
//				};
				$scope.isLeaf = function(item) {
					return !item.nodes || !item.nodes.length;
				};
				$scope.wrapCallback = function(callback, item, $event) {
					($scope[callback] || angular.noop)({
						$item: item,
						$event: $event
					});
				};
				$scope.isNumber = function(num) {
					return typeof num == 'number';
				};
			},
			link: function(scope, element, attrs, ctrl) {
				console.log(element);
				console.log(element.find(".pNode"));
			}
		};
	}
}