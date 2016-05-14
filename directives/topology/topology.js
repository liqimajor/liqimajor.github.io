module.exports = function(ngModule) {
	ngModule.directive('topology', [topologyFn]);
	require('./topology.less');

	function topologyFn() {
		return {
			restrict: 'E',
			replace: true,
			scope: {
				trees: '=',
				reftime: '=',
				refdata: '&'
			},
			template: require('./topology.html'),
			controller: function($scope) {
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
			},
			link: function(scope, element, attrs, ctrl) {
				console.log(element);
				console.log(element.find(".pNode"));
			}
		};
	}
}