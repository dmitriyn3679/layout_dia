parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"t7b7":[function(require,module,exports) {
module.exports="slide-img-0.272a4763.png";
},{}],"sWC3":[function(require,module,exports) {
module.exports="slide-img-1.2602d6f5.jpg";
},{}],"BPaP":[function(require,module,exports) {
module.exports="slide-img-2.bc2f92a9.jpg";
},{}],"GmM7":[function(require,module,exports) {
module.exports="slide-img-3.d0683ea4.jpg";
},{}],"KIzB":[function(require,module,exports) {
"use strict";var e=a(require("../images/slider/slide-img-0.png")),i=a(require("../images/slider/slide-img-1.jpg")),t=a(require("../images/slider/slide-img-2.jpg")),r=a(require("../images/slider/slide-img-3.jpg"));function a(e){return e&&e.__esModule?e:{default:e}}var d=document.querySelector(".slider_arrows"),s=document.querySelector(".slider"),l=[e.default,i.default,t.default,r.default],u=0,n=function(){0===u?u=l.length-1:u-=1},c=function(){u===l.length-1?u=0:u+=1};d.addEventListener("click",function(e){if(e.target.dataset.direction){switch(e.target.dataset.direction){case"left":n();break;case"right":c()}s.style.backgroundImage='url("'.concat(l[u],'")')}});
},{"../images/slider/slide-img-0.png":"t7b7","../images/slider/slide-img-1.jpg":"sWC3","../images/slider/slide-img-2.jpg":"BPaP","../images/slider/slide-img-3.jpg":"GmM7"}]},{},["KIzB"], null)
//# sourceMappingURL=main.cd70e37d.js.map