// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&u.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=i(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};function l(t){return"[object Arguments]"===c(t)}var a=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,y=Object.defineProperty,b=Object.prototype,v=b.toString,g=b.__defineGetter__,d=b.__defineSetter__,h=b.__lookupGetter__,m=b.__lookupSetter__;s=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?y:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===v.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(h.call(t,r)||m.call(t,r)?(n=t.__proto__,t.__proto__=b,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&g&&g.call(t,r,e.get),i&&d&&d.call(t,r,e.set),t};var w=s;function j(t,r,e){w(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=n();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function I(t){return _(t)||E(t)}function P(t){return"number"==typeof t}j(I,"isPrimitive",_),j(I,"isObject",E);var T=Number,A=T.prototype.toString;var N=n();function V(t){return"object"==typeof t&&(t instanceof T||(N?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function k(t){return P(t)||V(t)}function x(t){return t!=t}function B(t){return P(t)&&x(t)}function F(t){return V(t)&&x(t.valueOf())}function L(t){return B(t)||F(t)}j(k,"isPrimitive",P),j(k,"isObject",V),j(L,"isPrimitive",B),j(L,"isObject",F);var C=Number.POSITIVE_INFINITY,G=T.NEGATIVE_INFINITY,M=Math.floor;function Y(t){return M(t)===t}function X(t){return t<C&&t>G&&Y(t)}function H(t){return P(t)&&X(t)}function R(t){return V(t)&&X(t.valueOf())}function U(t){return H(t)||R(t)}j(U,"isPrimitive",H),j(U,"isObject",R);var W=Object.prototype.propertyIsEnumerable;var D=!W.call("beep","0");function q(t,r){var e;return null!=t&&(!(e=W.call(t,r))&&D&&I(t)?!B(r=+r)&&H(r)&&r>=0&&r<t.length:e)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};var J=a?l:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&Y(t.length)&&t.length>=0&&t.length<=4294967295&&i(t,"callee")&&!q(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}j(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!z(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Q));var Z=q((function(){}),"prototype"),$=!q({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Y(t.length)&&t.length>=0&&t.length<=9007199254740991}function rt(t,r,e){var n,o;if(!tt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(L(r)){for(;o<n;o++)if(L(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var et=/./;function nt(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var ut=n();function it(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function ft(t){return nt(t)||it(t)}function ct(){return new Function("return this;")()}j(ft,"isPrimitive",nt),j(ft,"isObject",it);var lt="object"==typeof self?self:null,at="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},st="object"==typeof pt?pt:null;var yt=function(t){if(arguments.length){if(!nt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ct()}if(lt)return lt;if(at)return at;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=yt.document&&yt.document.childNodes,vt=Int8Array;function gt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function ht(t){var r,e,n,o;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=dt.exec(n.toString()))return r[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}j(gt,"REGEXP",dt);var mt="function"==typeof et||"object"==typeof vt||"function"==typeof bt?function(t){return ht(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ht(t).toLowerCase():r};function wt(t){return t.constructor&&t.constructor.prototype===t}var jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===mt(_t))return!1;for(t in _t)try{-1===rt(jt,t)&&i(_t,t)&&null!==_t[t]&&"object"===mt(_t[t])&&wt(_t[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var It=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return J(r)?t(K.call(r)):t(r)}:t:function(t){var r,e,n,o,u,f,c;if(o=[],J(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!i(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Q(t))return o;e=Z&&n}for(u in t)e&&"prototype"===u||!i(t,u)||o.push(String(u));if($)for(r=function(t){if(!1===St&&!Ot)return wt(t);try{return wt(t)}catch(t){return!1}}(t),c=0;c<Et.length;c++)f=Et[c],r&&"constructor"===f||!i(t,f)||o.push(String(f));return o};function Pt(t){var r,e,n,o;if(!Q(t))throw new TypeError(function(){var t,r=arguments,e="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}("invalid argument. Must provide an object (except null). Value: `%s`.",t));for(n=(r=It(t)).length,e=new Array(n),o=0;o<n;o++)e[o]=t[r[o]];return e}export{Pt as default};
//# sourceMappingURL=mod.js.map
