!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=n.parcelRequireb987;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequireb987=s),s.register("iE7OH",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var o={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),o[e]=t),t}})),s("iE7OH").register(JSON.parse('{"b8DTS":"shopingList.1a3029cb.js","98hEa":"10.26cd9257.png","9AbHI":"shopingList.b86d717b.js"}')),s("1Py0S"),s("i8Q71"),s("4Nugj"),s("j1Fxp"),s("kvC6y"),s("cs7FV"),s("8kGuF");var r,c=s("bpxeT"),a=s("2TvXO");r=s("aNJCr").getBundleURL("b8DTS")+s("iE7OH").resolve("98hEa");var l=s("sRYpV"),u=s("kOIBs"),d=[];function f(){return(f=t(c)(t(a).mark((function e(){var n,i,o,s,r,c,u,f,g,p,v,h,b,m,k,L,y;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("books"),(i=JSON.parse(n))&&localStorage.getItem("books")){e.next=4;break}return e.abrupt("return",[]);case 4:o=!0,s=!1,r=void 0,e.prev=5,c=i[Symbol.iterator]();case 7:if(o=(u=c.next()).done){e.next=24;break}return f=u.value,e.next=11,(0,l.fetchBookID)(f);case 11:g=e.sent,p=Object.values(g),v=p[0],h=p[7],b=p[1],m=p[6],k=p[24],L=p[15],y=p[27],d.push({dataId:v,url:h,author:m,title:k,description:L,categories:b,links:y});case 21:o=!0,e.next=7;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(5),s=!0,r=e.t0;case 30:e.prev=30,e.prev=31,o||null==c.return||c.return();case 33:if(e.prev=33,!s){e.next=36;break}throw r;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return e.abrupt("return",d);case 39:case"end":return e.stop()}}),e,null,[[5,26,30,38],[31,,33,37]])})))).apply(this,arguments)}(function(){return f.apply(this,arguments)})().then((function(e){0===e.length?L():function(e){for(var t=Math.ceil(e.length/3),n="",i='<button class="increase">\n      <svg width="13" height="13">\n        <use href="../icons/symbol-defs.svg#icon-next"></use>\n      </svg>\n    </button>',o='<button class="reduction">\n     <svg width="13" height="13">\n        <use href="./icons/symbol-defs.svg#icon-back"></use>\n      </svg>\n    </button>',s='<button class="doubleReduction">\n      <svg width="13" height="13">\n        <use href="../icons/symbol-defs.svg#icon-back "></use>\n      </svg>\n      <svg class="more" width="13" height="13">\n        <use href="./icons/symbol-defs.svg#icon-back"></use>\n      </svg>\n    </button>',r='<button class="doubleIncrease">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>\n      </svg>\n      <svg class="less" width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next "></use>\n      </svg>\n    </button>',c=1;c<=t;c+=1)n+=c===b?'<li class="paginationItem"><button class="paginationButton paginationButtonCurrent">'.concat(c,"</button></li>"):'<li class="paginationItem"><button class="paginationButton">'.concat(c,"</button></li>");h.innerHTML=n,e.length>=2?(v.insertAdjacentHTML("beforeend",i),v.insertAdjacentHTML("afterbegin",o),v.insertAdjacentHTML("afterbegin",s),v.insertAdjacentHTML("beforeend",r)):(k(e),v.style.display="none");var a=document.querySelectorAll(".paginationButton");a.forEach((function(t,n){t.addEventListener("click",(function(){var i=3*((b=n+1)-1),o=i+3;k(e.slice(i,o)),m(t)}))}));var l=document.querySelector(".increase"),u=document.querySelector(".reduction"),d=document.querySelector(".doubleIncrease"),f=document.querySelector(".doubleReduction");l.addEventListener("click",(function(){if(b<t){var n=3*((b+=1)-1),i=n+3;k(e.slice(n,i)),m(a[b-1]),u.disabled=!1,b===t&&(l.disabled=!0);var o=a[b-1].getBoundingClientRect(),s=h.getBoundingClientRect(),r=o.left-s.left,c=o.right-s.left;c>h.offsetWidth?h.scrollLeft+=c-h.offsetWidth:r<0&&(h.scrollLeft+=r)}})),u.addEventListener("click",(function(){if(b>1){var t=3*((b-=1)-1),n=t+3;k(e.slice(t,n)),m(a[b-1]),l.disabled=!1,1===b&&(u.disabled=!0);var i=a[b-1].getBoundingClientRect(),o=h.getBoundingClientRect(),s=i.left-o.left,r=i.right-o.left;s<0?h.scrollLeft+=s:r>h.offsetWidth&&(h.scrollLeft+=r-h.offsetWidth)}})),d.addEventListener("click",(function(){if(b<t){(b+=2)>t&&(b=t);var n=3*(b-1),i=n+3;k(e.slice(n,i)),m(a[b-1]),u.disabled=!1,b===t&&(l.disabled=!0);var o=a[b-1].getBoundingClientRect(),s=h.getBoundingClientRect(),r=o.left-s.left,c=o.right-s.left;c>h.offsetWidth?h.scrollLeft+=c-h.offsetWidth:r<0&&(h.scrollLeft+=r)}})),f.addEventListener("click",(function(){if(b>1){(b-=2)<1&&(b=1);var t=3*(b-1),n=t+3;k(e.slice(t,n)),m(a[b-1]),l.disabled=!1,1===b&&(u.disabled=!0);var i=a[b-1].getBoundingClientRect(),o=h.getBoundingClientRect(),s=i.left-o.left,r=i.right-o.left;s<0?h.scrollLeft+=s:r>h.offsetWidth&&(h.scrollLeft+=r-h.offsetWidth)}})),k(e.slice(0,3))}(e)})),document.querySelector("#shoppingListContent").insertAdjacentHTML("beforeend",' <div class="shoppingListBox">\n  <h1 class="shoppingTitle">\n            Shopping <span class="shoppingTitleSpan">List</span>\n          </h1>\n  <div class="booksBox">\n            <ul class="ShoppingList"></ul>\n             <div class="pagination">\n            <ul class="paginationList">\n\n            </ul>\n          </div>\n          </div>\n          </div>');var g={shoppingList:document.querySelector(".ShoppingList"),pagination:document.querySelector(".pagination"),paginationList:document.querySelector(".paginationList")},p=g.shoppingList,v=g.pagination,h=g.paginationList,b=1;function m(e){document.querySelectorAll(".paginationButton").forEach((function(e){e.classList.remove("paginationButtonCurrent")})),e.classList.add("paginationButtonCurrent")}function k(e){p.innerHTML="",e.forEach((function(e){var t=e.dataId,n=e.url,i=e.author,o=e.title,s=e.description,r=e.categories,c=e.links,a='\n      <li class="shoppingItem" id="'.concat(t,'">\n        <img class="bookImg" src="').concat(n,'" alt="" loading="lazy" />\n        <div class="bookInformationBox">\n          <div class="scroll titleBookdiv">\n            <h2 class="bookName">').concat(o,'</h2>\n          </div>\n          <button class="dump">\n            <svg width="16" height="16">\n              <use href="/icons/close.svg"></use>\n            </svg>\n          </button>\n          <div class="scroll">\n            <p class="artisticDirectionBook">').concat(r,'</p>\n          </div>\n          <div class="artisticDirectionBookScroll">\n            <p class="descriptionBook">').concat(s,'</p>\n          </div> \n          <div class="authorBookScroll">\n            <p class="authorBook">').concat(i,'</p>\n          </div>\n          <div class="fieldMarketplace-').concat(t,'"></div>\n        </div>\n      </li>\n    ');p.insertAdjacentHTML("beforeend",a);var l=document.querySelector(".fieldMarketplace-".concat(t)),d=(0,u.renderMarketPlaceLink)(c);l.insertAdjacentHTML("beforeend",d)})),document.querySelectorAll(".dump").forEach((function(e){var n;e.addEventListener("click",(n=t(c)(t(a).mark((function e(n){var i,o,s,r;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.target.closest("li"),o=i.id,i&&(i.remove(),s=JSON.parse(localStorage.getItem("books")),-1!==(r=s.indexOf(o))&&(s.splice(r,1),localStorage.setItem("books",JSON.stringify(s))),0===s.length&&(L(),v.style.display="none"));case 3:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}))}))}function L(){var e='<div class="emptyPaga">\n      <p class="emptyText">\n        This page is empty, add some books and proceed to order.\n      </p>\n\n      <img class="emptyImg" src="'.concat(t(r),'" alt="" />\n\n    </div>');p.innerHTML=e}}();
//# sourceMappingURL=shopingList.1a3029cb.js.map
