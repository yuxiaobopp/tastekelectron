(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7376b260"],{"149e":function(e,t,o){"use strict";o("869f")},"869f":function(e,t,o){},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i}));var n=o("cff8"),l=o.n(n),r=o("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",importExcel:"controller.example.importExcel",devt:"controller.example.devt",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcATSendSyncMsg:"controller.example.ipcATSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},a={appUpdater:"app.updater"},i=(e,t)=>{const o=l.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=n+"/"+c,console.log("url:",c),Object(r["b"])({url:c,method:"post",data:t,params:{},timeout:6e4})}},ae87:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-window-view"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.loadViewContent(0)}}},[e._v("加载百度页面")]),t("a-button",{on:{click:function(t){return e.removeViewContent(0)}}},[e._v("移除百度页面")])],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.loadViewContent(1)}}},[e._v("加载html页面")]),t("a-button",{on:{click:function(t){return e.removeViewContent(1)}}},[e._v("移除html页面")])],1)],1)])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 嵌入web内容 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 嵌入html内容 ")])])}],r=o("a358"),c={data(){return{views:[{type:"web",content:"https://www.baidu.com/"},{type:"html",content:"/public/html/view_example.html"}]}},methods:{loadViewContent(e){const t=this;t.$ipcInvoke(r["a"].loadViewContent,this.views[e]).then(e=>{console.log(e)})},removeViewContent(e){const t=this;t.$ipcInvoke(r["a"].removeViewContent,t.views[e]).then(e=>{console.log(e)})}}},a=c,i=(o("149e"),o("2877")),p=Object(i["a"])(a,n,l,!1,null,"113436ad",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7376b260.35afcff3.js.map