(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function BS(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qm={exports:{}},lu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mx;function TA(){if(mx)return lu;mx=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:e,type:r,key:u,ref:o!==void 0?o:null,props:l}}return lu.Fragment=t,lu.jsx=n,lu.jsxs=n,lu}var gx;function AA(){return gx||(gx=1,qm.exports=TA()),qm.exports}var Si=AA(),Ym={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function wA(){if(_x)return me;_x=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(I,it,mt){this.props=I,this.context=it,this.refs=M,this.updater=mt||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,it){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,it,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=x.prototype;function U(I,it,mt){this.props=I,this.context=it,this.refs=M,this.updater=mt||b}var C=U.prototype=new L;C.constructor=U,R(C,x.prototype),C.isPureReactComponent=!0;var P=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function T(I,it,mt){var Et=mt.ref;return{$$typeof:e,type:I,key:it,ref:Et!==void 0?Et:null,props:mt}}function D(I,it){return T(I.type,it,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function j(I){var it={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(mt){return it[mt]})}var Q=/\/+/g;function ct(I,it){return typeof I=="object"&&I!==null&&I.key!=null?j(""+I.key):it.toString(36)}function st(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(F,F):(I.status="pending",I.then(function(it){I.status==="pending"&&(I.status="fulfilled",I.value=it)},function(it){I.status==="pending"&&(I.status="rejected",I.reason=it)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function B(I,it,mt,Et,It){var nt=typeof I;(nt==="undefined"||nt==="boolean")&&(I=null);var ut=!1;if(I===null)ut=!0;else switch(nt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(I.$$typeof){case e:case t:ut=!0;break;case g:return ut=I._init,B(ut(I._payload),it,mt,Et,It)}}if(ut)return It=It(I),ut=Et===""?"."+ct(I,0):Et,P(It)?(mt="",ut!=null&&(mt=ut.replace(Q,"$&/")+"/"),B(It,it,mt,"",function(zt){return zt})):It!=null&&(H(It)&&(It=D(It,mt+(It.key==null||I&&I.key===It.key?"":(""+It.key).replace(Q,"$&/")+"/")+ut)),it.push(It)),1;ut=0;var wt=Et===""?".":Et+":";if(P(I))for(var Vt=0;Vt<I.length;Vt++)Et=I[Vt],nt=wt+ct(Et,Vt),ut+=B(Et,it,mt,nt,It);else if(Vt=S(I),typeof Vt=="function")for(I=Vt.call(I),Vt=0;!(Et=I.next()).done;)Et=Et.value,nt=wt+ct(Et,Vt++),ut+=B(Et,it,mt,nt,It);else if(nt==="object"){if(typeof I.then=="function")return B(st(I),it,mt,Et,It);throw it=String(I),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ut}function z(I,it,mt){if(I==null)return I;var Et=[],It=0;return B(I,Et,"","",function(nt){return it.call(mt,nt,It++)}),Et}function tt(I){if(I._status===-1){var it=I._result;it=it(),it.then(function(mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=mt)},function(mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=mt)}),I._status===-1&&(I._status=0,I._result=it)}if(I._status===1)return I._result.default;throw I._result}var xt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},yt={map:z,forEach:function(I,it,mt){z(I,function(){it.apply(this,arguments)},mt)},count:function(I){var it=0;return z(I,function(){it++}),it},toArray:function(I){return z(I,function(it){return it})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return me.Activity=_,me.Children=yt,me.Component=x,me.Fragment=n,me.Profiler=o,me.PureComponent=U,me.StrictMode=r,me.Suspense=p,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,me.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},me.cache=function(I){return function(){return I.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(I,it,mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Et=R({},I.props),It=I.key;if(it!=null)for(nt in it.key!==void 0&&(It=""+it.key),it)!k.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(Et[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)Et.children=mt;else if(1<nt){for(var ut=Array(nt),wt=0;wt<nt;wt++)ut[wt]=arguments[wt+2];Et.children=ut}return T(I.type,It,Et)},me.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},me.createElement=function(I,it,mt){var Et,It={},nt=null;if(it!=null)for(Et in it.key!==void 0&&(nt=""+it.key),it)k.call(it,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(It[Et]=it[Et]);var ut=arguments.length-2;if(ut===1)It.children=mt;else if(1<ut){for(var wt=Array(ut),Vt=0;Vt<ut;Vt++)wt[Vt]=arguments[Vt+2];It.children=wt}if(I&&I.defaultProps)for(Et in ut=I.defaultProps,ut)It[Et]===void 0&&(It[Et]=ut[Et]);return T(I,nt,It)},me.createRef=function(){return{current:null}},me.forwardRef=function(I){return{$$typeof:f,render:I}},me.isValidElement=H,me.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:tt}},me.memo=function(I,it){return{$$typeof:m,type:I,compare:it===void 0?null:it}},me.startTransition=function(I){var it=O.T,mt={};O.T=mt;try{var Et=I(),It=O.S;It!==null&&It(mt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(F,xt)}catch(nt){xt(nt)}finally{it!==null&&mt.types!==null&&(it.types=mt.types),O.T=it}},me.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},me.use=function(I){return O.H.use(I)},me.useActionState=function(I,it,mt){return O.H.useActionState(I,it,mt)},me.useCallback=function(I,it){return O.H.useCallback(I,it)},me.useContext=function(I){return O.H.useContext(I)},me.useDebugValue=function(){},me.useDeferredValue=function(I,it){return O.H.useDeferredValue(I,it)},me.useEffect=function(I,it){return O.H.useEffect(I,it)},me.useEffectEvent=function(I){return O.H.useEffectEvent(I)},me.useId=function(){return O.H.useId()},me.useImperativeHandle=function(I,it,mt){return O.H.useImperativeHandle(I,it,mt)},me.useInsertionEffect=function(I,it){return O.H.useInsertionEffect(I,it)},me.useLayoutEffect=function(I,it){return O.H.useLayoutEffect(I,it)},me.useMemo=function(I,it){return O.H.useMemo(I,it)},me.useOptimistic=function(I,it){return O.H.useOptimistic(I,it)},me.useReducer=function(I,it,mt){return O.H.useReducer(I,it,mt)},me.useRef=function(I){return O.H.useRef(I)},me.useState=function(I){return O.H.useState(I)},me.useSyncExternalStore=function(I,it,mt){return O.H.useSyncExternalStore(I,it,mt)},me.useTransition=function(){return O.H.useTransition()},me.version="19.2.1",me}var vx;function f1(){return vx||(vx=1,Ym.exports=wA()),Ym.exports}var sn=f1();const RA=BS(sn);var jm={exports:{}},cu={},Zm={exports:{}},Km={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xx;function CA(){return xx||(xx=1,(function(e){function t(B,z){var tt=B.length;B.push(z);t:for(;0<tt;){var xt=tt-1>>>1,yt=B[xt];if(0<o(yt,z))B[xt]=z,B[tt]=yt,tt=xt;else break t}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var z=B[0],tt=B.pop();if(tt!==z){B[0]=tt;t:for(var xt=0,yt=B.length,I=yt>>>1;xt<I;){var it=2*(xt+1)-1,mt=B[it],Et=it+1,It=B[Et];if(0>o(mt,tt))Et<yt&&0>o(It,mt)?(B[xt]=It,B[Et]=tt,xt=Et):(B[xt]=mt,B[it]=tt,xt=it);else if(Et<yt&&0>o(It,tt))B[xt]=It,B[Et]=tt,xt=Et;else break t}}return z}function o(B,z){var tt=B.sortIndex-z.sortIndex;return tt!==0?tt:B.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],m=[],g=1,_=null,v=3,S=!1,b=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var z=n(m);z!==null;){if(z.callback===null)r(m);else if(z.startTime<=B)r(m),z.sortIndex=z.expirationTime,t(p,z);else break;z=n(m)}}function P(B){if(R=!1,C(B),!b)if(n(p)!==null)b=!0,F||(F=!0,j());else{var z=n(m);z!==null&&st(P,z.startTime-B)}}var F=!1,O=-1,k=5,T=-1;function D(){return M?!0:!(e.unstable_now()-T<k)}function H(){if(M=!1,F){var B=e.unstable_now();T=B;var z=!0;try{t:{b=!1,R&&(R=!1,L(O),O=-1),S=!0;var tt=v;try{e:{for(C(B),_=n(p);_!==null&&!(_.expirationTime>B&&D());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,v=_.priorityLevel;var yt=xt(_.expirationTime<=B);if(B=e.unstable_now(),typeof yt=="function"){_.callback=yt,C(B),z=!0;break e}_===n(p)&&r(p),C(B)}else r(p);_=n(p)}if(_!==null)z=!0;else{var I=n(m);I!==null&&st(P,I.startTime-B),z=!1}}break t}finally{_=null,v=tt,S=!1}z=void 0}}finally{z?j():F=!1}}}var j;if(typeof U=="function")j=function(){U(H)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ct=Q.port2;Q.port1.onmessage=H,j=function(){ct.postMessage(null)}}else j=function(){x(H,0)};function st(B,z){O=x(function(){B(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_next=function(B){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var tt=v;v=z;try{return B()}finally{v=tt}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var tt=v;v=B;try{return z()}finally{v=tt}},e.unstable_scheduleCallback=function(B,z,tt){var xt=e.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?xt+tt:xt):tt=xt,B){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=tt+yt,B={id:g++,callback:z,priorityLevel:B,startTime:tt,expirationTime:yt,sortIndex:-1},tt>xt?(B.sortIndex=tt,t(m,B),n(p)===null&&B===n(m)&&(R?(L(O),O=-1):R=!0,st(P,tt-xt))):(B.sortIndex=yt,t(p,B),b||S||(b=!0,F||(F=!0,j()))),B},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(B){var z=v;return function(){var tt=v;v=z;try{return B.apply(this,arguments)}finally{v=tt}}}})(Km)),Km}var yx;function DA(){return yx||(yx=1,Zm.exports=CA()),Zm.exports}var Qm={exports:{}},hi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sx;function UA(){if(Sx)return hi;Sx=1;var e=f1();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return hi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,hi.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return l(p,m,null,g)},hi.flushSync=function(p){var m=u.T,g=r.p;try{if(u.T=null,r.p=2,p)return p()}finally{u.T=m,r.p=g,r.d.f()}},hi.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},hi.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},hi.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=f(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},hi.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=f(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},hi.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=f(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},hi.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=f(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},hi.requestFormReset=function(p){r.d.r(p)},hi.unstable_batchedUpdates=function(p,m){return p(m)},hi.useFormState=function(p,m,g){return u.H.useFormState(p,m,g)},hi.useFormStatus=function(){return u.H.useHostTransitionStatus()},hi.version="19.2.1",hi}var Mx;function LA(){if(Mx)return Qm.exports;Mx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Qm.exports=UA(),Qm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function NA(){if(Ex)return cu;Ex=1;var e=DA(),t=f1(),n=LA();function r(i){var a="https://react.dev/errors/"+i;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+i+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var a=i,s=i;if(i.alternate)for(;a.return;)a=a.return;else{i=a;do a=i,(a.flags&4098)!==0&&(s=a.return),i=a.return;while(i)}return a.tag===3?s:null}function u(i){if(i.tag===13){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function f(i){if(i.tag===31){var a=i.memoizedState;if(a===null&&(i=i.alternate,i!==null&&(a=i.memoizedState)),a!==null)return a.dehydrated}return null}function p(i){if(l(i)!==i)throw Error(r(188))}function m(i){var a=i.alternate;if(!a){if(a=l(i),a===null)throw Error(r(188));return a!==i?null:i}for(var s=i,c=a;;){var h=s.return;if(h===null)break;var d=h.alternate;if(d===null){if(c=h.return,c!==null){s=c;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===s)return p(h),i;if(d===c)return p(h),a;d=d.sibling}throw Error(r(188))}if(s.return!==c.return)s=h,c=d;else{for(var y=!1,A=h.child;A;){if(A===s){y=!0,s=h,c=d;break}if(A===c){y=!0,c=h,s=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===s){y=!0,s=d,c=h;break}if(A===c){y=!0,c=d,s=h;break}A=A.sibling}if(!y)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?i:a}function g(i){var a=i.tag;if(a===5||a===26||a===27||a===6)return i;for(i=i.child;i!==null;){if(a=g(i),a!==null)return a;i=i.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var Q=Symbol.for("react.client.reference");function ct(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===Q?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case T:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case b:return"Portal";case U:return i.displayName||"Context";case L:return(i._context.displayName||"Context")+".Consumer";case C:var a=i.render;return i=i.displayName,i||(i=a.displayName||a.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case O:return a=i.displayName||null,a!==null?a:ct(i.type)||"Memo";case k:a=i._payload,i=i._init;try{return ct(i(a))}catch{}}return null}var st=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},xt=[],yt=-1;function I(i){return{current:i}}function it(i){0>yt||(i.current=xt[yt],xt[yt]=null,yt--)}function mt(i,a){yt++,xt[yt]=i.current,i.current=a}var Et=I(null),It=I(null),nt=I(null),ut=I(null);function wt(i,a){switch(mt(nt,a),mt(It,i),mt(Et,null),a.nodeType){case 9:case 11:i=(i=a.documentElement)&&(i=i.namespaceURI)?B3(i):0;break;default:if(i=a.tagName,a=a.namespaceURI)a=B3(a),i=z3(a,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}it(Et),mt(Et,i)}function Vt(){it(Et),it(It),it(nt)}function zt(i){i.memoizedState!==null&&mt(ut,i);var a=Et.current,s=z3(a,i.type);a!==s&&(mt(It,i),mt(Et,s))}function Se(i){It.current===i&&(it(Et),it(It)),ut.current===i&&(it(ut),au._currentValue=tt)}var mn,Ee;function qt(i){if(mn===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);mn=a&&a[1]||"",Ee=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mn+i+Ee}var se=!1;function te(i,a){if(!i||se)return"";se=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var rt=lt}Reflect.construct(i,[],gt)}else{try{gt.call()}catch(lt){rt=lt}i.call(gt.prototype)}}else{try{throw Error()}catch(lt){rt=lt}(gt=i())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&rt&&typeof lt.stack=="string")return[lt.stack,rt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=c.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var G=y.split(`
`),et=A.split(`
`);for(h=c=0;c<G.length&&!G[c].includes("DetermineComponentFrameRoot");)c++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(c===G.length||h===et.length)for(c=G.length-1,h=et.length-1;1<=c&&0<=h&&G[c]!==et[h];)h--;for(;1<=c&&0<=h;c--,h--)if(G[c]!==et[h]){if(c!==1||h!==1)do if(c--,h--,0>h||G[c]!==et[h]){var dt=`
`+G[c].replace(" at new "," at ");return i.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",i.displayName)),dt}while(1<=c&&0<=h);break}}}finally{se=!1,Error.prepareStackTrace=s}return(s=i?i.displayName||i.name:"")?qt(s):""}function Ie(i,a){switch(i.tag){case 26:case 27:case 5:return qt(i.type);case 16:return qt("Lazy");case 13:return i.child!==a&&a!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return te(i.type,!1);case 11:return te(i.type.render,!1);case 1:return te(i.type,!0);case 31:return qt("Activity");default:return""}}function V(i){try{var a="",s=null;do a+=Ie(i,s),s=i,i=i.return;while(i);return a}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Be=Object.prototype.hasOwnProperty,ge=e.unstable_scheduleCallback,we=e.unstable_cancelCallback,Ht=e.unstable_shouldYield,N=e.unstable_requestPaint,E=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,ht=e.unstable_ImmediatePriority,_t=e.unstable_UserBlockingPriority,ft=e.unstable_NormalPriority,Jt=e.unstable_LowPriority,Rt=e.unstable_IdlePriority,Yt=e.log,ue=e.unstable_setDisableYieldValue,Mt=null,bt=null;function Ft(i){if(typeof Yt=="function"&&ue(i),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Mt,i)}catch{}}var Ot=Math.clz32?Math.clz32:Y,Ct=Math.log,ve=Math.LN2;function Y(i){return i>>>=0,i===0?32:31-(Ct(i)/ve|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(i){var a=i&42;if(a!==0)return a;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function vt(i,a,s){var c=i.pendingLanes;if(c===0)return 0;var h=0,d=i.suspendedLanes,y=i.pingedLanes;i=i.warmLanes;var A=c&134217727;return A!==0?(c=A&~d,c!==0?h=St(c):(y&=A,y!==0?h=St(y):s||(s=A&~i,s!==0&&(h=St(s))))):(A=c&~d,A!==0?h=St(A):y!==0?h=St(y):s||(s=c&~i,s!==0&&(h=St(s)))),h===0?0:a!==0&&a!==h&&(a&d)===0&&(d=h&-h,s=a&-a,d>=s||d===32&&(s&4194048)!==0)?a:h}function At(i,a){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&a)===0}function fe(i,a){switch(i){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(){var i=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),i}function Ne(i){for(var a=[],s=0;31>s;s++)a.push(i);return a}function fi(i,a){i.pendingLanes|=a,a!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function wa(i,a,s,c,h,d){var y=i.pendingLanes;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=s,i.entangledLanes&=s,i.errorRecoveryDisabledLanes&=s,i.shellSuspendCounter=0;var A=i.entanglements,G=i.expirationTimes,et=i.hiddenUpdates;for(s=y&~s;0<s;){var dt=31-Ot(s),gt=1<<dt;A[dt]=0,G[dt]=-1;var rt=et[dt];if(rt!==null)for(et[dt]=null,dt=0;dt<rt.length;dt++){var lt=rt[dt];lt!==null&&(lt.lane&=-536870913)}s&=~gt}c!==0&&ju(i,c,0),d!==0&&h===0&&i.tag!==0&&(i.suspendedLanes|=d&~(y&~a))}function ju(i,a,s){i.pendingLanes|=a,i.suspendedLanes&=~a;var c=31-Ot(a);i.entangledLanes|=a,i.entanglements[c]=i.entanglements[c]|1073741824|s&261930}function gc(i,a){var s=i.entangledLanes|=a;for(i=i.entanglements;s;){var c=31-Ot(s),h=1<<c;h&a|i[c]&a&&(i[c]|=a),s&=~h}}function Ro(i,a){var s=a&-a;return s=(s&42)!==0?1:_c(s),(s&(i.suspendedLanes|a))!==0?0:s}function _c(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Co(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function vc(){var i=z.p;return i!==0?i:(i=window.event,i===void 0?32:lx(i.type))}function Xa(i,a){var s=z.p;try{return z.p=i,a()}finally{z.p=s}}var aa=Math.random().toString(36).slice(2),Nn="__reactFiber$"+aa,$n="__reactProps$"+aa,Ra="__reactContainer$"+aa,Do="__reactEvents$"+aa,Uo="__reactListeners$"+aa,Zu="__reactHandles$"+aa,xc="__reactResources$"+aa,Gs="__reactMarker$"+aa;function yc(i){delete i[Nn],delete i[$n],delete i[Do],delete i[Uo],delete i[Zu]}function qr(i){var a=i[Nn];if(a)return a;for(var s=i.parentNode;s;){if(a=s[Ra]||s[Nn]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(i=q3(i);i!==null;){if(s=i[Nn])return s;i=q3(i)}return a}i=s,s=i.parentNode}return null}function Yr(i){if(i=i[Nn]||i[Ra]){var a=i.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return i}return null}function Hs(i){var a=i.tag;if(a===5||a===26||a===27||a===6)return i.stateNode;throw Error(r(33))}function jr(i){var a=i[xc];return a||(a=i[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function w(i){i[Gs]=!0}var Z=new Set,ot={};function at(i,a){J(i,a),J(i+"Capture",a)}function J(i,a){for(ot[i]=a,i=0;i<a.length;i++)Z.add(a[i])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Lt={};function Xt(i){return Be.call(Lt,i)?!0:Be.call(Bt,i)?!1:Dt.test(i)?Lt[i]=!0:(Bt[i]=!0,!1)}function jt(i,a,s){if(Xt(a))if(s===null)i.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":i.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){i.removeAttribute(a);return}}i.setAttribute(a,""+s)}}function oe(i,a,s){if(s===null)i.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(a);return}i.setAttribute(a,""+s)}}function Zt(i,a,s,c){if(c===null)i.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(s);return}i.setAttributeNS(a,s,""+c)}}function le(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ve(i){var a=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function gn(i,a,s){var c=Object.getOwnPropertyDescriptor(i.constructor.prototype,a);if(!i.hasOwnProperty(a)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var h=c.get,d=c.set;return Object.defineProperty(i,a,{configurable:!0,get:function(){return h.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(i,a,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){i._valueTracker=null,delete i[a]}}}}function ln(i){if(!i._valueTracker){var a=Ve(i)?"checked":"value";i._valueTracker=gn(i,a,""+i[a])}}function qe(i){if(!i)return!1;var a=i._valueTracker;if(!a)return!0;var s=a.getValue(),c="";return i&&(c=Ve(i)?i.checked?"true":"false":i.value),i=c,i!==s?(a.setValue(i),!0):!1}function ee(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var ke=/[\n"\\]/g;function he(i){return i.replace(ke,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ti(i,a,s,c,h,d,y,A){i.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?i.type=y:i.removeAttribute("type"),a!=null?y==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+le(a)):i.value!==""+le(a)&&(i.value=""+le(a)):y!=="submit"&&y!=="reset"||i.removeAttribute("value"),a!=null?ei(i,y,le(a)):s!=null?ei(i,y,le(s)):c!=null&&i.removeAttribute("value"),h==null&&d!=null&&(i.defaultChecked=!!d),h!=null&&(i.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+le(A):i.removeAttribute("name")}function cr(i,a,s,c,h,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(i.type=d),a!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||a!=null)){ln(i);return}s=s!=null?""+le(s):"",a=a!=null?""+le(a):s,A||a===i.value||(i.value=a),i.defaultValue=a}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,i.checked=A?i.checked:!!c,i.defaultChecked=!!c,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(i.name=y),ln(i)}function ei(i,a,s){a==="number"&&ee(i.ownerDocument)===i||i.defaultValue===""+s||(i.defaultValue=""+s)}function ra(i,a,s,c){if(i=i.options,a){a={};for(var h=0;h<s.length;h++)a["$"+s[h]]=!0;for(s=0;s<i.length;s++)h=a.hasOwnProperty("$"+i[s].value),i[s].selected!==h&&(i[s].selected=h),h&&c&&(i[s].defaultSelected=!0)}else{for(s=""+le(s),a=null,h=0;h<i.length;h++){if(i[h].value===s){i[h].selected=!0,c&&(i[h].defaultSelected=!0);return}a!==null||i[h].disabled||(a=i[h])}a!==null&&(a.selected=!0)}}function Ke(i,a,s){if(a!=null&&(a=""+le(a),a!==i.value&&(i.value=a),s==null)){i.defaultValue!==a&&(i.defaultValue=a);return}i.defaultValue=s!=null?""+le(s):""}function ni(i,a,s,c){if(a==null){if(c!=null){if(s!=null)throw Error(r(92));if(st(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),a=s}s=le(a),i.defaultValue=s,c=i.textContent,c===s&&c!==""&&c!==null&&(i.value=c),ln(i)}function kn(i,a){if(a){var s=i.firstChild;if(s&&s===i.lastChild&&s.nodeType===3){s.nodeValue=a;return}}i.textContent=a}var ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ai(i,a,s){var c=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?i.setProperty(a,""):a==="float"?i.cssFloat="":i[a]="":c?i.setProperty(a,s):typeof s!="number"||s===0||ii.has(a)?a==="float"?i.cssFloat=s:i[a]=(""+s).trim():i[a]=s+"px"}function Lo(i,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(i=i.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?i.setProperty(c,""):c==="float"?i.cssFloat="":i[c]="");for(var h in a)c=a[h],a.hasOwnProperty(h)&&s[h]!==c&&ai(i,h,c)}else for(var d in a)a.hasOwnProperty(d)&&ai(i,d,a[d])}function Ca(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ku(i){return Mb.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function ur(){}var kd=null;function Xd(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var No=null,Oo=null;function I_(i){var a=Yr(i);if(a&&(i=a.stateNode)){var s=i[$n]||null;t:switch(i=a.stateNode,a.type){case"input":if(ti(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=i;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+he(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var c=s[a];if(c!==i&&c.form===i.form){var h=c[$n]||null;if(!h)throw Error(r(90));ti(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<s.length;a++)c=s[a],c.form===i.form&&qe(c)}break t;case"textarea":Ke(i,s.value,s.defaultValue);break t;case"select":a=s.value,a!=null&&ra(i,!!s.multiple,a,!1)}}}var Wd=!1;function B_(i,a,s){if(Wd)return i(a,s);Wd=!0;try{var c=i(a);return c}finally{if(Wd=!1,(No!==null||Oo!==null)&&(Bf(),No&&(a=No,i=Oo,Oo=No=null,I_(a),i)))for(a=0;a<i.length;a++)I_(i[a])}}function Sc(i,a){var s=i.stateNode;if(s===null)return null;var c=s[$n]||null;if(c===null)return null;s=c[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break t;default:i=!1}if(i)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=!1;if(fr)try{var Mc={};Object.defineProperty(Mc,"passive",{get:function(){qd=!0}}),window.addEventListener("test",Mc,Mc),window.removeEventListener("test",Mc,Mc)}catch{qd=!1}var Zr=null,Yd=null,Qu=null;function z_(){if(Qu)return Qu;var i,a=Yd,s=a.length,c,h="value"in Zr?Zr.value:Zr.textContent,d=h.length;for(i=0;i<s&&a[i]===h[i];i++);var y=s-i;for(c=1;c<=y&&a[s-c]===h[d-c];c++);return Qu=h.slice(i,1<c?1-c:void 0)}function Ju(i){var a=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&a===13&&(i=13)):i=a,i===10&&(i=13),32<=i||i===13?i:0}function $u(){return!0}function G_(){return!1}function Ti(i){function a(s,c,h,d,y){this._reactName=s,this._targetInst=h,this.type=c,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(s=i[A],this[A]=s?s(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?$u:G_,this.isPropagationStopped=G_,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=$u)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=$u)},persist:function(){},isPersistent:$u}),a}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Ti(Vs),Ec=_({},Vs,{view:0,detail:0}),Eb=Ti(Ec),jd,Zd,bc,ef=_({},Ec,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==bc&&(bc&&i.type==="mousemove"?(jd=i.screenX-bc.screenX,Zd=i.screenY-bc.screenY):Zd=jd=0,bc=i),jd)},movementY:function(i){return"movementY"in i?i.movementY:Zd}}),H_=Ti(ef),bb=_({},ef,{dataTransfer:0}),Tb=Ti(bb),Ab=_({},Ec,{relatedTarget:0}),Kd=Ti(Ab),wb=_({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=Ti(wb),Cb=_({},Vs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Db=Ti(Cb),Ub=_({},Vs,{data:0}),V_=Ti(Ub),Lb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pb(i){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(i):(i=Ob[i])?!!a[i]:!1}function Qd(){return Pb}var Fb=_({},Ec,{key:function(i){if(i.key){var a=Lb[i.key]||i.key;if(a!=="Unidentified")return a}return i.type==="keypress"?(i=Ju(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Nb[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(i){return i.type==="keypress"?Ju(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ju(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Ib=Ti(Fb),Bb=_({},ef,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k_=Ti(Bb),zb=_({},Ec,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),Gb=Ti(zb),Hb=_({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=Ti(Hb),kb=_({},ef,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Xb=Ti(kb),Wb=_({},Vs,{newState:0,oldState:0}),qb=Ti(Wb),Yb=[9,13,27,32],Jd=fr&&"CompositionEvent"in window,Tc=null;fr&&"documentMode"in document&&(Tc=document.documentMode);var jb=fr&&"TextEvent"in window&&!Tc,X_=fr&&(!Jd||Tc&&8<Tc&&11>=Tc),W_=" ",q_=!1;function Y_(i,a){switch(i){case"keyup":return Yb.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Po=!1;function Zb(i,a){switch(i){case"compositionend":return j_(a);case"keypress":return a.which!==32?null:(q_=!0,W_);case"textInput":return i=a.data,i===W_&&q_?null:i;default:return null}}function Kb(i,a){if(Po)return i==="compositionend"||!Jd&&Y_(i,a)?(i=z_(),Qu=Yd=Zr=null,Po=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return X_&&a.locale!=="ko"?null:a.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Z_(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a==="input"?!!Qb[i.type]:a==="textarea"}function K_(i,a,s,c){No?Oo?Oo.push(c):Oo=[c]:No=c,a=Wf(a,"onChange"),0<a.length&&(s=new tf("onChange","change",null,s,c),i.push({event:s,listeners:a}))}var Ac=null,wc=null;function Jb(i){L3(i,0)}function nf(i){var a=Hs(i);if(qe(a))return i}function Q_(i,a){if(i==="change")return a}var J_=!1;if(fr){var $d;if(fr){var tp="oninput"in document;if(!tp){var $_=document.createElement("div");$_.setAttribute("oninput","return;"),tp=typeof $_.oninput=="function"}$d=tp}else $d=!1;J_=$d&&(!document.documentMode||9<document.documentMode)}function tv(){Ac&&(Ac.detachEvent("onpropertychange",ev),wc=Ac=null)}function ev(i){if(i.propertyName==="value"&&nf(wc)){var a=[];K_(a,wc,i,Xd(i)),B_(Jb,a)}}function $b(i,a,s){i==="focusin"?(tv(),Ac=a,wc=s,Ac.attachEvent("onpropertychange",ev)):i==="focusout"&&tv()}function tT(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return nf(wc)}function eT(i,a){if(i==="click")return nf(a)}function nT(i,a){if(i==="input"||i==="change")return nf(a)}function iT(i,a){return i===a&&(i!==0||1/i===1/a)||i!==i&&a!==a}var Bi=typeof Object.is=="function"?Object.is:iT;function Rc(i,a){if(Bi(i,a))return!0;if(typeof i!="object"||i===null||typeof a!="object"||a===null)return!1;var s=Object.keys(i),c=Object.keys(a);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var h=s[c];if(!Be.call(a,h)||!Bi(i[h],a[h]))return!1}return!0}function nv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function iv(i,a){var s=nv(i);i=0;for(var c;s;){if(s.nodeType===3){if(c=i+s.textContent.length,i<=a&&c>=a)return{node:s,offset:a-i};i=c}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=nv(s)}}function av(i,a){return i&&a?i===a?!0:i&&i.nodeType===3?!1:a&&a.nodeType===3?av(i,a.parentNode):"contains"in i?i.contains(a):i.compareDocumentPosition?!!(i.compareDocumentPosition(a)&16):!1:!1}function rv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var a=ee(i.document);a instanceof i.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)i=a.contentWindow;else break;a=ee(i.document)}return a}function ep(i){var a=i&&i.nodeName&&i.nodeName.toLowerCase();return a&&(a==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||a==="textarea"||i.contentEditable==="true")}var aT=fr&&"documentMode"in document&&11>=document.documentMode,Fo=null,np=null,Cc=null,ip=!1;function sv(i,a,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ip||Fo==null||Fo!==ee(c)||(c=Fo,"selectionStart"in c&&ep(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Cc&&Rc(Cc,c)||(Cc=c,c=Wf(np,"onSelect"),0<c.length&&(a=new tf("onSelect","select",null,a,s),i.push({event:a,listeners:c}),a.target=Fo)))}function ks(i,a){var s={};return s[i.toLowerCase()]=a.toLowerCase(),s["Webkit"+i]="webkit"+a,s["Moz"+i]="moz"+a,s}var Io={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionrun:ks("Transition","TransitionRun"),transitionstart:ks("Transition","TransitionStart"),transitioncancel:ks("Transition","TransitionCancel"),transitionend:ks("Transition","TransitionEnd")},ap={},ov={};fr&&(ov=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function Xs(i){if(ap[i])return ap[i];if(!Io[i])return i;var a=Io[i],s;for(s in a)if(a.hasOwnProperty(s)&&s in ov)return ap[i]=a[s];return i}var lv=Xs("animationend"),cv=Xs("animationiteration"),uv=Xs("animationstart"),rT=Xs("transitionrun"),sT=Xs("transitionstart"),oT=Xs("transitioncancel"),fv=Xs("transitionend"),hv=new Map,rp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rp.push("scrollEnd");function Da(i,a){hv.set(i,a),at(a,[i])}var af=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},sa=[],Bo=0,sp=0;function rf(){for(var i=Bo,a=sp=Bo=0;a<i;){var s=sa[a];sa[a++]=null;var c=sa[a];sa[a++]=null;var h=sa[a];sa[a++]=null;var d=sa[a];if(sa[a++]=null,c!==null&&h!==null){var y=c.pending;y===null?h.next=h:(h.next=y.next,y.next=h),c.pending=h}d!==0&&dv(s,h,d)}}function sf(i,a,s,c){sa[Bo++]=i,sa[Bo++]=a,sa[Bo++]=s,sa[Bo++]=c,sp|=c,i.lanes|=c,i=i.alternate,i!==null&&(i.lanes|=c)}function op(i,a,s,c){return sf(i,a,s,c),of(i)}function Ws(i,a){return sf(i,null,null,a),of(i)}function dv(i,a,s){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s);for(var h=!1,d=i.return;d!==null;)d.childLanes|=s,c=d.alternate,c!==null&&(c.childLanes|=s),d.tag===22&&(i=d.stateNode,i===null||i._visibility&1||(h=!0)),i=d,d=d.return;return i.tag===3?(d=i.stateNode,h&&a!==null&&(h=31-Ot(s),i=d.hiddenUpdates,c=i[h],c===null?i[h]=[a]:c.push(a),a.lane=s|536870912),d):null}function of(i){if(50<Qc)throw Qc=0,gm=null,Error(r(185));for(var a=i.return;a!==null;)i=a,a=i.return;return i.tag===3?i.stateNode:null}var zo={};function lT(i,a,s,c){this.tag=i,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zi(i,a,s,c){return new lT(i,a,s,c)}function lp(i){return i=i.prototype,!(!i||!i.isReactComponent)}function hr(i,a){var s=i.alternate;return s===null?(s=zi(i.tag,a,i.key,i.mode),s.elementType=i.elementType,s.type=i.type,s.stateNode=i.stateNode,s.alternate=i,i.alternate=s):(s.pendingProps=a,s.type=i.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=i.flags&65011712,s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,a=i.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=i.sibling,s.index=i.index,s.ref=i.ref,s.refCleanup=i.refCleanup,s}function pv(i,a){i.flags&=65011714;var s=i.alternate;return s===null?(i.childLanes=0,i.lanes=a,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,a=s.dependencies,i.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),i}function lf(i,a,s,c,h,d){var y=0;if(c=i,typeof i=="function")lp(i)&&(y=1);else if(typeof i=="string")y=dA(i,s,Et.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case T:return i=zi(31,s,a,h),i.elementType=T,i.lanes=d,i;case R:return qs(s.children,h,d,a);case M:y=8,h|=24;break;case x:return i=zi(12,s,a,h|2),i.elementType=x,i.lanes=d,i;case P:return i=zi(13,s,a,h),i.elementType=P,i.lanes=d,i;case F:return i=zi(19,s,a,h),i.elementType=F,i.lanes=d,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case U:y=10;break t;case L:y=9;break t;case C:y=11;break t;case O:y=14;break t;case k:y=16,c=null;break t}y=29,s=Error(r(130,i===null?"null":typeof i,"")),c=null}return a=zi(y,s,a,h),a.elementType=i,a.type=c,a.lanes=d,a}function qs(i,a,s,c){return i=zi(7,i,c,a),i.lanes=s,i}function cp(i,a,s){return i=zi(6,i,null,a),i.lanes=s,i}function mv(i){var a=zi(18,null,null,0);return a.stateNode=i,a}function up(i,a,s){return a=zi(4,i.children!==null?i.children:[],i.key,a),a.lanes=s,a.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},a}var gv=new WeakMap;function oa(i,a){if(typeof i=="object"&&i!==null){var s=gv.get(i);return s!==void 0?s:(a={value:i,source:a,stack:V(a)},gv.set(i,a),a)}return{value:i,source:a,stack:V(a)}}var Go=[],Ho=0,cf=null,Dc=0,la=[],ca=0,Kr=null,Wa=1,qa="";function dr(i,a){Go[Ho++]=Dc,Go[Ho++]=cf,cf=i,Dc=a}function _v(i,a,s){la[ca++]=Wa,la[ca++]=qa,la[ca++]=Kr,Kr=i;var c=Wa;i=qa;var h=32-Ot(c)-1;c&=~(1<<h),s+=1;var d=32-Ot(a)+h;if(30<d){var y=h-h%5;d=(c&(1<<y)-1).toString(32),c>>=y,h-=y,Wa=1<<32-Ot(a)+h|s<<h|c,qa=d+i}else Wa=1<<d|s<<h|c,qa=i}function fp(i){i.return!==null&&(dr(i,1),_v(i,1,0))}function hp(i){for(;i===cf;)cf=Go[--Ho],Go[Ho]=null,Dc=Go[--Ho],Go[Ho]=null;for(;i===Kr;)Kr=la[--ca],la[ca]=null,qa=la[--ca],la[ca]=null,Wa=la[--ca],la[ca]=null}function vv(i,a){la[ca++]=Wa,la[ca++]=qa,la[ca++]=Kr,Wa=a.id,qa=a.overflow,Kr=i}var ri=null,hn=null,Ue=!1,Qr=null,ua=!1,dp=Error(r(519));function Jr(i){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Uc(oa(a,i)),dp}function xv(i){var a=i.stateNode,s=i.type,c=i.memoizedProps;switch(a[Nn]=i,a[$n]=c,s){case"dialog":Te("cancel",a),Te("close",a);break;case"iframe":case"object":case"embed":Te("load",a);break;case"video":case"audio":for(s=0;s<$c.length;s++)Te($c[s],a);break;case"source":Te("error",a);break;case"img":case"image":case"link":Te("error",a),Te("load",a);break;case"details":Te("toggle",a);break;case"input":Te("invalid",a),cr(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Te("invalid",a);break;case"textarea":Te("invalid",a),ni(a,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||c.suppressHydrationWarning===!0||F3(a.textContent,s)?(c.popover!=null&&(Te("beforetoggle",a),Te("toggle",a)),c.onScroll!=null&&Te("scroll",a),c.onScrollEnd!=null&&Te("scrollend",a),c.onClick!=null&&(a.onclick=ur),a=!0):a=!1,a||Jr(i,!0)}function yv(i){for(ri=i.return;ri;)switch(ri.tag){case 5:case 31:case 13:ua=!1;return;case 27:case 3:ua=!0;return;default:ri=ri.return}}function Vo(i){if(i!==ri)return!1;if(!Ue)return yv(i),Ue=!0,!1;var a=i.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=i.type,s=!(s!=="form"&&s!=="button")||Um(i.type,i.memoizedProps)),s=!s),s&&hn&&Jr(i),yv(i),a===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));hn=W3(i)}else if(a===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));hn=W3(i)}else a===27?(a=hn,hs(i.type)?(i=Fm,Fm=null,hn=i):hn=a):hn=ri?ha(i.stateNode.nextSibling):null;return!0}function Ys(){hn=ri=null,Ue=!1}function pp(){var i=Qr;return i!==null&&(Ci===null?Ci=i:Ci.push.apply(Ci,i),Qr=null),i}function Uc(i){Qr===null?Qr=[i]:Qr.push(i)}var mp=I(null),js=null,pr=null;function $r(i,a,s){mt(mp,a._currentValue),a._currentValue=s}function mr(i){i._currentValue=mp.current,it(mp)}function gp(i,a,s){for(;i!==null;){var c=i.alternate;if((i.childLanes&a)!==a?(i.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),i===s)break;i=i.return}}function _p(i,a,s,c){var h=i.child;for(h!==null&&(h.return=i);h!==null;){var d=h.dependencies;if(d!==null){var y=h.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=h;for(var G=0;G<a.length;G++)if(A.context===a[G]){d.lanes|=s,A=d.alternate,A!==null&&(A.lanes|=s),gp(d.return,s,i),c||(y=null);break t}d=A.next}}else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=s,d=y.alternate,d!==null&&(d.lanes|=s),gp(y,s,i),y=null}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===i){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}}function ko(i,a,s,c){i=null;for(var h=a,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var y=h.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=h.type;Bi(h.pendingProps.value,y.value)||(i!==null?i.push(A):i=[A])}}else if(h===ut.current){if(y=h.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(i!==null?i.push(au):i=[au])}h=h.return}i!==null&&_p(a,i,s,c),a.flags|=262144}function uf(i){for(i=i.firstContext;i!==null;){if(!Bi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Zs(i){js=i,pr=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function si(i){return Sv(js,i)}function ff(i,a){return js===null&&Zs(i),Sv(i,a)}function Sv(i,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},pr===null){if(i===null)throw Error(r(308));pr=a,i.dependencies={lanes:0,firstContext:a},i.flags|=524288}else pr=pr.next=a;return s}var cT=typeof AbortController<"u"?AbortController:function(){var i=[],a=this.signal={aborted:!1,addEventListener:function(s,c){i.push(c)}};this.abort=function(){a.aborted=!0,i.forEach(function(s){return s()})}},uT=e.unstable_scheduleCallback,fT=e.unstable_NormalPriority,On={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vp(){return{controller:new cT,data:new Map,refCount:0}}function Lc(i){i.refCount--,i.refCount===0&&uT(fT,function(){i.controller.abort()})}var Nc=null,xp=0,Xo=0,Wo=null;function hT(i,a){if(Nc===null){var s=Nc=[];xp=0,Xo=Mm(),Wo={status:"pending",value:void 0,then:function(c){s.push(c)}}}return xp++,a.then(Mv,Mv),a}function Mv(){if(--xp===0&&Nc!==null){Wo!==null&&(Wo.status="fulfilled");var i=Nc;Nc=null,Xo=0,Wo=null;for(var a=0;a<i.length;a++)(0,i[a])()}}function dT(i,a){var s=[],c={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return i.then(function(){c.status="fulfilled",c.value=a;for(var h=0;h<s.length;h++)(0,s[h])(a)},function(h){for(c.status="rejected",c.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),c}var Ev=B.S;B.S=function(i,a){s3=E(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&hT(i,a),Ev!==null&&Ev(i,a)};var Ks=I(null);function yp(){var i=Ks.current;return i!==null?i:rn.pooledCache}function hf(i,a){a===null?mt(Ks,Ks.current):mt(Ks,a.pool)}function bv(){var i=yp();return i===null?null:{parent:On._currentValue,pool:i}}var qo=Error(r(460)),Sp=Error(r(474)),df=Error(r(542)),pf={then:function(){}};function Tv(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Av(i,a,s){switch(s=i[s],s===void 0?i.push(a):s!==a&&(a.then(ur,ur),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw i=a.reason,Rv(i),i;default:if(typeof a.status=="string")a.then(ur,ur);else{if(i=rn,i!==null&&100<i.shellSuspendCounter)throw Error(r(482));i=a,i.status="pending",i.then(function(c){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=c}},function(c){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw i=a.reason,Rv(i),i}throw Js=a,qo}}function Qs(i){try{var a=i._init;return a(i._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Js=s,qo):s}}var Js=null;function wv(){if(Js===null)throw Error(r(459));var i=Js;return Js=null,i}function Rv(i){if(i===qo||i===df)throw Error(r(483))}var Yo=null,Oc=0;function mf(i){var a=Oc;return Oc+=1,Yo===null&&(Yo=[]),Av(Yo,i,a)}function Pc(i,a){a=a.props.ref,i.ref=a!==void 0?a:null}function gf(i,a){throw a.$$typeof===v?Error(r(525)):(i=Object.prototype.toString.call(a),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":i)))}function Cv(i){function a(K,W){if(i){var $=K.deletions;$===null?(K.deletions=[W],K.flags|=16):$.push(W)}}function s(K,W){if(!i)return null;for(;W!==null;)a(K,W),W=W.sibling;return null}function c(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function h(K,W){return K=hr(K,W),K.index=0,K.sibling=null,K}function d(K,W,$){return K.index=$,i?($=K.alternate,$!==null?($=$.index,$<W?(K.flags|=67108866,W):$):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function y(K){return i&&K.alternate===null&&(K.flags|=67108866),K}function A(K,W,$,pt){return W===null||W.tag!==6?(W=cp($,K.mode,pt),W.return=K,W):(W=h(W,$),W.return=K,W)}function G(K,W,$,pt){var ae=$.type;return ae===R?dt(K,W,$.props.children,pt,$.key):W!==null&&(W.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===k&&Qs(ae)===W.type)?(W=h(W,$.props),Pc(W,$),W.return=K,W):(W=lf($.type,$.key,$.props,null,K.mode,pt),Pc(W,$),W.return=K,W)}function et(K,W,$,pt){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=up($,K.mode,pt),W.return=K,W):(W=h(W,$.children||[]),W.return=K,W)}function dt(K,W,$,pt,ae){return W===null||W.tag!==7?(W=qs($,K.mode,pt,ae),W.return=K,W):(W=h(W,$),W.return=K,W)}function gt(K,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=cp(""+W,K.mode,$),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return $=lf(W.type,W.key,W.props,null,K.mode,$),Pc($,W),$.return=K,$;case b:return W=up(W,K.mode,$),W.return=K,W;case k:return W=Qs(W),gt(K,W,$)}if(st(W)||j(W))return W=qs(W,K.mode,$,null),W.return=K,W;if(typeof W.then=="function")return gt(K,mf(W),$);if(W.$$typeof===U)return gt(K,ff(K,W),$);gf(K,W)}return null}function rt(K,W,$,pt){var ae=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ae!==null?null:A(K,W,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===ae?G(K,W,$,pt):null;case b:return $.key===ae?et(K,W,$,pt):null;case k:return $=Qs($),rt(K,W,$,pt)}if(st($)||j($))return ae!==null?null:dt(K,W,$,pt,null);if(typeof $.then=="function")return rt(K,W,mf($),pt);if($.$$typeof===U)return rt(K,W,ff(K,$),pt);gf(K,$)}return null}function lt(K,W,$,pt,ae){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get($)||null,A(W,K,""+pt,ae);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return K=K.get(pt.key===null?$:pt.key)||null,G(W,K,pt,ae);case b:return K=K.get(pt.key===null?$:pt.key)||null,et(W,K,pt,ae);case k:return pt=Qs(pt),lt(K,W,$,pt,ae)}if(st(pt)||j(pt))return K=K.get($)||null,dt(W,K,pt,ae,null);if(typeof pt.then=="function")return lt(K,W,$,mf(pt),ae);if(pt.$$typeof===U)return lt(K,W,$,ff(W,pt),ae);gf(W,pt)}return null}function Wt(K,W,$,pt){for(var ae=null,ze=null,Kt=W,xe=W=0,Ce=null;Kt!==null&&xe<$.length;xe++){Kt.index>xe?(Ce=Kt,Kt=null):Ce=Kt.sibling;var Ge=rt(K,Kt,$[xe],pt);if(Ge===null){Kt===null&&(Kt=Ce);break}i&&Kt&&Ge.alternate===null&&a(K,Kt),W=d(Ge,W,xe),ze===null?ae=Ge:ze.sibling=Ge,ze=Ge,Kt=Ce}if(xe===$.length)return s(K,Kt),Ue&&dr(K,xe),ae;if(Kt===null){for(;xe<$.length;xe++)Kt=gt(K,$[xe],pt),Kt!==null&&(W=d(Kt,W,xe),ze===null?ae=Kt:ze.sibling=Kt,ze=Kt);return Ue&&dr(K,xe),ae}for(Kt=c(Kt);xe<$.length;xe++)Ce=lt(Kt,K,xe,$[xe],pt),Ce!==null&&(i&&Ce.alternate!==null&&Kt.delete(Ce.key===null?xe:Ce.key),W=d(Ce,W,xe),ze===null?ae=Ce:ze.sibling=Ce,ze=Ce);return i&&Kt.forEach(function(_s){return a(K,_s)}),Ue&&dr(K,xe),ae}function ce(K,W,$,pt){if($==null)throw Error(r(151));for(var ae=null,ze=null,Kt=W,xe=W=0,Ce=null,Ge=$.next();Kt!==null&&!Ge.done;xe++,Ge=$.next()){Kt.index>xe?(Ce=Kt,Kt=null):Ce=Kt.sibling;var _s=rt(K,Kt,Ge.value,pt);if(_s===null){Kt===null&&(Kt=Ce);break}i&&Kt&&_s.alternate===null&&a(K,Kt),W=d(_s,W,xe),ze===null?ae=_s:ze.sibling=_s,ze=_s,Kt=Ce}if(Ge.done)return s(K,Kt),Ue&&dr(K,xe),ae;if(Kt===null){for(;!Ge.done;xe++,Ge=$.next())Ge=gt(K,Ge.value,pt),Ge!==null&&(W=d(Ge,W,xe),ze===null?ae=Ge:ze.sibling=Ge,ze=Ge);return Ue&&dr(K,xe),ae}for(Kt=c(Kt);!Ge.done;xe++,Ge=$.next())Ge=lt(Kt,K,xe,Ge.value,pt),Ge!==null&&(i&&Ge.alternate!==null&&Kt.delete(Ge.key===null?xe:Ge.key),W=d(Ge,W,xe),ze===null?ae=Ge:ze.sibling=Ge,ze=Ge);return i&&Kt.forEach(function(bA){return a(K,bA)}),Ue&&dr(K,xe),ae}function nn(K,W,$,pt){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var ae=$.key;W!==null;){if(W.key===ae){if(ae=$.type,ae===R){if(W.tag===7){s(K,W.sibling),pt=h(W,$.props.children),pt.return=K,K=pt;break t}}else if(W.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===k&&Qs(ae)===W.type){s(K,W.sibling),pt=h(W,$.props),Pc(pt,$),pt.return=K,K=pt;break t}s(K,W);break}else a(K,W);W=W.sibling}$.type===R?(pt=qs($.props.children,K.mode,pt,$.key),pt.return=K,K=pt):(pt=lf($.type,$.key,$.props,null,K.mode,pt),Pc(pt,$),pt.return=K,K=pt)}return y(K);case b:t:{for(ae=$.key;W!==null;){if(W.key===ae)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){s(K,W.sibling),pt=h(W,$.children||[]),pt.return=K,K=pt;break t}else{s(K,W);break}else a(K,W);W=W.sibling}pt=up($,K.mode,pt),pt.return=K,K=pt}return y(K);case k:return $=Qs($),nn(K,W,$,pt)}if(st($))return Wt(K,W,$,pt);if(j($)){if(ae=j($),typeof ae!="function")throw Error(r(150));return $=ae.call($),ce(K,W,$,pt)}if(typeof $.then=="function")return nn(K,W,mf($),pt);if($.$$typeof===U)return nn(K,W,ff(K,$),pt);gf(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(s(K,W.sibling),pt=h(W,$),pt.return=K,K=pt):(s(K,W),pt=cp($,K.mode,pt),pt.return=K,K=pt),y(K)):s(K,W)}return function(K,W,$,pt){try{Oc=0;var ae=nn(K,W,$,pt);return Yo=null,ae}catch(Kt){if(Kt===qo||Kt===df)throw Kt;var ze=zi(29,Kt,null,K.mode);return ze.lanes=pt,ze.return=K,ze}finally{}}}var $s=Cv(!0),Dv=Cv(!1),ts=!1;function Mp(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ep(i,a){i=i.updateQueue,a.updateQueue===i&&(a.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function es(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function ns(i,a,s){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Xe&2)!==0){var h=c.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a,a=of(i),dv(i,null,s),a}return sf(i,c,a,s),of(i)}function Fc(i,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var c=a.lanes;c&=i.pendingLanes,s|=c,a.lanes=s,gc(i,s)}}function bp(i,a){var s=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var h=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?h=d=y:d=d.next=y,s=s.next}while(s!==null);d===null?h=d=a:d=d.next=a}else h=d=a;s={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:c.shared,callbacks:c.callbacks},i.updateQueue=s;return}i=s.lastBaseUpdate,i===null?s.firstBaseUpdate=a:i.next=a,s.lastBaseUpdate=a}var Tp=!1;function Ic(){if(Tp){var i=Wo;if(i!==null)throw i}}function Bc(i,a,s,c){Tp=!1;var h=i.updateQueue;ts=!1;var d=h.firstBaseUpdate,y=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var G=A,et=G.next;G.next=null,y===null?d=et:y.next=et,y=G;var dt=i.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==y&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=G))}if(d!==null){var gt=h.baseState;y=0,dt=et=G=null,A=d;do{var rt=A.lane&-536870913,lt=rt!==A.lane;if(lt?(Re&rt)===rt:(c&rt)===rt){rt!==0&&rt===Xo&&(Tp=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Wt=i,ce=A;rt=a;var nn=s;switch(ce.tag){case 1:if(Wt=ce.payload,typeof Wt=="function"){gt=Wt.call(nn,gt,rt);break t}gt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ce.payload,rt=typeof Wt=="function"?Wt.call(nn,gt,rt):Wt,rt==null)break t;gt=_({},gt,rt);break t;case 2:ts=!0}}rt=A.callback,rt!==null&&(i.flags|=64,lt&&(i.flags|=8192),lt=h.callbacks,lt===null?h.callbacks=[rt]:lt.push(rt))}else lt={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=lt,G=gt):dt=dt.next=lt,y|=rt;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,h.lastBaseUpdate=lt,h.shared.pending=null}}while(!0);dt===null&&(G=gt),h.baseState=G,h.firstBaseUpdate=et,h.lastBaseUpdate=dt,d===null&&(h.shared.lanes=0),os|=y,i.lanes=y,i.memoizedState=gt}}function Uv(i,a){if(typeof i!="function")throw Error(r(191,i));i.call(a)}function Lv(i,a){var s=i.callbacks;if(s!==null)for(i.callbacks=null,i=0;i<s.length;i++)Uv(s[i],a)}var jo=I(null),_f=I(0);function Nv(i,a){i=br,mt(_f,i),mt(jo,a),br=i|a.baseLanes}function Ap(){mt(_f,br),mt(jo,jo.current)}function wp(){br=_f.current,it(jo),it(_f)}var Gi=I(null),fa=null;function is(i){var a=i.alternate;mt(Rn,Rn.current&1),mt(Gi,i),fa===null&&(a===null||jo.current!==null||a.memoizedState!==null)&&(fa=i)}function Rp(i){mt(Rn,Rn.current),mt(Gi,i),fa===null&&(fa=i)}function Ov(i){i.tag===22?(mt(Rn,Rn.current),mt(Gi,i),fa===null&&(fa=i)):as()}function as(){mt(Rn,Rn.current),mt(Gi,Gi.current)}function Hi(i){it(Gi),fa===i&&(fa=null),it(Rn)}var Rn=I(0);function vf(i){for(var a=i;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Om(s)||Pm(s)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var gr=0,_e=null,tn=null,Pn=null,xf=!1,Zo=!1,to=!1,yf=0,zc=0,Ko=null,pT=0;function Mn(){throw Error(r(321))}function Cp(i,a){if(a===null)return!1;for(var s=0;s<a.length&&s<i.length;s++)if(!Bi(i[s],a[s]))return!1;return!0}function Dp(i,a,s,c,h,d){return gr=d,_e=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,B.H=i===null||i.memoizedState===null?_2:Wp,to=!1,d=s(c,h),to=!1,Zo&&(d=Fv(a,s,c,h)),Pv(i),d}function Pv(i){B.H=Vc;var a=tn!==null&&tn.next!==null;if(gr=0,Pn=tn=_e=null,xf=!1,zc=0,Ko=null,a)throw Error(r(300));i===null||Fn||(i=i.dependencies,i!==null&&uf(i)&&(Fn=!0))}function Fv(i,a,s,c){_e=i;var h=0;do{if(Zo&&(Ko=null),zc=0,Zo=!1,25<=h)throw Error(r(301));if(h+=1,Pn=tn=null,i.updateQueue!=null){var d=i.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=v2,d=a(s,c)}while(Zo);return d}function mT(){var i=B.H,a=i.useState()[0];return a=typeof a.then=="function"?Gc(a):a,i=i.useState()[0],(tn!==null?tn.memoizedState:null)!==i&&(_e.flags|=1024),a}function Up(){var i=yf!==0;return yf=0,i}function Lp(i,a,s){a.updateQueue=i.updateQueue,a.flags&=-2053,i.lanes&=~s}function Np(i){if(xf){for(i=i.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}xf=!1}gr=0,Pn=tn=_e=null,Zo=!1,zc=yf=0,Ko=null}function vi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?_e.memoizedState=Pn=i:Pn=Pn.next=i,Pn}function Cn(){if(tn===null){var i=_e.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var a=Pn===null?_e.memoizedState:Pn.next;if(a!==null)Pn=a,tn=i;else{if(i===null)throw _e.alternate===null?Error(r(467)):Error(r(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},Pn===null?_e.memoizedState=Pn=i:Pn=Pn.next=i}return Pn}function Sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gc(i){var a=zc;return zc+=1,Ko===null&&(Ko=[]),i=Av(Ko,i,a),a=_e,(Pn===null?a.memoizedState:Pn.next)===null&&(a=a.alternate,B.H=a===null||a.memoizedState===null?_2:Wp),i}function Mf(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Gc(i);if(i.$$typeof===U)return si(i)}throw Error(r(438,String(i)))}function Op(i){var a=null,s=_e.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var c=_e.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Sf(),_e.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(i),c=0;c<i;c++)s[c]=D;return a.index++,s}function _r(i,a){return typeof a=="function"?a(i):a}function Ef(i){var a=Cn();return Pp(a,tn,i)}function Pp(i,a,s){var c=i.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var h=i.baseQueue,d=c.pending;if(d!==null){if(h!==null){var y=h.next;h.next=d.next,d.next=y}a.baseQueue=h=d,c.pending=null}if(d=i.baseState,h===null)i.memoizedState=d;else{a=h.next;var A=y=null,G=null,et=a,dt=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(Re&gt)===gt:(gr&gt)===gt){var rt=et.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===Xo&&(dt=!0);else if((gr&rt)===rt){et=et.next,rt===Xo&&(dt=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=gt,y=d):G=G.next=gt,_e.lanes|=rt,os|=rt;gt=et.action,to&&s(d,gt),d=et.hasEagerState?et.eagerState:s(d,gt)}else rt={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=rt,y=d):G=G.next=rt,_e.lanes|=gt,os|=gt;et=et.next}while(et!==null&&et!==a);if(G===null?y=d:G.next=A,!Bi(d,i.memoizedState)&&(Fn=!0,dt&&(s=Wo,s!==null)))throw s;i.memoizedState=d,i.baseState=y,i.baseQueue=G,c.lastRenderedState=d}return h===null&&(c.lanes=0),[i.memoizedState,c.dispatch]}function Fp(i){var a=Cn(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=i;var c=s.dispatch,h=s.pending,d=a.memoizedState;if(h!==null){s.pending=null;var y=h=h.next;do d=i(d,y.action),y=y.next;while(y!==h);Bi(d,a.memoizedState)||(Fn=!0),a.memoizedState=d,a.baseQueue===null&&(a.baseState=d),s.lastRenderedState=d}return[d,c]}function Iv(i,a,s){var c=_e,h=Cn(),d=Ue;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=a();var y=!Bi((tn||h).memoizedState,s);if(y&&(h.memoizedState=s,Fn=!0),h=h.queue,zp(Gv.bind(null,c,h,i),[i]),h.getSnapshot!==a||y||Pn!==null&&Pn.memoizedState.tag&1){if(c.flags|=2048,Qo(9,{destroy:void 0},zv.bind(null,c,h,s,a),null),rn===null)throw Error(r(349));d||(gr&127)!==0||Bv(c,a,s)}return s}function Bv(i,a,s){i.flags|=16384,i={getSnapshot:a,value:s},a=_e.updateQueue,a===null?(a=Sf(),_e.updateQueue=a,a.stores=[i]):(s=a.stores,s===null?a.stores=[i]:s.push(i))}function zv(i,a,s,c){a.value=s,a.getSnapshot=c,Hv(a)&&Vv(i)}function Gv(i,a,s){return s(function(){Hv(a)&&Vv(i)})}function Hv(i){var a=i.getSnapshot;i=i.value;try{var s=a();return!Bi(i,s)}catch{return!0}}function Vv(i){var a=Ws(i,2);a!==null&&Di(a,i,2)}function Ip(i){var a=vi();if(typeof i=="function"){var s=i;if(i=s(),to){Ft(!0);try{s()}finally{Ft(!1)}}}return a.memoizedState=a.baseState=i,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:i},a}function kv(i,a,s,c){return i.baseState=s,Pp(i,tn,typeof c=="function"?c:_r)}function gT(i,a,s,c,h){if(Af(i))throw Error(r(485));if(i=a.action,i!==null){var d={payload:h,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};B.T!==null?s(!0):d.isTransition=!1,c(d),s=a.pending,s===null?(d.next=a.pending=d,Xv(a,d)):(d.next=s.next,a.pending=s.next=d)}}function Xv(i,a){var s=a.action,c=a.payload,h=i.state;if(a.isTransition){var d=B.T,y={};B.T=y;try{var A=s(h,c),G=B.S;G!==null&&G(y,A),Wv(i,a,A)}catch(et){Bp(i,a,et)}finally{d!==null&&y.types!==null&&(d.types=y.types),B.T=d}}else try{d=s(h,c),Wv(i,a,d)}catch(et){Bp(i,a,et)}}function Wv(i,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){qv(i,a,c)},function(c){return Bp(i,a,c)}):qv(i,a,s)}function qv(i,a,s){a.status="fulfilled",a.value=s,Yv(a),i.state=s,a=i.pending,a!==null&&(s=a.next,s===a?i.pending=null:(s=s.next,a.next=s,Xv(i,s)))}function Bp(i,a,s){var c=i.pending;if(i.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=s,Yv(a),a=a.next;while(a!==c)}i.action=null}function Yv(i){i=i.listeners;for(var a=0;a<i.length;a++)(0,i[a])()}function jv(i,a){return a}function Zv(i,a){if(Ue){var s=rn.formState;if(s!==null){t:{var c=_e;if(Ue){if(hn){e:{for(var h=hn,d=ua;h.nodeType!==8;){if(!d){h=null;break e}if(h=ha(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){hn=ha(h.nextSibling),c=h.data==="F!";break t}}Jr(c)}c=!1}c&&(a=s[0])}}return s=vi(),s.memoizedState=s.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jv,lastRenderedState:a},s.queue=c,s=p2.bind(null,_e,c),c.dispatch=s,c=Ip(!1),d=Xp.bind(null,_e,!1,c.queue),c=vi(),h={state:a,dispatch:null,action:i,pending:null},c.queue=h,s=gT.bind(null,_e,h,d,s),h.dispatch=s,c.memoizedState=i,[a,s,!1]}function Kv(i){var a=Cn();return Qv(a,tn,i)}function Qv(i,a,s){if(a=Pp(i,a,jv)[0],i=Ef(_r)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=Gc(a)}catch(y){throw y===qo?df:y}else c=a;a=Cn();var h=a.queue,d=h.dispatch;return s!==a.memoizedState&&(_e.flags|=2048,Qo(9,{destroy:void 0},_T.bind(null,h,s),null)),[c,d,i]}function _T(i,a){i.action=a}function Jv(i){var a=Cn(),s=tn;if(s!==null)return Qv(a,s,i);Cn(),a=a.memoizedState,s=Cn();var c=s.queue.dispatch;return s.memoizedState=i,[a,c,!1]}function Qo(i,a,s,c){return i={tag:i,create:s,deps:c,inst:a,next:null},a=_e.updateQueue,a===null&&(a=Sf(),_e.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=i.next=i:(c=s.next,s.next=i,i.next=c,a.lastEffect=i),i}function $v(){return Cn().memoizedState}function bf(i,a,s,c){var h=vi();_e.flags|=i,h.memoizedState=Qo(1|a,{destroy:void 0},s,c===void 0?null:c)}function Tf(i,a,s,c){var h=Cn();c=c===void 0?null:c;var d=h.memoizedState.inst;tn!==null&&c!==null&&Cp(c,tn.memoizedState.deps)?h.memoizedState=Qo(a,d,s,c):(_e.flags|=i,h.memoizedState=Qo(1|a,d,s,c))}function t2(i,a){bf(8390656,8,i,a)}function zp(i,a){Tf(2048,8,i,a)}function vT(i){_e.flags|=4;var a=_e.updateQueue;if(a===null)a=Sf(),_e.updateQueue=a,a.events=[i];else{var s=a.events;s===null?a.events=[i]:s.push(i)}}function e2(i){var a=Cn().memoizedState;return vT({ref:a,nextImpl:i}),function(){if((Xe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function n2(i,a){return Tf(4,2,i,a)}function i2(i,a){return Tf(4,4,i,a)}function a2(i,a){if(typeof a=="function"){i=i();var s=a(i);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return i=i(),a.current=i,function(){a.current=null}}function r2(i,a,s){s=s!=null?s.concat([i]):null,Tf(4,4,a2.bind(null,a,i),s)}function Gp(){}function s2(i,a){var s=Cn();a=a===void 0?null:a;var c=s.memoizedState;return a!==null&&Cp(a,c[1])?c[0]:(s.memoizedState=[i,a],i)}function o2(i,a){var s=Cn();a=a===void 0?null:a;var c=s.memoizedState;if(a!==null&&Cp(a,c[1]))return c[0];if(c=i(),to){Ft(!0);try{i()}finally{Ft(!1)}}return s.memoizedState=[c,a],c}function Hp(i,a,s){return s===void 0||(gr&1073741824)!==0&&(Re&261930)===0?i.memoizedState=a:(i.memoizedState=s,i=l3(),_e.lanes|=i,os|=i,s)}function l2(i,a,s,c){return Bi(s,a)?s:jo.current!==null?(i=Hp(i,s,c),Bi(i,a)||(Fn=!0),i):(gr&42)===0||(gr&1073741824)!==0&&(Re&261930)===0?(Fn=!0,i.memoizedState=s):(i=l3(),_e.lanes|=i,os|=i,a)}function c2(i,a,s,c,h){var d=z.p;z.p=d!==0&&8>d?d:8;var y=B.T,A={};B.T=A,Xp(i,!1,a,s);try{var G=h(),et=B.S;if(et!==null&&et(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=dT(G,c);Hc(i,a,dt,Xi(i))}else Hc(i,a,c,Xi(i))}catch(gt){Hc(i,a,{then:function(){},status:"rejected",reason:gt},Xi())}finally{z.p=d,y!==null&&A.types!==null&&(y.types=A.types),B.T=y}}function xT(){}function Vp(i,a,s,c){if(i.tag!==5)throw Error(r(476));var h=u2(i).queue;c2(i,h,a,tt,s===null?xT:function(){return f2(i),s(c)})}function u2(i){var a=i.memoizedState;if(a!==null)return a;a={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:tt},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:s},next:null},i.memoizedState=a,i=i.alternate,i!==null&&(i.memoizedState=a),a}function f2(i){var a=u2(i);a.next===null&&(a=i.alternate.memoizedState),Hc(i,a.next.queue,{},Xi())}function kp(){return si(au)}function h2(){return Cn().memoizedState}function d2(){return Cn().memoizedState}function yT(i){for(var a=i.return;a!==null;){switch(a.tag){case 24:case 3:var s=Xi();i=es(s);var c=ns(a,i,s);c!==null&&(Di(c,a,s),Fc(c,a,s)),a={cache:vp()},i.payload=a;return}a=a.return}}function ST(i,a,s){var c=Xi();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Af(i)?m2(a,s):(s=op(i,a,s,c),s!==null&&(Di(s,i,c),g2(s,a,c)))}function p2(i,a,s){var c=Xi();Hc(i,a,s,c)}function Hc(i,a,s,c){var h={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Af(i))m2(a,h);else{var d=i.alternate;if(i.lanes===0&&(d===null||d.lanes===0)&&(d=a.lastRenderedReducer,d!==null))try{var y=a.lastRenderedState,A=d(y,s);if(h.hasEagerState=!0,h.eagerState=A,Bi(A,y))return sf(i,a,h,0),rn===null&&rf(),!1}catch{}finally{}if(s=op(i,a,h,c),s!==null)return Di(s,i,c),g2(s,a,c),!0}return!1}function Xp(i,a,s,c){if(c={lane:2,revertLane:Mm(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Af(i)){if(a)throw Error(r(479))}else a=op(i,s,c,2),a!==null&&Di(a,i,2)}function Af(i){var a=i.alternate;return i===_e||a!==null&&a===_e}function m2(i,a){Zo=xf=!0;var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}function g2(i,a,s){if((s&4194048)!==0){var c=a.lanes;c&=i.pendingLanes,s|=c,a.lanes=s,gc(i,s)}}var Vc={readContext:si,use:Mf,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useLayoutEffect:Mn,useInsertionEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useSyncExternalStore:Mn,useId:Mn,useHostTransitionStatus:Mn,useFormState:Mn,useActionState:Mn,useOptimistic:Mn,useMemoCache:Mn,useCacheRefresh:Mn};Vc.useEffectEvent=Mn;var _2={readContext:si,use:Mf,useCallback:function(i,a){return vi().memoizedState=[i,a===void 0?null:a],i},useContext:si,useEffect:t2,useImperativeHandle:function(i,a,s){s=s!=null?s.concat([i]):null,bf(4194308,4,a2.bind(null,a,i),s)},useLayoutEffect:function(i,a){return bf(4194308,4,i,a)},useInsertionEffect:function(i,a){bf(4,2,i,a)},useMemo:function(i,a){var s=vi();a=a===void 0?null:a;var c=i();if(to){Ft(!0);try{i()}finally{Ft(!1)}}return s.memoizedState=[c,a],c},useReducer:function(i,a,s){var c=vi();if(s!==void 0){var h=s(a);if(to){Ft(!0);try{s(a)}finally{Ft(!1)}}}else h=a;return c.memoizedState=c.baseState=h,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:h},c.queue=i,i=i.dispatch=ST.bind(null,_e,i),[c.memoizedState,i]},useRef:function(i){var a=vi();return i={current:i},a.memoizedState=i},useState:function(i){i=Ip(i);var a=i.queue,s=p2.bind(null,_e,a);return a.dispatch=s,[i.memoizedState,s]},useDebugValue:Gp,useDeferredValue:function(i,a){var s=vi();return Hp(s,i,a)},useTransition:function(){var i=Ip(!1);return i=c2.bind(null,_e,i.queue,!0,!1),vi().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,a,s){var c=_e,h=vi();if(Ue){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),rn===null)throw Error(r(349));(Re&127)!==0||Bv(c,a,s)}h.memoizedState=s;var d={value:s,getSnapshot:a};return h.queue=d,t2(Gv.bind(null,c,d,i),[i]),c.flags|=2048,Qo(9,{destroy:void 0},zv.bind(null,c,d,s,a),null),s},useId:function(){var i=vi(),a=rn.identifierPrefix;if(Ue){var s=qa,c=Wa;s=(c&~(1<<32-Ot(c)-1)).toString(32)+s,a="_"+a+"R_"+s,s=yf++,0<s&&(a+="H"+s.toString(32)),a+="_"}else s=pT++,a="_"+a+"r_"+s.toString(32)+"_";return i.memoizedState=a},useHostTransitionStatus:kp,useFormState:Zv,useActionState:Zv,useOptimistic:function(i){var a=vi();a.memoizedState=a.baseState=i;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=Xp.bind(null,_e,!0,s),s.dispatch=a,[i,a]},useMemoCache:Op,useCacheRefresh:function(){return vi().memoizedState=yT.bind(null,_e)},useEffectEvent:function(i){var a=vi(),s={impl:i};return a.memoizedState=s,function(){if((Xe&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Wp={readContext:si,use:Mf,useCallback:s2,useContext:si,useEffect:zp,useImperativeHandle:r2,useInsertionEffect:n2,useLayoutEffect:i2,useMemo:o2,useReducer:Ef,useRef:$v,useState:function(){return Ef(_r)},useDebugValue:Gp,useDeferredValue:function(i,a){var s=Cn();return l2(s,tn.memoizedState,i,a)},useTransition:function(){var i=Ef(_r)[0],a=Cn().memoizedState;return[typeof i=="boolean"?i:Gc(i),a]},useSyncExternalStore:Iv,useId:h2,useHostTransitionStatus:kp,useFormState:Kv,useActionState:Kv,useOptimistic:function(i,a){var s=Cn();return kv(s,tn,i,a)},useMemoCache:Op,useCacheRefresh:d2};Wp.useEffectEvent=e2;var v2={readContext:si,use:Mf,useCallback:s2,useContext:si,useEffect:zp,useImperativeHandle:r2,useInsertionEffect:n2,useLayoutEffect:i2,useMemo:o2,useReducer:Fp,useRef:$v,useState:function(){return Fp(_r)},useDebugValue:Gp,useDeferredValue:function(i,a){var s=Cn();return tn===null?Hp(s,i,a):l2(s,tn.memoizedState,i,a)},useTransition:function(){var i=Fp(_r)[0],a=Cn().memoizedState;return[typeof i=="boolean"?i:Gc(i),a]},useSyncExternalStore:Iv,useId:h2,useHostTransitionStatus:kp,useFormState:Jv,useActionState:Jv,useOptimistic:function(i,a){var s=Cn();return tn!==null?kv(s,tn,i,a):(s.baseState=i,[i,s.queue.dispatch])},useMemoCache:Op,useCacheRefresh:d2};v2.useEffectEvent=e2;function qp(i,a,s,c){a=i.memoizedState,s=s(c,a),s=s==null?a:_({},a,s),i.memoizedState=s,i.lanes===0&&(i.updateQueue.baseState=s)}var Yp={enqueueSetState:function(i,a,s){i=i._reactInternals;var c=Xi(),h=es(c);h.payload=a,s!=null&&(h.callback=s),a=ns(i,h,c),a!==null&&(Di(a,i,c),Fc(a,i,c))},enqueueReplaceState:function(i,a,s){i=i._reactInternals;var c=Xi(),h=es(c);h.tag=1,h.payload=a,s!=null&&(h.callback=s),a=ns(i,h,c),a!==null&&(Di(a,i,c),Fc(a,i,c))},enqueueForceUpdate:function(i,a){i=i._reactInternals;var s=Xi(),c=es(s);c.tag=2,a!=null&&(c.callback=a),a=ns(i,c,s),a!==null&&(Di(a,i,s),Fc(a,i,s))}};function x2(i,a,s,c,h,d,y){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,d,y):a.prototype&&a.prototype.isPureReactComponent?!Rc(s,c)||!Rc(h,d):!0}function y2(i,a,s,c){i=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,c),a.state!==i&&Yp.enqueueReplaceState(a,a.state,null)}function eo(i,a){var s=a;if("ref"in a){s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}if(i=i.defaultProps){s===a&&(s=_({},s));for(var h in i)s[h]===void 0&&(s[h]=i[h])}return s}function S2(i){af(i)}function M2(i){console.error(i)}function E2(i){af(i)}function wf(i,a){try{var s=i.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function b2(i,a,s){try{var c=i.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function jp(i,a,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){wf(i,a)},s}function T2(i){return i=es(i),i.tag=3,i}function A2(i,a,s,c){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var d=c.value;i.payload=function(){return h(d)},i.callback=function(){b2(a,s,c)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){b2(a,s,c),typeof h!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function MT(i,a,s,c,h){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=s.alternate,a!==null&&ko(a,s,h,!0),s=Gi.current,s!==null){switch(s.tag){case 31:case 13:return fa===null?zf():s.alternate===null&&En===0&&(En=3),s.flags&=-257,s.flags|=65536,s.lanes=h,c===pf?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([c]):a.add(c),xm(i,c,h)),!1;case 22:return s.flags|=65536,c===pf?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([c]):s.add(c)),xm(i,c,h)),!1}throw Error(r(435,s.tag))}return xm(i,c,h),zf(),!1}if(Ue)return a=Gi.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,c!==dp&&(i=Error(r(422),{cause:c}),Uc(oa(i,s)))):(c!==dp&&(a=Error(r(423),{cause:c}),Uc(oa(a,s))),i=i.current.alternate,i.flags|=65536,h&=-h,i.lanes|=h,c=oa(c,s),h=jp(i.stateNode,c,h),bp(i,h),En!==4&&(En=2)),!1;var d=Error(r(520),{cause:c});if(d=oa(d,s),Kc===null?Kc=[d]:Kc.push(d),En!==4&&(En=2),a===null)return!0;c=oa(c,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,i=h&-h,s.lanes|=i,i=jp(s.stateNode,c,i),bp(s,i),!1;case 1:if(a=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ls===null||!ls.has(d))))return s.flags|=65536,h&=-h,s.lanes|=h,h=T2(h),A2(h,i,s,c),bp(s,h),!1}s=s.return}while(s!==null);return!1}var Zp=Error(r(461)),Fn=!1;function oi(i,a,s,c){a.child=i===null?Dv(a,null,s,c):$s(a,i.child,s,c)}function w2(i,a,s,c,h){s=s.render;var d=a.ref;if("ref"in c){var y={};for(var A in c)A!=="ref"&&(y[A]=c[A])}else y=c;return Zs(a),c=Dp(i,a,s,y,d,h),A=Up(),i!==null&&!Fn?(Lp(i,a,h),vr(i,a,h)):(Ue&&A&&fp(a),a.flags|=1,oi(i,a,c,h),a.child)}function R2(i,a,s,c,h){if(i===null){var d=s.type;return typeof d=="function"&&!lp(d)&&d.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=d,C2(i,a,d,c,h)):(i=lf(s.type,null,c,a,a.mode,h),i.ref=a.ref,i.return=a,a.child=i)}if(d=i.child,!im(i,h)){var y=d.memoizedProps;if(s=s.compare,s=s!==null?s:Rc,s(y,c)&&i.ref===a.ref)return vr(i,a,h)}return a.flags|=1,i=hr(d,c),i.ref=a.ref,i.return=a,a.child=i}function C2(i,a,s,c,h){if(i!==null){var d=i.memoizedProps;if(Rc(d,c)&&i.ref===a.ref)if(Fn=!1,a.pendingProps=c=d,im(i,h))(i.flags&131072)!==0&&(Fn=!0);else return a.lanes=i.lanes,vr(i,a,h)}return Kp(i,a,s,c,h)}function D2(i,a,s,c){var h=c.children,d=i!==null?i.memoizedState:null;if(i===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((a.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,i!==null){for(c=a.child=i.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;c=h&~d}else c=0,a.child=null;return U2(i,a,d,s,c)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},i!==null&&hf(a,d!==null?d.cachePool:null),d!==null?Nv(a,d):Ap(),Ov(a);else return c=a.lanes=536870912,U2(i,a,d!==null?d.baseLanes|s:s,s,c)}else d!==null?(hf(a,d.cachePool),Nv(a,d),as(),a.memoizedState=null):(i!==null&&hf(a,null),Ap(),as());return oi(i,a,h,s),a.child}function kc(i,a){return i!==null&&i.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function U2(i,a,s,c,h){var d=yp();return d=d===null?null:{parent:On._currentValue,pool:d},a.memoizedState={baseLanes:s,cachePool:d},i!==null&&hf(a,null),Ap(),Ov(a),i!==null&&ko(i,a,c,!0),a.childLanes=h,null}function Rf(i,a){return a=Df({mode:a.mode,children:a.children},i.mode),a.ref=i.ref,i.child=a,a.return=i,a}function L2(i,a,s){return $s(a,i.child,null,s),i=Rf(a,a.pendingProps),i.flags|=2,Hi(a),a.memoizedState=null,i}function ET(i,a,s){var c=a.pendingProps,h=(a.flags&128)!==0;if(a.flags&=-129,i===null){if(Ue){if(c.mode==="hidden")return i=Rf(a,c),a.lanes=536870912,kc(null,i);if(Rp(a),(i=hn)?(i=X3(i,ua),i=i!==null&&i.data==="&"?i:null,i!==null&&(a.memoizedState={dehydrated:i,treeContext:Kr!==null?{id:Wa,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},s=mv(i),s.return=a,a.child=s,ri=a,hn=null)):i=null,i===null)throw Jr(a);return a.lanes=536870912,null}return Rf(a,c)}var d=i.memoizedState;if(d!==null){var y=d.dehydrated;if(Rp(a),h)if(a.flags&256)a.flags&=-257,a=L2(i,a,s);else if(a.memoizedState!==null)a.child=i.child,a.flags|=128,a=null;else throw Error(r(558));else if(Fn||ko(i,a,s,!1),h=(s&i.childLanes)!==0,Fn||h){if(c=rn,c!==null&&(y=Ro(c,s),y!==0&&y!==d.retryLane))throw d.retryLane=y,Ws(i,y),Di(c,i,y),Zp;zf(),a=L2(i,a,s)}else i=d.treeContext,hn=ha(y.nextSibling),ri=a,Ue=!0,Qr=null,ua=!1,i!==null&&vv(a,i),a=Rf(a,c),a.flags|=4096;return a}return i=hr(i.child,{mode:c.mode,children:c.children}),i.ref=a.ref,a.child=i,i.return=a,i}function Cf(i,a){var s=a.ref;if(s===null)i!==null&&i.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(i===null||i.ref!==s)&&(a.flags|=4194816)}}function Kp(i,a,s,c,h){return Zs(a),s=Dp(i,a,s,c,void 0,h),c=Up(),i!==null&&!Fn?(Lp(i,a,h),vr(i,a,h)):(Ue&&c&&fp(a),a.flags|=1,oi(i,a,s,h),a.child)}function N2(i,a,s,c,h,d){return Zs(a),a.updateQueue=null,s=Fv(a,c,s,h),Pv(i),c=Up(),i!==null&&!Fn?(Lp(i,a,d),vr(i,a,d)):(Ue&&c&&fp(a),a.flags|=1,oi(i,a,s,d),a.child)}function O2(i,a,s,c,h){if(Zs(a),a.stateNode===null){var d=zo,y=s.contextType;typeof y=="object"&&y!==null&&(d=si(y)),d=new s(c,d),a.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Yp,a.stateNode=d,d._reactInternals=a,d=a.stateNode,d.props=c,d.state=a.memoizedState,d.refs={},Mp(a),y=s.contextType,d.context=typeof y=="object"&&y!==null?si(y):zo,d.state=a.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(qp(a,s,y,c),d.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Yp.enqueueReplaceState(d,d.state,null),Bc(a,c,d,h),Ic(),d.state=a.memoizedState),typeof d.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(i===null){d=a.stateNode;var A=a.memoizedProps,G=eo(s,A);d.props=G;var et=d.context,dt=s.contextType;y=zo,typeof dt=="object"&&dt!==null&&(y=si(dt));var gt=s.getDerivedStateFromProps;dt=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=a.pendingProps!==A,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||et!==y)&&y2(a,d,c,y),ts=!1;var rt=a.memoizedState;d.state=rt,Bc(a,c,d,h),Ic(),et=a.memoizedState,A||rt!==et||ts?(typeof gt=="function"&&(qp(a,s,gt,c),et=a.memoizedState),(G=ts||x2(a,s,G,c,rt,et,y))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(a.flags|=4194308)):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=et),d.props=c,d.state=et,d.context=y,c=G):(typeof d.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{d=a.stateNode,Ep(i,a),y=a.memoizedProps,dt=eo(s,y),d.props=dt,gt=a.pendingProps,rt=d.context,et=s.contextType,G=zo,typeof et=="object"&&et!==null&&(G=si(et)),A=s.getDerivedStateFromProps,(et=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==gt||rt!==G)&&y2(a,d,c,G),ts=!1,rt=a.memoizedState,d.state=rt,Bc(a,c,d,h),Ic();var lt=a.memoizedState;y!==gt||rt!==lt||ts||i!==null&&i.dependencies!==null&&uf(i.dependencies)?(typeof A=="function"&&(qp(a,s,A,c),lt=a.memoizedState),(dt=ts||x2(a,s,dt,c,rt,lt,G)||i!==null&&i.dependencies!==null&&uf(i.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(c,lt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(c,lt,G)),typeof d.componentDidUpdate=="function"&&(a.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===i.memoizedProps&&rt===i.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&rt===i.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=lt),d.props=c,d.state=lt,d.context=G,c=dt):(typeof d.componentDidUpdate!="function"||y===i.memoizedProps&&rt===i.memoizedState||(a.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===i.memoizedProps&&rt===i.memoizedState||(a.flags|=1024),c=!1)}return d=c,Cf(i,a),c=(a.flags&128)!==0,d||c?(d=a.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:d.render(),a.flags|=1,i!==null&&c?(a.child=$s(a,i.child,null,h),a.child=$s(a,null,s,h)):oi(i,a,s,h),a.memoizedState=d.state,i=a.child):i=vr(i,a,h),i}function P2(i,a,s,c){return Ys(),a.flags|=256,oi(i,a,s,c),a.child}var Qp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jp(i){return{baseLanes:i,cachePool:bv()}}function $p(i,a,s){return i=i!==null?i.childLanes&~s:0,a&&(i|=ki),i}function F2(i,a,s){var c=a.pendingProps,h=!1,d=(a.flags&128)!==0,y;if((y=d)||(y=i!==null&&i.memoizedState===null?!1:(Rn.current&2)!==0),y&&(h=!0,a.flags&=-129),y=(a.flags&32)!==0,a.flags&=-33,i===null){if(Ue){if(h?is(a):as(),(i=hn)?(i=X3(i,ua),i=i!==null&&i.data!=="&"?i:null,i!==null&&(a.memoizedState={dehydrated:i,treeContext:Kr!==null?{id:Wa,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},s=mv(i),s.return=a,a.child=s,ri=a,hn=null)):i=null,i===null)throw Jr(a);return Pm(i)?a.lanes=32:a.lanes=536870912,null}var A=c.children;return c=c.fallback,h?(as(),h=a.mode,A=Df({mode:"hidden",children:A},h),c=qs(c,h,s,null),A.return=a,c.return=a,A.sibling=c,a.child=A,c=a.child,c.memoizedState=Jp(s),c.childLanes=$p(i,y,s),a.memoizedState=Qp,kc(null,c)):(is(a),tm(a,A))}var G=i.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)a.flags&256?(is(a),a.flags&=-257,a=em(i,a,s)):a.memoizedState!==null?(as(),a.child=i.child,a.flags|=128,a=null):(as(),A=c.fallback,h=a.mode,c=Df({mode:"visible",children:c.children},h),A=qs(A,h,s,null),A.flags|=2,c.return=a,A.return=a,c.sibling=A,a.child=c,$s(a,i.child,null,s),c=a.child,c.memoizedState=Jp(s),c.childLanes=$p(i,y,s),a.memoizedState=Qp,a=kc(null,c));else if(is(a),Pm(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var et=y.dgst;y=et,c=Error(r(419)),c.stack="",c.digest=y,Uc({value:c,source:null,stack:null}),a=em(i,a,s)}else if(Fn||ko(i,a,s,!1),y=(s&i.childLanes)!==0,Fn||y){if(y=rn,y!==null&&(c=Ro(y,s),c!==0&&c!==G.retryLane))throw G.retryLane=c,Ws(i,c),Di(y,i,c),Zp;Om(A)||zf(),a=em(i,a,s)}else Om(A)?(a.flags|=192,a.child=i.child,a=null):(i=G.treeContext,hn=ha(A.nextSibling),ri=a,Ue=!0,Qr=null,ua=!1,i!==null&&vv(a,i),a=tm(a,c.children),a.flags|=4096);return a}return h?(as(),A=c.fallback,h=a.mode,G=i.child,et=G.sibling,c=hr(G,{mode:"hidden",children:c.children}),c.subtreeFlags=G.subtreeFlags&65011712,et!==null?A=hr(et,A):(A=qs(A,h,s,null),A.flags|=2),A.return=a,c.return=a,c.sibling=A,a.child=c,kc(null,c),c=a.child,A=i.child.memoizedState,A===null?A=Jp(s):(h=A.cachePool,h!==null?(G=On._currentValue,h=h.parent!==G?{parent:G,pool:G}:h):h=bv(),A={baseLanes:A.baseLanes|s,cachePool:h}),c.memoizedState=A,c.childLanes=$p(i,y,s),a.memoizedState=Qp,kc(i.child,c)):(is(a),s=i.child,i=s.sibling,s=hr(s,{mode:"visible",children:c.children}),s.return=a,s.sibling=null,i!==null&&(y=a.deletions,y===null?(a.deletions=[i],a.flags|=16):y.push(i)),a.child=s,a.memoizedState=null,s)}function tm(i,a){return a=Df({mode:"visible",children:a},i.mode),a.return=i,i.child=a}function Df(i,a){return i=zi(22,i,null,a),i.lanes=0,i}function em(i,a,s){return $s(a,i.child,null,s),i=tm(a,a.pendingProps.children),i.flags|=2,a.memoizedState=null,i}function I2(i,a,s){i.lanes|=a;var c=i.alternate;c!==null&&(c.lanes|=a),gp(i.return,a,s)}function nm(i,a,s,c,h,d){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:h,treeForkCount:d}:(y.isBackwards=a,y.rendering=null,y.renderingStartTime=0,y.last=c,y.tail=s,y.tailMode=h,y.treeForkCount=d)}function B2(i,a,s){var c=a.pendingProps,h=c.revealOrder,d=c.tail;c=c.children;var y=Rn.current,A=(y&2)!==0;if(A?(y=y&1|2,a.flags|=128):y&=1,mt(Rn,y),oi(i,a,c,s),c=Ue?Dc:0,!A&&i!==null&&(i.flags&128)!==0)t:for(i=a.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&I2(i,s,a);else if(i.tag===19)I2(i,s,a);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break t;for(;i.sibling===null;){if(i.return===null||i.return===a)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(h){case"forwards":for(s=a.child,h=null;s!==null;)i=s.alternate,i!==null&&vf(i)===null&&(h=s),s=s.sibling;s=h,s===null?(h=a.child,a.child=null):(h=s.sibling,s.sibling=null),nm(a,!1,h,s,d,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=a.child,a.child=null;h!==null;){if(i=h.alternate,i!==null&&vf(i)===null){a.child=h;break}i=h.sibling,h.sibling=s,s=h,h=i}nm(a,!0,s,null,d,c);break;case"together":nm(a,!1,null,null,void 0,c);break;default:a.memoizedState=null}return a.child}function vr(i,a,s){if(i!==null&&(a.dependencies=i.dependencies),os|=a.lanes,(s&a.childLanes)===0)if(i!==null){if(ko(i,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(i!==null&&a.child!==i.child)throw Error(r(153));if(a.child!==null){for(i=a.child,s=hr(i,i.pendingProps),a.child=s,s.return=a;i.sibling!==null;)i=i.sibling,s=s.sibling=hr(i,i.pendingProps),s.return=a;s.sibling=null}return a.child}function im(i,a){return(i.lanes&a)!==0?!0:(i=i.dependencies,!!(i!==null&&uf(i)))}function bT(i,a,s){switch(a.tag){case 3:wt(a,a.stateNode.containerInfo),$r(a,On,i.memoizedState.cache),Ys();break;case 27:case 5:zt(a);break;case 4:wt(a,a.stateNode.containerInfo);break;case 10:$r(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Rp(a),null;break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(is(a),a.flags|=128,null):(s&a.child.childLanes)!==0?F2(i,a,s):(is(a),i=vr(i,a,s),i!==null?i.sibling:null);is(a);break;case 19:var h=(i.flags&128)!==0;if(c=(s&a.childLanes)!==0,c||(ko(i,a,s,!1),c=(s&a.childLanes)!==0),h){if(c)return B2(i,a,s);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),mt(Rn,Rn.current),c)break;return null;case 22:return a.lanes=0,D2(i,a,s,a.pendingProps);case 24:$r(a,On,i.memoizedState.cache)}return vr(i,a,s)}function z2(i,a,s){if(i!==null)if(i.memoizedProps!==a.pendingProps)Fn=!0;else{if(!im(i,s)&&(a.flags&128)===0)return Fn=!1,bT(i,a,s);Fn=(i.flags&131072)!==0}else Fn=!1,Ue&&(a.flags&1048576)!==0&&_v(a,Dc,a.index);switch(a.lanes=0,a.tag){case 16:t:{var c=a.pendingProps;if(i=Qs(a.elementType),a.type=i,typeof i=="function")lp(i)?(c=eo(i,c),a.tag=1,a=O2(null,a,i,c,s)):(a.tag=0,a=Kp(null,a,i,c,s));else{if(i!=null){var h=i.$$typeof;if(h===C){a.tag=11,a=w2(null,a,i,c,s);break t}else if(h===O){a.tag=14,a=R2(null,a,i,c,s);break t}}throw a=ct(i)||i,Error(r(306,a,""))}}return a;case 0:return Kp(i,a,a.type,a.pendingProps,s);case 1:return c=a.type,h=eo(c,a.pendingProps),O2(i,a,c,h,s);case 3:t:{if(wt(a,a.stateNode.containerInfo),i===null)throw Error(r(387));c=a.pendingProps;var d=a.memoizedState;h=d.element,Ep(i,a),Bc(a,c,null,s);var y=a.memoizedState;if(c=y.cache,$r(a,On,c),c!==d.cache&&_p(a,[On],s,!0),Ic(),c=y.element,d.isDehydrated)if(d={element:c,isDehydrated:!1,cache:y.cache},a.updateQueue.baseState=d,a.memoizedState=d,a.flags&256){a=P2(i,a,c,s);break t}else if(c!==h){h=oa(Error(r(424)),a),Uc(h),a=P2(i,a,c,s);break t}else{switch(i=a.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(hn=ha(i.firstChild),ri=a,Ue=!0,Qr=null,ua=!0,s=Dv(a,null,c,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ys(),c===h){a=vr(i,a,s);break t}oi(i,a,c,s)}a=a.child}return a;case 26:return Cf(i,a),i===null?(s=K3(a.type,null,a.pendingProps,null))?a.memoizedState=s:Ue||(s=a.type,i=a.pendingProps,c=qf(nt.current).createElement(s),c[Nn]=a,c[$n]=i,li(c,s,i),w(c),a.stateNode=c):a.memoizedState=K3(a.type,i.memoizedProps,a.pendingProps,i.memoizedState),null;case 27:return zt(a),i===null&&Ue&&(c=a.stateNode=Y3(a.type,a.pendingProps,nt.current),ri=a,ua=!0,h=hn,hs(a.type)?(Fm=h,hn=ha(c.firstChild)):hn=h),oi(i,a,a.pendingProps.children,s),Cf(i,a),i===null&&(a.flags|=4194304),a.child;case 5:return i===null&&Ue&&((h=c=hn)&&(c=tA(c,a.type,a.pendingProps,ua),c!==null?(a.stateNode=c,ri=a,hn=ha(c.firstChild),ua=!1,h=!0):h=!1),h||Jr(a)),zt(a),h=a.type,d=a.pendingProps,y=i!==null?i.memoizedProps:null,c=d.children,Um(h,d)?c=null:y!==null&&Um(h,y)&&(a.flags|=32),a.memoizedState!==null&&(h=Dp(i,a,mT,null,null,s),au._currentValue=h),Cf(i,a),oi(i,a,c,s),a.child;case 6:return i===null&&Ue&&((i=s=hn)&&(s=eA(s,a.pendingProps,ua),s!==null?(a.stateNode=s,ri=a,hn=null,i=!0):i=!1),i||Jr(a)),null;case 13:return F2(i,a,s);case 4:return wt(a,a.stateNode.containerInfo),c=a.pendingProps,i===null?a.child=$s(a,null,c,s):oi(i,a,c,s),a.child;case 11:return w2(i,a,a.type,a.pendingProps,s);case 7:return oi(i,a,a.pendingProps,s),a.child;case 8:return oi(i,a,a.pendingProps.children,s),a.child;case 12:return oi(i,a,a.pendingProps.children,s),a.child;case 10:return c=a.pendingProps,$r(a,a.type,c.value),oi(i,a,c.children,s),a.child;case 9:return h=a.type._context,c=a.pendingProps.children,Zs(a),h=si(h),c=c(h),a.flags|=1,oi(i,a,c,s),a.child;case 14:return R2(i,a,a.type,a.pendingProps,s);case 15:return C2(i,a,a.type,a.pendingProps,s);case 19:return B2(i,a,s);case 31:return ET(i,a,s);case 22:return D2(i,a,s,a.pendingProps);case 24:return Zs(a),c=si(On),i===null?(h=yp(),h===null&&(h=rn,d=vp(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=s),h=d),a.memoizedState={parent:c,cache:h},Mp(a),$r(a,On,h)):((i.lanes&s)!==0&&(Ep(i,a),Bc(a,null,null,s),Ic()),h=i.memoizedState,d=a.memoizedState,h.parent!==c?(h={parent:c,cache:c},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),$r(a,On,c)):(c=d.cache,$r(a,On,c),c!==h.cache&&_p(a,[On],s,!0))),oi(i,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function xr(i){i.flags|=4}function am(i,a,s,c,h){if((a=(i.mode&32)!==0)&&(a=!1),a){if(i.flags|=16777216,(h&335544128)===h)if(i.stateNode.complete)i.flags|=8192;else if(h3())i.flags|=8192;else throw Js=pf,Sp}else i.flags&=-16777217}function G2(i,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!ex(a))if(h3())i.flags|=8192;else throw Js=pf,Sp}function Uf(i,a){a!==null&&(i.flags|=4),i.flags&16384&&(a=i.tag!==22?Ze():536870912,i.lanes|=a,el|=a)}function Xc(i,a){if(!Ue)switch(i.tailMode){case"hidden":a=i.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?i.tail=null:s.sibling=null;break;case"collapsed":s=i.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?a||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function dn(i){var a=i.alternate!==null&&i.alternate.child===i.child,s=0,c=0;if(a)for(var h=i.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)s|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=c,i.childLanes=s,a}function TT(i,a,s){var c=a.pendingProps;switch(hp(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(a),null;case 1:return dn(a),null;case 3:return s=a.stateNode,c=null,i!==null&&(c=i.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),mr(On),Vt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(i===null||i.child===null)&&(Vo(a)?xr(a):i===null||i.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,pp())),dn(a),null;case 26:var h=a.type,d=a.memoizedState;return i===null?(xr(a),d!==null?(dn(a),G2(a,d)):(dn(a),am(a,h,null,c,s))):d?d!==i.memoizedState?(xr(a),dn(a),G2(a,d)):(dn(a),a.flags&=-16777217):(i=i.memoizedProps,i!==c&&xr(a),dn(a),am(a,h,i,c,s)),null;case 27:if(Se(a),s=nt.current,h=a.type,i!==null&&a.stateNode!=null)i.memoizedProps!==c&&xr(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return dn(a),null}i=Et.current,Vo(a)?xv(a):(i=Y3(h,c,s),a.stateNode=i,xr(a))}return dn(a),null;case 5:if(Se(a),h=a.type,i!==null&&a.stateNode!=null)i.memoizedProps!==c&&xr(a);else{if(!c){if(a.stateNode===null)throw Error(r(166));return dn(a),null}if(d=Et.current,Vo(a))xv(a);else{var y=qf(nt.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof c.is=="string"?y.createElement("select",{is:c.is}):y.createElement("select"),c.multiple?d.multiple=!0:c.size&&(d.size=c.size);break;default:d=typeof c.is=="string"?y.createElement(h,{is:c.is}):y.createElement(h)}}d[Nn]=a,d[$n]=c;t:for(y=a.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===a)break t;for(;y.sibling===null;){if(y.return===null||y.return===a)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}a.stateNode=d;t:switch(li(d,h,c),h){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}c&&xr(a)}}return dn(a),am(a,a.type,i===null?null:i.memoizedProps,a.pendingProps,s),null;case 6:if(i&&a.stateNode!=null)i.memoizedProps!==c&&xr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(r(166));if(i=nt.current,Vo(a)){if(i=a.stateNode,s=a.memoizedProps,c=null,h=ri,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}i[Nn]=a,i=!!(i.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||F3(i.nodeValue,s)),i||Jr(a,!0)}else i=qf(i).createTextNode(c),i[Nn]=a,a.stateNode=i}return dn(a),null;case 31:if(s=a.memoizedState,i===null||i.memoizedState!==null){if(c=Vo(a),s!==null){if(i===null){if(!c)throw Error(r(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(557));i[Nn]=a}else Ys(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dn(a),i=!1}else s=pp(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=s),i=!0;if(!i)return a.flags&256?(Hi(a),a):(Hi(a),null);if((a.flags&128)!==0)throw Error(r(558))}return dn(a),null;case 13:if(c=a.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(h=Vo(a),c!==null&&c.dehydrated!==null){if(i===null){if(!h)throw Error(r(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Nn]=a}else Ys(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dn(a),h=!1}else h=pp(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(Hi(a),a):(Hi(a),null)}return Hi(a),(a.flags&128)!==0?(a.lanes=s,a):(s=c!==null,i=i!==null&&i.memoizedState!==null,s&&(c=a.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool),d=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(d=c.memoizedState.cachePool.pool),d!==h&&(c.flags|=2048)),s!==i&&s&&(a.child.flags|=8192),Uf(a,a.updateQueue),dn(a),null);case 4:return Vt(),i===null&&Am(a.stateNode.containerInfo),dn(a),null;case 10:return mr(a.type),dn(a),null;case 19:if(it(Rn),c=a.memoizedState,c===null)return dn(a),null;if(h=(a.flags&128)!==0,d=c.rendering,d===null)if(h)Xc(c,!1);else{if(En!==0||i!==null&&(i.flags&128)!==0)for(i=a.child;i!==null;){if(d=vf(i),d!==null){for(a.flags|=128,Xc(c,!1),i=d.updateQueue,a.updateQueue=i,Uf(a,i),a.subtreeFlags=0,i=s,s=a.child;s!==null;)pv(s,i),s=s.sibling;return mt(Rn,Rn.current&1|2),Ue&&dr(a,c.treeForkCount),a.child}i=i.sibling}c.tail!==null&&E()>Ff&&(a.flags|=128,h=!0,Xc(c,!1),a.lanes=4194304)}else{if(!h)if(i=vf(d),i!==null){if(a.flags|=128,h=!0,i=i.updateQueue,a.updateQueue=i,Uf(a,i),Xc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Ue)return dn(a),null}else 2*E()-c.renderingStartTime>Ff&&s!==536870912&&(a.flags|=128,h=!0,Xc(c,!1),a.lanes=4194304);c.isBackwards?(d.sibling=a.child,a.child=d):(i=c.last,i!==null?i.sibling=d:a.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=E(),i.sibling=null,s=Rn.current,mt(Rn,h?s&1|2:s&1),Ue&&dr(a,c.treeForkCount),i):(dn(a),null);case 22:case 23:return Hi(a),wp(),c=a.memoizedState!==null,i!==null?i.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(s&536870912)!==0&&(a.flags&128)===0&&(dn(a),a.subtreeFlags&6&&(a.flags|=8192)):dn(a),s=a.updateQueue,s!==null&&Uf(a,s.retryQueue),s=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==s&&(a.flags|=2048),i!==null&&it(Ks),null;case 24:return s=null,i!==null&&(s=i.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),mr(On),dn(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function AT(i,a){switch(hp(a),a.tag){case 1:return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 3:return mr(On),Vt(),i=a.flags,(i&65536)!==0&&(i&128)===0?(a.flags=i&-65537|128,a):null;case 26:case 27:case 5:return Se(a),null;case 31:if(a.memoizedState!==null){if(Hi(a),a.alternate===null)throw Error(r(340));Ys()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 13:if(Hi(a),i=a.memoizedState,i!==null&&i.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Ys()}return i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 19:return it(Rn),null;case 4:return Vt(),null;case 10:return mr(a.type),null;case 22:case 23:return Hi(a),wp(),i!==null&&it(Ks),i=a.flags,i&65536?(a.flags=i&-65537|128,a):null;case 24:return mr(On),null;case 25:return null;default:return null}}function H2(i,a){switch(hp(a),a.tag){case 3:mr(On),Vt();break;case 26:case 27:case 5:Se(a);break;case 4:Vt();break;case 31:a.memoizedState!==null&&Hi(a);break;case 13:Hi(a);break;case 19:it(Rn);break;case 10:mr(a.type);break;case 22:case 23:Hi(a),wp(),i!==null&&it(Ks);break;case 24:mr(On)}}function Wc(i,a){try{var s=a.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&i)===i){c=void 0;var d=s.create,y=s.inst;c=d(),y.destroy=c}s=s.next}while(s!==h)}}catch(A){Je(a,a.return,A)}}function rs(i,a,s){try{var c=a.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var d=h.next;c=d;do{if((c.tag&i)===i){var y=c.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,h=a;var G=s,et=A;try{et()}catch(dt){Je(h,G,dt)}}}c=c.next}while(c!==d)}}catch(dt){Je(a,a.return,dt)}}function V2(i){var a=i.updateQueue;if(a!==null){var s=i.stateNode;try{Lv(a,s)}catch(c){Je(i,i.return,c)}}}function k2(i,a,s){s.props=eo(i.type,i.memoizedProps),s.state=i.memoizedState;try{s.componentWillUnmount()}catch(c){Je(i,a,c)}}function qc(i,a){try{var s=i.ref;if(s!==null){switch(i.tag){case 26:case 27:case 5:var c=i.stateNode;break;case 30:c=i.stateNode;break;default:c=i.stateNode}typeof s=="function"?i.refCleanup=s(c):s.current=c}}catch(h){Je(i,a,h)}}function Ya(i,a){var s=i.ref,c=i.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(h){Je(i,a,h)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Je(i,a,h)}else s.current=null}function X2(i){var a=i.type,s=i.memoizedProps,c=i.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break t;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(h){Je(i,i.return,h)}}function rm(i,a,s){try{var c=i.stateNode;jT(c,i.type,s,a),c[$n]=a}catch(h){Je(i,i.return,h)}}function W2(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&hs(i.type)||i.tag===4}function sm(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||W2(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&hs(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function om(i,a,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(i,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(i),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=ur));else if(c!==4&&(c===27&&hs(i.type)&&(s=i.stateNode,a=null),i=i.child,i!==null))for(om(i,a,s),i=i.sibling;i!==null;)om(i,a,s),i=i.sibling}function Lf(i,a,s){var c=i.tag;if(c===5||c===6)i=i.stateNode,a?s.insertBefore(i,a):s.appendChild(i);else if(c!==4&&(c===27&&hs(i.type)&&(s=i.stateNode),i=i.child,i!==null))for(Lf(i,a,s),i=i.sibling;i!==null;)Lf(i,a,s),i=i.sibling}function q2(i){var a=i.stateNode,s=i.memoizedProps;try{for(var c=i.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);li(a,c,s),a[Nn]=i,a[$n]=s}catch(d){Je(i,i.return,d)}}var yr=!1,In=!1,lm=!1,Y2=typeof WeakSet=="function"?WeakSet:Set,Zn=null;function wT(i,a){if(i=i.containerInfo,Cm=$f,i=rv(i),ep(i)){if("selectionStart"in i)var s={start:i.selectionStart,end:i.selectionEnd};else t:{s=(s=i.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var h=c.anchorOffset,d=c.focusNode;c=c.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var y=0,A=-1,G=-1,et=0,dt=0,gt=i,rt=null;e:for(;;){for(var lt;gt!==s||h!==0&&gt.nodeType!==3||(A=y+h),gt!==d||c!==0&&gt.nodeType!==3||(G=y+c),gt.nodeType===3&&(y+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)rt=gt,gt=lt;for(;;){if(gt===i)break e;if(rt===s&&++et===h&&(A=y),rt===d&&++dt===c&&(G=y),(lt=gt.nextSibling)!==null)break;gt=rt,rt=gt.parentNode}gt=lt}s=A===-1||G===-1?null:{start:A,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Dm={focusedElem:i,selectionRange:s},$f=!1,Zn=a;Zn!==null;)if(a=Zn,i=a.child,(a.subtreeFlags&1028)!==0&&i!==null)i.return=a,Zn=i;else for(;Zn!==null;){switch(a=Zn,d=a.alternate,i=a.flags,a.tag){case 0:if((i&4)!==0&&(i=a.updateQueue,i=i!==null?i.events:null,i!==null))for(s=0;s<i.length;s++)h=i[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&d!==null){i=void 0,s=a,h=d.memoizedProps,d=d.memoizedState,c=s.stateNode;try{var Wt=eo(s.type,h);i=c.getSnapshotBeforeUpdate(Wt,d),c.__reactInternalSnapshotBeforeUpdate=i}catch(ce){Je(s,s.return,ce)}}break;case 3:if((i&1024)!==0){if(i=a.stateNode.containerInfo,s=i.nodeType,s===9)Nm(i);else if(s===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Nm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(r(163))}if(i=a.sibling,i!==null){i.return=a.return,Zn=i;break}Zn=a.return}}function j2(i,a,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:Mr(i,s),c&4&&Wc(5,s);break;case 1:if(Mr(i,s),c&4)if(i=s.stateNode,a===null)try{i.componentDidMount()}catch(y){Je(s,s.return,y)}else{var h=eo(s.type,a.memoizedProps);a=a.memoizedState;try{i.componentDidUpdate(h,a,i.__reactInternalSnapshotBeforeUpdate)}catch(y){Je(s,s.return,y)}}c&64&&V2(s),c&512&&qc(s,s.return);break;case 3:if(Mr(i,s),c&64&&(i=s.updateQueue,i!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{Lv(i,a)}catch(y){Je(s,s.return,y)}}break;case 27:a===null&&c&4&&q2(s);case 26:case 5:Mr(i,s),a===null&&c&4&&X2(s),c&512&&qc(s,s.return);break;case 12:Mr(i,s);break;case 31:Mr(i,s),c&4&&Q2(i,s);break;case 13:Mr(i,s),c&4&&J2(i,s),c&64&&(i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(s=FT.bind(null,s),nA(i,s))));break;case 22:if(c=s.memoizedState!==null||yr,!c){a=a!==null&&a.memoizedState!==null||In,h=yr;var d=In;yr=c,(In=a)&&!d?Er(i,s,(s.subtreeFlags&8772)!==0):Mr(i,s),yr=h,In=d}break;case 30:break;default:Mr(i,s)}}function Z2(i){var a=i.alternate;a!==null&&(i.alternate=null,Z2(a)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(a=i.stateNode,a!==null&&yc(a)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var _n=null,Ai=!1;function Sr(i,a,s){for(s=s.child;s!==null;)K2(i,a,s),s=s.sibling}function K2(i,a,s){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Mt,s)}catch{}switch(s.tag){case 26:In||Ya(s,a),Sr(i,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:In||Ya(s,a);var c=_n,h=Ai;hs(s.type)&&(_n=s.stateNode,Ai=!1),Sr(i,a,s),eu(s.stateNode),_n=c,Ai=h;break;case 5:In||Ya(s,a);case 6:if(c=_n,h=Ai,_n=null,Sr(i,a,s),_n=c,Ai=h,_n!==null)if(Ai)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(s.stateNode)}catch(d){Je(s,a,d)}else try{_n.removeChild(s.stateNode)}catch(d){Je(s,a,d)}break;case 18:_n!==null&&(Ai?(i=_n,V3(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,s.stateNode),cl(i)):V3(_n,s.stateNode));break;case 4:c=_n,h=Ai,_n=s.stateNode.containerInfo,Ai=!0,Sr(i,a,s),_n=c,Ai=h;break;case 0:case 11:case 14:case 15:rs(2,s,a),In||rs(4,s,a),Sr(i,a,s);break;case 1:In||(Ya(s,a),c=s.stateNode,typeof c.componentWillUnmount=="function"&&k2(s,a,c)),Sr(i,a,s);break;case 21:Sr(i,a,s);break;case 22:In=(c=In)||s.memoizedState!==null,Sr(i,a,s),In=c;break;default:Sr(i,a,s)}}function Q2(i,a){if(a.memoizedState===null&&(i=a.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{cl(i)}catch(s){Je(a,a.return,s)}}}function J2(i,a){if(a.memoizedState===null&&(i=a.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{cl(i)}catch(s){Je(a,a.return,s)}}function RT(i){switch(i.tag){case 31:case 13:case 19:var a=i.stateNode;return a===null&&(a=i.stateNode=new Y2),a;case 22:return i=i.stateNode,a=i._retryCache,a===null&&(a=i._retryCache=new Y2),a;default:throw Error(r(435,i.tag))}}function Nf(i,a){var s=RT(i);a.forEach(function(c){if(!s.has(c)){s.add(c);var h=IT.bind(null,i,c);c.then(h,h)}})}function wi(i,a){var s=a.deletions;if(s!==null)for(var c=0;c<s.length;c++){var h=s[c],d=i,y=a,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(hs(A.type)){_n=A.stateNode,Ai=!1;break t}break;case 5:_n=A.stateNode,Ai=!1;break t;case 3:case 4:_n=A.stateNode.containerInfo,Ai=!0;break t}A=A.return}if(_n===null)throw Error(r(160));K2(d,y,h),_n=null,Ai=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)$2(a,i),a=a.sibling}var Ua=null;function $2(i,a){var s=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:wi(a,i),Ri(i),c&4&&(rs(3,i,i.return),Wc(3,i),rs(5,i,i.return));break;case 1:wi(a,i),Ri(i),c&512&&(In||s===null||Ya(s,s.return)),c&64&&yr&&(i=i.updateQueue,i!==null&&(c=i.callbacks,c!==null&&(s=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var h=Ua;if(wi(a,i),Ri(i),c&512&&(In||s===null||Ya(s,s.return)),c&4){var d=s!==null?s.memoizedState:null;if(c=i.memoizedState,s===null)if(c===null)if(i.stateNode===null){t:{c=i.type,s=i.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Gs]||d[Nn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(c),h.head.insertBefore(d,h.querySelector("head > title"))),li(d,c,s),d[Nn]=i,w(d),c=d;break t;case"link":var y=$3("link","href",h).get(c+(s.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(A,1);break e}}d=h.createElement(c),li(d,c,s),h.head.appendChild(d);break;case"meta":if(y=$3("meta","content",h).get(c+(s.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(A,1);break e}}d=h.createElement(c),li(d,c,s),h.head.appendChild(d);break;default:throw Error(r(468,c))}d[Nn]=i,w(d),c=d}i.stateNode=c}else tx(h,i.type,i.stateNode);else i.stateNode=J3(h,c,i.memoizedProps);else d!==c?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,c===null?tx(h,i.type,i.stateNode):J3(h,c,i.memoizedProps)):c===null&&i.stateNode!==null&&rm(i,i.memoizedProps,s.memoizedProps)}break;case 27:wi(a,i),Ri(i),c&512&&(In||s===null||Ya(s,s.return)),s!==null&&c&4&&rm(i,i.memoizedProps,s.memoizedProps);break;case 5:if(wi(a,i),Ri(i),c&512&&(In||s===null||Ya(s,s.return)),i.flags&32){h=i.stateNode;try{kn(h,"")}catch(Wt){Je(i,i.return,Wt)}}c&4&&i.stateNode!=null&&(h=i.memoizedProps,rm(i,h,s!==null?s.memoizedProps:h)),c&1024&&(lm=!0);break;case 6:if(wi(a,i),Ri(i),c&4){if(i.stateNode===null)throw Error(r(162));c=i.memoizedProps,s=i.stateNode;try{s.nodeValue=c}catch(Wt){Je(i,i.return,Wt)}}break;case 3:if(Zf=null,h=Ua,Ua=Yf(a.containerInfo),wi(a,i),Ua=h,Ri(i),c&4&&s!==null&&s.memoizedState.isDehydrated)try{cl(a.containerInfo)}catch(Wt){Je(i,i.return,Wt)}lm&&(lm=!1,t3(i));break;case 4:c=Ua,Ua=Yf(i.stateNode.containerInfo),wi(a,i),Ri(i),Ua=c;break;case 12:wi(a,i),Ri(i);break;case 31:wi(a,i),Ri(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Nf(i,c)));break;case 13:wi(a,i),Ri(i),i.child.flags&8192&&i.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Pf=E()),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Nf(i,c)));break;case 22:h=i.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,et=yr,dt=In;if(yr=et||h,In=dt||G,wi(a,i),In=dt,yr=et,Ri(i),c&8192)t:for(a=i.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(s===null||G||yr||In||no(i)),s=null,a=i;;){if(a.tag===5||a.tag===26){if(s===null){G=s=a;try{if(d=G.stateNode,h)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=G.stateNode;var gt=G.memoizedProps.style,rt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Je(G,G.return,Wt)}}}else if(a.tag===6){if(s===null){G=a;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(Wt){Je(G,G.return,Wt)}}}else if(a.tag===18){if(s===null){G=a;try{var lt=G.stateNode;h?k3(lt,!0):k3(G.stateNode,!1)}catch(Wt){Je(G,G.return,Wt)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===i)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break t;for(;a.sibling===null;){if(a.return===null||a.return===i)break t;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=i.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,Nf(i,s))));break;case 19:wi(a,i),Ri(i),c&4&&(c=i.updateQueue,c!==null&&(i.updateQueue=null,Nf(i,c)));break;case 30:break;case 21:break;default:wi(a,i),Ri(i)}}function Ri(i){var a=i.flags;if(a&2){try{for(var s,c=i.return;c!==null;){if(W2(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var h=s.stateNode,d=sm(i);Lf(i,d,h);break;case 5:var y=s.stateNode;s.flags&32&&(kn(y,""),s.flags&=-33);var A=sm(i);Lf(i,A,y);break;case 3:case 4:var G=s.stateNode.containerInfo,et=sm(i);om(i,et,G);break;default:throw Error(r(161))}}catch(dt){Je(i,i.return,dt)}i.flags&=-3}a&4096&&(i.flags&=-4097)}function t3(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var a=i;t3(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),i=i.sibling}}function Mr(i,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)j2(i,a.alternate,a),a=a.sibling}function no(i){for(i=i.child;i!==null;){var a=i;switch(a.tag){case 0:case 11:case 14:case 15:rs(4,a,a.return),no(a);break;case 1:Ya(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&k2(a,a.return,s),no(a);break;case 27:eu(a.stateNode);case 26:case 5:Ya(a,a.return),no(a);break;case 22:a.memoizedState===null&&no(a);break;case 30:no(a);break;default:no(a)}i=i.sibling}}function Er(i,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,h=i,d=a,y=d.flags;switch(d.tag){case 0:case 11:case 15:Er(h,d,s),Wc(4,d);break;case 1:if(Er(h,d,s),c=d,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){Je(c,c.return,et)}if(c=d,h=c.updateQueue,h!==null){var A=c.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)Uv(G[h],A)}catch(et){Je(c,c.return,et)}}s&&y&64&&V2(d),qc(d,d.return);break;case 27:q2(d);case 26:case 5:Er(h,d,s),s&&c===null&&y&4&&X2(d),qc(d,d.return);break;case 12:Er(h,d,s);break;case 31:Er(h,d,s),s&&y&4&&Q2(h,d);break;case 13:Er(h,d,s),s&&y&4&&J2(h,d);break;case 22:d.memoizedState===null&&Er(h,d,s),qc(d,d.return);break;case 30:break;default:Er(h,d,s)}a=a.sibling}}function cm(i,a){var s=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==s&&(i!=null&&i.refCount++,s!=null&&Lc(s))}function um(i,a){i=null,a.alternate!==null&&(i=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==i&&(a.refCount++,i!=null&&Lc(i))}function La(i,a,s,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)e3(i,a,s,c),a=a.sibling}function e3(i,a,s,c){var h=a.flags;switch(a.tag){case 0:case 11:case 15:La(i,a,s,c),h&2048&&Wc(9,a);break;case 1:La(i,a,s,c);break;case 3:La(i,a,s,c),h&2048&&(i=null,a.alternate!==null&&(i=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==i&&(a.refCount++,i!=null&&Lc(i)));break;case 12:if(h&2048){La(i,a,s,c),i=a.stateNode;try{var d=a.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,a.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(G){Je(a,a.return,G)}}else La(i,a,s,c);break;case 31:La(i,a,s,c);break;case 13:La(i,a,s,c);break;case 23:break;case 22:d=a.stateNode,y=a.alternate,a.memoizedState!==null?d._visibility&2?La(i,a,s,c):Yc(i,a):d._visibility&2?La(i,a,s,c):(d._visibility|=2,Jo(i,a,s,c,(a.subtreeFlags&10256)!==0||!1)),h&2048&&cm(y,a);break;case 24:La(i,a,s,c),h&2048&&um(a.alternate,a);break;default:La(i,a,s,c)}}function Jo(i,a,s,c,h){for(h=h&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var d=i,y=a,A=s,G=c,et=y.flags;switch(y.tag){case 0:case 11:case 15:Jo(d,y,A,G,h),Wc(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?Jo(d,y,A,G,h):Yc(d,y):(dt._visibility|=2,Jo(d,y,A,G,h)),h&&et&2048&&cm(y.alternate,y);break;case 24:Jo(d,y,A,G,h),h&&et&2048&&um(y.alternate,y);break;default:Jo(d,y,A,G,h)}a=a.sibling}}function Yc(i,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=i,c=a,h=c.flags;switch(c.tag){case 22:Yc(s,c),h&2048&&cm(c.alternate,c);break;case 24:Yc(s,c),h&2048&&um(c.alternate,c);break;default:Yc(s,c)}a=a.sibling}}var jc=8192;function $o(i,a,s){if(i.subtreeFlags&jc)for(i=i.child;i!==null;)n3(i,a,s),i=i.sibling}function n3(i,a,s){switch(i.tag){case 26:$o(i,a,s),i.flags&jc&&i.memoizedState!==null&&pA(s,Ua,i.memoizedState,i.memoizedProps);break;case 5:$o(i,a,s);break;case 3:case 4:var c=Ua;Ua=Yf(i.stateNode.containerInfo),$o(i,a,s),Ua=c;break;case 22:i.memoizedState===null&&(c=i.alternate,c!==null&&c.memoizedState!==null?(c=jc,jc=16777216,$o(i,a,s),jc=c):$o(i,a,s));break;default:$o(i,a,s)}}function i3(i){var a=i.alternate;if(a!==null&&(i=a.child,i!==null)){a.child=null;do a=i.sibling,i.sibling=null,i=a;while(i!==null)}}function Zc(i){var a=i.deletions;if((i.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];Zn=c,r3(c,i)}i3(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)a3(i),i=i.sibling}function a3(i){switch(i.tag){case 0:case 11:case 15:Zc(i),i.flags&2048&&rs(9,i,i.return);break;case 3:Zc(i);break;case 12:Zc(i);break;case 22:var a=i.stateNode;i.memoizedState!==null&&a._visibility&2&&(i.return===null||i.return.tag!==13)?(a._visibility&=-3,Of(i)):Zc(i);break;default:Zc(i)}}function Of(i){var a=i.deletions;if((i.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];Zn=c,r3(c,i)}i3(i)}for(i=i.child;i!==null;){switch(a=i,a.tag){case 0:case 11:case 15:rs(8,a,a.return),Of(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,Of(a));break;default:Of(a)}i=i.sibling}}function r3(i,a){for(;Zn!==null;){var s=Zn;switch(s.tag){case 0:case 11:case 15:rs(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Lc(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Zn=c;else t:for(s=i;Zn!==null;){c=Zn;var h=c.sibling,d=c.return;if(Z2(c),c===s){Zn=null;break t}if(h!==null){h.return=d,Zn=h;break t}Zn=d}}}var CT={getCacheForType:function(i){var a=si(On),s=a.data.get(i);return s===void 0&&(s=i(),a.data.set(i,s)),s},cacheSignal:function(){return si(On).controller.signal}},DT=typeof WeakMap=="function"?WeakMap:Map,Xe=0,rn=null,be=null,Re=0,Qe=0,Vi=null,ss=!1,tl=!1,fm=!1,br=0,En=0,os=0,io=0,hm=0,ki=0,el=0,Kc=null,Ci=null,dm=!1,Pf=0,s3=0,Ff=1/0,If=null,ls=null,Xn=0,cs=null,nl=null,Tr=0,pm=0,mm=null,o3=null,Qc=0,gm=null;function Xi(){return(Xe&2)!==0&&Re!==0?Re&-Re:B.T!==null?Mm():vc()}function l3(){if(ki===0)if((Re&536870912)===0||Ue){var i=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ki=i}else ki=536870912;return i=Gi.current,i!==null&&(i.flags|=32),ki}function Di(i,a,s){(i===rn&&(Qe===2||Qe===9)||i.cancelPendingCommit!==null)&&(il(i,0),us(i,Re,ki,!1)),fi(i,s),((Xe&2)===0||i!==rn)&&(i===rn&&((Xe&2)===0&&(io|=s),En===4&&us(i,Re,ki,!1)),ja(i))}function c3(i,a,s){if((Xe&6)!==0)throw Error(r(327));var c=!s&&(a&127)===0&&(a&i.expiredLanes)===0||At(i,a),h=c?NT(i,a):vm(i,a,!0),d=c;do{if(h===0){tl&&!c&&us(i,a,0,!1);break}else{if(s=i.current.alternate,d&&!UT(s)){h=vm(i,a,!1),d=!1;continue}if(h===2){if(d=a,i.errorRecoveryDisabledLanes&d)var y=0;else y=i.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){a=y;t:{var A=i;h=Kc;var G=A.current.memoizedState.isDehydrated;if(G&&(il(A,y).flags|=256),y=vm(A,y,!1),y!==2){if(fm&&!G){A.errorRecoveryDisabledLanes|=d,io|=d,h=4;break t}d=Ci,Ci=h,d!==null&&(Ci===null?Ci=d:Ci.push.apply(Ci,d))}h=y}if(d=!1,h!==2)continue}}if(h===1){il(i,0),us(i,a,0,!0);break}t:{switch(c=i,d=h,d){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:us(c,a,ki,!ss);break t;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(h=Pf+300-E(),10<h)){if(us(c,a,ki,!ss),vt(c,0,!0)!==0)break t;Tr=a,c.timeoutHandle=G3(u3.bind(null,c,s,Ci,If,dm,a,ki,io,el,ss,d,"Throttled",-0,0),h);break t}u3(c,s,Ci,If,dm,a,ki,io,el,ss,d,null,-0,0)}}break}while(!0);ja(i)}function u3(i,a,s,c,h,d,y,A,G,et,dt,gt,rt,lt){if(i.timeoutHandle=-1,gt=a.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ur},n3(a,d,gt);var Wt=(d&62914560)===d?Pf-E():(d&4194048)===d?s3-E():0;if(Wt=mA(gt,Wt),Wt!==null){Tr=d,i.cancelPendingCommit=Wt(v3.bind(null,i,a,d,s,c,h,y,A,G,dt,gt,null,rt,lt)),us(i,d,y,!et);return}}v3(i,a,d,s,c,h,y,A,G)}function UT(i){for(var a=i;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var h=s[c],d=h.getSnapshot;h=h.value;try{if(!Bi(d(),h))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function us(i,a,s,c){a&=~hm,a&=~io,i.suspendedLanes|=a,i.pingedLanes&=~a,c&&(i.warmLanes|=a),c=i.expirationTimes;for(var h=a;0<h;){var d=31-Ot(h),y=1<<d;c[d]=-1,h&=~y}s!==0&&ju(i,s,a)}function Bf(){return(Xe&6)===0?(Jc(0),!1):!0}function _m(){if(be!==null){if(Qe===0)var i=be.return;else i=be,pr=js=null,Np(i),Yo=null,Oc=0,i=be;for(;i!==null;)H2(i.alternate,i),i=i.return;be=null}}function il(i,a){var s=i.timeoutHandle;s!==-1&&(i.timeoutHandle=-1,QT(s)),s=i.cancelPendingCommit,s!==null&&(i.cancelPendingCommit=null,s()),Tr=0,_m(),rn=i,be=s=hr(i.current,null),Re=a,Qe=0,Vi=null,ss=!1,tl=At(i,a),fm=!1,el=ki=hm=io=os=En=0,Ci=Kc=null,dm=!1,(a&8)!==0&&(a|=a&32);var c=i.entangledLanes;if(c!==0)for(i=i.entanglements,c&=a;0<c;){var h=31-Ot(c),d=1<<h;a|=i[h],c&=~d}return br=a,rf(),s}function f3(i,a){_e=null,B.H=Vc,a===qo||a===df?(a=wv(),Qe=3):a===Sp?(a=wv(),Qe=4):Qe=a===Zp?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Vi=a,be===null&&(En=1,wf(i,oa(a,i.current)))}function h3(){var i=Gi.current;return i===null?!0:(Re&4194048)===Re?fa===null:(Re&62914560)===Re||(Re&536870912)!==0?i===fa:!1}function d3(){var i=B.H;return B.H=Vc,i===null?Vc:i}function p3(){var i=B.A;return B.A=CT,i}function zf(){En=4,ss||(Re&4194048)!==Re&&Gi.current!==null||(tl=!0),(os&134217727)===0&&(io&134217727)===0||rn===null||us(rn,Re,ki,!1)}function vm(i,a,s){var c=Xe;Xe|=2;var h=d3(),d=p3();(rn!==i||Re!==a)&&(If=null,il(i,a)),a=!1;var y=En;t:do try{if(Qe!==0&&be!==null){var A=be,G=Vi;switch(Qe){case 8:_m(),y=6;break t;case 3:case 2:case 9:case 6:Gi.current===null&&(a=!0);var et=Qe;if(Qe=0,Vi=null,al(i,A,G,et),s&&tl){y=0;break t}break;default:et=Qe,Qe=0,Vi=null,al(i,A,G,et)}}LT(),y=En;break}catch(dt){f3(i,dt)}while(!0);return a&&i.shellSuspendCounter++,pr=js=null,Xe=c,B.H=h,B.A=d,be===null&&(rn=null,Re=0,rf()),y}function LT(){for(;be!==null;)m3(be)}function NT(i,a){var s=Xe;Xe|=2;var c=d3(),h=p3();rn!==i||Re!==a?(If=null,Ff=E()+500,il(i,a)):tl=At(i,a);t:do try{if(Qe!==0&&be!==null){a=be;var d=Vi;e:switch(Qe){case 1:Qe=0,Vi=null,al(i,a,d,1);break;case 2:case 9:if(Tv(d)){Qe=0,Vi=null,g3(a);break}a=function(){Qe!==2&&Qe!==9||rn!==i||(Qe=7),ja(i)},d.then(a,a);break t;case 3:Qe=7;break t;case 4:Qe=5;break t;case 7:Tv(d)?(Qe=0,Vi=null,g3(a)):(Qe=0,Vi=null,al(i,a,d,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var A=be;if(y?ex(y):A.stateNode.complete){Qe=0,Vi=null;var G=A.sibling;if(G!==null)be=G;else{var et=A.return;et!==null?(be=et,Gf(et)):be=null}break e}}Qe=0,Vi=null,al(i,a,d,5);break;case 6:Qe=0,Vi=null,al(i,a,d,6);break;case 8:_m(),En=6;break t;default:throw Error(r(462))}}OT();break}catch(dt){f3(i,dt)}while(!0);return pr=js=null,B.H=c,B.A=h,Xe=s,be!==null?0:(rn=null,Re=0,rf(),En)}function OT(){for(;be!==null&&!Ht();)m3(be)}function m3(i){var a=z2(i.alternate,i,br);i.memoizedProps=i.pendingProps,a===null?Gf(i):be=a}function g3(i){var a=i,s=a.alternate;switch(a.tag){case 15:case 0:a=N2(s,a,a.pendingProps,a.type,void 0,Re);break;case 11:a=N2(s,a,a.pendingProps,a.type.render,a.ref,Re);break;case 5:Np(a);default:H2(s,a),a=be=pv(a,br),a=z2(s,a,br)}i.memoizedProps=i.pendingProps,a===null?Gf(i):be=a}function al(i,a,s,c){pr=js=null,Np(a),Yo=null,Oc=0;var h=a.return;try{if(MT(i,h,a,s,Re)){En=1,wf(i,oa(s,i.current)),be=null;return}}catch(d){if(h!==null)throw be=h,d;En=1,wf(i,oa(s,i.current)),be=null;return}a.flags&32768?(Ue||c===1?i=!0:tl||(Re&536870912)!==0?i=!1:(ss=i=!0,(c===2||c===9||c===3||c===6)&&(c=Gi.current,c!==null&&c.tag===13&&(c.flags|=16384))),_3(a,i)):Gf(a)}function Gf(i){var a=i;do{if((a.flags&32768)!==0){_3(a,ss);return}i=a.return;var s=TT(a.alternate,a,br);if(s!==null){be=s;return}if(a=a.sibling,a!==null){be=a;return}be=a=i}while(a!==null);En===0&&(En=5)}function _3(i,a){do{var s=AT(i.alternate,i);if(s!==null){s.flags&=32767,be=s;return}if(s=i.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(i=i.sibling,i!==null)){be=i;return}be=i=s}while(i!==null);En=6,be=null}function v3(i,a,s,c,h,d,y,A,G){i.cancelPendingCommit=null;do Hf();while(Xn!==0);if((Xe&6)!==0)throw Error(r(327));if(a!==null){if(a===i.current)throw Error(r(177));if(d=a.lanes|a.childLanes,d|=sp,wa(i,s,d,y,A,G),i===rn&&(be=rn=null,Re=0),nl=a,cs=i,Tr=s,pm=d,mm=h,o3=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,BT(ft,function(){return E3(),null})):(i.callbackNode=null,i.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=B.T,B.T=null,h=z.p,z.p=2,y=Xe,Xe|=4;try{wT(i,a,s)}finally{Xe=y,z.p=h,B.T=c}}Xn=1,x3(),y3(),S3()}}function x3(){if(Xn===1){Xn=0;var i=cs,a=nl,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var c=z.p;z.p=2;var h=Xe;Xe|=4;try{$2(a,i);var d=Dm,y=rv(i.containerInfo),A=d.focusedElem,G=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&av(A.ownerDocument.documentElement,A)){if(G!==null&&ep(A)){var et=G.start,dt=G.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var gt=A.ownerDocument||document,rt=gt&&gt.defaultView||window;if(rt.getSelection){var lt=rt.getSelection(),Wt=A.textContent.length,ce=Math.min(G.start,Wt),nn=G.end===void 0?ce:Math.min(G.end,Wt);!lt.extend&&ce>nn&&(y=nn,nn=ce,ce=y);var K=iv(A,ce),W=iv(A,nn);if(K&&W&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var $=gt.createRange();$.setStart(K.node,K.offset),lt.removeAllRanges(),ce>nn?(lt.addRange($),lt.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),lt.addRange($))}}}}for(gt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<gt.length;A++){var pt=gt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}$f=!!Cm,Dm=Cm=null}finally{Xe=h,z.p=c,B.T=s}}i.current=a,Xn=2}}function y3(){if(Xn===2){Xn=0;var i=cs,a=nl,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var c=z.p;z.p=2;var h=Xe;Xe|=4;try{j2(i,a.alternate,a)}finally{Xe=h,z.p=c,B.T=s}}Xn=3}}function S3(){if(Xn===4||Xn===3){Xn=0,N();var i=cs,a=nl,s=Tr,c=o3;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Xn=5:(Xn=0,nl=cs=null,M3(i,i.pendingLanes));var h=i.pendingLanes;if(h===0&&(ls=null),Co(s),a=a.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Mt,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=B.T,h=z.p,z.p=2,B.T=null;try{for(var d=i.onRecoverableError,y=0;y<c.length;y++){var A=c[y];d(A.value,{componentStack:A.stack})}}finally{B.T=a,z.p=h}}(Tr&3)!==0&&Hf(),ja(i),h=i.pendingLanes,(s&261930)!==0&&(h&42)!==0?i===gm?Qc++:(Qc=0,gm=i):Qc=0,Jc(0)}}function M3(i,a){(i.pooledCacheLanes&=a)===0&&(a=i.pooledCache,a!=null&&(i.pooledCache=null,Lc(a)))}function Hf(){return x3(),y3(),S3(),E3()}function E3(){if(Xn!==5)return!1;var i=cs,a=pm;pm=0;var s=Co(Tr),c=B.T,h=z.p;try{z.p=32>s?32:s,B.T=null,s=mm,mm=null;var d=cs,y=Tr;if(Xn=0,nl=cs=null,Tr=0,(Xe&6)!==0)throw Error(r(331));var A=Xe;if(Xe|=4,a3(d.current),e3(d,d.current,y,s),Xe=A,Jc(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Mt,d)}catch{}return!0}finally{z.p=h,B.T=c,M3(i,a)}}function b3(i,a,s){a=oa(s,a),a=jp(i.stateNode,a,2),i=ns(i,a,2),i!==null&&(fi(i,2),ja(i))}function Je(i,a,s){if(i.tag===3)b3(i,i,s);else for(;a!==null;){if(a.tag===3){b3(a,i,s);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ls===null||!ls.has(c))){i=oa(s,i),s=T2(2),c=ns(a,s,2),c!==null&&(A2(s,c,a,i),fi(c,2),ja(c));break}}a=a.return}}function xm(i,a,s){var c=i.pingCache;if(c===null){c=i.pingCache=new DT;var h=new Set;c.set(a,h)}else h=c.get(a),h===void 0&&(h=new Set,c.set(a,h));h.has(s)||(fm=!0,h.add(s),i=PT.bind(null,i,a,s),a.then(i,i))}function PT(i,a,s){var c=i.pingCache;c!==null&&c.delete(a),i.pingedLanes|=i.suspendedLanes&s,i.warmLanes&=~s,rn===i&&(Re&s)===s&&(En===4||En===3&&(Re&62914560)===Re&&300>E()-Pf?(Xe&2)===0&&il(i,0):hm|=s,el===Re&&(el=0)),ja(i)}function T3(i,a){a===0&&(a=Ze()),i=Ws(i,a),i!==null&&(fi(i,a),ja(i))}function FT(i){var a=i.memoizedState,s=0;a!==null&&(s=a.retryLane),T3(i,s)}function IT(i,a){var s=0;switch(i.tag){case 31:case 13:var c=i.stateNode,h=i.memoizedState;h!==null&&(s=h.retryLane);break;case 19:c=i.stateNode;break;case 22:c=i.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(a),T3(i,s)}function BT(i,a){return ge(i,a)}var Vf=null,rl=null,ym=!1,kf=!1,Sm=!1,fs=0;function ja(i){i!==rl&&i.next===null&&(rl===null?Vf=rl=i:rl=rl.next=i),kf=!0,ym||(ym=!0,GT())}function Jc(i,a){if(!Sm&&kf){Sm=!0;do for(var s=!1,c=Vf;c!==null;){if(i!==0){var h=c.pendingLanes;if(h===0)var d=0;else{var y=c.suspendedLanes,A=c.pingedLanes;d=(1<<31-Ot(42|i)+1)-1,d&=h&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,C3(c,d))}else d=Re,d=vt(c,c===rn?d:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(d&3)===0||At(c,d)||(s=!0,C3(c,d));c=c.next}while(s);Sm=!1}}function zT(){A3()}function A3(){kf=ym=!1;var i=0;fs!==0&&KT()&&(i=fs);for(var a=E(),s=null,c=Vf;c!==null;){var h=c.next,d=w3(c,a);d===0?(c.next=null,s===null?Vf=h:s.next=h,h===null&&(rl=s)):(s=c,(i!==0||(d&3)!==0)&&(kf=!0)),c=h}Xn!==0&&Xn!==5||Jc(i),fs!==0&&(fs=0)}function w3(i,a){for(var s=i.suspendedLanes,c=i.pingedLanes,h=i.expirationTimes,d=i.pendingLanes&-62914561;0<d;){var y=31-Ot(d),A=1<<y,G=h[y];G===-1?((A&s)===0||(A&c)!==0)&&(h[y]=fe(A,a)):G<=a&&(i.expiredLanes|=A),d&=~A}if(a=rn,s=Re,s=vt(i,i===a?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c=i.callbackNode,s===0||i===a&&(Qe===2||Qe===9)||i.cancelPendingCommit!==null)return c!==null&&c!==null&&we(c),i.callbackNode=null,i.callbackPriority=0;if((s&3)===0||At(i,s)){if(a=s&-s,a===i.callbackPriority)return a;switch(c!==null&&we(c),Co(s)){case 2:case 8:s=_t;break;case 32:s=ft;break;case 268435456:s=Rt;break;default:s=ft}return c=R3.bind(null,i),s=ge(s,c),i.callbackPriority=a,i.callbackNode=s,a}return c!==null&&c!==null&&we(c),i.callbackPriority=2,i.callbackNode=null,2}function R3(i,a){if(Xn!==0&&Xn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var s=i.callbackNode;if(Hf()&&i.callbackNode!==s)return null;var c=Re;return c=vt(i,i===rn?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),c===0?null:(c3(i,c,a),w3(i,E()),i.callbackNode!=null&&i.callbackNode===s?R3.bind(null,i):null)}function C3(i,a){if(Hf())return null;c3(i,a,!0)}function GT(){JT(function(){(Xe&6)!==0?ge(ht,zT):A3()})}function Mm(){if(fs===0){var i=Xo;i===0&&(i=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),fs=i}return fs}function D3(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Ku(""+i)}function U3(i,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,i.id&&s.setAttribute("form",i.id),a.parentNode.insertBefore(s,a),i=new FormData(i),s.parentNode.removeChild(s),i}function HT(i,a,s,c,h){if(a==="submit"&&s&&s.stateNode===h){var d=D3((h[$n]||null).action),y=c.submitter;y&&(a=(a=y[$n]||null)?D3(a.formAction):y.getAttribute("formAction"),a!==null&&(d=a,y=null));var A=new tf("action","action",null,c,h);i.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(fs!==0){var G=y?U3(h,y):new FormData(h);Vp(s,{pending:!0,data:G,method:h.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=y?U3(h,y):new FormData(h),Vp(s,{pending:!0,data:G,method:h.method,action:d},d,G))},currentTarget:h}]})}}for(var Em=0;Em<rp.length;Em++){var bm=rp[Em],VT=bm.toLowerCase(),kT=bm[0].toUpperCase()+bm.slice(1);Da(VT,"on"+kT)}Da(lv,"onAnimationEnd"),Da(cv,"onAnimationIteration"),Da(uv,"onAnimationStart"),Da("dblclick","onDoubleClick"),Da("focusin","onFocus"),Da("focusout","onBlur"),Da(rT,"onTransitionRun"),Da(sT,"onTransitionStart"),Da(oT,"onTransitionCancel"),Da(fv,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $c="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($c));function L3(i,a){a=(a&4)!==0;for(var s=0;s<i.length;s++){var c=i[s],h=c.event;c=c.listeners;t:{var d=void 0;if(a)for(var y=c.length-1;0<=y;y--){var A=c[y],G=A.instance,et=A.currentTarget;if(A=A.listener,G!==d&&h.isPropagationStopped())break t;d=A,h.currentTarget=et;try{d(h)}catch(dt){af(dt)}h.currentTarget=null,d=G}else for(y=0;y<c.length;y++){if(A=c[y],G=A.instance,et=A.currentTarget,A=A.listener,G!==d&&h.isPropagationStopped())break t;d=A,h.currentTarget=et;try{d(h)}catch(dt){af(dt)}h.currentTarget=null,d=G}}}}function Te(i,a){var s=a[Do];s===void 0&&(s=a[Do]=new Set);var c=i+"__bubble";s.has(c)||(N3(a,i,2,!1),s.add(c))}function Tm(i,a,s){var c=0;a&&(c|=4),N3(s,i,c,a)}var Xf="_reactListening"+Math.random().toString(36).slice(2);function Am(i){if(!i[Xf]){i[Xf]=!0,Z.forEach(function(s){s!=="selectionchange"&&(XT.has(s)||Tm(s,!1,i),Tm(s,!0,i))});var a=i.nodeType===9?i:i.ownerDocument;a===null||a[Xf]||(a[Xf]=!0,Tm("selectionchange",!1,a))}}function N3(i,a,s,c){switch(lx(a)){case 2:var h=vA;break;case 8:h=xA;break;default:h=Hm}s=h.bind(null,a,s,i),h=void 0,!qd||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),c?h!==void 0?i.addEventListener(a,s,{capture:!0,passive:h}):i.addEventListener(a,s,!0):h!==void 0?i.addEventListener(a,s,{passive:h}):i.addEventListener(a,s,!1)}function wm(i,a,s,c,h){var d=c;if((a&1)===0&&(a&2)===0&&c!==null)t:for(;;){if(c===null)return;var y=c.tag;if(y===3||y===4){var A=c.stateNode.containerInfo;if(A===h)break;if(y===4)for(y=c.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===h)return;y=y.return}for(;A!==null;){if(y=qr(A),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){c=d=y;continue t}A=A.parentNode}}c=c.return}B_(function(){var et=d,dt=Xd(s),gt=[];t:{var rt=hv.get(i);if(rt!==void 0){var lt=tf,Wt=i;switch(i){case"keypress":if(Ju(s)===0)break t;case"keydown":case"keyup":lt=Ib;break;case"focusin":Wt="focus",lt=Kd;break;case"focusout":Wt="blur",lt=Kd;break;case"beforeblur":case"afterblur":lt=Kd;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=H_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Tb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Gb;break;case lv:case cv:case uv:lt=Rb;break;case fv:lt=Vb;break;case"scroll":case"scrollend":lt=Eb;break;case"wheel":lt=Xb;break;case"copy":case"cut":case"paste":lt=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=k_;break;case"toggle":case"beforetoggle":lt=qb}var ce=(a&4)!==0,nn=!ce&&(i==="scroll"||i==="scrollend"),K=ce?rt!==null?rt+"Capture":null:rt;ce=[];for(var W=et,$;W!==null;){var pt=W;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||K===null||(pt=Sc(W,K),pt!=null&&ce.push(tu(W,pt,$))),nn)break;W=W.return}0<ce.length&&(rt=new lt(rt,Wt,null,s,dt),gt.push({event:rt,listeners:ce}))}}if((a&7)===0){t:{if(rt=i==="mouseover"||i==="pointerover",lt=i==="mouseout"||i==="pointerout",rt&&s!==kd&&(Wt=s.relatedTarget||s.fromElement)&&(qr(Wt)||Wt[Ra]))break t;if((lt||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,lt?(Wt=s.relatedTarget||s.toElement,lt=et,Wt=Wt?qr(Wt):null,Wt!==null&&(nn=l(Wt),ce=Wt.tag,Wt!==nn||ce!==5&&ce!==27&&ce!==6)&&(Wt=null)):(lt=null,Wt=et),lt!==Wt)){if(ce=H_,pt="onMouseLeave",K="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(ce=k_,pt="onPointerLeave",K="onPointerEnter",W="pointer"),nn=lt==null?rt:Hs(lt),$=Wt==null?rt:Hs(Wt),rt=new ce(pt,W+"leave",lt,s,dt),rt.target=nn,rt.relatedTarget=$,pt=null,qr(dt)===et&&(ce=new ce(K,W+"enter",Wt,s,dt),ce.target=$,ce.relatedTarget=nn,pt=ce),nn=pt,lt&&Wt)e:{for(ce=WT,K=lt,W=Wt,$=0,pt=K;pt;pt=ce(pt))$++;pt=0;for(var ae=W;ae;ae=ce(ae))pt++;for(;0<$-pt;)K=ce(K),$--;for(;0<pt-$;)W=ce(W),pt--;for(;$--;){if(K===W||W!==null&&K===W.alternate){ce=K;break e}K=ce(K),W=ce(W)}ce=null}else ce=null;lt!==null&&O3(gt,rt,lt,ce,!1),Wt!==null&&nn!==null&&O3(gt,nn,Wt,ce,!0)}}t:{if(rt=et?Hs(et):window,lt=rt.nodeName&&rt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&rt.type==="file")var ze=Q_;else if(Z_(rt))if(J_)ze=nT;else{ze=tT;var Kt=$b}else lt=rt.nodeName,!lt||lt.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?et&&Ca(et.elementType)&&(ze=Q_):ze=eT;if(ze&&(ze=ze(i,et))){K_(gt,ze,s,dt);break t}Kt&&Kt(i,rt,et),i==="focusout"&&et&&rt.type==="number"&&et.memoizedProps.value!=null&&ei(rt,"number",rt.value)}switch(Kt=et?Hs(et):window,i){case"focusin":(Z_(Kt)||Kt.contentEditable==="true")&&(Fo=Kt,np=et,Cc=null);break;case"focusout":Cc=np=Fo=null;break;case"mousedown":ip=!0;break;case"contextmenu":case"mouseup":case"dragend":ip=!1,sv(gt,s,dt);break;case"selectionchange":if(aT)break;case"keydown":case"keyup":sv(gt,s,dt)}var xe;if(Jd)t:{switch(i){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Po?Y_(i,s)&&(Ce="onCompositionEnd"):i==="keydown"&&s.keyCode===229&&(Ce="onCompositionStart");Ce&&(X_&&s.locale!=="ko"&&(Po||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Po&&(xe=z_()):(Zr=dt,Yd="value"in Zr?Zr.value:Zr.textContent,Po=!0)),Kt=Wf(et,Ce),0<Kt.length&&(Ce=new V_(Ce,i,null,s,dt),gt.push({event:Ce,listeners:Kt}),xe?Ce.data=xe:(xe=j_(s),xe!==null&&(Ce.data=xe)))),(xe=jb?Zb(i,s):Kb(i,s))&&(Ce=Wf(et,"onBeforeInput"),0<Ce.length&&(Kt=new V_("onBeforeInput","beforeinput",null,s,dt),gt.push({event:Kt,listeners:Ce}),Kt.data=xe)),HT(gt,i,et,s,dt)}L3(gt,a)})}function tu(i,a,s){return{instance:i,listener:a,currentTarget:s}}function Wf(i,a){for(var s=a+"Capture",c=[];i!==null;){var h=i,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Sc(i,s),h!=null&&c.unshift(tu(i,h,d)),h=Sc(i,a),h!=null&&c.push(tu(i,h,d))),i.tag===3)return c;i=i.return}return[]}function WT(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function O3(i,a,s,c,h){for(var d=a._reactName,y=[];s!==null&&s!==c;){var A=s,G=A.alternate,et=A.stateNode;if(A=A.tag,G!==null&&G===c)break;A!==5&&A!==26&&A!==27||et===null||(G=et,h?(et=Sc(s,d),et!=null&&y.unshift(tu(s,et,G))):h||(et=Sc(s,d),et!=null&&y.push(tu(s,et,G)))),s=s.return}y.length!==0&&i.push({event:a,listeners:y})}var qT=/\r\n?/g,YT=/\u0000|\uFFFD/g;function P3(i){return(typeof i=="string"?i:""+i).replace(qT,`
`).replace(YT,"")}function F3(i,a){return a=P3(a),P3(i)===a}function en(i,a,s,c,h,d){switch(s){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||kn(i,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&kn(i,""+c);break;case"className":oe(i,"class",c);break;case"tabIndex":oe(i,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":oe(i,s,c);break;case"style":Lo(i,c,d);break;case"data":if(a!=="object"){oe(i,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||s!=="href")){i.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=Ku(""+c),i.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){i.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(a!=="input"&&en(i,a,"name",h.name,h,null),en(i,a,"formEncType",h.formEncType,h,null),en(i,a,"formMethod",h.formMethod,h,null),en(i,a,"formTarget",h.formTarget,h,null)):(en(i,a,"encType",h.encType,h,null),en(i,a,"method",h.method,h,null),en(i,a,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){i.removeAttribute(s);break}c=Ku(""+c),i.setAttribute(s,c);break;case"onClick":c!=null&&(i.onclick=ur);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));i.innerHTML=s}}break;case"multiple":i.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":i.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){i.removeAttribute("xlink:href");break}s=Ku(""+c),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""+c):i.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,""):i.removeAttribute(s);break;case"capture":case"download":c===!0?i.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?i.setAttribute(s,c):i.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?i.setAttribute(s,c):i.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?i.removeAttribute(s):i.setAttribute(s,c);break;case"popover":Te("beforetoggle",i),Te("toggle",i),jt(i,"popover",c);break;case"xlinkActuate":Zt(i,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Zt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Zt(i,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Zt(i,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Zt(i,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Zt(i,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Zt(i,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Zt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Zt(i,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":jt(i,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Sb.get(s)||s,jt(i,s,c))}}function Rm(i,a,s,c,h,d){switch(s){case"style":Lo(i,c,d);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(h.children!=null)throw Error(r(60));i.innerHTML=s}}break;case"children":typeof c=="string"?kn(i,c):(typeof c=="number"||typeof c=="bigint")&&kn(i,""+c);break;case"onScroll":c!=null&&Te("scroll",i);break;case"onScrollEnd":c!=null&&Te("scrollend",i);break;case"onClick":c!=null&&(i.onclick=ur);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),a=s.slice(2,h?s.length-7:void 0),d=i[$n]||null,d=d!=null?d[s]:null,typeof d=="function"&&i.removeEventListener(a,d,h),typeof c=="function")){typeof d!="function"&&d!==null&&(s in i?i[s]=null:i.hasAttribute(s)&&i.removeAttribute(s)),i.addEventListener(a,c,h);break t}s in i?i[s]=c:c===!0?i.setAttribute(s,""):jt(i,s,c)}}}function li(i,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",i),Te("load",i);var c=!1,h=!1,d;for(d in s)if(s.hasOwnProperty(d)){var y=s[d];if(y!=null)switch(d){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:en(i,a,d,y,s,null)}}h&&en(i,a,"srcSet",s.srcSet,s,null),c&&en(i,a,"src",s.src,s,null);return;case"input":Te("invalid",i);var A=d=y=h=null,G=null,et=null;for(c in s)if(s.hasOwnProperty(c)){var dt=s[c];if(dt!=null)switch(c){case"name":h=dt;break;case"type":y=dt;break;case"checked":G=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,a));break;default:en(i,a,c,dt,s,null)}}cr(i,d,A,G,et,y,h,!1);return;case"select":Te("invalid",i),c=y=d=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":c=A;default:en(i,a,h,A,s,null)}a=d,s=y,i.multiple=!!c,a!=null?ra(i,!!c,a,!1):s!=null&&ra(i,!!c,s,!0);return;case"textarea":Te("invalid",i),d=h=c=null;for(y in s)if(s.hasOwnProperty(y)&&(A=s[y],A!=null))switch(y){case"value":c=A;break;case"defaultValue":h=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:en(i,a,y,A,s,null)}ni(i,c,h,d);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(c=s[G],c!=null))switch(G){case"selected":i.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:en(i,a,G,c,s,null)}return;case"dialog":Te("beforetoggle",i),Te("toggle",i),Te("cancel",i),Te("close",i);break;case"iframe":case"object":Te("load",i);break;case"video":case"audio":for(c=0;c<$c.length;c++)Te($c[c],i);break;case"image":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"embed":case"source":case"link":Te("error",i),Te("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in s)if(s.hasOwnProperty(et)&&(c=s[et],c!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:en(i,a,et,c,s,null)}return;default:if(Ca(a)){for(dt in s)s.hasOwnProperty(dt)&&(c=s[dt],c!==void 0&&Rm(i,a,dt,c,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(c=s[A],c!=null&&en(i,a,A,c,s,null))}function jT(i,a,s,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,y=null,A=null,G=null,et=null,dt=null;for(lt in s){var gt=s[lt];if(s.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=gt;default:c.hasOwnProperty(lt)||en(i,a,lt,null,c,gt)}}for(var rt in c){var lt=c[rt];if(gt=s[rt],c.hasOwnProperty(rt)&&(lt!=null||gt!=null))switch(rt){case"type":d=lt;break;case"name":h=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":y=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,a));break;default:lt!==gt&&en(i,a,rt,lt,c,gt)}}ti(i,y,A,G,et,dt,d,h);return;case"select":lt=y=A=rt=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":lt=G;default:c.hasOwnProperty(d)||en(i,a,d,null,c,G)}for(h in c)if(d=c[h],G=s[h],c.hasOwnProperty(h)&&(d!=null||G!=null))switch(h){case"value":rt=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==G&&en(i,a,h,d,c,G)}a=A,s=y,c=lt,rt!=null?ra(i,!!s,rt,!1):!!c!=!!s&&(a!=null?ra(i,!!s,a,!0):ra(i,!!s,s?[]:"",!1));return;case"textarea":lt=rt=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:en(i,a,A,null,c,h)}for(y in c)if(h=c[y],d=s[y],c.hasOwnProperty(y)&&(h!=null||d!=null))switch(y){case"value":rt=h;break;case"defaultValue":lt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==d&&en(i,a,y,h,c,d)}Ke(i,rt,lt);return;case"option":for(var Wt in s)if(rt=s[Wt],s.hasOwnProperty(Wt)&&rt!=null&&!c.hasOwnProperty(Wt))switch(Wt){case"selected":i.selected=!1;break;default:en(i,a,Wt,null,c,rt)}for(G in c)if(rt=c[G],lt=s[G],c.hasOwnProperty(G)&&rt!==lt&&(rt!=null||lt!=null))switch(G){case"selected":i.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:en(i,a,G,rt,c,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in s)rt=s[ce],s.hasOwnProperty(ce)&&rt!=null&&!c.hasOwnProperty(ce)&&en(i,a,ce,null,c,rt);for(et in c)if(rt=c[et],lt=s[et],c.hasOwnProperty(et)&&rt!==lt&&(rt!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,a));break;default:en(i,a,et,rt,c,lt)}return;default:if(Ca(a)){for(var nn in s)rt=s[nn],s.hasOwnProperty(nn)&&rt!==void 0&&!c.hasOwnProperty(nn)&&Rm(i,a,nn,void 0,c,rt);for(dt in c)rt=c[dt],lt=s[dt],!c.hasOwnProperty(dt)||rt===lt||rt===void 0&&lt===void 0||Rm(i,a,dt,rt,c,lt);return}}for(var K in s)rt=s[K],s.hasOwnProperty(K)&&rt!=null&&!c.hasOwnProperty(K)&&en(i,a,K,null,c,rt);for(gt in c)rt=c[gt],lt=s[gt],!c.hasOwnProperty(gt)||rt===lt||rt==null&&lt==null||en(i,a,gt,rt,c,lt)}function I3(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ZT(){if(typeof performance.getEntriesByType=="function"){for(var i=0,a=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var h=s[c],d=h.transferSize,y=h.initiatorType,A=h.duration;if(d&&A&&I3(y)){for(y=0,A=h.responseEnd,c+=1;c<s.length;c++){var G=s[c],et=G.startTime;if(et>A)break;var dt=G.transferSize,gt=G.initiatorType;dt&&I3(gt)&&(G=G.responseEnd,y+=dt*(G<A?1:(A-et)/(G-et)))}if(--c,a+=8*(d+y)/(h.duration/1e3),i++,10<i)break}}if(0<i)return a/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Cm=null,Dm=null;function qf(i){return i.nodeType===9?i:i.ownerDocument}function B3(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z3(i,a){if(i===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&a==="foreignObject"?0:i}function Um(i,a){return i==="textarea"||i==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Lm=null;function KT(){var i=window.event;return i&&i.type==="popstate"?i===Lm?!1:(Lm=i,!0):(Lm=null,!1)}var G3=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,H3=typeof Promise=="function"?Promise:void 0,JT=typeof queueMicrotask=="function"?queueMicrotask:typeof H3<"u"?function(i){return H3.resolve(null).then(i).catch($T)}:G3;function $T(i){setTimeout(function(){throw i})}function hs(i){return i==="head"}function V3(i,a){var s=a,c=0;do{var h=s.nextSibling;if(i.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(c===0){i.removeChild(h),cl(a);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")eu(i.ownerDocument.documentElement);else if(s==="head"){s=i.ownerDocument.head,eu(s);for(var d=s.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[Gs]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=y}}else s==="body"&&eu(i.ownerDocument.body);s=h}while(s);cl(a)}function k3(i,a){var s=i;i=0;do{var c=s.nextSibling;if(s.nodeType===1?a?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(a?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(i===0)break;i--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||i++;s=c}while(s)}function Nm(i){var a=i.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Nm(s),yc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}i.removeChild(s)}}function tA(i,a,s,c){for(;i.nodeType===1;){var h=s;if(i.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(c){if(!i[Gs])switch(a){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(d=i.getAttribute("rel"),d==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(d!==h.rel||i.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||i.getAttribute("title")!==(h.title==null?null:h.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(d=i.getAttribute("src"),(d!==(h.src==null?null:h.src)||i.getAttribute("type")!==(h.type==null?null:h.type)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(a==="input"&&i.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&i.getAttribute("name")===d)return i}else return i;if(i=ha(i.nextSibling),i===null)break}return null}function eA(i,a,s){if(a==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!s||(i=ha(i.nextSibling),i===null))return null;return i}function X3(i,a){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!a||(i=ha(i.nextSibling),i===null))return null;return i}function Om(i){return i.data==="$?"||i.data==="$~"}function Pm(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function nA(i,a){var s=i.ownerDocument;if(i.data==="$~")i._reactRetry=a;else if(i.data!=="$?"||s.readyState!=="loading")a();else{var c=function(){a(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),i._reactRetry=c}}function ha(i){for(;i!=null;i=i.nextSibling){var a=i.nodeType;if(a===1||a===3)break;if(a===8){if(a=i.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return i}var Fm=null;function W3(i){i=i.nextSibling;for(var a=0;i;){if(i.nodeType===8){var s=i.data;if(s==="/$"||s==="/&"){if(a===0)return ha(i.nextSibling);a--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||a++}i=i.nextSibling}return null}function q3(i){i=i.previousSibling;for(var a=0;i;){if(i.nodeType===8){var s=i.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(a===0)return i;a--}else s!=="/$"&&s!=="/&"||a++}i=i.previousSibling}return null}function Y3(i,a,s){switch(a=qf(s),i){case"html":if(i=a.documentElement,!i)throw Error(r(452));return i;case"head":if(i=a.head,!i)throw Error(r(453));return i;case"body":if(i=a.body,!i)throw Error(r(454));return i;default:throw Error(r(451))}}function eu(i){for(var a=i.attributes;a.length;)i.removeAttributeNode(a[0]);yc(i)}var da=new Map,j3=new Set;function Yf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Ar=z.d;z.d={f:iA,r:aA,D:rA,C:sA,L:oA,m:lA,X:uA,S:cA,M:fA};function iA(){var i=Ar.f(),a=Bf();return i||a}function aA(i){var a=Yr(i);a!==null&&a.tag===5&&a.type==="form"?f2(a):Ar.r(i)}var sl=typeof document>"u"?null:document;function Z3(i,a,s){var c=sl;if(c&&typeof a=="string"&&a){var h=he(a);h='link[rel="'+i+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),j3.has(h)||(j3.add(h),i={rel:i,crossOrigin:s,href:a},c.querySelector(h)===null&&(a=c.createElement("link"),li(a,"link",i),w(a),c.head.appendChild(a)))}}function rA(i){Ar.D(i),Z3("dns-prefetch",i,null)}function sA(i,a){Ar.C(i,a),Z3("preconnect",i,a)}function oA(i,a,s){Ar.L(i,a,s);var c=sl;if(c&&i&&a){var h='link[rel="preload"][as="'+he(a)+'"]';a==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+he(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+he(s.imageSizes)+'"]')):h+='[href="'+he(i)+'"]';var d=h;switch(a){case"style":d=ol(i);break;case"script":d=ll(i)}da.has(d)||(i=_({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:i,as:a},s),da.set(d,i),c.querySelector(h)!==null||a==="style"&&c.querySelector(nu(d))||a==="script"&&c.querySelector(iu(d))||(a=c.createElement("link"),li(a,"link",i),w(a),c.head.appendChild(a)))}}function lA(i,a){Ar.m(i,a);var s=sl;if(s&&i){var c=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+he(c)+'"][href="'+he(i)+'"]',d=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ll(i)}if(!da.has(d)&&(i=_({rel:"modulepreload",href:i},a),da.set(d,i),s.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(iu(d)))return}c=s.createElement("link"),li(c,"link",i),w(c),s.head.appendChild(c)}}}function cA(i,a,s){Ar.S(i,a,s);var c=sl;if(c&&i){var h=jr(c).hoistableStyles,d=ol(i);a=a||"default";var y=h.get(d);if(!y){var A={loading:0,preload:null};if(y=c.querySelector(nu(d)))A.loading=5;else{i=_({rel:"stylesheet",href:i,"data-precedence":a},s),(s=da.get(d))&&Im(i,s);var G=y=c.createElement("link");w(G),li(G,"link",i),G._p=new Promise(function(et,dt){G.onload=et,G.onerror=dt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,jf(y,a,c)}y={type:"stylesheet",instance:y,count:1,state:A},h.set(d,y)}}}function uA(i,a){Ar.X(i,a);var s=sl;if(s&&i){var c=jr(s).hoistableScripts,h=ll(i),d=c.get(h);d||(d=s.querySelector(iu(h)),d||(i=_({src:i,async:!0},a),(a=da.get(h))&&Bm(i,a),d=s.createElement("script"),w(d),li(d,"link",i),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},c.set(h,d))}}function fA(i,a){Ar.M(i,a);var s=sl;if(s&&i){var c=jr(s).hoistableScripts,h=ll(i),d=c.get(h);d||(d=s.querySelector(iu(h)),d||(i=_({src:i,async:!0,type:"module"},a),(a=da.get(h))&&Bm(i,a),d=s.createElement("script"),w(d),li(d,"link",i),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},c.set(h,d))}}function K3(i,a,s,c){var h=(h=nt.current)?Yf(h):null;if(!h)throw Error(r(446));switch(i){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=ol(s.href),s=jr(h).hoistableStyles,c=s.get(a),c||(c={type:"style",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){i=ol(s.href);var d=jr(h).hoistableStyles,y=d.get(i);if(y||(h=h.ownerDocument||h,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(i,y),(d=h.querySelector(nu(i)))&&!d._p&&(y.instance=d,y.state.loading=5),da.has(i)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},da.set(i,s),d||hA(h,i,s,y.state))),a&&c===null)throw Error(r(528,""));return y}if(a&&c!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ll(s),s=jr(h).hoistableScripts,c=s.get(a),c||(c={type:"script",instance:null,count:0,state:null},s.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,i))}}function ol(i){return'href="'+he(i)+'"'}function nu(i){return'link[rel="stylesheet"]['+i+"]"}function Q3(i){return _({},i,{"data-precedence":i.precedence,precedence:null})}function hA(i,a,s,c){i.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=i.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),li(a,"link",s),w(a),i.head.appendChild(a))}function ll(i){return'[src="'+he(i)+'"]'}function iu(i){return"script[async]"+i}function J3(i,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var c=i.querySelector('style[data-href~="'+he(s.href)+'"]');if(c)return a.instance=c,w(c),c;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(i.ownerDocument||i).createElement("style"),w(c),li(c,"style",h),jf(c,s.precedence,i),a.instance=c;case"stylesheet":h=ol(s.href);var d=i.querySelector(nu(h));if(d)return a.state.loading|=4,a.instance=d,w(d),d;c=Q3(s),(h=da.get(h))&&Im(c,h),d=(i.ownerDocument||i).createElement("link"),w(d);var y=d;return y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),li(d,"link",c),a.state.loading|=4,jf(d,s.precedence,i),a.instance=d;case"script":return d=ll(s.src),(h=i.querySelector(iu(d)))?(a.instance=h,w(h),h):(c=s,(h=da.get(d))&&(c=_({},s),Bm(c,h)),i=i.ownerDocument||i,h=i.createElement("script"),w(h),li(h,"link",c),i.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,jf(c,s.precedence,i));return a.instance}function jf(i,a,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,d=h,y=0;y<c.length;y++){var A=c[y];if(A.dataset.precedence===a)d=A;else if(d!==h)break}d?d.parentNode.insertBefore(i,d.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(i,a.firstChild))}function Im(i,a){i.crossOrigin==null&&(i.crossOrigin=a.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=a.referrerPolicy),i.title==null&&(i.title=a.title)}function Bm(i,a){i.crossOrigin==null&&(i.crossOrigin=a.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=a.referrerPolicy),i.integrity==null&&(i.integrity=a.integrity)}var Zf=null;function $3(i,a,s){if(Zf===null){var c=new Map,h=Zf=new Map;h.set(s,c)}else h=Zf,c=h.get(s),c||(c=new Map,h.set(s,c));if(c.has(i))return c;for(c.set(i,null),s=s.getElementsByTagName(i),h=0;h<s.length;h++){var d=s[h];if(!(d[Gs]||d[Nn]||i==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(a)||"";y=i+y;var A=c.get(y);A?A.push(d):c.set(y,[d])}}return c}function tx(i,a,s){i=i.ownerDocument||i,i.head.insertBefore(s,a==="title"?i.querySelector("head > title"):null)}function dA(i,a,s){if(s===1||a.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return i=a.disabled,typeof a.precedence=="string"&&i==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ex(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function pA(i,a,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=ol(c.href),d=a.querySelector(nu(h));if(d){a=d._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(i.count++,i=Kf.bind(i),a.then(i,i)),s.state.loading|=4,s.instance=d,w(d);return}d=a.ownerDocument||a,c=Q3(c),(h=da.get(h))&&Im(c,h),d=d.createElement("link"),w(d);var y=d;y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),li(d,"link",c),s.instance=d}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(s,a),(a=s.state.preload)&&(s.state.loading&3)===0&&(i.count++,s=Kf.bind(i),a.addEventListener("load",s),a.addEventListener("error",s))}}var zm=0;function mA(i,a){return i.stylesheets&&i.count===0&&Jf(i,i.stylesheets),0<i.count||0<i.imgCount?function(s){var c=setTimeout(function(){if(i.stylesheets&&Jf(i,i.stylesheets),i.unsuspend){var d=i.unsuspend;i.unsuspend=null,d()}},6e4+a);0<i.imgBytes&&zm===0&&(zm=62500*ZT());var h=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&Jf(i,i.stylesheets),i.unsuspend)){var d=i.unsuspend;i.unsuspend=null,d()}},(i.imgBytes>zm?50:800)+a);return i.unsuspend=s,function(){i.unsuspend=null,clearTimeout(c),clearTimeout(h)}}:null}function Kf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var Qf=null;function Jf(i,a){i.stylesheets=null,i.unsuspend!==null&&(i.count++,Qf=new Map,a.forEach(gA,i),Qf=null,Kf.call(i))}function gA(i,a){if(!(a.state.loading&4)){var s=Qf.get(i);if(s)var c=s.get(null);else{s=new Map,Qf.set(i,s);for(var h=i.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var y=h[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),c=y)}c&&s.set(null,c)}h=a.instance,y=h.getAttribute("data-precedence"),d=s.get(y)||c,d===c&&s.set(null,h),s.set(y,h),this.count++,c=Kf.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),d?d.parentNode.insertBefore(h,d.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(h,i.firstChild)),a.state.loading|=4}}var au={$$typeof:U,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function _A(i,a,s,c,h,d,y,A,G){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function nx(i,a,s,c,h,d,y,A,G,et,dt,gt){return i=new _A(i,a,s,y,G,et,dt,gt,A),a=1,d===!0&&(a|=24),d=zi(3,null,null,a),i.current=d,d.stateNode=i,a=vp(),a.refCount++,i.pooledCache=a,a.refCount++,d.memoizedState={element:c,isDehydrated:s,cache:a},Mp(d),i}function ix(i){return i?(i=zo,i):zo}function ax(i,a,s,c,h,d){h=ix(h),c.context===null?c.context=h:c.pendingContext=h,c=es(a),c.payload={element:s},d=d===void 0?null:d,d!==null&&(c.callback=d),s=ns(i,c,a),s!==null&&(Di(s,i,a),Fc(s,i,a))}function rx(i,a){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var s=i.retryLane;i.retryLane=s!==0&&s<a?s:a}}function Gm(i,a){rx(i,a),(i=i.alternate)&&rx(i,a)}function sx(i){if(i.tag===13||i.tag===31){var a=Ws(i,67108864);a!==null&&Di(a,i,67108864),Gm(i,67108864)}}function ox(i){if(i.tag===13||i.tag===31){var a=Xi();a=_c(a);var s=Ws(i,a);s!==null&&Di(s,i,a),Gm(i,a)}}var $f=!0;function vA(i,a,s,c){var h=B.T;B.T=null;var d=z.p;try{z.p=2,Hm(i,a,s,c)}finally{z.p=d,B.T=h}}function xA(i,a,s,c){var h=B.T;B.T=null;var d=z.p;try{z.p=8,Hm(i,a,s,c)}finally{z.p=d,B.T=h}}function Hm(i,a,s,c){if($f){var h=Vm(c);if(h===null)wm(i,a,c,th,s),cx(i,c);else if(SA(h,i,a,s,c))c.stopPropagation();else if(cx(i,c),a&4&&-1<yA.indexOf(i)){for(;h!==null;){var d=Yr(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=St(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var G=1<<31-Ot(y);A.entanglements[1]|=G,y&=~G}ja(d),(Xe&6)===0&&(Ff=E()+500,Jc(0))}}break;case 31:case 13:A=Ws(d,2),A!==null&&Di(A,d,2),Bf(),Gm(d,2)}if(d=Vm(c),d===null&&wm(i,a,c,th,s),d===h)break;h=d}h!==null&&c.stopPropagation()}else wm(i,a,c,null,s)}}function Vm(i){return i=Xd(i),km(i)}var th=null;function km(i){if(th=null,i=qr(i),i!==null){var a=l(i);if(a===null)i=null;else{var s=a.tag;if(s===13){if(i=u(a),i!==null)return i;i=null}else if(s===31){if(i=f(a),i!==null)return i;i=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;i=null}else a!==i&&(i=null)}}return th=i,null}function lx(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ht:return 2;case _t:return 8;case ft:case Jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Xm=!1,ds=null,ps=null,ms=null,ru=new Map,su=new Map,gs=[],yA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cx(i,a){switch(i){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":ru.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(a.pointerId)}}function ou(i,a,s,c,h,d){return i===null||i.nativeEvent!==d?(i={blockedOn:a,domEventName:s,eventSystemFlags:c,nativeEvent:d,targetContainers:[h]},a!==null&&(a=Yr(a),a!==null&&sx(a)),i):(i.eventSystemFlags|=c,a=i.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),i)}function SA(i,a,s,c,h){switch(a){case"focusin":return ds=ou(ds,i,a,s,c,h),!0;case"dragenter":return ps=ou(ps,i,a,s,c,h),!0;case"mouseover":return ms=ou(ms,i,a,s,c,h),!0;case"pointerover":var d=h.pointerId;return ru.set(d,ou(ru.get(d)||null,i,a,s,c,h)),!0;case"gotpointercapture":return d=h.pointerId,su.set(d,ou(su.get(d)||null,i,a,s,c,h)),!0}return!1}function ux(i){var a=qr(i.target);if(a!==null){var s=l(a);if(s!==null){if(a=s.tag,a===13){if(a=u(s),a!==null){i.blockedOn=a,Xa(i.priority,function(){ox(s)});return}}else if(a===31){if(a=f(s),a!==null){i.blockedOn=a,Xa(i.priority,function(){ox(s)});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){i.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}i.blockedOn=null}function eh(i){if(i.blockedOn!==null)return!1;for(var a=i.targetContainers;0<a.length;){var s=Vm(i.nativeEvent);if(s===null){s=i.nativeEvent;var c=new s.constructor(s.type,s);kd=c,s.target.dispatchEvent(c),kd=null}else return a=Yr(s),a!==null&&sx(a),i.blockedOn=s,!1;a.shift()}return!0}function fx(i,a,s){eh(i)&&s.delete(a)}function MA(){Xm=!1,ds!==null&&eh(ds)&&(ds=null),ps!==null&&eh(ps)&&(ps=null),ms!==null&&eh(ms)&&(ms=null),ru.forEach(fx),su.forEach(fx)}function nh(i,a){i.blockedOn===a&&(i.blockedOn=null,Xm||(Xm=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,MA)))}var ih=null;function hx(i){ih!==i&&(ih=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){ih===i&&(ih=null);for(var a=0;a<i.length;a+=3){var s=i[a],c=i[a+1],h=i[a+2];if(typeof c!="function"){if(km(c||s)===null)continue;break}var d=Yr(s);d!==null&&(i.splice(a,3),a-=3,Vp(d,{pending:!0,data:h,method:s.method,action:c},c,h))}}))}function cl(i){function a(G){return nh(G,i)}ds!==null&&nh(ds,i),ps!==null&&nh(ps,i),ms!==null&&nh(ms,i),ru.forEach(a),su.forEach(a);for(var s=0;s<gs.length;s++){var c=gs[s];c.blockedOn===i&&(c.blockedOn=null)}for(;0<gs.length&&(s=gs[0],s.blockedOn===null);)ux(s),s.blockedOn===null&&gs.shift();if(s=(i.ownerDocument||i).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var h=s[c],d=s[c+1],y=h[$n]||null;if(typeof d=="function")y||hx(s);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(h=d,y=d[$n]||null)A=y.formAction;else if(km(h)!==null)continue}else A=y.action;typeof A=="function"?s[c+1]=A:(s.splice(c,3),c-=3),hx(s)}}}function dx(){function i(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return h=y})},focusReset:"manual",scroll:"manual"})}function a(){h!==null&&(h(),h=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,h=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),h!==null&&(h(),h=null)}}}function Wm(i){this._internalRoot=i}ah.prototype.render=Wm.prototype.render=function(i){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,c=Xi();ax(s,c,i,a,null,null)},ah.prototype.unmount=Wm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var a=i.containerInfo;ax(i.current,2,null,i,null,null),Bf(),a[Ra]=null}};function ah(i){this._internalRoot=i}ah.prototype.unstable_scheduleHydration=function(i){if(i){var a=vc();i={blockedOn:null,target:i,priority:a};for(var s=0;s<gs.length&&a!==0&&a<gs[s].priority;s++);gs.splice(s,0,i),s===0&&ux(i)}};var px=t.version;if(px!=="19.2.1")throw Error(r(527,px,"19.2.1"));z.findDOMNode=function(i){var a=i._reactInternals;if(a===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=m(a),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var EA={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rh.isDisabled&&rh.supportsFiber)try{Mt=rh.inject(EA),bt=rh}catch{}}return cu.createRoot=function(i,a){if(!o(i))throw Error(r(299));var s=!1,c="",h=S2,d=M2,y=E2;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError)),a=nx(i,1,!1,null,null,s,c,null,h,d,y,dx),i[Ra]=a.current,Am(i),new Wm(a)},cu.hydrateRoot=function(i,a,s){if(!o(i))throw Error(r(299));var c=!1,h="",d=S2,y=M2,A=E2,G=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),a=nx(i,1,!0,a,s??null,c,h,G,d,y,A,dx),a.context=ix(null),s=a.current,c=Xi(),c=_c(c),h=es(c),h.callback=null,ns(s,h,c),s=c,a.current.lanes=s,fi(a,s),ja(a),i[Ra]=a.current,Am(i),new ah(a)},cu.version="19.2.1",cu}var bx;function OA(){if(bx)return jm.exports;bx=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),jm.exports=NA(),jm.exports}var PA=OA();const FA=BS(PA);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const h1="182",IA=0,Tx=1,BA=2,zh=1,zA=2,Eu=3,Os=0,Ni=1,Fa=2,ir=0,yo=1,Qh=2,Ax=3,wx=4,GA=5,po=100,HA=101,VA=102,kA=103,XA=104,WA=200,qA=201,YA=202,jA=203,Y0=204,j0=205,ZA=206,KA=207,QA=208,JA=209,$A=210,t4=211,e4=212,n4=213,i4=214,Z0=0,K0=1,Q0=2,zl=3,J0=4,$0=5,tg=6,eg=7,zS=0,a4=1,r4=2,ar=0,GS=1,HS=2,VS=3,d1=4,kS=5,XS=6,WS=7,qS=300,Mo=301,Gl=302,ng=303,ig=304,cd=306,ag=1e3,Or=1001,rg=1002,ci=1003,s4=1004,sh=1005,gi=1006,Jm=1007,go=1008,Sa=1009,YS=1010,jS=1011,Lu=1012,p1=1013,rr=1014,Ba=1015,Ki=1016,m1=1017,g1=1018,Nu=1020,ZS=35902,KS=35899,QS=1021,JS=1022,za=1023,Gr=1026,_o=1027,_1=1028,v1=1029,Hl=1030,x1=1031,y1=1033,Gh=33776,Hh=33777,Vh=33778,kh=33779,sg=35840,og=35841,lg=35842,cg=35843,ug=36196,fg=37492,hg=37496,dg=37488,pg=37489,mg=37490,gg=37491,_g=37808,vg=37809,xg=37810,yg=37811,Sg=37812,Mg=37813,Eg=37814,bg=37815,Tg=37816,Ag=37817,wg=37818,Rg=37819,Cg=37820,Dg=37821,Ug=36492,Lg=36494,Ng=36495,Og=36283,Pg=36284,Fg=36285,Ig=36286,o4=3200,l4=0,c4=1,Ts="",va="srgb",Vl="srgb-linear",Jh="linear",$e="srgb",ul=7680,Rx=519,u4=512,f4=513,h4=514,S1=515,d4=516,p4=517,M1=518,m4=519,Bg=35044,Cx="300 es",nr=2e3,$h=2001;function $S(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ou(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function g4(){const e=Ou("canvas");return e.style.display="block",e}const Dx={};function td(...e){const t="THREE."+e.shift();console.log(t,...e)}function de(...e){const t="THREE."+e.shift();console.warn(t,...e)}function Oe(...e){const t="THREE."+e.shift();console.error(t,...e)}function Pu(...e){const t=e.join(" ");t in Dx||(Dx[t]=!0,de(...e))}function _4(e,t,n){return new Promise(function(r,o){function l(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:o();break;case e.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}class nc{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,t);t.target=null}}}const di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$m=Math.PI/180,zg=180/Math.PI;function Cs(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(di[e&255]+di[e>>8&255]+di[e>>16&255]+di[e>>24&255]+"-"+di[t&255]+di[t>>8&255]+"-"+di[t>>16&15|64]+di[t>>24&255]+"-"+di[n&63|128]+di[n>>8&255]+"-"+di[n>>16&255]+di[n>>24&255]+di[r&255]+di[r>>8&255]+di[r>>16&255]+di[r>>24&255]).toLowerCase()}function Ae(e,t,n){return Math.max(t,Math.min(n,e))}function v4(e,t){return(e%t+t)%t}function t0(e,t,n){return(1-n)*e+n*t}function er(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function an(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class Gt{constructor(t=0,n=0){Gt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,o=t.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*r-u*o+t.x,this.y=l*o+u*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ku{constructor(t=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=o}static slerpFlat(t,n,r,o,l,u,f){let p=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3],v=l[u+0],S=l[u+1],b=l[u+2],R=l[u+3];if(f<=0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_;return}if(f>=1){t[n+0]=v,t[n+1]=S,t[n+2]=b,t[n+3]=R;return}if(_!==R||p!==v||m!==S||g!==b){let M=p*v+m*S+g*b+_*R;M<0&&(v=-v,S=-S,b=-b,R=-R,M=-M);let x=1-f;if(M<.9995){const L=Math.acos(M),U=Math.sin(L);x=Math.sin(x*L)/U,f=Math.sin(f*L)/U,p=p*x+v*f,m=m*x+S*f,g=g*x+b*f,_=_*x+R*f}else{p=p*x+v*f,m=m*x+S*f,g=g*x+b*f,_=_*x+R*f;const L=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=L,m*=L,g*=L,_*=L}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,r,o,l,u){const f=r[o],p=r[o+1],m=r[o+2],g=r[o+3],_=l[u],v=l[u+1],S=l[u+2],b=l[u+3];return t[n]=f*b+g*_+p*S-m*v,t[n+1]=p*b+g*v+m*_-f*S,t[n+2]=m*b+g*S+f*v-p*_,t[n+3]=g*b-f*_-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,o){return this._x=t,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,o=t._y,l=t._z,u=t._order,f=Math.cos,p=Math.sin,m=f(r/2),g=f(o/2),_=f(l/2),v=p(r/2),S=p(o/2),b=p(l/2);switch(u){case"XYZ":this._x=v*g*_+m*S*b,this._y=m*S*_-v*g*b,this._z=m*g*b+v*S*_,this._w=m*g*_-v*S*b;break;case"YXZ":this._x=v*g*_+m*S*b,this._y=m*S*_-v*g*b,this._z=m*g*b-v*S*_,this._w=m*g*_+v*S*b;break;case"ZXY":this._x=v*g*_-m*S*b,this._y=m*S*_+v*g*b,this._z=m*g*b+v*S*_,this._w=m*g*_-v*S*b;break;case"ZYX":this._x=v*g*_-m*S*b,this._y=m*S*_+v*g*b,this._z=m*g*b-v*S*_,this._w=m*g*_+v*S*b;break;case"YZX":this._x=v*g*_+m*S*b,this._y=m*S*_+v*g*b,this._z=m*g*b-v*S*_,this._w=m*g*_-v*S*b;break;case"XZY":this._x=v*g*_-m*S*b,this._y=m*S*_-v*g*b,this._z=m*g*b+v*S*_,this._w=m*g*_+v*S*b;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],o=n[4],l=n[8],u=n[1],f=n[5],p=n[9],m=n[2],g=n[6],_=n[10],v=r+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,o=t._y,l=t._z,u=t._w,f=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+u*f+o*m-l*p,this._y=o*g+u*p+l*f-r*m,this._z=l*g+u*m+r*p-o*f,this._w=u*g-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let r=t._x,o=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const m=Math.acos(f),g=Math.sin(m);p=Math.sin(p*m)/g,n=Math.sin(n*m)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,r=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ux.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ux.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,l=t.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(t){const n=this.x,r=this.y,o=this.z,l=t.x,u=t.y,f=t.z,p=t.w,m=2*(u*o-f*r),g=2*(f*n-l*o),_=2*(l*r-u*n);return this.x=n+p*m+u*_-f*g,this.y=r+p*g+f*m-l*_,this.z=o+p*_+l*g-u*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,o=t.y,l=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return e0.copy(this).projectOnVector(t),this.sub(e0)}reflect(t){return this.sub(e0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return n*n+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const o=Math.sin(n)*t;return this.x=o*Math.sin(r),this.y=Math.cos(n)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const e0=new X,Ux=new ku;class ye{constructor(t,n,r,o,l,u,f,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,o,l,u,f,p,m)}set(t,n,r,o,l,u,f,p,m){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=l,g[5]=p,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,l=this.elements,u=r[0],f=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],S=r[5],b=r[8],R=o[0],M=o[3],x=o[6],L=o[1],U=o[4],C=o[7],P=o[2],F=o[5],O=o[8];return l[0]=u*R+f*L+p*P,l[3]=u*M+f*U+p*F,l[6]=u*x+f*C+p*O,l[1]=m*R+g*L+_*P,l[4]=m*M+g*U+_*F,l[7]=m*x+g*C+_*O,l[2]=v*R+S*L+b*P,l[5]=v*M+S*U+b*F,l[8]=v*x+S*C+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],p=t[6],m=t[7],g=t[8];return n*u*g-n*f*m-r*l*g+r*f*p+o*l*m-o*u*p}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],p=t[6],m=t[7],g=t[8],_=g*u-f*m,v=f*p-g*l,S=m*l-u*p,b=n*_+r*v+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(o*m-g*r)*R,t[2]=(f*r-o*u)*R,t[3]=v*R,t[4]=(g*n-o*p)*R,t[5]=(o*l-f*n)*R,t[6]=S*R,t[7]=(r*p-m*n)*R,t[8]=(u*n-r*l)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,o,l,u,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*f)+u+t,-o*m,o*p,-o*(-m*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(n0.makeScale(t,n)),this}rotate(t){return this.premultiply(n0.makeRotation(-t)),this}translate(t,n){return this.premultiply(n0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const n0=new ye,Lx=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nx=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x4(){const e={enabled:!0,workingColorSpace:Vl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===$e&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===$e&&(o.r=Ol(o.r),o.g=Ol(o.g),o.b=Ol(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ts?Jh:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(o,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Vl]:{primaries:t,whitePoint:r,transfer:Jh,toXYZ:Lx,fromXYZ:Nx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:va},outputColorSpaceConfig:{drawingBufferColorSpace:va}},[va]:{primaries:t,whitePoint:r,transfer:$e,toXYZ:Lx,fromXYZ:Nx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:va}}}),e}const Pe=x4();function Fr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ol(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let fl;class y4{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{fl===void 0&&(fl=Ou("canvas")),fl.width=t.width,fl.height=t.height;const o=fl.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=fl}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ou("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Fr(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fr(n[r]/255)*255):n[r]=Fr(n[r]);return{data:n,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let S4=0;class E1{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S4++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(i0(o[u].image)):l.push(i0(o[u]))}else l=i0(o);r.url=l}return n||(t.images[this.uuid]=r),r}}function i0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?y4.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let M4=0;const a0=new X;class ui extends nc{constructor(t=ui.DEFAULT_IMAGE,n=ui.DEFAULT_MAPPING,r=Or,o=Or,l=gi,u=go,f=za,p=Sa,m=ui.DEFAULT_ANISOTROPY,g=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M4++}),this.uuid=Cs(),this.name="",this.source=new E1(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(a0).x}get height(){return this.source.getSize(a0).y}get depth(){return this.source.getSize(a0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){de(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ag:t.x=t.x-Math.floor(t.x);break;case Or:t.x=t.x<0?0:1;break;case rg:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ag:t.y=t.y-Math.floor(t.y);break;case Or:t.y=t.y<0?0:1;break;case rg:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=qS;ui.DEFAULT_ANISOTROPY=1;class Un{constructor(t=0,n=0,r=0,o=1){Un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,o){return this.x=t,this.y=n,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,o=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,o,l;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],b=p[9],R=p[2],M=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(b+M)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(m+1)/2,C=(S+1)/2,P=(x+1)/2,F=(g+v)/4,O=(_+R)/4,k=(b+M)/4;return U>C&&U>P?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=F/r,l=O/r):C>P?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=F/o,l=k/o):P<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),r=O/l,o=k/l),this.set(r,o,l,n),this}let L=Math.sqrt((M-b)*(M-b)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(M-b)/L,this.y=(_-R)/L,this.z=(v-g)/L,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this.w=Ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this.w=Ae(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E4 extends nc{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new Un(0,0,t,n),this.scissorTest=!1,this.viewport=new Un(0,0,t,n);const o={width:t,height:n,depth:r.depth},l=new ui(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new E1(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends E4{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class tM extends ui{constructor(t=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class b4 extends ui{constructor(t=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Na.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Na.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Na.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Na):Na.fromBufferAttribute(l,u),Na.applyMatrix4(t.matrixWorld),this.expandByPoint(Na);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oh.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oh.copy(r.boundingBox)),oh.applyMatrix4(t.matrixWorld),this.union(oh)}const o=t.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Na),Na.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(uu),lh.subVectors(this.max,uu),hl.subVectors(t.a,uu),dl.subVectors(t.b,uu),pl.subVectors(t.c,uu),vs.subVectors(dl,hl),xs.subVectors(pl,dl),ao.subVectors(hl,pl);let n=[0,-vs.z,vs.y,0,-xs.z,xs.y,0,-ao.z,ao.y,vs.z,0,-vs.x,xs.z,0,-xs.x,ao.z,0,-ao.x,-vs.y,vs.x,0,-xs.y,xs.x,0,-ao.y,ao.x,0];return!r0(n,hl,dl,pl,lh)||(n=[1,0,0,0,1,0,0,0,1],!r0(n,hl,dl,pl,lh))?!1:(ch.crossVectors(vs,xs),n=[ch.x,ch.y,ch.z],r0(n,hl,dl,pl,lh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Na).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Na).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wr=[new X,new X,new X,new X,new X,new X,new X,new X],Na=new X,oh=new Ao,hl=new X,dl=new X,pl=new X,vs=new X,xs=new X,ao=new X,uu=new X,lh=new X,ch=new X,ro=new X;function r0(e,t,n,r,o){for(let l=0,u=e.length-3;l<=u;l+=3){ro.fromArray(e,l);const f=o.x*Math.abs(ro.x)+o.y*Math.abs(ro.y)+o.z*Math.abs(ro.z),p=t.dot(ro),m=n.dot(ro),g=r.dot(ro);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>f)return!1}return!0}const T4=new Ao,fu=new X,s0=new X;class ic{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):T4.setFromPoints(t).getCenter(r);let o=0;for(let l=0,u=t.length;l<u;l++)o=Math.max(o,r.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fu.subVectors(t,this.center);const n=fu.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(fu,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(s0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fu.copy(t.center).add(s0)),this.expandByPoint(fu.copy(t.center).sub(s0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rr=new X,o0=new X,uh=new X,ys=new X,l0=new X,fh=new X,c0=new X;class eM{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Rr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Rr.copy(this.origin).addScaledVector(this.direction,n),Rr.distanceToSquared(t))}distanceSqToSegment(t,n,r,o){o0.copy(t).add(n).multiplyScalar(.5),uh.copy(n).sub(t).normalize(),ys.copy(this.origin).sub(o0);const l=t.distanceTo(n)*.5,u=-this.direction.dot(uh),f=ys.dot(this.direction),p=-ys.dot(uh),m=ys.lengthSq(),g=Math.abs(1-u*u);let _,v,S,b;if(g>0)if(_=u*p-f,v=u*f-p,b=l*g,_>=0)if(v>=-b)if(v<=b){const R=1/g;_*=R,v*=R,S=_*(_+u*v+2*f)+v*(u*_+v+2*p)+m}else v=l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*p)+m;else v=-l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*p)+m;else v<=-b?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+m):v<=b?(_=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+m):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+m);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(o0).addScaledVector(uh,v),S}intersectSphere(t,n){Rr.subVectors(t.center,this.origin);const r=Rr.dot(this.direction),o=Rr.dot(Rr)-r*r,l=t.radius*t.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,o,l,u,f,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,o=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,o=(t.min.x-v.x)*m),g>=0?(l=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(t){return this.intersectBox(t,Rr)!==null}intersectTriangle(t,n,r,o,l){l0.subVectors(n,t),fh.subVectors(r,t),c0.crossVectors(l0,fh);let u=this.direction.dot(c0),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ys.subVectors(this.origin,t);const p=f*this.direction.dot(fh.crossVectors(ys,fh));if(p<0)return null;const m=f*this.direction.dot(l0.cross(ys));if(m<0||p+m>u)return null;const g=-f*ys.dot(c0);return g<0?null:this.at(g/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(t,n,r,o,l,u,f,p,m,g,_,v,S,b,R,M){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,o,l,u,f,p,m,g,_,v,S,b,R,M)}set(t,n,r,o,l,u,f,p,m,g,_,v,S,b,R,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=m,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=b,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,r=t.elements,o=1/ml.setFromMatrixColumn(t,0).length(),l=1/ml.setFromMatrixColumn(t,1).length(),u=1/ml.setFromMatrixColumn(t,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,o=t.y,l=t.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=u*g,S=u*_,b=f*g,R=f*_;n[0]=p*g,n[4]=-p*_,n[8]=m,n[1]=S+b*m,n[5]=v-R*m,n[9]=-f*p,n[2]=R-v*m,n[6]=b+S*m,n[10]=u*p}else if(t.order==="YXZ"){const v=p*g,S=p*_,b=m*g,R=m*_;n[0]=v+R*f,n[4]=b*f-S,n[8]=u*m,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=S*f-b,n[6]=R+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*g,S=p*_,b=m*g,R=m*_;n[0]=v-R*f,n[4]=-u*_,n[8]=b+S*f,n[1]=S+b*f,n[5]=u*g,n[9]=R-v*f,n[2]=-u*m,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*g,S=u*_,b=f*g,R=f*_;n[0]=p*g,n[4]=b*m-S,n[8]=v*m+R,n[1]=p*_,n[5]=R*m+v,n[9]=S*m-b,n[2]=-m,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,S=u*m,b=f*p,R=f*m;n[0]=p*g,n[4]=R-v*_,n[8]=b*_+S,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-m*g,n[6]=S*_+b,n[10]=v-R*_}else if(t.order==="XZY"){const v=u*p,S=u*m,b=f*p,R=f*m;n[0]=p*g,n[4]=-_,n[8]=m*g,n[1]=v*_+R,n[5]=u*g,n[9]=S*_-b,n[2]=b*_-S,n[6]=f*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(A4,t,w4)}lookAt(t,n,r){const o=this.elements;return Wi.subVectors(t,n),Wi.lengthSq()===0&&(Wi.z=1),Wi.normalize(),Ss.crossVectors(r,Wi),Ss.lengthSq()===0&&(Math.abs(r.z)===1?Wi.x+=1e-4:Wi.z+=1e-4,Wi.normalize(),Ss.crossVectors(r,Wi)),Ss.normalize(),hh.crossVectors(Wi,Ss),o[0]=Ss.x,o[4]=hh.x,o[8]=Wi.x,o[1]=Ss.y,o[5]=hh.y,o[9]=Wi.y,o[2]=Ss.z,o[6]=hh.z,o[10]=Wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,o=n.elements,l=this.elements,u=r[0],f=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],S=r[13],b=r[2],R=r[6],M=r[10],x=r[14],L=r[3],U=r[7],C=r[11],P=r[15],F=o[0],O=o[4],k=o[8],T=o[12],D=o[1],H=o[5],j=o[9],Q=o[13],ct=o[2],st=o[6],B=o[10],z=o[14],tt=o[3],xt=o[7],yt=o[11],I=o[15];return l[0]=u*F+f*D+p*ct+m*tt,l[4]=u*O+f*H+p*st+m*xt,l[8]=u*k+f*j+p*B+m*yt,l[12]=u*T+f*Q+p*z+m*I,l[1]=g*F+_*D+v*ct+S*tt,l[5]=g*O+_*H+v*st+S*xt,l[9]=g*k+_*j+v*B+S*yt,l[13]=g*T+_*Q+v*z+S*I,l[2]=b*F+R*D+M*ct+x*tt,l[6]=b*O+R*H+M*st+x*xt,l[10]=b*k+R*j+M*B+x*yt,l[14]=b*T+R*Q+M*z+x*I,l[3]=L*F+U*D+C*ct+P*tt,l[7]=L*O+U*H+C*st+P*xt,l[11]=L*k+U*j+C*B+P*yt,l[15]=L*T+U*Q+C*z+P*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],o=t[8],l=t[12],u=t[1],f=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],S=t[14],b=t[3],R=t[7],M=t[11],x=t[15],L=p*S-m*v,U=f*S-m*_,C=f*v-p*_,P=u*S-m*g,F=u*v-p*g,O=u*_-f*g;return n*(R*L-M*U+x*C)-r*(b*L-M*P+x*F)+o*(b*U-R*P+x*O)-l*(b*C-R*F+M*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],o=t[2],l=t[3],u=t[4],f=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],S=t[11],b=t[12],R=t[13],M=t[14],x=t[15],L=_*M*m-R*v*m+R*p*S-f*M*S-_*p*x+f*v*x,U=b*v*m-g*M*m-b*p*S+u*M*S+g*p*x-u*v*x,C=g*R*m-b*_*m+b*f*S-u*R*S-g*f*x+u*_*x,P=b*_*p-g*R*p-b*f*v+u*R*v+g*f*M-u*_*M,F=n*L+r*U+o*C+l*P;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=L*O,t[1]=(R*v*l-_*M*l-R*o*S+r*M*S+_*o*x-r*v*x)*O,t[2]=(f*M*l-R*p*l+R*o*m-r*M*m-f*o*x+r*p*x)*O,t[3]=(_*p*l-f*v*l-_*o*m+r*v*m+f*o*S-r*p*S)*O,t[4]=U*O,t[5]=(g*M*l-b*v*l+b*o*S-n*M*S-g*o*x+n*v*x)*O,t[6]=(b*p*l-u*M*l-b*o*m+n*M*m+u*o*x-n*p*x)*O,t[7]=(u*v*l-g*p*l+g*o*m-n*v*m-u*o*S+n*p*S)*O,t[8]=C*O,t[9]=(b*_*l-g*R*l-b*r*S+n*R*S+g*r*x-n*_*x)*O,t[10]=(u*R*l-b*f*l+b*r*m-n*R*m-u*r*x+n*f*x)*O,t[11]=(g*f*l-u*_*l-g*r*m+n*_*m+u*r*S-n*f*S)*O,t[12]=P*O,t[13]=(g*R*o-b*_*o+b*r*v-n*R*v-g*r*M+n*_*M)*O,t[14]=(b*f*o-u*R*o-b*r*p+n*R*p+u*r*M-n*f*M)*O,t[15]=(u*_*o-g*f*o+g*r*p-n*_*p-u*r*v+n*f*v)*O,this}scale(t){const n=this.elements,r=t.x,o=t.y,l=t.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=t.x,f=t.y,p=t.z,m=l*u,g=l*f;return this.set(m*u+r,m*f-o*p,m*p+o*f,0,m*f+o*p,g*f+r,g*p-o*u,0,m*p-o*f,g*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,o,l,u){return this.set(1,r,l,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,r){const o=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,m=l+l,g=u+u,_=f+f,v=l*m,S=l*g,b=l*_,R=u*g,M=u*_,x=f*_,L=p*m,U=p*g,C=p*_,P=r.x,F=r.y,O=r.z;return o[0]=(1-(R+x))*P,o[1]=(S+C)*P,o[2]=(b-U)*P,o[3]=0,o[4]=(S-C)*F,o[5]=(1-(v+x))*F,o[6]=(M+L)*F,o[7]=0,o[8]=(b+U)*O,o[9]=(M-L)*O,o[10]=(1-(v+R))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,r){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let l=ml.set(o[0],o[1],o[2]).length();const u=ml.set(o[4],o[5],o[6]).length(),f=ml.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Oa.copy(this);const m=1/l,g=1/u,_=1/f;return Oa.elements[0]*=m,Oa.elements[1]*=m,Oa.elements[2]*=m,Oa.elements[4]*=g,Oa.elements[5]*=g,Oa.elements[6]*=g,Oa.elements[8]*=_,Oa.elements[9]*=_,Oa.elements[10]*=_,n.setFromRotationMatrix(Oa),r.x=l,r.y=u,r.z=f,this}makePerspective(t,n,r,o,l,u,f=nr,p=!1){const m=this.elements,g=2*l/(n-t),_=2*l/(r-o),v=(n+t)/(n-t),S=(r+o)/(r-o);let b,R;if(p)b=l/(u-l),R=u*l/(u-l);else if(f===nr)b=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===$h)b=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=_,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,r,o,l,u,f=nr,p=!1){const m=this.elements,g=2/(n-t),_=2/(r-o),v=-(n+t)/(n-t),S=-(r+o)/(r-o);let b,R;if(p)b=1/(u-l),R=u/(u-l);else if(f===nr)b=-2/(u-l),R=-(u+l)/(u-l);else if(f===$h)b=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=g,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=_,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=b,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const ml=new X,Oa=new un,A4=new X(0,0,0),w4=new X(1,1,1),Ss=new X,hh=new X,Wi=new X,Ox=new un,Px=new ku;class Hr{constructor(t=0,n=0,r=0,o=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,o=this._order){return this._x=t,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const o=t.elements,l=o[0],u=o[4],f=o[8],p=o[1],m=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Ox.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ox,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Px.setFromEuler(this),this.setFromQuaternion(Px,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class nM{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let R4=0;const Fx=new X,gl=new ku,Cr=new un,dh=new X,hu=new X,C4=new X,D4=new ku,Ix=new X(1,0,0),Bx=new X(0,1,0),zx=new X(0,0,1),Gx={type:"added"},U4={type:"removed"},_l={type:"childadded",child:null},u0={type:"childremoved",child:null};class _i extends nc{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R4++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const t=new X,n=new Hr,r=new ku,o=new X(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new ye}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return gl.setFromAxisAngle(t,n),this.quaternion.multiply(gl),this}rotateOnWorldAxis(t,n){return gl.setFromAxisAngle(t,n),this.quaternion.premultiply(gl),this}rotateX(t){return this.rotateOnAxis(Ix,t)}rotateY(t){return this.rotateOnAxis(Bx,t)}rotateZ(t){return this.rotateOnAxis(zx,t)}translateOnAxis(t,n){return Fx.copy(t).applyQuaternion(this.quaternion),this.position.add(Fx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ix,t)}translateY(t){return this.translateOnAxis(Bx,t)}translateZ(t){return this.translateOnAxis(zx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?dh.copy(t):dh.set(t,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),hu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(hu,dh,this.up):Cr.lookAt(dh,hu,this.up),this.quaternion.setFromRotationMatrix(Cr),o&&(Cr.extractRotation(o.matrixWorld),gl.setFromRotationMatrix(Cr),this.quaternion.premultiply(gl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gx),_l.child=t,this.dispatchEvent(_l),_l.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(U4),u0.child=t,this.dispatchEvent(u0),u0.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gx),_l.child=t,this.dispatchEvent(_l),_l.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hu,t,C4),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hu,D4,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];l(t.shapes,_)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(t.materials,this.material[p]));o.material=f}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),m=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),S=u(t.animations),b=u(t.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(f){const p=[];for(const m in f){const g=f[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}_i.DEFAULT_UP=new X(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pa=new X,Dr=new X,f0=new X,Ur=new X,vl=new X,xl=new X,Hx=new X,h0=new X,d0=new X,p0=new X,m0=new Un,g0=new Un,_0=new Un;class Ma{constructor(t=new X,n=new X,r=new X){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,o){o.subVectors(r,n),Pa.subVectors(t,n),o.cross(Pa);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,n,r,o,l){Pa.subVectors(o,n),Dr.subVectors(r,n),f0.subVectors(t,n);const u=Pa.dot(Pa),f=Pa.dot(Dr),p=Pa.dot(f0),m=Dr.dot(Dr),g=Dr.dot(f0),_=u*m-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(m*p-f*g)*v,b=(u*g-f*p)*v;return l.set(1-S-b,b,S)}static containsPoint(t,n,r,o){return this.getBarycoord(t,n,r,o,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getInterpolation(t,n,r,o,l,u,f,p){return this.getBarycoord(t,n,r,o,Ur)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Ur.x),p.addScaledVector(u,Ur.y),p.addScaledVector(f,Ur.z),p)}static getInterpolatedAttribute(t,n,r,o,l,u){return m0.setScalar(0),g0.setScalar(0),_0.setScalar(0),m0.fromBufferAttribute(t,n),g0.fromBufferAttribute(t,r),_0.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(m0,l.x),u.addScaledVector(g0,l.y),u.addScaledVector(_0,l.z),u}static isFrontFacing(t,n,r,o){return Pa.subVectors(r,n),Dr.subVectors(t,n),Pa.cross(Dr).dot(o)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,o){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,r,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pa.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),Pa.cross(Dr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ma.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ma.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,o,l){return Ma.getInterpolation(t,this.a,this.b,this.c,n,r,o,l)}containsPoint(t){return Ma.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ma.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,o=this.b,l=this.c;let u,f;vl.subVectors(o,r),xl.subVectors(l,r),h0.subVectors(t,r);const p=vl.dot(h0),m=xl.dot(h0);if(p<=0&&m<=0)return n.copy(r);d0.subVectors(t,o);const g=vl.dot(d0),_=xl.dot(d0);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),n.copy(r).addScaledVector(vl,u);p0.subVectors(t,l);const S=vl.dot(p0),b=xl.dot(p0);if(b>=0&&S<=b)return n.copy(l);const R=S*m-p*b;if(R<=0&&m>=0&&b<=0)return f=m/(m-b),n.copy(r).addScaledVector(xl,f);const M=g*b-S*_;if(M<=0&&_-g>=0&&S-b>=0)return Hx.subVectors(l,o),f=(_-g)/(_-g+(S-b)),n.copy(o).addScaledVector(Hx,f);const x=1/(M+R+v);return u=R*x,f=v*x,n.copy(r).addScaledVector(vl,u).addScaledVector(xl,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const iM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},ph={h:0,s:0,l:0};function v0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class pe{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=va){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,r,o=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=r,Pe.colorSpaceToWorking(this,o),this}setHSL(t,n,r,o=Pe.workingColorSpace){if(t=v4(t,1),n=Ae(n,0,1),r=Ae(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=v0(u,l,t+1/3),this.g=v0(u,l,t),this.b=v0(u,l,t-1/3)}return Pe.colorSpaceToWorking(this,o),this}setStyle(t,n=va){function r(l){l!==void 0&&parseFloat(l)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:de("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=va){const r=iM[t.toLowerCase()];return r!==void 0?this.setHex(r,n):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fr(t.r),this.g=Fr(t.g),this.b=Fr(t.b),this}copyLinearToSRGB(t){return this.r=Ol(t.r),this.g=Ol(t.g),this.b=Ol(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=va){return Pe.workingToColorSpace(pi.copy(this),t),Math.round(Ae(pi.r*255,0,255))*65536+Math.round(Ae(pi.g*255,0,255))*256+Math.round(Ae(pi.b*255,0,255))}getHexString(t=va){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(pi.copy(this),n);const r=pi.r,o=pi.g,l=pi.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const g=(f+u)/2;if(f===u)p=0,m=0;else{const _=u-f;switch(m=g<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(pi.copy(this),n),t.r=pi.r,t.g=pi.g,t.b=pi.b,t}getStyle(t=va){Pe.workingToColorSpace(pi.copy(this),t);const n=pi.r,r=pi.g,o=pi.b;return t!==va?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,n,r){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+n,Ms.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Ms),t.getHSL(ph);const r=t0(Ms.h,ph.h,n),o=t0(Ms.s,ph.s,n),l=t0(Ms.l,ph.l,n);return this.setHSL(r,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,o=this.b,l=t.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pi=new pe;pe.NAMES=iM;let L4=0;class ac extends nc{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L4++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=yo,this.side=Os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Y0,this.blendDst=j0,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){de(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(r.blending=this.blending),this.side!==Os&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Y0&&(r.blendSrc=this.blendSrc),this.blendDst!==j0&&(r.blendDst=this.blendDst),this.blendEquation!==po&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ul&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ul&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ul&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=o(t.textures),u=o(t.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class b1 extends ac{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=zS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Bn=new X,mh=new Gt;let N4=0;class Qi{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N4++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=Bg,this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=n.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)mh.fromBufferAttribute(this,n),mh.applyMatrix3(t),this.setXY(n,mh.x,mh.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix3(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(t),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=er(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=an(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=er(n,this.array)),n}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=er(n,this.array)),n}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=er(n,this.array)),n}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=er(n,this.array)),n}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),r=an(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,o){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),r=an(r,this.array),o=an(o,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,n,r,o,l){return t*=this.itemSize,this.normalized&&(n=an(n,this.array),r=an(r,this.array),o=an(o,this.array),l=an(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bg&&(t.usage=this.usage),t}}class aM extends Qi{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class rM extends Qi{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class We extends Qi{constructor(t,n,r){super(new Float32Array(t),n,r)}}let O4=0;const pa=new un,x0=new _i,yl=new X,qi=new Ao,du=new Ao,Kn=new X;class Vn extends nc{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O4++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($S(t)?rM:aM)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ye().getNormalMatrix(t);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pa.makeRotationFromQuaternion(t),this.applyMatrix4(pa),this}rotateX(t){return pa.makeRotationX(t),this.applyMatrix4(pa),this}rotateY(t){return pa.makeRotationY(t),this.applyMatrix4(pa),this}rotateZ(t){return pa.makeRotationZ(t),this.applyMatrix4(pa),this}translate(t,n,r){return pa.makeTranslation(t,n,r),this.applyMatrix4(pa),this}scale(t,n,r){return pa.makeScale(t,n,r),this.applyMatrix4(pa),this}lookAt(t){return x0.lookAt(t),x0.updateMatrix(),this.applyMatrix4(x0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yl).negate(),this.translate(yl.x,yl.y,yl.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=t.length;o<l;o++){const u=t[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new We(r,3))}else{const r=Math.min(t.length,n.count);for(let o=0;o<r;o++){const l=t[o];n.setXYZ(o,l.x,l.y,l.z||0)}t.length>n.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];qi.setFromBufferAttribute(l),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const r=this.boundingSphere.center;if(qi.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];du.setFromBufferAttribute(f),this.morphTargetsRelative?(Kn.addVectors(qi.min,du.min),qi.expandByPoint(Kn),Kn.addVectors(qi.max,du.max),qi.expandByPoint(Kn)):(qi.expandByPoint(du.min),qi.expandByPoint(du.max))}qi.getCenter(r);let o=0;for(let l=0,u=t.count;l<u;l++)Kn.fromBufferAttribute(t,l),o=Math.max(o,r.distanceToSquared(Kn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)Kn.fromBufferAttribute(f,m),p&&(yl.fromBufferAttribute(t,m),Kn.add(yl)),o=Math.max(o,r.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let k=0;k<r.count;k++)f[k]=new X,p[k]=new X;const m=new X,g=new X,_=new X,v=new Gt,S=new Gt,b=new Gt,R=new X,M=new X;function x(k,T,D){m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,T),_.fromBufferAttribute(r,D),v.fromBufferAttribute(l,k),S.fromBufferAttribute(l,T),b.fromBufferAttribute(l,D),g.sub(m),_.sub(m),S.sub(v),b.sub(v);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(H),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(H),f[k].add(R),f[T].add(R),f[D].add(R),p[k].add(M),p[T].add(M),p[D].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let k=0,T=L.length;k<T;++k){const D=L[k],H=D.start,j=D.count;for(let Q=H,ct=H+j;Q<ct;Q+=3)x(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const U=new X,C=new X,P=new X,F=new X;function O(k){P.fromBufferAttribute(o,k),F.copy(P);const T=f[k];U.copy(T),U.sub(P.multiplyScalar(P.dot(T))).normalize(),C.crossVectors(F,T);const H=C.dot(p[k])<0?-1:1;u.setXYZW(k,U.x,U.y,U.z,H)}for(let k=0,T=L.length;k<T;++k){const D=L[k],H=D.start,j=D.count;for(let Q=H,ct=H+j;Q<ct;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new X,l=new X,u=new X,f=new X,p=new X,m=new X,g=new X,_=new X;if(t)for(let v=0,S=t.count;v<S;v+=3){const b=t.getX(v+0),R=t.getX(v+1),M=t.getX(v+2);o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),f.add(g),p.add(g),m.add(g),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)Kn.fromBufferAttribute(t,n),Kn.normalize(),t.setXYZ(n,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function t(f,p){const m=f.array,g=f.itemSize,_=f.normalized,v=new m.constructor(p.length*g);let S=0,b=0;for(let R=0,M=p.length;R<M;R++){f.isInterleavedBufferAttribute?S=p[R]*f.data.stride+f.offset:S=p[R]*g;for(let x=0;x<g;x++)v[b++]=m[S++]}return new Qi(v,g,_)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=t(p,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=t(v,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(o[p]=g,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(n))}const l=t.morphAttributes;for(const m in l){const g=[],_=l[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let m=0,g=u.length;m<g;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vx=new un,so=new eM,gh=new ic,kx=new X,_h=new X,vh=new X,xh=new X,y0=new X,yh=new X,Xx=new X,Sh=new X;class $i extends _i{constructor(t=new Vn,n=new b1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(l&&f){yh.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const g=f[p],_=l[p];g!==0&&(y0.fromBufferAttribute(_,t),u?yh.addScaledVector(y0,g):yh.addScaledVector(y0.sub(n),g))}n.add(yh)}return n}raycast(t,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gh.copy(r.boundingSphere),gh.applyMatrix4(l),so.copy(t.ray).recast(t.near),!(gh.containsPoint(so.origin)===!1&&(so.intersectSphere(gh,kx)===null||so.origin.distanceToSquared(kx)>(t.far-t.near)**2))&&(Vx.copy(l).invert(),so.copy(t.ray).applyMatrix4(Vx),!(r.boundingBox!==null&&so.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,so)))}_computeIntersections(t,n,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const M=v[b],x=u[M.materialIndex],L=Math.max(M.start,S.start),U=Math.min(f.count,Math.min(M.start+M.count,S.start+S.count));for(let C=L,P=U;C<P;C+=3){const F=f.getX(C),O=f.getX(C+1),k=f.getX(C+2);o=Mh(this,x,t,r,m,g,_,F,O,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let M=b,x=R;M<x;M+=3){const L=f.getX(M),U=f.getX(M+1),C=f.getX(M+2);o=Mh(this,u,t,r,m,g,_,L,U,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const M=v[b],x=u[M.materialIndex],L=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=L,P=U;C<P;C+=3){const F=C,O=C+1,k=C+2;o=Mh(this,x,t,r,m,g,_,F,O,k),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=b,x=R;M<x;M+=3){const L=M,U=M+1,C=M+2;o=Mh(this,u,t,r,m,g,_,L,U,C),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function P4(e,t,n,r,o,l,u,f){let p;if(t.side===Ni?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,t.side===Os,f),p===null)return null;Sh.copy(f),Sh.applyMatrix4(e.matrixWorld);const m=n.ray.origin.distanceTo(Sh);return m<n.near||m>n.far?null:{distance:m,point:Sh.clone(),object:e}}function Mh(e,t,n,r,o,l,u,f,p,m){e.getVertexPosition(f,_h),e.getVertexPosition(p,vh),e.getVertexPosition(m,xh);const g=P4(e,t,n,r,_h,vh,xh,Xx);if(g){const _=new X;Ma.getBarycoord(Xx,_h,vh,xh,_),o&&(g.uv=Ma.getInterpolatedAttribute(o,f,p,m,_,new Gt)),l&&(g.uv1=Ma.getInterpolatedAttribute(l,f,p,m,_,new Gt)),u&&(g.normal=Ma.getInterpolatedAttribute(u,f,p,m,_,new X),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:m,normal:new X,materialIndex:0};Ma.getNormal(_h,vh,xh,v.normal),g.face=v,g.barycoord=_}return g}class rc extends Vn{constructor(t=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],g=[],_=[];let v=0,S=0;b("z","y","x",-1,-1,r,n,t,u,l,0),b("z","y","x",1,-1,r,n,-t,u,l,1),b("x","z","y",1,1,t,r,n,o,u,2),b("x","z","y",1,-1,t,r,-n,o,u,3),b("x","y","z",1,-1,t,n,r,o,l,4),b("x","y","z",-1,-1,t,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new We(m,3)),this.setAttribute("normal",new We(g,3)),this.setAttribute("uv",new We(_,2));function b(R,M,x,L,U,C,P,F,O,k,T){const D=C/O,H=P/k,j=C/2,Q=P/2,ct=F/2,st=O+1,B=k+1;let z=0,tt=0;const xt=new X;for(let yt=0;yt<B;yt++){const I=yt*H-Q;for(let it=0;it<st;it++){const mt=it*D-j;xt[R]=mt*L,xt[M]=I*U,xt[x]=ct,m.push(xt.x,xt.y,xt.z),xt[R]=0,xt[M]=0,xt[x]=F>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(it/O),_.push(1-yt/k),z+=1}}for(let yt=0;yt<k;yt++)for(let I=0;I<O;I++){const it=v+I+st*yt,mt=v+I+st*(yt+1),Et=v+(I+1)+st*(yt+1),It=v+(I+1)+st*yt;p.push(it,mt,It),p.push(mt,Et,It),tt+=6}f.addGroup(S,tt,T),S+=tt,v+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kl(e){const t={};for(const n in e){t[n]={};for(const r in e[n]){const o=e[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=o.clone():Array.isArray(o)?t[n][r]=o.slice():t[n][r]=o}}return t}function yi(e){const t={};for(let n=0;n<e.length;n++){const r=kl(e[n]);for(const o in r)t[o]=r[o]}return t}function F4(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function sM(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const ed={clone:kl,merge:yi};var I4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends ac{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I4,this.fragmentShader=B4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kl(t.uniforms),this.uniformsGroups=F4(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class oM extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Es=new X,Wx=new Gt,qx=new Gt;class xa extends oM{constructor(t=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=zg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($m*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zg*2*Math.atan(Math.tan($m*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,Wx,qx),n.subVectors(qx,Wx)}setViewOffset(t,n,r,o,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan($m*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sl=-90,Ml=1;class z4 extends _i{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new xa(Sl,Ml,t,n);o.layers=this.layers,this.add(o);const l=new xa(Sl,Ml,t,n);l.layers=this.layers,this.add(l);const u=new xa(Sl,Ml,t,n);u.layers=this.layers,this.add(u);const f=new xa(Sl,Ml,t,n);f.layers=this.layers,this.add(f);const p=new xa(Sl,Ml,t,n);p.layers=this.layers,this.add(p);const m=new xa(Sl,Ml,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,f,p]=n;for(const m of n)this.remove(m);if(t===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===$h)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(n,l),t.setRenderTarget(r,1,o),t.render(n,u),t.setRenderTarget(r,2,o),t.render(n,f),t.setRenderTarget(r,3,o),t.render(n,p),t.setRenderTarget(r,4,o),t.render(n,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,o),t.render(n,g),t.setRenderTarget(_,v,S),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class lM extends ui{constructor(t=[],n=Mo,r,o,l,u,f,p,m,g){super(t,n,r,o,l,u,f,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cM extends Oi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new lM(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new rc(5,5,5),l=new qn({name:"CubemapFromEquirect",uniforms:kl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Ni,blending:ir});l.uniforms.tEquirect.value=n;const u=new $i(o,l),f=n.minFilter;return n.minFilter===go&&(n.minFilter=gi),new z4(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,r=!0,o=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,r,o);t.setRenderTarget(l)}}class Eh extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G4={type:"move"};class S0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){u=!0;for(const R of t.hand.values()){const M=n.getJointPose(R,r),x=this._getHandJoint(m,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,b=.005;m.inputState.pinching&&v>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(G4)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new Eh;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class T1{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new pe(t),this.density=n}clone(){return new T1(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class H4 extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class V4{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Bg,this.updateRanges=[],this.version=0,this.uuid=Cs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let o=0,l=this.stride;o<l;o++)this.array[t+o]=n.array[r+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xi=new X;class nd{constructor(t,n,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)xi.fromBufferAttribute(this,n),xi.applyMatrix4(t),this.setXYZ(n,xi.x,xi.y,xi.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)xi.fromBufferAttribute(this,n),xi.applyNormalMatrix(t),this.setXYZ(n,xi.x,xi.y,xi.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)xi.fromBufferAttribute(this,n),xi.transformDirection(t),this.setXYZ(n,xi.x,xi.y,xi.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=er(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=an(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=an(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=er(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=er(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=er(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=er(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),r=an(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),r=an(r,this.array),o=an(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this}setXYZW(t,n,r,o,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=an(n,this.array),r=an(r,this.array),o=an(o,this.array),l=an(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=o,this.data.array[t+3]=l,this}clone(t){if(t===void 0){td("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[o+l])}return new Qi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nd(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){td("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uM extends ac{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let El;const pu=new X,bl=new X,Tl=new X,Al=new Gt,mu=new Gt,fM=new un,bh=new X,gu=new X,Th=new X,Yx=new Gt,M0=new Gt,jx=new Gt;class Zx extends _i{constructor(t=new uM){if(super(),this.isSprite=!0,this.type="Sprite",El===void 0){El=new Vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new V4(n,5);El.setIndex([0,1,2,0,2,3]),El.setAttribute("position",new nd(r,3,0,!1)),El.setAttribute("uv",new nd(r,2,3,!1))}this.geometry=El,this.material=t,this.center=new Gt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bl.setFromMatrixScale(this.matrixWorld),fM.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Tl.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bl.multiplyScalar(-Tl.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;Ah(bh.set(-.5,-.5,0),Tl,u,bl,o,l),Ah(gu.set(.5,-.5,0),Tl,u,bl,o,l),Ah(Th.set(.5,.5,0),Tl,u,bl,o,l),Yx.set(0,0),M0.set(1,0),jx.set(1,1);let f=t.ray.intersectTriangle(bh,gu,Th,!1,pu);if(f===null&&(Ah(gu.set(-.5,.5,0),Tl,u,bl,o,l),M0.set(0,1),f=t.ray.intersectTriangle(bh,Th,gu,!1,pu),f===null))return;const p=t.ray.origin.distanceTo(pu);p<t.near||p>t.far||n.push({distance:p,point:pu.clone(),uv:Ma.getInterpolation(pu,bh,gu,Th,Yx,M0,jx,new Gt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ah(e,t,n,r,o,l){Al.subVectors(e,n).addScalar(.5).multiply(r),o!==void 0?(mu.x=l*Al.x-o*Al.y,mu.y=o*Al.x+l*Al.y):mu.copy(Al),e.copy(t),e.x+=mu.x,e.y+=mu.y,e.applyMatrix4(fM)}class hM extends ui{constructor(t=null,n=1,r=1,o,l,u,f,p,m=ci,g=ci,_,v){super(null,u,f,p,m,g,o,l,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll extends Qi{constructor(t,n,r,o=1){super(t,n,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const wl=new un,Kx=new un,wh=[],Qx=new Ao,k4=new un,_u=new $i,vu=new ic;class X4 extends $i{constructor(t,n,r){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<r;o++)this.setMatrixAt(o,k4)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ao),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,wl),Qx.copy(t.boundingBox).applyMatrix4(wl),this.boundingBox.union(Qx)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ic),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<n;r++)this.getMatrixAt(r,wl),vu.copy(t.boundingSphere).applyMatrix4(wl),this.boundingSphere.union(vu)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const r=n.morphTargetInfluences,o=this.morphTexture.source.data.data,l=r.length+1,u=t*l+1;for(let f=0;f<r.length;f++)r[f]=o[u+f]}raycast(t,n){const r=this.matrixWorld,o=this.count;if(_u.geometry=this.geometry,_u.material=this.material,_u.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(r),t.ray.intersectsSphere(vu)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,wl),Kx.multiplyMatrices(r,wl),_u.matrixWorld=Kx,_u.raycast(t,wh);for(let u=0,f=wh.length;u<f;u++){const p=wh[u];p.instanceId=l,p.object=this,n.push(p)}wh.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const r=n.morphTargetInfluences,o=r.length+1;this.morphTexture===null&&(this.morphTexture=new hM(new Float32Array(o*this.count),o,this.count,_1,Ba));const l=this.morphTexture.source.data.data;let u=0;for(let m=0;m<r.length;m++)u+=r[m];const f=this.geometry.morphTargetsRelative?1:1-u,p=o*t;l[p]=f,l.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const E0=new X,W4=new X,q4=new ye;class fo{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,o){return this.normal.set(t,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const o=E0.subVectors(r,n).cross(W4.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(E0),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(t.start).addScaledVector(r,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||q4.getNormalMatrix(t),o=this.coplanarPoint(E0).applyMatrix4(t),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new ic,Y4=new Gt(.5,.5),Rh=new X;class dM{constructor(t=new fo,n=new fo,r=new fo,o=new fo,l=new fo,u=new fo){this.planes=[t,n,r,o,l,u]}set(t,n,r,o,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=nr,r=!1){const o=this.planes,l=t.elements,u=l[0],f=l[1],p=l[2],m=l[3],g=l[4],_=l[5],v=l[6],S=l[7],b=l[8],R=l[9],M=l[10],x=l[11],L=l[12],U=l[13],C=l[14],P=l[15];if(o[0].setComponents(m-u,S-g,x-b,P-L).normalize(),o[1].setComponents(m+u,S+g,x+b,P+L).normalize(),o[2].setComponents(m+f,S+_,x+R,P+U).normalize(),o[3].setComponents(m-f,S-_,x-R,P-U).normalize(),r)o[4].setComponents(p,v,M,C).normalize(),o[5].setComponents(m-p,S-v,x-M,P-C).normalize();else if(o[4].setComponents(m-p,S-v,x-M,P-C).normalize(),n===nr)o[5].setComponents(m+p,S+v,x+M,P+C).normalize();else if(n===$h)o[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(t){oo.center.set(0,0,0);const n=Y4.distanceTo(t.center);return oo.radius=.7071067811865476+n,oo.applyMatrix4(t.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(t){const n=this.planes,r=t.center,o=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Rh.x=o.normal.x>0?t.max.x:t.min.x,Rh.y=o.normal.y>0?t.max.y:t.min.y,Rh.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Rh)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gg extends ac{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jx=new un,Hg=new eM,Ch=new ic,Dh=new X;class $x extends _i{constructor(t=new Vn,n=new Gg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const r=this.geometry,o=this.matrixWorld,l=t.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ch.copy(r.boundingSphere),Ch.applyMatrix4(o),Ch.radius+=l,t.ray.intersectsSphere(Ch)===!1)return;Jx.copy(o).invert(),Hg.copy(t.ray).applyMatrix4(Jx);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,_=r.attributes.position;if(m!==null){const v=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let b=v,R=S;b<R;b++){const M=m.getX(b);Dh.fromBufferAttribute(_,M),ty(Dh,M,p,o,t,n,this)}}else{const v=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let b=v,R=S;b<R;b++)Dh.fromBufferAttribute(_,b),ty(Dh,b,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function ty(e,t,n,r,o,l,u){const f=Hg.distanceSqToPoint(e);if(f<n){const p=new X;Hg.closestPointToPoint(e,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class pM extends ui{constructor(t,n,r,o,l,u,f,p,m){super(t,n,r,o,l,u,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fu extends ui{constructor(t,n,r=rr,o,l,u,f=ci,p=ci,m,g=Gr,_=1){if(g!==Gr&&g!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,l,u,f,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new E1(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class j4 extends Fu{constructor(t,n=rr,r=Mo,o,l,u=ci,f=ci,p,m=Gr){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,r,o,l,u,f,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mM extends ui{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class A1 extends Vn{constructor(t=1,n=1,r=1,o=32,l=1,u=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const g=[],_=[],v=[],S=[];let b=0;const R=[],M=r/2;let x=0;L(),u===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(S,2));function L(){const C=new X,P=new X;let F=0;const O=(n-t)/r;for(let k=0;k<=l;k++){const T=[],D=k/l,H=D*(n-t)+t;for(let j=0;j<=o;j++){const Q=j/o,ct=Q*p+f,st=Math.sin(ct),B=Math.cos(ct);P.x=H*st,P.y=-D*r+M,P.z=H*B,_.push(P.x,P.y,P.z),C.set(st,O,B).normalize(),v.push(C.x,C.y,C.z),S.push(Q,1-D),T.push(b++)}R.push(T)}for(let k=0;k<o;k++)for(let T=0;T<l;T++){const D=R[T][k],H=R[T+1][k],j=R[T+1][k+1],Q=R[T][k+1];(t>0||T!==0)&&(g.push(D,H,Q),F+=3),(n>0||T!==l-1)&&(g.push(H,j,Q),F+=3)}m.addGroup(x,F,0),x+=F}function U(C){const P=b,F=new Gt,O=new X;let k=0;const T=C===!0?t:n,D=C===!0?1:-1;for(let j=1;j<=o;j++)_.push(0,M*D,0),v.push(0,D,0),S.push(.5,.5),b++;const H=b;for(let j=0;j<=o;j++){const ct=j/o*p+f,st=Math.cos(ct),B=Math.sin(ct);O.x=T*B,O.y=M*D,O.z=T*st,_.push(O.x,O.y,O.z),v.push(0,D,0),F.x=st*.5+.5,F.y=B*.5*D+.5,S.push(F.x,F.y),b++}for(let j=0;j<o;j++){const Q=P+j,ct=H+j;C===!0?g.push(ct,ct+1,Q):g.push(ct+1,ct,Q),k+=3}m.addGroup(x,k,C===!0?1:2),x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new A1(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class w1 extends A1{constructor(t=1,n=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,t,n,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(t){return new w1(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class R1 extends Vn{constructor(t=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:r,detail:o};const l=[],u=[];f(o),m(r),g(),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(l.slice(),3)),this.setAttribute("uv",new We(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const U=new X,C=new X,P=new X;for(let F=0;F<n.length;F+=3)S(n[F+0],U),S(n[F+1],C),S(n[F+2],P),p(U,C,P,L)}function p(L,U,C,P){const F=P+1,O=[];for(let k=0;k<=F;k++){O[k]=[];const T=L.clone().lerp(C,k/F),D=U.clone().lerp(C,k/F),H=F-k;for(let j=0;j<=H;j++)j===0&&k===F?O[k][j]=T:O[k][j]=T.clone().lerp(D,j/H)}for(let k=0;k<F;k++)for(let T=0;T<2*(F-k)-1;T++){const D=Math.floor(T/2);T%2===0?(v(O[k][D+1]),v(O[k+1][D]),v(O[k][D])):(v(O[k][D+1]),v(O[k+1][D+1]),v(O[k+1][D]))}}function m(L){const U=new X;for(let C=0;C<l.length;C+=3)U.x=l[C+0],U.y=l[C+1],U.z=l[C+2],U.normalize().multiplyScalar(L),l[C+0]=U.x,l[C+1]=U.y,l[C+2]=U.z}function g(){const L=new X;for(let U=0;U<l.length;U+=3){L.x=l[U+0],L.y=l[U+1],L.z=l[U+2];const C=M(L)/2/Math.PI+.5,P=x(L)/Math.PI+.5;u.push(C,1-P)}b(),_()}function _(){for(let L=0;L<u.length;L+=6){const U=u[L+0],C=u[L+2],P=u[L+4],F=Math.max(U,C,P),O=Math.min(U,C,P);F>.9&&O<.1&&(U<.2&&(u[L+0]+=1),C<.2&&(u[L+2]+=1),P<.2&&(u[L+4]+=1))}}function v(L){l.push(L.x,L.y,L.z)}function S(L,U){const C=L*3;U.x=t[C+0],U.y=t[C+1],U.z=t[C+2]}function b(){const L=new X,U=new X,C=new X,P=new X,F=new Gt,O=new Gt,k=new Gt;for(let T=0,D=0;T<l.length;T+=9,D+=6){L.set(l[T+0],l[T+1],l[T+2]),U.set(l[T+3],l[T+4],l[T+5]),C.set(l[T+6],l[T+7],l[T+8]),F.set(u[D+0],u[D+1]),O.set(u[D+2],u[D+3]),k.set(u[D+4],u[D+5]),P.copy(L).add(U).add(C).divideScalar(3);const H=M(P);R(F,D+0,L,H),R(O,D+2,U,H),R(k,D+4,C,H)}}function R(L,U,C,P){P<0&&L.x===1&&(u[U]=L.x-1),C.x===0&&C.z===0&&(u[U]=P/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new R1(t.vertices,t.indices,t.radius,t.detail)}}class Xr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,n){const r=this.getUtoTmapping(t);return this.getPoint(r,n)}getPoints(t=5){const n=[];for(let r=0;r<=t;r++)n.push(this.getPoint(r/t));return n}getSpacedPoints(t=5){const n=[];for(let r=0;r<=t;r++)n.push(this.getPointAt(r/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,o=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=t;u++)r=this.getPoint(u/t),l+=r.distanceTo(o),n.push(l),o=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const r=this.getLengths();let o=0;const l=r.length;let u;n?u=n:u=t*r[l-1];let f=0,p=l-1,m;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),m=r[o]-u,m<0)f=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const g=r[o],v=r[o+1]-g,S=(u-g)/v;return(o+S)/(l-1)}getTangent(t,n){let o=t-1e-4,l=t+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),p=n||(u.isVector2?new Gt:new X);return p.copy(f).sub(u).normalize(),p}getTangentAt(t,n){const r=this.getUtoTmapping(t);return this.getTangent(r,n)}computeFrenetFrames(t,n=!1){const r=new X,o=[],l=[],u=[],f=new X,p=new un;for(let S=0;S<=t;S++){const b=S/t;o[S]=this.getTangentAt(b,new X)}l[0]=new X,u[0]=new X;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),v<=m&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=t;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const b=Math.acos(Ae(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(f,b))}u[S].crossVectors(o[S],l[S])}if(n===!0){let S=Math.acos(Ae(l[0].dot(l[t]),-1,1));S/=t,o[0].dot(f.crossVectors(l[0],l[t]))>0&&(S=-S);for(let b=1;b<=t;b++)l[b].applyMatrix4(p.makeRotationAxis(o[b],S*b)),u[b].crossVectors(o[b],l[b])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gM extends Xr{constructor(t=0,n=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(t,n=new Gt){const r=n,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+t*l;let p=this.aX+this.xRadius*Math.cos(f),m=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*g-S*_+this.aX,m=v*_+S*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Z4 extends gM{constructor(t,n,r,o,l,u){super(t,n,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function C1(){let e=0,t=0,n=0,r=0;function o(l,u,f,p){e=l,t=f,n=-3*l+3*u-2*f-p,r=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,m){o(u,f,m*(f-l),m*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,m,g,_){let v=(u-l)/m-(f-l)/(m+g)+(f-u)/g,S=(f-u)/g-(p-u)/(g+_)+(p-f)/_;v*=g,S*=g,o(u,f,v,S)},calc:function(l){const u=l*l,f=u*l;return e+t*l+n*u+r*f}}}const Uh=new X,b0=new C1,T0=new C1,A0=new C1;class _M extends Xr{constructor(t=[],n=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=r,this.tension=o}getPoint(t,n=new X){const r=n,o=this.points,l=o.length,u=(l-(this.closed?0:1))*t;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let m,g;this.closed||f>0?m=o[(f-1)%l]:(Uh.subVectors(o[0],o[1]).add(o[0]),m=Uh);const _=o[f%l],v=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(Uh.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Uh),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(m.distanceToSquared(_),S),R=Math.pow(_.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);R<1e-4&&(R=1),b<1e-4&&(b=R),M<1e-4&&(M=R),b0.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,b,R,M),T0.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,b,R,M),A0.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,b,R,M)}else this.curveType==="catmullrom"&&(b0.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),T0.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),A0.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return r.set(b0.calc(p),T0.calc(p),A0.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const o=t.points[n];this.points.push(new X().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ey(e,t,n,r,o){const l=(r-t)*.5,u=(o-n)*.5,f=e*e,p=e*f;return(2*n-2*r+l+u)*p+(-3*n+3*r-2*l-u)*f+l*e+n}function K4(e,t){const n=1-e;return n*n*t}function Q4(e,t){return 2*(1-e)*e*t}function J4(e,t){return e*e*t}function wu(e,t,n,r){return K4(e,t)+Q4(e,n)+J4(e,r)}function $4(e,t){const n=1-e;return n*n*n*t}function tw(e,t){const n=1-e;return 3*n*n*e*t}function ew(e,t){return 3*(1-e)*e*e*t}function nw(e,t){return e*e*e*t}function Ru(e,t,n,r,o){return $4(e,t)+tw(e,n)+ew(e,r)+nw(e,o)}class iw extends Xr{constructor(t=new Gt,n=new Gt,r=new Gt,o=new Gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=r,this.v3=o}getPoint(t,n=new Gt){const r=n,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(Ru(t,o.x,l.x,u.x,f.x),Ru(t,o.y,l.y,u.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class aw extends Xr{constructor(t=new X,n=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=r,this.v3=o}getPoint(t,n=new X){const r=n,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(Ru(t,o.x,l.x,u.x,f.x),Ru(t,o.y,l.y,u.y,f.y),Ru(t,o.z,l.z,u.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rw extends Xr{constructor(t=new Gt,n=new Gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Gt){const r=n;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Gt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sw extends Xr{constructor(t=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new X){const r=n;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ow extends Xr{constructor(t=new Gt,n=new Gt,r=new Gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=r}getPoint(t,n=new Gt){const r=n,o=this.v0,l=this.v1,u=this.v2;return r.set(wu(t,o.x,l.x,u.x),wu(t,o.y,l.y,u.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vM extends Xr{constructor(t=new X,n=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=r}getPoint(t,n=new X){const r=n,o=this.v0,l=this.v1,u=this.v2;return r.set(wu(t,o.x,l.x,u.x),wu(t,o.y,l.y,u.y),wu(t,o.z,l.z,u.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lw extends Xr{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Gt){const r=n,o=this.points,l=(o.length-1)*t,u=Math.floor(l),f=l-u,p=o[u===0?u:u-1],m=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(ey(f,p.x,m.x,g.x,_.x),ey(f,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,r=this.points.length;n<r;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const o=t.points[n];this.points.push(new Gt().fromArray(o))}return this}}var cw=Object.freeze({__proto__:null,ArcCurve:Z4,CatmullRomCurve3:_M,CubicBezierCurve:iw,CubicBezierCurve3:aw,EllipseCurve:gM,LineCurve:rw,LineCurve3:sw,QuadraticBezierCurve:ow,QuadraticBezierCurve3:vM,SplineCurve:lw});class D1 extends R1{constructor(t=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new D1(t.radius,t.detail)}}class ud extends Vn{constructor(t=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:o};const l=t/2,u=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,g=p+1,_=t/f,v=n/p,S=[],b=[],R=[],M=[];for(let x=0;x<g;x++){const L=x*v-u;for(let U=0;U<m;U++){const C=U*_-l;b.push(C,-L,0),R.push(0,0,1),M.push(U/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<f;L++){const U=L+m*x,C=L+m*(x+1),P=L+1+m*(x+1),F=L+1+m*x;S.push(U,C,F),S.push(C,P,F)}this.setIndex(S),this.setAttribute("position",new We(b,3)),this.setAttribute("normal",new We(R,3)),this.setAttribute("uv",new We(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ud(t.width,t.height,t.widthSegments,t.heightSegments)}}class U1 extends Vn{constructor(t=1,n=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let m=0;const g=[],_=new X,v=new X,S=[],b=[],R=[],M=[];for(let x=0;x<=r;x++){const L=[],U=x/r;let C=0;x===0&&u===0?C=.5/n:x===r&&p===Math.PI&&(C=-.5/n);for(let P=0;P<=n;P++){const F=P/n;_.x=-t*Math.cos(o+F*l)*Math.sin(u+U*f),_.y=t*Math.cos(u+U*f),_.z=t*Math.sin(o+F*l)*Math.sin(u+U*f),b.push(_.x,_.y,_.z),v.copy(_).normalize(),R.push(v.x,v.y,v.z),M.push(F+C,1-U),L.push(m++)}g.push(L)}for(let x=0;x<r;x++)for(let L=0;L<n;L++){const U=g[x][L+1],C=g[x][L],P=g[x+1][L],F=g[x+1][L+1];(x!==0||u>0)&&S.push(U,C,F),(x!==r-1||p<Math.PI)&&S.push(C,P,F)}this.setIndex(S),this.setAttribute("position",new We(b,3)),this.setAttribute("normal",new We(R,3)),this.setAttribute("uv",new We(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new U1(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class L1 extends Vn{constructor(t=1,n=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],p=[],m=[],g=new X,_=new X,v=new X;for(let S=0;S<=r;S++)for(let b=0;b<=o;b++){const R=b/o*l,M=S/r*Math.PI*2;_.x=(t+n*Math.cos(M))*Math.cos(R),_.y=(t+n*Math.cos(M))*Math.sin(R),_.z=n*Math.sin(M),f.push(_.x,_.y,_.z),g.x=t*Math.cos(R),g.y=t*Math.sin(R),v.subVectors(_,g).normalize(),p.push(v.x,v.y,v.z),m.push(b/o),m.push(S/r)}for(let S=1;S<=r;S++)for(let b=1;b<=o;b++){const R=(o+1)*S+b-1,M=(o+1)*(S-1)+b-1,x=(o+1)*(S-1)+b,L=(o+1)*S+b;u.push(R,M,L),u.push(M,x,L)}this.setIndex(u),this.setAttribute("position",new We(f,3)),this.setAttribute("normal",new We(p,3)),this.setAttribute("uv",new We(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new L1(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class N1 extends Vn{constructor(t=new vM(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),n=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:r,radialSegments:o,closed:l};const u=t.computeFrenetFrames(n,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new X,p=new X,m=new Gt;let g=new X;const _=[],v=[],S=[],b=[];R(),this.setIndex(b),this.setAttribute("position",new We(_,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(S,2));function R(){for(let U=0;U<n;U++)M(U);M(l===!1?n:0),L(),x()}function M(U){g=t.getPointAt(U/n,g);const C=u.normals[U],P=u.binormals[U];for(let F=0;F<=o;F++){const O=F/o*Math.PI*2,k=Math.sin(O),T=-Math.cos(O);p.x=T*C.x+k*P.x,p.y=T*C.y+k*P.y,p.z=T*C.z+k*P.z,p.normalize(),v.push(p.x,p.y,p.z),f.x=g.x+r*p.x,f.y=g.y+r*p.y,f.z=g.z+r*p.z,_.push(f.x,f.y,f.z)}}function x(){for(let U=1;U<=n;U++)for(let C=1;C<=o;C++){const P=(o+1)*(U-1)+(C-1),F=(o+1)*U+(C-1),O=(o+1)*U+C,k=(o+1)*(U-1)+C;b.push(P,F,k),b.push(F,O,k)}}function L(){for(let U=0;U<=n;U++)for(let C=0;C<=o;C++)m.x=U/n,m.y=C/o,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new N1(new cw[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class uw extends qn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fw extends ac{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o4,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hw extends ac{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const w0={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class dw{constructor(t,n,r){const o=this;let l=!1,u=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return m.push(g,_),this},this.removeHandler=function(g){const _=m.indexOf(g);return _!==-1&&m.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=m.length;_<v;_+=2){const S=m[_],b=m[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const pw=new dw;class O1{constructor(t){this.manager=t!==void 0?t:pw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const r=this;return new Promise(function(o,l){r.load(t,o,n,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}O1.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rl=new WeakMap;class mw extends O1{constructor(t){super(t)}load(t,n,r,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=w0.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){n&&n(u),l.manager.itemEnd(t)},0);else{let _=Rl.get(u);_===void 0&&(_=[],Rl.set(u,_)),_.push({onLoad:n,onError:o})}return u}const f=Ou("img");function p(){g(),n&&n(this);const _=Rl.get(this)||[];for(let v=0;v<_.length;v++){const S=_[v];S.onLoad&&S.onLoad(this)}Rl.delete(this),l.manager.itemEnd(t)}function m(_){g(),o&&o(_),w0.remove(`image:${t}`);const v=Rl.get(this)||[];for(let S=0;S<v.length;S++){const b=v[S];b.onError&&b.onError(_)}Rl.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function g(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),w0.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class gw extends O1{constructor(t){super(t)}load(t,n,r,o){const l=new ui,u=new mw(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},r,o),l}}class _w extends _i{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class P1 extends oM{constructor(t=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-t,u=r+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vw extends _w{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class xw extends Vn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class yw extends xa{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sw{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function ny(e,t,n,r){const o=Mw(r);switch(n){case QS:return e*t;case _1:return e*t/o.components*o.byteLength;case v1:return e*t/o.components*o.byteLength;case Hl:return e*t*2/o.components*o.byteLength;case x1:return e*t*2/o.components*o.byteLength;case JS:return e*t*3/o.components*o.byteLength;case za:return e*t*4/o.components*o.byteLength;case y1:return e*t*4/o.components*o.byteLength;case Gh:case Hh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Vh:case kh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case og:case cg:return Math.max(e,16)*Math.max(t,8)/4;case sg:case lg:return Math.max(e,8)*Math.max(t,8)/2;case ug:case fg:case dg:case pg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hg:case mg:case gg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _g:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vg:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case xg:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case yg:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Sg:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Mg:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Eg:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case bg:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Tg:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ag:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case wg:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Rg:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Cg:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Dg:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ug:case Lg:case Ng:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Og:case Pg:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fg:case Ig:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Mw(e){switch(e){case Sa:case YS:return{byteLength:1,components:1};case Lu:case jS:case Ki:return{byteLength:2,components:1};case m1:case g1:return{byteLength:2,components:4};case rr:case p1:case Ba:return{byteLength:4,components:1};case ZS:case KS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:h1}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=h1);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xM(){let e=null,t=!1,n=null,r=null;function o(l,u){n(l,u),r=e.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){e=l}}}function Ew(e){const t=new WeakMap;function n(f,p){const m=f.array,g=f.usage,_=m.byteLength,v=e.createBuffer();e.bindBuffer(p,v),e.bufferData(p,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=e.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=e.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=e.HALF_FLOAT:S=e.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=e.SHORT;else if(m instanceof Uint32Array)S=e.UNSIGNED_INT;else if(m instanceof Int32Array)S=e.INT;else if(m instanceof Int8Array)S=e.BYTE;else if(m instanceof Uint8Array)S=e.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const g=p.array,_=p.updateRanges;if(e.bindBuffer(m,f),_.length===0)e.bufferSubData(m,0,g);else{_.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<_.length;S++){const b=_[v],R=_[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,b=_.length;S<b;S++){const R=_[S];e.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(e.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=t.get(f);if(m===void 0)t.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:u}}var bw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Aw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ww=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ow=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tR="gl_FragColor = linearToOutputTexel( gl_FragColor );",eR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_R=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ER=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_C=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$C=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:bw,alphahash_pars_fragment:Tw,alphamap_fragment:Aw,alphamap_pars_fragment:ww,alphatest_fragment:Rw,alphatest_pars_fragment:Cw,aomap_fragment:Dw,aomap_pars_fragment:Uw,batching_pars_vertex:Lw,batching_vertex:Nw,begin_vertex:Ow,beginnormal_vertex:Pw,bsdfs:Fw,iridescence_fragment:Iw,bumpmap_pars_fragment:Bw,clipping_planes_fragment:zw,clipping_planes_pars_fragment:Gw,clipping_planes_pars_vertex:Hw,clipping_planes_vertex:Vw,color_fragment:kw,color_pars_fragment:Xw,color_pars_vertex:Ww,color_vertex:qw,common:Yw,cube_uv_reflection_fragment:jw,defaultnormal_vertex:Zw,displacementmap_pars_vertex:Kw,displacementmap_vertex:Qw,emissivemap_fragment:Jw,emissivemap_pars_fragment:$w,colorspace_fragment:tR,colorspace_pars_fragment:eR,envmap_fragment:nR,envmap_common_pars_fragment:iR,envmap_pars_fragment:aR,envmap_pars_vertex:rR,envmap_physical_pars_fragment:gR,envmap_vertex:sR,fog_vertex:oR,fog_pars_vertex:lR,fog_fragment:cR,fog_pars_fragment:uR,gradientmap_pars_fragment:fR,lightmap_pars_fragment:hR,lights_lambert_fragment:dR,lights_lambert_pars_fragment:pR,lights_pars_begin:mR,lights_toon_fragment:_R,lights_toon_pars_fragment:vR,lights_phong_fragment:xR,lights_phong_pars_fragment:yR,lights_physical_fragment:SR,lights_physical_pars_fragment:MR,lights_fragment_begin:ER,lights_fragment_maps:bR,lights_fragment_end:TR,logdepthbuf_fragment:AR,logdepthbuf_pars_fragment:wR,logdepthbuf_pars_vertex:RR,logdepthbuf_vertex:CR,map_fragment:DR,map_pars_fragment:UR,map_particle_fragment:LR,map_particle_pars_fragment:NR,metalnessmap_fragment:OR,metalnessmap_pars_fragment:PR,morphinstance_vertex:FR,morphcolor_vertex:IR,morphnormal_vertex:BR,morphtarget_pars_vertex:zR,morphtarget_vertex:GR,normal_fragment_begin:HR,normal_fragment_maps:VR,normal_pars_fragment:kR,normal_pars_vertex:XR,normal_vertex:WR,normalmap_pars_fragment:qR,clearcoat_normal_fragment_begin:YR,clearcoat_normal_fragment_maps:jR,clearcoat_pars_fragment:ZR,iridescence_pars_fragment:KR,opaque_fragment:QR,packing:JR,premultiplied_alpha_fragment:$R,project_vertex:tC,dithering_fragment:eC,dithering_pars_fragment:nC,roughnessmap_fragment:iC,roughnessmap_pars_fragment:aC,shadowmap_pars_fragment:rC,shadowmap_pars_vertex:sC,shadowmap_vertex:oC,shadowmask_pars_fragment:lC,skinbase_vertex:cC,skinning_pars_vertex:uC,skinning_vertex:fC,skinnormal_vertex:hC,specularmap_fragment:dC,specularmap_pars_fragment:pC,tonemapping_fragment:mC,tonemapping_pars_fragment:gC,transmission_fragment:_C,transmission_pars_fragment:vC,uv_pars_fragment:xC,uv_pars_vertex:yC,uv_vertex:SC,worldpos_vertex:MC,background_vert:EC,background_frag:bC,backgroundCube_vert:TC,backgroundCube_frag:AC,cube_vert:wC,cube_frag:RC,depth_vert:CC,depth_frag:DC,distance_vert:UC,distance_frag:LC,equirect_vert:NC,equirect_frag:OC,linedashed_vert:PC,linedashed_frag:FC,meshbasic_vert:IC,meshbasic_frag:BC,meshlambert_vert:zC,meshlambert_frag:GC,meshmatcap_vert:HC,meshmatcap_frag:VC,meshnormal_vert:kC,meshnormal_frag:XC,meshphong_vert:WC,meshphong_frag:qC,meshphysical_vert:YC,meshphysical_frag:jC,meshtoon_vert:ZC,meshtoon_frag:KC,points_vert:QC,points_frag:JC,shadow_vert:$C,shadow_frag:tD,sprite_vert:eD,sprite_frag:nD},Nt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},$a={basic:{uniforms:yi([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:yi([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:yi([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:yi([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:yi([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:yi([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:yi([Nt.points,Nt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:yi([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:yi([Nt.common,Nt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:yi([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:yi([Nt.sprite,Nt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:yi([Nt.common,Nt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:yi([Nt.lights,Nt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};$a.physical={uniforms:yi([$a.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Lh={r:0,b:0,g:0},lo=new Hr,iD=new un;function aD(e,t,n,r,o,l,u){const f=new pe(0);let p=l===!0?0:1,m,g,_=null,v=0,S=null;function b(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?n:t).get(C)),C}function R(U){let C=!1;const P=b(U);P===null?x(f,p):P&&P.isColor&&(x(P,1),C=!0);const F=e.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(e.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(U,C){const P=b(C);P&&(P.isCubeTexture||P.mapping===cd)?(g===void 0&&(g=new $i(new rc(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:kl($a.backgroundCube.uniforms),vertexShader:$a.backgroundCube.vertexShader,fragmentShader:$a.backgroundCube.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),lo.copy(C.backgroundRotation),lo.x*=-1,lo.y*=-1,lo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(lo.y*=-1,lo.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(iD.makeRotationFromEuler(lo)),g.material.toneMapped=Pe.getTransfer(P.colorSpace)!==$e,(_!==P||v!==P.version||S!==e.toneMapping)&&(g.material.needsUpdate=!0,_=P,v=P.version,S=e.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new $i(new ud(2,2),new qn({name:"BackgroundMaterial",uniforms:kl($a.background.uniforms),vertexShader:$a.background.vertexShader,fragmentShader:$a.background.fragmentShader,side:Os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Pe.getTransfer(P.colorSpace)!==$e,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||S!==e.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,S=e.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,C){U.getRGB(Lh,sM(e)),r.buffers.color.setClear(Lh.r,Lh.g,Lh.b,C,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,C=1){f.set(U),p=C,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:R,addToRenderList:M,dispose:L}}function rD(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function f(D,H,j,Q,ct){let st=!1;const B=_(Q,j,H);l!==B&&(l=B,m(l.object)),st=S(D,Q,j,ct),st&&b(D,Q,j,ct),ct!==null&&t.update(ct,e.ELEMENT_ARRAY_BUFFER),(st||u)&&(u=!1,C(D,H,j,Q),ct!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function p(){return e.createVertexArray()}function m(D){return e.bindVertexArray(D)}function g(D){return e.deleteVertexArray(D)}function _(D,H,j){const Q=j.wireframe===!0;let ct=r[D.id];ct===void 0&&(ct={},r[D.id]=ct);let st=ct[H.id];st===void 0&&(st={},ct[H.id]=st);let B=st[Q];return B===void 0&&(B=v(p()),st[Q]=B),B}function v(D){const H=[],j=[],Q=[];for(let ct=0;ct<n;ct++)H[ct]=0,j[ct]=0,Q[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:Q,object:D,attributes:{},index:null}}function S(D,H,j,Q){const ct=l.attributes,st=H.attributes;let B=0;const z=j.getAttributes();for(const tt in z)if(z[tt].location>=0){const yt=ct[tt];let I=st[tt];if(I===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),yt===void 0||yt.attribute!==I||I&&yt.data!==I.data)return!0;B++}return l.attributesNum!==B||l.index!==Q}function b(D,H,j,Q){const ct={},st=H.attributes;let B=0;const z=j.getAttributes();for(const tt in z)if(z[tt].location>=0){let yt=st[tt];yt===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(yt=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(yt=D.instanceColor));const I={};I.attribute=yt,yt&&yt.data&&(I.data=yt.data),ct[tt]=I,B++}l.attributes=ct,l.attributesNum=B,l.index=Q}function R(){const D=l.newAttributes;for(let H=0,j=D.length;H<j;H++)D[H]=0}function M(D){x(D,0)}function x(D,H){const j=l.newAttributes,Q=l.enabledAttributes,ct=l.attributeDivisors;j[D]=1,Q[D]===0&&(e.enableVertexAttribArray(D),Q[D]=1),ct[D]!==H&&(e.vertexAttribDivisor(D,H),ct[D]=H)}function L(){const D=l.newAttributes,H=l.enabledAttributes;for(let j=0,Q=H.length;j<Q;j++)H[j]!==D[j]&&(e.disableVertexAttribArray(j),H[j]=0)}function U(D,H,j,Q,ct,st,B){B===!0?e.vertexAttribIPointer(D,H,j,ct,st):e.vertexAttribPointer(D,H,j,Q,ct,st)}function C(D,H,j,Q){R();const ct=Q.attributes,st=j.getAttributes(),B=H.defaultAttributeValues;for(const z in st){const tt=st[z];if(tt.location>=0){let xt=ct[z];if(xt===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor)),xt!==void 0){const yt=xt.normalized,I=xt.itemSize,it=t.get(xt);if(it===void 0)continue;const mt=it.buffer,Et=it.type,It=it.bytesPerElement,nt=Et===e.INT||Et===e.UNSIGNED_INT||xt.gpuType===p1;if(xt.isInterleavedBufferAttribute){const ut=xt.data,wt=ut.stride,Vt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let zt=0;zt<tt.locationSize;zt++)x(tt.location+zt,ut.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let zt=0;zt<tt.locationSize;zt++)M(tt.location+zt);e.bindBuffer(e.ARRAY_BUFFER,mt);for(let zt=0;zt<tt.locationSize;zt++)U(tt.location+zt,I/tt.locationSize,Et,yt,wt*It,(Vt+I/tt.locationSize*zt)*It,nt)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<tt.locationSize;ut++)x(tt.location+ut,xt.meshPerAttribute);D.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<tt.locationSize;ut++)M(tt.location+ut);e.bindBuffer(e.ARRAY_BUFFER,mt);for(let ut=0;ut<tt.locationSize;ut++)U(tt.location+ut,I/tt.locationSize,Et,yt,I*It,I/tt.locationSize*ut*It,nt)}}else if(B!==void 0){const yt=B[z];if(yt!==void 0)switch(yt.length){case 2:e.vertexAttrib2fv(tt.location,yt);break;case 3:e.vertexAttrib3fv(tt.location,yt);break;case 4:e.vertexAttrib4fv(tt.location,yt);break;default:e.vertexAttrib1fv(tt.location,yt)}}}}L()}function P(){k();for(const D in r){const H=r[D];for(const j in H){const Q=H[j];for(const ct in Q)g(Q[ct].object),delete Q[ct];delete H[j]}delete r[D]}}function F(D){if(r[D.id]===void 0)return;const H=r[D.id];for(const j in H){const Q=H[j];for(const ct in Q)g(Q[ct].object),delete Q[ct];delete H[j]}delete r[D.id]}function O(D){for(const H in r){const j=r[H];if(j[D.id]===void 0)continue;const Q=j[D.id];for(const ct in Q)g(Q[ct].object),delete Q[ct];delete j[D.id]}}function k(){T(),u=!0,l!==o&&(l=o,m(l.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:k,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:L}}function sD(e,t,n){let r;function o(m){r=m}function l(m,g){e.drawArrays(r,m,g),n.update(g,r,1)}function u(m,g,_){_!==0&&(e.drawArraysInstanced(r,m,g,_),n.update(g,r,_))}function f(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let b=0;b<_;b++)S+=g[b];n.update(S,r,1)}function p(m,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<m.length;b++)u(m[b],g[b],v[b]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let b=0;for(let R=0;R<_;R++)b+=g[R]*v[R];n.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function oD(e,t,n,r){let o;function l(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=e.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==za&&r.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const k=O===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Sa&&r.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ba&&!k)}function p(O){if(O==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(de("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=e.getParameter(e.MAX_TEXTURE_SIZE),M=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),x=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),U=e.getParameter(e.MAX_VARYING_VECTORS),C=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=e.getParameter(e.MAX_SAMPLES),F=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:C,maxSamples:P,samples:F}}function lD(e){const t=this;let n=null,r=0,o=!1,l=!1;const u=new fo,f=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const b=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=e.get(_);if(!o||b===null||b.length===0||l&&!M)l?g(null):m();else{const L=l?0:r,U=L*4;let C=x.clippingState||null;p.value=C,C=g(b,v,U,S);for(let P=0;P!==U;++P)C[P]=n[P];x.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,S,b){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=p.value,b!==!0||M===null){const x=S+R*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,C=S;U!==R;++U,C+=4)u.copy(_[U]).applyMatrix4(L,f),u.normal.toArray(M,C),M[C+3]=u.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function cD(e){let t=new WeakMap;function n(u,f){return f===ng?u.mapping=Mo:f===ig&&(u.mapping=Gl),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ng||f===ig)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new cM(p.height);return m.fromEquirectangularTexture(e,u),t.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:r,dispose:l}}const Rs=4,iy=[.125,.215,.35,.446,.526,.582],mo=20,uD=256,xu=new P1,ay=new pe;let R0=null,C0=0,D0=0,U0=!1;const fD=new X;class ry{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,r=.1,o=100,l={}){const{size:u=256,position:f=fD}=l;R0=this._renderer.getRenderTarget(),C0=this._renderer.getActiveCubeFace(),D0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ly(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(R0,C0,D0),this._renderer.xr.enabled=U0,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Mo||t.mapping===Gl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),R0=this._renderer.getRenderTarget(),C0=this._renderer.getActiveCubeFace(),D0=this._renderer.getActiveMipmapLevel(),U0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Ki,format:za,colorSpace:Vl,depthBuffer:!1},o=sy(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sy(t,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hD(l)),this._blurMaterial=pD(l,t,n),this._ggxMaterial=dD(l,t,n)}return o}_compileMaterial(t){const n=new $i(new Vn,t);this._renderer.compile(n,xu)}_sceneToCubeUV(t,n,r,o,l){const p=new xa(90,1,n,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(ay),_.toneMapping=ar,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $i(new rc,new b1({name:"PMREM.Background",side:Ni,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let x=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,x=!0):(M.color.copy(ay),x=!0);for(let U=0;U<6;U++){const C=U%3;C===0?(p.up.set(0,m[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[U],l.y,l.z)):C===1?(p.up.set(0,0,m[U]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[U],l.z)):(p.up.set(0,m[U],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[U]));const P=this._cubeSize;Cl(o,C*P,U>2?P:0,P,P),_.setRenderTarget(o),x&&_.render(R,p),_.render(t,p)}_.toneMapping=S,_.autoClear=v,t.background=L}_textureToCubeUV(t,n){const r=this._renderer,o=t.mapping===Mo||t.mapping===Gl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ly()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oy());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Cl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,xu)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=r}_applyGGXFilter(t,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-g*g),v=0+m*1.25,S=_*v,{_lodMax:b}=this,R=this._sizeLods[r],M=3*R*(r>b-Rs?r-b+Rs:0),x=4*(this._cubeSize-R);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=b-n,Cl(l,M,x,3*R,2*R),o.setRenderTarget(l),o.render(f,xu),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=b-r,Cl(t,M,x,3*R,2*R),o.setRenderTarget(t),o.render(f,xu)}_blur(t,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,r,o,"latitudinal",l),this._halfBlur(u,t,r,r,o,"longitudinal",l)}_halfBlur(t,n,r,o,l,u,f){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=m;const v=m.uniforms,S=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*mo-1),R=l/b,M=isFinite(l)?1+Math.floor(g*R):mo;M>mo&&de(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${mo}`);const x=[];let L=0;for(let O=0;O<mo;++O){const k=O/R,T=Math.exp(-k*k/2);x.push(T),O===0?L+=T:O<M&&(L+=2*T)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=b,v.mipInt.value=U-r;const C=this._sizeLods[o],P=3*C*(o>U-Rs?o-U+Rs:0),F=4*(this._cubeSize-C);Cl(n,P,F,3*C,2*C),p.setRenderTarget(n),p.render(_,xu)}}function hD(e){const t=[],n=[],r=[];let o=e;const l=e-Rs+1+iy.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>e-Rs?p=iy[u-e+Rs-1]:u===0&&(p=0),n.push(p);const m=1/(f-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,b=6,R=3,M=2,x=1,L=new Float32Array(R*b*S),U=new Float32Array(M*b*S),C=new Float32Array(x*b*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,k=F>2?0:-1,T=[O,k,0,O+2/3,k,0,O+2/3,k+1,0,O,k,0,O+2/3,k+1,0,O,k+1,0];L.set(T,R*b*F),U.set(v,M*b*F);const D=[F,F,F,F,F,F];C.set(D,x*b*F)}const P=new Vn;P.setAttribute("position",new Qi(L,R)),P.setAttribute("uv",new Qi(U,M)),P.setAttribute("faceIndex",new Qi(C,x)),r.push(new $i(P,null)),o>Rs&&o--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function sy(e,t,n){const r=new Oi(e,t,n);return r.texture.mapping=cd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cl(e,t,n,r,o){e.viewport.set(t,n,r,o),e.scissor.set(t,n,r,o)}function dD(e,t,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uD,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function pD(e,t,n){const r=new Float32Array(mo),o=new X(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function oy(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function ly(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mD(e){let t=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===ng||p===ig,g=p===Mo||p===Gl;if(m||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new ry(e)),_=m?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new ry(e)),_=m?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let p=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function gD(e){const t={};function n(r){if(t[r]!==void 0)return t[r];const o=e.getExtension(r);return t[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Pu("WebGLRenderer: "+r+" extension not supported."),o}}}function _D(e,t,n,r){const o={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)t.update(v[S],e.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,b=_.attributes.position;let R=0;if(S!==null){const L=S.array;R=S.version;for(let U=0,C=L.length;U<C;U+=3){const P=L[U+0],F=L[U+1],O=L[U+2];v.push(P,F,F,O,O,P)}}else if(b!==void 0){const L=b.array;R=b.version;for(let U=0,C=L.length/3-1;U<C;U+=3){const P=U+0,F=U+1,O=U+2;v.push(P,F,F,O,O,P)}}else return;const M=new($S(v)?rM:aM)(v,1);M.version=R;const x=l.get(_);x&&t.remove(x),l.set(_,M)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function vD(e,t,n){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function p(v,S){e.drawElements(r,S,l,v*u),n.update(S,r,1)}function m(v,S,b){b!==0&&(e.drawElementsInstanced(r,S,l,v*u,b),n.update(S,r,b))}function g(v,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,b);let M=0;for(let x=0;x<b;x++)M+=S[x];n.update(M,r,1)}function _(v,S,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)m(v[x]/u,S[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,R,0,b);let x=0;for(let L=0;L<b;L++)x+=S[L]*R[L];n.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function xD(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case e.TRIANGLES:n.triangles+=f*(l/3);break;case e.LINES:n.lines+=f*(l/2);break;case e.LINE_STRIP:n.lines+=f*(l-1);break;case e.LINE_LOOP:n.lines+=f*l;break;case e.POINTS:n.points+=f*l;break;default:Oe("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:r}}function yD(e,t,n){const r=new WeakMap,o=new Un;function l(u,f,p){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let D=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",D)};var S=D;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let C=0;b===!0&&(C=1),R===!0&&(C=2),M===!0&&(C=3);let P=f.attributes.position.count*C,F=1;P>t.maxTextureSize&&(F=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*F*4*_),k=new tM(O,P,F,_);k.type=Ba,k.needsUpdate=!0;const T=C*4;for(let H=0;H<_;H++){const j=x[H],Q=L[H],ct=U[H],st=P*F*4*H;for(let B=0;B<j.count;B++){const z=B*T;b===!0&&(o.fromBufferAttribute(j,B),O[st+z+0]=o.x,O[st+z+1]=o.y,O[st+z+2]=o.z,O[st+z+3]=0),R===!0&&(o.fromBufferAttribute(Q,B),O[st+z+4]=o.x,O[st+z+5]=o.y,O[st+z+6]=o.z,O[st+z+7]=0),M===!0&&(o.fromBufferAttribute(ct,B),O[st+z+8]=o.x,O[st+z+9]=o.y,O[st+z+10]=o.z,O[st+z+11]=ct.itemSize===4?o.w:1)}}v={count:_,texture:k,size:new Gt(P,F)},r.set(f,v),f.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(e,"morphTexture",u.morphTexture,n);else{let b=0;for(let M=0;M<m.length;M++)b+=m[M];const R=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(e,"morphTargetBaseInfluence",R),p.getUniforms().setValue(e,"morphTargetInfluences",m)}p.getUniforms().setValue(e,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(e,"morphTargetsTextureSize",v.size)}return{update:l}}function SD(e,t,n,r){let o=new WeakMap;function l(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(o.get(_)!==m&&(t.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(n.update(p.instanceMatrix,e.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,e.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==m&&(v.update(),o.set(v,m))}return _}function u(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const MD={[GS]:"LINEAR_TONE_MAPPING",[HS]:"REINHARD_TONE_MAPPING",[VS]:"CINEON_TONE_MAPPING",[d1]:"ACES_FILMIC_TONE_MAPPING",[XS]:"AGX_TONE_MAPPING",[WS]:"NEUTRAL_TONE_MAPPING",[kS]:"CUSTOM_TONE_MAPPING"};function ED(e,t,n,r,o){const l=new Oi(t,n,{type:e,depthBuffer:r,stencilBuffer:o}),u=new Oi(t,n,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),f=new Vn;f.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new We([0,2,0,0,2,0],2));const p=new uw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new $i(f,p),g=new P1(-1,1,1,-1,0,1);let _=null,v=null,S=!1,b,R=null,M=[],x=!1;this.setSize=function(L,U){l.setSize(L,U),u.setSize(L,U);for(let C=0;C<M.length;C++){const P=M[C];P.setSize&&P.setSize(L,U)}},this.setEffects=function(L){M=L,x=M.length>0&&M[0].isRenderPass===!0;const U=l.width,C=l.height;for(let P=0;P<M.length;P++){const F=M[P];F.setSize&&F.setSize(U,C)}},this.begin=function(L,U){if(S||L.toneMapping===ar&&M.length===0)return!1;if(R=U,U!==null){const C=U.width,P=U.height;(l.width!==C||l.height!==P)&&this.setSize(C,P)}return x===!1&&L.setRenderTarget(l),b=L.toneMapping,L.toneMapping=ar,!0},this.hasRenderPass=function(){return x},this.end=function(L,U){L.toneMapping=b,S=!0;let C=l,P=u;for(let F=0;F<M.length;F++){const O=M[F];if(O.enabled!==!1&&(O.render(L,P,C,U),O.needsSwap!==!1)){const k=C;C=P,P=k}}if(_!==L.outputColorSpace||v!==L.toneMapping){_=L.outputColorSpace,v=L.toneMapping,p.defines={},Pe.getTransfer(_)===$e&&(p.defines.SRGB_TRANSFER="");const F=MD[v];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,L.setRenderTarget(R),L.render(m,g),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const yM=new ui,Vg=new Fu(1,1),SM=new tM,MM=new b4,EM=new lM,cy=[],uy=[],fy=new Float32Array(16),hy=new Float32Array(9),dy=new Float32Array(4);function sc(e,t,n){const r=e[0];if(r<=0||r>0)return e;const o=t*n;let l=cy[o];if(l===void 0&&(l=new Float32Array(o),cy[o]=l),t!==0){r.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,e[u].toArray(l,f)}return l}function Yn(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function jn(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function hd(e,t){let n=uy[t];n===void 0&&(n=new Int32Array(t),uy[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function bD(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function TD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yn(n,t))return;e.uniform2fv(this.addr,t),jn(n,t)}}function AD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Yn(n,t))return;e.uniform3fv(this.addr,t),jn(n,t)}}function wD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yn(n,t))return;e.uniform4fv(this.addr,t),jn(n,t)}}function RD(e,t){const n=this.cache,r=t.elements;if(r===void 0){if(Yn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),jn(n,t)}else{if(Yn(n,r))return;dy.set(r),e.uniformMatrix2fv(this.addr,!1,dy),jn(n,r)}}function CD(e,t){const n=this.cache,r=t.elements;if(r===void 0){if(Yn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),jn(n,t)}else{if(Yn(n,r))return;hy.set(r),e.uniformMatrix3fv(this.addr,!1,hy),jn(n,r)}}function DD(e,t){const n=this.cache,r=t.elements;if(r===void 0){if(Yn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),jn(n,t)}else{if(Yn(n,r))return;fy.set(r),e.uniformMatrix4fv(this.addr,!1,fy),jn(n,r)}}function UD(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function LD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yn(n,t))return;e.uniform2iv(this.addr,t),jn(n,t)}}function ND(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yn(n,t))return;e.uniform3iv(this.addr,t),jn(n,t)}}function OD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yn(n,t))return;e.uniform4iv(this.addr,t),jn(n,t)}}function PD(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function FD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Yn(n,t))return;e.uniform2uiv(this.addr,t),jn(n,t)}}function ID(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Yn(n,t))return;e.uniform3uiv(this.addr,t),jn(n,t)}}function BD(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Yn(n,t))return;e.uniform4uiv(this.addr,t),jn(n,t)}}function zD(e,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o);let l;this.type===e.SAMPLER_2D_SHADOW?(Vg.compareFunction=n.isReversedDepthBuffer()?M1:S1,l=Vg):l=yM,n.setTexture2D(t||l,o)}function GD(e,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(t||MM,o)}function HD(e,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(t||EM,o)}function VD(e,t,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(e.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(t||SM,o)}function kD(e){switch(e){case 5126:return bD;case 35664:return TD;case 35665:return AD;case 35666:return wD;case 35674:return RD;case 35675:return CD;case 35676:return DD;case 5124:case 35670:return UD;case 35667:case 35671:return LD;case 35668:case 35672:return ND;case 35669:case 35673:return OD;case 5125:return PD;case 36294:return FD;case 36295:return ID;case 36296:return BD;case 35678:case 36198:case 36298:case 36306:case 35682:return zD;case 35679:case 36299:case 36307:return GD;case 35680:case 36300:case 36308:case 36293:return HD;case 36289:case 36303:case 36311:case 36292:return VD}}function XD(e,t){e.uniform1fv(this.addr,t)}function WD(e,t){const n=sc(t,this.size,2);e.uniform2fv(this.addr,n)}function qD(e,t){const n=sc(t,this.size,3);e.uniform3fv(this.addr,n)}function YD(e,t){const n=sc(t,this.size,4);e.uniform4fv(this.addr,n)}function jD(e,t){const n=sc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ZD(e,t){const n=sc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function KD(e,t){const n=sc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function QD(e,t){e.uniform1iv(this.addr,t)}function JD(e,t){e.uniform2iv(this.addr,t)}function $D(e,t){e.uniform3iv(this.addr,t)}function t5(e,t){e.uniform4iv(this.addr,t)}function e5(e,t){e.uniform1uiv(this.addr,t)}function n5(e,t){e.uniform2uiv(this.addr,t)}function i5(e,t){e.uniform3uiv(this.addr,t)}function a5(e,t){e.uniform4uiv(this.addr,t)}function r5(e,t,n){const r=this.cache,o=t.length,l=hd(n,o);Yn(r,l)||(e.uniform1iv(this.addr,l),jn(r,l));let u;this.type===e.SAMPLER_2D_SHADOW?u=Vg:u=yM;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,l[f])}function s5(e,t,n){const r=this.cache,o=t.length,l=hd(n,o);Yn(r,l)||(e.uniform1iv(this.addr,l),jn(r,l));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||MM,l[u])}function o5(e,t,n){const r=this.cache,o=t.length,l=hd(n,o);Yn(r,l)||(e.uniform1iv(this.addr,l),jn(r,l));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||EM,l[u])}function l5(e,t,n){const r=this.cache,o=t.length,l=hd(n,o);Yn(r,l)||(e.uniform1iv(this.addr,l),jn(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||SM,l[u])}function c5(e){switch(e){case 5126:return XD;case 35664:return WD;case 35665:return qD;case 35666:return YD;case 35674:return jD;case 35675:return ZD;case 35676:return KD;case 5124:case 35670:return QD;case 35667:case 35671:return JD;case 35668:case 35672:return $D;case 35669:case 35673:return t5;case 5125:return e5;case 36294:return n5;case 36295:return i5;case 36296:return a5;case 35678:case 36198:case 36298:case 36306:case 35682:return r5;case 35679:case 36299:case 36307:return s5;case 35680:case 36300:case 36308:case 36293:return o5;case 36289:case 36303:case 36311:case 36292:return l5}}class u5{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=kD(n.type)}}class f5{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=c5(n.type)}}class h5{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(t,n[f.id],r)}}}const L0=/(\w+)(\])?(\[|\.)?/g;function py(e,t){e.seq.push(t),e.map[t.id]=t}function d5(e,t,n){const r=e.name,o=r.length;for(L0.lastIndex=0;;){const l=L0.exec(r),u=L0.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&u+2===o){py(n,m===void 0?new u5(f,e,t):new f5(f,e,t));break}else{let _=n.map[f];_===void 0&&(_=new h5(f),py(n,_)),n=_}}}class Xh{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);d5(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(t,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(t,r,o)}setOptional(t,n,r){const o=n[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,n,r,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const r=[];for(let o=0,l=t.length;o!==l;++o){const u=t[o];u.id in n&&r.push(u)}return r}}function my(e,t,n){const r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}const p5=37297;let m5=0;function g5(e,t){const n=e.split(`
`),r=[],o=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const gy=new ye;function _5(e){Pe._getMatrix(gy,Pe.workingColorSpace,e);const t=`mat3( ${gy.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(e)){case Jh:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function _y(e,t,n){const r=e.getShaderParameter(t,e.COMPILE_STATUS),l=(e.getShaderInfoLog(t)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+g5(e.getShaderSource(t),f)}else return l}function v5(e,t){const n=_5(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const x5={[GS]:"Linear",[HS]:"Reinhard",[VS]:"Cineon",[d1]:"ACESFilmic",[XS]:"AgX",[WS]:"Neutral",[kS]:"Custom"};function y5(e,t){const n=x5[t];return n===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nh=new X;function S5(){Pe.getLuminanceCoefficients(Nh);const e=Nh.x.toFixed(4),t=Nh.y.toFixed(4),n=Nh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M5(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bu).join(`
`)}function E5(e){const t=[];for(const n in e){const r=e[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function b5(e,t){const n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=e.getActiveAttrib(t,o),u=l.name;let f=1;l.type===e.FLOAT_MAT2&&(f=2),l.type===e.FLOAT_MAT3&&(f=3),l.type===e.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:e.getAttribLocation(t,u),locationSize:f}}return n}function bu(e){return e!==""}function vy(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xy(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T5=/^[ \t]*#include +<([\w\d./]+)>/gm;function kg(e){return e.replace(T5,w5)}const A5=new Map;function w5(e,t){let n=Me[t];if(n===void 0){const r=A5.get(t);if(r!==void 0)n=Me[r],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return kg(n)}const R5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yy(e){return e.replace(R5,C5)}function C5(e,t,n,r){let o="";for(let l=parseInt(t);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Sy(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const D5={[zh]:"SHADOWMAP_TYPE_PCF",[Eu]:"SHADOWMAP_TYPE_VSM"};function U5(e){return D5[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const L5={[Mo]:"ENVMAP_TYPE_CUBE",[Gl]:"ENVMAP_TYPE_CUBE",[cd]:"ENVMAP_TYPE_CUBE_UV"};function N5(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":L5[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const O5={[Gl]:"ENVMAP_MODE_REFRACTION"};function P5(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":O5[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const F5={[zS]:"ENVMAP_BLENDING_MULTIPLY",[a4]:"ENVMAP_BLENDING_MIX",[r4]:"ENVMAP_BLENDING_ADD"};function I5(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":F5[e.combine]||"ENVMAP_BLENDING_NONE"}function B5(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function z5(e,t,n,r){const o=e.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=U5(n),m=N5(n),g=P5(n),_=I5(n),v=B5(n),S=M5(n),b=E5(l),R=o.createProgram();let M,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(bu).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(bu).join(`
`),x.length>0&&(x+=`
`)):(M=[Sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bu).join(`
`),x=[Sy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Me.tonemapping_pars_fragment:"",n.toneMapping!==ar?y5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,v5("linearToOutputTexel",n.outputColorSpace),S5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bu).join(`
`)),u=kg(u),u=vy(u,n),u=xy(u,n),f=kg(f),f=vy(f,n),f=xy(f,n),u=yy(u),f=yy(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Cx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+M+u,C=L+x+f,P=my(o,o.VERTEX_SHADER,U),F=my(o,o.FRAGMENT_SHADER,C);o.attachShader(R,P),o.attachShader(R,F),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function O(H){if(e.debug.checkShaderErrors){const j=o.getProgramInfoLog(R)||"",Q=o.getShaderInfoLog(P)||"",ct=o.getShaderInfoLog(F)||"",st=j.trim(),B=Q.trim(),z=ct.trim();let tt=!0,xt=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(tt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,R,P,F);else{const yt=_y(o,P,"vertex"),I=_y(o,F,"fragment");Oe("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+yt+`
`+I)}else st!==""?de("WebGLProgram: Program Info Log:",st):(B===""||z==="")&&(xt=!1);xt&&(H.diagnostics={runnable:tt,programLog:st,vertexShader:{log:B,prefix:M},fragmentShader:{log:z,prefix:x}})}o.deleteShader(P),o.deleteShader(F),k=new Xh(o,R),T=b5(o,R)}let k;this.getUniforms=function(){return k===void 0&&O(this),k};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=o.getProgramParameter(R,p5)),D},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=m5++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=P,this.fragmentShader=F,this}let G5=0;class H5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new V5(t),n.set(t,r)),r}}class V5{constructor(t){this.id=G5++,this.code=t,this.usedTimes=0}}function k5(e,t,n,r,o,l,u){const f=new nM,p=new H5,m=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let S=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(T){return m.add(T),T===0?"uv":`uv${T}`}function M(T,D,H,j,Q){const ct=j.fog,st=Q.geometry,B=T.isMeshStandardMaterial?j.environment:null,z=(T.isMeshStandardMaterial?n:t).get(T.envMap||B),tt=z&&z.mapping===cd?z.image.height:null,xt=b[T.type];T.precision!==null&&(S=o.getMaxPrecision(T.precision),S!==T.precision&&de("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const yt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,I=yt!==void 0?yt.length:0;let it=0;st.morphAttributes.position!==void 0&&(it=1),st.morphAttributes.normal!==void 0&&(it=2),st.morphAttributes.color!==void 0&&(it=3);let mt,Et,It,nt;if(xt){const Ne=$a[xt];mt=Ne.vertexShader,Et=Ne.fragmentShader}else mt=T.vertexShader,Et=T.fragmentShader,p.update(T),It=p.getVertexShaderID(T),nt=p.getFragmentShaderID(T);const ut=e.getRenderTarget(),wt=e.state.buffers.depth.getReversed(),Vt=Q.isInstancedMesh===!0,zt=Q.isBatchedMesh===!0,Se=!!T.map,mn=!!T.matcap,Ee=!!z,qt=!!T.aoMap,se=!!T.lightMap,te=!!T.bumpMap,Ie=!!T.normalMap,V=!!T.displacementMap,Be=!!T.emissiveMap,ge=!!T.metalnessMap,we=!!T.roughnessMap,Ht=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ht=T.sheen>0,_t=T.transmission>0,ft=Ht&&!!T.anisotropyMap,Jt=N&&!!T.clearcoatMap,Rt=N&&!!T.clearcoatNormalMap,Yt=N&&!!T.clearcoatRoughnessMap,ue=q&&!!T.iridescenceMap,Mt=q&&!!T.iridescenceThicknessMap,bt=ht&&!!T.sheenColorMap,Ft=ht&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ct=!!T.specularColorMap,ve=!!T.specularIntensityMap,Y=_t&&!!T.transmissionMap,Ut=_t&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,vt=!!T.alphaHash,At=!!T.extensions;let fe=ar;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(fe=e.toneMapping);const Ze={shaderID:xt,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:Et,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:zt,batchingColor:zt&&Q._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&Q.instanceColor!==null,instancingMorph:Vt&&Q.morphTexture!==null,outputColorSpace:ut===null?e.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Vl,alphaToCoverage:!!T.alphaToCoverage,map:Se,matcap:mn,envMap:Ee,envMapMode:Ee&&z.mapping,envMapCubeUVHeight:tt,aoMap:qt,lightMap:se,bumpMap:te,normalMap:Ie,displacementMap:V,emissiveMap:Be,normalMapObjectSpace:Ie&&T.normalMapType===c4,normalMapTangentSpace:Ie&&T.normalMapType===l4,metalnessMap:ge,roughnessMap:we,anisotropy:Ht,anisotropyMap:ft,clearcoat:N,clearcoatMap:Jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:q,iridescenceMap:ue,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:bt,sheenRoughnessMap:Ft,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:ve,transmission:_t,transmissionMap:Y,thicknessMap:Ut,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===yo&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:vt,combine:T.combine,mapUv:Se&&R(T.map.channel),aoMapUv:qt&&R(T.aoMap.channel),lightMapUv:se&&R(T.lightMap.channel),bumpMapUv:te&&R(T.bumpMap.channel),normalMapUv:Ie&&R(T.normalMap.channel),displacementMapUv:V&&R(T.displacementMap.channel),emissiveMapUv:Be&&R(T.emissiveMap.channel),metalnessMapUv:ge&&R(T.metalnessMap.channel),roughnessMapUv:we&&R(T.roughnessMap.channel),anisotropyMapUv:ft&&R(T.anisotropyMap.channel),clearcoatMapUv:Jt&&R(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&R(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&R(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&R(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&R(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&R(T.sheenRoughnessMap.channel),specularMapUv:Ot&&R(T.specularMap.channel),specularColorMapUv:Ct&&R(T.specularColorMap.channel),specularIntensityMapUv:ve&&R(T.specularIntensityMap.channel),transmissionMapUv:Y&&R(T.transmissionMap.channel),thicknessMapUv:Ut&&R(T.thicknessMap.channel),alphaMapUv:Pt&&R(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Ie||Ht),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!st.attributes.uv&&(Se||Pt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:wt,skinning:Q.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:it,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:e.shadowMap.enabled&&H.length>0,shadowMapType:e.shadowMap.type,toneMapping:fe,decodeVideoTexture:Se&&T.map.isVideoTexture===!0&&Pe.getTransfer(T.map.colorSpace)===$e,decodeVideoTextureEmissive:Be&&T.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(T.emissiveMap.colorSpace)===$e,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fa,flipSided:T.side===Ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)D.push(H),D.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(L(D,T),U(D,T),D.push(e.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function L(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function U(T,D){f.disableAll(),D.instancing&&f.enable(0),D.instancingColor&&f.enable(1),D.instancingMorph&&f.enable(2),D.matcap&&f.enable(3),D.envMap&&f.enable(4),D.normalMapObjectSpace&&f.enable(5),D.normalMapTangentSpace&&f.enable(6),D.clearcoat&&f.enable(7),D.iridescence&&f.enable(8),D.alphaTest&&f.enable(9),D.vertexColors&&f.enable(10),D.vertexAlphas&&f.enable(11),D.vertexUv1s&&f.enable(12),D.vertexUv2s&&f.enable(13),D.vertexUv3s&&f.enable(14),D.vertexTangents&&f.enable(15),D.anisotropy&&f.enable(16),D.alphaHash&&f.enable(17),D.batching&&f.enable(18),D.dispersion&&f.enable(19),D.batchingColor&&f.enable(20),D.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),D.fog&&f.enable(0),D.useFog&&f.enable(1),D.flatShading&&f.enable(2),D.logarithmicDepthBuffer&&f.enable(3),D.reversedDepthBuffer&&f.enable(4),D.skinning&&f.enable(5),D.morphTargets&&f.enable(6),D.morphNormals&&f.enable(7),D.morphColors&&f.enable(8),D.premultipliedAlpha&&f.enable(9),D.shadowMapEnabled&&f.enable(10),D.doubleSided&&f.enable(11),D.flipSided&&f.enable(12),D.useDepthPacking&&f.enable(13),D.dithering&&f.enable(14),D.transmission&&f.enable(15),D.sheen&&f.enable(16),D.opaque&&f.enable(17),D.pointsUvs&&f.enable(18),D.decodeVideoTexture&&f.enable(19),D.decodeVideoTextureEmissive&&f.enable(20),D.alphaToCoverage&&f.enable(21),T.push(f.mask)}function C(T){const D=b[T.type];let H;if(D){const j=$a[D];H=ed.clone(j.uniforms)}else H=T.uniforms;return H}function P(T,D){let H=_.get(D);return H!==void 0?++H.usedTimes:(H=new z5(e,D,T,l),g.push(H),_.set(D,H)),H}function F(T){if(--T.usedTimes===0){const D=g.indexOf(T);g[D]=g[g.length-1],g.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){p.remove(T)}function k(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:C,acquireProgram:P,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:k}}function X5(){let e=new WeakMap;function t(u){return e.has(u)}function n(u){let f=e.get(u);return f===void 0&&(f={},e.set(u,f)),f}function r(u){e.delete(u)}function o(u,f,p){e.get(u)[f]=p}function l(){e=new WeakMap}return{has:t,get:n,remove:r,update:o,dispose:l}}function W5(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function My(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ey(){const e=[];let t=0;const n=[],r=[],o=[];function l(){t=0,n.length=0,r.length=0,o.length=0}function u(_,v,S,b,R,M){let x=e[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:b,renderOrder:_.renderOrder,z:R,group:M},e[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=R,x.group=M),t++,x}function f(_,v,S,b,R,M){const x=u(_,v,S,b,R,M);S.transmission>0?r.push(x):S.transparent===!0?o.push(x):n.push(x)}function p(_,v,S,b,R,M){const x=u(_,v,S,b,R,M);S.transmission>0?r.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function m(_,v){n.length>1&&n.sort(_||W5),r.length>1&&r.sort(v||My),o.length>1&&o.sort(v||My)}function g(){for(let _=t,v=e.length;_<v;_++){const S=e[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:g,sort:m}}function q5(){let e=new WeakMap;function t(r,o){const l=e.get(r);let u;return l===void 0?(u=new Ey,e.set(r,[u])):o>=l.length?(u=new Ey,l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}function Y5(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new pe};break;case"SpotLight":n={position:new X,direction:new X,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new pe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":n={color:new pe,position:new X,halfWidth:new X,halfHeight:new X};break}return e[t.id]=n,n}}}function j5(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Z5=0;function K5(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Q5(e){const t=new Y5,n=j5(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new X);const o=new X,l=new un,u=new un;function f(m){let g=0,_=0,v=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let S=0,b=0,R=0,M=0,x=0,L=0,U=0,C=0,P=0,F=0,O=0;m.sort(K5);for(let T=0,D=m.length;T<D;T++){const H=m[T],j=H.color,Q=H.intensity,ct=H.distance;let st=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Hl?st=H.shadow.map.texture:st=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=j.r*Q,_+=j.g*Q,v+=j.b*Q;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],Q);O++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,tt=n.get(H);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,r.directionalShadow[S]=tt,r.directionalShadowMap[S]=st,r.directionalShadowMatrix[S]=H.shadow.matrix,L++}r.directional[S]=B,S++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(j).multiplyScalar(Q),B.distance=ct,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[R]=B;const z=H.shadow;if(H.map&&(r.spotLightMap[P]=H.map,P++,z.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[R]=z.matrix,H.castShadow){const tt=n.get(H);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,r.spotShadow[R]=tt,r.spotShadowMap[R]=st,C++}R++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(j).multiplyScalar(Q),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=B,M++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const z=H.shadow,tt=n.get(H);tt.shadowIntensity=z.intensity,tt.shadowBias=z.bias,tt.shadowNormalBias=z.normalBias,tt.shadowRadius=z.radius,tt.shadowMapSize=z.mapSize,tt.shadowCameraNear=z.camera.near,tt.shadowCameraFar=z.camera.far,r.pointShadow[b]=tt,r.pointShadowMap[b]=st,r.pointShadowMatrix[b]=H.shadow.matrix,U++}r.point[b]=B,b++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(Q),B.groundColor.copy(H.groundColor).multiplyScalar(Q),r.hemi[x]=B,x++}}M>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==S||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==M||k.hemiLength!==x||k.numDirectionalShadows!==L||k.numPointShadows!==U||k.numSpotShadows!==C||k.numSpotMaps!==P||k.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=C+P-F,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,k.directionalLength=S,k.pointLength=b,k.spotLength=R,k.rectAreaLength=M,k.hemiLength=x,k.numDirectionalShadows=L,k.numPointShadows=U,k.numSpotShadows=C,k.numSpotMaps=P,k.numLightProbes=O,r.version=Z5++)}function p(m,g){let _=0,v=0,S=0,b=0,R=0;const M=g.matrixWorldInverse;for(let x=0,L=m.length;x<L;x++){const U=m[x];if(U.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),_++}else if(U.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),u.identity(),l.copy(U.matrixWorld),l.premultiply(M),u.extractRotation(l),C.halfWidth.set(U.width*.5,0,0),C.halfHeight.set(0,U.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(U.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(U.matrixWorld),C.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(U.matrixWorld),C.direction.transformDirection(M),R++}}}return{setup:f,setupView:p,state:r}}function by(e){const t=new Q5(e),n=[],r=[];function o(g){m.camera=g,n.length=0,r.length=0}function l(g){n.push(g)}function u(g){r.push(g)}function f(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function J5(e){let t=new WeakMap;function n(o,l=0){const u=t.get(o);let f;return u===void 0?(f=new by(e),t.set(o,[f])):l>=u.length?(f=new by(e),u.push(f)):f=u[l],f}function r(){t=new WeakMap}return{get:n,dispose:r}}const $5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,eU=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],nU=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Ty=new un,yu=new X,N0=new X;function iU(e,t,n){let r=new dM;const o=new Gt,l=new Gt,u=new Un,f=new fw,p=new hw,m={},g=n.maxTextureSize,_={[Os]:Ni,[Ni]:Os,[Fa]:Fa},v=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:$5,fragmentShader:tU}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new Vn;b.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new $i(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let x=this.type;this.render=function(F,O,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===zA&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=zh);const T=e.getRenderTarget(),D=e.getActiveCubeFace(),H=e.getActiveMipmapLevel(),j=e.state;j.setBlending(ir),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=x!==this.type;Q&&O.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(st=>st.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,st=F.length;ct<st;ct++){const B=F[ct],z=B.shadow;if(z===void 0){de("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const tt=z.getFrameExtents();if(o.multiply(tt),l.copy(z.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/tt.x),o.x=l.x*tt.x,z.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/tt.y),o.y=l.y*tt.y,z.mapSize.y=l.y)),z.map===null||Q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Eu){if(B.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Oi(o.x,o.y,{format:Hl,type:Ki,minFilter:gi,magFilter:gi,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Fu(o.x,o.y,Ba),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=Gr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ci,z.map.depthTexture.magFilter=ci}else{B.isPointLight?(z.map=new cM(o.x),z.map.depthTexture=new j4(o.x,rr)):(z.map=new Oi(o.x,o.y),z.map.depthTexture=new Fu(o.x,o.y,rr)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=Gr;const yt=e.state.buffers.depth.getReversed();this.type===zh?(z.map.depthTexture.compareFunction=yt?M1:S1,z.map.depthTexture.minFilter=gi,z.map.depthTexture.magFilter=gi):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ci,z.map.depthTexture.magFilter=ci)}z.camera.updateProjectionMatrix()}const xt=z.map.isWebGLCubeRenderTarget?6:1;for(let yt=0;yt<xt;yt++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,yt),e.clear();else{yt===0&&(e.setRenderTarget(z.map),e.clear());const I=z.getViewport(yt);u.set(l.x*I.x,l.y*I.y,l.x*I.z,l.y*I.w),j.viewport(u)}if(B.isPointLight){const I=z.camera,it=z.matrix,mt=B.distance||I.far;mt!==I.far&&(I.far=mt,I.updateProjectionMatrix()),yu.setFromMatrixPosition(B.matrixWorld),I.position.copy(yu),N0.copy(I.position),N0.add(eU[yt]),I.up.copy(nU[yt]),I.lookAt(N0),I.updateMatrixWorld(),it.makeTranslation(-yu.x,-yu.y,-yu.z),Ty.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ty,I.coordinateSystem,I.reversedDepth)}else z.updateMatrices(B);r=z.getFrustum(),C(O,k,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Eu&&L(z,k),z.needsUpdate=!1}x=this.type,M.needsUpdate=!1,e.setRenderTarget(T,D,H)};function L(F,O){const k=t.update(R);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Oi(o.x,o.y,{format:Hl,type:Ki})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,e.setRenderTarget(F.mapPass),e.clear(),e.renderBufferDirect(O,null,k,v,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,e.setRenderTarget(F.map),e.clear(),e.renderBufferDirect(O,null,k,S,R,null)}function U(F,O,k,T){let D=null;const H=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)D=H;else if(D=k.isPointLight===!0?p:f,e.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=D.uuid,Q=O.uuid;let ct=m[j];ct===void 0&&(ct={},m[j]=ct);let st=ct[Q];st===void 0&&(st=D.clone(),ct[Q]=st,O.addEventListener("dispose",P)),D=st}if(D.visible=O.visible,D.wireframe=O.wireframe,T===Eu?D.side=O.shadowSide!==null?O.shadowSide:O.side:D.side=O.shadowSide!==null?O.shadowSide:_[O.side],D.alphaMap=O.alphaMap,D.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,D.map=O.map,D.clipShadows=O.clipShadows,D.clippingPlanes=O.clippingPlanes,D.clipIntersection=O.clipIntersection,D.displacementMap=O.displacementMap,D.displacementScale=O.displacementScale,D.displacementBias=O.displacementBias,D.wireframeLinewidth=O.wireframeLinewidth,D.linewidth=O.linewidth,k.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const j=e.properties.get(D);j.light=k}return D}function C(F,O,k,T,D){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&D===Eu)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const Q=t.update(F),ct=F.material;if(Array.isArray(ct)){const st=Q.groups;for(let B=0,z=st.length;B<z;B++){const tt=st[B],xt=ct[tt.materialIndex];if(xt&&xt.visible){const yt=U(F,xt,T,D);F.onBeforeShadow(e,F,O,k,Q,yt,tt),e.renderBufferDirect(k,null,Q,yt,F,tt),F.onAfterShadow(e,F,O,k,Q,yt,tt)}}}else if(ct.visible){const st=U(F,ct,T,D);F.onBeforeShadow(e,F,O,k,Q,st,null),e.renderBufferDirect(k,null,Q,st,F,null),F.onAfterShadow(e,F,O,k,Q,st,null)}}const j=F.children;for(let Q=0,ct=j.length;Q<ct;Q++)C(j[Q],O,k,T,D)}function P(F){F.target.removeEventListener("dispose",P);for(const k in m){const T=m[k],D=F.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const aU={[Z0]:K0,[Q0]:tg,[J0]:eg,[zl]:$0,[K0]:Z0,[tg]:Q0,[eg]:J0,[$0]:zl};function rU(e,t){function n(){let Y=!1;const Ut=new Un;let Tt=null;const Pt=new Un(0,0,0,0);return{setMask:function(St){Tt!==St&&!Y&&(e.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){Y=St},setClear:function(St,vt,At,fe,Ze){Ze===!0&&(St*=fe,vt*=fe,At*=fe),Ut.set(St,vt,At,fe),Pt.equals(Ut)===!1&&(e.clearColor(St,vt,At,fe),Pt.copy(Ut))},reset:function(){Y=!1,Tt=null,Pt.set(-1,0,0,0)}}}function r(){let Y=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(vt){if(Ut!==vt){const At=t.get("EXT_clip_control");vt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=vt;const fe=St;St=null,this.setClear(fe)}},getReversed:function(){return Ut},setTest:function(vt){vt?ut(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!Y&&(e.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Ut&&(vt=aU[vt]),Pt!==vt){switch(vt){case Z0:e.depthFunc(e.NEVER);break;case K0:e.depthFunc(e.ALWAYS);break;case Q0:e.depthFunc(e.LESS);break;case zl:e.depthFunc(e.LEQUAL);break;case J0:e.depthFunc(e.EQUAL);break;case $0:e.depthFunc(e.GEQUAL);break;case tg:e.depthFunc(e.GREATER);break;case eg:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Pt=vt}},setLocked:function(vt){Y=vt},setClear:function(vt){St!==vt&&(Ut&&(vt=1-vt),e.clearDepth(vt),St=vt)},reset:function(){Y=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function o(){let Y=!1,Ut=null,Tt=null,Pt=null,St=null,vt=null,At=null,fe=null,Ze=null;return{setTest:function(Ne){Y||(Ne?ut(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(Ne){Ut!==Ne&&!Y&&(e.stencilMask(Ne),Ut=Ne)},setFunc:function(Ne,fi,wa){(Tt!==Ne||Pt!==fi||St!==wa)&&(e.stencilFunc(Ne,fi,wa),Tt=Ne,Pt=fi,St=wa)},setOp:function(Ne,fi,wa){(vt!==Ne||At!==fi||fe!==wa)&&(e.stencilOp(Ne,fi,wa),vt=Ne,At=fi,fe=wa)},setLocked:function(Ne){Y=Ne},setClear:function(Ne){Ze!==Ne&&(e.clearStencil(Ne),Ze=Ne)},reset:function(){Y=!1,Ut=null,Tt=null,Pt=null,St=null,vt=null,At=null,fe=null,Ze=null}}}const l=new n,u=new r,f=new o,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],b=null,R=!1,M=null,x=null,L=null,U=null,C=null,P=null,F=null,O=new pe(0,0,0),k=0,T=!1,D=null,H=null,j=null,Q=null,ct=null;const st=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),B=z>=1):tt.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),B=z>=2);let xt=null,yt={};const I=e.getParameter(e.SCISSOR_BOX),it=e.getParameter(e.VIEWPORT),mt=new Un().fromArray(I),Et=new Un().fromArray(it);function It(Y,Ut,Tt,Pt){const St=new Uint8Array(4),vt=e.createTexture();e.bindTexture(Y,vt),e.texParameteri(Y,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(Y,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let At=0;At<Tt;At++)Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?e.texImage3D(Ut,0,e.RGBA,1,1,Pt,0,e.RGBA,e.UNSIGNED_BYTE,St):e.texImage2D(Ut+At,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,St);return vt}const nt={};nt[e.TEXTURE_2D]=It(e.TEXTURE_2D,e.TEXTURE_2D,1),nt[e.TEXTURE_CUBE_MAP]=It(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[e.TEXTURE_2D_ARRAY]=It(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),nt[e.TEXTURE_3D]=It(e.TEXTURE_3D,e.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ut(e.DEPTH_TEST),u.setFunc(zl),te(!1),Ie(Tx),ut(e.CULL_FACE),qt(ir);function ut(Y){g[Y]!==!0&&(e.enable(Y),g[Y]=!0)}function wt(Y){g[Y]!==!1&&(e.disable(Y),g[Y]=!1)}function Vt(Y,Ut){return _[Y]!==Ut?(e.bindFramebuffer(Y,Ut),_[Y]=Ut,Y===e.DRAW_FRAMEBUFFER&&(_[e.FRAMEBUFFER]=Ut),Y===e.FRAMEBUFFER&&(_[e.DRAW_FRAMEBUFFER]=Ut),!0):!1}function zt(Y,Ut){let Tt=S,Pt=!1;if(Y){Tt=v.get(Ut),Tt===void 0&&(Tt=[],v.set(Ut,Tt));const St=Y.textures;if(Tt.length!==St.length||Tt[0]!==e.COLOR_ATTACHMENT0){for(let vt=0,At=St.length;vt<At;vt++)Tt[vt]=e.COLOR_ATTACHMENT0+vt;Tt.length=St.length,Pt=!0}}else Tt[0]!==e.BACK&&(Tt[0]=e.BACK,Pt=!0);Pt&&e.drawBuffers(Tt)}function Se(Y){return b!==Y?(e.useProgram(Y),b=Y,!0):!1}const mn={[po]:e.FUNC_ADD,[HA]:e.FUNC_SUBTRACT,[VA]:e.FUNC_REVERSE_SUBTRACT};mn[kA]=e.MIN,mn[XA]=e.MAX;const Ee={[WA]:e.ZERO,[qA]:e.ONE,[YA]:e.SRC_COLOR,[Y0]:e.SRC_ALPHA,[$A]:e.SRC_ALPHA_SATURATE,[QA]:e.DST_COLOR,[ZA]:e.DST_ALPHA,[jA]:e.ONE_MINUS_SRC_COLOR,[j0]:e.ONE_MINUS_SRC_ALPHA,[JA]:e.ONE_MINUS_DST_COLOR,[KA]:e.ONE_MINUS_DST_ALPHA,[t4]:e.CONSTANT_COLOR,[e4]:e.ONE_MINUS_CONSTANT_COLOR,[n4]:e.CONSTANT_ALPHA,[i4]:e.ONE_MINUS_CONSTANT_ALPHA};function qt(Y,Ut,Tt,Pt,St,vt,At,fe,Ze,Ne){if(Y===ir){R===!0&&(wt(e.BLEND),R=!1);return}if(R===!1&&(ut(e.BLEND),R=!0),Y!==GA){if(Y!==M||Ne!==T){if((x!==po||C!==po)&&(e.blendEquation(e.FUNC_ADD),x=po,C=po),Ne)switch(Y){case yo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qh:e.blendFunc(e.ONE,e.ONE);break;case Ax:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case wx:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Oe("WebGLState: Invalid blending: ",Y);break}else switch(Y){case yo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qh:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ax:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wx:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",Y);break}L=null,U=null,P=null,F=null,O.set(0,0,0),k=0,M=Y,T=Ne}return}St=St||Ut,vt=vt||Tt,At=At||Pt,(Ut!==x||St!==C)&&(e.blendEquationSeparate(mn[Ut],mn[St]),x=Ut,C=St),(Tt!==L||Pt!==U||vt!==P||At!==F)&&(e.blendFuncSeparate(Ee[Tt],Ee[Pt],Ee[vt],Ee[At]),L=Tt,U=Pt,P=vt,F=At),(fe.equals(O)===!1||Ze!==k)&&(e.blendColor(fe.r,fe.g,fe.b,Ze),O.copy(fe),k=Ze),M=Y,T=!1}function se(Y,Ut){Y.side===Fa?wt(e.CULL_FACE):ut(e.CULL_FACE);let Tt=Y.side===Ni;Ut&&(Tt=!Tt),te(Tt),Y.blending===yo&&Y.transparent===!1?qt(ir):qt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const Pt=Y.stencilWrite;f.setTest(Pt),Pt&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Be(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ut(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function te(Y){D!==Y&&(Y?e.frontFace(e.CW):e.frontFace(e.CCW),D=Y)}function Ie(Y){Y!==IA?(ut(e.CULL_FACE),Y!==H&&(Y===Tx?e.cullFace(e.BACK):Y===BA?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),H=Y}function V(Y){Y!==j&&(B&&e.lineWidth(Y),j=Y)}function Be(Y,Ut,Tt){Y?(ut(e.POLYGON_OFFSET_FILL),(Q!==Ut||ct!==Tt)&&(e.polygonOffset(Ut,Tt),Q=Ut,ct=Tt)):wt(e.POLYGON_OFFSET_FILL)}function ge(Y){Y?ut(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function we(Y){Y===void 0&&(Y=e.TEXTURE0+st-1),xt!==Y&&(e.activeTexture(Y),xt=Y)}function Ht(Y,Ut,Tt){Tt===void 0&&(xt===null?Tt=e.TEXTURE0+st-1:Tt=xt);let Pt=yt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},yt[Tt]=Pt),(Pt.type!==Y||Pt.texture!==Ut)&&(xt!==Tt&&(e.activeTexture(Tt),xt=Tt),e.bindTexture(Y,Ut||nt[Y]),Pt.type=Y,Pt.texture=Ut)}function N(){const Y=yt[xt];Y!==void 0&&Y.type!==void 0&&(e.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function E(){try{e.compressedTexImage2D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function q(){try{e.compressedTexImage3D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function ht(){try{e.texSubImage2D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function _t(){try{e.texSubImage3D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function ft(){try{e.compressedTexSubImage2D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function Jt(){try{e.compressedTexSubImage3D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function Rt(){try{e.texStorage2D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function Yt(){try{e.texStorage3D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function ue(){try{e.texImage2D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function Mt(){try{e.texImage3D(...arguments)}catch(Y){Oe("WebGLState:",Y)}}function bt(Y){mt.equals(Y)===!1&&(e.scissor(Y.x,Y.y,Y.z,Y.w),mt.copy(Y))}function Ft(Y){Et.equals(Y)===!1&&(e.viewport(Y.x,Y.y,Y.z,Y.w),Et.copy(Y))}function Ot(Y,Ut){let Tt=m.get(Ut);Tt===void 0&&(Tt=new WeakMap,m.set(Ut,Tt));let Pt=Tt.get(Y);Pt===void 0&&(Pt=e.getUniformBlockIndex(Ut,Y.name),Tt.set(Y,Pt))}function Ct(Y,Ut){const Pt=m.get(Ut).get(Y);p.get(Ut)!==Pt&&(e.uniformBlockBinding(Ut,Pt,Y.__bindingPointIndex),p.set(Ut,Pt))}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),g={},xt=null,yt={},_={},v=new WeakMap,S=[],b=null,R=!1,M=null,x=null,L=null,U=null,C=null,P=null,F=null,O=new pe(0,0,0),k=0,T=!1,D=null,H=null,j=null,Q=null,ct=null,mt.set(0,0,e.canvas.width,e.canvas.height),Et.set(0,0,e.canvas.width,e.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ut,disable:wt,bindFramebuffer:Vt,drawBuffers:zt,useProgram:Se,setBlending:qt,setMaterial:se,setFlipSided:te,setCullFace:Ie,setLineWidth:V,setPolygonOffset:Be,setScissorTest:ge,activeTexture:we,bindTexture:Ht,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ue,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Yt,texSubImage2D:ht,texSubImage3D:_t,compressedTexSubImage2D:ft,compressedTexSubImage3D:Jt,scissor:bt,viewport:Ft,reset:ve}}function sU(e,t,n,r,o,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Gt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return S?new OffscreenCanvas(N,E):Ou("canvas")}function R(N,E,q){let ht=1;const _t=Ht(N);if((_t.width>q||_t.height>q)&&(ht=q/Math.max(_t.width,_t.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(ht*_t.width),Jt=Math.floor(ht*_t.height);_===void 0&&(_=b(ft,Jt));const Rt=E?b(ft,Jt):_;return Rt.width=ft,Rt.height=Jt,Rt.getContext("2d").drawImage(N,0,0,ft,Jt),de("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+ft+"x"+Jt+")."),Rt}else return"data"in N&&de("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){e.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?e.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function U(N,E,q,ht,_t=!1){if(N!==null){if(e[N]!==void 0)return e[N];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=E;if(E===e.RED&&(q===e.FLOAT&&(ft=e.R32F),q===e.HALF_FLOAT&&(ft=e.R16F),q===e.UNSIGNED_BYTE&&(ft=e.R8)),E===e.RED_INTEGER&&(q===e.UNSIGNED_BYTE&&(ft=e.R8UI),q===e.UNSIGNED_SHORT&&(ft=e.R16UI),q===e.UNSIGNED_INT&&(ft=e.R32UI),q===e.BYTE&&(ft=e.R8I),q===e.SHORT&&(ft=e.R16I),q===e.INT&&(ft=e.R32I)),E===e.RG&&(q===e.FLOAT&&(ft=e.RG32F),q===e.HALF_FLOAT&&(ft=e.RG16F),q===e.UNSIGNED_BYTE&&(ft=e.RG8)),E===e.RG_INTEGER&&(q===e.UNSIGNED_BYTE&&(ft=e.RG8UI),q===e.UNSIGNED_SHORT&&(ft=e.RG16UI),q===e.UNSIGNED_INT&&(ft=e.RG32UI),q===e.BYTE&&(ft=e.RG8I),q===e.SHORT&&(ft=e.RG16I),q===e.INT&&(ft=e.RG32I)),E===e.RGB_INTEGER&&(q===e.UNSIGNED_BYTE&&(ft=e.RGB8UI),q===e.UNSIGNED_SHORT&&(ft=e.RGB16UI),q===e.UNSIGNED_INT&&(ft=e.RGB32UI),q===e.BYTE&&(ft=e.RGB8I),q===e.SHORT&&(ft=e.RGB16I),q===e.INT&&(ft=e.RGB32I)),E===e.RGBA_INTEGER&&(q===e.UNSIGNED_BYTE&&(ft=e.RGBA8UI),q===e.UNSIGNED_SHORT&&(ft=e.RGBA16UI),q===e.UNSIGNED_INT&&(ft=e.RGBA32UI),q===e.BYTE&&(ft=e.RGBA8I),q===e.SHORT&&(ft=e.RGBA16I),q===e.INT&&(ft=e.RGBA32I)),E===e.RGB&&(q===e.UNSIGNED_INT_5_9_9_9_REV&&(ft=e.RGB9_E5),q===e.UNSIGNED_INT_10F_11F_11F_REV&&(ft=e.R11F_G11F_B10F)),E===e.RGBA){const Jt=_t?Jh:Pe.getTransfer(ht);q===e.FLOAT&&(ft=e.RGBA32F),q===e.HALF_FLOAT&&(ft=e.RGBA16F),q===e.UNSIGNED_BYTE&&(ft=Jt===$e?e.SRGB8_ALPHA8:e.RGBA8),q===e.UNSIGNED_SHORT_4_4_4_4&&(ft=e.RGBA4),q===e.UNSIGNED_SHORT_5_5_5_1&&(ft=e.RGB5_A1)}return(ft===e.R16F||ft===e.R32F||ft===e.RG16F||ft===e.RG32F||ft===e.RGBA16F||ft===e.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(N,E){let q;return N?E===null||E===rr||E===Nu?q=e.DEPTH24_STENCIL8:E===Ba?q=e.DEPTH32F_STENCIL8:E===Lu&&(q=e.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rr||E===Nu?q=e.DEPTH_COMPONENT24:E===Ba?q=e.DEPTH_COMPONENT32F:E===Lu&&(q=e.DEPTH_COMPONENT16),q}function P(N,E){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==ci&&N.minFilter!==gi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function F(N){const E=N.target;E.removeEventListener("dispose",F),k(E),E.isVideoTexture&&g.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),D(E)}function k(N){const E=r.get(N);if(E.__webglInit===void 0)return;const q=N.source,ht=v.get(q);if(ht){const _t=ht[E.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&T(N),Object.keys(ht).length===0&&v.delete(q)}r.remove(N)}function T(N){const E=r.get(N);e.deleteTexture(E.__webglTexture);const q=N.source,ht=v.get(q);delete ht[E.__cacheKey],u.memory.textures--}function D(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let _t=0;_t<E.__webglFramebuffer[ht].length;_t++)e.deleteFramebuffer(E.__webglFramebuffer[ht][_t]);else e.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)e.deleteFramebuffer(E.__webglFramebuffer[ht]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let ht=0,_t=q.length;ht<_t;ht++){const ft=r.get(q[ht]);ft.__webglTexture&&(e.deleteTexture(ft.__webglTexture),u.memory.textures--),r.remove(q[ht])}r.remove(N)}let H=0;function j(){H=0}function Q(){const N=H;return N>=o.maxTextures&&de("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ct(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function st(N,E){const q=r.get(N);if(N.isVideoTexture&&ge(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ht=N.image;if(ht===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,q.__webglTexture,e.TEXTURE0+E)}function B(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,q.__webglTexture,e.TEXTURE0+E)}function z(N,E){const q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,E);return}n.bindTexture(e.TEXTURE_3D,q.__webglTexture,e.TEXTURE0+E)}function tt(N,E){const q=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ut(q,N,E);return}n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture,e.TEXTURE0+E)}const xt={[ag]:e.REPEAT,[Or]:e.CLAMP_TO_EDGE,[rg]:e.MIRRORED_REPEAT},yt={[ci]:e.NEAREST,[s4]:e.NEAREST_MIPMAP_NEAREST,[sh]:e.NEAREST_MIPMAP_LINEAR,[gi]:e.LINEAR,[Jm]:e.LINEAR_MIPMAP_NEAREST,[go]:e.LINEAR_MIPMAP_LINEAR},I={[u4]:e.NEVER,[m4]:e.ALWAYS,[f4]:e.LESS,[S1]:e.LEQUAL,[h4]:e.EQUAL,[M1]:e.GEQUAL,[d4]:e.GREATER,[p4]:e.NOTEQUAL};function it(N,E){if(E.type===Ba&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===gi||E.magFilter===Jm||E.magFilter===sh||E.magFilter===go||E.minFilter===gi||E.minFilter===Jm||E.minFilter===sh||E.minFilter===go)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(N,e.TEXTURE_WRAP_S,xt[E.wrapS]),e.texParameteri(N,e.TEXTURE_WRAP_T,xt[E.wrapT]),(N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY)&&e.texParameteri(N,e.TEXTURE_WRAP_R,xt[E.wrapR]),e.texParameteri(N,e.TEXTURE_MAG_FILTER,yt[E.magFilter]),e.texParameteri(N,e.TEXTURE_MIN_FILTER,yt[E.minFilter]),E.compareFunction&&(e.texParameteri(N,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(N,e.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==sh&&E.minFilter!==go||E.type===Ba&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");e.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function mt(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",F));const ht=E.source;let _t=v.get(ht);_t===void 0&&(_t={},v.set(ht,_t));const ft=ct(E);if(ft!==N.__cacheKey){_t[ft]===void 0&&(_t[ft]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,q=!0),_t[ft].usedTimes++;const Jt=_t[N.__cacheKey];Jt!==void 0&&(_t[N.__cacheKey].usedTimes--,Jt.usedTimes===0&&T(E)),N.__cacheKey=ft,N.__webglTexture=_t[ft].texture}return q}function Et(N,E,q){return Math.floor(Math.floor(N/q)/E)}function It(N,E,q,ht){const ft=N.updateRanges;if(ft.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,q,ht,E.data);else{ft.sort((Mt,bt)=>Mt.start-bt.start);let Jt=0;for(let Mt=1;Mt<ft.length;Mt++){const bt=ft[Jt],Ft=ft[Mt],Ot=bt.start+bt.count,Ct=Et(Ft.start,E.width,4),ve=Et(bt.start,E.width,4);Ft.start<=Ot+1&&Ct===ve&&Et(Ft.start+Ft.count-1,E.width,4)===Ct?bt.count=Math.max(bt.count,Ft.start+Ft.count-bt.start):(++Jt,ft[Jt]=Ft)}ft.length=Jt+1;const Rt=e.getParameter(e.UNPACK_ROW_LENGTH),Yt=e.getParameter(e.UNPACK_SKIP_PIXELS),ue=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,bt=ft.length;Mt<bt;Mt++){const Ft=ft[Mt],Ot=Math.floor(Ft.start/4),Ct=Math.ceil(Ft.count/4),ve=Ot%E.width,Y=Math.floor(Ot/E.width),Ut=Ct,Tt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,ve),e.pixelStorei(e.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(e.TEXTURE_2D,0,ve,Y,Ut,Tt,q,ht,E.data)}N.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,Rt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,ue)}}function nt(N,E,q){let ht=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=e.TEXTURE_3D);const _t=mt(N,E),ft=E.source;n.bindTexture(ht,N.__webglTexture,e.TEXTURE0+q);const Jt=r.get(ft);if(ft.version!==Jt.__version||_t===!0){n.activeTexture(e.TEXTURE0+q);const Rt=Pe.getPrimaries(Pe.workingColorSpace),Yt=E.colorSpace===Ts?null:Pe.getPrimaries(E.colorSpace),ue=E.colorSpace===Ts||Rt===Yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Mt=R(E.image,!1,o.maxTextureSize);Mt=we(E,Mt);const bt=l.convert(E.format,E.colorSpace),Ft=l.convert(E.type);let Ot=U(E.internalFormat,bt,Ft,E.colorSpace,E.isVideoTexture);it(ht,E);let Ct;const ve=E.mipmaps,Y=E.isVideoTexture!==!0,Ut=Jt.__version===void 0||_t===!0,Tt=ft.dataReady,Pt=P(E,Mt);if(E.isDepthTexture)Ot=C(E.format===_o,E.type),Ut&&(Y?n.texStorage2D(e.TEXTURE_2D,1,Ot,Mt.width,Mt.height):n.texImage2D(e.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,bt,Ft,null));else if(E.isDataTexture)if(ve.length>0){Y&&Ut&&n.texStorage2D(e.TEXTURE_2D,Pt,Ot,ve[0].width,ve[0].height);for(let St=0,vt=ve.length;St<vt;St++)Ct=ve[St],Y?Tt&&n.texSubImage2D(e.TEXTURE_2D,St,0,0,Ct.width,Ct.height,bt,Ft,Ct.data):n.texImage2D(e.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,bt,Ft,Ct.data);E.generateMipmaps=!1}else Y?(Ut&&n.texStorage2D(e.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),Tt&&It(E,Mt,bt,Ft)):n.texImage2D(e.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,bt,Ft,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Y&&Ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Pt,Ot,ve[0].width,ve[0].height,Mt.depth);for(let St=0,vt=ve.length;St<vt;St++)if(Ct=ve[St],E.format!==za)if(bt!==null)if(Y){if(Tt)if(E.layerUpdates.size>0){const At=ny(Ct.width,Ct.height,E.format,E.type);for(const fe of E.layerUpdates){const Ze=Ct.data.subarray(fe*At/Ct.data.BYTES_PER_ELEMENT,(fe+1)*At/Ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,St,0,0,fe,Ct.width,Ct.height,1,bt,Ze)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,bt,Ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Tt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,bt,Ft,Ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,bt,Ft,Ct.data)}else{Y&&Ut&&n.texStorage2D(e.TEXTURE_2D,Pt,Ot,ve[0].width,ve[0].height);for(let St=0,vt=ve.length;St<vt;St++)Ct=ve[St],E.format!==za?bt!==null?Y?Tt&&n.compressedTexSubImage2D(e.TEXTURE_2D,St,0,0,Ct.width,Ct.height,bt,Ct.data):n.compressedTexImage2D(e.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Tt&&n.texSubImage2D(e.TEXTURE_2D,St,0,0,Ct.width,Ct.height,bt,Ft,Ct.data):n.texImage2D(e.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,bt,Ft,Ct.data)}else if(E.isDataArrayTexture)if(Y){if(Ut&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt)if(E.layerUpdates.size>0){const St=ny(Mt.width,Mt.height,E.format,E.type);for(const vt of E.layerUpdates){const At=Mt.data.subarray(vt*St/Mt.data.BYTES_PER_ELEMENT,(vt+1)*St/Mt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,vt,Mt.width,Mt.height,1,bt,Ft,At)}E.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,Ft,Mt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,bt,Ft,Mt.data);else if(E.isData3DTexture)Y?(Ut&&n.texStorage3D(e.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,bt,Ft,Mt.data)):n.texImage3D(e.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,bt,Ft,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(Y)n.texStorage2D(e.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,vt=Mt.height;for(let At=0;At<Pt;At++)n.texImage2D(e.TEXTURE_2D,At,Ot,St,vt,0,bt,Ft,null),St>>=1,vt>>=1}}else if(ve.length>0){if(Y&&Ut){const St=Ht(ve[0]);n.texStorage2D(e.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,vt=ve.length;St<vt;St++)Ct=ve[St],Y?Tt&&n.texSubImage2D(e.TEXTURE_2D,St,0,0,bt,Ft,Ct):n.texImage2D(e.TEXTURE_2D,St,Ot,bt,Ft,Ct);E.generateMipmaps=!1}else if(Y){if(Ut){const St=Ht(Mt);n.texStorage2D(e.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,bt,Ft,Mt)}else n.texImage2D(e.TEXTURE_2D,0,Ot,bt,Ft,Mt);M(E)&&x(ht),Jt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ut(N,E,q){if(E.image.length!==6)return;const ht=mt(N,E),_t=E.source;n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+q);const ft=r.get(_t);if(_t.version!==ft.__version||ht===!0){n.activeTexture(e.TEXTURE0+q);const Jt=Pe.getPrimaries(Pe.workingColorSpace),Rt=E.colorSpace===Ts?null:Pe.getPrimaries(E.colorSpace),Yt=E.colorSpace===Ts||Jt===Rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!ue&&!Mt?bt[vt]=R(E.image[vt],!0,o.maxCubemapSize):bt[vt]=Mt?E.image[vt].image:E.image[vt],bt[vt]=we(E,bt[vt]);const Ft=bt[0],Ot=l.convert(E.format,E.colorSpace),Ct=l.convert(E.type),ve=U(E.internalFormat,Ot,Ct,E.colorSpace),Y=E.isVideoTexture!==!0,Ut=ft.__version===void 0||ht===!0,Tt=_t.dataReady;let Pt=P(E,Ft);it(e.TEXTURE_CUBE_MAP,E);let St;if(ue){Y&&Ut&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Pt,ve,Ft.width,Ft.height);for(let vt=0;vt<6;vt++){St=bt[vt].mipmaps;for(let At=0;At<St.length;At++){const fe=St[At];E.format!==za?Ot!==null?Y?Tt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At,0,0,fe.width,fe.height,Ot,fe.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At,ve,fe.width,fe.height,0,fe.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At,0,0,fe.width,fe.height,Ot,Ct,fe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At,ve,fe.width,fe.height,0,Ot,Ct,fe.data)}}}else{if(St=E.mipmaps,Y&&Ut){St.length>0&&Pt++;const vt=Ht(bt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Pt,ve,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Mt){Y?Tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,Ot,Ct,bt[vt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ve,bt[vt].width,bt[vt].height,0,Ot,Ct,bt[vt].data);for(let At=0;At<St.length;At++){const Ze=St[At].image[vt].image;Y?Tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At+1,0,0,Ze.width,Ze.height,Ot,Ct,Ze.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At+1,ve,Ze.width,Ze.height,0,Ot,Ct,Ze.data)}}else{Y?Tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot,Ct,bt[vt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ve,Ot,Ct,bt[vt]);for(let At=0;At<St.length;At++){const fe=St[At];Y?Tt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At+1,0,0,Ot,Ct,fe.image[vt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At+1,ve,Ot,Ct,fe.image[vt])}}}M(E)&&x(e.TEXTURE_CUBE_MAP),ft.__version=_t.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,q,ht,_t,ft){const Jt=l.convert(q.format,q.colorSpace),Rt=l.convert(q.type),Yt=U(q.internalFormat,Jt,Rt,q.colorSpace),ue=r.get(E),Mt=r.get(q);if(Mt.__renderTarget=E,!ue.__hasExternalTextures){const bt=Math.max(1,E.width>>ft),Ft=Math.max(1,E.height>>ft);_t===e.TEXTURE_3D||_t===e.TEXTURE_2D_ARRAY?n.texImage3D(_t,ft,Yt,bt,Ft,E.depth,0,Jt,Rt,null):n.texImage2D(_t,ft,Yt,bt,Ft,0,Jt,Rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,N),Be(E)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ht,_t,Mt.__webglTexture,0,V(E)):(_t===e.TEXTURE_2D||_t>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ht,_t,Mt.__webglTexture,ft),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(N,E,q){if(e.bindRenderbuffer(e.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,_t=ht&&ht.isDepthTexture?ht.type:null,ft=C(E.stencilBuffer,_t),Jt=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Be(E)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,V(E),ft,E.width,E.height):q?e.renderbufferStorageMultisample(e.RENDERBUFFER,V(E),ft,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,ft,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Jt,e.RENDERBUFFER,N)}else{const ht=E.textures;for(let _t=0;_t<ht.length;_t++){const ft=ht[_t],Jt=l.convert(ft.format,ft.colorSpace),Rt=l.convert(ft.type),Yt=U(ft.internalFormat,Jt,Rt,ft.colorSpace);Be(E)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,V(E),Yt,E.width,E.height):q?e.renderbufferStorageMultisample(e.RENDERBUFFER,V(E),Yt,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,Yt,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function zt(N,E,q){const ht=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(E.depthTexture);if(_t.__renderTarget=E,(!_t.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(_t.__webglInit===void 0&&(_t.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),_t.__webglTexture===void 0){_t.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,_t.__webglTexture),it(e.TEXTURE_CUBE_MAP,E.depthTexture);const ue=l.convert(E.depthTexture.format),Mt=l.convert(E.depthTexture.type);let bt;E.depthTexture.format===Gr?bt=e.DEPTH_COMPONENT24:E.depthTexture.format===_o&&(bt=e.DEPTH24_STENCIL8);for(let Ft=0;Ft<6;Ft++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0,bt,E.width,E.height,0,ue,Mt,null)}}else st(E.depthTexture,0);const ft=_t.__webglTexture,Jt=V(E),Rt=ht?e.TEXTURE_CUBE_MAP_POSITIVE_X+q:e.TEXTURE_2D,Yt=E.depthTexture.format===_o?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===Gr)Be(E)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Yt,Rt,ft,0,Jt):e.framebufferTexture2D(e.FRAMEBUFFER,Yt,Rt,ft,0);else if(E.depthTexture.format===_o)Be(E)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Yt,Rt,ft,0,Jt):e.framebufferTexture2D(e.FRAMEBUFFER,Yt,Rt,ft,0);else throw new Error("Unknown depthTexture format")}function Se(N){const E=r.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const _t=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",_t)};ht.addEventListener("dispose",_t),E.__depthDisposeCallback=_t}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ht=0;ht<6;ht++)zt(E.__webglFramebuffer[ht],N,ht);else{const ht=N.texture.mipmaps;ht&&ht.length>0?zt(E.__webglFramebuffer[0],N,0):zt(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=e.createRenderbuffer(),Vt(E.__webglDepthbuffer[ht],N,!1);else{const _t=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ht];e.bindRenderbuffer(e.RENDERBUFFER,ft),e.framebufferRenderbuffer(e.FRAMEBUFFER,_t,e.RENDERBUFFER,ft)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),Vt(E.__webglDepthbuffer,N,!1);else{const _t=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ft),e.framebufferRenderbuffer(e.FRAMEBUFFER,_t,e.RENDERBUFFER,ft)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function mn(N,E,q){const ht=r.get(N);E!==void 0&&wt(ht.__webglFramebuffer,N,N.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),q!==void 0&&Se(N)}function Ee(N){const E=N.texture,q=r.get(N),ht=r.get(E);N.addEventListener("dispose",O);const _t=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Jt=_t.length>1;if(Jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=e.createTexture()),ht.__version=E.version,u.memory.textures++),ft){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)q.__webglFramebuffer[Rt][Yt]=e.createFramebuffer()}else q.__webglFramebuffer[Rt]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=e.createFramebuffer()}else q.__webglFramebuffer=e.createFramebuffer();if(Jt)for(let Rt=0,Yt=_t.length;Rt<Yt;Rt++){const ue=r.get(_t[Rt]);ue.__webglTexture===void 0&&(ue.__webglTexture=e.createTexture(),u.memory.textures++)}if(N.samples>0&&Be(N)===!1){q.__webglMultisampledFramebuffer=e.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<_t.length;Rt++){const Yt=_t[Rt];q.__webglColorRenderbuffer[Rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ue=l.convert(Yt.format,Yt.colorSpace),Mt=l.convert(Yt.type),bt=U(Yt.internalFormat,ue,Mt,Yt.colorSpace,N.isXRRenderTarget===!0),Ft=V(N);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ft,bt,N.width,N.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=e.createRenderbuffer(),Vt(q.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ft){n.bindTexture(e.TEXTURE_CUBE_MAP,ht.__webglTexture),it(e.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)wt(q.__webglFramebuffer[Rt][Yt],N,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Yt);else wt(q.__webglFramebuffer[Rt],N,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&x(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Jt){for(let Rt=0,Yt=_t.length;Rt<Yt;Rt++){const ue=_t[Rt],Mt=r.get(ue);let bt=e.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(bt=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(bt,Mt.__webglTexture),it(bt,ue),wt(q.__webglFramebuffer,N,ue,e.COLOR_ATTACHMENT0+Rt,bt,0),M(ue)&&x(bt)}n.unbindTexture()}else{let Rt=e.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Rt,ht.__webglTexture),it(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)wt(q.__webglFramebuffer[Yt],N,E,e.COLOR_ATTACHMENT0,Rt,Yt);else wt(q.__webglFramebuffer,N,E,e.COLOR_ATTACHMENT0,Rt,0);M(E)&&x(Rt),n.unbindTexture()}N.depthBuffer&&Se(N)}function qt(N){const E=N.textures;for(let q=0,ht=E.length;q<ht;q++){const _t=E[q];if(M(_t)){const ft=L(N),Jt=r.get(_t).__webglTexture;n.bindTexture(ft,Jt),x(ft),n.unbindTexture()}}}const se=[],te=[];function Ie(N){if(N.samples>0){if(Be(N)===!1){const E=N.textures,q=N.width,ht=N.height;let _t=e.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Jt=r.get(N),Rt=E.length>1;if(Rt)for(let ue=0;ue<E.length;ue++)n.bindFramebuffer(e.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Jt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const Yt=N.texture.mipmaps;Yt&&Yt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ue=0;ue<E.length;ue++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(_t|=e.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(_t|=e.STENCIL_BUFFER_BIT)),Rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Jt.__webglColorRenderbuffer[ue]);const Mt=r.get(E[ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Mt,0)}e.blitFramebuffer(0,0,q,ht,0,0,q,ht,_t,e.NEAREST),p===!0&&(se.length=0,te.length=0,se.push(e.COLOR_ATTACHMENT0+ue),N.depthBuffer&&N.resolveDepthBuffer===!1&&(se.push(ft),te.push(ft),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Rt)for(let ue=0;ue<E.length;ue++){n.bindFramebuffer(e.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.RENDERBUFFER,Jt.__webglColorRenderbuffer[ue]);const Mt=r.get(E[ue]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Jt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ue,e.TEXTURE_2D,Mt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function V(N){return Math.min(o.maxSamples,N.samples)}function Be(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ge(N){const E=u.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function we(N,E){const q=N.colorSpace,ht=N.format,_t=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Vl&&q!==Ts&&(Pe.getTransfer(q)===$e?(ht!==za||_t!==Sa)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",q)),E}function Ht(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=j,this.setTexture2D=st,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=tt,this.rebindTextures=mn,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function oU(e,t){function n(r,o=Ts){let l;const u=Pe.getTransfer(o);if(r===Sa)return e.UNSIGNED_BYTE;if(r===m1)return e.UNSIGNED_SHORT_4_4_4_4;if(r===g1)return e.UNSIGNED_SHORT_5_5_5_1;if(r===ZS)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===KS)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===YS)return e.BYTE;if(r===jS)return e.SHORT;if(r===Lu)return e.UNSIGNED_SHORT;if(r===p1)return e.INT;if(r===rr)return e.UNSIGNED_INT;if(r===Ba)return e.FLOAT;if(r===Ki)return e.HALF_FLOAT;if(r===QS)return e.ALPHA;if(r===JS)return e.RGB;if(r===za)return e.RGBA;if(r===Gr)return e.DEPTH_COMPONENT;if(r===_o)return e.DEPTH_STENCIL;if(r===_1)return e.RED;if(r===v1)return e.RED_INTEGER;if(r===Hl)return e.RG;if(r===x1)return e.RG_INTEGER;if(r===y1)return e.RGBA_INTEGER;if(r===Gh||r===Hh||r===Vh||r===kh)if(u===$e)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Gh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Gh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sg||r===og||r===lg||r===cg)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===sg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===og)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ug||r===fg||r===hg||r===dg||r===pg||r===mg||r===gg)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ug||r===fg)return u===$e?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===hg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===dg)return l.COMPRESSED_R11_EAC;if(r===pg)return l.COMPRESSED_SIGNED_R11_EAC;if(r===mg)return l.COMPRESSED_RG11_EAC;if(r===gg)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===_g||r===vg||r===xg||r===yg||r===Sg||r===Mg||r===Eg||r===bg||r===Tg||r===Ag||r===wg||r===Rg||r===Cg||r===Dg)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_g)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Eg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ag)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dg)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ug||r===Lg||r===Ng)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===Ug)return u===$e?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lg)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ng)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Og||r===Pg||r===Fg||r===Ig)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(r===Og)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Pg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ig)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nu?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:n}}const lU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const r=new mM(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new qn({vertexShader:lU,fragmentShader:cU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $i(new ud(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fU extends nc{constructor(t,n){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,b=null;const R=typeof XRWebGLBinding<"u",M=new uU,x={},L=n.getContextAttributes();let U=null,C=null;const P=[],F=[],O=new Gt;let k=null;const T=new xa;T.viewport=new Un;const D=new xa;D.viewport=new Un;const H=[T,D],j=new yw;let Q=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=P[nt];return ut===void 0&&(ut=new S0,P[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=P[nt];return ut===void 0&&(ut=new S0,P[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=P[nt];return ut===void 0&&(ut=new S0,P[nt]=ut),ut.getHandSpace()};function st(nt){const ut=F.indexOf(nt.inputSource);if(ut===-1)return;const wt=P[ut];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,m||u),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){o.removeEventListener("select",st),o.removeEventListener("selectstart",st),o.removeEventListener("selectend",st),o.removeEventListener("squeeze",st),o.removeEventListener("squeezestart",st),o.removeEventListener("squeezeend",st),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",z);for(let nt=0;nt<P.length;nt++){const ut=F[nt];ut!==null&&(F[nt]=null,P[nt].disconnect(ut))}Q=null,ct=null,M.reset();for(const nt in x)delete x[nt];t.setRenderTarget(U),S=null,v=null,_=null,o=null,C=null,It.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){l=nt,r.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,r.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(nt){m=nt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(nt){if(o=nt,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",st),o.addEventListener("selectstart",st),o.addEventListener("selectend",st),o.addEventListener("squeeze",st),o.addEventListener("squeezestart",st),o.addEventListener("squeezeend",st),o.addEventListener("end",B),o.addEventListener("inputsourceschange",z),L.xrCompatible!==!0&&await n.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,zt=null;L.depth&&(zt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=L.stencil?_o:Gr,Vt=L.stencil?Nu:rr);const Se={colorFormat:n.RGBA8,depthFormat:zt,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(Se),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Oi(v.textureWidth,v.textureHeight,{format:za,type:Sa,depthTexture:new Fu(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Oi(S.framebufferWidth,S.framebufferHeight,{format:za,type:Sa,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(f),It.setContext(o),It.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function z(nt){for(let ut=0;ut<nt.removed.length;ut++){const wt=nt.removed[ut],Vt=F.indexOf(wt);Vt>=0&&(F[Vt]=null,P[Vt].disconnect(wt))}for(let ut=0;ut<nt.added.length;ut++){const wt=nt.added[ut];let Vt=F.indexOf(wt);if(Vt===-1){for(let Se=0;Se<P.length;Se++)if(Se>=F.length){F.push(wt),Vt=Se;break}else if(F[Se]===null){F[Se]=wt,Vt=Se;break}if(Vt===-1)break}const zt=P[Vt];zt&&zt.connect(wt)}}const tt=new X,xt=new X;function yt(nt,ut,wt){tt.setFromMatrixPosition(ut.matrixWorld),xt.setFromMatrixPosition(wt.matrixWorld);const Vt=tt.distanceTo(xt),zt=ut.projectionMatrix.elements,Se=wt.projectionMatrix.elements,mn=zt[14]/(zt[10]-1),Ee=zt[14]/(zt[10]+1),qt=(zt[9]+1)/zt[5],se=(zt[9]-1)/zt[5],te=(zt[8]-1)/zt[0],Ie=(Se[8]+1)/Se[0],V=mn*te,Be=mn*Ie,ge=Vt/(-te+Ie),we=ge*-te;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(we),nt.translateZ(ge),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),zt[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ht=mn+ge,N=Ee+ge,E=V-we,q=Be+(Vt-we),ht=qt*Ee/N*Ht,_t=se*Ee/N*Ht;nt.projectionMatrix.makePerspective(E,q,ht,_t,Ht,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function I(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(o===null)return;let ut=nt.near,wt=nt.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),j.near=D.near=T.near=ut,j.far=D.far=T.far=wt,(Q!==j.near||ct!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),Q=j.near,ct=j.far),j.layers.mask=nt.layers.mask|6,T.layers.mask=j.layers.mask&3,D.layers.mask=j.layers.mask&5;const Vt=nt.parent,zt=j.cameras;I(j,Vt);for(let Se=0;Se<zt.length;Se++)I(zt[Se],Vt);zt.length===2?yt(j,T,D):j.projectionMatrix.copy(T.projectionMatrix),it(nt,j,Vt)};function it(nt,ut,wt){wt===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=zg*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(nt){p=nt,v!==null&&(v.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(nt){return x[nt]};let mt=null;function Et(nt,ut){if(g=ut.getViewerPose(m||u),b=ut,g!==null){const wt=g.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Vt=!1;wt.length!==j.cameras.length&&(j.cameras.length=0,Vt=!0);for(let Ee=0;Ee<wt.length;Ee++){const qt=wt[Ee];let se=null;if(S!==null)se=S.getViewport(qt);else{const Ie=_.getViewSubImage(v,qt);se=Ie.viewport,Ee===0&&(t.setRenderTargetTextures(C,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(C))}let te=H[Ee];te===void 0&&(te=new xa,te.layers.enable(Ee),te.viewport=new Un,H[Ee]=te),te.matrix.fromArray(qt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(qt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(se.x,se.y,se.width,se.height),Ee===0&&(j.matrix.copy(te.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Vt===!0&&j.cameras.push(te)}const zt=o.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const Ee=_.getDepthInformation(wt[0]);Ee&&Ee.isValid&&Ee.texture&&M.init(Ee,o.renderState)}if(zt&&zt.includes("camera-access")&&R){t.state.unbindTexture(),_=r.getBinding();for(let Ee=0;Ee<wt.length;Ee++){const qt=wt[Ee].camera;if(qt){let se=x[qt];se||(se=new mM,x[qt]=se);const te=_.getCameraImage(qt);se.sourceTexture=te}}}}for(let wt=0;wt<P.length;wt++){const Vt=F[wt],zt=P[wt];Vt!==null&&zt!==void 0&&zt.update(Vt,ut,m||u)}mt&&mt(nt,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),b=null}const It=new xM;It.setAnimationLoop(Et),this.setAnimationLoop=function(nt){mt=nt},this.dispose=function(){}}}const co=new Hr,hU=new un;function dU(e,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,sM(e)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,L,U,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(M,x):x.isMeshToonMaterial?(l(M,x),_(M,x)):x.isMeshPhongMaterial?(l(M,x),g(M,x)):x.isMeshStandardMaterial?(l(M,x),v(M,x),x.isMeshPhysicalMaterial&&S(M,x,C)):x.isMeshMatcapMaterial?(l(M,x),b(M,x)):x.isMeshDepthMaterial?l(M,x):x.isMeshDistanceMaterial?(l(M,x),R(M,x)):x.isMeshNormalMaterial?l(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,L,U):x.isSpriteMaterial?m(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Ni&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Ni&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const L=t.get(x),U=L.envMap,C=L.envMapRotation;U&&(M.envMap.value=U,co.copy(C),co.x*=-1,co.y*=-1,co.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),M.envMapRotation.value.setFromMatrix4(hU.makeRotationFromEuler(co)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,L,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*L,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,L){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ni&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const L=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function pU(e,t,n,r){let o={},l={},u=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,U){const C=U.program;r.uniformBlockBinding(L,C)}function m(L,U){let C=o[L.id];C===void 0&&(b(L),C=g(L),o[L.id]=C,L.addEventListener("dispose",M));const P=U.program;r.updateUBOMapping(L,P);const F=t.render.frame;l[L.id]!==F&&(v(L),l[L.id]=F)}function g(L){const U=_();L.__bindingPointIndex=U;const C=e.createBuffer(),P=L.__size,F=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,C),e.bufferData(e.UNIFORM_BUFFER,P,F),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,U,C),C}function _(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=o[L.id],C=L.uniforms,P=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,U);for(let F=0,O=C.length;F<O;F++){const k=Array.isArray(C[F])?C[F]:[C[F]];for(let T=0,D=k.length;T<D;T++){const H=k[T];if(S(H,F,T,P)===!0){const j=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let st=0;st<Q.length;st++){const B=Q[st],z=R(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,e.bufferSubData(e.UNIFORM_BUFFER,j+ct,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ct),ct+=z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,j,H.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function S(L,U,C,P){const F=L.value,O=U+"_"+C;if(P[O]===void 0)return typeof F=="number"||typeof F=="boolean"?P[O]=F:P[O]=F.clone(),!0;{const k=P[O];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return P[O]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function b(L){const U=L.uniforms;let C=0;const P=16;for(let O=0,k=U.length;O<k;O++){const T=Array.isArray(U[O])?U[O]:[U[O]];for(let D=0,H=T.length;D<H;D++){const j=T[D],Q=Array.isArray(j.value)?j.value:[j.value];for(let ct=0,st=Q.length;ct<st;ct++){const B=Q[ct],z=R(B),tt=C%P,xt=tt%z.boundary,yt=tt+xt;C+=xt,yt!==0&&P-yt<z.storage&&(C+=P-yt),j.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=C,C+=z.storage}}}const F=C%P;return F>0&&(C+=P-F),L.__size=C,L.__cache={},this}function R(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",L),U}function M(L){const U=L.target;U.removeEventListener("dispose",M);const C=u.indexOf(U.__bindingPointIndex);u.splice(C,1),e.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function x(){for(const L in o)e.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:p,update:m,dispose:x}}const mU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Za=null;function gU(){return Za===null&&(Za=new hM(mU,16,16,Hl,Ki),Za.name="DFG_LUT",Za.minFilter=gi,Za.magFilter=gi,Za.wrapS=Or,Za.wrapT=Or,Za.generateMipmaps=!1,Za.needsUpdate=!0),Za}class _U{constructor(t={}){const{canvas:n=g4(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Sa}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const R=S,M=new Set([y1,x1,v1]),x=new Set([Sa,rr,Lu,Nu,m1,g1]),L=new Uint32Array(4),U=new Int32Array(4);let C=null,P=null;const F=[],O=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=va;let H=0,j=0,Q=null,ct=-1,st=null;const B=new Un,z=new Un;let tt=null;const xt=new pe(0);let yt=0,I=n.width,it=n.height,mt=1,Et=null,It=null;const nt=new Un(0,0,I,it),ut=new Un(0,0,I,it);let wt=!1;const Vt=new dM;let zt=!1,Se=!1;const mn=new un,Ee=new X,qt=new Un,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function Ie(){return Q===null?mt:1}let V=r;function Be(w,Z){return n.getContext(w,Z)}try{const w={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${h1}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ze,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),V===null){const Z="webgl2";if(V=Be(Z,w),V===null)throw Be(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Oe("WebGLRenderer: "+w.message),w}let ge,we,Ht,N,E,q,ht,_t,ft,Jt,Rt,Yt,ue,Mt,bt,Ft,Ot,Ct,ve,Y,Ut,Tt,Pt,St;function vt(){ge=new gD(V),ge.init(),Tt=new oU(V,ge),we=new oD(V,ge,t,Tt),Ht=new rU(V,ge),we.reversedDepthBuffer&&v&&Ht.buffers.depth.setReversed(!0),N=new xD(V),E=new X5,q=new sU(V,ge,Ht,E,we,Tt,N),ht=new cD(T),_t=new mD(T),ft=new Ew(V),Pt=new rD(V,ft),Jt=new _D(V,ft,N,Pt),Rt=new SD(V,Jt,ft,N),ve=new yD(V,we,q),Ft=new lD(E),Yt=new k5(T,ht,_t,ge,we,Pt,Ft),ue=new dU(T,E),Mt=new q5,bt=new J5(ge),Ct=new aD(T,ht,_t,Ht,Rt,b,p),Ot=new iU(T,Rt,we),St=new pU(V,N,we,Ht),Y=new sD(V,ge,N),Ut=new vD(V,ge,N),N.programs=Yt.programs,T.capabilities=we,T.extensions=ge,T.properties=E,T.renderLists=Mt,T.shadowMap=Ot,T.state=Ht,T.info=N}vt(),R!==Sa&&(k=new ED(R,n.width,n.height,o,l));const At=new fU(T,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(w){w!==void 0&&(mt=w,this.setSize(I,it,!1))},this.getSize=function(w){return w.set(I,it)},this.setSize=function(w,Z,ot=!0){if(At.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,it=Z,n.width=Math.floor(w*mt),n.height=Math.floor(Z*mt),ot===!0&&(n.style.width=w+"px",n.style.height=Z+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(I*mt,it*mt).floor()},this.setDrawingBufferSize=function(w,Z,ot){I=w,it=Z,mt=ot,n.width=Math.floor(w*ot),n.height=Math.floor(Z*ot),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(R===Sa){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,Z,ot,at){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,Z,ot,at),Ht.viewport(B.copy(nt).multiplyScalar(mt).round())},this.getScissor=function(w){return w.copy(ut)},this.setScissor=function(w,Z,ot,at){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,Z,ot,at),Ht.scissor(z.copy(ut).multiplyScalar(mt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){Ht.setScissorTest(wt=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){It=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ot=!0){let at=0;if(w){let J=!1;if(Q!==null){const Dt=Q.texture.format;J=M.has(Dt)}if(J){const Dt=Q.texture.type,Bt=x.has(Dt),Lt=Ct.getClearColor(),Xt=Ct.getClearAlpha(),jt=Lt.r,oe=Lt.g,Zt=Lt.b;Bt?(L[0]=jt,L[1]=oe,L[2]=Zt,L[3]=Xt,V.clearBufferuiv(V.COLOR,0,L)):(U[0]=jt,U[1]=oe,U[2]=Zt,U[3]=Xt,V.clearBufferiv(V.COLOR,0,U))}else at|=V.COLOR_BUFFER_BIT}Z&&(at|=V.DEPTH_BUFFER_BIT),ot&&(at|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Ct.dispose(),Mt.dispose(),bt.dispose(),E.dispose(),ht.dispose(),_t.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Yt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Co),At.removeEventListener("sessionend",vc),Xa.stop()};function fe(w){w.preventDefault(),td("WebGLRenderer: Context Lost."),D=!0}function Ze(){td("WebGLRenderer: Context Restored."),D=!1;const w=N.autoReset,Z=Ot.enabled,ot=Ot.autoUpdate,at=Ot.needsUpdate,J=Ot.type;vt(),N.autoReset=w,Ot.enabled=Z,Ot.autoUpdate=ot,Ot.needsUpdate=at,Ot.type=J}function Ne(w){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fi(w){const Z=w.target;Z.removeEventListener("dispose",fi),wa(Z)}function wa(w){ju(w),E.remove(w)}function ju(w){const Z=E.get(w).programs;Z!==void 0&&(Z.forEach(function(ot){Yt.releaseProgram(ot)}),w.isShaderMaterial&&Yt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ot,at,J,Dt){Z===null&&(Z=se);const Bt=J.isMesh&&J.matrixWorld.determinant()<0,Lt=Gs(w,Z,ot,at,J);Ht.setMaterial(at,Bt);let Xt=ot.index,jt=1;if(at.wireframe===!0){if(Xt=Jt.getWireframeAttribute(ot),Xt===void 0)return;jt=2}const oe=ot.drawRange,Zt=ot.attributes.position;let le=oe.start*jt,Ve=(oe.start+oe.count)*jt;Dt!==null&&(le=Math.max(le,Dt.start*jt),Ve=Math.min(Ve,(Dt.start+Dt.count)*jt)),Xt!==null?(le=Math.max(le,0),Ve=Math.min(Ve,Xt.count)):Zt!=null&&(le=Math.max(le,0),Ve=Math.min(Ve,Zt.count));const gn=Ve-le;if(gn<0||gn===1/0)return;Pt.setup(J,at,Lt,ot,Xt);let ln,qe=Y;if(Xt!==null&&(ln=ft.get(Xt),qe=Ut,qe.setIndex(ln)),J.isMesh)at.wireframe===!0?(Ht.setLineWidth(at.wireframeLinewidth*Ie()),qe.setMode(V.LINES)):qe.setMode(V.TRIANGLES);else if(J.isLine){let ee=at.linewidth;ee===void 0&&(ee=1),Ht.setLineWidth(ee*Ie()),J.isLineSegments?qe.setMode(V.LINES):J.isLineLoop?qe.setMode(V.LINE_LOOP):qe.setMode(V.LINE_STRIP)}else J.isPoints?qe.setMode(V.POINTS):J.isSprite&&qe.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Pu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))qe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ee=J._multiDrawStarts,ke=J._multiDrawCounts,he=J._multiDrawCount,ti=Xt?ft.get(Xt).bytesPerElement:1,cr=E.get(at).currentProgram.getUniforms();for(let ei=0;ei<he;ei++)cr.setValue(V,"_gl_DrawID",ei),qe.render(ee[ei]/ti,ke[ei])}else if(J.isInstancedMesh)qe.renderInstances(le,gn,J.count);else if(ot.isInstancedBufferGeometry){const ee=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,ke=Math.min(ot.instanceCount,ee);qe.renderInstances(le,gn,ke)}else qe.render(le,gn)};function gc(w,Z,ot){w.transparent===!0&&w.side===Fa&&w.forceSinglePass===!1?(w.side=Ni,w.needsUpdate=!0,Uo(w,Z,ot),w.side=Os,w.needsUpdate=!0,Uo(w,Z,ot),w.side=Fa):Uo(w,Z,ot)}this.compile=function(w,Z,ot=null){ot===null&&(ot=w),P=bt.get(ot),P.init(Z),O.push(P),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),w!==ot&&w.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const at=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let Bt=0;Bt<Dt.length;Bt++){const Lt=Dt[Bt];gc(Lt,ot,J),at.add(Lt)}else gc(Dt,ot,J),at.add(Dt)}),P=O.pop(),at},this.compileAsync=function(w,Z,ot=null){const at=this.compile(w,Z,ot);return new Promise(J=>{function Dt(){if(at.forEach(function(Bt){E.get(Bt).currentProgram.isReady()&&at.delete(Bt)}),at.size===0){J(w);return}setTimeout(Dt,10)}ge.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ro=null;function _c(w){Ro&&Ro(w)}function Co(){Xa.stop()}function vc(){Xa.start()}const Xa=new xM;Xa.setAnimationLoop(_c),typeof self<"u"&&Xa.setContext(self),this.setAnimationLoop=function(w){Ro=w,At.setAnimationLoop(w),w===null?Xa.stop():Xa.start()},At.addEventListener("sessionstart",Co),At.addEventListener("sessionend",vc),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ot=At.enabled===!0&&At.isPresenting===!0,at=k!==null&&(Q===null||ot)&&k.begin(T,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Z),Z=At.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,Z,Q),P=bt.get(w,O.length),P.init(Z),O.push(P),mn.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Vt.setFromProjectionMatrix(mn,nr,Z.reversedDepth),Se=this.localClippingEnabled,zt=Ft.init(this.clippingPlanes,Se),C=Mt.get(w,F.length),C.init(),F.push(C),At.enabled===!0&&At.isPresenting===!0){const Bt=T.xr.getDepthSensingMesh();Bt!==null&&aa(Bt,Z,-1/0,T.sortObjects)}aa(w,Z,0,T.sortObjects),C.finish(),T.sortObjects===!0&&C.sort(Et,It),te=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,te&&Ct.addToRenderList(C,w),this.info.render.frame++,zt===!0&&Ft.beginShadows();const J=P.state.shadowsArray;if(Ot.render(J,w,Z),zt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&k.hasRenderPass())===!1){const Bt=C.opaque,Lt=C.transmissive;if(P.setupLights(),Z.isArrayCamera){const Xt=Z.cameras;if(Lt.length>0)for(let jt=0,oe=Xt.length;jt<oe;jt++){const Zt=Xt[jt];$n(Bt,Lt,w,Zt)}te&&Ct.render(w);for(let jt=0,oe=Xt.length;jt<oe;jt++){const Zt=Xt[jt];Nn(C,w,Zt,Zt.viewport)}}else Lt.length>0&&$n(Bt,Lt,w,Z),te&&Ct.render(w),Nn(C,w,Z)}Q!==null&&j===0&&(q.updateMultisampleRenderTarget(Q),q.updateRenderTargetMipmap(Q)),at&&k.end(T),w.isScene===!0&&w.onAfterRender(T,w,Z),Pt.resetDefaultState(),ct=-1,st=null,O.pop(),O.length>0?(P=O[O.length-1],zt===!0&&Ft.setGlobalState(T.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?C=F[F.length-1]:C=null};function aa(w,Z,ot,at){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)P.pushLight(w),w.castShadow&&P.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Vt.intersectsSprite(w)){at&&qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(mn);const Bt=Rt.update(w),Lt=w.material;Lt.visible&&C.push(w,Bt,Lt,ot,qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Vt.intersectsObject(w))){const Bt=Rt.update(w),Lt=w.material;if(at&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qt.copy(w.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),qt.copy(Bt.boundingSphere.center)),qt.applyMatrix4(w.matrixWorld).applyMatrix4(mn)),Array.isArray(Lt)){const Xt=Bt.groups;for(let jt=0,oe=Xt.length;jt<oe;jt++){const Zt=Xt[jt],le=Lt[Zt.materialIndex];le&&le.visible&&C.push(w,Bt,le,ot,qt.z,Zt)}}else Lt.visible&&C.push(w,Bt,Lt,ot,qt.z,null)}}const Dt=w.children;for(let Bt=0,Lt=Dt.length;Bt<Lt;Bt++)aa(Dt[Bt],Z,ot,at)}function Nn(w,Z,ot,at){const{opaque:J,transmissive:Dt,transparent:Bt}=w;P.setupLightsView(ot),zt===!0&&Ft.setGlobalState(T.clippingPlanes,ot),at&&Ht.viewport(B.copy(at)),J.length>0&&Ra(J,Z,ot),Dt.length>0&&Ra(Dt,Z,ot),Bt.length>0&&Ra(Bt,Z,ot),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function $n(w,Z,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[at.id]===void 0){const le=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[at.id]=new Oi(1,1,{generateMipmaps:!0,type:le?Ki:Sa,minFilter:go,samples:we.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Dt=P.state.transmissionRenderTarget[at.id],Bt=at.viewport||B;Dt.setSize(Bt.z*T.transmissionResolutionScale,Bt.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Xt=T.getActiveCubeFace(),jt=T.getActiveMipmapLevel();T.setRenderTarget(Dt),T.getClearColor(xt),yt=T.getClearAlpha(),yt<1&&T.setClearColor(16777215,.5),T.clear(),te&&Ct.render(ot);const oe=T.toneMapping;T.toneMapping=ar;const Zt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),P.setupLightsView(at),zt===!0&&Ft.setGlobalState(T.clippingPlanes,at),Ra(w,ot,at),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ve=0,gn=Z.length;Ve<gn;Ve++){const ln=Z[Ve],{object:qe,geometry:ee,material:ke,group:he}=ln;if(ke.side===Fa&&qe.layers.test(at.layers)){const ti=ke.side;ke.side=Ni,ke.needsUpdate=!0,Do(qe,ot,at,ee,ke,he),ke.side=ti,ke.needsUpdate=!0,le=!0}}le===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}T.setRenderTarget(Lt,Xt,jt),T.setClearColor(xt,yt),Zt!==void 0&&(at.viewport=Zt),T.toneMapping=oe}function Ra(w,Z,ot){const at=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Dt=w.length;J<Dt;J++){const Bt=w[J],{object:Lt,geometry:Xt,group:jt}=Bt;let oe=Bt.material;oe.allowOverride===!0&&at!==null&&(oe=at),Lt.layers.test(ot.layers)&&Do(Lt,Z,ot,Xt,oe,jt)}}function Do(w,Z,ot,at,J,Dt){w.onBeforeRender(T,Z,ot,at,J,Dt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(T,Z,ot,at,w,Dt),J.transparent===!0&&J.side===Fa&&J.forceSinglePass===!1?(J.side=Ni,J.needsUpdate=!0,T.renderBufferDirect(ot,Z,at,J,w,Dt),J.side=Os,J.needsUpdate=!0,T.renderBufferDirect(ot,Z,at,J,w,Dt),J.side=Fa):T.renderBufferDirect(ot,Z,at,J,w,Dt),w.onAfterRender(T,Z,ot,at,J,Dt)}function Uo(w,Z,ot){Z.isScene!==!0&&(Z=se);const at=E.get(w),J=P.state.lights,Dt=P.state.shadowsArray,Bt=J.state.version,Lt=Yt.getParameters(w,J.state,Dt,Z,ot),Xt=Yt.getProgramCacheKey(Lt);let jt=at.programs;at.environment=w.isMeshStandardMaterial?Z.environment:null,at.fog=Z.fog,at.envMap=(w.isMeshStandardMaterial?_t:ht).get(w.envMap||at.environment),at.envMapRotation=at.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,jt===void 0&&(w.addEventListener("dispose",fi),jt=new Map,at.programs=jt);let oe=jt.get(Xt);if(oe!==void 0){if(at.currentProgram===oe&&at.lightsStateVersion===Bt)return xc(w,Lt),oe}else Lt.uniforms=Yt.getUniforms(w),w.onBeforeCompile(Lt,T),oe=Yt.acquireProgram(Lt,Xt),jt.set(Xt,oe),at.uniforms=Lt.uniforms;const Zt=at.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Ft.uniform),xc(w,Lt),at.needsLights=qr(w),at.lightsStateVersion=Bt,at.needsLights&&(Zt.ambientLightColor.value=J.state.ambient,Zt.lightProbe.value=J.state.probe,Zt.directionalLights.value=J.state.directional,Zt.directionalLightShadows.value=J.state.directionalShadow,Zt.spotLights.value=J.state.spot,Zt.spotLightShadows.value=J.state.spotShadow,Zt.rectAreaLights.value=J.state.rectArea,Zt.ltc_1.value=J.state.rectAreaLTC1,Zt.ltc_2.value=J.state.rectAreaLTC2,Zt.pointLights.value=J.state.point,Zt.pointLightShadows.value=J.state.pointShadow,Zt.hemisphereLights.value=J.state.hemi,Zt.directionalShadowMap.value=J.state.directionalShadowMap,Zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Zt.spotShadowMap.value=J.state.spotShadowMap,Zt.spotLightMatrix.value=J.state.spotLightMatrix,Zt.spotLightMap.value=J.state.spotLightMap,Zt.pointShadowMap.value=J.state.pointShadowMap,Zt.pointShadowMatrix.value=J.state.pointShadowMatrix),at.currentProgram=oe,at.uniformsList=null,oe}function Zu(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=Xh.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function xc(w,Z){const ot=E.get(w);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function Gs(w,Z,ot,at,J){Z.isScene!==!0&&(Z=se),q.resetTextureUnits();const Dt=Z.fog,Bt=at.isMeshStandardMaterial?Z.environment:null,Lt=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Vl,Xt=(at.isMeshStandardMaterial?_t:ht).get(at.envMap||Bt),jt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,oe=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Zt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Ve=!!ot.morphAttributes.color;let gn=ar;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(gn=T.toneMapping);const ln=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,qe=ln!==void 0?ln.length:0,ee=E.get(at),ke=P.state.lights;if(zt===!0&&(Se===!0||w!==st)){const ii=w===st&&at.id===ct;Ft.setState(at,w,ii)}let he=!1;at.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ke.state.version||ee.outputColorSpace!==Lt||J.isBatchedMesh&&ee.batching===!1||!J.isBatchedMesh&&ee.batching===!0||J.isBatchedMesh&&ee.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ee.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ee.instancing===!1||!J.isInstancedMesh&&ee.instancing===!0||J.isSkinnedMesh&&ee.skinning===!1||!J.isSkinnedMesh&&ee.skinning===!0||J.isInstancedMesh&&ee.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ee.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ee.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ee.instancingMorph===!1&&J.morphTexture!==null||ee.envMap!==Xt||at.fog===!0&&ee.fog!==Dt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Ft.numPlanes||ee.numIntersection!==Ft.numIntersection)||ee.vertexAlphas!==jt||ee.vertexTangents!==oe||ee.morphTargets!==Zt||ee.morphNormals!==le||ee.morphColors!==Ve||ee.toneMapping!==gn||ee.morphTargetsCount!==qe)&&(he=!0):(he=!0,ee.__version=at.version);let ti=ee.currentProgram;he===!0&&(ti=Uo(at,Z,J));let cr=!1,ei=!1,ra=!1;const Ke=ti.getUniforms(),ni=ee.uniforms;if(Ht.useProgram(ti.program)&&(cr=!0,ei=!0,ra=!0),at.id!==ct&&(ct=at.id,ei=!0),cr||st!==w){Ht.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ke.setValue(V,"projectionMatrix",w.projectionMatrix),Ke.setValue(V,"viewMatrix",w.matrixWorldInverse);const ai=Ke.map.cameraPosition;ai!==void 0&&ai.setValue(V,Ee.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&Ke.setValue(V,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ke.setValue(V,"isOrthographic",w.isOrthographicCamera===!0),st!==w&&(st=w,ei=!0,ra=!0)}if(ee.needsLights&&(ke.state.directionalShadowMap.length>0&&Ke.setValue(V,"directionalShadowMap",ke.state.directionalShadowMap,q),ke.state.spotShadowMap.length>0&&Ke.setValue(V,"spotShadowMap",ke.state.spotShadowMap,q),ke.state.pointShadowMap.length>0&&Ke.setValue(V,"pointShadowMap",ke.state.pointShadowMap,q)),J.isSkinnedMesh){Ke.setOptional(V,J,"bindMatrix"),Ke.setOptional(V,J,"bindMatrixInverse");const ii=J.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),Ke.setValue(V,"boneTexture",ii.boneTexture,q))}J.isBatchedMesh&&(Ke.setOptional(V,J,"batchingTexture"),Ke.setValue(V,"batchingTexture",J._matricesTexture,q),Ke.setOptional(V,J,"batchingIdTexture"),Ke.setValue(V,"batchingIdTexture",J._indirectTexture,q),Ke.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Ke.setValue(V,"batchingColorTexture",J._colorsTexture,q));const kn=ot.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&ve.update(J,ot,ti),(ei||ee.receiveShadow!==J.receiveShadow)&&(ee.receiveShadow=J.receiveShadow,Ke.setValue(V,"receiveShadow",J.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(ni.envMap.value=Xt,ni.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Z.environment!==null&&(ni.envMapIntensity.value=Z.environmentIntensity),ni.dfgLUT!==void 0&&(ni.dfgLUT.value=gU()),ei&&(Ke.setValue(V,"toneMappingExposure",T.toneMappingExposure),ee.needsLights&&yc(ni,ra),Dt&&at.fog===!0&&ue.refreshFogUniforms(ni,Dt),ue.refreshMaterialUniforms(ni,at,mt,it,P.state.transmissionRenderTarget[w.id]),Xh.upload(V,Zu(ee),ni,q)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Xh.upload(V,Zu(ee),ni,q),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ke.setValue(V,"center",J.center),Ke.setValue(V,"modelViewMatrix",J.modelViewMatrix),Ke.setValue(V,"normalMatrix",J.normalMatrix),Ke.setValue(V,"modelMatrix",J.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const ii=at.uniformsGroups;for(let ai=0,Lo=ii.length;ai<Lo;ai++){const Ca=ii[ai];St.update(Ca,ti),St.bind(Ca,ti)}}return ti}function yc(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function qr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,Z,ot){const at=E.get(w);at.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Z,E.get(w.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const ot=E.get(w);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const Yr=V.createFramebuffer();this.setRenderTarget=function(w,Z=0,ot=0){Q=w,H=Z,j=ot;let at=null,J=!1,Dt=!1;if(w){const Lt=E.get(w);if(Lt.__useDefaultFramebuffer!==void 0){Ht.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),B.copy(w.viewport),z.copy(w.scissor),tt=w.scissorTest,Ht.viewport(B),Ht.scissor(z),Ht.setScissorTest(tt),ct=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Lt.__hasExternalTextures)q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const oe=w.depthTexture;if(Lt.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(w.width!==oe.image.width||w.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Dt=!0);const jt=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[Z])?at=jt[Z][ot]:at=jt[Z],J=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?at=E.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[ot]:at=jt,B.copy(w.viewport),z.copy(w.scissor),tt=w.scissorTest}else B.copy(nt).multiplyScalar(mt).floor(),z.copy(ut).multiplyScalar(mt).floor(),tt=wt;if(ot!==0&&(at=Yr),Ht.bindFramebuffer(V.FRAMEBUFFER,at)&&Ht.drawBuffers(w,at),Ht.viewport(B),Ht.scissor(z),Ht.setScissorTest(tt),J){const Lt=E.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Lt.__webglTexture,ot)}else if(Dt){const Lt=Z;for(let Xt=0;Xt<w.textures.length;Xt++){const jt=E.get(w.textures[Xt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Xt,jt.__webglTexture,ot,Lt)}}else if(w!==null&&ot!==0){const Lt=E.get(w.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,ot)}ct=-1},this.readRenderTargetPixels=function(w,Z,ot,at,J,Dt,Bt,Lt=0){if(!(w&&w.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt){Ht.bindFramebuffer(V.FRAMEBUFFER,Xt);try{const jt=w.textures[Lt],oe=jt.format,Zt=jt.type;if(!we.textureFormatReadable(oe)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Zt)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-at&&ot>=0&&ot<=w.height-J&&(w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Z,ot,at,J,Tt.convert(oe),Tt.convert(Zt),Dt))}finally{const jt=Q!==null?E.get(Q).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ot,at,J,Dt,Bt,Lt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Bt!==void 0&&(Xt=Xt[Bt]),Xt)if(Z>=0&&Z<=w.width-at&&ot>=0&&ot<=w.height-J){Ht.bindFramebuffer(V.FRAMEBUFFER,Xt);const jt=w.textures[Lt],oe=jt.format,Zt=jt.type;if(!we.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,le),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),w.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Z,ot,at,J,Tt.convert(oe),Tt.convert(Zt),0);const Ve=Q!==null?E.get(Q).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,Ve);const gn=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await _4(V,gn,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,le),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(le),V.deleteSync(gn),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ot=0){const at=Math.pow(2,-ot),J=Math.floor(w.image.width*at),Dt=Math.floor(w.image.height*at),Bt=Z!==null?Z.x:0,Lt=Z!==null?Z.y:0;q.setTexture2D(w,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,Bt,Lt,J,Dt),Ht.unbindTexture()};const Hs=V.createFramebuffer(),jr=V.createFramebuffer();this.copyTextureToTexture=function(w,Z,ot=null,at=null,J=0,Dt=null){Dt===null&&(J!==0?(Pu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=J,J=0):Dt=0);let Bt,Lt,Xt,jt,oe,Zt,le,Ve,gn;const ln=w.isCompressedTexture?w.mipmaps[Dt]:w.image;if(ot!==null)Bt=ot.max.x-ot.min.x,Lt=ot.max.y-ot.min.y,Xt=ot.isBox3?ot.max.z-ot.min.z:1,jt=ot.min.x,oe=ot.min.y,Zt=ot.isBox3?ot.min.z:0;else{const kn=Math.pow(2,-J);Bt=Math.floor(ln.width*kn),Lt=Math.floor(ln.height*kn),w.isDataArrayTexture?Xt=ln.depth:w.isData3DTexture?Xt=Math.floor(ln.depth*kn):Xt=1,jt=0,oe=0,Zt=0}at!==null?(le=at.x,Ve=at.y,gn=at.z):(le=0,Ve=0,gn=0);const qe=Tt.convert(Z.format),ee=Tt.convert(Z.type);let ke;Z.isData3DTexture?(q.setTexture3D(Z,0),ke=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(q.setTexture2DArray(Z,0),ke=V.TEXTURE_2D_ARRAY):(q.setTexture2D(Z,0),ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const he=V.getParameter(V.UNPACK_ROW_LENGTH),ti=V.getParameter(V.UNPACK_IMAGE_HEIGHT),cr=V.getParameter(V.UNPACK_SKIP_PIXELS),ei=V.getParameter(V.UNPACK_SKIP_ROWS),ra=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ln.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ln.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,oe),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zt);const Ke=w.isDataArrayTexture||w.isData3DTexture,ni=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const kn=E.get(w),ii=E.get(Z),ai=E.get(kn.__renderTarget),Lo=E.get(ii.__renderTarget);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,ai.__webglFramebuffer),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,Lo.__webglFramebuffer);for(let Ca=0;Ca<Xt;Ca++)Ke&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(w).__webglTexture,J,Zt+Ca),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Dt,gn+Ca)),V.blitFramebuffer(jt,oe,Bt,Lt,le,Ve,Bt,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||E.has(w)){const kn=E.get(w),ii=E.get(Z);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,Hs),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,jr);for(let ai=0;ai<Xt;ai++)Ke?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kn.__webglTexture,J,Zt+ai):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,kn.__webglTexture,J),ni?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ii.__webglTexture,Dt,gn+ai):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ii.__webglTexture,Dt),J!==0?V.blitFramebuffer(jt,oe,Bt,Lt,le,Ve,Bt,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):ni?V.copyTexSubImage3D(ke,Dt,le,Ve,gn+ai,jt,oe,Bt,Lt):V.copyTexSubImage2D(ke,Dt,le,Ve,jt,oe,Bt,Lt);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ni?w.isDataTexture||w.isData3DTexture?V.texSubImage3D(ke,Dt,le,Ve,gn,Bt,Lt,Xt,qe,ee,ln.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,Dt,le,Ve,gn,Bt,Lt,Xt,qe,ln.data):V.texSubImage3D(ke,Dt,le,Ve,gn,Bt,Lt,Xt,qe,ee,ln):w.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,le,Ve,Bt,Lt,qe,ee,ln.data):w.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,le,Ve,ln.width,ln.height,qe,ln.data):V.texSubImage2D(V.TEXTURE_2D,Dt,le,Ve,Bt,Lt,qe,ee,ln);V.pixelStorei(V.UNPACK_ROW_LENGTH,he),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ti),V.pixelStorei(V.UNPACK_SKIP_PIXELS,cr),V.pixelStorei(V.UNPACK_SKIP_ROWS,ei),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ra),Dt===0&&Z.generateMipmaps&&V.generateMipmap(ke),Ht.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),Ht.unbindTexture()},this.resetState=function(){H=0,j=0,Q=null,Ht.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const Wh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Xu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vU=new P1(-1,1,1,-1,0,1);class xU extends Vn{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}}const yU=new xU;class bM{constructor(t){this._mesh=new $i(yU,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vU)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class SU extends Xu{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof qn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ed.clone(t.uniforms),this.material=new qn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new bM(this.material)}render(t,n,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ay extends Xu{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,r){const o=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class MU extends Xu{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class EU{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const r=t.getSize(new Gt);this._width=r.width,this._height=r.height,n=new Oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ki}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new SU(Wh),this.copyPass.material.blending=ir,this.clock=new Sw}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),u.needsSwap){if(r){const f=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}Ay!==void 0&&(u instanceof Ay?r=!0:u instanceof MU&&(r=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bU extends Xu{constructor(t,n,r=null,o=null,l=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(t,n,r){const o=t.autoClear;t.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const TU={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xl extends Xu{constructor(t,n=1,r,o){super(),this.strength=n,this.radius=r,this.threshold=o,this.resolution=t!==void 0?new Gt(t.x,t.y):new Gt(256,256),this.clearColor=new pe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Oi(l,u,{type:Ki}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new Oi(l,u,{type:Ki});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new Oi(l,u,{type:Ki});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),l=Math.round(l/2),u=Math.round(u/2)}const f=TU;this.highPassUniforms=ed.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Gt(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ed.clone(Wh.uniforms),this.blendMaterial=new qn({uniforms:this.copyUniforms,vertexShader:Wh.vertexShader,fragmentShader:Wh.fragmentShader,premultipliedAlpha:!0,blending:Qh,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pe,this._oldClearAlpha=1,this._basic=new b1,this._fsQuad=new bM(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let r=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(r,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,o),this.renderTargetsVertical[l].setSize(r,o),this.separableBlurMaterials[l].uniforms.invSize.value=new Gt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2)}render(t,n,r,o,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[p].uniforms.direction.value=Xl.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Xl.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],r=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(r*r))/r);return new qn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Gt(.5,.5)},direction:{value:new Gt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new qn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Xl.BlurDirectionX=new Gt(1,0);Xl.BlurDirectionY=new Gt(0,1);var Ia=(e=>(e.TREE_FORM="TREE_FORM",e.SCATTER_FORM="SCATTER_FORM",e))(Ia||{}),Pl=(e=>(e.NONE="None",e.CLOSED_FIST="Closed_Fist",e.OPEN_PALM="Open_Palm",e.POINTING_UP="Pointing_Up",e.VICTORY="Victory",e.THUMB_DOWN="Thumb_Down",e.THUMB_UP="Thumb_Up",e.UNKNOWN="Unknown",e))(Pl||{});const bn={EMERALD_DEEP:11807,EMERALD_LIGHT:27464,GOLD_METALLIC:16766720,GOLD_PALE:16772235,RED_CHRISTMAS:12257822,WHITE_GLOW:16777215,BROWN_TRUNK:4863784,SILVER_SHINE:14737632,ROYAL_BLUE:1982639,MAGICAL_PURPLE:8266446,ICE_CYAN:2282478},wy={SCATTER_RADIUS:60},Ry=e=>{const t=Math.random(),n=Math.random(),r=2*Math.PI*t,o=Math.acos(2*n-1),l=Math.cbrt(Math.random())*e,u=l*Math.sin(o)*Math.cos(r),f=l*Math.sin(o)*Math.sin(r),p=l*Math.cos(o);return[u,f,p]},AU=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");return t&&(t.font="48px serif",t.textAlign="center",t.textBaseline="middle",t.fillStyle="#ffffff",t.fillText("❄️",32,34)),new pM(e)},wU=()=>{const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");return t&&(t.font="96px serif",t.textAlign="center",t.textBaseline="middle",t.fillText("⭐️",64,70)),new pM(e)},RU=`
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,CU=`
  uniform float uDraw; // 0.0 to 1.0
  uniform vec3 uColor;
  uniform float uTime;
  
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    if (vUv.x > uDraw) discard;

    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vec3(0.5, 1.0, 1.0));
    float diff = max(dot(normal, lightDir), 0.0);
    
    float shine = pow(max(dot(normal, normalize(vec3(0.0, 0.0, 1.0))), 0.0), 10.0);
    float flowingHighlight = smoothstep(0.0, 0.2, sin(vUv.x * 20.0 - uTime * 3.0));
    
    vec3 finalColor = uColor * (0.4 + diff * 0.6) + vec3(1.0) * shine * 0.8 + vec3(1.0, 0.9, 0.5) * flowingHighlight * 0.3;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`,DU=`
  uniform float uMix;
  uniform float uTime;
  
  attribute vec3 aTreePos;
  attribute vec3 aScatterPos;
  attribute vec3 aRandom; 
  attribute vec3 aColor; 
  
  varying vec3 vColor;
  varying vec3 vNormal;
  varying vec3 vLocalPos; 
  varying float vPatternSeed;
  varying vec3 vViewPosition;
  
  mat4 rotationMatrix(vec3 axis, float angle) {
      axis = normalize(axis);
      float s = sin(angle);
      float c = cos(angle);
      float oc = 1.0 - c;
      return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                  oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                  oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                  0.0,                                0.0,                                0.0,                                1.0);
  }

  void main() {
    vColor = aColor;
    vPatternSeed = aRandom.x;
    vLocalPos = position;

    // Base interpolation
    vec3 pos = mix(aScatterPos, aTreePos, uMix);
    
    // --- TIGHTENING / SCREWING ANIMATION ---
    // When uMix is 1.0 (Tree), twist is 0.
    // When uMix is 0.0 (Scatter), twist is high.
    // This creates a "screwing in" effect as it assembles.
    float screwStrength = (1.0 - uMix) * 12.0; // Total rotation amount
    float heightFactor = (pos.y + 15.0) * 0.1; // Twist depends on height
    float theta = screwStrength + heightFactor * (1.0 - uMix);
    
    float c = cos(theta);
    float s = sin(theta);
    
    // Rotate around Y axis
    float nx = pos.x * c - pos.z * s;
    float nz = pos.x * s + pos.z * c;
    pos.x = nx;
    pos.z = nz;

    // Instance Spin
    float spinSpeed = (1.0 - uMix) * 15.0; 
    float rotAngle = uTime * (0.2 + aRandom.y * 0.2) + spinSpeed * aRandom.y;
    vec3 axis = normalize(vec3(aRandom.z, 1.0, aRandom.x));
    mat4 rotMat = rotationMatrix(axis, rotAngle);
    
    // SCALE LOGIC (Updated)
    float baseScale = 0.6 + aRandom.x * 0.6;
    // Scale Boost: Increase size massively when Scattered (uMix approaches 0) to fill space
    // When Tree (uMix=1), multiplier is 1.0. When Scatter (uMix=0), multiplier is 3.5.
    float scale = baseScale * (1.0 + (1.0 - uMix) * 2.5);

    vec3 transformedPos = (rotMat * vec4(position * scale, 1.0)).xyz;
    
    vec3 rotatedNormal = (rotMat * vec4(normal, 0.0)).xyz;
    vNormal = normalize(normalMatrix * rotatedNormal);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos + transformedPos, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`,UU=`
  varying vec3 vColor;
  varying vec3 vNormal;
  varying vec3 vLocalPos;
  varying float vPatternSeed;
  varying vec3 vViewPosition;
  
  float hash(vec3 p) {
      p = fract(p * 0.3183099 + .1);
      p *= 17.0;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0)); 
    vec3 halfVector = normalize(lightDir + viewDir);
    
    float materialType = vPatternSeed; 
    
    vec3 albedo = vColor;
    float roughness = 0.4;
    float metalness = 0.0;
    float sparkle = 0.0;
    
    if (materialType < 0.4) {
        float noise = hash(vLocalPos * 30.0);
        float sparkleAngle = max(dot(normal, viewDir), 0.0);
        if (noise > 0.95) sparkle = 1.0 * sparkleAngle;
        albedo *= 0.8; 
        roughness = 0.8;
    } else if (materialType < 0.7) {
        metalness = 0.9;
        roughness = 0.1;
        vec3 ref = reflect(-viewDir, normal);
        vec3 envColor = vec3(0.1) + 0.5 * pow(max(dot(ref, vec3(0.0, 1.0, 0.0)), 0.0), 2.0) * vec3(1.0, 0.9, 0.8);
        albedo = mix(albedo, albedo * envColor * 2.0, 0.5);
    } else {
        roughness = 0.5;
        metalness = 0.2;
        if (vPatternSeed > 0.85) {
             float stripes = smoothstep(0.3, 0.7, sin(vLocalPos.x * 10.0 + vLocalPos.y * 10.0));
             albedo = mix(albedo, vec3(1.0), stripes * 0.3);
        } else {
             float dots = smoothstep(0.8, 0.85, sin(vLocalPos.x * 8.0) * sin(vLocalPos.y * 8.0));
             albedo = mix(albedo, vec3(1.0, 0.8, 0.0), dots * 0.5);
        }
    }
    
    float NdotL = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = albedo * NdotL;
    
    float NdotH = max(dot(normal, halfVector), 0.0);
    float specPower = (1.0 - roughness) * 128.0;
    float specular = pow(NdotH, specPower);
    
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
    
    vec3 ambient = vec3(0.05) * albedo;
    vec3 specColor = mix(vec3(1.0), albedo, metalness) * specular;
    vec3 finalColor = ambient + diffuse + specColor;
    finalColor += vec3(0.5, 0.4, 0.2) * fresnel * (1.0 - metalness); 
    finalColor += vec3(1.0, 1.0, 0.8) * sparkle * 2.0;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`,LU=`
  uniform float uMix;
  uniform float uTime;
  
  attribute vec3 aTreePos;
  attribute vec3 aScatterPos;
  attribute float size;
  varying vec3 vColor;
  
  void main() {
    vColor = color; 
    
    vec3 pos = mix(aScatterPos, aTreePos, uMix);
    
    // --- TIGHTENING / SCREWING ANIMATION (Synced with Decos) ---
    float screwStrength = (1.0 - uMix) * 12.0; 
    float heightFactor = (pos.y + 15.0) * 0.1; 
    float theta = screwStrength + heightFactor * (1.0 - uMix);
    
    float c = cos(theta);
    float s = sin(theta);
    
    float nx = pos.x * c - pos.z * s;
    float nz = pos.x * s + pos.z * c;
    pos.x = nx;
    pos.z = nz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * (600.0 / -mvPosition.z); 
    gl_Position = projectionMatrix * mvPosition;
  }
`,NU=`
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  
  void main() {
    vec4 texColor = texture2D(pointTexture, gl_PointCoord);
    gl_FragColor = vec4(vColor, 1.0) * texColor;
    if (gl_FragColor.a < 0.5) discard;
  }
`,OU=({appState:e,handPosition:t})=>{const n=sn.useRef(null),r=sn.useRef(null),o=sn.useRef(null),l=sn.useRef(null),u=sn.useRef(null),f=sn.useRef([]),p=sn.useRef(null),m=sn.useRef(null),g=sn.useRef(1),_=sn.useRef(1),v=sn.useRef(0),S=sn.useRef(0),b=sn.useRef(new X(0,0,45)),R=sn.useRef(new X(0,0,0)),M=(L=!1)=>{const U=[[11,9.5,-12],[8.5,9,-5],[5.5,8,2]],C=Math.floor(Math.pow(Math.random(),.9)*U.length),[P,F,O]=U[C],k=Math.random()*F,T=(1-k/F)*P,D=Math.random()*Math.PI*2,H=T+(Math.random()-.5)*1;let j=H*Math.cos(D),Q=H*Math.sin(D);return L&&(j*=1.15,Q*=1.15),[j,k+O,Q]},x=()=>{const P=Math.random()*8+-16,F=Math.random()*Math.PI*2,O=Math.sqrt(Math.random())*2,k=O*Math.cos(F),T=O*Math.sin(F);return[k,P,T]};return sn.useEffect(()=>{if(!n.current)return;const L=new H4;L.fog=new T1(1280,.015),r.current=L;const U=new xa(60,window.innerWidth/window.innerHeight,.1,1e3);U.position.set(0,0,45),o.current=U;const C=new _U({antialias:!0,alpha:!0});C.setSize(window.innerWidth,window.innerHeight),C.setPixelRatio(window.devicePixelRatio),C.toneMapping=d1,C.toneMappingExposure=.9,n.current.appendChild(C.domElement),l.current=C;const P=new bU(L,U),F=new Xl(new Gt(window.innerWidth,window.innerHeight),1.5,.4,.85);F.threshold=.75,F.strength=.6,F.radius=.3;const O=new EU(C);O.addPass(P),O.addPass(F),u.current=O,f.current=[];const k=new gw().load("https://assets.codepen.io/127738/dotTexture.png"),T=[{id:"foliage",count:5e3,texture:k,type:"foliage"},{id:"red_specs",count:350,texture:k,type:"foliage_red"},{id:"trunk",count:800,texture:k,type:"trunk"}],D=[new pe(bn.EMERALD_DEEP),new pe(bn.EMERALD_LIGHT),new pe(675634)],H=new pe(bn.BROWN_TRUNK);T.forEach(qt=>{const se=new Vn,te=[],Ie=[],V=[],Be=[];for(let Ht=0;Ht<qt.count;Ht++){let N=[0,0,0],E=new pe(1,1,1),q=1;qt.type==="trunk"?(N=x(),E=H.clone().multiplyScalar(.7+Math.random()*.4),q=Math.random()*.4+.3):qt.type==="foliage"?(N=M(!1),E=D[Math.floor(Math.random()*D.length)],q=Math.random()*.3+.1,Math.random()>.98&&(E=new pe(bn.GOLD_PALE),E.multiplyScalar(2),q=.5)):qt.type==="foliage_red"&&(N=M(!1),E=new pe(bn.RED_CHRISTMAS),q=Math.random()*.3+.15),te.push(N[0],N[1],N[2]);const ht=Ry(wy.SCATTER_RADIUS);Ie.push(ht[0],ht[1],ht[2]),V.push(E.r,E.g,E.b),Be.push(q)}se.setAttribute("position",new We(te,3)),se.setAttribute("aTreePos",new We(te,3)),se.setAttribute("aScatterPos",new We(Ie,3)),se.setAttribute("color",new We(V,3)),se.setAttribute("size",new We(Be,1));const ge=new qn({uniforms:{uTime:{value:0},uMix:{value:1},pointTexture:{value:qt.texture}},vertexShader:LU,fragmentShader:NU,transparent:!0,depthWrite:!1,vertexColors:!0,blending:Qh});f.current.push(ge);const we=new $x(se,ge);we.frustumCulled=!1,L.add(we)}),[{count:16,geo:new rc(1,1,1),type:"gift",colors:[bn.RED_CHRISTMAS,bn.ROYAL_BLUE,bn.MAGICAL_PURPLE,bn.GOLD_METALLIC]},{count:40,geo:new U1(.55,24,24),type:"bauble",colors:[bn.GOLD_METALLIC,bn.RED_CHRISTMAS,bn.SILVER_SHINE,bn.ICE_CYAN,bn.MAGICAL_PURPLE]},{count:20,geo:new L1(.5,.25,16,32),type:"donut",colors:[16738740,9127187,bn.GOLD_PALE,bn.WHITE_GLOW]},{count:16,geo:new w1(.4,1.2,32),type:"bell",colors:[bn.GOLD_METALLIC,bn.SILVER_SHINE]},{count:20,geo:new D1(.5,0),type:"star_gem",colors:[bn.WHITE_GLOW,bn.GOLD_PALE,bn.ICE_CYAN]}].forEach(qt=>{const se=new xw;se.index=qt.geo.index,se.attributes.position=qt.geo.attributes.position,se.attributes.normal=qt.geo.attributes.normal,se.attributes.uv=qt.geo.attributes.uv;const te=qt.count,Ie=new Float32Array(te*3),V=new Float32Array(te*3),Be=new Float32Array(te*3),ge=new Float32Array(te*3);for(let N=0;N<te;N++){const E=M(!0);Ie[N*3]=E[0],Ie[N*3+1]=E[1],Ie[N*3+2]=E[2];const q=Ry(wy.SCATTER_RADIUS);V[N*3]=q[0],V[N*3+1]=q[1],V[N*3+2]=q[2],Be[N*3]=Math.random(),Be[N*3+1]=Math.random(),Be[N*3+2]=Math.random();const ht=qt.colors[Math.floor(Math.random()*qt.colors.length)],_t=new pe(ht);_t.multiplyScalar(1.1),ge[N*3]=_t.r,ge[N*3+1]=_t.g,ge[N*3+2]=_t.b}se.setAttribute("aTreePos",new Ll(Ie,3)),se.setAttribute("aScatterPos",new Ll(V,3)),se.setAttribute("aRandom",new Ll(Be,3)),se.setAttribute("aColor",new Ll(ge,3));const we=new qn({uniforms:{uTime:{value:0},uMix:{value:1}},vertexShader:DU,fragmentShader:UU,side:Fa});f.current.push(we);const Ht=new X4(se,we,te);Ht.frustumCulled=!1,L.add(Ht)});const Q=wU(),ct=new uM({map:Q,color:16777215,transparent:!0,opacity:0,depthWrite:!1}),st=new Zx(ct);st.scale.set(4.5,4.5,1),st.position.set(0,12,0),L.add(st),st.userData={isTopStar:!0};const B=[],z=6.5,tt=25,xt=11;for(let qt=0;qt<=150;qt++){const se=qt/150,te=se*Math.PI*2*z,Ie=xt-se*tt,V=1*(1-se)+12*se;B.push(new X(Math.cos(te)*V,Ie,Math.sin(te)*V))}const yt=new _M(B),I=new N1(yt,300,.15,8,!1),it=new qn({uniforms:{uDraw:{value:1},uColor:{value:new pe(bn.GOLD_METALLIC)},uTime:{value:0}},vertexShader:RU,fragmentShader:CU,side:Fa,transparent:!0});p.current=it;const mt=new $i(I,it);mt.frustumCulled=!1,L.add(mt);const Et=400,It=AU(),nt=new Vn,ut=new Float32Array(Et*3),wt=new Float32Array(Et),Vt=new Float32Array(Et);for(let qt=0;qt<Et;qt++)ut[qt*3]=(Math.random()-.5)*80,ut[qt*3+1]=(Math.random()-.5)*60,ut[qt*3+2]=(Math.random()-.5)*60,wt[qt]=.05+Math.random()*.1,Vt[qt]=Math.random()*Math.PI*2;m.current={velocities:wt,sways:Vt},nt.setAttribute("position",new Qi(ut,3));const zt=new Gg({color:16777215,size:1.2,map:It,transparent:!0,opacity:.9,depthWrite:!1,blending:yo}),Se=new $x(nt,zt);Se.frustumCulled=!1,L.add(Se);const mn=new vw(4210752,2);L.add(mn);const Ee=()=>{!o.current||!l.current||!u.current||(o.current.aspect=window.innerWidth/window.innerHeight,o.current.updateProjectionMatrix(),l.current.setSize(window.innerWidth,window.innerHeight),u.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",Ee),()=>{window.removeEventListener("resize",Ee),n.current&&l.current&&n.current.removeChild(l.current.domElement),C.dispose()}},[]),sn.useEffect(()=>{let L;const U=()=>{if(!r.current||!o.current||!u.current)return;const C=Date.now()*.001;_.current+=(g.current-_.current)*.08,f.current.forEach(D=>{D.uniforms.uTime.value=C,D.uniforms.uMix.value=_.current}),p.current&&(p.current.uniforms.uTime.value=C,g.current<.5?v.current=0:_.current>.95?v.current+=(1-v.current)*.02:v.current=0,p.current.uniforms.uDraw.value=v.current);const P=r.current.children.find(D=>D.userData.isTopStar);if(P&&P instanceof Zx){P.rotation.z=Math.sin(C)*.15,g.current<.5?S.current=0:_.current>.95?S.current+=(1-S.current)*.03:S.current=0,P.material.opacity=S.current;const H=4.5*S.current+Math.sin(C*3)*.5*S.current;P.scale.set(H,H,1),P.visible=S.current>.01}r.current.children.forEach(D=>{if(D.isPoints&&D.material instanceof Gg){const H=D,j=H.material;if(j.color.getHex()===16777215&&m.current)if(e===Ia.SCATTER_FORM)j.opacity=0,j.visible=!1;else{j.visible=!0,j.opacity+=(.9-j.opacity)*.05;const Q=H.geometry.attributes.position.array,{velocities:ct,sways:st}=m.current,B=Q.length/3;for(let z=0;z<B;z++){const tt=z*3,xt=z*3+1;Q[xt]-=ct[z],Q[tt]+=Math.sin(C+st[z])*.02,Q[xt]<-25&&(Q[xt]=30+Math.random()*5,Q[tt]=(Math.random()-.5)*80)}H.geometry.attributes.position.needsUpdate=!0}}}),e===Ia.TREE_FORM?g.current=1:e===Ia.SCATTER_FORM&&(g.current=0);let F=new X(0,0,45),O=new X(0,0,0);const T=window.innerWidth/window.innerHeight<1;if(e===Ia.SCATTER_FORM){const D=T?25:50,H=T?40:30,j=T?55:30,Q=Math.sin(C*.15)*15,ct=Math.cos(C*.1)*10,st=Math.sin(C*.05)*5;let B=0,z=0;if(t){const tt=t.x-.5,xt=-(t.y-.5);Math.sqrt(tt*tt+xt*xt)>.05&&(B=tt*D,z=xt*H)}F.set(Q+B,ct+z,j+st),O.set((Q+B)*.15,(ct+z)*.15,0)}else e===Ia.TREE_FORM&&(F.set(Math.sin(C*.3)*45,0,Math.cos(C*.3)*45),O.set(0,4,0));b.current.lerp(F,.08),R.current.lerp(O,.08),o.current.position.copy(b.current),o.current.lookAt(R.current),u.current.render(),L=requestAnimationFrame(U)};return U(),()=>cancelAnimationFrame(L)},[e,t]),Si.jsx("div",{ref:n,className:"absolute inset-0 z-0 pointer-events-none"})};var Wl=typeof self<"u"?self:{};function uo(){throw Error("Invalid UTF8")}function Cy(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Oh,O0;const PU=typeof TextDecoder<"u";let FU;const IU=typeof TextEncoder<"u";function TM(e){if(IU)e=(FU||(FU=new TextEncoder)).encode(e);else{let n=0;const r=new Uint8Array(3*e.length);for(let o=0;o<e.length;o++){var t=e.charCodeAt(o);if(t<128)r[n++]=t;else{if(t<2048)r[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&o<e.length){const l=e.charCodeAt(++o);if(l>=56320&&l<=57343){t=1024*(t-55296)+l-56320+65536,r[n++]=t>>18|240,r[n++]=t>>12&63|128,r[n++]=t>>6&63|128,r[n++]=63&t|128;continue}o--}t=65533}r[n++]=t>>12|224,r[n++]=t>>6&63|128}r[n++]=63&t|128}}e=n===r.length?r:r.subarray(0,n)}return e}var F1,id;t:{for(var Dy=["CLOSURE_FLAGS"],P0=Wl,F0=0;F0<Dy.length;F0++)if((P0=P0[Dy[F0]])==null){id=null;break t}id=P0}var Iu,Uy=id&&id[610401301];F1=Uy!=null&&Uy;const Ly=Wl.navigator;function Xg(e){return!!F1&&!!Iu&&Iu.brands.some((({brand:t})=>t&&t.indexOf(e)!=-1))}function ya(e){var t;return(t=Wl.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function As(){return!!F1&&!!Iu&&Iu.brands.length>0}function I0(){return As()?Xg("Chromium"):(ya("Chrome")||ya("CriOS"))&&!(!As()&&ya("Edge"))||ya("Silk")}function dd(e){return dd[" "](e),e}Iu=Ly&&Ly.userAgentData||null,dd[" "]=function(){};var BU=!As()&&(ya("Trident")||ya("MSIE"));!ya("Android")||I0(),I0(),ya("Safari")&&(I0()||!As()&&ya("Coast")||!As()&&ya("Opera")||!As()&&ya("Edge")||(As()?Xg("Microsoft Edge"):ya("Edg/"))||As()&&Xg("Opera"));var AM={},Tu=null;function zU(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const r=new Uint8Array(n);let o=0;return(function(l,u){function f(m){for(;p<l.length;){const g=l.charAt(p++),_=Tu[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return m}wM();let p=0;for(;;){const m=f(-1),g=f(0),_=f(64),v=f(64);if(v===64&&m===-1)break;u(m<<2|g>>4),_!=64&&(u(g<<4&240|_>>2),v!=64&&u(_<<6&192|v))}})(e,(function(l){r[o++]=l})),o!==n?r.subarray(0,o):r}function wM(){if(!Tu){Tu={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const r=e.concat(t[n].split(""));AM[n]=r;for(let o=0;o<r.length;o++){const l=r[o];Tu[l]===void 0&&(Tu[l]=o)}}}}var RM=typeof Uint8Array<"u",CM=!BU&&typeof btoa=="function";function Ny(e){if(!CM){var t;t===void 0&&(t=0),wM(),t=AM[t];var n=Array(Math.floor(e.length/3)),r=t[64]||"";let p=0,m=0;for(;p<e.length-2;p+=3){var o=e[p],l=e[p+1],u=e[p+2],f=t[o>>2];o=t[(3&o)<<4|l>>4],l=t[(15&l)<<2|u>>6],u=t[63&u],n[m++]=f+o+l+u}switch(f=0,u=r,e.length-p){case 2:u=t[(15&(f=e[p+1]))<<2]||r;case 1:e=e[p],n[m]=t[e>>2]+t[(3&e)<<4|f>>4]+u+r}return n.join("")}for(t="",n=0,r=e.length-10240;n<r;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}const Oy=/[-_.]/g,GU={"-":"+",_:"/",".":"="};function HU(e){return GU[e]||""}function DM(e){if(!CM)return zU(e);Oy.test(e)&&(e=e.replace(Oy,HU)),e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Eo(e){return RM&&e!=null&&e instanceof Uint8Array}var ql={};function bo(){return VU||(VU=new Ir(null,ql))}function I1(e){UM(ql);var t=e.g;return(t=t==null||Eo(t)?t:typeof t=="string"?DM(t):null)==null?t:e.g=t}var Ir=class{h(){return new Uint8Array(I1(this)||0)}constructor(e,t){if(UM(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let VU,kU;function UM(e){if(e!==ql)throw Error("illegal external caller")}function LM(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Wg(e){return LM(e=Error(e),"warning"),e}function B1(e){if(e!=null){var t=kU??(kU={}),n=t[e]||0;n>=5||(t[e]=n+1,LM(e=Error(),"incident"),(function(r){Wl.setTimeout((()=>{throw r}),0)})(e))}}var pd=typeof Symbol=="function"&&typeof Symbol()=="symbol";function oc(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var XU=oc("jas",void 0,!0),Py=oc(void 0,"0di"),Su=oc(void 0,"1oa"),Yl=oc(void 0,Symbol()),WU=oc(void 0,"0actk"),NM=oc(void 0,"8utk");const ie=pd?XU:"Ea",OM={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},PM=Object.defineProperties;function md(e,t){pd||ie in e||PM(e,OM),e[ie]|=t}function zn(e,t){pd||ie in e||PM(e,OM),e[ie]=t}function lc(e){return md(e,34),e}function qU(e,t){zn(t,-15615&(0|e))}function qg(e,t){zn(t,-15581&(34|e))}function gd(){return typeof BigInt=="function"}function Pi(e){return Array.prototype.slice.call(e)}var z1,Wu={};function _d(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function G1(e,t){if(e!=null){if(typeof e=="string")e=e?new Ir(e,ql):bo();else if(e.constructor!==Ir)if(Eo(e))e=e.length?new Ir(new Uint8Array(e),ql):bo();else{if(!t)throw Error();e=void 0}}return e}const Fy=[];function Is(e){if(2&e)throw Error()}zn(Fy,55),z1=Object.freeze(Fy);class Iy{constructor(t,n,r){this.g=t,this.h=n,this.l=r}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}function H1(e){return Yl?e[Yl]:void 0}var YU=Object.freeze({});function vd(e){return e.Na=!0,e}var jU=vd((e=>typeof e=="number")),By=vd((e=>typeof e=="string")),ZU=vd((e=>typeof e=="boolean")),xd=typeof Wl.BigInt=="function"&&typeof Wl.BigInt(0)=="bigint";function Ds(e){var t=e;if(By(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(jU(t)&&!Number.isSafeInteger(t))throw Error(String(t));return xd?BigInt(e):e=ZU(e)?e?"1":"0":By(e)?e.trim()||"0":String(e)}var Yg=vd((e=>xd?e>=QU&&e<=$U:e[0]==="-"?zy(e,KU):zy(e,JU)));const KU=Number.MIN_SAFE_INTEGER.toString(),QU=xd?BigInt(Number.MIN_SAFE_INTEGER):void 0,JU=Number.MAX_SAFE_INTEGER.toString(),$U=xd?BigInt(Number.MAX_SAFE_INTEGER):void 0;function zy(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const r=e[n],o=t[n];if(r>o)return!1;if(r<o)return!0}}const tL=typeof Uint8Array.prototype.slice=="function";let FM,on=0,An=0;function Gy(e){const t=e>>>0;on=t,An=(e-t)/4294967296>>>0}function To(e){if(e<0){Gy(-e);const[t,n]=W1(on,An);on=t>>>0,An=n>>>0}else Gy(e)}function V1(e){const t=FM||(FM=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),An=0,on=t.getUint32(0,!0)}function k1(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Bu(e,t)}function X1(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=k1(e,t))=="number"?n?-e:e:n?"-"+e:e}function Bu(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else gd()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Hy(n)+Hy(e));return n}function Hy(e){return e=String(e),"0000000".slice(e.length)+e}function IM(){var e=on,t=An;if(2147483648&t)if(gd())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,r]=W1(e,t);e="-"+Bu(n,r)}else e=Bu(e,t);return e}function yd(e){if(e.length<16)To(Number(e));else if(gd())e=BigInt(e),on=Number(e&BigInt(4294967295))>>>0,An=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");An=on=0;const n=e.length;for(let r=t,o=(n-t)%6+t;o<=n;r=o,o+=6){const l=Number(e.slice(r,o));An*=1e6,on=1e6*on+l,on>=4294967296&&(An+=Math.trunc(on/4294967296),An>>>=0,on>>>=0)}if(t){const[r,o]=W1(on,An);on=r,An=o}}}function W1(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}const zu=typeof BigInt=="function"?BigInt.asIntN:void 0,eL=typeof BigInt=="function"?BigInt.asUintN:void 0,Us=Number.isSafeInteger,Sd=Number.isFinite,jl=Math.trunc,nL=Ds(0);function Bs(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function BM(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const iL=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Gu(e){switch(typeof e){case"bigint":return!0;case"number":return Sd(e);case"string":return iL.test(e);default:return!1}}function cc(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Sd(e)?0|e:void 0}function zM(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Sd(e)?e>>>0:void 0}function Vy(e){if(e[0]==="-")return!1;const t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function GM(e){const t=e.length;return e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337}function HM(e){return GM(e)?e:(yd(e),IM())}function q1(e){return e=jl(e),Us(e)||(To(e),e=X1(on,An)),e}function VM(e){var t=jl(Number(e));return Us(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),HM(e))}function ky(e){var t=jl(Number(e));return Us(t)?Ds(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),gd()?Ds(zu(64,BigInt(e))):Ds(HM(e)))}function Xy(e){if(Us(e))e=Ds(q1(e));else{if(e=jl(e),Us(e))e=String(e);else{const t=String(e);GM(t)?e=t:(To(e),e=IM())}e=Ds(e)}return e}function jg(e){return e==null?e:typeof e=="bigint"?(Yg(e)?e=Number(e):(e=zu(64,e),e=Yg(e)?Number(e):String(e)),e):Gu(e)?typeof e=="number"?q1(e):VM(e):void 0}function aL(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(eL(64,e));if(Gu(e)){if(t==="string")return t=jl(Number(e)),Us(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Vy(e)||(yd(e),e=Bu(on,An))),e;if(t==="number")return(e=jl(e))>=0&&Us(e)?e:(function(n){if(n<0){To(n);var r=Bu(on,An);return n=Number(r),Us(n)?n:r}return Vy(r=String(n))?r:(To(n),k1(on,An))})(e)}}function kM(e){if(typeof e!="string")throw Error();return e}function uc(e){if(e!=null&&typeof e!="string")throw Error();return e}function Zl(e){return e==null||typeof e=="string"?e:void 0}function Y1(e,t,n,r){if(e!=null&&typeof e=="object"&&e.W===Wu)return e;if(!Array.isArray(e))return n?2&r?((e=t[Py])||(lc((e=new t).u),e=t[Py]=e),t=e):t=new t:t=void 0,t;let o=n=0|e[ie];return o===0&&(o|=32&r),o|=2&r,o!==n&&zn(e,o),new t(e)}function rL(e,t,n){if(t)t:{if(!Gu(t=e))throw Wg("int64");switch(typeof t){case"string":t=ky(t);break t;case"bigint":t=Ds(zu(64,t));break t;default:t=Xy(t)}}else e=typeof(t=e),t=t==null?t:e==="bigint"?Ds(zu(64,t)):Gu(t)?e==="string"?ky(t):Xy(t):void 0;return(e=t)==null?n?nL:void 0:e}function sL(e){return e}const oL={};let lL=(function(){try{return dd(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class B0{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const cL=lL?(Object.setPrototypeOf(B0.prototype,Map.prototype),Object.defineProperties(B0.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),B0):class extends Map{constructor(){super()}};function Wy(e){return e}function z0(e){if(2&e.M)throw Error("Cannot mutate an immutable Map")}var sr=class extends cL{constructor(e,t,n=Wy,r=Wy){super();let o=0|e[ie];o|=64,zn(e,o),this.M=o,this.I=t,this.S=n,this.X=this.I?uL:r;for(let l=0;l<e.length;l++){const u=e[l],f=n(u[0],!1,!0);let p=u[1];t?p===void 0&&(p=null):p=r(u[1],!1,!0,void 0,void 0,o),super.set(f,p)}}La(){var e=mL;if(this.size!==0)return Array.from(super.entries(),(t=>(t[0]=e(t[0]),t[1]=e(t[1]),t)))}da(e=fL){const t=[],n=super.entries();for(var r;!(r=n.next()).done;)(r=r.value)[0]=e(r[0]),r[1]=e(r[1]),t.push(r);return t}clear(){z0(this),super.clear()}delete(e){return z0(this),super.delete(this.S(e,!0,!1))}entries(){if(this.I){var e=super.keys();e=new Iy(e,hL,this)}else e=super.entries();return e}values(){if(this.I){var e=super.keys();e=new Iy(e,sr.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.I?super.forEach(((n,r,o)=>{e.call(t,o.get(r),r,o)})):super.forEach(e,t)}set(e,t){return z0(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.X(t,!0,!0,this.I,!1,this.M))}Ja(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.I?e===void 0?null:e:this.X(e,!1,!0,void 0,!1,this.M),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.I;return n?((n=this.X(t,!1,!0,n,this.pa,this.M))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function uL(e,t,n,r,o,l){return e=Y1(e,r,n,l),o&&(e=bd(e)),e}function fL(e){return e}function hL(e){return[e,this.get(e)]}let dL,XM,WM,pL;function qy(){return dL||(dL=new sr(lc([]),void 0,void 0,void 0,oL))}function Zg(e,t,n,r,o){if(e!=null){if(Array.isArray(e)){const l=0|e[ie];return e.length===0&&1&l?void 0:o&&2&l?e:Md(e,t,n,r!==void 0,o)}return t(e,r)}}function Md(e,t,n,r,o){const l=r||n?0|e[ie]:0,u=r?!!(32&l):void 0;let f=0;const p=(r=Pi(e)).length;for(let b=0;b<p;b++){var m=r[b];if(b===p-1&&_d(m)){var g=t,_=n,v=u,S=o;let R;for(let M in m){const x=Zg(m[M],g,_,v,S);x!=null&&((R??(R={}))[M]=x)}m=R}else m=Zg(r[b],t,n,u,o);r[b]=m,m!=null&&(f=b+1)}return f<p&&(r.length=f),n&&((e=H1(e))&&(r[Yl]=Pi(e)),n(l,r)),r}function mL(e){return Zg(e,j1,void 0,void 0,!1)}function j1(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Yg(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Eo(e))return Eo(e)&&B1(NM),Ny(e);if(e.W===Wu)return qM(e);if(e instanceof Ir){const t=e.g;return t==null?"":typeof t=="string"?t:e.g=Ny(t)}return e instanceof sr?e.La():void 0}return e}function qM(e){var t=e.u;e=Md(t,j1,void 0,void 0,!1);var n=0|t[ie];if((t=e.length)&&!(512&n)){var r=e[t-1],o=!1;_d(r)?(t--,o=!0):r=void 0;var l=t-(n=512&n?0:-1),u=(XM??sL)(l,n,e,r);if(r&&(e[t]=void 0),l<u&&r){for(var f in l=!0,r){const p=+f;p<=u?(e[o=p+n]=r[f],t=Math.max(o+1,t),o=!1,delete r[f]):l=!1}l&&(r=void 0)}for(l=t-1;t>0;l=t-1)if((f=e[l])==null)t--,o=!0;else{if(!((l-=n)>=u))break;(r??(r={}))[l]=f,t--,o=!0}o&&(e.length=t),r&&e.push(r)}return e}function Ls(e,t,n){return e=YM(e,t[0],t[1],n?1:2),t!==WM&&n&&md(e,8192),e}function YM(e,t,n,r){if(e==null){var o=96;n?(e=[n],o|=512):e=[],t&&(o=-16760833&o|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(8192&(o=0|e[ie])||!(64&o)||2&o||B1(WU),1024&o)throw Error("farr");if(64&o)return e;if(r===1||r===2||(o|=64),n&&(o|=512,n!==e[0]))throw Error("mid");t:{var l=(n=e).length;if(l){var u=l-1;if(_d(r=n[u])){if((u-=t=512&(o|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var f in r)(l=+f)<u&&(n[l+t]=r[f],delete r[f]);o=-16760833&o|(1023&u)<<14;break t}}if(t){if((f=Math.max(t,l-(512&o?0:-1)))>1024)throw Error("spvt");o=-16760833&o|(1023&f)<<14}}}return zn(e,o),e}function Kg(e,t,n=qg){if(e!=null){if(RM&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var r=0|e[ie];return 2&r?e:(t&&(t=r===0||!!(32&r)&&!(64&r||!(16&r))),t?(zn(e,34|r),4&r&&Object.freeze(e),e):Md(e,Kg,4&r?qg:n,!0,!0))}return e.W===Wu?e=2&(r=0|(n=e.u)[ie])?e:new e.constructor(Ed(n,r,!0)):e instanceof sr&&!(2&e.M)&&(n=lc(e.da(Kg)),e=new sr(n,e.I,e.S,e.X)),e}}function Ed(e,t,n){const r=n||2&t?qg:qU,o=!!(32&t);return e=(function(l,u,f){const p=Pi(l);var m=p.length;const g=256&u?p[m-1]:void 0;for(m+=g?-1:0,u=512&u?1:0;u<m;u++)p[u]=f(p[u]);if(g){u=p[u]={};for(const _ in g)u[_]=f(g[_])}return(l=H1(l))&&(p[Yl]=Pi(l)),p})(e,t,(l=>Kg(l,o,r))),md(e,32|(n?2:0)),e}function bd(e){const t=e.u,n=0|t[ie];return 2&n?new e.constructor(Ed(t,n,!1)):e}function Kl(e,t){return Wr(e=e.u,0|e[ie],t)}function Wr(e,t,n){if(n===-1)return null;const r=n+(512&t?0:-1),o=e.length-1;return r>=o&&256&t?e[o][n]:r<=o?e[r]:void 0}function cn(e,t,n){const r=e.u;let o=0|r[ie];return Is(o),Sn(r,o,t,n),e}function Sn(e,t,n,r){const o=512&t?0:-1,l=n+o;var u=e.length-1;return l>=u&&256&t?(e[u][n]=r,t):l<=u?(e[l]=r,t):(r!==void 0&&(n>=(u=t>>14&1023||536870912)?r!=null&&(e[u+o]={[n]:r},zn(e,t|=256)):e[l]=r),t)}function qh(e,t){let n=0|(e=e.u)[ie];const r=Wr(e,n,t),o=Bs(r);return o!=null&&o!==r&&Sn(e,n,t,o),o}function jM(e){let t=0|(e=e.u)[ie];const n=Wr(e,t,1),r=G1(n,!0);return r!=null&&r!==n&&Sn(e,t,1,r),r}function vo(){return YU===void 0?2:4}function xo(e,t,n,r,o){const l=e.u,u=2&(e=0|l[ie])?1:r;o=!!o;let f=0|(r=Z1(l,e,t))[ie];if(!(4&f)){4&f&&(r=Pi(r),f=Br(f,e),e=Sn(l,e,t,r));let p=0,m=0;for(;p<r.length;p++){const g=n(r[p]);g!=null&&(r[m++]=g)}m<p&&(r.length=m),f=K1(f,e),n=-2049&(20|f),f=n&=-4097,zn(r,f),2&f&&Object.freeze(r)}return u===1||u===4&&32&f?Pr(f)||(o=f,f|=2,f!==o&&zn(r,f),Object.freeze(r)):(u===2&&Pr(f)&&(r=Pi(r),f=Br(f,e),f=Ns(f,e,o),zn(r,f),e=Sn(l,e,t,r)),Pr(f)||(t=f,f=Ns(f,e,o),f!==t&&zn(r,f))),r}function Z1(e,t,n){return e=Wr(e,t,n),Array.isArray(e)?e:z1}function K1(e,t){return e===0&&(e=Br(e,t)),1|e}function Pr(e){return!!(2&e)&&!!(4&e)||!!(1024&e)}function ZM(e){e=Pi(e);for(let t=0;t<e.length;t++){const n=e[t]=Pi(e[t]);Array.isArray(n[1])&&(n[1]=lc(n[1]))}return e}function Qg(e,t,n,r){let o=0|(e=e.u)[ie];Is(o),Sn(e,o,t,(r==="0"?Number(n)===0:n===r)?void 0:n)}function fc(e,t,n,r){Is(t);let o=Z1(e,t,n);const l=o!==z1;if(64&t||!(8192&t)||!l){const u=l?0|o[ie]:0;let f=u;(!l||2&f||Pr(f)||4&f&&!(32&f))&&(o=Pi(o),f=Br(f,t),t=Sn(e,t,n,o)),f=-13&K1(f,t),f=Ns(r?-17&f:16|f,t,!0),f!==u&&zn(o,f)}return o}function G0(e,t){var n=IE;return J1(Q1(e=e.u),e,0|e[ie],n)===t?t:-1}function Q1(e){if(pd)return e[Su]??(e[Su]=new Map);if(Su in e)return e[Su];const t=new Map;return Object.defineProperty(e,Su,{value:t}),t}function KM(e,t,n,r){const o=Q1(e),l=J1(o,e,t,n);return l!==r&&(l&&(t=Sn(e,t,l)),o.set(n,r)),t}function J1(e,t,n,r){let o=e.get(r);if(o!=null)return o;o=0;for(let l=0;l<r.length;l++){const u=r[l];Wr(t,n,u)!=null&&(o!==0&&(n=Sn(t,n,o)),o=u)}return e.set(r,o),o}function $1(e,t,n){let r=0|e[ie];const o=Wr(e,r,n);let l;if(o!=null&&o.W===Wu)return(t=bd(o))!==o&&Sn(e,r,n,t),t.u;if(Array.isArray(o)){const u=0|o[ie];l=2&u?Ls(Ed(o,u,!1),t,!0):64&u?o:Ls(l,t,!0)}else l=Ls(void 0,t,!0);return l!==o&&Sn(e,r,n,l),l}function QM(e,t,n){let r=0|(e=e.u)[ie];const o=Wr(e,r,n);return(t=Y1(o,t,!1,r))!==o&&t!=null&&Sn(e,r,n,t),t}function Fe(e,t,n){if((t=QM(e,t,n))==null)return t;let r=0|(e=e.u)[ie];if(!(2&r)){const o=bd(t);o!==t&&Sn(e,r,n,t=o)}return t}function JM(e,t,n,r,o,l,u){e=e.u;var f=!!(2&t);const p=f?1:o;l=!!l,u&&(u=!f);var m=0|(o=Z1(e,t,r))[ie];if(!(f=!!(4&m))){var g=o,_=t;const v=!!(2&(m=K1(m,t)));v&&(_|=2);let S=!v,b=!0,R=0,M=0;for(;R<g.length;R++){const x=Y1(g[R],n,!1,_);if(x instanceof n){if(!v){const L=!!(2&(0|x.u[ie]));S&&(S=!L),b&&(b=L)}g[M++]=x}}M<R&&(g.length=M),m|=4,m=b?16|m:-17&m,zn(g,m=S?8|m:-9&m),v&&Object.freeze(g)}if(u&&!(8&m||!o.length&&(p===1||p===4&&32&m))){for(Pr(m)&&(o=Pi(o),m=Br(m,t),t=Sn(e,t,r,o)),n=o,u=m,g=0;g<n.length;g++)(m=n[g])!==(_=bd(m))&&(n[g]=_);u|=8,zn(n,u=n.length?-17&u:16|u),m=u}return p===1||p===4&&32&m?Pr(m)||(t=m,(m|=!o.length||16&m&&(!f||32&m)?2:1024)!==t&&zn(o,m),Object.freeze(o)):(p===2&&Pr(m)&&(zn(o=Pi(o),m=Ns(m=Br(m,t),t,l)),t=Sn(e,t,r,o)),Pr(m)||(r=m,(m=Ns(m,t,l))!==r&&zn(o,m))),o}function Vr(e,t,n){const r=0|e.u[ie];return JM(e,r,t,n,vo(),!1,!(2&r))}function re(e,t,n,r){return r==null&&(r=void 0),cn(e,n,r)}function Cu(e,t,n,r){r==null&&(r=void 0);t:{let o=0|(e=e.u)[ie];if(Is(o),r==null){const l=Q1(e);if(J1(l,e,o,n)!==t)break t;l.set(n,0)}else o=KM(e,o,n,t);Sn(e,o,t,r)}}function Br(e,t){return-1025&(e=32|(2&t?2|e:-3&e))}function Ns(e,t,n){return 32&t&&n||(e&=-33),e}function Td(e,t,n){Is(0|e.u[ie]),xo(e,t,Zl,2,!0).push(kM(n))}function ad(e,t,n,r){const o=0|e.u[ie];Is(o),e=JM(e,o,n,t,2,!0),r=r??new n,e.push(r),e[ie]=2&(0|r.u[ie])?-9&e[ie]:-17&e[ie]}function Ea(e,t){return cc(Kl(e,t))}function ba(e,t){return Zl(Kl(e,t))}function Dn(e,t){return qh(e,t)??0}function Hu(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);cn(e,t,n)}function or(e,t,n){if(n!=null){if(typeof n!="number"||!Sd(n))throw Wg("int32");n|=0}cn(e,t,n)}function $t(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);cn(e,t,n)}function rd(e,t,n){{const u=e.u;let f=0|u[ie];if(Is(f),n==null)Sn(u,f,t);else{var r=e=0|n[ie],o=Pr(e),l=o||Object.isFrozen(n);for(o||(e=0),l||(n=Pi(n),r=0,e=Ns(e=Br(e,f),f,!0),l=!1),e|=21,o=0;o<n.length;o++){const p=n[o],m=kM(p);Object.is(p,m)||(l&&(n=Pi(n),r=0,e=Ns(e=Br(e,f),f,!0),l=!1),n[o]=m)}e!==r&&(l&&(n=Pi(n),e=Ns(e=Br(e,f),f,!0)),zn(n,e)),Sn(u,f,t,n)}}}function $M(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function t_(){return Error("Failed to read varint, encoding is invalid.")}function tE(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function e_(e){if(typeof e=="string")return{buffer:DM(e),O:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Uint8Array)return{buffer:e,O:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),O:!1};if(e.constructor===Ir)return{buffer:I1(e)||new Uint8Array(0),O:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function n_(e,t){let n,r=0,o=0,l=0;const u=e.h;let f=e.g;do n=u[f++],r|=(127&n)<<l,l+=7;while(l<32&&128&n);for(l>32&&(o|=(127&n)>>4),l=3;l<32&&128&n;l+=7)n=u[f++],o|=(127&n)<<l;if(So(e,f),n<128)return t(r>>>0,o>>>0);throw t_()}function i_(e){let t=0,n=e.g;const r=n+10,o=e.h;for(;n<r;){const l=o[n++];if(t|=l,(128&l)==0)return So(e,n),!!(127&t)}throw t_()}function Ps(e){const t=e.h;let n=e.g,r=t[n++],o=127&r;if(128&r&&(r=t[n++],o|=(127&r)<<7,128&r&&(r=t[n++],o|=(127&r)<<14,128&r&&(r=t[n++],o|=(127&r)<<21,128&r&&(r=t[n++],o|=r<<28,128&r&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw t_();return So(e,n),o}function kr(e){return Ps(e)>>>0}function Jg(e){var t=e.h;const n=e.g,r=t[n],o=t[n+1],l=t[n+2];return t=t[n+3],So(e,e.g+4),(r<<0|o<<8|l<<16|t<<24)>>>0}function $g(e){var t=Jg(e);e=2*(t>>31)+1;const n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function gL(e){return Ps(e)}function H0(e,t,{aa:n=!1}={}){e.aa=n,t&&(t=e_(t),e.h=t.buffer,e.m=t.O,e.j=0,e.l=e.h.length,e.g=e.j)}function So(e,t){if(e.g=t,t>e.l)throw tE(e.l,t)}function eE(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const n=e.g,r=n+t;if(r>e.l)throw tE(t,e.l-n);return e.g=r,n}function nE(e,t){if(t==0)return bo();var n=eE(e,t);return e.aa&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):tL?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?bo():new Ir(n,ql)}sr.prototype.toJSON=void 0;var Yy=[];function iE(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=kr(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw $M(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function Yh(e){switch(e.h){case 0:e.h!=0?Yh(e):i_(e.g);break;case 1:So(e=e.g,e.g+8);break;case 2:if(e.h!=2)Yh(e);else{var t=kr(e.g);So(e=e.g,e.g+t)}break;case 5:So(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!iE(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}Yh(e)}break;default:throw $M(e.h,e.l)}}function qu(e,t,n){const r=e.g.l,o=kr(e.g),l=e.g.g+o;let u=l-r;if(u<=0&&(e.g.l=l,n(t,e,void 0,void 0,void 0),u=l-e.g.g),u)throw Error(`Message parsing ended unexpectedly. Expected to read ${o} bytes, instead read ${o-u} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=l,e.g.l=r,t}function a_(e){var t=kr(e.g),n=eE(e=e.g,t);if(e=e.h,PU){var r,o=e;(r=O0)||(r=O0=new TextDecoder("utf-8",{fatal:!0})),t=n+t,o=n===0&&t===o.length?o:o.subarray(n,t);try{var l=r.decode(o)}catch(f){if(Oh===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),Oh=!0}catch{Oh=!1}}throw!Oh&&(O0=void 0),f}}else{t=(l=n)+t,n=[];let f,p=null;for(;l<t;){var u=e[l++];u<128?n.push(u):u<224?l>=t?uo():(f=e[l++],u<194||(192&f)!=128?(l--,uo()):n.push((31&u)<<6|63&f)):u<240?l>=t-1?uo():(f=e[l++],(192&f)!=128||u===224&&f<160||u===237&&f>=160||(192&(r=e[l++]))!=128?(l--,uo()):n.push((15&u)<<12|(63&f)<<6|63&r)):u<=244?l>=t-2?uo():(f=e[l++],(192&f)!=128||f-144+(u<<28)>>30!=0||(192&(r=e[l++]))!=128||(192&(o=e[l++]))!=128?(l--,uo()):(u=(7&u)<<18|(63&f)<<12|(63&r)<<6|63&o,u-=65536,n.push(55296+(u>>10&1023),56320+(1023&u)))):uo(),n.length>=8192&&(p=Cy(p,n),n.length=0)}l=Cy(p,n)}return l}function aE(e){const t=kr(e.g);return nE(e.g,t)}function Ad(e,t,n){var r=kr(e.g);for(r=e.g.g+r;e.g.g<r;)n.push(t(e.g))}var Ph=[];function Ga(e,t,n){t.g?t.m(e,t.g,t.h,n):t.m(e,t.h,n)}var Qt=class{constructor(e,t){this.u=YM(e,t)}toJSON(){try{var e=qM(this)}finally{XM=void 0}return e}l(){var e=JL;return e.g?e.l(this,e.g,e.h):e.l(this,e.h,e.defaultValue)}clone(){const e=this.u;return new this.constructor(Ed(e,0|e[ie],!1))}O(){return!!(2&(0|this.u[ie]))}};function jy(e){return e?/^\d+$/.test(e)?(yd(e),new t1(on,An)):null:_L||(_L=new t1(0,0))}Qt.prototype.W=Wu,Qt.prototype.toString=function(){return this.u.toString()};var t1=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let _L;function Zy(e){return e?/^-?\d+$/.test(e)?(yd(e),new e1(on,An)):null:vL||(vL=new e1(0,0))}var e1=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let vL;function Fl(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function hc(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function wd(e,t){if(t>=0)hc(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Vu(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Ql(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function ea(e,t,n){hc(e.g,8*t+n)}function r_(e,t){return ea(e,t,2),t=e.g.end(),Ql(e,t),t.push(e.h),t}function s_(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Rd(e,t,n){ea(e,t,2),hc(e.g,n.length),Ql(e,e.g.end()),Ql(e,n)}function sd(e,t,n,r){n!=null&&(t=r_(e,t),r(n,e),s_(e,t))}function Ha(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var o_=Ha(),rE=Ha(),l_=Ha(),c_=Ha(),sE=Ha(),oE=Ha(),u_=Ha(),lE=Ha(),cE=Ha(),dc=class{constructor(e,t,n){this.g=e,this.h=t,e=o_,this.l=!!e&&n===e||!1}};function Cd(e,t){return new dc(e,t,o_)}function uE(e,t,n,r,o){sd(e,n,pE(t,r),o)}const xL=Cd((function(e,t,n,r,o){return e.h===2&&(qu(e,$1(t,r,n),o),!0)}),uE),yL=Cd((function(e,t,n,r,o){return e.h===2&&(qu(e,$1(t,r,n),o),!0)}),uE);var Dd=Symbol(),f_=Symbol(),Ky=Symbol(),Qy=Symbol();let fE,hE;function wo(e,t,n,r){var o=r[e];if(o)return o;(o={}).Ma=r,o.T=(function(_){switch(typeof _){case"boolean":return WM||(WM=[0,void 0,!0]);case"number":return _>0?void 0:_===0?pL||(pL=[0,void 0]):[-_,void 0];case"string":return[0,_];case"object":return _}})(r[0]);var l=r[1];let u=1;l&&l.constructor===Object&&(o.ga=l,typeof(l=r[++u])=="function"&&(o.la=!0,fE??(fE=l),hE??(hE=r[u+1]),l=r[u+=2]));const f={};for(;l&&Array.isArray(l)&&l.length&&typeof l[0]=="number"&&l[0]>0;){for(var p=0;p<l.length;p++)f[l[p]]=l;l=r[++u]}for(p=1;l!==void 0;){let _;typeof l=="number"&&(p+=l,l=r[++u]);var m=void 0;if(l instanceof dc?_=l:(_=xL,u--),_==null?void 0:_.l){l=r[++u],m=r;var g=u;typeof l=="function"&&(l=l(),m[g]=l),m=l}for(g=p+1,typeof(l=r[++u])=="number"&&l<0&&(g-=l,l=r[++u]);p<g;p++){const v=f[p];m?n(o,p,_,m,v):t(o,p,_,v)}}return r[e]=o}function dE(e){return Array.isArray(e)?e[0]instanceof dc?e:[yL,e]:[e,void 0]}function pE(e,t){return e instanceof Qt?e.u:Array.isArray(e)?Ls(e,t,!1):void 0}function h_(e,t,n,r){const o=n.g;e[t]=r?(l,u,f)=>o(l,u,f,r):o}function d_(e,t,n,r,o){const l=n.g;let u,f;e[t]=(p,m,g)=>l(p,m,g,f||(f=wo(f_,h_,d_,r).T),u||(u=p_(r)),o)}function p_(e){let t=e[Ky];if(t!=null)return t;const n=wo(f_,h_,d_,e);return t=n.la?(r,o)=>fE(r,o,n):(r,o)=>{const l=0|r[ie];for(;iE(o)&&o.h!=4;){var u=o.m,f=n[u];if(f==null){var p=n.ga;p&&(p=p[u])&&(p=SL(p))!=null&&(f=n[u]=p)}f!=null&&f(o,r,u)||(u=(f=o).l,Yh(f),f.fa?f=void 0:(p=f.g.g-u,f.g.g=u,f=nE(f.g,p)),u=r,f&&((p=u[Yl])?p.push(f):u[Yl]=[f]))}return 8192&l&&lc(r),!0},e[Ky]=t}function SL(e){const t=(e=dE(e))[0].g;if(e=e[1]){const n=p_(e),r=wo(f_,h_,d_,e).T;return(o,l,u)=>t(o,l,u,r,n)}return t}function Ud(e,t,n){e[t]=n.h}function Ld(e,t,n,r){let o,l;const u=n.h;e[t]=(f,p,m)=>u(f,p,m,l||(l=wo(Dd,Ud,Ld,r).T),o||(o=mE(r)))}function mE(e){let t=e[Qy];if(!t){const n=wo(Dd,Ud,Ld,e);t=(r,o)=>gE(r,o,n),e[Qy]=t}return t}function gE(e,t,n){(function(r,o,l){const u=512&o?0:-1,f=r.length,p=f+((o=64&o?256&o:!!f&&_d(r[f-1]))?-1:0);for(let m=0;m<p;m++)l(m-u,r[m]);if(o){r=r[f-1];for(const m in r)!isNaN(m)&&l(+m,r[m])}})(e,0|e[ie]|(n.T[1]?512:0),((r,o)=>{if(o!=null){var l=(function(u,f){var p=u[f];if(p)return p;if((p=u.ga)&&(p=p[f])){var m=(p=dE(p))[0].h;if(p=p[1]){const g=mE(p),_=wo(Dd,Ud,Ld,p).T;p=u.la?hE(_,g):(v,S,b)=>m(v,S,b,_,g)}else p=m;return u[f]=p}})(n,r);l&&l(t,o,r)}})),(e=H1(e))&&(function(r,o){Ql(r,r.g.end());for(let l=0;l<o.length;l++)Ql(r,I1(o[l])||new Uint8Array(0))})(t,e)}function pc(e,t){if(Array.isArray(t)){var n=0|t[ie];if(4&n)return t;for(var r=0,o=0;r<t.length;r++){const l=e(t[r]);l!=null&&(t[o++]=l)}return o<r&&(t.length=o),zn(t,-6145&(5|n)),2&n&&Object.freeze(t),t}}function Ei(e,t,n){return new dc(e,t,n)}function mc(e,t,n){return new dc(e,t,n)}function bi(e,t,n){Sn(e,0|e[ie],t,n)}var ML=Cd((function(e,t,n,r,o){return e.h===2&&(e=qu(e,Ls([void 0,void 0],r,!0),o),Is(r=0|t[ie]),(o=Wr(t,r,n))instanceof sr?(2&o.M)!=0?((o=o.da()).push(e),Sn(t,r,n,o)):o.Ja(e):Array.isArray(o)?(2&(0|o[ie])&&Sn(t,r,n,o=ZM(o)),o.push(e)):Sn(t,r,n,[e]),!0)}),(function(e,t,n,r,o){if(t instanceof sr)t.forEach(((l,u)=>{sd(e,n,Ls([u,l],r,!1),o)}));else if(Array.isArray(t))for(let l=0;l<t.length;l++){const u=t[l];Array.isArray(u)&&sd(e,n,Ls(u,r,!1),o)}}));function _E(e,t,n){if(t=(function(r){if(r==null)return r;const o=typeof r;if(o==="bigint")return String(zu(64,r));if(Gu(r)){if(o==="string")return VM(r);if(o==="number")return q1(r)}})(t),t!=null&&(typeof t=="string"&&Zy(t),t!=null))switch(ea(e,n,0),typeof t){case"number":e=e.g,To(t),Fl(e,on,An);break;case"bigint":n=BigInt.asUintN(64,t),n=new e1(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Fl(e.g,n.h,n.g);break;default:n=Zy(t),Fl(e.g,n.h,n.g)}}function vE(e,t,n){(t=cc(t))!=null&&t!=null&&(ea(e,n,0),wd(e.g,t))}function xE(e,t,n){(t=BM(t))!=null&&(ea(e,n,0),e.g.g.push(t?1:0))}function yE(e,t,n){(t=Zl(t))!=null&&Rd(e,n,TM(t))}function SE(e,t,n,r,o){sd(e,n,pE(t,r),o)}function ME(e,t,n){t==null||typeof t=="string"||t instanceof Ir||(Eo(t)?Eo(t)&&B1(NM):t=void 0),t!=null&&Rd(e,n,e_(t).buffer)}function EE(e,t,n){return(e.h===5||e.h===2)&&(t=fc(t,0|t[ie],n,!1),e.h==2?Ad(e,$g,t):t.push($g(e.g)),!0)}var Lr=Ei((function(e,t,n){if(e.h!==1)return!1;var r=e.g;e=Jg(r);const o=Jg(r);r=2*(o>>31)+1;const l=o>>>20&2047;return e=4294967296*(1048575&o)+e,bi(t,n,l==2047?e?NaN:r*(1/0):l==0?5e-324*r*e:r*Math.pow(2,l-1075)*(e+4503599627370496)),!0}),(function(e,t,n){(t=Bs(t))!=null&&(ea(e,n,1),e=e.g,(n=FM||(FM=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),on=n.getUint32(0,!0),An=n.getUint32(4,!0),Vu(e,on),Vu(e,An))}),Ha()),Gn=Ei((function(e,t,n){return e.h===5&&(bi(t,n,$g(e.g)),!0)}),(function(e,t,n){(t=Bs(t))!=null&&(ea(e,n,5),e=e.g,V1(t),Vu(e,on))}),u_),EL=mc(EE,(function(e,t,n){if((t=pc(Bs,t))!=null)for(let u=0;u<t.length;u++){var r=e,o=n,l=t[u];l!=null&&(ea(r,o,5),r=r.g,V1(l),Vu(r,on))}}),u_),m_=mc(EE,(function(e,t,n){if((t=pc(Bs,t))!=null&&t.length){ea(e,n,2),hc(e.g,4*t.length);for(let r=0;r<t.length;r++)n=e.g,V1(t[r]),Vu(n,on)}}),u_),Fs=Ei((function(e,t,n){return e.h===0&&(bi(t,n,n_(e.g,X1)),!0)}),_E,oE),V0=Ei((function(e,t,n){return e.h===0&&(bi(t,n,(e=n_(e.g,X1))===0?void 0:e),!0)}),_E,oE),bL=Ei((function(e,t,n){return e.h===0&&(bi(t,n,n_(e.g,k1)),!0)}),(function(e,t,n){if((t=aL(t))!=null&&(typeof t=="string"&&jy(t),t!=null))switch(ea(e,n,0),typeof t){case"number":e=e.g,To(t),Fl(e,on,An);break;case"bigint":n=BigInt.asUintN(64,t),n=new t1(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Fl(e.g,n.h,n.g);break;default:n=jy(t),Fl(e.g,n.h,n.g)}}),Ha()),wn=Ei((function(e,t,n){return e.h===0&&(bi(t,n,Ps(e.g)),!0)}),vE,c_),Nd=mc((function(e,t,n){return(e.h===0||e.h===2)&&(t=fc(t,0|t[ie],n,!1),e.h==2?Ad(e,Ps,t):t.push(Ps(e.g)),!0)}),(function(e,t,n){if((t=pc(cc,t))!=null&&t.length){n=r_(e,n);for(let r=0;r<t.length;r++)wd(e.g,t[r]);s_(e,n)}}),c_),Nl=Ei((function(e,t,n){return e.h===0&&(bi(t,n,(e=Ps(e.g))===0?void 0:e),!0)}),vE,c_),xn=Ei((function(e,t,n){return e.h===0&&(bi(t,n,i_(e.g)),!0)}),xE,rE),Il=Ei((function(e,t,n){return e.h===0&&(bi(t,n,(e=i_(e.g))===!1?void 0:e),!0)}),xE,rE),mi=mc((function(e,t,n){return e.h===2&&(e=a_(e),fc(t,0|t[ie],n,!1).push(e),!0)}),(function(e,t,n){if((t=pc(Zl,t))!=null)for(let u=0;u<t.length;u++){var r=e,o=n,l=t[u];l!=null&&Rd(r,o,TM(l))}}),l_),ws=Ei((function(e,t,n){return e.h===2&&(bi(t,n,(e=a_(e))===""?void 0:e),!0)}),yE,l_),je=Ei((function(e,t,n){return e.h===2&&(bi(t,n,a_(e)),!0)}),yE,l_),Wn=(function(e,t,n=o_){return new dc(e,t,n)})((function(e,t,n,r,o){return e.h===2&&(r=Ls(void 0,r,!0),fc(t,0|t[ie],n,!0).push(r),qu(e,r,o),!0)}),(function(e,t,n,r,o){if(Array.isArray(t))for(let l=0;l<t.length;l++)SE(e,t[l],n,r,o)})),Ye=Cd((function(e,t,n,r,o,l){return e.h===2&&(KM(t,0|t[ie],l,n),qu(e,t=$1(t,r,n),o),!0)}),SE),bE=Ei((function(e,t,n){return e.h===2&&(bi(t,n,aE(e)),!0)}),ME,lE),TL=mc((function(e,t,n){return(e.h===0||e.h===2)&&(t=fc(t,0|t[ie],n,!1),e.h==2?Ad(e,kr,t):t.push(kr(e.g)),!0)}),(function(e,t,n){if((t=pc(zM,t))!=null)for(let u=0;u<t.length;u++){var r=e,o=n,l=t[u];l!=null&&(ea(r,o,0),hc(r.g,l))}}),sE),AL=Ei((function(e,t,n){return e.h===0&&(bi(t,n,(e=kr(e.g))===0?void 0:e),!0)}),(function(e,t,n){(t=zM(t))!=null&&t!=null&&(ea(e,n,0),hc(e.g,t))}),sE),Ji=Ei((function(e,t,n){return e.h===0&&(bi(t,n,Ps(e.g)),!0)}),(function(e,t,n){(t=cc(t))!=null&&(t=parseInt(t,10),ea(e,n,0),wd(e.g,t))}),cE);class wL{constructor(t,n){this.h=t,this.g=n,this.l=Fe,this.m=re,this.defaultValue=void 0}register(){dd(this)}}function Va(e,t){return new wL(e,t)}function zs(e,t){return(n,r)=>{if(Ph.length){const l=Ph.pop();l.o(r),H0(l.g,n,r),n=l}else n=new class{constructor(l,u){if(Yy.length){const f=Yy.pop();H0(f,l,u),l=f}else l=new class{constructor(f,p){this.h=null,this.m=!1,this.g=this.l=this.j=0,H0(this,f,p)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(l,u);this.g=l,this.l=this.g.g,this.h=this.m=-1,this.o(u)}o({fa:l=!1}={}){this.fa=l}}(n,r);try{const l=new e,u=l.u;p_(t)(u,n);var o=l}finally{n.g.clear(),n.m=-1,n.h=-1,Ph.length<100&&Ph.push(n)}return o}}function Od(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const u=this.g;return this.g=[],u}}}};gE(this.u,t,wo(Dd,Ud,Ld,e)),Ql(t,t.g.end());const n=new Uint8Array(t.h),r=t.l,o=r.length;let l=0;for(let u=0;u<o;u++){const f=r[u];n.set(f,l),l+=f.length}return t.l=[n],n}}var Jy=class extends Qt{constructor(e){super(e)}},$y=[0,ws,Ei((function(e,t,n){return e.h===2&&(bi(t,n,(e=aE(e))===bo()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Qt){const r=t.Oa;return void(r&&(t=r(t),t!=null&&Rd(e,n,e_(t).buffer)))}if(Array.isArray(t))return}ME(e,t,n)}),lE)];let k0,tS=globalThis.trustedTypes;function eS(e){k0===void 0&&(k0=(function(){let n=null;if(!tS)return n;try{const r=o=>o;n=tS.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch{}return n})());var t=k0;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function RL(e,...t){if(t.length===0)return eS(e[0]);let n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return eS(n)}var TE=[0,wn,Ji,xn,-1,Nd,Ji,-1],CL=class extends Qt{constructor(e){super(e)}},AE=[0,xn,je,xn,Ji,-1,mc((function(e,t,n){return(e.h===0||e.h===2)&&(t=fc(t,0|t[ie],n,!1),e.h==2?Ad(e,gL,t):t.push(Ps(e.g)),!0)}),(function(e,t,n){if((t=pc(cc,t))!=null&&t.length){n=r_(e,n);for(let r=0;r<t.length;r++)wd(e.g,t[r]);s_(e,n)}}),cE),je,-1,[0,xn,-1],Ji,xn,-1],wE=[0,je,-2],nS=class extends Qt{constructor(e){super(e)}},RE=[0],CE=[0,wn,xn,1,xn,-3],ta=class extends Qt{constructor(e){super(e,2)}},Hn={};Hn[336783863]=[0,je,xn,-1,wn,[0,[1,2,3,4,5,6,7,8,9],Ye,RE,Ye,AE,Ye,wE,Ye,CE,Ye,TE,Ye,[0,je,-2],Ye,[0,je,Ji],Ye,[0,Ji,je,-1],Ye,[0,Ji,-1]],[0,je],xn,[0,[1,3],[2,4],Ye,[0,Nd],-1,Ye,[0,mi],-1,Wn,[0,je,-1]],je];var iS=[0,V0,-1,Il,-3,V0,Nd,ws,Nl,V0,-1,Il,Nl,Il,-2,ws];function na(e,t){Qg(e,2,uc(t),"")}function fn(e,t){Td(e,3,t)}function Le(e,t){Td(e,4,t)}var Mi=class extends Qt{constructor(e){super(e,500)}o(e){return re(this,0,7,e)}},Du=[-1,{}],aS=[0,je,1,Du],rS=[0,je,mi,Du];function ia(e,t){ad(e,1,Mi,t)}function pn(e,t){Td(e,10,t)}function He(e,t){Td(e,15,t)}var Ii=class extends Qt{constructor(e){super(e,500)}o(e){return re(this,0,1001,e)}},DE=[-500,Wn,[-500,ws,-1,mi,-3,[-2,Hn,xn],Wn,$y,Nl,-1,aS,rS,Wn,[0,ws,Il],ws,iS,Nl,mi,987,mi],4,Wn,[-500,je,-1,[-1,{}],998,je],Wn,[-500,je,mi,-1,[-2,{},xn],997,mi,-1],Nl,Wn,[-500,je,mi,Du,998,mi],mi,Nl,aS,rS,Wn,[0,ws,-1,Du],mi,-2,iS,ws,-1,Il,[0,Il,AL],978,Du,Wn,$y];Ii.prototype.g=Od(DE);var DL=zs(Ii,DE),UL=class extends Qt{constructor(e){super(e)}},UE=class extends Qt{constructor(e){super(e)}g(){return Vr(this,UL,1)}},LE=[0,Wn,[0,wn,Gn,je,-1]],Pd=zs(UE,LE),LL=class extends Qt{constructor(e){super(e)}},NL=class extends Qt{constructor(e){super(e)}},X0=class extends Qt{constructor(e){super(e)}h(){return Fe(this,LL,2)}g(){return Vr(this,NL,5)}},NE=zs(class extends Qt{constructor(e){super(e)}},[0,mi,Nd,m_,[0,Ji,[0,wn,-3],[0,Gn,-3],[0,wn,-1,[0,Wn,[0,wn,-2]]],Wn,[0,Gn,-1,je,Gn]],je,-1,Fs,Wn,[0,wn,Gn],mi,Fs]),OE=class extends Qt{constructor(e){super(e)}},Bl=zs(class extends Qt{constructor(e){super(e)}},[0,Wn,[0,Gn,-4]]),PE=class extends Qt{constructor(e){super(e)}},Yu=zs(class extends Qt{constructor(e){super(e)}},[0,Wn,[0,Gn,-4]]),OL=class extends Qt{constructor(e){super(e)}},PL=[0,wn,-1,m_,Ji],FE=class extends Qt{constructor(e){super(e)}};FE.prototype.g=Od([0,Gn,-4,Fs]);var FL=class extends Qt{constructor(e){super(e)}},IL=zs(class extends Qt{constructor(e){super(e)}},[0,Wn,[0,1,wn,je,LE],Fs]),sS=class extends Qt{constructor(e){super(e)}},BL=class extends Qt{constructor(e){super(e)}ma(){const e=jM(this);return e??bo()}},zL=class extends Qt{constructor(e){super(e)}},IE=[1,2],GL=zs(class extends Qt{constructor(e){super(e)}},[0,Wn,[0,IE,Ye,[0,m_],Ye,[0,bE],wn,je],Fs]),g_=class extends Qt{constructor(e){super(e)}},BE=[0,je,wn,Gn,mi,-1],oS=class extends Qt{constructor(e){super(e)}},HL=[0,xn,-1],lS=class extends Qt{constructor(e){super(e)}},jh=[1,2,3,4,5],od=class extends Qt{constructor(e){super(e)}g(){return jM(this)!=null}h(){return ba(this,2)!=null}},yn=class extends Qt{constructor(e){super(e)}g(){return BM(Kl(this,2))??!1}},zE=[0,bE,je,[0,wn,Fs,-1],[0,bL,Fs]],Ln=[0,zE,xn,[0,jh,Ye,CE,Ye,AE,Ye,TE,Ye,RE,Ye,wE],Ji],Fd=class extends Qt{constructor(e){super(e)}},__=[0,Ln,Gn,-1,wn],VL=Va(502141897,Fd);Hn[502141897]=__;var kL=zs(class extends Qt{constructor(e){super(e)}},[0,[0,Ji,-1,EL,TL],PL]),GE=class extends Qt{constructor(e){super(e)}},HE=class extends Qt{constructor(e){super(e)}},v_=[0,Ln,Gn,[0,Ln],xn],VE=[0,Ln,__,v_,Gn,[0,[0,zE]]],XL=Va(508968150,HE);Hn[508968150]=VE,Hn[508968149]=v_;var kE=class extends Qt{constructor(e){super(e)}},WL=Va(513916220,kE);Hn[513916220]=[0,Ln,VE,wn];var Dl=class extends Qt{constructor(e){super(e)}h(){return Fe(this,g_,2)}g(){cn(this,2)}},XE=[0,Ln,BE];Hn[478825465]=XE;var qL=class extends Qt{constructor(e){super(e)}},WE=class extends Qt{constructor(e){super(e)}},x_=class extends Qt{constructor(e){super(e)}},y_=class extends Qt{constructor(e){super(e)}},qE=class extends Qt{constructor(e){super(e)}},cS=[0,Ln,[0,Ln],XE,-1],YE=[0,Ln,Gn,wn],S_=[0,Ln,Gn],jE=[0,Ln,YE,S_,Gn],YL=Va(479097054,qE);Hn[479097054]=[0,Ln,jE,cS],Hn[463370452]=cS,Hn[464864288]=YE;var jL=Va(462713202,y_);Hn[462713202]=jE,Hn[474472470]=S_;var ZL=class extends Qt{constructor(e){super(e)}},ZE=class extends Qt{constructor(e){super(e)}},KE=class extends Qt{constructor(e){super(e)}},QE=class extends Qt{constructor(e){super(e)}},M_=[0,Ln,Gn,-1,wn],n1=[0,Ln,Gn,xn];QE.prototype.g=Od([0,Ln,S_,[0,Ln],__,v_,M_,n1]);var JE=class extends Qt{constructor(e){super(e)}},KL=Va(456383383,JE);Hn[456383383]=[0,Ln,BE];var $E=class extends Qt{constructor(e){super(e)}},QL=Va(476348187,$E);Hn[476348187]=[0,Ln,HL];var tb=class extends Qt{constructor(e){super(e)}},uS=class extends Qt{constructor(e){super(e)}},eb=[0,Ji,-1],JL=Va(458105876,class extends Qt{constructor(e){super(e)}g(){var e=this.u;const t=0|e[ie],n=2&t;return e=(function(r,o,l){var u=uS;const f=2&o;let p=!1;if(l==null){if(f)return qy();l=[]}else if(l.constructor===sr){if((2&l.M)==0||f)return l;l=l.da()}else Array.isArray(l)?p=!!(2&(0|l[ie])):l=[];if(f){if(!l.length)return qy();p||(p=!0,lc(l))}else p&&(p=!1,l=ZM(l));return p||(64&(0|l[ie])?l[ie]&=-33:32&o&&md(l,32)),Sn(r,o,2,u=new sr(l,u,rL,void 0)),u})(e,t,Wr(e,t,2)),!n&&uS&&(e.pa=!0),e}});Hn[458105876]=[0,eb,ML,[!0,Fs,[0,je,-1,mi]]];var E_=class extends Qt{constructor(e){super(e)}},nb=Va(458105758,E_);Hn[458105758]=[0,Ln,je,eb];var ib=class extends Qt{constructor(e){super(e)}},$L=Va(443442058,ib);Hn[443442058]=[0,Ln,je,wn,Gn,mi,-1,xn,Gn],Hn[514774813]=M_;var ab=class extends Qt{constructor(e){super(e)}},t6=Va(516587230,ab);function i1(e,t){return t=t?t.clone():new g_,e.displayNamesLocale!==void 0?cn(t,1,uc(e.displayNamesLocale)):e.displayNamesLocale===void 0&&cn(t,1),e.maxResults!==void 0?or(t,2,e.maxResults):"maxResults"in e&&cn(t,2),e.scoreThreshold!==void 0?$t(t,3,e.scoreThreshold):"scoreThreshold"in e&&cn(t,3),e.categoryAllowlist!==void 0?rd(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&cn(t,4),e.categoryDenylist!==void 0?rd(t,5,e.categoryDenylist):"categoryDenylist"in e&&cn(t,5),t}function b_(e,t=-1,n=""){return{categories:e.map((r=>({index:Ea(r,1)??0??-1,score:Dn(r,2)??0,categoryName:ba(r,3)??""??"",displayName:ba(r,4)??""??""}))),headIndex:t,headName:n}}function rb(e){var u,f;var t=xo(e,3,Bs,vo()),n=xo(e,2,cc,vo()),r=xo(e,1,Zl,vo()),o=xo(e,9,Zl,vo());const l={categories:[],keypoints:[]};for(let p=0;p<t.length;p++)l.categories.push({score:t[p],index:n[p]??-1,categoryName:r[p]??"",displayName:o[p]??""});if((t=(u=Fe(e,X0,4))==null?void 0:u.h())&&(l.boundingBox={originX:Ea(t,1)??0,originY:Ea(t,2)??0,width:Ea(t,3)??0,height:Ea(t,4)??0,angle:0}),(f=Fe(e,X0,4))==null?void 0:f.g().length)for(const p of Fe(e,X0,4).g())l.keypoints.push({x:qh(p,1)??0,y:qh(p,2)??0,score:qh(p,4)??0,label:ba(p,3)??""});return l}function Id(e){const t=[];for(const n of Vr(e,PE,1))t.push({x:Dn(n,1)??0,y:Dn(n,2)??0,z:Dn(n,3)??0,visibility:Dn(n,4)??0});return t}function Uu(e){const t=[];for(const n of Vr(e,OE,1))t.push({x:Dn(n,1)??0,y:Dn(n,2)??0,z:Dn(n,3)??0,visibility:Dn(n,4)??0});return t}function fS(e){return Array.from(e,(t=>t>127?t-256:t))}function hS(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,r=0,o=0;for(let l=0;l<e.length;l++)n+=e[l]*t[l],r+=e[l]*e[l],o+=t[l]*t[l];if(r<=0||o<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(r*o)}let Fh;Hn[516587230]=[0,Ln,M_,n1,Gn],Hn[518928384]=n1;const e6=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function sb(){if(Fh===void 0)try{await WebAssembly.instantiate(e6),Fh=!0}catch{Fh=!1}return Fh}async function Mu(e,t=RL``){const n=await sb()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var ho=class{};function ob(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function dS(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,r)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(o=>{r(o)}),!1),document.body.appendChild(t)}))}importScripts(e.toString())}function lb(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function ne(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function pS(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[r,o]=lb(t);return!e.l||r===e.i.canvas.width&&o===e.i.canvas.height||(e.i.canvas.width=r,e.i.canvas.height=o),[r,o]}function mS(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const r=new Uint32Array(t.length);for(let o=0;o<t.length;o++)r[o]=e.i.stringToNewUTF8(t[o]);t=e.i._malloc(4*r.length),e.i.HEAPU32.set(r,t>>2),n(t);for(const o of r)e.i._free(o);e.i._free(t)}function Ka(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function bs(e,t,n){let r=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(o,l,u)=>{l?(n(r,u),r=[]):r.push(o)}}ho.forVisionTasks=function(e){return Mu("vision",e)},ho.forTextTasks=function(e){return Mu("text",e)},ho.forGenAiExperimentalTasks=function(e){return Mu("genai_experimental",e)},ho.forGenAiTasks=function(e){return Mu("genai",e)},ho.forAudioTasks=function(e){return Mu("audio",e)},ho.isSimdSupported=function(){return sb()};async function n6(e,t,n,r){return e=await(async(o,l,u,f,p)=>{if(l&&await dS(l),!self.ModuleFactory||u&&(await dS(u),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&p&&((l=self.Module).locateFile=p.locateFile,p.mainScriptUrlOrBlob&&(l.mainScriptUrlOrBlob=p.mainScriptUrlOrBlob)),p=await self.ModuleFactory(self.Module||p),self.ModuleFactory=self.Module=void 0,new o(p,f)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:o=>o.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&o.endsWith(".data")?n.assetBinaryPath.toString():o}),await e.o(r),e}function W0(e,t){const n=Fe(e.baseOptions,od,1)||new od;typeof t=="string"?(cn(n,2,uc(t)),cn(n,1)):t instanceof Uint8Array&&(cn(n,1,G1(t,!1)),cn(n,2)),re(e.baseOptions,0,1,n)}function gS(e){try{const t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map((n=>n.message)).join(", "))}finally{e.G=[]}}function kt(e,t){e.B=Math.max(e.B,t)}function Bd(e,t){e.A=new Mi,na(e.A,"PassThroughCalculator"),fn(e.A,"free_memory"),Le(e.A,"free_memory_unused_out"),pn(t,"free_memory"),ia(t,e.A)}function Jl(e,t){fn(e.A,t),Le(e.A,t+"_unused_out")}function zd(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var a1=class{constructor(e){this.g=e,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,r,o,l,u,f;if(t){const p=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((r=e.baseOptions)!=null&&r.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((o=Fe(this.baseOptions,od,1))!=null&&o.g()||(l=Fe(this.baseOptions,od,1))!=null&&l.h()||(u=e.baseOptions)!=null&&u.modelAssetBuffer||(f=e.baseOptions)!=null&&f.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(m,g){let _=Fe(m.baseOptions,lS,3);if(!_){var v=_=new lS,S=new nS;Cu(v,4,jh,S)}"delegate"in g&&(g.delegate==="GPU"?(g=_,v=new CL,Cu(g,2,jh,v)):(g=_,v=new nS,Cu(g,4,jh,v))),re(m.baseOptions,0,3,_)})(this,p),p.modelAssetPath)return fetch(p.modelAssetPath.toString()).then((m=>{if(m.ok)return m.arrayBuffer();throw Error(`Failed to fetch model: ${p.modelAssetPath} (${m.status})`)})).then((m=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(m),!0,!1,!1),W0(this,"/model.dat"),this.m(),this.J()}));if(p.modelAssetBuffer instanceof Uint8Array)W0(this,p.modelAssetBuffer);else if(p.modelAssetBuffer)return(async function(m){const g=[];for(var _=0;;){const{done:v,value:S}=await m.read();if(v)break;g.push(S),_+=S.length}if(g.length===0)return new Uint8Array(0);if(g.length===1)return g[0];m=new Uint8Array(_),_=0;for(const v of g)m.set(v,_),_+=v.length;return m})(p.modelAssetBuffer).then((m=>{W0(this,m),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let e;if(this.g.ca((t=>{e=DL(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,r)=>{this.G.push(Error(r))})),this.g.Ha(),this.g.setGraph(e,t),this.A=void 0,gS(this)}finishProcessing(){this.g.finishProcessing(),gS(this)}close(){this.A=void 0,this.g.closeGraph()}};function zr(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}a1.prototype.close=a1.prototype.close;class i6{constructor(t,n,r,o){this.g=t,this.h=n,this.m=r,this.l=o}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function _S(e,t,n){const r=e.g;if(n=zr(r.createShader(n),"Failed to create WebGL shader"),r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(e.h,n),n}function vS(e,t){const n=e.g,r=zr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(r);const o=zr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,o),n.enableVertexAttribArray(e.P),n.vertexAttribPointer(e.P,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const l=zr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,l),n.enableVertexAttribArray(e.J),n.vertexAttribPointer(e.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new i6(n,r,o,l)}function T_(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function A_(e,t,n,r){return T_(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=vS(e,!0)),n=e.s):(e.v||(e.v=vS(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=r(),n.g.bindVertexArray(null),e}function Gd(e,t,n){return T_(e,t),e=zr(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Hd(e,t,n){T_(e,t),e.A||(e.A=zr(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function w_(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var R_=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=zr(e.createProgram(),"Failed to create WebGL program"),this.Z=_S(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Y=_S(this,this.G(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.P=e.getAttribLocation(this.h,"aVertex"),this.J=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.Z),e.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function Nr(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function r1(e){var t=Nr(e,1);if(!t){if(t=Nr(e,0))t=new Float32Array(t).map((r=>r/255));else{t=new Float32Array(e.width*e.height);const r=$l(e);var n=C_(e);if(Hd(n,r,cb(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),r.readPixels(0,0,e.width,e.height,r.RGBA,r.FLOAT,n);for(let o=0,l=0;o<t.length;++o,l+=4)t[o]=n[l]}else r.readPixels(0,0,e.width,e.height,r.RED,r.FLOAT,t)}e.g.push(t)}return t}function cb(e){let t=Nr(e,2);if(!t){const n=$l(e);t=fb(e);const r=r1(e),o=ub(e);n.texImage2D(n.TEXTURE_2D,0,o,e.width,e.height,0,n.RED,n.FLOAT,r),s1(e)}return t}function $l(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=zr(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function ub(e){if(e=$l(e),!Ih)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Ih=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ih=e.R16F}return Ih}function C_(e){return e.l||(e.l=new R_),e.l}function fb(e){const t=$l(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Nr(e,2);return n||(n=Gd(C_(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function s1(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Ih,Qn=class{constructor(e,t,n,r,o,l,u){this.g=e,this.m=t,this.j=n,this.canvas=r,this.l=o,this.width=l,this.height=u,this.j&&--xS===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!Nr(this,0)}ja(){return!!Nr(this,1)}R(){return!!Nr(this,2)}ia(){return(t=Nr(e=this,0))||(t=r1(e),t=new Uint8Array(t.map((n=>255*n))),e.g.push(t)),t;var e,t}ha(){return r1(this)}N(){return cb(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const r=$l(this),o=C_(this);r.activeTexture(r.TEXTURE1),n=Gd(o,r,this.m?r.LINEAR:r.NEAREST),r.bindTexture(r.TEXTURE_2D,n);const l=ub(this);r.texImage2D(r.TEXTURE_2D,0,l,this.width,this.height,0,r.RED,r.FLOAT,null),r.bindTexture(r.TEXTURE_2D,null),Hd(o,r,n),A_(o,r,!1,(()=>{fb(this),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),s1(this)})),w_(o),s1(this)}}e.push(n)}return new Qn(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&$l(this).deleteTexture(Nr(this,2)),xS=-1}};Qn.prototype.close=Qn.prototype.close,Qn.prototype.clone=Qn.prototype.clone,Qn.prototype.getAsWebGLTexture=Qn.prototype.N,Qn.prototype.getAsFloat32Array=Qn.prototype.ha,Qn.prototype.getAsUint8Array=Qn.prototype.ia,Qn.prototype.hasWebGLTexture=Qn.prototype.R,Qn.prototype.hasFloat32Array=Qn.prototype.ja,Qn.prototype.hasUint8Array=Qn.prototype.Da;var xS=250;function tr(e,t){switch(t){case 0:return e.g.find((n=>n instanceof ImageData));case 1:return e.g.find((n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function hb(e){var t=tr(e,0);if(!t){t=tc(e);const n=Vd(e),r=new Uint8Array(e.width*e.height*4);Hd(n,t,Zh(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,r),w_(n),t=new ImageData(new Uint8ClampedArray(r.buffer),e.width,e.height),e.g.push(t)}return t}function Zh(e){let t=tr(e,2);if(!t){const n=tc(e);t=Kh(e);const r=tr(e,1)||hb(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r),Au(e)}return t}function tc(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=zr(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Vd(e){return e.l||(e.l=new R_),e.l}function Kh(e){const t=tc(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=tr(e,2);return n||(n=Gd(Vd(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Au(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function yS(e){const t=tc(e);return A_(Vd(e),t,!0,(()=>(function(n,r){const o=n.canvas;if(o.width===n.width&&o.height===n.height)return r();const l=o.width,u=o.height;return o.width=n.width,o.height=n.height,n=r(),o.width=l,o.height=u,n})(e,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))))}var Jn=class{constructor(e,t,n,r,o,l,u){this.g=e,this.j=t,this.m=n,this.canvas=r,this.l=o,this.width=l,this.height=u,(this.j||this.m)&&--SS===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!tr(this,0)}ka(){return!!tr(this,1)}R(){return!!tr(this,2)}Aa(){return hb(this)}za(){var e=tr(this,1);return e||(Zh(this),Kh(this),e=yS(this),Au(this),this.g.push(e),this.j=!0),e}N(){return Zh(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const r=tc(this),o=Vd(this);r.activeTexture(r.TEXTURE1),n=Gd(o,r),r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,this.width,this.height,0,r.RGBA,r.UNSIGNED_BYTE,null),r.bindTexture(r.TEXTURE_2D,null),Hd(o,r,n),A_(o,r,!1,(()=>{Kh(this),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),Au(this)})),w_(o),Au(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);Zh(this),Kh(this),n=yS(this),Au(this)}e.push(n)}return new Jn(e,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&tr(this,1).close(),this.m&&tc(this).deleteTexture(tr(this,2)),SS=-1}};Jn.prototype.close=Jn.prototype.close,Jn.prototype.clone=Jn.prototype.clone,Jn.prototype.getAsWebGLTexture=Jn.prototype.N,Jn.prototype.getAsImageBitmap=Jn.prototype.za,Jn.prototype.getAsImageData=Jn.prototype.Aa,Jn.prototype.hasWebGLTexture=Jn.prototype.R,Jn.prototype.hasImageBitmap=Jn.prototype.ka,Jn.prototype.hasImageData=Jn.prototype.Ca;var SS=250;function ka(...e){return e.map((([t,n])=>({start:t,end:n})))}const a6=(function(e){return class extends e{Ha(){this.i._registerModelResourcesGraphService()}}})((MS=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:ob()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,r=this.i._malloc(n);this.i.HEAPU8.set(e,r),t?this.i._changeBinaryGraph(n,r):this.i._changeTextGraph(n,r),this.i._free(r)}configureAudio(e,t,n,r,o){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),ne(this,r||"input_audio",(l=>{ne(this,o=o||"audio_header",(u=>{this.i._configureAudio(l,u,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Ka(this,"__graph_config__",(t=>{e(t)})),ne(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,r,o){const l=4*e.length;this.h!==l&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(l),this.h=l),this.i.HEAPF32.set(e,this.g/4),ne(this,r,(u=>{this.i._addAudioToInputStream(this.g,t,n,u,o)}))}addGpuBufferToStream(e,t,n){ne(this,t,(r=>{const[o,l]=pS(this,e,r);this.i._addBoundTextureToStream(r,o,l,n)}))}addBoolToStream(e,t,n){ne(this,t,(r=>{this.i._addBoolToInputStream(e,r,n)}))}addDoubleToStream(e,t,n){ne(this,t,(r=>{this.i._addDoubleToInputStream(e,r,n)}))}addFloatToStream(e,t,n){ne(this,t,(r=>{this.i._addFloatToInputStream(e,r,n)}))}addIntToStream(e,t,n){ne(this,t,(r=>{this.i._addIntToInputStream(e,r,n)}))}addUintToStream(e,t,n){ne(this,t,(r=>{this.i._addUintToInputStream(e,r,n)}))}addStringToStream(e,t,n){ne(this,t,(r=>{ne(this,e,(o=>{this.i._addStringToInputStream(o,r,n)}))}))}addStringRecordToStream(e,t,n){ne(this,t,(r=>{mS(this,Object.keys(e),(o=>{mS(this,Object.values(e),(l=>{this.i._addFlatHashMapToInputStream(o,l,Object.keys(e).length,r,n)}))}))}))}addProtoToStream(e,t,n,r){ne(this,n,(o=>{ne(this,t,(l=>{const u=this.i._malloc(e.length);this.i.HEAPU8.set(e,u),this.i._addProtoToInputStream(u,e.length,l,o,r),this.i._free(u)}))}))}addEmptyPacketToStream(e,t){ne(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){ne(this,t,(r=>{const o=this.i._allocateBoolVector(e.length);if(!o)throw Error("Unable to allocate new bool vector on heap.");for(const l of e)this.i._addBoolVectorEntry(o,l);this.i._addBoolVectorToInputStream(o,r,n)}))}addDoubleVectorToStream(e,t,n){ne(this,t,(r=>{const o=this.i._allocateDoubleVector(e.length);if(!o)throw Error("Unable to allocate new double vector on heap.");for(const l of e)this.i._addDoubleVectorEntry(o,l);this.i._addDoubleVectorToInputStream(o,r,n)}))}addFloatVectorToStream(e,t,n){ne(this,t,(r=>{const o=this.i._allocateFloatVector(e.length);if(!o)throw Error("Unable to allocate new float vector on heap.");for(const l of e)this.i._addFloatVectorEntry(o,l);this.i._addFloatVectorToInputStream(o,r,n)}))}addIntVectorToStream(e,t,n){ne(this,t,(r=>{const o=this.i._allocateIntVector(e.length);if(!o)throw Error("Unable to allocate new int vector on heap.");for(const l of e)this.i._addIntVectorEntry(o,l);this.i._addIntVectorToInputStream(o,r,n)}))}addUintVectorToStream(e,t,n){ne(this,t,(r=>{const o=this.i._allocateUintVector(e.length);if(!o)throw Error("Unable to allocate new unsigned int vector on heap.");for(const l of e)this.i._addUintVectorEntry(o,l);this.i._addUintVectorToInputStream(o,r,n)}))}addStringVectorToStream(e,t,n){ne(this,t,(r=>{const o=this.i._allocateStringVector(e.length);if(!o)throw Error("Unable to allocate new string vector on heap.");for(const l of e)ne(this,l,(u=>{this.i._addStringVectorEntry(o,u)}));this.i._addStringVectorToInputStream(o,r,n)}))}addBoolToInputSidePacket(e,t){ne(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){ne(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){ne(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){ne(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){ne(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){ne(this,t,(n=>{ne(this,e,(r=>{this.i._addStringToInputSidePacket(r,n)}))}))}addProtoToInputSidePacket(e,t,n){ne(this,n,(r=>{ne(this,t,(o=>{const l=this.i._malloc(e.length);this.i.HEAPU8.set(e,l),this.i._addProtoToInputSidePacket(l,e.length,o,r),this.i._free(l)}))}))}addBoolVectorToInputSidePacket(e,t){ne(this,t,(n=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const o of e)this.i._addBoolVectorEntry(r,o);this.i._addBoolVectorToInputSidePacket(r,n)}))}addDoubleVectorToInputSidePacket(e,t){ne(this,t,(n=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const o of e)this.i._addDoubleVectorEntry(r,o);this.i._addDoubleVectorToInputSidePacket(r,n)}))}addFloatVectorToInputSidePacket(e,t){ne(this,t,(n=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const o of e)this.i._addFloatVectorEntry(r,o);this.i._addFloatVectorToInputSidePacket(r,n)}))}addIntVectorToInputSidePacket(e,t){ne(this,t,(n=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const o of e)this.i._addIntVectorEntry(r,o);this.i._addIntVectorToInputSidePacket(r,n)}))}addUintVectorToInputSidePacket(e,t){ne(this,t,(n=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const o of e)this.i._addUintVectorEntry(r,o);this.i._addUintVectorToInputSidePacket(r,n)}))}addStringVectorToInputSidePacket(e,t){ne(this,t,(n=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const o of e)ne(this,o,(l=>{this.i._addStringVectorEntry(r,l)}));this.i._addStringVectorToInputSidePacket(r,n)}))}attachBoolListener(e,t){Ka(this,e,t),ne(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){bs(this,e,t),ne(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Ka(this,e,t),ne(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){bs(this,e,t),ne(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Ka(this,e,t),ne(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){bs(this,e,t),ne(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Ka(this,e,t),ne(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){bs(this,e,t),ne(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Ka(this,e,t),ne(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){bs(this,e,t),ne(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Ka(this,e,t),ne(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){bs(this,e,t),ne(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Ka(this,e,t),ne(this,e,(r=>{this.i._attachProtoListener(r,n||!1)}))}attachProtoVectorListener(e,t,n){bs(this,e,t),ne(this,e,(r=>{this.i._attachProtoVectorListener(r,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Ka(this,e,((r,o)=>{r=new Float32Array(r.buffer,r.byteOffset,r.length/4),t(r,o)})),ne(this,e,(r=>{this.i._attachAudioListener(r,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends MS{get ea(){return this.i}oa(e,t,n){ne(this,t,(r=>{const[o,l]=pS(this,e,r);this.ea._addBoundTextureAsImageToStream(r,o,l,n)}))}V(e,t){Ka(this,e,t),ne(this,e,(n=>{this.ea._attachImageListener(n)}))}ba(e,t){bs(this,e,t),ne(this,e,(n=>{this.ea._attachImageVectorListener(n)}))}}));var MS,Ta=class extends a6{};async function De(e,t,n){return(async function(r,o,l,u){return n6(r,o,l,u)})(e,n.canvas??(ob()?void 0:document.createElement("canvas")),t,n)}function db(e,t,n,r){if(e.U){const l=new FE;if(n!=null&&n.regionOfInterest){if(!e.na)throw Error("This task doesn't support region-of-interest.");var o=n.regionOfInterest;if(o.left>=o.right||o.top>=o.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(o.left<0||o.top<0||o.right>1||o.bottom>1)throw Error("Expected RectF values to be in [0,1].");$t(l,1,(o.left+o.right)/2),$t(l,2,(o.top+o.bottom)/2),$t(l,4,o.right-o.left),$t(l,3,o.bottom-o.top)}else $t(l,1,.5),$t(l,2,.5),$t(l,4,1),$t(l,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if($t(l,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[u,f]=lb(t);n=Dn(l,3)*f/u,o=Dn(l,4)*u/f,$t(l,4,n),$t(l,3,o)}}e.g.addProtoToStream(l.g(),"mediapipe.NormalizedRect",e.U,r)}e.g.oa(t,e.Z,r??performance.now()),e.finishProcessing()}function Aa(e,t,n){var r;if((r=e.baseOptions)!=null&&r.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");db(e,t,n,e.B+1)}function lr(e,t,n,r){var o;if(!((o=e.baseOptions)!=null&&o.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");db(e,t,n,r)}function ec(e,t,n,r){var o=t.data;const l=t.width,u=l*(t=t.height);if((o instanceof Uint8Array||o instanceof Float32Array)&&o.length!==u)throw Error("Unsupported channel count: "+o.length/u);return e=new Qn([o],n,!1,e.g.i.canvas,e.P,l,t),r?e.clone():e}var Fi=class extends a1{constructor(e,t,n,r){super(e),this.g=e,this.Z=t,this.U=n,this.na=r,this.P=new R_}l(e,t=!0){if("runningMode"in e&&Hu(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Fi.prototype.close=Fi.prototype.close;var ma=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},re(e=this.h=new Fd,0,1,t=new yn),$t(this.h,2,.5),$t(this.h,3,.3)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&$t(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&$t(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},Aa(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},lr(this,e,n,t),this.j}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect_in"),He(e,"detections");const t=new ta;Ga(t,VL,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect_in"),Le(n,"DETECTIONS:detections"),n.o(t),ia(e,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const l of r)r=NE(l),this.j.detections.push(rb(r));kt(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ma.prototype.detectForVideo=ma.prototype.F,ma.prototype.detect=ma.prototype.D,ma.prototype.setOptions=ma.prototype.o,ma.createFromModelPath=async function(e,t){return De(ma,e,{baseOptions:{modelAssetPath:t}})},ma.createFromModelBuffer=function(e,t){return De(ma,e,{baseOptions:{modelAssetBuffer:t}})},ma.createFromOptions=function(e,t){return De(ma,e,t)};var D_=ka([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),U_=ka([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),L_=ka([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),pb=ka([474,475],[475,476],[476,477],[477,474]),N_=ka([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),O_=ka([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),mb=ka([469,470],[470,471],[471,472],[472,469]),P_=ka([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),gb=[...D_,...U_,...L_,...N_,...O_,...P_],_b=ka([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function ES(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Tn=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,re(e=this.h=new HE,0,1,t=new yn),this.v=new GE,re(this.h,0,3,this.v),this.s=new Fd,re(this.h,0,2,this.s),or(this.s,4,1),$t(this.s,2,.5),$t(this.v,2,.5),$t(this.h,4,.5)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return"numFaces"in e&&or(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&$t(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&$t(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&$t(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return ES(this),Aa(this,e,t),this.j}F(e,t,n){return ES(this),lr(this,e,n,t),this.j}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect"),He(e,"face_landmarks");const t=new ta;Ga(t,XL,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),Le(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),ia(e,n),this.g.attachProtoVectorListener("face_landmarks",((r,o)=>{for(const l of r)r=Yu(l),this.j.faceLandmarks.push(Id(r));kt(this,o)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{kt(this,r)})),this.outputFaceBlendshapes&&(He(e,"blendshapes"),Le(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((r,o)=>{if(this.outputFaceBlendshapes)for(const l of r)r=Pd(l),this.j.faceBlendshapes.push(b_(r.g()??[]));kt(this,o)})),this.g.attachEmptyPacketListener("blendshapes",(r=>{kt(this,r)}))),this.outputFacialTransformationMatrixes&&(He(e,"face_geometry"),Le(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((r,o)=>{if(this.outputFacialTransformationMatrixes)for(const l of r)(r=Fe(kL(l),OL,2))&&this.j.facialTransformationMatrixes.push({rows:Ea(r,1)??0??0,columns:Ea(r,2)??0??0,data:xo(r,3,Bs,vo()).slice()??[]});kt(this,o)})),this.g.attachEmptyPacketListener("face_geometry",(r=>{kt(this,r)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Tn.prototype.detectForVideo=Tn.prototype.F,Tn.prototype.detect=Tn.prototype.D,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(e,t){return De(Tn,e,{baseOptions:{modelAssetPath:t}})},Tn.createFromModelBuffer=function(e,t){return De(Tn,e,{baseOptions:{modelAssetBuffer:t}})},Tn.createFromOptions=function(e,t){return De(Tn,e,t)},Tn.FACE_LANDMARKS_LIPS=D_,Tn.FACE_LANDMARKS_LEFT_EYE=U_,Tn.FACE_LANDMARKS_LEFT_EYEBROW=L_,Tn.FACE_LANDMARKS_LEFT_IRIS=pb,Tn.FACE_LANDMARKS_RIGHT_EYE=N_,Tn.FACE_LANDMARKS_RIGHT_EYEBROW=O_,Tn.FACE_LANDMARKS_RIGHT_IRIS=mb,Tn.FACE_LANDMARKS_FACE_OVAL=P_,Tn.FACE_LANDMARKS_CONTOURS=gb,Tn.FACE_LANDMARKS_TESSELATION=_b;var Qa=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!0),re(e=this.j=new kE,0,1,t=new yn)}get baseOptions(){return Fe(this.j,yn,1)}set baseOptions(e){re(this.j,0,1,e)}o(e){return super.l(e)}Ka(e,t,n){const r=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,Aa(this,e,r??{}),!this.h)return this.s}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect"),He(e,"stylized_image");const t=new ta;Ga(t,WL,this.j);const n=new Mi;na(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),Le(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),ia(e,n),this.g.V("stylized_image",((r,o)=>{var l=!this.h,u=r.data,f=r.width;const p=f*(r=r.height);if(u instanceof Uint8Array)if(u.length===3*p){const m=new Uint8ClampedArray(4*p);for(let g=0;g<p;++g)m[4*g]=u[3*g],m[4*g+1]=u[3*g+1],m[4*g+2]=u[3*g+2],m[4*g+3]=255;u=new ImageData(m,f,r)}else{if(u.length!==4*p)throw Error("Unsupported channel count: "+u.length/p);u=new ImageData(new Uint8ClampedArray(u.buffer,u.byteOffset,u.length),f,r)}else if(!(u instanceof WebGLTexture))throw Error(`Unsupported format: ${u.constructor.name}`);f=new Jn([u],!1,!1,this.g.i.canvas,this.P,f,r),this.s=l=l?f.clone():f,this.h&&this.h(l),kt(this,o)})),this.g.attachEmptyPacketListener("stylized_image",(r=>{this.s=null,this.h&&this.h(null),kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Qa.prototype.stylize=Qa.prototype.Ka,Qa.prototype.setOptions=Qa.prototype.o,Qa.createFromModelPath=function(e,t){return De(Qa,e,{baseOptions:{modelAssetPath:t}})},Qa.createFromModelBuffer=function(e,t){return De(Qa,e,{baseOptions:{modelAssetBuffer:t}})},Qa.createFromOptions=function(e,t){return De(Qa,e,t)};var F_=ka([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function bS(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function TS(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function AS(e,t=!0){const n=[];for(const o of e){var r=Pd(o);e=[];for(const l of r.g())r=t&&Ea(l,1)!=null?Ea(l,1)??0:-1,e.push({score:Dn(l,2)??0,index:r,categoryName:ba(l,3)??""??"",displayName:ba(l,4)??""??""});n.push(e)}return n}var Yi=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],re(e=this.j=new qE,0,1,t=new yn),this.s=new y_,re(this.j,0,2,this.s),this.C=new x_,re(this.s,0,3,this.C),this.v=new WE,re(this.s,0,2,this.v),this.h=new qL,re(this.j,0,3,this.h),$t(this.v,2,.5),$t(this.s,4,.5),$t(this.C,2,.5)}get baseOptions(){return Fe(this.j,yn,1)}set baseOptions(e){re(this.j,0,1,e)}o(e){var o,l,u,f;if(or(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&$t(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&$t(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&$t(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Dl,n=t,r=i1(e.cannedGesturesClassifierOptions,(o=Fe(this.h,Dl,3))==null?void 0:o.h());re(n,0,2,r),re(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((l=Fe(this.h,Dl,3))==null||l.g());return e.customGesturesClassifierOptions?(re(n=t=new Dl,0,2,r=i1(e.customGesturesClassifierOptions,(u=Fe(this.h,Dl,4))==null?void 0:u.h())),re(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((f=Fe(this.h,Dl,4))==null||f.g()),this.l(e)}Fa(e,t){return bS(this),Aa(this,e,t),TS(this)}Ga(e,t,n){return bS(this),lr(this,e,n,t),TS(this)}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect"),He(e,"hand_gestures"),He(e,"hand_landmarks"),He(e,"world_hand_landmarks"),He(e,"handedness");const t=new ta;Ga(t,YL,this.j);const n=new Mi;na(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),Le(n,"HAND_GESTURES:hand_gestures"),Le(n,"LANDMARKS:hand_landmarks"),Le(n,"WORLD_LANDMARKS:world_hand_landmarks"),Le(n,"HANDEDNESS:handedness"),n.o(t),ia(e,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const l of r){r=Yu(l);const u=[];for(const f of Vr(r,PE,1))u.push({x:Dn(f,1)??0,y:Dn(f,2)??0,z:Dn(f,3)??0,visibility:Dn(f,4)??0});this.landmarks.push(u)}kt(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{kt(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const l of r){r=Bl(l);const u=[];for(const f of Vr(r,OE,1))u.push({x:Dn(f,1)??0,y:Dn(f,2)??0,z:Dn(f,3)??0,visibility:Dn(f,4)??0});this.worldLandmarks.push(u)}kt(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{kt(this,r)})),this.g.attachProtoVectorListener("hand_gestures",((r,o)=>{this.gestures.push(...AS(r,!1)),kt(this,o)})),this.g.attachEmptyPacketListener("hand_gestures",(r=>{kt(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{this.handedness.push(...AS(r)),kt(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function wS(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Yi.prototype.recognizeForVideo=Yi.prototype.Ga,Yi.prototype.recognize=Yi.prototype.Fa,Yi.prototype.setOptions=Yi.prototype.o,Yi.createFromModelPath=function(e,t){return De(Yi,e,{baseOptions:{modelAssetPath:t}})},Yi.createFromModelBuffer=function(e,t){return De(Yi,e,{baseOptions:{modelAssetBuffer:t}})},Yi.createFromOptions=function(e,t){return De(Yi,e,t)},Yi.HAND_CONNECTIONS=F_;var Li=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],re(e=this.h=new y_,0,1,t=new yn),this.s=new x_,re(this.h,0,3,this.s),this.j=new WE,re(this.h,0,2,this.j),or(this.j,3,1),$t(this.j,2,.5),$t(this.s,2,.5),$t(this.h,4,.5)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return"numHands"in e&&or(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&$t(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&$t(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&$t(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Aa(this,e,t),wS(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],lr(this,e,n,t),wS(this)}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect"),He(e,"hand_landmarks"),He(e,"world_hand_landmarks"),He(e,"handedness");const t=new ta;Ga(t,jL,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),Le(n,"LANDMARKS:hand_landmarks"),Le(n,"WORLD_LANDMARKS:world_hand_landmarks"),Le(n,"HANDEDNESS:handedness"),n.o(t),ia(e,n),this.g.attachProtoVectorListener("hand_landmarks",((r,o)=>{for(const l of r)r=Yu(l),this.landmarks.push(Id(r));kt(this,o)})),this.g.attachEmptyPacketListener("hand_landmarks",(r=>{kt(this,r)})),this.g.attachProtoVectorListener("world_hand_landmarks",((r,o)=>{for(const l of r)r=Bl(l),this.worldLandmarks.push(Uu(r));kt(this,o)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(r=>{kt(this,r)})),this.g.attachProtoVectorListener("handedness",((r,o)=>{var l=this.handedness,u=l.push;const f=[];for(const p of r){r=Pd(p);const m=[];for(const g of r.g())m.push({score:Dn(g,2)??0,index:Ea(g,1)??0??-1,categoryName:ba(g,3)??""??"",displayName:ba(g,4)??""??""});f.push(m)}u.call(l,...f),kt(this,o)})),this.g.attachEmptyPacketListener("handedness",(r=>{kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Li.prototype.detectForVideo=Li.prototype.F,Li.prototype.detect=Li.prototype.D,Li.prototype.setOptions=Li.prototype.o,Li.createFromModelPath=function(e,t){return De(Li,e,{baseOptions:{modelAssetPath:t}})},Li.createFromModelBuffer=function(e,t){return De(Li,e,{baseOptions:{modelAssetBuffer:t}})},Li.createFromOptions=function(e,t){return De(Li,e,t)},Li.HAND_CONNECTIONS=F_;var vb=ka([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function RS(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function CS(e){try{if(!e.C)return e.h;e.C(e.h)}finally{zd(e)}}function Bh(e,t){e=Yu(e),t.push(Id(e))}var vn=class extends Fi{constructor(e,t){super(new Ta(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,re(e=this.j=new QE,0,1,t=new yn),this.K=new x_,re(this.j,0,2,this.K),this.Y=new ZL,re(this.j,0,3,this.Y),this.s=new Fd,re(this.j,0,4,this.s),this.H=new GE,re(this.j,0,5,this.H),this.v=new ZE,re(this.j,0,6,this.v),this.L=new KE,re(this.j,0,7,this.L),$t(this.s,2,.5),$t(this.s,3,.3),$t(this.H,2,.5),$t(this.v,2,.5),$t(this.v,3,.3),$t(this.L,2,.5),$t(this.K,2,.5)}get baseOptions(){return Fe(this.j,yn,1)}set baseOptions(e){re(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&$t(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&$t(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&$t(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&$t(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&$t(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&$t(this.L,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&$t(this.K,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){const r=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,RS(this),Aa(this,e,r),CS(this)}F(e,t,n,r){const o=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:r,RS(this),lr(this,e,o,t),CS(this)}m(){var e=new Ii;pn(e,"input_frames_image"),He(e,"pose_landmarks"),He(e,"pose_world_landmarks"),He(e,"face_landmarks"),He(e,"left_hand_landmarks"),He(e,"left_hand_world_landmarks"),He(e,"right_hand_landmarks"),He(e,"right_hand_world_landmarks");const t=new ta,n=new Jy;Qg(n,1,uc("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(o,l){if(l!=null)if(Array.isArray(l))cn(o,2,Md(l,j1,void 0,void 0,!1));else{if(!(typeof l=="string"||l instanceof Ir||Eo(l)))throw Error("invalid value in Any.value field: "+l+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Qg(o,2,G1(l,!1),bo())}})(n,this.j.g());const r=new Mi;na(r,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),ad(r,8,Jy,n),fn(r,"IMAGE:input_frames_image"),Le(r,"POSE_LANDMARKS:pose_landmarks"),Le(r,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Le(r,"FACE_LANDMARKS:face_landmarks"),Le(r,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Le(r,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Le(r,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Le(r,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),r.o(t),ia(e,r),Bd(this,e),this.g.attachProtoListener("pose_landmarks",((o,l)=>{Bh(o,this.h.poseLandmarks),kt(this,l)})),this.g.attachEmptyPacketListener("pose_landmarks",(o=>{kt(this,o)})),this.g.attachProtoListener("pose_world_landmarks",((o,l)=>{var u=this.h.poseWorldLandmarks;o=Bl(o),u.push(Uu(o)),kt(this,l)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(o=>{kt(this,o)})),this.outputPoseSegmentationMasks&&(Le(r,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Jl(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((o,l)=>{this.h.poseSegmentationMasks=[ec(this,o,!0,!this.C)],kt(this,l)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(o=>{this.h.poseSegmentationMasks=[],kt(this,o)}))),this.g.attachProtoListener("face_landmarks",((o,l)=>{Bh(o,this.h.faceLandmarks),kt(this,l)})),this.g.attachEmptyPacketListener("face_landmarks",(o=>{kt(this,o)})),this.outputFaceBlendshapes&&(He(e,"extra_blendshapes"),Le(r,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((o,l)=>{var u=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(o=Pd(o),u.push(b_(o.g()??[]))),kt(this,l)})),this.g.attachEmptyPacketListener("extra_blendshapes",(o=>{kt(this,o)}))),this.g.attachProtoListener("left_hand_landmarks",((o,l)=>{Bh(o,this.h.leftHandLandmarks),kt(this,l)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(o=>{kt(this,o)})),this.g.attachProtoListener("left_hand_world_landmarks",((o,l)=>{var u=this.h.leftHandWorldLandmarks;o=Bl(o),u.push(Uu(o)),kt(this,l)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(o=>{kt(this,o)})),this.g.attachProtoListener("right_hand_landmarks",((o,l)=>{Bh(o,this.h.rightHandLandmarks),kt(this,l)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(o=>{kt(this,o)})),this.g.attachProtoListener("right_hand_world_landmarks",((o,l)=>{var u=this.h.rightHandWorldLandmarks;o=Bl(o),u.push(Uu(o)),kt(this,l)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(o=>{kt(this,o)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};vn.prototype.detectForVideo=vn.prototype.F,vn.prototype.detect=vn.prototype.D,vn.prototype.setOptions=vn.prototype.o,vn.createFromModelPath=function(e,t){return De(vn,e,{baseOptions:{modelAssetPath:t}})},vn.createFromModelBuffer=function(e,t){return De(vn,e,{baseOptions:{modelAssetBuffer:t}})},vn.createFromOptions=function(e,t){return De(vn,e,t)},vn.HAND_CONNECTIONS=F_,vn.POSE_CONNECTIONS=vb,vn.FACE_LANDMARKS_LIPS=D_,vn.FACE_LANDMARKS_LEFT_EYE=U_,vn.FACE_LANDMARKS_LEFT_EYEBROW=L_,vn.FACE_LANDMARKS_LEFT_IRIS=pb,vn.FACE_LANDMARKS_RIGHT_EYE=N_,vn.FACE_LANDMARKS_RIGHT_EYEBROW=O_,vn.FACE_LANDMARKS_RIGHT_IRIS=mb,vn.FACE_LANDMARKS_FACE_OVAL=P_,vn.FACE_LANDMARKS_CONTOURS=gb,vn.FACE_LANDMARKS_TESSELATION=_b;var ga=class extends Fi{constructor(e,t){super(new Ta(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},re(e=this.h=new JE,0,1,t=new yn)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return re(this.h,0,2,i1(e,Fe(this.h,g_,2))),this.l(e)}qa(e,t){return this.j={classifications:[]},Aa(this,e,t),this.j}ra(e,t,n){return this.j={classifications:[]},lr(this,e,n,t),this.j}m(){var e=new Ii;pn(e,"input_image"),pn(e,"norm_rect"),He(e,"classifications");const t=new ta;Ga(t,KL,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),fn(n,"IMAGE:input_image"),fn(n,"NORM_RECT:norm_rect"),Le(n,"CLASSIFICATIONS:classifications"),n.o(t),ia(e,n),this.g.attachProtoListener("classifications",((r,o)=>{this.j=(function(l){const u={classifications:Vr(l,FL,1).map((f=>{var p;return b_(((p=Fe(f,UE,4))==null?void 0:p.g())??[],Ea(f,2)??0,ba(f,3)??"")}))};return jg(Kl(l,2))!=null&&(u.timestampMs=jg(Kl(l,2))??0),u})(IL(r)),kt(this,o)})),this.g.attachEmptyPacketListener("classifications",(r=>{kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ga.prototype.classifyForVideo=ga.prototype.ra,ga.prototype.classify=ga.prototype.qa,ga.prototype.setOptions=ga.prototype.o,ga.createFromModelPath=function(e,t){return De(ga,e,{baseOptions:{modelAssetPath:t}})},ga.createFromModelBuffer=function(e,t){return De(ga,e,{baseOptions:{modelAssetBuffer:t}})},ga.createFromOptions=function(e,t){return De(ga,e,t)};var ji=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!0),this.h=new $E,this.embeddings={embeddings:[]},re(e=this.h,0,1,t=new yn)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){var t=this.h,n=Fe(this.h,oS,2);return n=n?n.clone():new oS,e.l2Normalize!==void 0?Hu(n,1,e.l2Normalize):"l2Normalize"in e&&cn(n,1),e.quantize!==void 0?Hu(n,2,e.quantize):"quantize"in e&&cn(n,2),re(t,0,2,n),this.l(e)}xa(e,t){return Aa(this,e,t),this.embeddings}ya(e,t,n){return lr(this,e,n,t),this.embeddings}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect"),He(e,"embeddings_out");const t=new ta;Ga(t,QL,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),Le(n,"EMBEDDINGS:embeddings_out"),n.o(t),ia(e,n),this.g.attachProtoListener("embeddings_out",((r,o)=>{r=GL(r),this.embeddings=(function(l){return{embeddings:Vr(l,zL,1).map((u=>{var p,m;const f={headIndex:Ea(u,3)??0??-1,headName:ba(u,4)??""??""};if(QM(u,sS,G0(u,1))!==void 0)u=xo(u=Fe(u,sS,G0(u,1)),1,Bs,vo()),f.floatEmbedding=u.slice();else{const g=new Uint8Array(0);f.quantizedEmbedding=((m=(p=Fe(u,BL,G0(u,2)))==null?void 0:p.ma())==null?void 0:m.h())??g}return f})),timestampMs:jg(Kl(l,2))??0}})(r),kt(this,o)})),this.g.attachEmptyPacketListener("embeddings_out",(r=>{kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ji.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=hS(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=hS(fS(e.quantizedEmbedding),fS(t.quantizedEmbedding))}return e},ji.prototype.embedForVideo=ji.prototype.ya,ji.prototype.embed=ji.prototype.xa,ji.prototype.setOptions=ji.prototype.o,ji.createFromModelPath=function(e,t){return De(ji,e,{baseOptions:{modelAssetPath:t}})},ji.createFromModelBuffer=function(e,t){return De(ji,e,{baseOptions:{modelAssetBuffer:t}})},ji.createFromOptions=function(e,t){return De(ji,e,t)};var o1=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};function DS(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function US(e){try{const t=new o1(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{zd(e)}}o1.prototype.close=o1.prototype.close;var Ui=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new E_,this.v=new tb,re(this.h,0,3,this.v),re(e=this.h,0,1,t=new yn)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?cn(this.h,2,uc(e.displayNamesLocale)):"displayNamesLocale"in e&&cn(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}J(){(function(e){var n,r;const t=Vr(e.ca(),Mi,1).filter((o=>(ba(o,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((r=(n=Fe(t[0],ta,7))==null?void 0:n.l())==null?void 0:r.g())??new Map).forEach(((o,l)=>{e.s[Number(l)]=ba(o,1)??""}))})(this)}segment(e,t,n){const r=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,DS(this),Aa(this,e,r),US(this)}Ia(e,t,n,r){const o=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:r,DS(this),lr(this,e,o,t),US(this)}Ba(){return this.s}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect");const t=new ta;Ga(t,nb,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),n.o(t),ia(e,n),Bd(this,e),this.outputConfidenceMasks&&(He(e,"confidence_masks"),Le(n,"CONFIDENCE_MASKS:confidence_masks"),Jl(this,"confidence_masks"),this.g.ba("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((l=>ec(this,l,!0,!this.j))),kt(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],kt(this,r)}))),this.outputCategoryMask&&(He(e,"category_mask"),Le(n,"CATEGORY_MASK:category_mask"),Jl(this,"category_mask"),this.g.V("category_mask",((r,o)=>{this.categoryMask=ec(this,r,!1,!this.j),kt(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,kt(this,r)}))),He(e,"quality_scores"),Le(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,kt(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ui.prototype.getLabels=Ui.prototype.Ba,Ui.prototype.segmentForVideo=Ui.prototype.Ia,Ui.prototype.segment=Ui.prototype.segment,Ui.prototype.setOptions=Ui.prototype.o,Ui.createFromModelPath=function(e,t){return De(Ui,e,{baseOptions:{modelAssetPath:t}})},Ui.createFromModelBuffer=function(e,t){return De(Ui,e,{baseOptions:{modelAssetBuffer:t}})},Ui.createFromOptions=function(e,t){return De(Ui,e,t)};var l1=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach((n=>{n.close()})),(t=this.categoryMask)==null||t.close()}};l1.prototype.close=l1.prototype.close;var r6=class extends Qt{constructor(e){super(e)}},Ul=[0,wn,-2],ld=[0,Lr,-3,xn,Lr,-1],LS=[0,ld],NS=[0,ld,wn,-1],q0=class extends Qt{constructor(e){super(e)}},OS=[0,Lr,-1,xn],s6=class extends Qt{constructor(e){super(e)}},PS=class extends Qt{constructor(e){super(e)}},c1=[1,2,3,4,5,6,7,8,9,10,14,15],xb=class extends Qt{constructor(e){super(e)}};xb.prototype.g=Od([0,Wn,[0,c1,Ye,ld,Ye,[0,ld,Ul],Ye,LS,Ye,[0,LS,Ul],Ye,OS,Ye,[0,Lr,-3,xn,Ji],Ye,[0,Lr,-3,xn],Ye,[0,je,Lr,-2,xn,wn,xn,-1,2,Lr,Ul],Ye,NS,Ye,[0,NS,Ul],Lr,Ul,je,Ye,[0,Lr,-3,xn,Ul,-1],Ye,[0,Wn,OS]],je,[0,je,wn,-1,xn]]);var Ja=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new E_,this.s=new tb,re(this.h,0,3,this.s),re(e=this.h,0,1,t=new yn)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,r){const o=typeof n!="function"?n:{};this.j=typeof n=="function"?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,r=new xb;const l=new PS;var u=new r6;if(or(u,1,255),re(l,0,12,u),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var f=new q0;Hu(f,3,!0),$t(f,1,t.keypoint.x),$t(f,2,t.keypoint.y),Cu(l,5,c1,f)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(f of(u=new s6,t.scribble))Hu(t=new q0,3,!0),$t(t,1,f.x),$t(t,2,f.y),ad(u,1,q0,t);Cu(l,15,c1,u)}ad(r,1,PS,l),this.g.addProtoToStream(r.g(),"drishti.RenderData","roi_in",n),Aa(this,e,o);t:{try{const m=new l1(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var p=m;break t}this.j(m)}finally{zd(this)}p=void 0}return p}m(){var e=new Ii;pn(e,"image_in"),pn(e,"roi_in"),pn(e,"norm_rect_in");const t=new ta;Ga(t,nb,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),fn(n,"IMAGE:image_in"),fn(n,"ROI:roi_in"),fn(n,"NORM_RECT:norm_rect_in"),n.o(t),ia(e,n),Bd(this,e),this.outputConfidenceMasks&&(He(e,"confidence_masks"),Le(n,"CONFIDENCE_MASKS:confidence_masks"),Jl(this,"confidence_masks"),this.g.ba("confidence_masks",((r,o)=>{this.confidenceMasks=r.map((l=>ec(this,l,!0,!this.j))),kt(this,o)})),this.g.attachEmptyPacketListener("confidence_masks",(r=>{this.confidenceMasks=[],kt(this,r)}))),this.outputCategoryMask&&(He(e,"category_mask"),Le(n,"CATEGORY_MASK:category_mask"),Jl(this,"category_mask"),this.g.V("category_mask",((r,o)=>{this.categoryMask=ec(this,r,!1,!this.j),kt(this,o)})),this.g.attachEmptyPacketListener("category_mask",(r=>{this.categoryMask=void 0,kt(this,r)}))),He(e,"quality_scores"),Le(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((r,o)=>{this.qualityScores=r,kt(this,o)})),this.g.attachEmptyPacketListener("quality_scores",(r=>{this.categoryMask=void 0,kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ja.prototype.segment=Ja.prototype.segment,Ja.prototype.setOptions=Ja.prototype.o,Ja.createFromModelPath=function(e,t){return De(Ja,e,{baseOptions:{modelAssetPath:t}})},Ja.createFromModelBuffer=function(e,t){return De(Ja,e,{baseOptions:{modelAssetBuffer:t}})},Ja.createFromOptions=function(e,t){return De(Ja,e,t)};var _a=class extends Fi{constructor(e,t){super(new Ta(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},re(e=this.h=new ib,0,1,t=new yn)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?cn(this.h,2,uc(e.displayNamesLocale)):"displayNamesLocale"in e&&cn(this.h,2),e.maxResults!==void 0?or(this.h,3,e.maxResults):"maxResults"in e&&cn(this.h,3),e.scoreThreshold!==void 0?$t(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&cn(this.h,4),e.categoryAllowlist!==void 0?rd(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&cn(this.h,5),e.categoryDenylist!==void 0?rd(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&cn(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},Aa(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},lr(this,e,n,t),this.j}m(){var e=new Ii;pn(e,"input_frame_gpu"),pn(e,"norm_rect"),He(e,"detections");const t=new ta;Ga(t,$L,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),fn(n,"IMAGE:input_frame_gpu"),fn(n,"NORM_RECT:norm_rect"),Le(n,"DETECTIONS:detections"),n.o(t),ia(e,n),this.g.attachProtoVectorListener("detections",((r,o)=>{for(const l of r)r=NE(l),this.j.detections.push(rb(r));kt(this,o)})),this.g.attachEmptyPacketListener("detections",(r=>{kt(this,r)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};_a.prototype.detectForVideo=_a.prototype.F,_a.prototype.detect=_a.prototype.D,_a.prototype.setOptions=_a.prototype.o,_a.createFromModelPath=async function(e,t){return De(_a,e,{baseOptions:{modelAssetPath:t}})},_a.createFromModelBuffer=function(e,t){return De(_a,e,{baseOptions:{modelAssetBuffer:t}})},_a.createFromOptions=function(e,t){return De(_a,e,t)};var u1=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach((t=>{t.close()}))}};function FS(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function IS(e){try{const t=new u1(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{zd(e)}}u1.prototype.close=u1.prototype.close;var Zi=class extends Fi{constructor(e,t){super(new Ta(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,re(e=this.h=new ab,0,1,t=new yn),this.v=new KE,re(this.h,0,3,this.v),this.j=new ZE,re(this.h,0,2,this.j),or(this.j,4,1),$t(this.j,2,.5),$t(this.v,2,.5),$t(this.h,4,.5)}get baseOptions(){return Fe(this.h,yn,1)}set baseOptions(e){re(this.h,0,1,e)}o(e){return"numPoses"in e&&or(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&$t(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&$t(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&$t(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){const r=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,FS(this),Aa(this,e,r),IS(this)}F(e,t,n,r){const o=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:r,FS(this),lr(this,e,o,t),IS(this)}m(){var e=new Ii;pn(e,"image_in"),pn(e,"norm_rect"),He(e,"normalized_landmarks"),He(e,"world_landmarks"),He(e,"segmentation_masks");const t=new ta;Ga(t,t6,this.h);const n=new Mi;na(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),fn(n,"IMAGE:image_in"),fn(n,"NORM_RECT:norm_rect"),Le(n,"NORM_LANDMARKS:normalized_landmarks"),Le(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),ia(e,n),Bd(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((r,o)=>{this.landmarks=[];for(const l of r)r=Yu(l),this.landmarks.push(Id(r));kt(this,o)})),this.g.attachEmptyPacketListener("normalized_landmarks",(r=>{this.landmarks=[],kt(this,r)})),this.g.attachProtoVectorListener("world_landmarks",((r,o)=>{this.worldLandmarks=[];for(const l of r)r=Bl(l),this.worldLandmarks.push(Uu(r));kt(this,o)})),this.g.attachEmptyPacketListener("world_landmarks",(r=>{this.worldLandmarks=[],kt(this,r)})),this.outputSegmentationMasks&&(Le(n,"SEGMENTATION_MASK:segmentation_masks"),Jl(this,"segmentation_masks"),this.g.ba("segmentation_masks",((r,o)=>{this.segmentationMasks=r.map((l=>ec(this,l,!0,!this.s))),kt(this,o)})),this.g.attachEmptyPacketListener("segmentation_masks",(r=>{this.segmentationMasks=[],kt(this,r)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Zi.prototype.detectForVideo=Zi.prototype.F,Zi.prototype.detect=Zi.prototype.D,Zi.prototype.setOptions=Zi.prototype.o,Zi.createFromModelPath=function(e,t){return De(Zi,e,{baseOptions:{modelAssetPath:t}})},Zi.createFromModelBuffer=function(e,t){return De(Zi,e,{baseOptions:{modelAssetBuffer:t}})},Zi.createFromOptions=function(e,t){return De(Zi,e,t)},Zi.POSE_CONNECTIONS=vb;const o6=({onGestureChange:e,onHandMove:t})=>{const n=sn.useRef(null),[r,o]=sn.useState(!1),l=sn.useRef(null),u=sn.useRef(0);return sn.useEffect(()=>{(async()=>{const p=await ho.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");l.current=await Li.createFromOptions(p,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:1}),o(!0)})()},[]),sn.useEffect(()=>{if(!r||!n.current)return;const f=n.current,p=async()=>{try{const v=await navigator.mediaDevices.getUserMedia({video:!0});f.srcObject=v,f.addEventListener("loadeddata",_)}catch(v){console.error(v)}};let m,g=-1;const _=async()=>{if(f.currentTime!==g&&l.current){g=f.currentTime;const v=performance.now(),S=l.current.detectForVideo(f,v);if(S.landmarks&&S.landmarks.length>0){const b=S.landmarks[0],R=(b[0].x+b[9].x)/2,M=(b[0].y+b[9].y)/2;t(1-R,M);const x=[8,12,16,20].every(C=>b[C].y>b[C-2].y),L=[8,12,16,20].every(C=>b[C].y<b[C-2].y);let U=Pl.UNKNOWN;x?U=Pl.CLOSED_FIST:L&&(U=Pl.OPEN_PALM),Date.now()-u.current>200&&(e(U),u.current=Date.now())}}m=window.requestAnimationFrame(_)};return p(),()=>{cancelAnimationFrame(m),f.srcObject&&f.srcObject.getTracks().forEach(S=>S.stop())}},[r,e,t]),Si.jsx("div",{className:"fixed bottom-0 left-0 w-1 h-1 opacity-0 pointer-events-none overflow-hidden",children:Si.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,muted:!0,className:"w-1 h-1"})})},l6=()=>{const[e,t]=sn.useState(Ia.TREE_FORM),[n,r]=sn.useState(null),o=sn.useCallback(u=>{switch(u){case Pl.CLOSED_FIST:t(Ia.TREE_FORM);break;case Pl.OPEN_PALM:t(Ia.SCATTER_FORM);break}},[]),l=sn.useCallback((u,f)=>{r({x:u,y:f})},[]);return Si.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-[#001a10]",children:[Si.jsx(OU,{appState:e,handPosition:n}),Si.jsx(o6,{onGestureChange:o,onHandMove:l}),Si.jsx("div",{className:"absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none z-10",children:Si.jsx("div",{children:Si.jsx("h1",{className:"text-4xl md:text-6xl font-serif text-[#eebb55] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]",children:"Merry Christmas"})})}),Si.jsx("div",{className:"absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col gap-4 pointer-events-none opacity-50",children:[{id:Ia.TREE_FORM,label:"Tree"},{id:Ia.SCATTER_FORM,label:"Scatter"}].map(u=>Si.jsxs("div",{className:`flex items-center gap-2 transition-all ${e===u.id?"opacity-100 scale-110":"opacity-40"}`,children:[Si.jsx("div",{className:`w-3 h-3 rounded-full ${e===u.id?"bg-[#00ff00] shadow-[0_0_8px_#00ff00]":"bg-[#eebb55]"}`}),Si.jsx("span",{className:"text-[#eebb55] font-serif tracking-widest text-sm",children:u.label})]},u.id))})]})},yb=document.getElementById("root");if(!yb)throw new Error("Could not find root element to mount to");const c6=FA.createRoot(yb);c6.render(Si.jsx(RA.StrictMode,{children:Si.jsx(l6,{})}));
