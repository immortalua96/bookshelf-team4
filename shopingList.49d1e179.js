!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequireb987;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequireb987=r),r.register("iE7OH",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var o={};function r(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),o[e]=t),t}})),r("iE7OH").register(JSON.parse('{"b8DTS":"shopingList.49d1e179.js","98hEa":"10.26cd9257.png","j9L89":"symbol-defs.469942f1.svg","9AbHI":"shopingList.266ea7f6.js"}')),r("1Py0S"),r("i8Q71"),r("4Nugj"),r("j1Fxp"),r("kvC6y"),r("cs7FV"),r("8kGuF");var s,a=r("bpxeT"),c=r("2TvXO");s=r("aNJCr").getBundleURL("b8DTS")+r("iE7OH").resolve("98hEa");var l,u=r("sRYpV"),d=r("kOIBs");l=r("aNJCr").getBundleURL("b8DTS")+r("iE7OH").resolve("j9L89");var f=[];function p(){return(p=t(a)(t(c).mark((function e(){var n,i,o,r,s,a,l,d,p,g,h,v,b,m,L,k,y;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("books"),(i=JSON.parse(n))&&localStorage.getItem("books")){e.next=4;break}return e.abrupt("return",[]);case 4:o=!0,r=!1,s=void 0,e.prev=5,a=i[Symbol.iterator]();case 7:if(o=(l=a.next()).done){e.next=24;break}return d=l.value,e.next=11,(0,u.fetchBookID)(d);case 11:p=e.sent,g=Object.values(p),h=g[0],v=g[7],b=g[1],m=g[6],L=g[24],k=g[15],y=g[27],f.push({dataId:h,url:v,author:m,title:L,description:k,categories:b,links:y});case 21:o=!0,e.next=7;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(5),r=!0,s=e.t0;case 30:e.prev=30,e.prev=31,o||null==a.return||a.return();case 33:if(e.prev=33,!r){e.next=36;break}throw s;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return e.abrupt("return",f);case 39:case"end":return e.stop()}}),e,null,[[5,26,30,38],[31,,33,37]])})))).apply(this,arguments)}(function(){return p.apply(this,arguments)})().then((function(e){0===e.length?y():function(e){for(var n=Math.ceil(e.length/3),i="",o='<button class="increase">\n      <svg width="13" height="13">\n        <use href="'.concat(t(l),'#icon-next"></use>\n      </svg>\n    </button>'),r='<button class="reduction">\n     <svg width="13" height="13">\n        <use href="'.concat(t(l),'#icon-back"></use>\n      </svg>\n    </button>'),s='<button class="doubleReduction">\n      <svg width="13" height="13">\n        <use href="'.concat(t(l),'#icon-back "></use>\n      </svg>\n      <svg class="more" width="13" height="13">\n        <use href="').concat(t(l),'#icon-back"></use>\n      </svg>\n    </button>'),a='<button class="doubleIncrease">\n      <svg width="13" height="13">\n        <use href="'.concat(t(l),'#icon-next"></use>\n      </svg>\n      <svg class="less" width="13" height="13">\n        <use href="').concat(t(l),'#icon-next "></use>\n      </svg>\n    </button>'),c=1;c<=n;c+=1)i+=c===m?'<li class="paginationItem"><button class="paginationButton paginationButtonCurrent">'.concat(c,"</button></li>"):'<li class="paginationItem"><button class="paginationButton">'.concat(c,"</button></li>");b.innerHTML=i,e.length>=2?(v.insertAdjacentHTML("beforeend",o),v.insertAdjacentHTML("afterbegin",r),v.insertAdjacentHTML("afterbegin",s),v.insertAdjacentHTML("beforeend",a)):(k(e),v.style.display="none");var u=document.querySelectorAll(".paginationButton");u.forEach((function(t,n){t.addEventListener("click",(function(){var i=3*((m=n+1)-1),o=i+3;k(e.slice(i,o)),L(t)}))}));var d=document.querySelector(".increase"),f=document.querySelector(".reduction"),p=document.querySelector(".doubleIncrease"),g=document.querySelector(".doubleReduction");d.addEventListener("click",(function(){if(m<n){var t=3*((m+=1)-1),i=t+3;k(e.slice(t,i)),L(u[m-1]),f.disabled=!1,m===n&&(d.disabled=!0);var o=u[m-1].getBoundingClientRect(),r=b.getBoundingClientRect(),s=o.left-r.left,a=o.right-r.left;a>b.offsetWidth?b.scrollLeft+=a-b.offsetWidth:s<0&&(b.scrollLeft+=s)}})),f.addEventListener("click",(function(){if(m>1){var t=3*((m-=1)-1),n=t+3;k(e.slice(t,n)),L(u[m-1]),d.disabled=!1,1===m&&(f.disabled=!0);var i=u[m-1].getBoundingClientRect(),o=b.getBoundingClientRect(),r=i.left-o.left,s=i.right-o.left;r<0?b.scrollLeft+=r:s>b.offsetWidth&&(b.scrollLeft+=s-b.offsetWidth)}})),p.addEventListener("click",(function(){if(m<n){(m+=2)>n&&(m=n);var t=3*(m-1),i=t+3;k(e.slice(t,i)),L(u[m-1]),f.disabled=!1,m===n&&(d.disabled=!0);var o=u[m-1].getBoundingClientRect(),r=b.getBoundingClientRect(),s=o.left-r.left,a=o.right-r.left;a>b.offsetWidth?b.scrollLeft+=a-b.offsetWidth:s<0&&(b.scrollLeft+=s)}})),g.addEventListener("click",(function(){if(m>1){(m-=2)<1&&(m=1);var t=3*(m-1),n=t+3;k(e.slice(t,n)),L(u[m-1]),d.disabled=!1,1===m&&(f.disabled=!0);var i=u[m-1].getBoundingClientRect(),o=b.getBoundingClientRect(),r=i.left-o.left,s=i.right-o.left;r<0?b.scrollLeft+=r:s>b.offsetWidth&&(b.scrollLeft+=s-b.offsetWidth)}})),k(e.slice(0,3))}(e)})),document.querySelector("#shoppingListContent").insertAdjacentHTML("beforeend",' <div class="shoppingListBox">\n  <h1 class="shoppingTitle">\n            Shopping <span class="shoppingTitleSpan">List</span>\n          </h1>\n  <div class="booksBox">\n            <ul class="ShoppingList"></ul>\n             <div class="pagination">\n            <ul class="paginationList">\n\n            </ul>\n          </div>\n          </div>\n          </div>');var g={shoppingList:document.querySelector(".ShoppingList"),pagination:document.querySelector(".pagination"),paginationList:document.querySelector(".paginationList")},h=g.shoppingList,v=g.pagination,b=g.paginationList,m=1;function L(e){document.querySelectorAll(".paginationButton").forEach((function(e){e.classList.remove("paginationButtonCurrent")})),e.classList.add("paginationButtonCurrent")}function k(e){h.innerHTML="",e.forEach((function(e){var n=e.dataId,i=e.url,o=e.author,r=e.title,s=e.description,a=e.categories,c=e.links,u='\n      <li class="shoppingItem" id="'.concat(n,'">\n        <img class="bookImg" src="').concat(i,'" alt="" loading="lazy" />\n        <div class="bookInformationBox">\n          <div class="scroll titleBookdiv">\n            <h2 class="bookName">').concat(r,'</h2>\n          </div>\n          <button class="dump">\n            <svg width="16" height="16">\n              <use href="').concat(t(l),'#icon-dump"></use>\n            </svg>\n          </button>\n          <div class="scroll">\n            <p class="artisticDirectionBook">').concat(a,'</p>\n          </div>\n          <div class="artisticDirectionBookScroll">\n            <p class="descriptionBook">').concat(s,'</p>\n          </div> \n          <div class="authorBookScroll">\n            <p class="authorBook">').concat(o,'</p>\n          </div>\n          <div class="fieldMarketplace-').concat(n,'"></div>\n        </div>\n      </li>\n    ');h.insertAdjacentHTML("beforeend",u);var f=document.querySelector(".fieldMarketplace-".concat(n)),p=(0,d.renderMarketPlaceLink)(c);f.insertAdjacentHTML("beforeend",p)})),document.querySelectorAll(".dump").forEach((function(e){var n;e.addEventListener("click",(n=t(a)(t(c).mark((function e(n){var i,o,r,s;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.target.closest("li"),o=i.id,i&&(i.remove(),r=JSON.parse(localStorage.getItem("books")),-1!==(s=r.indexOf(o))&&(r.splice(s,1),localStorage.setItem("books",JSON.stringify(r))),0===r.length&&(y(),v.style.display="none"));case 3:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}))}))}function y(){var e='<div class="emptyPaga">\n      <p class="emptyText">\n        This page is empty, add some books and proceed to order.\n      </p>\n\n      <img class="emptyImg" src="'.concat(t(s),'" alt="" />\n\n    </div>');h.innerHTML=e}}();
//# sourceMappingURL=shopingList.49d1e179.js.map
