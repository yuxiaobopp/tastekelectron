(function(e){function n(n){for(var a,s,o=n[0],i=n[1],u=n[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&f.push(c[s][0]),c[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,s=1;s<t.length;s++){var o=t[s];0!==c[o]&&(a=!1)}a&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},s={app:0},c={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0b68908e":"fa4adfc8","chunk-11e34c7f":"90e1abf4","chunk-1c99940f":"1a136e98","chunk-1fafb628":"56d8e9f7","chunk-23da996a":"8f685a4e","chunk-34fd7d2f":"6b135efd","chunk-3ac02bda":"4bcf2048","chunk-3f2d6b1e":"a05ca04a","chunk-4a6aa20a":"77a78178","chunk-53112144":"2de38feb","chunk-5aed846f":"eb5534d9","chunk-7376b260":"2806c5f2","chunk-77291f91":"6161a55b","chunk-96485c7a":"31926fea","chunk-a3c23d44":"e811d781","chunk-c6d18432":"400479f6","chunk-dc25f9b0":"98c4e2f1","chunk-ee9f0388":"173e37e8"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0b68908e":1,"chunk-11e34c7f":1,"chunk-1c99940f":1,"chunk-1fafb628":1,"chunk-23da996a":1,"chunk-34fd7d2f":1,"chunk-3ac02bda":1,"chunk-3f2d6b1e":1,"chunk-4a6aa20a":1,"chunk-53112144":1,"chunk-5aed846f":1,"chunk-7376b260":1,"chunk-77291f91":1,"chunk-96485c7a":1,"chunk-a3c23d44":1,"chunk-c6d18432":1,"chunk-dc25f9b0":1,"chunk-ee9f0388":1};s[e]?n.push(s[e]):0!==s[e]&&t[e]&&n.push(s[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0b68908e":"d635b2f3","chunk-11e34c7f":"7750b1a1","chunk-1c99940f":"87d5fe76","chunk-1fafb628":"0f3904b9","chunk-23da996a":"e1e0247d","chunk-34fd7d2f":"6a07402f","chunk-3ac02bda":"d3b5c327","chunk-3f2d6b1e":"80096fc0","chunk-4a6aa20a":"2f12db76","chunk-53112144":"1ec378ff","chunk-5aed846f":"5cf6519b","chunk-7376b260":"83845a9b","chunk-77291f91":"4209a5cd","chunk-96485c7a":"286494f0","chunk-a3c23d44":"0c43dff1","chunk-c6d18432":"2138a5d9","chunk-dc25f9b0":"650c86f3","chunk-ee9f0388":"ab0373ec"}[e]+".css",c=i.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var u=r[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===c))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],d=u.getAttribute("data-href");if(d===a||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[e],l.parentNode.removeChild(l),t(r)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){s[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var f=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",f.name="ChunkLoadError",f.type=a,f.request=s,t[1](f)}c[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var f=0;f<u.length;f++)n(u[f]);var l=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"253a":function(e,n,t){},2962:function(e,n,t){"use strict";t("9aef")},"3f4f":function(e,n,t){"use strict";t("89b9")},4678:function(e,n,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var n=c(e);return t(n)}function c(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=c,e.exports=s,s.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);var a=t("a026"),s=t("f23d"),c=(t("3aed"),function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),r=[],o={name:"App",components:{},data(){return{}},watch:{},methods:{}},i=o,u=(t("3f4f"),t("2877")),d=Object(u["a"])(i,c,r,!1,null,null,null),f=d.exports,l=t("8c4f"),p=function(){var e=this,n=e._self._c;return n("a-layout",{attrs:{id:"app-layout-sider"}},[n("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"},model:{value:e.collapsed,callback:function(n){e.collapsed=n},expression:"collapsed"}},[n("div",{staticClass:"logo"},[n("img",{staticClass:"pic-logo",attrs:{src:t("cf05")}})]),n("a-menu",{staticClass:"menu-item",attrs:{theme:"light",mode:"inline","default-selected-keys":[e.default_key]},on:{click:e.menuHandle}},e._l(e.menu,(function(t,a){return n("a-menu-item",{key:a},[n("a-icon",{attrs:{type:t.icon}}),e._v(" "+e._s(t.title)+" ")],1)})),1)],1),n("a-layout",[n("a-layout-content",{staticClass:"layout-content"},[n("router-view")],1)],1)],1)},h=[],m=(t("14d9"),{name:"AppSider",data(){return{collapsed:!0,default_key:"menu_2",current:"",menu:{menu_1:{icon:"home",title:"框架",pageName:"Base",params:{}},menu_2:{icon:"desktop",title:"示例",pageName:"Other",params:{}}}}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(e){this.current=e?e.key:this.default_key;const n=this.menu[this.current];console.log("[home] load page:",n.pageName),this.$router.push({name:n.pageName,params:n.params})}}}),b=m,j=(t("2962"),Object(u["a"])(b,p,h,!1,null,"78dff68a",null)),k=j.exports,g=function(){var e=this,n=e._self._c;return n("a-layout",{attrs:{id:"app-menu"}},[n("a-layout-sider",{staticClass:"layout-sider",attrs:{theme:"light"}},[n("a-menu",{attrs:{theme:"light",mode:"inline","default-selected-keys":[e.default_key],"selected-keys":[e.current]},on:{click:e.menuClick}},e._l(e.menu,(function(t,a){return n("a-menu-item",{key:a},[n("router-link",{attrs:{to:{name:t.pageName,params:t.params}}},[n("span",[e._v(e._s(t.title))])])],1)})),1)],1),n("a-layout",[n("a-layout-content",[n("router-view")],1)],1)],1)},y=[],v={base:{menu_100:{icon:"home",title:"文件",pageName:"BaseFileIndex",params:{id:"0"}},menu_300:{icon:"profile",title:"通信",pageName:"BaseSocketIpc",params:{}},menu_301:{icon:"profile",title:"http服务",pageName:"BaseSocketHttpServer",params:{}},menu_302:{icon:"profile",title:"socket服务",pageName:"BaseSocketSocketServer",params:{}},menu_310:{icon:"profile",title:"json数据库",pageName:"BaseDBIndex",params:{}},menu_320:{icon:"profile",title:"sqlite数据库",pageName:"BaseSqliteDBIndex",params:{}},menu_400:{icon:"profile",title:"视图",pageName:"BaseWindowViewIndex",params:{}},menu_401:{icon:"profile",title:"窗口",pageName:"BaseWindowIndex",params:{}},menu_405:{icon:"profile",title:"桌面通知",pageName:"BaseNotificationIndex",params:{}},menu_407:{icon:"profile",title:"电源监控",pageName:"BasePowerMonitorIndex",params:{}},menu_409:{icon:"profile",title:"屏幕信息",pageName:"BaseScreenIndex",params:{}},menu_411:{icon:"profile",title:"系统主题",pageName:"BaseThemeIndex",params:{}},menu_412:{icon:"profile",title:"自动更新",pageName:"BaseUpdaterIndex",params:{}},menu_500:{icon:"profile",title:"软件调用",pageName:"BaseSoftwareIndex",params:{}},menu_900:{icon:"profile",title:"测试",pageName:"BaseTestApiIndex",params:{}}},other:{menu_100:{icon:"profile",title:"打开串口",pageName:"OtherTestIndex",params:{}},menu_211:{icon:"profile",title:"指令维护",pageName:"OtherInitATIndex",params:{}}}},x={props:{id:{type:String,default:""}},data(){return{menu:{},default_key:"menu_100",current:"",keys:[]}},watch:{id:function(){this.menuHandle()}},created(){},mounted(){this.menuHandle()},methods:{menuHandle(){switch(this.current=this.default_key,this.id){case"base":this.menu=v.base;break;case"other":this.menu=v.other;break}const e=this.menu[this.current];this.$router.push({name:e.pageName,params:e.params})},menuClick(e){this.current=e.key}}},w=x,_=(t("e4fb"),Object(u["a"])(w,g,y,!1,null,"4541d966",null)),B=_.exports;const I=[{path:"/",component:k,children:[{path:"/base",name:"Base",component:B,props:{id:"base"},redirect:{name:"BaseFileIndex"},children:[{path:"/base/file/index",name:"BaseFileIndex",component:()=>t.e("chunk-11e34c7f").then(t.bind(null,"c9d6"))},{path:"/base/socket/ipc",name:"BaseSocketIpc",component:()=>t.e("chunk-c6d18432").then(t.bind(null,"d44a"))},{path:"/base/db/index",name:"BaseDBIndex",component:()=>t.e("chunk-1c99940f").then(t.bind(null,"e091"))},{path:"/base/sqlitedb/index",name:"BaseSqliteDBIndex",component:()=>t.e("chunk-53112144").then(t.bind(null,"022e"))},{path:"/base/windowview/index",name:"BaseWindowViewIndex",component:()=>t.e("chunk-7376b260").then(t.bind(null,"ae87"))},{path:"/base/window/index",name:"BaseWindowIndex",component:()=>t.e("chunk-3ac02bda").then(t.bind(null,"889f"))},{path:"/base/notification/index",name:"BaseNotificationIndex",component:()=>t.e("chunk-1fafb628").then(t.bind(null,"03e3"))},{path:"/base/powermonitor/index",name:"BasePowerMonitorIndex",component:()=>t.e("chunk-a3c23d44").then(t.bind(null,"8a01"))},{path:"/base/screen/index",name:"BaseScreenIndex",component:()=>t.e("chunk-4a6aa20a").then(t.bind(null,"5bda"))},{path:"/base/theme/index",name:"BaseThemeIndex",component:()=>t.e("chunk-ee9f0388").then(t.bind(null,"db5a"))},{path:"/base/software/index",name:"BaseSoftwareIndex",component:()=>t.e("chunk-23da996a").then(t.bind(null,"0570"))},{path:"/base/socket/httpserver",name:"BaseSocketHttpServer",component:()=>t.e("chunk-3f2d6b1e").then(t.bind(null,"8f29"))},{path:"/base/socket/socketserver",name:"BaseSocketSocketServer",component:()=>t.e("chunk-5aed846f").then(t.bind(null,"2ec5"))},{path:"/base/system/index",name:"BaseSystemIndex",component:()=>t.e("chunk-34fd7d2f").then(t.bind(null,"4a19"))},{path:"/base/testapi/index",name:"BaseTestApiIndex",component:()=>t.e("chunk-0b68908e").then(t.bind(null,"acbf"))},{path:"/base/updater/index",name:"BaseUpdaterIndex",component:()=>t.e("chunk-96485c7a").then(t.bind(null,"8f7f"))}]},{path:"/other",name:"Other",component:B,props:{id:"other"},redirect:{name:"OtherTestIndex"},children:[{path:"/other/test/index",name:"OtherTestIndex",component:()=>t.e("chunk-dc25f9b0").then(t.bind(null,"1768"))},{path:"/other/initAT/index",name:"OtherInitATIndex",component:()=>t.e("chunk-77291f91").then(t.bind(null,"3977"))}]}]}],S=l["a"].prototype.push;l["a"].prototype.push=function(e,n,t){return n||t?S.call(this,e,n,t):S.call(this,e).catch(e=>e)},a["a"].use(l["a"]);var N=new l["a"]({mode:"history",routes:I}),O=t("b775");const{ipcRenderer:z}=window.require&&window.require("electron")||window.electron||{},T=(e,n)=>{const t=z.invoke(e,n);return t},C=(e,n)=>{const t=z.sendSync(e,n);return t};var A={install(e){e.prototype.$ipc=z,e.prototype.$ipcInvoke=T,e.prototype.$ipcSendSync=C}};a["a"].use(s["a"]),a["a"].use(O["a"]),a["a"].use(A),a["a"].config.productionTip=!1,new a["a"]({router:N,render:e=>e(f)}).$mount("#app")},"89b9":function(e,n,t){},"9aef":function(e,n,t){},b775:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a=t("bc3a"),s=t.n(a),c=t("cff8"),r=t.n(c),o=t("56cd");const i={vm:{},install(e,n){this.installed||(this.installed=!0,n?(e.axios=n,Object.defineProperties(e.prototype,{axios:{get:function(){return n}},$http:{get:function(){return n}}})):console.error("You have to install axios"))}},u=s.a.create({baseURL:"",timeout:6e4}),d=e=>{if(e.response){const n=e.response.data;403===e.response.status&&o["a"].error({message:"Forbidden",description:n.message}),401!==e.response.status||n.result&&n.result.isLogin||o["a"].error({message:"Unauthorized",description:"Authorization verification failed"})}return Promise.reject(e)};u.interceptors.request.use(e=>{const n=r.a.get("token");return n&&(e.headers["Access-Token"]=n),e},d),u.interceptors.response.use(e=>e.data,d);const f={vm:{},install(e){e.use(i,u)}};n["b"]=u},cf05:function(e,n,t){e.exports=t.p+"img/logo.35e890a9.png"},e4fb:function(e,n,t){"use strict";t("253a")}});
//# sourceMappingURL=app.119364a6.js.map