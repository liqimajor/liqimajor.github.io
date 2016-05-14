webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var angular = __webpack_require__(8);
	var ngModule = angular.module('mainModule', []);
	__webpack_require__(14);
	__webpack_require__(16)(ngModule);
	var config = __webpack_require__(17);

	var transform = function(data) {
	    return $.param(data);
	};


	ngModule.controller("mainController", ['$scope','$interval','$timeout','$http', function ($scope,$interval,$timeout,$http) {
	    $scope.lineConfig = {
	        dataLoaded:false
	    };

	    // function onClick(){
	    //     alert(123)
	    // }
	    //
	    // $scope.lineConfig.event = [{click:onClick}];

	    $scope.httpConfig = {
	        headers: {
	            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	        },
	        transformRequest: transform
	    };

	    $http.post(config.index,$scope.httpConfig)
	    .success(function (respData) {
	            $scope.lineConfig.dataLoaded = true;
	            if (1 == respData.resultCode) {
	                $scope.data = respData;
	                console.log($scope.data);
	            } else {
	                alert(respData.resultMsg);
	            }
	    })
	    .error(function (respData) {
	        $scope.lineConfig.dataLoaded = true;
	        alert(respData.resultMsg);
	    });


	    // $scope.data ={
	    //     "resultCode": "1",
	    //     "resultMsg": "查询所有评分成功",
	    //     "errorMsg": null,
	    //     "params": null,
	    //     "serviceSolvedTime": "耗时：1464毫秒",
	    //     "objlist": [
	    //         {
	    //             "id": 1,
	    //             "name": "直通1线",
	    //             "parentId": 0,
	    //             "level": 1,
	    //             "extendId": 11,
	    //             "isScore": 10,
	    //             "score": null,
	    //             "logical": null,
	    //             "weight": null,
	    //             "extends2": null,
	    //             "extends3": null
	    //         },
	    //         {
	    //             "id": 2,
	    //             "name": "直通2线",
	    //             "parentId": 0,
	    //             "level": 1,
	    //             "extendId": 11,
	    //             "isScore": 20,
	    //             "score": null,
	    //             "logical": null,
	    //             "weight": null,
	    //             "extends2": null,
	    //             "extends3": null
	    //         },
	    //         {
	    //             "id": 3,
	    //             "name": "直通3线",
	    //             "parentId": 0,
	    //             "level": 1,
	    //             "extendId": 11,
	    //             "isScore": 21,
	    //             "score": null,
	    //             "logical": null,
	    //             "weight": null,
	    //             "extends2": null,
	    //             "extends3": null
	    //         },
	    //         {
	    //             "id": 4,
	    //             "name": "直通4线",
	    //             "parentId": 0,
	    //             "level": 1,
	    //             "extendId": 11,
	    //             "isScore": 55,
	    //             "score": null,
	    //             "logical": null,
	    //             "weight": null,
	    //             "extends2": null,
	    //             "extends3": null
	    //         }
	    //     ]
	    // };

	    $scope.dashboard = function (name, value) {
	        $scope.lineOption  = {
	            option: true,
	            tooltip : {
	                formatter: "{a} <br/>{b} : {c}%"
	            },
	            toolbox: {
	                feature: {
	                    restore: {}
	                }
	            },
	            series: [
	                {
	                    name: name,
	                    type: 'gauge',
	                    detail: {formatter:value},
	                    data: [{value: value, name: '得分'}],
	                    axisLine: {            // 坐标轴线
	                        show: true,        // 默认显示，属性show控制显示与否
	                        lineStyle: {       // 属性lineStyle控制线条样式
	                            // color: [[0.2, 'lightgreen'],[0.4, 'orange'],[0.8, 'skyblue'],[1, '#ff4500']],
	                            width: 30
	                        }
	                    },
	                    title : {
	                        show : true,
	                        offsetCenter: ['0', '80%'],       // x, y，单位px
	                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                            color: '#333',
	                            fontSize : 20,
	                            fontWeight: 'bold'
	                        }
	                    }
	                }
	            ]
	        };
	        //控制警戒字段
	        if ($scope.lineOption.series[0].data[0].value <= 60) {
	            $scope.lineOption.series[0].axisLine.lineStyle.color= [[$scope.lineOption.series[0].data[0].value/100, 'red'],[1, '#ccc']]
	        }
	        else{
	            $scope.lineOption.series[0].axisLine.lineStyle.color= [[$scope.lineOption.series[0].data[0].value/100, 'green'],[1, '#ccc']]
	        }
	        return $scope.lineOption;
	    };

	}]);






	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/raw-loader/index.js!./../node_modules/less-loader/index.js!./global.less", function() {
				var newContent = require("!!./../node_modules/raw-loader/index.js!./../node_modules/less-loader/index.js!./global.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "@charset \"utf-8\";\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n  font-size: 100%;\n}\n/* HTML5标签初始化\n--------------------------------------------------*/\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmenu,\nnav,\nsection {\n  display: block;\n}\n/* 标签初始化\n--------------------------------------------------*/\nbody {\n  color: #333;\n  font: 14px/1.5 \"微软雅黑\", Arial, Helvetica, Verdana, sans-serif;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n  border-left: solid 4px #39c;\n  background: whitesmoke;\n  margin: 10px auto;\n  padding: 6px 10px;\n  color: #666;\n  font-size: 20px;\n}\ni {\n  font-style: normal;\n  font-weight: normal;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na img {\n  border: 0;\n}\nh1 {\n  font-size: 24px;\n}\nh2 {\n  font-size: 20px;\n}\nh3 {\n  font-size: 18px;\n}\nh4 {\n  font-size: 14px;\n}\nh5,\nh6 {\n  font-size: 12px;\n}\na {\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n}\ndiv {\n  display: block;\n}\n/* 解决Google浏览器字体不小于12px的问题\n--------------------------------------------------*/\nhtml {\n  -webkit-text-size-adjust: none;\n}\na:focus {\n  outline: none;\n}\n.index {\n  padding: 4% 0;\n  background: #eaedf1;\n}\n.index .con {\n  position: relative;\n  width: 20%;\n  padding-top: 20%;\n  margin-left: 4%;\n  margin-bottom: 4%;\n  float: left;\n  background: white;\n  box-shadow: 0 2px 8px #ccc;\n}\n.index .con:before,\n.index .con:after {\n  content: \" \";\n  display: table;\n  clear: both;\n}\n.index .con_tit {\n  top: -5px;\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  line-height: 40px;\n  text-indent: 10px;\n  background: #f9fafc;\n}\n"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(echarts) {/**
	 * Created by xujun on 16/3/16.
	 */
	module.exports = function (ngModule) {
	    ngModule.directive('ngEcharts', [ngEchartsFn]);
	    function ngEchartsFn() {
	        return {
	            scope:{
	                option:'=ecOption',
	                config:'=ecConfig'
	            },
	            restrict:'EA',
	            controller: ['$scope','$element', function($scope,$element){
	                $scope.chart = echarts.init($element[0]);

	                this.getChart = function(){
	                    return $scope.chart;
	                };

	                this.showLoading = function (loadingOption) {

	                    var op = loadingOption || {
	                            text : '数据加载中',
	                            effect : 'bubble',
	                            textStyle : {
	                                fontSize : 20
	                            }
	                        };
	                    $scope.chart.showLoading(op);
	                };

	                this.hideLoading = function () {
	                    $scope.chart.hideLoading();
	                };
	            }],
	            link: function(scope,element,attrs,ctrl){
	                var chart = scope.chart;

	                function refreshChart(){
	                    chart.clear();
	                    if(scope.config && scope.config.dataLoaded === false){
	                        ctrl.showLoading(scope.config.loadingOption);
	                    }

	                    if(scope.config && scope.config.dataLoaded){
	                        //var tn = theme.getTheme(scope.config.theme);
	                        chart.setOption(scope.option);
	                        //chart.setTheme(tn||{});
	                        chart.resize();
	                        ctrl.hideLoading();
	                    }
	                };

	                //事件绑定
	                function bindevent(){
	                    if(angular.isArray(scope.config.event)){
	                        angular.forEach(scope.config.event,function(value,key){
	                            for(var e in value){
	                                chart.on(e,value[e]);
	                            }
	                        });
	                    }
	                }

	                if(scope.config.event){
	                    bindevent();
	                }

	                //自定义参数 -
	                // event 定义事件
	                // theme 主题
	                // dataLoaded 数据是否加载

	                scope.$watch(
	                    function () { return scope.config; },
	                    function (value) {if (value) {refreshChart();}},
	                    true
	                );

	                //图表原生option
	                scope.$watch(
	                    function () { return scope.option; },
	                    function (value) {if (value) {refreshChart();}},
	                    true
	                );
	            }
	        }
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"echarts\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ },
/* 17 */
/***/ function(module, exports) {

	var config = config || {};
	//config.realhost = "http://www.zcy365.com/maimeng";
	config.realhost = "http://www.189ytj.com/maimeng";
	config.host = "/monitorMgr";
	config.index = config.host + '/healthScore/gethealthscore.do';
	module.exports = config;


/***/ }
]);