(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a6aa20a"],{"5bda":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-screen"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:function(t){return e.getScreen(0)}}},[e._v("获取当前鼠标位置")]),t("a-button",{on:{click:function(t){return e.getScreen(1)}}},[e._v("获取主屏幕")]),t("a-button",{on:{click:function(t){return e.getScreen(2)}}},[e._v("获取所有屏幕")])],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-descriptions",{attrs:{title:""}},e._l(e.data,(function(o,r){return t("a-descriptions-item",{key:r,attrs:{label:o.title}},[e._v(" "+e._s(o.desc)+" ")])})),1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 屏幕信息 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 结果： ")])])}],l=o("a358"),c={data(){return{data:[]}},mounted(){},methods:{getScreen(e){const t=this;this.$ipcInvoke(l["a"].getScreen,e).then(e=>{t.data=e})}}},a=c,i=(o("c651"),o("2877")),p=Object(i["a"])(a,r,n,!1,null,"10809a44",null);t["default"]=p.exports},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return i}));var r=o("cff8"),n=o.n(r),l=o("b775");const c={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",importExcel:"controller.example.importExcel",devt:"controller.example.devt",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",atsqlitedbOperation:"controller.example.atsqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcATSendSyncMsg:"controller.example.ipcATSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello",initSerialPort:"controller.example.initSerialPort",listSerialPort:"controller.example.listSerialPort"},a={appUpdater:"app.updater"},i=(e,t)=>{const o=n.a.get("httpServiceConfig"),r=o.server||"http://127.0.0.1:7071";let c=e.split(".").join("/");return c=r+"/"+c,console.log("url:",c),Object(l["b"])({url:c,method:"post",data:t,params:{},timeout:6e4})}},c651:function(e,t,o){"use strict";o("e24f")},e24f:function(e,t,o){}}]);
//# sourceMappingURL=chunk-4a6aa20a.6d03cc4c.js.map