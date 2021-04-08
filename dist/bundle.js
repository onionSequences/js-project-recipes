!function(){"use strict";var n,e,t,r,o,i,a,c,l,u,p,d,s,f,m,g,h,b,x,v,y,w={426:function(n,e,t){var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(795),l=t(384),u=o()((function(n){return n[1]})),p=a()(c),d=a()(l);u.push([n.id,"/* GENERAL */\n\nbody {\n  margin: 0;\n  padding: 0;\n  color: #666;\n  font-family: Helvetica, serif;\n  font-size: 16px;\n  background-image: url("+p+");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n.wrapper {\n  max-width: 1000px;\n  margin: 0 auto;\n}\n\nh1 {\n  margin-bottom: 50px;\n  color: #7aca25;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: normal;\n}\n\nh1::first-letter {\n  color: orange;\n}\n\n* {\n  box-sizing: border-box;\n  outline: none;\n}\n\n/* HEADER */\n\nheader {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  z-index: 999;\n}\n\nheader .wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#logo {\n  display: inline-block;\n  margin: 10px 0;\n  color: #7aca25;\n  font-family: Helvetica;\n  font-size: 34px;\n  text-decoration: none;\n}\n\n#logo::first-letter {\n  color: orange;\n}\n\n.recipe-count {\n  display: flex;\n  align-items: center;\n}\n\n.recipe-count-number {\n  color: orange;\n  font-size: 24px;\n}\n\n.recipe-count-label {\n  margin-left: 10px;\n  color: #666;\n  font-size: 12px;\n}\n\n/* MAIN */\n\nmain {\n  max-width: 1000px;\n  margin: 120px auto 60px;\n  padding: 30px 20px;\n  background-color: rgba(255, 255, 255, 0.9);\n}\n.loader {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 25px 0;\n}\n.loader img {\n  display: block;\n  height: 60px;\n  width: 60px;\n}\n#food-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#food-form input,\n#food-form select {\n  width: 100%;\n  max-width: 600px;\n  height: 44px;\n  margin-bottom: 30px;\n  padding: 5px 10px;\n  color: #666;\n  font-size: 16px;\n  -webkit-appearance: none;\n  border: solid 1px #ccc;\n  border-radius: 0;\n}\n#food-form select {\n  background-image: url("+d+");\n  background-size: 13px;\n  background-repeat: no-repeat;\n  background-position: right 15px center;\n}\n#food-form div {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 30px;\n}\n#food-form div input {\n  width: 45%;\n  margin: 0;\n}\n#food-form button {\n  padding: 10px 25px;\n  background-color: orange;\n  border: none;\n  text-transform: uppercase;\n  font-size: 18px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n#food-form button:hover {\n  opacity: 0.8;\n}\n#food-form button:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n#recipes {\n  display: flex;\n  flex-wrap: wrap;\n}\n#recipes > p {\n  text-align: center;\n  width: 100%;\n}\n.recipe-element {\n  position: relative;\n  width: 22%;\n  margin-right: 4%;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.recipe-element h3 {\n  font-size: 15px;\n}\n.recipe-element:nth-child(4n) {\n  margin-right: 0;\n}\n.recipe-element img {\n  display: block;\n  max-width: 100%;\n}\n.recipe-element .calories {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 10px;\n  right: 10px;\n  background: rgb(122, 202, 37);\n  color: #fff;\n  border-radius: 100%;\n  width: 40px;\n  height: 40px;\n  font-size: 12px;\n  text-align: center;\n}\n.recipe-element .labels {\n  display: flex;\n  flex-wrap: wrap;\n}\n.recipe-element .labels .label {\n  margin-right: 5px;\n  margin-bottom: 5px;\n  padding: 2px 5px;\n  background: #fff;\n  color: orange;\n  border-radius: 4px;\n  font-size: 11px;\n}\n\n/* PAGINATION */\n.pagination {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.pagination button {\n  background-color: rgb(122, 202, 37);\n  color: #ffffff;\n  border: none;\n  width: 30px;\n  height: 30px;\n  margin: 2px;\n  font-size: 0.8em;\n  text-decoration: none;\n  cursor: pointer;\n}\n.pagination button:hover {\n  opacity: 0.5;\n}\n.pagination button:disabled {\n  background-color: orange;\n  cursor: not-allowed;\n}\n\n/* PLACEHOLDER STYLE */\n*::-webkit-input-placeholder {\n  text-transform: uppercase;\n  color: #ccc;\n}\n*::-moz-placeholder {\n  text-transform: uppercase;\n  color: #ccc;\n}\n*:-ms-input-placeholder {\n  text-transform: uppercase;\n  color: #ccc;\n}\n*:-moz-placeholder {\n  text-transform: uppercase;\n  color: #ccc;\n}\n",""]),e.Z=u},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},667:function(n){n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},379:function(n,e,t){var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},r=[],o=0;o<n.length;o++){var c=n[o],l=e.base?c[0]+e.base:c[0],u=t[l]||0,p="".concat(l," ").concat(u);t[l]=u+1;var d=a(p),s={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(s)):i.push({identifier:p,updater:g(s,e),references:1}),r.push(p)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,p=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function s(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,m=0;function g(n,e){var t,r,o;if(e.singleton){var i=m++;t=f||(f=l(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(e),r=s.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var l=c(n,e),u=0;u<t.length;u++){var p=a(t[u]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}t=l}}}},384:function(n,e,t){n.exports=t.p+"img/47fea46f831bd41089ee.png"},795:function(n,e,t){n.exports=t.p+"img/202535a0e8f2f3e511db.jpg"},203:function(n,e,t){n.exports=t.p+"img/6fdf5f302c3b410b15ee.gif"}},k={};function E(n){var e=k[n];if(void 0!==e)return e.exports;var t=k[n]={id:n,exports:{}};return w[n](t,t.exports,E),t.exports}E.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return E.d(e,{a:e}),e},E.d=function(n,e){for(var t in e)E.o(e,t)&&!E.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),E.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n;E.g.importScripts&&(n=E.g.location+"");var e=E.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=n}(),n=E(379),e=E.n(n),t=E(426),r={insert:"head",singleton:!1},e()(t.Z,r),t.Z.locals,E(384),E(795),o=E(203),i=function(n,e,t){var r=document.createElement(n);return"img"===n?(r.setAttribute("src",e),r.onerror=function(){r.setAttribute("src","./img/no-img-available.jpg")}):(r.textContent=e,t&&r.classList.add(t)),r},a=function(){var n=document.querySelector(".loader"),e=i("img",o);return n.append(e),n},c=function(n){var e=i("div","","labels");return n.forEach((function(n){return e.append(i("p",n,"label"))})),e},l=function(n){var e=document.getElementById("recipes"),t=i("article","","recipe-element");t.addEventListener("click",(function(){return window.open(n.recipe.url,"_blank")})),t.prepend(i("img",n.recipe.image),i("h3",n.recipe.label),i("p","".concat(Math.round(n.recipe.calories/n.recipe.yield)," kcal"),"calories"),c(n.recipe.healthLabels)),e.append(t)},u=function(){document.querySelectorAll(".pagination button").forEach((function(n,e){var t=10*e;n.addEventListener("click",(function(){m(t),window.scrollTo({left:0,top:500,behavior:"smooth"})}))}))},p=function(n){var e,t=document.querySelector(".pagination"),r=Math.round(n.count/10),o=n.from/10;t.innerHTML="",r>10&&(r=10);for(var a=1;a<=r;a++)a-1!==o?t.append(i("button",a)):((e=i("button",a)).setAttribute("disabled",!0),t.append(e));u()},d=function(n){var e=document.getElementById("recipes");document.querySelector(".recipe-count-number").textContent=n.count,e.innerHTML="",n.count?(n.hits.forEach((function(n){return l(n)})),p(n)):e.append(i("p","No search results found. Please try again","notFound"))},s="c67e6aee",f="27ff7260006fb380fac905c8a4fe6a61",m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.querySelector("input.keyword-input"),t=document.querySelector('select[name="diet"]'),r=document.querySelector('select[name="health"]'),o=t.value?"&diet="+t.value:"",i=r.value?"&health="+r.value:"",c=document.querySelector('input[name="minCalories"]'),l=document.querySelector('input[name="maxCalories"]'),u=a(),p="https://api.edamam.com/search?q=".concat(e.value,"&app_id=").concat(s,"&app_key=").concat(f,"&from=").concat(n,"&calories=").concat(c.value,"-").concat(l.value).concat(o).concat(i);fetch(p).then((function(n){return n.ok?n.json():console.log("Api response error")})).then((function(n){d(n),u.innerHTML=""})).catch((function(n){return console.error("Error:",n)}))},g=document.querySelector("button"),h=document.querySelector("input.keyword-input"),b=document.querySelector('input[name="minCalories"]'),x=document.querySelector('input[name="maxCalories"]'),v=function(){h.value&&b.value&&x.value?g.removeAttribute("disabled"):g.setAttribute("disabled",!0)},h.addEventListener("input",v),y=function(n,e,t){var r=Math.abs(n.target.value);n.target.setAttribute(e,r),t()},b.addEventListener("input",(function(n){return y(n,"max",v)})),x.addEventListener("input",(function(n){return y(n,"min",v)})),g.addEventListener("click",(function(){return m()}))}();