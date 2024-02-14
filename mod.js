// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;function t(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var n=t();function i(){return n&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;function u(r,e){return null!=r&&a.call(r,e)}var c="function"==typeof Symbol?Symbol:void 0,f="function"==typeof c?c.toStringTag:"";var l=i()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[f],e=u(r,f);try{r[f]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[f]=t:delete r[f],n}:function(r){return o.call(r)};function s(r){return"[object Arguments]"===l(r)}var p=function(){return s(arguments)}(),g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function b(r){return"number"==typeof r}function v(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function d(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+v(i):v(i)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!b(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===m.call(r.specifier)?m.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function j(r){return"string"==typeof r}var S=Math.abs,O=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,I=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,A=/^(\d+)e/,x=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function N(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!b(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":S(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,V,"$1e"),t=_.call(t,P,"e"),t=_.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,I,"e+0$1"),t=_.call(t,T,"e-0$1"),r.alternate&&(t=_.call(t,k,"$1."),t=_.call(t,A,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):O.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function $(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,i,o,a,u,c,f;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(j(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Y(r){var e,t,n,i;for(t=[],i=0,n=M.exec(r);n;)(e=r.slice(i,M.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),i=M.lastIndex,n=M.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function X(r){return"string"==typeof r}function Z(r){var e,t;if(!X(r))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Y(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return R.apply(null,e)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?y:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var Q=U;function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"string"==typeof r}var tr=String.prototype.valueOf;var nr=i();function ir(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function or(r){return er(r)||ir(r)}function ar(r){return"number"==typeof r}rr(or,"isPrimitive",er),rr(or,"isObject",ir);var ur=Number,cr=ur.prototype.toString;var fr=i();function lr(r){return"object"==typeof r&&(r instanceof ur||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function sr(r){return ar(r)||lr(r)}function pr(r){return r!=r}function gr(r){return ar(r)&&pr(r)}function yr(r){return lr(r)&&pr(r.valueOf())}function br(r){return gr(r)||yr(r)}rr(sr,"isPrimitive",ar),rr(sr,"isObject",lr),rr(br,"isPrimitive",gr),rr(br,"isObject",yr);var vr=Number.POSITIVE_INFINITY,dr=ur.NEGATIVE_INFINITY,hr=Math.floor;function mr(r){return hr(r)===r}function wr(r){return r<vr&&r>dr&&mr(r)}function jr(r){return ar(r)&&wr(r)}function Sr(r){return lr(r)&&wr(r.valueOf())}function Or(r){return jr(r)||Sr(r)}rr(Or,"isPrimitive",jr),rr(Or,"isObject",Sr);var Er=Object.prototype.propertyIsEnumerable;var _r=!Er.call("beep","0");var Ir,Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};Ir=p?s:function(r){return null!==r&&"object"==typeof r&&!Tr(r)&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=4294967295&&u(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=Er.call(r,e))&&_r&&or(r)?!gr(e=+e)&&jr(e)&&e>=0&&e<r.length:t)}(r,"callee")};var kr=Ir,Ar=Array.prototype.slice;var xr=t();var Pr=Object.prototype.toString;var Vr="function"==typeof Symbol?Symbol:void 0,Nr="function"==typeof Vr?Vr.toStringTag:"";var Fr=xr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Pr.call(r);t=r[Nr],e=u(r,Nr);try{r[Nr]=void 0}catch(e){return Pr.call(r)}return n=Pr.call(r),e?r[Nr]=t:delete r[Nr],n}:function(r){return Pr.call(r)};var $r=Array.isArray?Array.isArray:function(r){return"[object Array]"===Fr(r)};function Cr(r){return null!==r&&"object"==typeof r}function Br(r){return"string"==typeof r}rr(Cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!$r(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Cr));var Lr=t();function Gr(){return Lr&&"symbol"==typeof Symbol.toStringTag}var Rr=Object.prototype.toString;var Mr="function"==typeof Symbol?Symbol:void 0,Wr="function"==typeof Mr?Mr.toStringTag:"";var Yr=Gr()?function(r){var e,t,n;if(null==r)return Rr.call(r);t=r[Wr],e=u(r,Wr);try{r[Wr]=void 0}catch(e){return Rr.call(r)}return n=Rr.call(r),e?r[Wr]=t:delete r[Wr],n}:function(r){return Rr.call(r)},Xr=String.prototype.valueOf;var Zr=Gr();function Ur(r){return"object"==typeof r&&(r instanceof String||(Zr?function(r){try{return Xr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Yr(r)))}function Hr(r){return Br(r)||Ur(r)}function zr(r){return"number"==typeof r}rr(Hr,"isPrimitive",Br),rr(Hr,"isObject",Ur);var Dr=Number,qr=Dr.prototype.toString;var Jr=Gr();function Kr(r){return"object"==typeof r&&(r instanceof Dr||(Jr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Yr(r)))}function Qr(r){return zr(r)||Kr(r)}function re(r){return r!=r}function ee(r){return zr(r)&&re(r)}function te(r){return Kr(r)&&re(r.valueOf())}function ne(r){return ee(r)||te(r)}rr(Qr,"isPrimitive",zr),rr(Qr,"isObject",Kr),rr(ne,"isPrimitive",ee),rr(ne,"isObject",te);var ie=Number.POSITIVE_INFINITY,oe=Dr.NEGATIVE_INFINITY,ae=Math.floor;function ue(r){return ae(r)===r}function ce(r){return r<ie&&r>oe&&ue(r)}function fe(r){return zr(r)&&ce(r)}function le(r){return Kr(r)&&ce(r.valueOf())}function se(r){return fe(r)||le(r)}rr(se,"isPrimitive",fe),rr(se,"isObject",le);var pe=Object.prototype.propertyIsEnumerable;var ge=!pe.call("beep","0");function ye(r,e){var t;return null!=r&&(!(t=pe.call(r,e))&&ge&&Hr(r)?!ee(e=+e)&&fe(e)&&e>=0&&e<r.length:t)}var be=ye((function(){}),"prototype"),ve=!ye({toString:null},"toString");function de(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ue(r.length)&&r.length>=0&&r.length<=9007199254740991}function he(r,e,t){var n,i;if(!de(r)&&!Br(r))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!fe(t))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ne(e)){for(;i<n;i++)if(ne(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var me=/./;function we(r){return"boolean"==typeof r}var je=Boolean,Se=Boolean.prototype.toString;var Oe=Gr();function Ee(r){return"object"==typeof r&&(r instanceof je||(Oe?function(r){try{return Se.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Yr(r)))}function _e(r){return we(r)||Ee(r)}function Ie(){return new Function("return this;")()}rr(_e,"isPrimitive",we),rr(_e,"isObject",Ee);var Te="object"==typeof self?self:null,ke="object"==typeof window?window:null,Ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},xe="object"==typeof Ae?Ae:null,Pe="object"==typeof globalThis?globalThis:null;var Ve=function(r){if(arguments.length){if(!we(r))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Ie()}if(Pe)return Pe;if(Te)return Te;if(ke)return ke;if(xe)return xe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ne=Ve.document&&Ve.document.childNodes,Fe=Int8Array;function $e(){return/^\s*function\s*([^(]*)/i}var Ce=/^\s*function\s*([^(]*)/i;function Be(r){var e,t,n,i;if(("Object"===(t=Yr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ce.exec(n.toString()))return e[1]}return Cr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}rr($e,"REGEXP",Ce);var Le="function"==typeof me||"object"==typeof Fe||"function"==typeof Ne?function(r){return Be(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Be(r).toLowerCase():e};function Ge(r){return r.constructor&&r.constructor.prototype===r}var Re=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Me="undefined"==typeof window?void 0:window;var We=function(){var r;if("undefined"===Le(Me))return!1;for(r in Me)try{-1===he(Re,r)&&u(Me,r)&&null!==Me[r]&&"object"===Le(Me[r])&&Ge(Me[r])}catch(r){return!0}return!1}(),Ye="undefined"!=typeof window;var Xe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ze=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return kr(e)?r(Ar.call(e)):r(e)}:r:function(r){var e,t,n,i,o,a,c;if(i=[],kr(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!u(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Cr(r))return i;t=be&&n}for(o in r)t&&"prototype"===o||!u(r,o)||i.push(String(o));if(ve)for(e=function(r){if(!1===Ye&&!We)return Ge(r);try{return Ge(r)}catch(r){return!1}}(r),c=0;c<Xe.length;c++)a=Xe[c],e&&"constructor"===a||!u(r,a)||i.push(String(a));return i};function Ue(r){var e,t,n,i;if(!Cr(r))throw new TypeError(Z("invalid argument. Must provide an object (except null). Value: `%s`.",r));for(n=(e=Ze(r)).length,t=new Array(n),i=0;i<n;i++)t[i]=r[e[i]];return t}export{Ue as default};
//# sourceMappingURL=mod.js.map