(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23da996a"],{"0570":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app-base-software-open"}},[e._m(0),t("div",{staticClass:"one-block-2"},[t("a-list",{attrs:{bordered:"","data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(o){return t("a-list-item",{on:{click:function(t){return e.openSoft(o.id)}}},[e._v(" "+e._s(o.content)+" "),t("a-button",{attrs:{type:"link"}},[e._v(" 执行 ")])],1)}}])})],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"one-block-1"},[t("span",[e._v(" 1. 调用其它软件（exe、bash等可执行程序） ")]),t("p"),t("span",{staticClass:"sub-content"},[e._v(" 注：请先将【powershell.exe】复制到【electron-egg/build/extraResources】目录中 ")])])}],l=o("a358");const a=[{content:"powershell.exe",id:"powershell.exe"}];var c={data(){return{data:a}},methods:{openSoft(e){const t=this;this.$ipcInvoke(l["a"].openSoftware,e).then(e=>{e||t.$message.error("程序不存在")})}}},p=c,s=(o("f8ff"),o("2877")),i=Object(s["a"])(p,r,n,!1,null,"4de0eec0",null);t["default"]=i.exports},"7fd2":function(e,t,o){},a358:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"b",(function(){return p}));var r=o("cff8"),n=o.n(r),l=o("b775");const a={test:"controller.example.test",messageShow:"controller.example.messageShow",messageShowConfirm:"controller.example.messageShowConfirm",selectFolder:"controller.example.selectFolder",openDirectory:"controller.example.openDirectory",loadViewContent:"controller.example.loadViewContent",removeViewContent:"controller.example.removeViewContent",createWindow:"controller.example.createWindow",sendNotification:"controller.example.sendNotification",initPowerMonitor:"controller.example.initPowerMonitor",getScreen:"controller.example.getScreen",openSoftware:"controller.example.openSoftware",autoLaunch:"controller.example.autoLaunch",setTheme:"controller.example.setTheme",getTheme:"controller.example.getTheme",checkForUpdater:"controller.example.checkForUpdater",downloadApp:"controller.example.downloadApp",dbOperation:"controller.example.dbOperation",sqlitedbOperation:"controller.example.sqlitedbOperation",uploadFile:"controller.example.uploadFile",checkHttpServer:"controller.example.checkHttpServer",doHttpRequest:"controller.example.doHttpRequest",doSocketRequest:"controller.example.doSocketRequest",ipcInvokeMsg:"controller.example.ipcInvokeMsg",ipcSendSyncMsg:"controller.example.ipcSendSyncMsg",ipcSendMsg:"controller.example.ipcSendMsg",hello:"controller.example.hello"},c={appUpdater:"app.updater"},p=(e,t)=>{const o=n.a.get("httpServiceConfig"),r=o.server||"http://127.0.0.1:7071";let a=e.split(".").join("/");return a=r+"/"+a,console.log("url:",a),Object(l["b"])({url:a,method:"post",data:t,params:{},timeout:6e4})}},f8ff:function(e,t,o){"use strict";o("7fd2")}}]);
//# sourceMappingURL=chunk-23da996a.f3278d49.js.map