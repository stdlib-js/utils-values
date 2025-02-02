// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return Object.keys(Object(e))}var r=void 0!==Object.keys,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&o.call(e,r)}var c,u="function"==typeof Symbol?Symbol:void 0,f="function"==typeof u?u.toStringTag:"",l=n()?function(e){var r,t,n;if(null==e)return i.call(e);t=e[f],r=a(e,f);try{e[f]=void 0}catch(r){return i.call(e)}return n=i.call(e),r?e[f]=t:delete e[f],n}:function(e){return i.call(e)};function s(e){return"[object Arguments]"===l(e)}c=function(){return s(arguments)}();var p=c,g="function"==typeof Object.defineProperty?Object.defineProperty:null,d=Object.defineProperty;function h(e){return"number"==typeof e}function y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function b(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+y(i):y(i)+e,n&&(e="-"+e)),e}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=b(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=b(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===w.call(e.specifier)?w.call(t):v.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,O=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,A=/\.0*e/,V=/(\..*[^0])0*e/;function P(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!h(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":j(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=_.call(t,V,"$1e"),t=_.call(t,A,"e"),t=_.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=_.call(t,O,"e+0$1"),t=_.call(t,T,"e-0$1"),e.alternate&&(t=_.call(t,k,"$1."),t=_.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===E.call(e.specifier)?E.call(t):S.call(t)}function F(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var C=String.fromCharCode,N=Array.isArray;function $(e){return e!=e}function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function B(e){var r,t,n,i,o,a,c,u,f,l,s,p,g;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=R(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):C(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=P(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+F(g):F(g)+l)),a+=n.arg||"",c+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function G(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function W(e){var r,t,n,i;for(t=[],i=0,n=L.exec(e);n;)(r=e.slice(i,L.lastIndex-n[0].length)).length&&t.push(r),t.push(G(n)),i=L.lastIndex,n=L.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function X(e){var r,t;if("string"!=typeof e)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[W(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return B.apply(null,r)}var Y,Z=Object.prototype,M=Z.toString,U=Z.__defineGetter__,H=Z.__defineSetter__,z=Z.__lookupGetter__,D=Z.__lookupSetter__;Y=function(){try{return g({},"x",{}),!0}catch(e){return!1}}()?d:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||D.call(e,r)?(n=e.__proto__,e.__proto__=Z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(e,r,t.get),a&&H&&H.call(e,r,t.set),e};var q=Y;function J(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(e){return"string"==typeof e}var Q=String.prototype.valueOf,ee=n();function re(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object String]"===l(e)))}function te(e){return K(e)||re(e)}function ne(e){return"number"==typeof e}J(te,"isPrimitive",K),J(te,"isObject",re);var ie=Number,oe=ie.prototype.toString,ae=n();function ce(e){return"object"==typeof e&&(e instanceof ie||(ae?function(e){try{return oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===l(e)))}function ue(e){return ne(e)||ce(e)}function fe(e){return e!=e}function le(e){return ne(e)&&fe(e)}function se(e){return ce(e)&&fe(e.valueOf())}function pe(e){return le(e)||se(e)}J(ue,"isPrimitive",ne),J(ue,"isObject",ce),J(pe,"isPrimitive",le),J(pe,"isObject",se);var ge=Number.POSITIVE_INFINITY,de=ie.NEGATIVE_INFINITY,he=Math.floor;function ye(e){return he(e)===e}function be(e){return e<ge&&e>de&&ye(e)}function ve(e){return ne(e)&&be(e)}function we(e){return ce(e)&&be(e.valueOf())}function me(e){return ve(e)||we(e)}J(me,"isPrimitive",ve),J(me,"isObject",we);var je=Object.prototype.propertyIsEnumerable,Se=!je.call("beep","0");function Ee(e,r){var t;return null!=e&&(!(t=je.call(e,r))&&Se&&te(e)?!le(r=+r)&&ve(r)&&r>=0&&r<e.length:t)}var _e=Array.isArray?Array.isArray:function(e){return"[object Array]"===l(e)},Oe=p?s:function(e){return null!==e&&"object"==typeof e&&!_e(e)&&"number"==typeof e.length&&ye(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!Ee(e,"callee")},Te=Array.prototype.slice;function ke(e){return null!==e&&"object"==typeof e}J(ke,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!_e(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ke));var xe=Ee((function(){}),"prototype"),Ie=!Ee({toString:null},"toString"),Ae=9007199254740991;function Ve(e,r,t){var n,i,o;if(!("object"==typeof(o=e)&&null!==o&&"number"==typeof o.length&&ye(o.length)&&o.length>=0&&o.length<=Ae||K(e)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!ve(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(pe(r)){for(;i<n;i++)if(pe(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var Pe=/./;function Fe(e){return"boolean"==typeof e}var Ce=Boolean,Ne=Boolean.prototype.toString,$e=n();function Re(e){return"object"==typeof e&&(e instanceof Ce||($e?function(e){try{return Ne.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===l(e)))}function Be(e){return Fe(e)||Re(e)}J(Be,"isPrimitive",Fe),J(Be,"isObject",Re);var Le="object"==typeof self?self:null,Ge="object"==typeof window?window:null,We="object"==typeof globalThis?globalThis:null,Xe=function(e){if(arguments.length){if(!Fe(e))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(We)return We;if(Le)return Le;if(Ge)return Ge;throw new Error("unexpected error. Unable to resolve global object.")}(),Ye=Xe.document&&Xe.document.childNodes,Ze=Int8Array;function Me(){return/^\s*function\s*([^(]*)/i}var Ue=/^\s*function\s*([^(]*)/i;function He(e){var r,t,n,i;if(("Object"===(t=l(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Ue.exec(n.toString()))return r[1]}return ke(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}J(Me,"REGEXP",Ue);var ze="function"==typeof Pe||"object"==typeof Ze||"function"==typeof Ye?function(e){return He(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?He(e).toLowerCase():r};function De(e){return e.constructor&&e.constructor.prototype===e}var qe,Je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ke="undefined"==typeof window?void 0:window,Qe=function(){var e;if("undefined"===ze(Ke))return!1;for(e in Ke)try{-1===Ve(Je,e)&&a(Ke,e)&&null!==Ke[e]&&"object"===ze(Ke[e])&&De(Ke[e])}catch(e){return!0}return!1}(),er="undefined"!=typeof window,rr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qe=r?function(){return 2!==(e(arguments)||"").length}(1,2)?function(r){return Oe(r)?e(Te.call(r)):e(r)}:e:function(e){var r,t,n,i,o,c,u;if(i=[],Oe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(0==(n="function"==typeof e)&&!ke(e))return i;t=xe&&n}for(o in e)t&&"prototype"===o||!a(e,o)||i.push(String(o));if(Ie)for(r=function(e){if(!1===er&&!Qe)return De(e);try{return De(e)}catch(e){return!1}}(e),u=0;u<rr.length;u++)c=rr[u],r&&"constructor"===c||!a(e,c)||i.push(String(c));return i};var tr=qe;return function(e){var r,t,n,i;if(!ke(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("1YNER",e));for(n=(r=tr(e)).length,t=new Array(n),i=0;i<n;i++)t[i]=e[r[i]];return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).objectValues=r();
//# sourceMappingURL=browser.js.map
