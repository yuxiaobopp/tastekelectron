(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6d18432"],{6903:function(e,t,o){},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"c",(function(){return r})),o.d(t,"b",(function(){return a}));var n=o("cff8"),l=o.n(n),c=o("b775");const s={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",importExcel:"controller.example.importExcel",devt:"controller.example.devt",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",atsqlitedbOperation:"controller.example.atsqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcATSendSyncMsg:"controller.example.ipcATSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello",initSerialPort:"controller.example.initSerialPort",listSerialPort:"controller.example.listSerialPort"},r={appUpdater:"app.updater"},a=(e,t)=>{const o=l.a.get("httpServiceConfig"),n=o.server||"http://127.0.0.1:7071";let s=e.split(".").join("/");return s=n+"/"+s,console.log("url:",s),Object(c["b"])({url:s,method:"post",data:t,params:{},timeout:6e4})}},d3c1:function(e,t,o){"use strict";o("6903")},d44a:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-socket-ipc"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:e.handleInvoke}},[e._v("发送 - 回调")]),e._v(" 结果："+e._s(e.message1)+" ")],1),t("p"),t("a-space",[t("a-button",{on:{click:e.handleInvoke2}},[e._v("发送 - async/await")]),e._v(" 结果："+e._s(e.message2)+" ")],1)],1),e._m(1),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:e.handleSendSync}},[e._v("同步消息")]),e._v(" 结果："+e._s(e.message3)+" ")],1)],1),e._m(2),t("div",{staticClass:"one-block-2"},[t("a-space",[t("a-button",{on:{click:e.sendMsgStart}},[e._v("开始")]),t("a-button",{on:{click:e.sendMsgStop}},[e._v("结束")]),e._v(" 结果："+e._s(e.messageString)+" ")],1)],1)])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 发送异步消息 ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 2. 同步消息（不推荐，阻塞执行） ")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 3. 长消息： 服务端持续向前端页面发消息 ")])])}],c=o("a358"),s={data(){return{messageString:"",message1:"",message2:"",message3:""}},mounted(){this.init()},methods:{init(){const e=this;this.$ipc.removeAllListeners(c["a"].ipcSendMsg),this.$ipc.on(c["a"].ipcSendMsg,(t,o)=>{console.log("[ipcRenderer] [socketMsgStart] result:",o),e.messageString=o,t.sender.send(c["a"].hello,"electron-egg")})},sendMsgStart(){const e={type:"start",content:"开始"};this.$ipc.send(c["a"].ipcSendMsg,e)},sendMsgStop(){const e={type:"end",content:""};this.$ipc.send(c["a"].ipcSendMsg,e)},handleInvoke(){const e=this;this.$ipcInvoke(c["a"].ipcInvokeMsg,"异步-回调").then(t=>{console.log("r:",t),e.message1=t})},async handleInvoke2(){const e=await this.$ipcInvoke(c["a"].ipcInvokeMsg,"异步");console.log("msg:",e),this.message2=e},handleSendSync(){const e=this.$ipcSendSync(c["a"].ipcSendSyncMsg,"同步");this.message3=e}}},r=s,a=(o("d3c1"),o("2877")),i=Object(a["a"])(r,n,l,!1,null,"3cfcde3a",null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-c6d18432.6cc862b0.js.map