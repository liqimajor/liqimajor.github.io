require('../css/style.css');
var C3D = require('./css3d.js');

var JT = require('./jstween.js');
//var JTL = require('./jstimeline.js');
var PxLoader = require('pxloader');
var PxLoaderImage = require('./PxLoaderImage.js');
//require.ensure([], function(require){
    var Orienter = require('./orienter.js');
	console.log(Orienter);
//});
$.each([1,2,3], function(index, item) {
	console.log(index+ ":" +item)
});

//创建场景
var s = new C3D.Stage({
	el: $("#three")[0]
});
s.size(window.innerWidth, window.innerHeight).material({
}).update();

var sp = new C3D.Sprite;
sp.position(0, 0, -600).update(),
s.addChild(sp);

var panelNum = 20, panoRect = {
    w: 2580,
    h: 1200
}, panelWidth = panoRect.w / panelNum, radius = Math.floor(panelWidth / 2 / Math.tan(Math.PI / panelNum)) - 1;

var panoBg = [
    {url: require('../img/yz/p_01.png')},
    {url: require('../img/yz/p_02.png')},
    {url: require('../img/yz/p_03.png')},
    {url: require('../img/yz/p_04.png')},
    {url: require('../img/yz/p_05.png')},
    {url: require('../img/yz/p_06.png')},
    {url: require('../img/yz/p_07.png')},
    {url: require('../img/yz/p_08.png')},
    {url: require('../img/yz/p_09.png')},
    {url: require('../img/yz/p_10.png')},
    {url: require('../img/yz/p_11.png')},
    {url: require('../img/yz/p_12.png')},
    {url: require('../img/yz/p_13.png')},
    {url: require('../img/yz/p_14.png')},
    {url: require('../img/yz/p_15.png')},
    {url: require('../img/yz/p_16.png')},
    {url: require('../img/yz/p_17.png')},
    {url: require('../img/yz/p_18.png')},
    {url: require('../img/yz/p_19.png')},
    {url: require('../img/yz/p_20.png')},
];
var bgSprite = new C3D.Sprite();
bgSprite.name("panoBg").position(0, 0, 0).update();
for (var i = 0; i < panelNum; i++) {
    var bgPlane = new C3D.Plane;
    var R = -360 / panelNum * i;
    var F = R / 180 * Math.PI;
    var H = radius;
    bgPlane.size(panelWidth, panoRect.h).position(Math.sin(F) * H, 0, Math.cos(F) * H).rotation(0, R + 180, 0).visibility({
        alpha: 0
    }).material({
        image: panoBg[i].url,
        bothsides: !1
    }).update(),
    bgSprite.addChild(bgPlane);
}

var panoItems = [{
    x: 3,
    y: 283,
    w: 331,
    h: 230,
    imgs: [require("../img/yz/i1-1.png"), require("../img/yz/i1-2.png"),require("../img/yz/i1-3.png")],
    l: 10
},{
    x: 1954,
    y: 268,
    w: 146,
    h: 192,
    imgs: [require("../img/yz/i2-1.png"), require("../img/yz/i2-2.png")],
    l: 10
},{
    x: 412,
    y: 414,
    w: 455,
    h: 381,
    imgs: [require("../img/yz/i3-1.png"), require("../img/yz/i3-2.png"), require("../img/yz/i3-3.png"), require("../img/yz/i3-4.png")],
    l: 15
},{
    x: 805,
    y: 270,
    w: 290,
    h: 159,
    imgs: [require("../img/yz/i4-1.png"), require("../img/yz/i4-2.png"), require("../img/yz/i4-3.png")],
    l: 10
},{
    x: 946,
    y: 734,
    w: 310,
    h: 218,
    imgs: [require("../img/yz/i5-1.png"), require("../img/yz/i5-2.png"), require("../img/yz/i5-3.png")],
    l: 15
},{
    x: 1312,
    y: 37,
    w: 246,
    h: 296,
    imgs: [require("../img/yz/i6-1.png"), require("../img/yz/i6-2.png"), require("../img/yz/i6-3.png")],
    l: 15
},{
    x: 1465,
    y: 771,
    w: 155,
    h: 109,
    imgs: [require("../img/yz/i7-1.png"), require("../img/yz/i7-2.png")],
    l: 10
},{
    x: 2249,
    y: 796,
    w: 278,
    h: 181,
    imgs: [require("../img/yz/i8-1.png"), require("../img/yz/i8-2.png"), require("../img/yz/i8-3.png")],
    l: 15
}];
var itemSprite = new C3D.Sprite();
itemSprite.name("panoItems").position(0, 0, 0).update(),
$.each(panoItems, function(index, item) {
    var g = item;
    var panelStart = Math.floor(g.x / panelWidth);
    var panelEnd = Math.floor((g.x + g.w) / panelWidth);
    var I = (g.x % panelWidth, new C3D.Sprite);
    I.visibility({
        alpha: 0
    }).updateV();
    for (var i = panelStart; panelEnd >= i; i++) {
        var itemPlane = new C3D.Plane;
        var Y = -360 / panelNum * i;
        var angle = Y / 180 * Math.PI
        var R = radius;
        itemPlane.size(panelWidth, g.h).position(Math.sin(angle) * R,  g.y + g.h / 2 - panoRect.h / 2, Math.cos(angle) * R).rotation(0, Y + 180, 0).material({
            image: g.imgs[i - panelStart],
            bothsides: !1
        }).update(),
        I.addChild(itemPlane);
    }
    var F = -360 / panelNum * (panelStart + panelEnd) / 2 + 180;
    var H = F / 180 * Math.PI;
    var J = g.l;
    I.position(Math.sin(H) * J, 0, Math.cos(H) * J).updateT();
    itemSprite.addChild(I);
});


var panoDots = [{
    name: "plane1",
    x: 285,
    y: 851,
    dot: require("../img/yz/dot.png"),
    w: 166,
	h: 32,
	label: require("../img/yz/lable1.png")
},{
    name: "plane2",
    x: 766,
    y: 225,
    dot: require("../img/yz/dot.png"),
    w: 165,
	h: 33,
	label: require("../img/yz/lable2.png")
},{
    name: "plane3",
    x: 1281,
    y: 453,
    dot: require("../img/yz/dot.png"),
    w: 200,
	h: 40,
	label: require("../img/yz/lable3.png")
},{
    name: "plane4",
    x: 1935,
    y: 707,
    dot: require("../img/yz/dot.png"),
    w: 191,
	h: 34,
	label: require("../img/yz/lable4.png")
},{
    name: "plane5",
    x: 2424,
    y: 303,
    dot: require("../img/yz/dot.png"),
    w: 223,
	h: 36,
	label: require("../img/yz/lable5.png")
}];
var dotSprite = new C3D.Sprite;
dotSprite.name("panoDots").visibility({
	alpha: 0
}).position(0, 0, 0).update();
$.each(panoDots, function(A, B) {
    var g = B;
    var Q = -360 * (g.x - 80) / panoRect.w;
    var w = 90 * (g.y - panoRect.h / 2) / panoRect.h;
    var G = Q / 180 * Math.PI;
    var M = radius - 80;
    var h = C3D.create({
        type: "sprite",
        name: g.name,
        scale: [.6],
        children: [{
            type: "plane",
            name: "dot",
            size: [74, 77],
            position: [0, 2, 2],
            rotation: [w, 0, 0],
            material: [{
                image: g.dot
            }],
            bothsides: !1
        }, {
            type: "plane",
            name: "label",
            size: [0, g.h],
            rotation: [w, 0, 0],
            origin: [-5, 15],
            material: [{
                image: g.label
            }],
            bothsides: !1
        }]
    });
    h.position(Math.sin(G) * M, .9 * (g.y - panoRect.h / 2), Math.cos(G) * M).rotation(0, Q + 180 - 5, 0).updateT();
    h.on("touchend", function() {
    	popWin(A);
    });
    h.r0 = Q;
    h.w0 = g.w;
	JT.to(h.dot, .4, {
		scaleX: 1.2,
		scaleY: 1.2,
		yoyo: !0,
		repeat: -1,
		ease: JT.Quad.InOut,
		onUpdate: function() {
			this.target.updateT()
		}
	});
    dotSprite.addChild(h);
});

function popWin(num) {
	if(num==2) {
        p = !0;
        A && cancelAnimationFrame(A);
		$("#pop").show();
	}
}

var skySprite = C3D.create({
    type: "sprite",
    name: "panoSky",
    visibility: [{
        visible: !1
    }],
    children: [{
        type: "plane",
        size: [564, 516],
        position: [0, -700, 0],
        rotation: [-90, 0, 90],
        material: [{
            image: require("../img/yz/logoTop.png")
        }]
    }, {
        type: "plane",
        size: [564, 516],
        position: [0, 700, 0],
        rotation: [90, 0, -90],
        material: [{
            image: require("../img/yz/logoBottom.png")
        }]
    }]
});
sp.addChild(bgSprite);
sp.addChild(itemSprite);
sp.addChild(dotSprite);
sp.addChild(skySprite);

$("#pop .close").click(function() {
    p = !1;
    e();
	$("#pop").hide();
});



var c = {
    lon: 0,
    lat: 0
};
var d = {
    lat: 0,
    lon: 0
};
var f = {
    lon: 0,
    lat: 0
};
var p = !0;

var originTouchPos = {
    x: 0,
    y: 0
};
var oldTouchPos = {
    x: 0,
    y: 0
};
var newTouchPos = {
    x: 0,
    y: 0
};
var firstDir = "";
var originTime = 0;
var oldTime = 0;
var newTime = 0;
var dx = 0;
var dy = 0;
var ax = 0;
var ay = 0;
var time = 0;
s.on("touchstart", onTouchStart);
function onTouchStart(t) {
    console.log(t);
    firstDir = "";
    t = t.changedTouches[0];
    originTouchPos.x = oldTouchPos.x = newTouchPos.x = t.clientX;
    originTouchPos.y = oldTouchPos.y = newTouchPos.y = t.clientY;
    originTime = oldTime = newTime = Date.now();
    dx = dy = ax = ay = 0;
    s.on("touchmove", onTouchMove);
    s.on("touchend", onTouchEnd);
}
function onTouchMove(t) {
    return t = t.changedTouches[0],
    newTouchPos.x = t.clientX,
    newTouchPos.y = t.clientY,
    newTime = Date.now(),
    checkGesture(),
    oldTouchPos.x = newTouchPos.x,
    oldTouchPos.y = newTouchPos.y,
    oldTime = newTime,
    !1
}

function onTouchEnd() {
    newTime = Date.now();
    s.off("touchmove", onTouchMove),
    s.off("touchend", onTouchEnd)
}

function checkGesture() {
    dx = fixed2(newTouchPos.x - originTouchPos.x);
    dy = fixed2(newTouchPos.y - originTouchPos.y);
    ax = fixed2(newTouchPos.x - oldTouchPos.x);
    ay = fixed2(newTouchPos.y - oldTouchPos.y);
    time = (newTime - oldTime) / 1e3;
    "" == firstDir && (Math.abs(ax) > Math.abs(ay) ? firstDir = "x" : Math.abs(ax) < Math.abs(ay) && (firstDir = "y"));

    p || (c.lon = (c.lon - .2 * ax) % 360,
    c.lat = Math.max(-90, Math.min(90, c.lat + .2 * ay)))
}
function fixed2(t) {
    return Math.floor(100 * t) / 100
}


function e() {
	A = requestAnimationFrame(e);
    var t = (d.lon + f.lon + c.lon) % 360
      , i = .35 * (d.lat + f.lat + c.lat);
    t - sp.panoBg.rotationY > 180 && (sp.panoBg.rotationY += 360),
    t - sp.panoBg.rotationY < -180 && (sp.panoBg.rotationY -= 360);
    var n = t - sp.panoBg.rotationY
      , a = i - sp.panoBg.rotationX;
    Math.abs(n) < .1 ? sp.panoBg.rotationY = t : sp.panoBg.rotationY += .3 * n,
    Math.abs(a) < .1 ? sp.panoBg.rotationX = i : sp.panoBg.rotationX += .15 * a,
    sp.panoBg.updateT();
    sp.panoDots.rotationY = sp.panoBg.rotationY,
    sp.panoDots.rotationX = sp.panoBg.rotationX,
    sp.panoDots.updateT();
    sp.panoSky.rotationY = sp.panoBg.rotationY - 90,
    sp.panoSky.rotationX = sp.panoBg.rotationX,
    sp.panoSky.updateT();
    t - sp.panoItems.rotationY > 180 && (sp.panoItems.rotationY += 360),
    t - sp.panoItems.rotationY < -180 && (sp.panoItems.rotationY -= 360);
    var o = t - sp.panoItems.rotationY
      , r = i - sp.panoItems.rotationX;
    Math.abs(o) < .1 ? sp.panoItems.rotationY = t : sp.panoItems.rotationY += .25 * o,
    Math.abs(r) < .1 ? sp.panoItems.rotationX = i : sp.panoItems.rotationX += .15 * r,
    sp.panoItems.updateT();
    var s = -150 - 20 * Math.abs(n);
    sp.z += .1 * (s - sp.z),
    sp.updateT();
//          requestAnimationFrame(e);
    h(sp.panoDots.rotationY);
}
function h(t) {
    var i = (-180 - t) % 360;
    i = i > 0 ? i - 360 : i;
    for (var e = 0, a = sp.panoDots.children.length; a > e; e++) {
        var o = sp.panoDots.children[e];
        o.r0 > i - 5 && o.r0 < i + 25 ? 0 == o.label.width && (JT.kill(o.label),
        JT.to(o.label, .3, {
            width: o.w0,
            ease: JT.Quad.Out,
            onUpdate: function() {
                this.target.updateS()
            }
        })) : o.label.width == o.w0 && (JT.kill(o.label),
        JT.to(o.label, .3, {
            width: 0,
            ease: JT.Quad.Out,
            onUpdate: function() {
                this.target.updateS()
            }
        }))
    }
}

function animation() {
	JT.fromTo(sp, 4, {
		z: -600
	}, {
		z: -150,
		ease: JT.Quad.Out,
		onUpdate: function() {
			this.target.updateT().updateV()
		},
		onEnd: function() {
			p = !1;
			e();
		}
	});
	JT.fromTo(bgSprite, 4, {
		rotationY: -720
	}, {
		rotationY: 0,
		ease: JT.Quad.Out,
		onUpdate: function() {
			this.target.updateT().updateV()
		},
		onEnd: function() {}
	});
	for(var a = 0, b = bgSprite.children.length; b > a; a++) {
		JT.from(bgSprite.children[a], 3, {
			x: 0,
			z: 0,
			scaleX: 0.01,
			scaleY: 0.01,
			delay: .05 * a,
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
	}
	for(var c = 0, d = itemSprite.children.length; d > c; c++) {
		JT.from(itemSprite.children[c], 2, {
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
	}
	JT.fromTo(itemSprite, 4.2, {
		rotationY: -720
	}, {
		rotationY: 0,
		ease: JT.Quad.Out,
		onUpdate: function() {
			this.target.updateT().updateV()
		}
	});
	JT.fromTo(dotSprite, 2, {
		rotationY: -360,
		alpha: 0
	}, {
		rotationY: -0,
		alpha: 1,
		delay: 2,
		ease: JT.Quad.Out,
		onUpdate: function() {
			this.target.updateT().updateV()
		},
		onStart: function() {
			this.target.visibility({
				alpha: 1
			}).updateV()
		}
	});
	skySprite.visibility({
        visible: !0
    }).updateV();
}


var orienter = new Orienter;
orienter.onOrient = function(t) {
	d.lat = t.lat,
    d.lon = -t.lon,
    p && (f.lat = -d.lat,
    f.lon = -d.lon)
},
orienter.init();

requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(a) {
	setTimeout(a, 1e3 / 60)
};
window.ontouchmove = function(e) {
	e.preventDefault();
};




//响应屏幕调整尺寸
function resize() {
    s.size(window.innerWidth, window.innerHeight).update();
}

window.onresize = function () {
    resize();
};
resize();

var loader = new PxLoader();
console.log(loader);
var imgs = ['yz/p_01.png','yz/p_02.png','yz/p_03.png','yz/p_04.png','yz/p_05.png','yz/p_06.png','yz/p_07.png','yz/p_08.png','yz/p_09.png','yz/p_10.png','yz/p_11.png','yz/p_12.png','yz/p_13.png','yz/p_14.png','yz/p_15.png','yz/p_16.png','yz/p_17.png','yz/p_18.png','yz/p_19.png','yz/p_20.png','yz/dot.png','yz/lable1.png','yz/lable2.png','yz/lable3.png','yz/lable4.png','yz/lable5.png','yz/logoBottom.png','yz/logoTop.png','yz/i1-1.png','yz/i1-2.png','yz/i1-3.png','yz/i2-1.png','yz/i2-2.png','yz/i3-1.png','yz/i3-2.png','yz/i3-3.png','yz/i3-4.png','yz/i4-1.png','yz/i4-2.png','yz/i4-3.png','yz/i5-1.png','yz/i5-2.png','yz/i5-3.png','yz/i6-1.png','yz/i6-2.png','yz/i6-3.png','yz/i7-1.png','yz/i7-2.png','yz/i8-1.png','yz/i8-2.png','yz/i8-3.png'];
for(var i=0, len = imgs.length; i<len; i++) {
	loader.addImage("img/"+ imgs[i]);
}
loader.addProgressListener(function(a) {
	var b = Math.round(a.completedCount / a.totalCount * 100);
	$("#loading_text").html("已加载 " + b + " %");
});
// callback that will be run once images are ready 
loader.addCompletionListener(function() { 
	$("#loading_text").remove();
	animation();
}); 
 
// begin downloading images 
loader.start(); 

