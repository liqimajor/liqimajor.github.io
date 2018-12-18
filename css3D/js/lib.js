function scaleEle(a, b) {
	var c, d = screenWidth / screenHeight,
		e = 640 / 1008;
	c = d > e ? screenHeight / 1008 : screenWidth / 640,
		$(a).css({
			"-webkit-transform-origin": b,
			"transform-origin": b,
			"-webkit-transform": "scale(" + c + ");",
			transform: "scale(" + c + ");"
		})
}

function isAndroid() {
	var a = navigator.userAgent.toLocaleLowerCase();
	return a.indexOf("android") >= 0 || a.indexOf("linux") >= 0
}

function jyyzCallBack(a) {
	"1" == a.code || 1 == a.code ? (0 == a.prizeId ? (showResultPage("哇，你与红包只差一丁点儿<br>换个姿势再试试吧"),
			app.$share_btn.addClass("share_btn_0"),
			console.warn("没抢到红包!   弹窗")) : (showResultPage("哇，新年鸿运当头哦<br><span>恭喜获得" + a.prizeId + "元红包哦</span>"),
			app.$share_btn.addClass("share_btn_1"),
			console.warn("卧槽!!抢到红包了!   弹窗")),
		isSaving = !1) : (isSaving = !1,
		alert(a.msg))
}

function showResultPage(a) {
	app.$result_txt.html(a),
		app.$result_page.addClass("page_moveIn")
}! function() {
	function a(a) {
		a = a || {},
			this.settings = a,
			null == a.statusInterval && (a.statusInterval = 5e3),
			null == a.loggingDelay && (a.loggingDelay = 2e4),
			null == a.noProgressTimeout && (a.noProgressTimeout = 1 / 0);
		var c, d = [],
			e = [],
			f = Date.now(),
			g = {
				QUEUED: 0,
				WAITING: 1,
				LOADED: 2,
				ERROR: 3,
				TIMEOUT: 4
			},
			h = function() {
				var a = Math.ceil(((new Date).getTime() - c) / 1e3);
				if(a > 0) {
					var b = "0-2s";
					a > 2 && 5 > a ? b = "2-5s" : a > 5 && 10 > a ? b = "5-10s" : a > 10 && 15 > a ? b = "10-15s" : a > 15 && 30 > a ? b = "15-30s" : a > 30 && 60 > a ? b = "30-60s" : a > 60 && 120 > a ? b = "60-120s" : a > 120 && 300 > a ? b = "120-300s" : a > 300 && (b = ">300s")
				}
			},
			i = function(a)       {
				return null == a ? [] : Array.isArray(a) ? a : [a]
			};
		this.add = function(a) {
				a.tags = new b(a.tags),
					null == a.priority && (a.priority = 1 / 0),
					d.push({
						resource: a,
						status: g.QUEUED
					})
			},
			this.addProgressListener = function(a, c) {
				e.push({
					callback: a,
					tags: new b(c)
				})
			},
			this.addCompletionListener = function(a, c) {
				e.push({
					tags: new b(c),
					callback: function(b) {
						b.completedCount === b.totalCount && (a(b),
							h())
					}
				})
			};
		var j = function(a) {
			a = i(a);
			var b = function(b) {
				for(var c = b.resource, d = 1 / 0, e = 0; e < c.tags.length; e++)
					for(var f = 0; f < Math.min(a.length, d) && !(c.tags.all[e] === a[f] && d > f && (d = f,
							0 === d)) && 0 !== d; f++)
				;
				return d
			};
			return function(a, c) {
				var d = b(a),
					e = b(c);
				return e > d ? -1 : d > e ? 1 : a.priority < c.priority ? -1 : a.priority > c.priority ? 1 : 0
			}
		};
		this.start = function(a) {
			c = Date.now();
			var b = j(a);
			d.sort(b);
			for(var e = 0, f = d.length; f > e; e++) {
				var h = d[e];
				h.status = g.WAITING,
					h.resource.start(this)
			}
			setTimeout(k, 100)
		};
		var k = function() {
			for(var b = !1, c = Date.now() - f, e = c >= a.noProgressTimeout, h = c >= a.loggingDelay, i = 0, j = d.length; j > i; i++) {
				var l = d[i];
				l.status === g.WAITING && (l.resource.checkStatus && l.resource.checkStatus(),
					l.status === g.WAITING && (e ? l.resource.onTimeout() : b = !0))
			}
			h && b && n(),
				b && setTimeout(k, a.statusInterval)
		};
		this.isBusy = function() {
			for(var a = 0, b = d.length; b > a; a++)
				if(d[a].status === g.QUEUED || d[a].status === g.WAITING)
					return !0;
			return !1
		};
		var l = function(a, b) {
			var c, h, i, j, k, l = null;
			for(c = 0,
				h = d.length; h > c; c++)
				if(d[c].resource === a) {
					l = d[c];
					break
				}
			if(null != l && l.status === g.WAITING)
				for(l.status = b,
					f = Date.now(),
					i = a.tags.length,
					c = 0,
					h = e.length; h > c; c++)
					j = e[c],
					k = 0 === j.tags.length ? !0 : a.tags.intersects(j.tags),
					k && m(l, j)
		};
		this.onLoad = function(a) {
				l(a, g.LOADED)
			},
			this.onError = function(a) {
				l(a, g.ERROR)
			},
			this.onTimeout = function(a) {
				l(a, g.TIMEOUT)
			};
		var m = function(a, b) {
				var c, e, f, h, i = 0,
					j = 0;
				for(c = 0,
					e = d.length; e > c; c++)
					f = d[c],
					h = !1,
					h = 0 === b.tags.length ? !0 : f.resource.tags.intersects(b.tags),
					h && (j++,
						f.status !== g.LOADED && f.status !== g.ERROR && f.status !== g.TIMEOUT || i++);
				b.callback({
					resource: a.resource,
					loaded: a.status === g.LOADED,
					error: a.status === g.ERROR,
					timeout: a.status === g.TIMEOUT,
					completedCount: i,
					totalCount: j
				})
			},
			n = this.log = function(a) {
				if(window.console) {
					var b = Math.round((Date.now() - c) / 1e3);
					window.console.log("PxLoader elapsed: " + b + " sec");
					for(var e = 0, f = d.length; f > e; e++) {
						var h = d[e];
						if(a || h.status === g.WAITING) {
							var i = "PxLoader: #" + e + " " + h.resource.getName();
							switch(h.status) {
								case g.QUEUED:
									i += " (Not Started)";
									break;
								case g.WAITING:
									i += " (Waiting)";
									break;
								case g.LOADED:
									i += " (Loaded)";
									break;
								case g.ERROR:
									i += " (Error)";
									break;
								case g.TIMEOUT:
									i += " (Timeout)"
							}
							h.resource.tags.length > 0 && (i += " Tags: [" + h.resource.tags.all.join(",") + "]"),
								window.console.log(i)
						}
					}
				}
			}
	}

	function b(a) {
		if(this.all = [],
			this.first = null,
			this.length = 0,
			this.lookup = {},
			a) {
			if(Array.isArray(a))
				this.all = a.slice(0);
			else if("object" == typeof a)
				for(var b in a)
					a.hasOwnProperty(b) && this.all.push(b);
			else
				this.all.push(a);
			this.length = this.all.length,
				this.length > 0 && (this.first = this.all[0]);
			for(var c = 0; c < this.length; c++)
				this.lookup[this.all[c]] = !0
		}
	}

	function c(a, b, c, d) {
		var e = this,
			f = null;
		this.img = new Image,
			void 0 !== d && (this.img.crossOrigin = d),
			this.tags = b,
			this.priority = c;
		var g = function() {
				"complete" === e.img.readyState && (j(),
					f.onLoad(e))
			},
			h = function() {
				j(),
					f.onLoad(e)
			},
			i = function() {
				j(),
					f.onError(e)
			},
			j = function() {
				e.unbind("load", h),
					e.unbind("readystatechange", g),
					e.unbind("error", i)
			};
		this.start = function(b) {
				f = b,
					e.bind("load", h),
					e.bind("readystatechange", g),
					e.bind("error", i),
					e.img.src = a
			},
			this.checkStatus = function() {
				e.img.complete && (j(),
					f.onLoad(e))
			},
			this.onTimeout = function() {
				j(),
					e.img.complete ? f.onLoad(e) : f.onTimeout(e)
			},
			this.getName = function() {
				return a
			},
			this.bind = function(a, b) {
				e.img.addEventListener ? e.img.addEventListener(a, b, !1) : e.img.attachEvent && e.img.attachEvent("on" + a, b)
			},
			this.unbind = function(a, b) {
				e.img.removeEventListener ? e.img.removeEventListener(a, b, !1) : e.img.detachEvent && e.img.detachEvent("on" + a, b)
			}
	}
	b.prototype.intersects = function(a) {
			if(0 === this.length || 0 === a.length)
				return !1;
			if(1 === this.length && 1 === a.length)
				return this.first === a.first;
			if(a.length < this.length)
				return a.intersects(this);
			for(var b in this.lookup)
				if(a.lookup[b])
					return !0;
			return !1
		},
		a.prototype.addImage = function(a, b, d, e) {
			var f = new c(a, b, d, e);
			return this.add(f),
				f.img
		},
		"function" == typeof define && define.amd && define("PxLoader", [], function() {
			return a
		}),
		window.PxLoader = a
}();
var app = {
		$get_hb_layer: $("#get_hb_layer"),
		$hb_boss: $("#hb_boss"),
		$jzh_bt: $("#jzh_bt"),
		$jzh_bg: $("#jzh_bg"),
		$hb_btn: $("#hb_btn"),
		$get_hb_bird: $("#get_hb_bird"),
		$get_hb_cloud: $("#get_hb_cloud"),
		$hb_content: $("#hb_content"),
		$hb_close_btn: $("#hb_close_btn"),
		$phone_call: $("#phone_call"),
		$phone_btn_content_1: $("#phone_btn_content_1"),
		$phone_btn_content_2: $("#phone_btn_content_2"),
		$boss_head: $("#boss_head"),
		$boss_name: $("#boss_name"),
		$ringOff_btn: $("#ringOff_btn"),
		$ringOn_btn: $("#ringOn_btn"),
		$jingyin_btn: $("#jingyin_btn"),
		$guaduan_btn: $("#guaduan_btn"),
		$gmianti_btn: $("#mianti_btn"),
		$time_num: $("#time_num"),
		$open_hb: $("#open_hb"),
		$input_tel: $("#input_tel"),
		$result_page: $("#result_page"),
		$getHb_btn: $("#getHb_btn"),
		$result_txt: $("#result_txt"),
		$result_close_btn: $("#result_close_btn"),
		$share_btn: $("#share_btn"),
		$link_btn: $("#link_btn"),
		$share_page: $("#share_page"),
		$hb_box: $("#hb_box")
	},
	screenHeight = document.documentElement.clientHeight,
	screenWidth = document.documentElement.clientWidth;
scaleEle(".scalePage", "top"),
	$("#musicBtn").on("switch", function() {
		$(this).hasClass("volumeOff") ? (document.getElementById("bgAudio").pause(),
			$(this).removeClass("volumeOff").addClass("volumeOn")) : (document.getElementById("bgAudio").play(),
			$(this).removeClass("volumeOn").addClass("volumeOff"))
	}).on("click", function() {
		$(this).trigger("switch")
	}),
	$(document).ready(function() {
		function a(a, b) {
			var c = document.createElement("audio");
			c.preload = "preload",
				c.src = a,
				z += 1,
				1 == z && (c.loop = "true"),
				$(c).attr("id", x[z - 1]),
				document.body.appendChild(c),
				$.ajax({
					url: a,
					success: function(a) {
						setTimeout(function() {
							b.call(null, c)
						}, 0)
					}
				})
		}

		//拼接20面图
		function b() {
			J.name("panoBg").position(0, 0, 0).update(),
				q.addChild(J);
			for(var a = 0; E > a; a++) {
				var b = new C3D.Plane,
					c = -360 / E * a,
					d = c / 180 * Math.PI,
					e = H;
				b.size(G, F.h).position(Math.sin(d) * e, 0, Math.cos(d) * e).rotation(0, c + 180, 0).visibility({
						alpha: 0
					}).material({
						image: basePath + "images/bg/" + I[a].url,
						bothsides: !1
					}).update(),
					J.addChild(b)
			}
		}

		function c(a) {
			var b = T;
			return b[a].name
		}

		function d(a) {
			var b = T;
			return b[a].mp3TimeLine
		}

		function e(a) {
			var b = T;
			return b[a].outlink
		}

		function f(a) {
			"Android" == a ? g() : "Ios" == a && h()
		}

		//动画时间轴
		function g() {
			JT.fromTo(app.$jzh_bt, 1, {
					opacity: 0,
					y: -610
				}, {
					opacity: 1,
					y: 0,
					ease: JT.Quad.Out
				}),
				JT.fromTo(app.$jzh_bg, 1, {
					opacity: 0,
					height: "50"
				}, {
					opacity: 1,
					height: "632px",
					ease: JT.Quad.Out,
					onEnd: function() {
						JT.fromTo(app.$hb_box, .8, {
							rotation: 10
						}, {
							rotation: -10,
							yoyo: !0,
							repeat: -1
						})
					}
				}),
				JT.fromTo(app.$get_hb_bird, .8, {
					x: 100,
					y: 0,
					opacity: 0
				}, {
					delay: .4,
					opacity: 1,
					x: 0,
					y: 0,
					yoyo: !0,
					repeat: 0,
					onEnd: function() {
						JT.fromTo(app.$get_hb_bird, 1, {
							x: 0,
							y: 0
						}, {
							x: 0,
							y: 8,
							yoyo: !0,
							repeat: -1
						})
					}
				}),
				JT.fromTo(app.$get_hb_cloud, .8, {
					x: -150,
					y: 0,
					opacity: 0
				}, {
					delay: .7,
					opacity: 1,
					x: 0,
					y: 0,
					yoyo: !0,
					repeat: 0,
					onEnd: function() {
						JT.fromTo(app.$get_hb_cloud, 1, {
							y: 0,
							x: 0
						}, {
							y: -8,
							x: 0,
							yoyo: !0,
							repeat: -1
						})
					}
				})
		}

		function h() {
			630 > V ? (V += 10,
				app.$jzh_bg.css("height", V + "px"),
				app.$jzh_bt.css("top", 143 + V + "px"),
				S = requestAnimationFrame(h)) : (V = 630,
				app.$jzh_bg.css("height", V + "px"),
				app.$jzh_bt.css("top", 143 + V + "px"),
				cancelAnimationFrame(S),
				app.$hb_box.addClass("hb_shake"),
				V = 0)
		}

		function i(a) {
			function b(a) {
				10 > a ? app.$time_num.text("00:0" + a) : app.$time_num.text("00:" + a)
			}
			var c = 0;
			app.$time_num.text("00:00"),
				r = setInterval(function() {
					a > c ? (c++,
						b(c)) : (j(),
						U.showInputPage())
				}, 1e3)
		}

		function j() {
			clearInterval(r)
		}

		//屏幕滑动函数
		function k() {
			ca = l(Y.x - W.x),
				da = l(Y.y - W.y),
				ea = l(Y.x - X.x),
				fa = l(Y.y - X.y),
				ga = (ba - aa) / 1e3,
				"" == Z && (Math.abs(ea) > Math.abs(fa) ? Z = "x" : Math.abs(ea) < Math.abs(fa) && (Z = "y")),
				N || (M.lon = (M.lon - .2 * ea) % 360,
					M.lat = Math.max(-90, Math.min(90, M.lat + .2 * fa)))
		}

		function l(a) {
			return Math.floor(100 * a) / 100
		}

		//动画一直执行的函数
		function m() {
			var a = (K.lon + L.lon + M.lon) % 360,
				b = .35 * (K.lat + L.lat + M.lat);
			a - J.rotationY > 180 && (J.rotationY += 360),
				a - J.rotationY < -180 && (J.rotationY -= 360);
			var c = a - J.rotationY,
				d = b - J.rotationX;
			Math.abs(c) < .1 ? J.rotationY = a : J.rotationY += .3 * c,
				Math.abs(d) < .1 ? J.rotationX = b : J.rotationX += .15 * d,
				J.updateT(),
				R.rotationY = J.rotationY,
				R.rotationX = J.rotationX,
				R.updateT(),
				a - P.rotationY > 180 && (P.rotationY += 360),
				a - P.rotationY < -180 && (P.rotationY -= 360);
			var e = a - P.rotationY,
				f = b - P.rotationX;
			Math.abs(e) < .1 ? P.rotationY = a : P.rotationY += .25 * e,
				Math.abs(f) < .1 ? P.rotationX = b : P.rotationX += .15 * f,
				P.updateT();
			var g = -150 - 20 * Math.abs(c);
			q.z += .1 * (g - q.z),
				q.updateT(),
				A = requestAnimationFrame(m)
		}

		//开始动画
		function n() {
			JT.fromTo(q, 6, {
					z: -555
				}, {
					z: -150,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT().updateV()
					},
					onEnd: function() {
						N = !1,
							m(),
							JT.to($("#bg"), 1, {
								opacity: 1
							})
					}
				}),
				JT.fromTo(J, 6, {
					rotationY: -720
				}, {
					rotationY: -150,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT().updateV()
					},
					onEnd: function() {}
				});
			for(var a = 0, b = J.children.length; b > a; a++)
				JT.from(J.children[a], 1, {
					x: 0,
					z: 0,
					scaleX: 0,
					scaleY: 0,
					delay: .08 * a,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT()
					},
					onStart: function() {
						this.target.visibility({
							alpha: 1
						}).updateV()
					}
				});
			for(var c = 0, d = P.children.length; d > c; c++)
				JT.from(P.children[c], 3, {
					x: 0,
					z: 0,
					scaleX: .01,
					scaleY: .01,
					scaleZ: .01,
					delay: Math.random() + 2,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT()
					},
					onStart: function() {
						this.target.visibility({
							alpha: 1
						}).updateV()
					}
				});
			JT.fromTo(P, 6, {
					rotationY: -720
				}, {
					rotationY: -150,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT().updateV()
					}
				}),
				JT.fromTo(R, 2, {
					rotationY: -520,
					alpha: 0
				}, {
					rotationY: -150,
					alpha: 1,
					delay: 3,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT().updateV()
					},
					onStart: function() {
						this.target.visibility({
							alpha: 1
						}).updateV()
					}
				})
		}
		var o = "Ios";
		o = isAndroid() ? "Android" : "Ios";
		var p = new C3D.Stage({
			el: $("#three")[0]
		});
		p.size(window.innerWidth, window.innerHeight).update();
		var q = new C3D.Sprite;
		q.position(0, 0, -600).update(),
			p.addChild(q);
		for(var r, s = "", t = !1, u = new window.PxLoader, v = ["loading_bird.png", "loading_logo.png", "volumeOn.png", "volumeOff.png", "bg.jpg", "bg/1.png", "bg/2.png", "bg/3.png", "bg/4.png", "bg/5.png", "bg/6.png", "bg/7.png", "bg/8.png", "bg/9.png", "bg/10.png", "bg/11.png", "bg/12.png", "bg/13.png", "bg/14.png", "bg/15.png", "bg/16.png", "bg/17.png", "bg/18.png", "bg/19.png", "bg/20.png", "pano/p1-1.png", "pano/p1-2.png", "pano/p1-3.png", "pano/p1-4.png", "pano/p1-5.png", "pano/p1-6.png", "pano/p2-1.png", "pano/p2-2.png", "pano/p2-3.png", "pano/p3-1.png", "pano/p3-2.png", "pano/p4-1.png", "pano/p4-2.png", "pano/p4-3.png", "pano/p4-4.png", "pano/p4-5.png", "pano/p4-6.png", "pano/p5-1.png", "pano/p5-2.png", "pano/p5-3.png", "pano/p6-1.png", "pano/p6-2.png", "pano/p6-3.png", "pano/p7-1.png", "pano/p7-2.png", "pano/p7-3.png", "pano/p7-4.png", "pano/p8-1.png", "pano/p8-2.png", "pano/p9-1.png", "pano/p9-2.png", "pano/p10-1.png", "pano/p10-2.png", "pano/p10-3.png", "btn/btn_changzhou.png", "btn/btn_huaian.png", "btn/btn_lianyungang.png", "btn/btn_nanjing.png", "btn/btn_nantong.png", "btn/btn_suqian.png", "btn/btn_suzhou.png", "btn/btn_taizhou.png", "btn/btn_wuxi.png", "btn/btn_xuzhou.png", "btn/btn_yancheng.png", "btn/btn_yangzhou.png", "btn/btn_zhenjiang.png", "layer/changzhou_boss.png", "layer/changzhou_head.png", "layer/close_btn.png", "layer/getHb_btn.png", "layer/guaduan_btn.png", "layer/hb_bg.png", "layer/hb_bird.png", "layer/hb_cl1.png", "layer/hb_cl2.png", "layer/hb_cloud.png", "layer/hb_logo.png", "layer/hb_txt.png", "layer/hb.png", "layer/huaian_boss.png", "layer/huaian_head.png", "layer/jingyin_btn.png", "layer/jzh_bg.png", "layer/jzh_bt.png", "layer/jzh_up.png", "layer/lianyungang_boss.png", "layer/lianyungang_head.png", "layer/link_btn.png", "layer/mianti_btn.png", "layer/nanjing_boss.png", "layer/nanjing_head.png", "layer/nantong_boss.png", "layer/nantong_head.png", "layer/result_bg.png", "layer/ringOff_btn.png", "layer/ringOn_btn.png", "layer/share_btn0.png", "layer/share_btn1.png", "layer/share_tips.png", "layer/suqian_boss.png", "layer/suqian_head.png", "layer/suzhou_boss.png", "layer/suzhou_head.png", "layer/taizhou_boss.png", "layer/taizhou_head.png", "layer/wuxi_boss.png", "layer/wuxi_head.png", "layer/xuzhou_boss.png", "layer/xuzhou_head.png", "layer/yancheng_boss.png", "layer/yancheng_head.png", "layer/yangzhou_boss.png", "layer/yangzhou_head.png", "layer/zhenjiang_boss.png", "layer/zhenjiang_head.png"], w = [basePath + "mp3/ring.mp3", basePath + "mp3/xuzhou.mp3", basePath + "mp3/lianyungang.mp3", basePath + "mp3/suqian.mp3", basePath + "mp3/huaian.mp3", basePath + "mp3/nanjing.mp3", basePath + "mp3/yangzhou.mp3", basePath + "mp3/yancheng.mp3", basePath + "mp3/taizhou.mp3", basePath + "mp3/nantong.mp3", basePath + "mp3/changzhou.mp3", basePath + "mp3/wuxi.mp3", basePath + "mp3/zhenjiang.mp3", basePath + "mp3/suzhou.mp3"], x = ["ring", "xuzhou", "lianyungang", "suqian", "huaian", "nanjing", "yangzhou", "yancheng", "taizhou", "nantong", "changzhou", "wuxi", "zhenjiang", "suzhou"], y = [], z = 0, B = 0; B < v.length; B++)
			u.addImage(basePath + "images/" + v[B]);
		u.addProgressListener(function(a) {
				var b = Math.round(a.completedCount / a.totalCount * 100);
				$("#loading_text").html("已加载 " + b + " %")
			}),
			
			u.addCompletionListener(function() {
				JT.fromTo($(".loading_bg"), .6, {
						scaleX: 1,
						scaleY: 1,
						scaleZ: 1,
						opacity: 1
					}, {
						delay: 1,
						scaleX: .2,
						scaleY: .2,
						scaleZ: .2,
						opacity: 0,
						onEnd: function() {
							$("#loading_bg").remove(),
								D.play(),
								$(".music").show()
						}
					}),
					w.forEach(function(b, c) {
						a(b, function(a) {
							y[c] = a
						})
					})
			});
		var C = new C3D.Sprite;
		C.position(0, 0, 0).scale(.01).update(),
			q.addChild(C);
		var D = JTL.create();
		D.add("l1", .5),
			D.add(function() {
				n()
			}, "l1");
		var E = 20,
		
			F = {
				w: 2580,
				h: 1170
			},
			G = F.w / E,
			H = 406,
			I = [{
				url: "1.png"
			}, {
				url: "2.png"
			}, {
				url: "3.png"
			}, {
				url: "4.png"
			}, {
				url: "5.png"
			}, {
				url: "6.png"
			}, {
				url: "7.png"
			}, {
				url: "8.png"
			}, {
				url: "9.png"
			}, {
				url: "10.png"
			}, {
				url: "11.png"
			}, {
				url: "12.png"
			}, {
				url: "13.png"
			}, {
				url: "14.png"
			}, {
				url: "15.png"
			}, {
				url: "16.png"
			}, {
				url: "17.png"
			}, {
				url: "18.png"
			}, {
				url: "19.png"
			}, {
				url: "20.png"
			}],
			J = new C3D.Sprite,
			K = {
				lat: 0,
				lon: 0
			},
			L = {
				lon: 0,
				lat: 0
			},
			M = {
				lon: -150,
				lat: 0
			},
			N = !0;
		b();
		var O = [{
				x: 69,
				y: 831,
				w: 660,
				h: 240,
				url: "images/pano/p1.png",
				imgs: ["images/pano/p1-1.png", "images/pano/p1-2.png", "images/pano/p1-3.png", "images/pano/p1-4.png", "images/pano/p1-5.png", "images/pano/p1-6.png"],
				l: 20
			}, {
				x: 456,
				y: 330,
				w: 302,
				h: 109,
				url: "images/pano/p2.png",
				imgs: ["images/pano/p2-1.png", "images/pano/p2-2.png", "images/pano/p2-3.png"],
				l: 10
			}, {
				x: 1548,
				y: 906,
				w: 244,
				h: 96,
				url: "images/pano/p3.png",
				imgs: ["images/pano/p3-1.png", "images/pano/p3-2.png"],
				l: 10
			}, {
				x: 1893,
				y: 865,
				w: 686,
				h: 238,
				url: "images/pano/p4.png",
				imgs: ["images/pano/p4-1.png", "images/pano/p4-2.png", "images/pano/p4-3.png", "images/pano/p4-4.png", "images/pano/p4-5.png", "images/pano/p4-6.png"],
				l: 10
			}, {
				x: 573,
				y: 121,
				w: 270,
				h: 209,
				url: "images/pano/p6.png",
				imgs: ["images/pano/p6-1.png", "images/pano/p6-2.png", "images/pano/p6-3.png"],
				l: 25
			}, {
				x: 313,
				y: 700,
				w: 281,
				h: 156,
				url: "images/pano/p5.png",
				imgs: ["images/pano/p5-1.png", "images/pano/p5-2.png", "images/pano/p5-3.png"],
				l: 25
			}, {
				x: 850,
				y: 587,
				w: 390,
				h: 304,
				url: "images/pano/p7.png",
				imgs: ["images/pano/p7-1.png", "images/pano/p7-2.png", "images/pano/p7-3.png", "images/pano/p7-4.png"],
				l: 25
			}, {
				x: 1560,
				y: 597,
				w: 187,
				h: 83,
				url: "images/pano/p8.png",
				imgs: ["images/pano/p8-1.png", "images/pano/p8-2.png", "images/pano/p8-3.png"],
				l: 20
			}, {
				x: 1938,
				y: 308,
				w: 189,
				h: 143,
				url: "images/pano/p9.png",
				imgs: ["images/pano/p9-1.png", "images/pano/p9-2.png"],
				l: 20
			}, {
				x: 2283,
				y: 753,
				w: 192,
				h: 153,
				url: "images/pano/p10.png",
				imgs: ["images/pano/p10-1.png", "images/pano/p10-2.png", "images/pano/p10-3.png"],
				l: 20
			}],
			P = new C3D.Sprite;
		P.name("panoItems").position(0, 0, 0).update(),
			$.each(O, function(a, b) {
				var c = b,
					d = Math.floor(c.x / G),
					e = Math.floor((c.x + c.w) / G),
					f = (c.x % G,
						new C3D.Sprite);
				f.visibility({
					alpha: 0
				}).updateV();
				for(var g = d; e >= g; g++) {
					var h = new C3D.Plane,
						i = -360 / E * g,
						j = i / 180 * Math.PI,
						k = H;
					h.size(G, c.h).position((Math.sin(j) * k).toFixed(5), c.y + c.h / 2 - F.h / 2, (Math.cos(j) * k).toFixed(5)).rotation(0, i + 180, 0).material({
							image: basePath + c.imgs[g - d],
							bothsides: !1
						}).update(),
						f.addChild(h)
				}
				var l = -360 / E * (e + d) / 2 + 180,
					m = l / 180 * Math.PI,
					n = c.l;
				f.position(Math.sin(m) * n, 0, Math.cos(m) * n).updateT(),
					P.addChild(f)
			}),
			q.addChild(P);
		var Q = [{
				name: "xuzhou",
				x: 854,
				y: 594,
				w: 57,
				h: 121,
				label: "images/btn/btn_xuzhou.png"
			}, {
				name: "lianyungang",
				x: 959,
				y: 250,
				w: 57,
				h: 141,
				label: "images/btn/btn_lianyungang.png"
			}, {
				name: "suqian",
				x: 1163,
				y: 436,
				w: 57,
				h: 121,
				label: "images/btn/btn_suqian.png"
			}, {
				name: "huaian",
				x: 1401,
				y: 313,
				w: 57,
				h: 121,
				label: "images/btn/btn_huaian.png"
			}, {
				name: "nanjing",
				x: 1630,
				y: 785,
				w: 57,
				h: 121,
				label: "images/btn/btn_nanjing.png"
			}, {
				name: "yangzhou",
				x: 1651,
				y: 419,
				w: 57,
				h: 121,
				label: "images/btn/btn_yangzhou.png"
			}, {
				name: "yancheng",
				animateType: "2",
				x: 1670,
				y: 140,
				w: 57,
				h: 121,
				label: "images/btn/btn_yancheng.png"
			}, {
				name: "taizhou",
				x: 1922,
				y: 460,
				w: 57,
				h: 121,
				label: "images/btn/btn_taizhou.png"
			}, {
				name: "nantong",
				x: 2083,
				y: 192,
				w: 57,
				h: 121,
				label: "images/btn/btn_nantong.png"
			}, {
				name: "changzhou",
				x: 2131,
				y: 559,
				w: 57,
				h: 121,
				label: "images/btn/btn_changzhou.png"
			}, {
				name: "wuxi",
				x: 2300,
				y: 427,
				w: 57,
				h: 133,
				label: "images/btn/btn_wuxi.png"
			}, {
				name: "zhenjiang",
				x: 2332,
				y: 729,
				w: 57,
				h: 121,
				label: "images/btn/btn_zhenjiang.png"
			}, {
				name: "suzhou",
				x: 2481,
				y: 341,
				w: 57,
				h: 121,
				label: "images/btn/btn_suzhou.png"
			}],
			R = new C3D.Sprite;
		R.name("panoDots").visibility({
				alpha: 0
			}).position(0, 0, 0).update(),
			$.each(Q, function(a, b) {
				var c = b,
					d = -360 * (c.x - 80) / F.w,
					e = 90 * (c.y - F.h / 2) / F.h,
					f = d / 180 * Math.PI,
					g = H - 40,
					h = C3D.create({
						type: "sprite",
						name: c.name,
						scale: [.9],
						children: [{
							type: "plane",
							name: "label",
							size: [c.w, c.h],
							position: [0, 0, 0],
							rotation: [e, 0, 0],
							origin: [c.w / 2, c.h / 2, 0],
							material: [{
								image: basePath + c.label
							}],
							bothsides: !1
						}]
					});
				h.position(Math.sin(f) * g, .9 * (c.y - F.h / 2), Math.cos(f) * g).rotation(0, d + 180 - 5, 0).updateT(),
					h.on("touchend", function() {
						U.showHbPage(c.name),
							console.info("btn_name: ", c.name)
					}),
					JT.to(h.label, .4, {
						scaleX: 1.2,
						scaleY: 1.2,
						yoyo: !0,
						repeat: -1,
						ease: JT.Quad.InOut,
						onUpdate: function() {
							this.target.updateT()
						}
					}),
					R.addChild(h)
			});
		var S, T = {
				xuzhou: {
					name: "徐州电信老总",
					mp3TimeLine: 21,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_28&platform=wap"
				},
				lianyungang: {
					name: "连云港电信老总",
					mp3TimeLine: 17,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_27&platform=wap"
				},
				suqian: {
					name: "宿迁电信老总",
					mp3TimeLine: 26,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_30&platform=wap"
				},
				huaian: {
					name: "淮安电信老总",
					mp3TimeLine: 17,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_31&platform=wap"
				},
				nanjing: {
					name: "南京电信老总",
					mp3TimeLine: 18,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_20&platform=wap"
				},
				yangzhou: {
					name: "扬州电信老总",
					mp3TimeLine: 17,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_32&platform=wap"
				},
				yancheng: {
					name: "盐城电信老总",
					mp3TimeLine: 12,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_24&platform=wap"
				},
				taizhou: {
					name: "泰州电信老总",
					mp3TimeLine: 20,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_26&platform=wap"
				},
				nantong: {
					name: "南通电信老总",
					mp3TimeLine: 22,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_21&platform=wap"
				},
				changzhou: {
					name: "常州电信老总",
					mp3TimeLine: 16,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_23&platform=wap"
				},
				wuxi: {
					name: "无锡电信老总",
					mp3TimeLine: 16,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_22&platform=wap"
				},
				zhenjiang: {
					name: "镇江电信老总",
					mp3TimeLine: 20,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_29&platform=wap"
				},
				suzhou: {
					name: "苏州电信老总",
					mp3TimeLine: 9,
					outlink: "http://wx.go189.cn/tysh/pages/ifreeSale/highIndex.html?ztInterSource=200253_25&platform=wap"
				}
			},
			U = {
				showHbPage: function(a) {
					s = a,
						app.$hb_boss.addClass(s + "_boss"),
						"Android" == o && app.$get_hb_layer.hasClass("hide_page") && app.$get_hb_layer.removeClass("hide_page"),
						app.$get_hb_layer.addClass("get_hb_layer_in"),
						f(o)
				},
				showCallPage: function(a) {
					document.getElementById("ring").play(),
						app.$phone_btn_content_1.removeClass("hide_page"),
						app.$phone_btn_content_2.addClass("hide_page"),
						app.$boss_head.addClass(a + "_head"),
						app.$boss_name.text(c(a))
				},
				closeHbPage: function() {
					app.$get_hb_layer.removeClass("get_hb_layer_in"),
						app.$hb_boss.removeClass(s + "_boss"),
						"Ios" == o ? (app.$jzh_bg.css("height", "0px"),
							app.$jzh_bt.css("top", "143px"),
							app.$hb_box.removeClass("hb_shake")) : app.$get_hb_layer.addClass("hide_page")
				},
				showInputPage: function() {
					app.$boss_head.removeClass(s + "_head"),
						"" != userData.tel && app.$input_tel.val(userData.tel);
					var a = document.getElementById("bgAudio");
					a.play(),
						app.$phone_call.removeClass("page_moveIn"),
						app.$open_hb.addClass("page_moveIn")
				}
			},
			V = 0;
		app.$getHb_btn.on("click", function(a) {
				var b = /^1[34578]\d{9}/;
				if(!b.test(app.$input_tel.val()))
					return alert("请输入正确的手机号码！"),
						app.$input_tel.focus(), !1;
				if(1 == userData.isOut)
					showResultPage("哇，你与红包只差一丁点儿<br>换个姿势再试试吧"),
					app.$share_btn.addClass("share_btn_0"),
					console.warn("所有红包抢完了! 弹窗");
				else if(0 == userData.isTodayplay) {
					if(t)
						return;
					t = !0;
					var c = {
						md5Num: userData.md5Num,
						tel: app.$input_tel.val()
					};
					window.saveDataEvent(c)
				} else
					1 == userData.isBind ? (app.$share_btn.addClass("share_btn_1"),
						showResultPage("红包已经领取过了呦<br>福气满满也分享给好友吧"),
						console.warn("玩过一次,已经抢到过的,又再来的!   弹窗")) : (app.$share_btn.addClass("share_btn_0"),
						showResultPage("哇，你与红包只差一丁点儿<br>换个姿势再试试吧"),
						console.warn("玩过一次,没抢到,又再来的!   弹窗"))
			}),
			app.$result_close_btn.on("click", function(a) {
				app.$share_btn.removeClass("share_btn_1").removeClass("share_btn_0"),
					app.$open_hb.removeClass("page_moveIn"),
					app.$result_page.removeClass("page_moveIn")
			}),
			app.$link_btn.on("click", function(a) {
				var b = e(s);
				window.location.href = b
			}),
			app.$share_btn.on("click", function(a) {
				app.$share_page.addClass("share_page_in")
			}),
			app.$share_page.on("click", function(a) {
				app.$share_page.removeClass("share_page_in")
			}),
			app.$guaduan_btn.on("click", function(a) {
				app.$boss_head.removeClass(s + "_head");
				var b = document.getElementById(s);
				b.pause();
				var c = document.getElementById("bgAudio");
				c.play(),
					app.$phone_call.removeClass("page_moveIn"),
					j()
			}),
			app.$ringOff_btn.on("click", function(a) {
				app.$boss_head.removeClass(s + "_head");
				var b = document.getElementById("ring");
				b.pause();
				var c = document.getElementById("bgAudio");
				c.play(),
					app.$phone_call.removeClass("page_moveIn")
			}),
			app.$ringOn_btn.on("click", function(a) {
				var b = document.getElementById("ring");
				b.pause();
				var c = document.getElementById(s);
				c.play(),
					app.$phone_btn_content_1.addClass("hide_page"),
					app.$phone_btn_content_2.removeClass("hide_page"),
					i(d(s))
			}),
			app.$hb_btn.on("click", function(a) {
				var b = document.getElementById("bgAudio");
				b.pause(),
					U.showCallPage(s),
					app.$phone_call.addClass("page_moveIn"),
					U.closeHbPage()
			}),
			app.$hb_close_btn.on("click", function(a) {
				U.closeHbPage()
			}),
			q.addChild(R);
		var W = {
				x: 0,
				y: 0
			},
			X = {
				x: 0,
				y: 0
			},
			Y = {
				x: 0,
				y: 0
			},
			Z = "",
			_ = 0,
			aa = 0,
			ba = 0,
			ca = 0,
			da = 0,
			ea = 0,
			fa = 0,
			ga = 0,
			ha = function(a) {
				Z = "",
					a = a.changedTouches[0],
					W.x = X.x = Y.x = a.clientX,
					W.y = X.y = Y.y = a.clientY,
					_ = aa = ba = Date.now(),
					ca = da = ea = fa = 0,
					p.on("touchmove", ia),
					p.on("touchend", ja)
			};
		p.on("touchstart", ha);
		var ia = function(a) {
				return a = a.changedTouches[0],
					Y.x = a.clientX,
					Y.y = a.clientY,
					ba = Date.now(),
					k(),
					X.x = Y.x,
					X.y = Y.y,
					aa = ba, !1
			},
			ja = function() {
				ba = Date.now();
				p.off("touchmove", ia),
					p.off("touchend", ja)
			};
		requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(a) {
				setTimeout(a, 1e3 / 60)
			},
			window.ontouchmove = function(a) {
				a.preventDefault()
			};
		var ka = new Orienter;
		ka.handler = function(a) {
				K.lon = -a.lon,
					K.lat = a.lat,
					N && (L.lat = -K.lat,
						L.lon = -K.lon)
			},
			ka.init();
		var la = function() {
			setTimeout(function() {
				p.size(window.innerWidth, window.innerHeight).update()
			}, 500)
		};
		$(window).on("resize", function() {
				la()
			}),
			u.start()
	});