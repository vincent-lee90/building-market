webpackJsonp([0],{"+FC5":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:.05rem .1rem;border-radius:.05rem}.hot-words[_ngcontent-%COMP%]   .words[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-top:.1rem;margin-right:.05rem;padding:.02rem .1rem;background-color:#ccc;color:#fff}"]},"+pb+":function(l,n,u){"use strict";var t=u("rCTf"),i=u("xAJs");t.Observable.prototype.map=i.map},"/aBX":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.goods[_ngcontent-%COMP%]{background-color:#fff}.goods[_ngcontent-%COMP%]   .goods-header[_ngcontent-%COMP%]{border-left:2px solid #e81a62;padding-left:.1rem;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.goods[_ngcontent-%COMP%]   .goods-header[_ngcontent-%COMP%], .goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%]{-ms-flex-wrap:wrap;flex-wrap:wrap}.goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;width:100%}.goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{width:50%}.goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:first-child, .goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(3){border-right:1px solid #dfdfdf}.goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(3), .goods[_ngcontent-%COMP%]   .goods-thumb[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:nth-child(4){border-top:1px solid #dfdfdf}.goods-container[_ngcontent-%COMP%]{margin-bottom:.8rem}.arrow[_ngcontent-%COMP%]{height:.18rem}"]},"84RB":function(l,n,u){"use strict";var t=u("Fzro"),i=u("o5nM"),e=u("+pb+");u.n(e);u.d(n,"a",function(){return o});var o=function(){function l(l,n){this.http=l,this.appDialogService=n,this.getHotWordsUrl="mall/hotWords"}return l.prototype.getHotWords=function(){var l=this;return this.http.get(this.getHotWordsUrl).map(function(n){var u=n.json();return 200!=u.statusCode&&l.appDialogService.setAlert(u.message),u.body})},l.ctorParameters=function(){return[{type:t.k},{type:i.a}]},l}()},"93rs":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("3j3K"),i=u("Hv4l"),e=u("5oXY"),o=u("y/XS"),r=u("84RB"),a=u("QTdD"),s=u("hW/h"),c=u("LZ8f"),d=u("DtDu"),g=u("jE00"),f=u("VYTh"),p=u("Fzro"),m=u("o5nM"),F=u("owuF"),h=u("Kmep"),v=u("qdhj"),G=u("aOgB"),_=u("KguO"),M=u("OMm/");u.d(n,"MallModuleNgFactory",function(){return C});var b=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var u in n)n.hasOwnProperty(u)&&(l[u]=n[u])};return function(n,u){function t(){this.constructor=n}l(n,u),n.prototype=null===u?Object.create(u):(t.prototype=u.prototype,new t)}}(),O=function(l){function n(n){return l.call(this,n,[a.a,s.a,c.a,d.a,g.a,f.a],[])||this}return b(n,l),Object.defineProperty(n.prototype,"_MallService_4",{get:function(){return null==this.__MallService_4&&(this.__MallService_4=new r.a(this.parent.get(p.k),this.parent.get(m.a))),this.__MallService_4},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._RouterModule_0=new e.q(this.parent.get(e.r,null),this.parent.get(e.j,null)),this._MainMenuModule_1=new o.a,this._MallModule_2=new i.a,this._ROUTES_3=[[{path:"",component:F.a},{path:"list/:category",component:h.a},{path:"stores",component:v.a},{path:"detail",component:G.a},{path:"mall-search",component:_.a},{path:"mall-category",component:M.a}]],this._MallModule_2},n.prototype.getInternal=function(l,n){return l===e.q?this._RouterModule_0:l===o.a?this._MainMenuModule_1:l===i.a?this._MallModule_2:l===e.u?this._ROUTES_3:l===r.a?this._MallService_4:n},n.prototype.destroyInternal=function(){},n}(t.B),C=new t.C(O,i.a)},DtDu:function(l,n,u){"use strict";function t(l){return o.E(0,[(l()(),o.G(0,null,null,81,"div",[["class","margin-bottom-44"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,3,"div",[["class","detail-img"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/light-detail-1-2.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,18,"div",[["class","text-info bg-lightest padding-h-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","good-title padding-v-12"]],null,null,null,null,null)),(l()(),o.F(null,["\n      月影凯顿现代乡村壁灯全铜客厅灯具布艺卧室床头灯玄关灯过道灯饰\n    "])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,12,"div",[],null,null,null,null,null)),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,3,"div",[["class","good-price font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","font-size-16"]],null,null,null,null,null)),(l()(),o.F(null,["89"])),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,4,"div",[["class","font-size-12 margin-top-10 font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["价格：¥\n        "])),(l()(),o.G(0,null,null,1,"del",[],null,null,null,null,null)),(l()(),o.F(null,["200.65"])),(l()(),o.F(null,["\n      "])),(l()(),o.F(null,["\n    "])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,20,"div",[["class","margin-top-15 bg-lightest padding-v-12 padding-h-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,7,"div",[["class","font-size-16"]],null,null,null,null,null)),(l()(),o.F(null,["月影凯顿\n      "])),(l()(),o.G(0,null,null,4,"div",[["class","font-color-content margin-top-5 font-size-12 locate pull-right"]],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["class","locate-img"],["src","./imgs/icon-locate.png"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.F(null,["700m"])),(l()(),o.F(null,["\n      "])),(l()(),o.F(null,["\n    "])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","font-color-content margin-top-5 font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["地址:四川省成都市郫县西区大道455号"])),(l()(),o.F(null,["\n\n    "])),(l()(),o.G(0,null,null,5,"div",[["class","padding-h-default margin-top-5 text-center"]],null,null,null,null,null)),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,2,"div",[["class","to-store"],["routerLink","../stores"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,44).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["进入店铺"])),(l()(),o.F(null,["\n    "])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,12,"div",[["class","padding-h-default  margin-top-15 padding-v-12 bg-lightest "]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,9,"div",[],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.F(null,["数量"])),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,4,"div",[["class","pull-right amount"]],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/reduce.png"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","padding-h-10"]],null,null,null,null,null)),(l()(),o.F(null,["1"])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/add.png"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,17,"div",[["class","  margin-top-15  bg-lightest display-imgs"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,2,"div",[["class","padding-v-12 padding-h-default"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o.F(null,["产品详情"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/detail-display01.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/detail-display02.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/detail-display03.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/detail-display04.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,5,"div",[["class","fixed-bottom"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,2,"div",[["class","btn-flat-default"],["routerLink","/checkstand"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,86).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["立即购买"])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"]))],function(l,n){l(n,44,0,"../stores");l(n,86,0,"/checkstand")},null)}function i(l){return o.E(0,[(l()(),o.G(0,null,null,1,"detail",[],null,null,null,t,c)),o.H(49152,null,0,a.a,[],null,null)],null,null)}var e=u("oH1c"),o=u("3j3K"),r=u("5oXY"),a=u("aOgB");u.d(n,"a",function(){return d});var s=[e.a],c=o.D({encapsulation:0,styles:s,data:{}}),d=o.I("detail",a.a,i,{},{},[])},Hv4l:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},KguO:function(l,n,u){"use strict";var t=u("84RB");u.d(n,"a",function(){return i});var i=function(){function l(l){this.mallService=l,this.hotWords=[]}return l.prototype.getHotWords=function(){var l=this;this.mallService.getHotWords().subscribe(function(n){l.hotWords=n})},l.prototype.ngOnInit=function(){this.getHotWords()},l.ctorParameters=function(){return[{type:t.a}]},l}()},Kmep:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},LZ8f:function(l,n,u){"use strict";function t(l){return o.E(0,[(l()(),o.G(0,null,null,13,"div",[["class","store-head padding-h-default border-bottom-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,0,"img",[["class","logo pull-left"],["src","./imgs/default-avatar.png"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,8,"div",[["class","font-color-title"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[],null,null,null,null,null)),(l()(),o.F(null,["箭牌卫浴旗舰店"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,2,"div",[["class","margin-top-5 font-size-12"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(l()(),o.F(null,["品牌店"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,50,"ul",[["class","list padding-h-default padding-v-16"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,15,"li",[["routerLink","../detail"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,18).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-stores.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","introduction  padding-v-5"]],null,null,null,null,null)),(l()(),o.F(null,["雷士照明 双头源卧室灯EYX9060"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,6,"div",[["class","price text-left padding-v-5"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","price font-size-14"]],null,null,null,null,null)),(l()(),o.F(null,["36.6"])),(l()(),o.G(0,null,null,1,"del",[["class","font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["¥58"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,14,"li",[],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-stores02.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","introduction  padding-v-5"]],null,null,null,null,null)),(l()(),o.F(null,["月影凯顿现代乡村壁灯全铜客厅灯具布艺卧室床头灯玄关灯过道灯饰"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,6,"div",[["class","price text-left padding-v-5"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","price font-size-14"]],null,null,null,null,null)),(l()(),o.F(null,["36.6"])),(l()(),o.G(0,null,null,1,"del",[["class","font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["¥58"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,14,"li",[],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-stores03.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","introduction  padding-v-5"]],null,null,null,null,null)),(l()(),o.F(null,["[WOOMAR/瑝玛] 瑝玛 铜灯吊灯客厅灯 欧式灯具卧室灯温馨浪漫复古别墅复式楼云石灯饰HM-8809-3仿云石"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,6,"div",[["class","price text-left padding-v-5"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","price font-size-14"]],null,null,null,null,null)),(l()(),o.F(null,["36.6"])),(l()(),o.G(0,null,null,1,"del",[["class","font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["¥58"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"]))],function(l,n){l(n,18,0,"../detail")},null)}function i(l){return o.E(0,[(l()(),o.G(0,null,null,1,"stores",[],null,null,null,t,c)),o.H(114688,null,0,a.a,[r.v],null,null)],function(l,n){l(n,1,0)},null)}var e=u("h4hd"),o=u("3j3K"),r=u("5oXY"),a=u("qdhj");u.d(n,"a",function(){return d});var s=[e.a],c=o.D({encapsulation:0,styles:s,data:{}}),d=o.I("stores",a.a,i,{},{},[])},"OMm/":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},QTdD:function(l,n,u){"use strict";function t(l){return o.E(0,[(l()(),o.G(0,null,null,66,"div",[["class","margin-bottom-44"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,3,"div",[["class","slider"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-mall01.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,58,"div",[["class","goods-container"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,25,"div",[["class","goods  margin-top-15"]],null,null,null,null,null)),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,7,"div",[["class","padding-v-12 padding-h-default border-bottom-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,4,"div",[["class","goods-header"]],null,null,null,null,null)),(l()(),o.F(null,["灯饰照明"])),(l()(),o.G(0,null,null,1,"img",[["class","arrow"],["routerLink","./list/light"],["src","./imgs/arrow-right.png"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,16).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["\n        "])),(l()(),o.F(null,["\n      "])),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,13,"ul",[["class","goods-thumb padding-h-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/light01.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/light02.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/light03.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/light04.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n      "])),(l()(),o.F(null,["\n    "])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,25,"div",[["class","goods  margin-top-15"]],null,null,null,null,null)),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,7,"div",[["class","padding-v-12 padding-h-default border-bottom-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,4,"div",[["class","goods-header"]],null,null,null,null,null)),(l()(),o.F(null,["建材五金"])),(l()(),o.G(0,null,null,2,"span",[],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"img",[["class","arrow"],["routerLink","./list/light"],["src","./imgs/arrow-right.png"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,44).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["\n      "])),(l()(),o.F(null,["\n      "])),(l()(),o.G(0,null,null,13,"ul",[["class","goods-thumb padding-h-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/hardware01.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/hardware02.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/hardware03.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n        "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/hardware04.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n      "])),(l()(),o.F(null,["\n    "])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","text-center font-color-content font-size-12 margin-top-15"]],null,null,null,null,null)),(l()(),o.F(null,["敬请期待"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,1,"main-menu",[],null,null,null,a.a,a.b)),o.H(49152,null,0,s.a,[],null,null),(l()(),o.F(null,["\n"]))],function(l,n){l(n,16,0,"./list/light");l(n,44,0,"./list/light")},null)}function i(l){return o.E(0,[(l()(),o.G(0,null,null,1,"mall",[],null,null,null,t,f)),o.H(114688,null,0,c.a,[d.a],null,null)],function(l,n){l(n,1,0)},null)}var e=u("/aBX"),o=u("3j3K"),r=u("5oXY"),a=u("gwur"),s=u("98bR"),c=u("owuF"),d=u("o5nM");u.d(n,"a",function(){return p});var g=[e.a],f=o.D({encapsulation:0,styles:g,data:{}}),p=o.I("mall",c.a,i,{},{},[])},TAoj:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".header[_ngcontent-%COMP%]{background-color:#fafafa;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:.42rem}.header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child, .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2), .header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3){height:.24rem}.list[_ngcontent-%COMP%]{background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:.05rem .05rem 0 .05rem;margin-bottom:.1rem;width:1.65rem;text-align:center;border:1px solid #dfdfdf;height:2.1rem}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]{word-break:break-all;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:.12rem;border-bottom:1px dashed #dfdfdf}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#e81a62;margin-right:.1rem}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:95%}"]},VYTh:function(l,n,u){"use strict";function t(l){return o.E(0,[(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,12,"html",[["lang","en"]],null,null,null,null,null)),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,6,"head",[],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"meta",[["charset","UTF-8"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"title",[],null,null,null,null,null)),(l()(),o.F(null,["Title"])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,1,"body",[],null,null,null,null,null)),(l()(),o.F(null,["\n\n"])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"]))],null,null)}function i(l){return o.E(0,[(l()(),o.G(0,null,null,1,"mall-category",[],null,null,null,t,s)),o.H(114688,null,0,r.a,[],null,null)],function(l,n){l(n,1,0)},null)}var e=u("fBia"),o=u("3j3K"),r=u("OMm/");u.d(n,"a",function(){return c});var a=[e.a],s=o.D({encapsulation:0,styles:a,data:{}}),c=o.I("mall-category",r.a,i,{},{},[])},aOgB:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},fBia:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},h4hd:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".store-head[_ngcontent-%COMP%]{padding-top:.3rem;padding-bottom:.1rem;background-color:#fff;min-height:.9rem}.store-head[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{width:.5rem;height:.5rem;margin-right:.1rem;border-radius:100%;display:block;border:1px solid #fff}.list[_ngcontent-%COMP%]{background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:.05rem .05rem 0 .05rem;margin-bottom:.1rem;width:1.65rem;text-align:center;border:1px solid #dfdfdf;height:2.1rem}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .introduction[_ngcontent-%COMP%]{word-break:break-all;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:.12rem;border-bottom:1px dashed #dfdfdf}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#e81a62;margin-right:.1rem}.list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:95%}"]},"hW/h":function(l,n,u){"use strict";function t(l){return o.E(0,[(l()(),o.G(0,null,null,9,"div",[["class","header padding-h-default padding-v-6 text-center border-bottom-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,1,"img",[["routerLink","/mall/mall-category"],["src","./imgs/category.png"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,3).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/title.png"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,1,"img",[["routerLink","/mall/mall-search"],["src","./imgs/icon-search.png"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,8).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,50,"ul",[["class","list padding-h-default padding-v-16"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,15,"li",[["routerLink","../../detail"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==o._26(l,14).onClick()&&t}return t},null,null)),o.H(16384,null,0,r.z,[r.j,r.v,[8,null],o.S,o.T],{routerLink:[0,"routerLink"]},null),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-stores.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","introduction  padding-v-5"]],null,null,null,null,null)),(l()(),o.F(null,["雷士照明 双头源卧室灯EYX9060"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,6,"div",[["class","price text-left padding-v-5"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","price font-size-14"]],null,null,null,null,null)),(l()(),o.F(null,["36.6"])),(l()(),o.G(0,null,null,1,"del",[["class","font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["¥58"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,14,"li",[],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-stores02.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","introduction  padding-v-5"]],null,null,null,null,null)),(l()(),o.F(null,["月影凯顿现代乡村壁灯全铜客厅灯具布艺卧室床头灯玄关灯过道灯饰"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,6,"div",[["class","price text-left padding-v-5"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","price font-size-14"]],null,null,null,null,null)),(l()(),o.F(null,["36.6"])),(l()(),o.G(0,null,null,1,"del",[["class","font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["¥58"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,14,"li",[],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,0,"img",[["src","./imgs/eg-stores03.jpg"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"div",[["class","introduction  padding-v-5"]],null,null,null,null,null)),(l()(),o.F(null,["[WOOMAR/瑝玛] 瑝玛 铜灯吊灯客厅灯 欧式灯具卧室灯温馨浪漫复古别墅复式楼云石灯饰HM-8809-3仿云石"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,6,"div",[["class","price text-left padding-v-5"]],null,null,null,null,null)),(l()(),o.G(0,null,null,1,"span",[["class","font-size-12"]],null,null,null,null,null)),(l()(),o.F(null,["¥"])),(l()(),o.G(0,null,null,1,"span",[["class","price font-size-14"]],null,null,null,null,null)),(l()(),o.F(null,["36.6"])),(l()(),o.G(0,null,null,1,"del",[["class","font-color-content"]],null,null,null,null,null)),(l()(),o.F(null,["¥58"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"]))],function(l,n){l(n,3,0,"/mall/mall-category");l(n,8,0,"/mall/mall-search");l(n,14,0,"../../detail")},null)}function i(l){return o.E(0,[(l()(),o.G(0,null,null,1,"list",[],null,null,null,t,c)),o.H(49152,null,0,a.a,[],null,null)],null,null)}var e=u("TAoj"),o=u("3j3K"),r=u("5oXY"),a=u("Kmep");u.d(n,"a",function(){return d});var s=[e.a],c=o.D({encapsulation:0,styles:s,data:{}}),d=o.I("list",a.a,i,{},{},[])},jE00:function(l,n,u){"use strict";function t(l){return o.E(0,[(l()(),o.G(0,null,null,3,"div",[["class","border-bottom-default padding-v-12 search padding-h-default"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,0,"input",[["placeholder","雷士照明"],["type","text"]],null,null,null,null,null)),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"])),(l()(),o.G(0,null,null,28,"div",[["class","padding-h-default hot-words"]],null,null,null,null,null)),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,1,"div",[["class","title margin-top-15"]],null,null,null,null,null)),(l()(),o.F(null,["热门搜索"])),(l()(),o.F(null,["\n  "])),(l()(),o.G(0,null,null,22,"ul",[["class","words"]],null,null,null,null,null)),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n    "])),(l()(),o.G(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),o.F(null,["雷士照明"])),(l()(),o.F(null,["\n  "])),(l()(),o.F(null,["\n"])),(l()(),o.F(null,["\n"]))],null,null)}function i(l){return o.E(0,[(l()(),o.G(0,null,null,1,"mall-search",[],null,null,null,t,c)),o.H(114688,null,0,r.a,[a.a],null,null)],function(l,n){l(n,1,0)},null)}var e=u("+FC5"),o=u("3j3K"),r=u("KguO"),a=u("84RB");u.d(n,"a",function(){return d});var s=[e.a],c=o.D({encapsulation:0,styles:s,data:{}}),d=o.I("mall-search",r.a,i,{},{},[])},oH1c:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".detail-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .fixed-bottom[_ngcontent-%COMP%]{width:100%}.good-title[_ngcontent-%COMP%]{font-size:.16rem;color:#051b28}.good-price[_ngcontent-%COMP%]{color:#e81a62}.locate[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.locate[_ngcontent-%COMP%]   img.locate-img[_ngcontent-%COMP%]{height:.16rem;margin-right:5px}.amount[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:.16rem}.to-store[_ngcontent-%COMP%]{width:2rem;border:1px solid #ccc;border-radius:5px;text-align:center;color:#666;padding:.04rem;display:inline-block}.display-imgs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]},owuF:function(l,n,u){"use strict";var t=u("o5nM");u.d(n,"a",function(){return i});var i=function(){function l(l){this.appDialogService=l}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[{type:t.a}]},l}()},qdhj:function(l,n,u){"use strict";var t=u("5oXY");u.d(n,"a",function(){return i});var i=function(){function l(l){this.route=l}return l.prototype.ngOnInit=function(){console.log(this.route.params)},l.ctorParameters=function(){return[{type:t.v}]},l}()}});