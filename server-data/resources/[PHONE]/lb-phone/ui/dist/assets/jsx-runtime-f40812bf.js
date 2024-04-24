var se=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function L(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y={},U={get exports(){return y},set exports(e){y=e}},S={},h={},A={get exports(){return h},set exports(e){h=e}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=Symbol.for("react.element"),N=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),$=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,g={};function p(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||O}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P(){}P.prototype=p.prototype;function E(e,t,o){this.props=e,this.context=t,this.refs=g,this.updater=o||O}var R=E.prototype=new P;R.constructor=E;C(R,p.prototype);R.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,j={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function F(e,t,o){var n,u={},s=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)I.call(t,n)&&!T.hasOwnProperty(n)&&(u[n]=t[n]);var c=arguments.length-2;if(c===1)u.children=o;else if(1<c){for(var f=Array(c),a=0;a<c;a++)f[a]=arguments[a+2];u.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)u[n]===void 0&&(u[n]=c[n]);return{$$typeof:d,type:e,key:s,ref:i,props:u,_owner:j.current}}function K(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var x=/\/+/g;function w(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function m(e,t,o,n,u){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case d:case N:i=!0}}if(i)return i=e,u=u(i),e=n===""?"."+w(i,0):n,b(u)?(o="",e!=null&&(o=e.replace(x,"$&/")+"/"),m(u,t,o,"",function(a){return a})):u!=null&&(k(u)&&(u=K(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(x,"$&/")+"/")+e)),t.push(u)),1;if(i=0,n=n===""?".":n+":",b(e))for(var c=0;c<e.length;c++){s=e[c];var f=n+w(s,c);i+=m(s,t,o,f,u)}else if(f=Y(e),typeof f=="function")for(e=f.call(e),c=0;!(s=e.next()).done;)s=s.value,f=n+w(s,c++),i+=m(s,t,o,f,u);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function _(e,t,o){if(e==null)return e;var n=[],u=0;return m(e,n,"","",function(s){return t.call(o,s,u++)}),n}function X(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},v={transition:null},Z={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:v,ReactCurrentOwner:j};r.Children={map:_,forEach:function(e,t,o){_(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=V;r.Profiler=M;r.PureComponent=E;r.StrictMode=q;r.Suspense=W;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z;r.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=C({},e.props),u=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=j.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)I.call(t,f)&&!T.hasOwnProperty(f)&&(n[f]=t[f]===void 0&&c!==void 0?c[f]:t[f])}var f=arguments.length-2;if(f===1)n.children=o;else if(1<f){c=Array(f);for(var a=0;a<f;a++)c[a]=arguments[a+2];n.children=c}return{$$typeof:d,type:e.type,key:u,ref:s,props:n,_owner:i}};r.createContext=function(e){return e={$$typeof:z,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B,_context:e},e.Consumer=e};r.createElement=F;r.createFactory=function(e){var t=F.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:H,render:e}};r.isValidElement=k;r.lazy=function(e){return{$$typeof:J,_payload:{_status:-1,_result:e},_init:X}};r.memo=function(e,t){return{$$typeof:G,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,o){return l.current.useImperativeHandle(e,t,o)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,o){return l.current.useReducer(e,t,o)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,o){return l.current.useSyncExternalStore(e,t,o)};r.useTransition=function(){return l.current.useTransition()};r.version="18.2.0";(function(e){e.exports=r})(A);const ie=L(h);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=h,te=Symbol.for("react.element"),re=Symbol.for("react.fragment"),ne=Object.prototype.hasOwnProperty,oe=ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ue={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,o){var n,u={},s=null,i=null;o!==void 0&&(s=""+o),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)ne.call(t,n)&&!ue.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)u[n]===void 0&&(u[n]=t[n]);return{$$typeof:te,type:e,key:s,ref:i,props:u,_owner:oe.current}}S.Fragment=re;S.jsx=D;S.jsxs=D;(function(e){e.exports=S})(U);const fe=y.Fragment,ce=y.jsx,le=y.jsxs;export{fe as F,ie as R,le as a,se as c,L as g,ce as j,h as r};