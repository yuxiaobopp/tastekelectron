(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ac02bda"],{"2bb9":function(e,t,o){},"889f":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-window"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.createWindow(0)}}},[e._v("打开哔哩哔哩")])],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.createWindow(1)}}},[e._v("打开html页面")])],1)],1)])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 新窗口中加载web内容 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 新窗口中加载html内容 ")])])}],r=o("a358"),c={data(){return{views:[{type:"web",content:"https://www.bilibili.com/"},{type:"html",content:"/public/html/view_example.html"}]}},methods:{createWindow(e){this.$ipcInvoke(r["a"].createWindow,this.views[e]).then(e=>{console.log(e)})}}},a=c,i=(o("a35e"),o("2877")),p=Object(i["a"])(a,n,l,!1,null,"674a2e67",null);t["default"]=p.exports},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i}));var n=o("cff8"),l=o.n(n),r=o("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},a={appUpdater:"app.updater"},i=(e,t)=>{const o=l.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=n+"/"+c,console.log("url:",c),Object(r["b"])({url:c,method:"post",data:t,params:{},timeout:6e4})}},a35e:function(e,t,o){"use strict";o("2bb9")}}]);
//# sourceMappingURL=chunk-3ac02bda.367ad635.js.map