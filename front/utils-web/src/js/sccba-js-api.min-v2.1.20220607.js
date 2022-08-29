/*!
* SCCBA JS API v2.0.58 
* (c) 2018-present SCCBAFE 
* Released under the MIT License.
*/
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sccbaJsApi",[],t):"object"==typeof exports?exports.sccbaJsApi=t():n.sccbaJsApi=t()}(this,(function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){"use strict";e.d(t,"f",(function(){return r})),e.d(t,"q",(function(){return o})),e.d(t,"h",(function(){return i})),e.d(t,"j",(function(){return u})),e.d(t,"p",(function(){return c})),e.d(t,"a",(function(){return a})),e.d(t,"o",(function(){return f})),e.d(t,"i",(function(){return d})),e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return l})),e.d(t,"n",(function(){return p})),e.d(t,"m",(function(){return g})),e.d(t,"l",(function(){return h})),e.d(t,"g",(function(){return v})),e.d(t,"e",(function(){return y})),e.d(t,"d",(function(){return m})),e.d(t,"k",(function(){return b}));var r="www.bankalliance.com.cn",o="success",i="fail",u="WebViewJavascriptBridge",c="submitKey",a="album",f="string",d="function",s="array",l="boolean",p="object",g="number",h="mobilebank",v="directbank",y="corporatebank",m="browser",b="^(?![0-9]+$)(?![a-zA-Z]+$)(?![^0-9a-zA-Z]+$)(?![^a-zA-Z]+$)(?![^0-9]+$)[0-9a-zA-Z\\S]{6,20}$"},function(n,t,e){"use strict";(function(n){var r=e(2),o={global:{},userAgent:"",submitKey:"",setDevice:function(n){o.device=n,o.global.device=n,"undefined"!=typeof window&&window.sccbaJsApi&&(window.sccbaJsApi.device=n)},getDevice:function(){return o.global.device||{}},device:null};Object(r.a)()?o.global=n:(o.userAgent=window.navigator.userAgent,o.global=window),t.a=o}).call(this,e(4))},function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return u}));var r=e(0),o=function(){return!1},i=function(n){return Object.prototype.toString.call(n).replace(/\[object (\w+)\]/,"$1").toLowerCase()},u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};for(var e in n)e!==r.q&&e!==r.h&&(t[e]=n[e]);return t}},function(n){n.exports=JSON.parse('{"a":"2.0.58"}')},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";e.r(t),e.d(t,"config",(function(){return R})),e.d(t,"onReady",(function(){return L})),e.d(t,"onError",(function(){return O})),e.d(t,"callHandler",(function(){return x})),e.d(t,"register",(function(){return E})),e.d(t,"addEventListener",(function(){return E})),e.d(t,"removeRegister",(function(){return j})),e.d(t,"removeEventListener",(function(){return j})),e.d(t,"log",(function(){return V})),e.d(t,"checkJsApi",(function(){return M})),e.d(t,"sccbaJSBridgeReady",(function(){return q})),e.d(t,"request",(function(){return K})),e.d(t,"simpleRequest",(function(){return J})),e.d(t,"getSubmitKey",(function(){return W})),e.d(t,"uploadImage",(function(){return F})),e.d(t,"encryptRequestJson",(function(){return U})),e.d(t,"encryptAESJson",(function(){return $})),e.d(t,"setSessionData",(function(){return X})),e.d(t,"getSessionData",(function(){return G})),e.d(t,"clearSessionData",(function(){return Q})),e.d(t,"saveLocalData",(function(){return Z})),e.d(t,"getLocalData",(function(){return nn})),e.d(t,"clearLocalData",(function(){return tn})),e.d(t,"setHubData",(function(){return en})),e.d(t,"getHubData",(function(){return rn})),e.d(t,"getSynchronizeIds",(function(){return on})),e.d(t,"showTradeKeyboard",(function(){return un})),e.d(t,"showLoginKeyboard",(function(){return cn})),e.d(t,"showRateKeyboard",(function(){return an})),e.d(t,"showSignPad",(function(){return fn})),e.d(t,"getLoginPassword",(function(){return dn})),e.d(t,"clearLoginPassword",(function(){return sn})),e.d(t,"getLoginPasswordSafeLevel",(function(){return ln})),e.d(t,"compareLoginPassword",(function(){return pn})),e.d(t,"chooseImage",(function(){return gn})),e.d(t,"downloadUserAvatar",(function(){return hn})),e.d(t,"savePicture",(function(){return vn})),e.d(t,"readText",(function(){return yn})),e.d(t,"getSuitableState",(function(){return mn})),e.d(t,"setSuitableState",(function(){return bn})),e.d(t,"playSuitableVoiceWithText",(function(){return wn})),e.d(t,"stopPlaySuitableVoice",(function(){return Sn})),e.d(t,"setSuitableRate",(function(){return Bn})),e.d(t,"requestPermission",(function(){return An})),e.d(t,"getAllMenuList",(function(){return kn})),e.d(t,"getMainMenuList",(function(){return In})),e.d(t,"checkMenu",(function(){return Tn})),e.d(t,"goMenu",(function(){return Cn})),e.d(t,"checkBundle",(function(){return Dn})),e.d(t,"getMenuIcon",(function(){return Pn})),e.d(t,"getAllMenuIcon",(function(){return Rn})),e.d(t,"getStepCountWithTime",(function(){return Ln})),e.d(t,"addSystemCalendarEvent",(function(){return On})),e.d(t,"deleteSystemCalendarEvent",(function(){return xn})),e.d(t,"showNavigationBarRightImageButton",(function(){return En})),e.d(t,"onRightImageButtonEventListener",(function(){return jn})),e.d(t,"hideNavigationBarRightImageButton",(function(){return Vn})),e.d(t,"getLocation",(function(){return Mn})),e.d(t,"getStepCount",(function(){return qn})),e.d(t,"getYesterdayStepCount",(function(){return Hn})),e.d(t,"getNowStepCount",(function(){return Nn})),e.d(t,"openURL",(function(){return Kn})),e.d(t,"openApp",(function(){return Jn})),e.d(t,"copyText",(function(){return Wn})),e.d(t,"openMapAppNavigation",(function(){return Fn})),e.d(t,"choosePhoneContacts",(function(){return Un})),e.d(t,"platformVerify",(function(){return $n})),e.d(t,"getNetworkType",(function(){return _n})),e.d(t,"screenShots",(function(){return zn})),e.d(t,"antiScreenShot",(function(){return Yn})),e.d(t,"clearScreenShot",(function(){return Xn})),e.d(t,"setScreenBrightness",(function(){return Gn})),e.d(t,"clearScreenBrightness",(function(){return Qn})),e.d(t,"getNetInfo",(function(){return Zn})),e.d(t,"getDeviceInfo",(function(){return nt})),e.d(t,"scanQRCode",(function(){return tt})),e.d(t,"openESSC",(function(){return et})),e.d(t,"closeESSC",(function(){return rt})),e.d(t,"onScanQRCode",(function(){return ot})),e.d(t,"messageJson",(function(){return it})),e.d(t,"isLogin",(function(){return ut})),e.d(t,"login",(function(){return ct})),e.d(t,"logout",(function(){return at})),e.d(t,"setAlive",(function(){return ft})),e.d(t,"getJWToken",(function(){return dt})),e.d(t,"getNoStateJWToken",(function(){return st})),e.d(t,"getAccessCode",(function(){return lt})),e.d(t,"getTrustFortDeviceInfo",(function(){return pt})),e.d(t,"pushWindow",(function(){return gt})),e.d(t,"popWindow",(function(){return ht})),e.d(t,"popTo",(function(){return vt})),e.d(t,"redirectTo",(function(){return yt})),e.d(t,"openInBrowser",(function(){return mt})),e.d(t,"openPullRefresh",(function(){return bt})),e.d(t,"onPageRefresh",(function(){return wt})),e.d(t,"openInAppBrowser",(function(){return St})),e.d(t,"onInAppBrowserLoadStart",(function(){return Bt})),e.d(t,"onInAppBrowserLoadStop",(function(){return At})),e.d(t,"onInAppBrowserLoadError",(function(){return kt})),e.d(t,"onInAppBrowserExit",(function(){return It})),e.d(t,"closePullRefresh",(function(){return Tt})),e.d(t,"onResume",(function(){return Ct})),e.d(t,"onPause",(function(){return Dt})),e.d(t,"onPageResume",(function(){return Pt})),e.d(t,"onPagePause",(function(){return Rt})),e.d(t,"addBackEventListener",(function(){return Lt})),e.d(t,"removeBackEventListener",(function(){return Ot})),e.d(t,"thirdPartCallback",(function(){return xt})),e.d(t,"thirdAppGoCordovaPage",(function(){return Et})),e.d(t,"openBCEWallet",(function(){return jt})),e.d(t,"openVideoBank",(function(){return Vt})),e.d(t,"shareWeChatFriend",(function(){return Mt})),e.d(t,"share",(function(){return qt})),e.d(t,"shareTextOnly",(function(){return Ht})),e.d(t,"shareTextAndImage",(function(){return Nt})),e.d(t,"shareScreenShot",(function(){return Kt})),e.d(t,"osShareFile",(function(){return Jt})),e.d(t,"faceDetect",(function(){return Wt})),e.d(t,"idCardDetect",(function(){return Ft})),e.d(t,"scanIdCard",(function(){return Ut})),e.d(t,"chooseIdCard",(function(){return $t})),e.d(t,"scanBankCard",(function(){return _t})),e.d(t,"jumpWXLaunchMiniProgram",(function(){return zt})),e.d(t,"getUpdateInfo",(function(){return Yt})),e.d(t,"isDebug",(function(){return Xt})),e.d(t,"getRequestHead",(function(){return Gt})),e.d(t,"getPushClientId",(function(){return Qt})),e.d(t,"desDecryptMessage",(function(){return Zt})),e.d(t,"requestMessageOrderByDate",(function(){return ne})),e.d(t,"getUMDeviceToken",(function(){return te})),e.d(t,"configVoiceKeywords",(function(){return ee})),e.d(t,"onReceiveVoiceInput",(function(){return re})),e.d(t,"voiceInput",(function(){return oe})),e.d(t,"startRecord",(function(){return ie})),e.d(t,"stopRecord",(function(){return ue})),e.d(t,"showOptionButton",(function(){return ce})),e.d(t,"showOptionMenu",(function(){return ae})),e.d(t,"hideOptionButton",(function(){return fe})),e.d(t,"setTitle",(function(){return de})),e.d(t,"onBackButtonAction",(function(){return se})),e.d(t,"offBackButtonAction",(function(){return le})),e.d(t,"hideBackButton",(function(){return pe})),e.d(t,"showBackButton",(function(){return ge})),e.d(t,"showTitleRightButton",(function(){return he})),e.d(t,"hideTitleRightButton",(function(){return ve})),e.d(t,"onTitleRightEventlistener",(function(){return ye})),e.d(t,"getNavigationBarHeight",(function(){return me})),e.d(t,"onMessageCenter",(function(){return be})),e.d(t,"onTitleSpeech",(function(){return we})),e.d(t,"onTitleSearch",(function(){return Se})),e.d(t,"alert",(function(){return Be})),e.d(t,"confirm",(function(){return Ae})),e.d(t,"notice",(function(){return ke})),e.d(t,"actionSheet",(function(){return Ie})),e.d(t,"tip",(function(){return Te})),e.d(t,"showLoading",(function(){return Ce})),e.d(t,"hideLoading",(function(){return De})),e.d(t,"downloadFile",(function(){return Pe})),e.d(t,"preview",(function(){return Re})),e.d(t,"download",(function(){return Le})),e.d(t,"getBannerInfo",(function(){return Oe})),e.d(t,"openBannerInfo",(function(){return xe})),e.d(t,"antiScreenShotOn",(function(){return Ee})),e.d(t,"antiScreenShotOff",(function(){return je})),e.d(t,"getDpfFingerPrint",(function(){return Ve})),e.d(t,"sendPayRequest",(function(){return Me})),e.d(t,"checkConnectBDKey",(function(){return qe})),e.d(t,"getBDKeyCertInfo",(function(){return He})),e.d(t,"changeBDKeyPassword",(function(){return Ne})),e.d(t,"signBDKeyData",(function(){return Ke})),e.d(t,"icVerify",(function(){return Je})),e.d(t,"icSetting",(function(){return We})),e.d(t,"openUKey",(function(){return Fe})),e.d(t,"checkUKey",(function(){return Ue})),e.d(t,"updateUKeyPIN",(function(){return $e})),e.d(t,"authUKey",(function(){return _e})),e.d(t,"setUKeyPIN",(function(){return ze})),e.d(t,"getAuthToken",(function(){return Ye})),e.d(t,"deviceSafeBind",(function(){return Xe})),e.d(t,"VERSION",(function(){return Ge})),e.d(t,"appInfo",(function(){return Qe})),e.d(t,"interceptors",(function(){return Ze})),e.d(t,"getDevice",(function(){return nr})),e.d(t,"bkId",(function(){return tr})),e.d(t,"utils",(function(){return er}));var r={};e.r(r),e.d(r,"isAndroid",(function(){return a})),e.d(r,"isIOS",(function(){return f})),e.d(r,"isWeChat",(function(){return d})),e.d(r,"isInApp",(function(){return s})),e.d(r,"isFunction",(function(){return l})),e.d(r,"isString",(function(){return p})),e.d(r,"isArray",(function(){return g})),e.d(r,"isBoolean",(function(){return h})),e.d(r,"isObject",(function(){return v})),e.d(r,"isNaN",(function(){return y})),e.d(r,"isNumber",(function(){return m})),e.d(r,"isUndefined",(function(){return b})),e.d(r,"isEmptyObject",(function(){return w})),e.d(r,"extend",(function(){return S})),e.d(r,"compareVersion",(function(){return B})),e.d(r,"compareSdkVersion",(function(){return A})),e.d(r,"sdkVerAsLastWith",(function(){return k})),e.d(r,"parseURL",(function(){return I})),e.d(r,"queryStringify",(function(){return T})),e.d(r,"buildUrl",(function(){return C}));var o=e(2),i=e(1),u=e(0),c={engine:function(){var n=i.a.userAgent;return new RegExp("@"+u.l+"#").test(n)?u.l:new RegExp("@"+u.g+"#").test(n)?u.g:new RegExp("@"+u.e+"#").test(n)?u.e:u.d},engineVer:function(){var n=i.a.userAgent.match(/@sdkVer\([\d\.]+\)#/i);return n&&n.length?n[0].replace(/@sdkVer\(([\d\.]+)\)#/i,"$1"):""},osVersion:function(){var n=i.a.userAgent.match(/@osVer\([\d\.]+\)#/i);return n&&n.length?n[0].replace(/@osVer\(([\d\.]+)\)#/i,"$1"):""},bkId:function(){var n=i.a.userAgent.match(/@sccba\d{3}#/i)||[],t=n.length?n[0].replace(/@sccba(\d{3})#/i,"$1"):"";return i.a.global.bkId=t,t},modeType:function(){var n=i.a.userAgent.match(/@modeType\(\w+\)#/i)||[];if(n.length)return n[0].replace(/@modeType\((\w+)\)#/i,"$1")},appVersion:function(){var n=i.a.userAgent.match(/@appVer(?:sion)?\([\d\.]+\)#/i);return n&&n.length?n[0].replace(/@appVer(?:sion)?\(([\d\.]+)\)#/i,"$1"):""}},a=function(){return/android/i.test(i.a.userAgent)},f=function(){return/iphone|ipad/i.test(i.a.userAgent)},d=function(){return/MicroMessenger/i.test(i.a.userAgent)},s=function(){return/@sdkVer/i.test(i.a.userAgent)},l=function(n){return u.i===Object(o.c)(n)},p=function(n){return u.o===Object(o.c)(n)},g=function(n){return u.b===Object(o.c)(n)},h=function(n){return u.c===Object(o.c)(n)},v=function(n){return u.n===Object(o.c)(n)},y=function n(t){return n(t)},m=function(n){return u.m===Object(o.c)(n)},b=function(n){return void 0===n},w=function(n){for(var t in n)return!1;return!0};function S(n){var t=void 0,e=void 0;if(!v(n))return n;for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];for(var u=0,c=o.length;u<c;u++)for(e in t=o[u])Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n}function B(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=/^\d+(\.\d+){0,2}$/;if(!e.test(n))return 0;if(!e.test(t))return 0;for(var r,o,i=n.split("."),u=t.split("."),c=0;c<i.length;c++){if((r=parseInt(i[c],10)||0)<(o=parseInt(u[c],10)||0))return-1;if(r>o)return 1}return 0}function A(n){return B(c.engineVer,n)}function k(n){return B(c.engineVer,n)>=0}var I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href,t=document.createElement("a");return t.href=n,{source:n,protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,query:t.search,param:function(){for(var n={},e={true:!0,false:!1},r=t.search.replace(/^\?/,"").split("&"),o=r.length,i=0;i<o;i++)if(r[i]){var u=r[i].split("=");u[1]=decodeURIComponent(u[1]),u[1]=b(e[u[1]])?u[1]:e[u[1]],n[u[0]]=u[1]}return n}(),file:(t.pathname.match(/\/([^\/?#]+)$/i)||[,""])[1],hash:t.hash.replace("#",""),path:t.pathname.replace(/^([^\/])/,"/$1"),relative:(t.href.match(/tps?:\/\/[^\/]+(.+)/)||[,""])[1],segments:t.pathname.replace(/^\//,"").split("/")}},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[];for(var e in n){var r=n[e];t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}return t.join("&")},C=function(n,t){var e=t,r=n.split("#");v(t)&&(e=T(t)),/\?/.test(n)?/&$/.test(n)||/\?$/.test(n)||(e="&"+e):e="?"+e;var o=n+e;if(2===r.length){var i=r[0].split("?");2===i.length&&(e="?"+i[1]+e),o=r[0]+e+"#"+r[1]}return o},D={before:function(n){l(n)&&(this.beforeCallback=n)},after:function(n,t){l(n)&&(this.afterSuccess=n),l(t)&&(this.afterFail=t)}};function P(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var R=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};N((function(){if(!s()||i.a.global.device)return l(n[u.q])&&n[u.q].call(null,i.a.device),void(l(i.a.global.readyCallback)&&i.a.global.readyCallback.call(null,i.a.device));var t={hostname:""};-1!==location.href.indexOf("file://")&&(t.hostname=u.f);var e=S(t,Object(o.b)(n));e.success=function(t){i.a.setDevice(t),l(n[u.q])&&n[u.q].call(null,t)},e.fail=function(t){V("config with error => "+JSON.stringify(t)),i.a.setDevice({}),l(n[u.h])&&n[u.h].call(null,t)},setTimeout((function(){x("config",e)}),0),i.a.global.st=setInterval((function(){i.a.global.device?clearInterval(i.a.global.st):(V("set config timeout..."),x("config",e))}),800)}))},L=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};i.a.global.readyCallback=n,E("onReady",(function(t){i.a.setDevice(t),n.call(null,t)}))},O=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};E("onError",(function(){n.call(null)}))};function x(n,t){return new H(n,t).callHandler()}function E(n,t){N((function(){var e=i.a.global.eventEntry||{};return e[n]=t,i.a.global[u.j]?i.a.global[u.j].registerHandler(n,(function(t,r){var o=e[n];l(o)&&o.call(null,t,r)})):(V("js bridge 未初始化，无法注册监听"),t&&t())}))}var j=function(n){var t=i.a.global.eventEntry||{};t[n]&&delete t[n]},V=function(n){var t=void 0;t=p(n)?{message:n}:v(n)?n:{},window[u.j]?new H("log",t).callHandler():console.log("[JS-BRIDGE]: "+t.message)},M=function(n){x("checkJsApi",n)},q=N,H=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};P(this,n),this.method=t,this.param=e}return n.prototype.callHandler=function(){var n=this;!function(){var n=[].slice.call(arguments);if(window[u.j]&&window[u.j].callHandler){var t=n[0],e=n[1]||{},r=n[2];if(!p(t))return void V({message:"Api Name error：",name:t});if(void 0===r&&l(e)&&(r=e,e={}),!v(e))return void V({message:t+": options is not object"});var o=r;r=function(n){o&&o(n)},window[u.j].callHandler(t,e,r)}else console.warn("js bridge not ready, call later")}(this.method,Object(o.b)(this.param),(function(t){if(v(t)){if(t[u.q]&&l(n.param[u.q]))return n.param[u.q](t[u.q]);if(v(t[u.h])&&l(n.param[u.h]))return n.param[u.h](t[u.h])}}))},n}();function N(n){if(s()){if(window[u.j])return n(window[u.j]);if(window.WVJBCallbacks)return window.WVJBCallbacks.push(n);window.WVJBCallbacks=[n];var t=document.createElement("iframe");t.style.display="none",t.src=f()?"https://__bridge_loaded__":"wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(t),setTimeout((function(){document.documentElement.removeChild(t)}),0)}else{if(document.isLoaded)return n&&n({});document.addEventListener("DOMContentLoaded",(function(){document.isLoaded=!0,n&&n({})}),!1)}}var K=function(n){var t=function(n){if(D.beforeCallback)return D.beforeCallback(n)||{};return n}(n);s()?Y(t):function(n){!function(n){(n=n||{}).method="POST",n.url=n.url||"",n.async=n.async||!0,n.data=n.data||null,n.success=n.success||function(){},n.fail=n.fail||function(){};var t=null;t=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var e=[];for(var r in n.data)e.push(r+"="+n.data[r]);var o=e.join("&");"POST"===n.method.toUpperCase()?(t.open(n.method,n.url,n.async),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),t.send(o)):"GET"===n.method.toUpperCase()&&(t.open(n.method,n.url+"?"+o,n.async),t.send(null));t.onreadystatechange=function(){if(4===t.readyState){if(200===t.status)return n.success(t.responseText);n.fail({rspHead:{rspCd:t.status,msg:t.statusText},rspData:{}})}}}({url:n.url,data:{jsonData:JSON.stringify(n.data)},success:function(t){var e=void 0;try{e=JSON.parse(t)}catch(n){e={}}"S000A000"===e.rspHead.rspCd?_(e,(function(){return n.success&&n.success(e)})):z(e,(function(){var t=e.rspHead.rspCd+":"+e.rspHead.msg;return n.fail&&n.fail(t,e)}))},fail:function(t){z(t,(function(){var e=t.rspHead.rspCd+":"+t.rspHead.msg;return n.fail&&n.fail(e,t)}))}})}(t)},J=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments[4],i=arguments[5],u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};K({url:n,data:{reqHead:{opId:t,transId:e},reqData:r},success:o,fail:i,setting:u})},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],o=arguments[4];J(n,t,e,{},(function(n){i.a.global.submitKey=n.rspData[u.p],r&&r()}),o,{loadingViewFullScreenFlag:!0})},F=function(n){Y(n,"uploadImage")},U=function(n,t){x("encryptRequestJson",{data:n,success:t})},$=function(n,t){x("encryptAESJson",{data:n,success:t})};function _(n,t){if(D.afterSuccess&&D.afterSuccess(n))return t&&t();return t&&t()}function z(n,t){if(D.afterFail&&D.afterFail(n))return t&&t();return t&&t()}function Y(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"request";if(p(n.url)&&!/^(http|https):\/\/.+/g.test(n.url)){var e=i.a.global.device.baseUrl||"";e=e.replace(/\/$/,"")+"/",n.url=e+n.url}var r={showLoadingViewFlag:!0,loadingViewFullScreenFlag:!1},o=n.data;o.reqHead.submitKey=i.a.global.submitKey||"",x(t,{url:n.url,setting:S(r,n.setting),data:o,success:function(t){t&&t.rspHead?"S000A000"===t.rspHead.rspCd?_(t,(function(){return n.success&&n.success(t)})):z(t,(function(){var e=t.rspHead.rspCd+":"+t.rspHead.msg;return n.fail&&n.fail(e,t)})):V("网络请求参数错误，response = "+JSON.stringify(t))},fail:function(t){z(t,(function(){var e="";return t&&t.rspHead&&(e=t.rspHead.rspCd+":"+t.rspHead.msg),n.fail&&n.fail(e,t)}))}})}var X=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(n.data)?x("setSessionData",n):V("getSessionData 参数 data 为空")},G=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(n.keyArray)?x("getSessionData",n):V("getSessionData 参数 keyArray 不是数组，或数组为空！")},Q=function(n){var t=[];p(n)?t.put(n):g(n)?t=n:v(n)?g(n.keyArray)&&n.keyArray.length?t=n.keyArray:V("clearSessionData 参数 keyArray 不是数组，或数组为空！"):V("clearSessionData 参数传入有误！"),x("clearSessionData",{keyArray:t})},Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(n.data)?x("saveLocalData",n):V("saveLocalData 参数 data 为空")},nn=function(n){g(n.keyArray)&&n.keyArray.length?x("getLocalData",n):V("getLocalData 参数 keyArray 不是数组，或数组为空！")},tn=function(n){var t=[];p(n)?t.put(n):g(n)?t=n:v(n)?g(n.keyArray)&&n.keyArray.length?t=n.keyArray:V("clearLocalData 参数 keyArray 不是数组，或数组为空！"):V("clearLocalData 参数传入有误！"),x("clearLocalData",{keyArray:t})},en=function(n){if(!v(n.data))return V("setHubData data参数不符合要求！"),!1;for(var t in n.data)Object.prototype.hasOwnProperty.call(n.data,t)&&((-1!==t.indexOf("@string")||-1!==t.indexOf("@array")||-1!==t.indexOf("@map"))&&(-1===t.indexOf("@string")||p(n.data[t]))&&(-1===t.indexOf("@array")||g(n.data[t]))&&(-1===t.indexOf("@map")||v(n.data[t]))||delete n.data[t]);x("setHubData",n)},rn=function(n){g(n.keyArray)&&n.keyArray.length?x("getHubData",n):V("getHubData 参数 keyArray 不是数组，或数组为空！")},on=function(n){rn({keyArray:["synchronizeIds#array"],success:function(t){en({data:{"synchronizeIds#array":[]}}),n(t)}})},un=function(n){h(n.isRandom)||(n.isRandom=!0);if(!S({title:"请输入交易密码",titleColor:"#000000",isRandom:!0,html:""},n).html){var t="",e="";n.contentTitle&&(t="<div style='display: inline;font-size: 18px;height: 25px;line-height: 25px;color: #666'>"+n.contentTitle+"</div>"),n.contentSubTitle&&(e="<br><span style='font-size: 16px;color: #666'>"+n.contentSubTitle.replace(/@start/g,"<span style='color: #333;font-size: 24px'>").replace(/@end/g,"</span>")+"</span>"),n.html=t+e}n.html&&(n.html="<!DOCTYPE html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1'></head><body style='text-align:center;'>@body</body></html>".replace("@body",n.html)),x("showTradeKeyboard",n)},cn=function(n){x("showLoginKeyboard",n)},an=function(n){x("showRateKeyboard",n)},fn=function(n){x("showSignPad",n)},dn=function(n){x("getLoginPassword",S({regex:u.k},n))},sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x("clearLoginPassword",n)},ln=function(n){x("getLoginPasswordSafeLevel",S({regex:u.k},n))},pn=function(n){x("compareLoginPassword",n)},gn=function(n){p(n.sourceType)||(n.sourceType=u.a),p(n.compressLevel)||(n.compressLevel="M"),x("chooseImage",n)},hn=function(n){x("downloadUserAvatar",n)},vn=function(n){x("savePicture",n)},yn=function(n){x("readText",n)},mn=function(n){x("getSuitableState",n)},bn=function(n){x("setSuitableState",n)},wn=function(n){n.rate=n.rate?n.rate:0,x("playSuitableVoiceWithText",n)},Sn=function(n){x("stopPlaySuitableVoice",n)},Bn=function(n){n.rate=n.rate||0,x("setSuitableRate",n)},An=function(n){x("requestPermission",n)},kn=function(n){x("getAllMenuList",n)},In=function(n){x("getMainMenuList",n)},Tn=function(n){x("checkMenu",n)},Cn=function(n){return n.id?n.page?void x("goMenu",n):V("goMenu parameter page is required."):V("goMenu parameter id is required.")},Dn=function(n){x("checkBundle",n)},Pn=function(n){x("getMenuIcon",n)},Rn=function(n){x("getAllMenuIcon",n)},Ln=function(n){x("getStepCountWithTime",n)},On=function(n){x("addSystemCalendarEvent",n)},xn=function(n){x("deleteSystemCalendarEvent",n)},En=function(n){x("showNavigationBarRightImageButton",n)},jn=function(n){x("onRightImageButtonEventListener",n)},Vn=function(n){x("hideNavigationBarRightImageButton",n)},Mn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s())x("getLocation",n);else if(navigator.geolocation){var t=function(t){n[u.q]&&n[u.q]({longitude:t.coords.longitude,latitude:t.coords.latitude})},e=function(t){n[u.h]&&n[u.h]({errorCode:t.code,message:t.message})};navigator.geolocation.getCurrentPosition(t,e,{enableHighAccuracy:!1,timeout:1e4,maximumAge:1e4})}},qn=function(n){n.dateType=!n.dateType||"YESTERDAY"!==n.dateType&&"NOW"!==n.dateType?"NOW":n.dateType,x("getStepCount",n)},Hn=function(n,t){var e={dateType:"YESTERDAY"};e.success=n,e.fail=t,qn(e)},Nn=function(n,t){var e={dateType:"NOW"};e.success=n,e.fail=t,qn(e)},Kn=function(n){x("openURL",n)},Jn=function(n,t,e){-1===n.indexOf("openapp=")&&(n="openapp="+n),Kn({url:n,success:t,fail:e})},Wn=function(n){x("copyText",n)},Fn=function(n){x("openMapAppNavigation",n)},Un=function(n){x("choosePhoneContacts",n)},$n=function(n){x("platformVerify",n)},_n=function(n){x("getNetworkType",n)},zn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={startPosY:0},e={};w(n)||(e=S(t,n)),x("screenShots",e)},Yn=function(n){x("antiScreenShot",n)},Xn=function(n){x("clearScreenShot",n)},Gn=function(n){x("setScreenBrightness",n)},Qn=function(n){x("clearScreenBrightness",n)},Zn=function(n){x("getNetInfo",n)},nt=function(n){x("getDeviceInfo",n)},tt=function(n){x("scanQRCode",n)},et=function(n){x("openESSC",n)},rt=function(n){x("closeESSC",n)},ot=function(n){x("onScanQRCode",n)},it=function(n){x("messageJson",n)},ut=function(n){x("isLogin",n)},ct=function(n){x("login",n)},at=function(n){x("logout",n)},ft=function(n){x("setAlive",n)},dt=function(n){x("getJWToken",n)},st=function(n){x("getNoStateJWToken",n)},lt=function(n){x("getAccessCode",n)},pt=function(n){x("getTrustFortDeviceInfo",n)},gt=function(n){if(n.url&&p(n.url)){n.param=S({isFullScreen:!0,animationType:"push",pullRefresh:!1},n.param),v(n.data)&&(n.url=C(n.url,n.data),delete n.data),x("pushWindow",n)}else V("sccbaJsAPI:pushWindow url is required")},ht=function(n){x("popWindow",n)},vt=function(n){var t={};if(m(n.index)&&n.index<0)t.index=n.index;else{if(!p(n.urlPattern))return void V("[error]: 方法 popTo 参数 index 、 urlPattern 传入有误！");t.urlPattern=n.urlPattern}v(n.data)||(t.data={}),t.fail=n.fail,x("popTo",t)},yt=function(n){n.url&&p(n.url)?(-1!==n.url.indexOf("?")&&V("[warring]：redirectTo 如果要通过url传参数请使用data"),v(n.data)&&(n.url=C(n.url,n.data),delete n.data),x("redirectTo",n)):V("[error]: method redirectTo url is required!")},mt=function(n){p(n.url)?x("openInBrowser",n):V("[error]: method openInBrowser url is required!")},bt=function(n){n.url&&delete n.callback,n.callback&&delete n.url,n.url||n.callback?x("openPullRefresh",n):V("[error]: method openPullRefresh option url or callback is required!")},wt=function(n){E("onPageRefresh",n)},St=function(n){n.animateType||(n.animateType="none"),x("openInAppBrowser",n)},Bt=function(n){E("onInAppBrowserLoadStart",n)},At=function(n){E("onInAppBrowserLoadStop",n)},kt=function(n){E("onInAppBrowserLoadError",n)},It=function(n){E("onInAppBrowserExit",n)},Tt=function(){x("closePullRefresh",{})},Ct=function(n){E("onResume",n)},Dt=function(n){E("onPause",n)},Pt=function(n){E("onPageResume",n)},Rt=function(n){E("onPagePause",n)},Lt=function(n){x("addBackEventListener",{}),E("onBackEventListener",n)},Ot=function(){x("removeBackEventListener"),j("onBackEventListener")},xt=function(n){x("thirdPartCallback",n)},Et=function(n){x("thirdAppGoCordovaPage",n)},jt=function(n){x("openBCEWallet",n)},Vt=function(n){x("openVideoBank",n)},Mt=function(n){x("shareWeChatFriend",n)},qt=function(n){x("share",n)},Ht=function(n){n.type="text",qt(n)},Nt=function(n){n.type="image",qt(n)},Kt=function(n){n.type="text+image",qt(n)},Jt=function(n){x("osShareFile",n)},Wt=function(n){x("faceDetect",n)},Ft=function(n){x("idCardDetect",n)},Ut=function(n){x("scanIdCard",S({count:"10"},n))},$t=function(n){x("chooseIdCard",S({count:"10"},n))},_t=function(n){x("scanBankCard",n)},zt=function(n){x("jumpWXLaunchMiniProgram",n)},Yt=function(n){x("getUpdateInfo",n)},Xt=function(n){x("isDebug",n)},Gt=function(n){x("getRequestHead",n)},Qt=function(n){x("getPushClientId",n)},Zt=function(n){x("desDecryptMessage",n)},ne=function(n){x("requestMessageOrderByDate",S({pageCount:10},n))},te=function(n){x("getUMDeviceToken",n)},ee=function(n){x("configVoiceKeywords",n)},re=function(n){E("onReceiveVoiceInput",n)},oe=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!isNaN(parseInt(n.timeout))&&n.timeout>0||(n.timeout=3e4),x("voiceInput",n)},ie=function(n,t,e){"function"==typeof n&&(e=t,t=n,n="60"),x("startRecord",{duration:n,success:t,fail:e})},ue=function(n,t){x("stopRecord",{success:n,fail:t})},ce=function(n){x("showOptionButton",n)},ae=function(n){x("showOptionMenu",n)},fe=function(n){x("hideOptionButton",n)},de=function(n){x("setTitle",n)},se=function(n){E("onBackButtonAction",n.success),x("onBackButtonAction",{})},le=function(n){j("offBackButtonAction"),x("offBackButtonAction",n)},pe=function(n){x("hideBackButton",n)},ge=function(n){x("showBackButton",n)},he=function(n){x("showTitleRightButton",n)},ve=function(n){x("hideTitleRightButton",n)},ye=function(n){E("onTitleRightEventlistener",n)},me=function(n){x("getNavigationBarHeight",n)},be=function(n){x("onMessageCenter",n)},we=function(n){x("onTitleSpeech",n)},Se=function(n){x("onTitleSearch",n)},Be=function(n){x("alert",S({title:"温馨提示",alignment:"left",cancelButtonTitle:"确认",otherButtonTitles:[]},n))},Ae=function(n){x("confirm",S({title:"温馨提示",buttonArray:["取消","确认"]},n))},ke=function(n){x("notice",n)},Ie=function(n){x("actionSheet",n)},Te=function(n){x("tip",S({duration:3e3,bgColor:"#333333",bgAlpha:.8,fontColor:"#FFFFFF"},n))},Ce=function(n){x("showLoading",n)},De=function(n){x("hideLoading",n)},Pe=function(n){x("downloadFile",S({checkflag:"1"},n))},Re=function(n){x("preview",n)},Le=function(n){x("download",n)},Oe=function(n){x("getBannerInfo",n)},xe=function(n){x("openBannerInfo",n)},Ee=function(){x("antiScreenShotOn")},je=function(){x("antiScreenShotOff")},Ve=function(n){x("getDpfFingerPrint",n)},Me=function(n){x("sendPayRequest",n)},qe=function(n){x("checkConnectBDKey",n)},He=function(n){x("getBDKeyCertInfo",n)},Ne=function(n){x("changeBDKeyPassword",n)},Ke=function(n){x("signBDKeyData",n)},Je=function(n){x("icVerify",n)},We=function(n){x("icSetting",n)},Fe=function(n){x("openUKey",n)},Ue=function(n){x("checkUKey",n)},$e=function(n){x("updateUKeyPIN",n)},_e=function(n){x("authUKey",n)},ze=function(n){x("setUKeyPIN",n)},Ye=function(n){x("getAuthToken",n)},Xe=function(n){x("deviceSafeBind",n)},Ge=e(3).a,Qe={engine:c.engine(),engineVer:c.engineVer(),bkId:c.bkId(),osVersion:c.osVersion(),modeType:c.modeType(),appVersion:c.appVersion()},Ze={request:D},nr=i.a.getDevice,tr=Qe.bkId,er=r}])}));
