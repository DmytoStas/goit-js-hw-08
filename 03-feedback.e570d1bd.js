!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u.default(e,t,r[t])}))}return e};var a,u=(a=o("hKHmD"))&&a.__esModule?a:{default:a};var f={},l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",d=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,g=b||y||Function("return this")(),O=Object.prototype.toString,j=Math.max,S=Math.min,h=function(){return g.Date.now()};function w(e,t,r){var n,o,i,a,u,f,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function m(t){var r=n,i=o;return n=o=void 0,l=t,a=e.apply(i,r)}function p(e){return l=e,u=setTimeout(y,t),d?m(e):a}function b(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function y(){var e=h();if(b(e))return g(e);u=setTimeout(y,function(e){var r=t-(e-f);return s?S(r,i-(e-l)):r}(e))}function g(e){return u=void 0,v&&n?m(e):(n=o=void 0,a)}function O(){var e=h(),r=b(e);if(n=arguments,o=this,f=e,r){if(void 0===u)return p(f);if(s)return u=setTimeout(y,t),m(f)}return void 0===u&&(u=setTimeout(y,t)),a}return t=_(t)||0,x(r)&&(d=!!r.leading,i=(s="maxWait"in r)?j(_(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,n=f=o=u=void 0},O.flush=function(){return void 0===u?a:g(h())},O}function x(t){var r=void 0===t?"undefined":e(l)(t);return!!t&&("object"==r||"function"==r)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(l)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(x(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=x(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=v.test(t);return n||m.test(t)?p(t.slice(2),n?2:8):s.test(t)?NaN:+t}f=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return x(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),w(e,t,{leading:n,maxWait:t,trailing:o})};var T="feedback-form-state",N={feedbackForm:document.querySelector(".feedback-form"),email:document.querySelector("input[name = email]"),message:document.querySelector("textarea[name = message]")},E={};!function(){if(localStorage.getItem(T)){var t=JSON.parse(localStorage.getItem(T));E=e(i)({},t),N.email.value=t.email?t.email:"",N.message.value=t.message?t.message:""}}(),N.feedbackForm.addEventListener("input",f((function(e){E[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(E))}),500)),N.feedbackForm.addEventListener("submit",(function(t){t.preventDefault();var r=e(i)({},JSON.parse(localStorage.getItem(T)));console.log(r),t.currentTarget.reset(),localStorage.removeItem(T),function(){var e=!0,t=!1,r=void 0;try{for(var n,o=Object.keys(E)[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var i=n.value;delete E[i]}}catch(e){t=!0,r=e}finally{try{e||null==o.return||o.return()}finally{if(t)throw r}}}()}))}();
//# sourceMappingURL=03-feedback.e570d1bd.js.map
