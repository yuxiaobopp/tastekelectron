(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b68908e"],{"4d18":function(e,t,o){},"5a92":function(e,t,o){"use strict";o("4d18")},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return p}));var n=o("cff8"),r=o.n(n),l=o("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",atsqlitedbOperation:"controller.example.atsqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},a={appUpdater:"app.updater"},p=(e,t)=>{const o=r.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=n+"/"+c,console.log("url:",c),Object(l["b"])({url:c,method:"post",data:t,params:{},timeout:6e4})}},acbf:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-test-api"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.exec(1)}}},[e._v(" 点击 ")]),t("a-button",{on:{click:function(t){return e.exec2(1)}}},[e._v(" 点击2 ")])],1)],1)])},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 测试一些操作系统api ")])])}],l=o("a358"),c={data(){return{type:1}},methods:{exec(e){const t={id:e};this.$ipcInvoke(l["a"].test,t).then(e=>{console.log("res:",e)})},exec2(e){const t={id:e};Object(l["b"])(l["a"].test,t).then(e=>{console.log("res2:",e)})}}},a=c,p=(o("5a92"),o("2877")),i=Object(p["a"])(a,n,r,!1,null,"35735581",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-0b68908e.6fb175ab.js.map