(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"16ea":function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{TabCur:0,scrollLeft:0,nav:[],cardCur:0,swiperImg:[],dotStyle:!0,pageShow:!0,MainNavIcon:[],VideNavIcon:[],travelimg:"",traveljournalIMg:[],themeimg:"",themeIMgArr:[],hotelimg:"",hotelarr:[],sichuanimg:"",sichuanarr:[],yunnanimg:"",yunnanarr:[],subsidiary:[]}},methods:{price:function(a){a=parseInt(a);var t=[],e=0;a=(a||0).toString().split("");for(var i=a.length-1;i>=0;i--)e++,t.unshift(a[i]),e%3||0==i||t.unshift(",");return t.join("")},tabSelect:function(a){this.TabCur=a.currentTarget.dataset.id,this.scrollLeft=60*(a.currentTarget.dataset.id-1);var t=a.target.dataset.id;if(0==t)this.pageShow=!0;else if(1==t){this.pageShow=!1;var e={"ids[0]":1967,"ids[1]":1965,"ids[2]":2213,"ids[3]":2290};this.switchpage(e)}else if(2==t){this.pageShow=!1;var i={"ids[0]":2369,"ids[1]":2350};this.switchpage(i)}else if(3==t){this.pageShow=!1;var r={"ids[0]":2193,"ids[1]":2190,"ids[2]":2289,"ids[3]":2288,"ids[4]":2156};this.switchpage(r)}else if(4==t){this.pageShow=!1;var n={"ids[0]":1479,"ids[1]":1936,"ids[2]":1983,"ids[3]":1832,"ids[4]":1460,"ids[5]":1914};this.switchpage(n)}else this.pageShow=!1},TowerSwiper:function(a){for(var t=this[a],e=0;e<t.length;e++)t[e].zIndex=parseInt(t.length/2)+1-Math.abs(e-parseInt(t.length/2)),t[e].mLeft=e-parseInt(t.length/2);this.swiperImg=t},getNav:function(){var t=this;a.request({url:"/api/v3/m1/cms/nav?pageId=5da95458b896310cf66ba97f",method:"GET",success:function(a){t.nav=a.data.data.nav}})},getImg:function(){var t=this;a.request({url:"/api/v3/m1/cms/page/detail?pageId=5da95458b896310cf66ba97f",method:"GET",success:function(a){t.swiperImg=a.data.data.data[0].data,t.traveljournalIMg=a.data.data.data[2].data,t.travelimg=a.data.data.data[1].data[0].img.url,t.themeimg=a.data.data.data[3].data[0].img.url,t.themeIMgArr=a.data.data.data[4].data,t.hotelimg=a.data.data.data[5].data[0].img.url,t.sichuanimg=a.data.data.data[7].data[0].img.url,t.yunnanimg=a.data.data.data[9].data[0].img.url,console.log(a.data.data.data)}}),a.request({url:"/api/v3/m1/theme/group",method:"GET",success:function(a){t.VideNavIcon=a.data.data.list}}),a.request({url:"/api/v3/m1/homepage/icons/a",method:"GET",success:function(a){t.MainNavIcon=a.data.data.list}}),a.request({url:"/api/v3/m1/product/list/by_ids",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{"ids[0]":2296,"ids[1]":2295,"ids[2]":2365,"ids[3]":2364,"ids[4]":2193,"ids[5]":2190,"ids[6]":2289,"ids[7]":2288,"ids[8]":2140,"ids[9]":1965,"ids[10]":1967,"ids[11]":2213},success:function(a){var e=a.data.data.list;t.hotelarr=[],t.sichuanarr=[],t.yunnanarr=[];for(var i=0;i<=3;i++)t.hotelarr.push(e[i]);for(var r=4;r<=7;r++)t.sichuanarr.push(e[r]);for(var n=8;n<=e.length-1;n++)t.yunnanarr.push(e[n])}})},switchpage:function(t){var e=this;a.request({url:"/api/v3/m1/product/list/by_ids",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:t,success:function(a){console.log(a.data.data.list),e.subsidiary=a.data.data.list}})}},mounted:function(){this.TowerSwiper("swiperImg"),this.getNav(),this.getImg()}};t.default=e}).call(this,e("543d")["default"])},"3d0a":function(a,t,e){"use strict";(function(a){e("8ad8");i(e("66fd"));var t=i(e("c2e5"));function i(a){return a&&a.__esModule?a:{default:a}}a(t.default)}).call(this,e("543d")["createPage"])},"6bef":function(a,t,e){"use strict";var i=e("dd27"),r=e.n(i);r.a},b1d7:function(a,t,e){"use strict";e.r(t);var i=e("16ea"),r=e.n(i);for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);t["default"]=r.a},c2e5:function(a,t,e){"use strict";e.r(t);var i=e("c45a"),r=e("b1d7");for(var n in r)"default"!==n&&function(a){e.d(t,a,(function(){return r[a]}))}(n);e("6bef");var s,d=e("f0c5"),u=Object(d["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=u.exports},c45a:function(a,t,e){"use strict";var i,r=function(){var a=this,t=a.$createElement,e=(a._self._c,a.__map(a.hotelarr,(function(t,e){var i=a.price(t.price);return{$orig:a.__get_orig(t),m0:i}}))),i=a.__map(a.sichuanarr,(function(t,e){var i=a.price(t.price);return{$orig:a.__get_orig(t),m1:i}})),r=a.__map(a.yunnanarr,(function(t,e){var i=a.price(t.price);return{$orig:a.__get_orig(t),m2:i}})),n=a.__map(a.subsidiary,(function(t,e){var i=a.price(t.price);return{$orig:a.__get_orig(t),m3:i}}));a.$mp.data=Object.assign({},{$root:{l0:e,l1:i,l2:r,l3:n}})},n=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}))},dd27:function(a,t,e){}},[["3d0a","common/runtime","common/vendor"]]]);