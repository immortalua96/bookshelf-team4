!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},s=t.parcelRequireb987;null==s&&((s=function(n){if(n in o)return o[n].exports;if(n in i){var e=i[n];delete i[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){i[n]=e},t.parcelRequireb987=s),s.register("iE7OH",(function(e,t){var o,i;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return i}),(function(n){return i=n}));var s={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)s[e[t]]=n[e[t]]},i=function(n){var e=s[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),s.register("aNJCr",(function(e,t){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var i={};function s(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=i[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return s(n[2])}return"/"}(),i[n]=e),e}})),s("iE7OH").register(JSON.parse('{"4i6qq":"shopingList.f0b93fd6.js","98hEa":"10.26cd9257.png"}'));var r;r=s("aNJCr").getBundleURL("4i6qq")+s("iE7OH").resolve("98hEa");var c,a=[],u={shoppingList:document.querySelector(".ShoppingList"),pagination:document.querySelector(".pagination")},l=u.shoppingList,d=u.pagination,g=1;function f(n){document.querySelectorAll(".paginationButton").forEach((function(n){n.classList.remove("paginationButtonCurrent")})),n.classList.add("paginationButtonCurrent")}function v(n){l.innerHTML="",n.map((function(n){var e=n.img,t=n.name,o=n.artisticDirection,i=n.description,s=n.author,r='\n      <li class="shoppingItem">\n        <img class="bookImg" src="'.concat(e,'" alt="" />\n        <div class="bookInformationBox">\n          <div class="scroll">\n            <h2 class="bookName">').concat(t,'</h2>\n          </div>\n          <button class="dump">\n            <svg width="16" height="16">\n              <use href="/symbol-defs.505e88bc.svg#icon-dump"></use>\n            </svg>\n          </button>\n          <div class="scroll">\n            <p class="artisticDirectionBook">').concat(o,'</p>\n          </div>\n          <div class="artisticDirectionBookScroll">\n            <p class="descriptionBook">').concat(i,'</p>\n          </div>\n          <div class="authorBookScroll">\n            <p class="authorBook">').concat(s,'</p>\n          </div>\n        </div>\n        <div class="imgLink">\n          <a href=""> \n          <svg width="16" height="16">\n              <use href="/amazon_- logo-1000x302.svg#Page-1"></use>\n            </svg>\n          </a>\n          <a href=""> \n          <svg width="16" height="16">\n              <use href="/Users/maksim/Desktop/безіменна папка/book-square-svgrepo-com.svg"></use>\n            </svg>\n          </a>\n        </div>\n      </li>\n    ');l.insertAdjacentHTML("beforeend",r)}))}0===a.length?(c='<div class="emptyPaga">\n      <p class="emptyText">\n        This page is empty, add some books and proceed to order.\n      </p>\n\n      <img class="emptyImg" src="'.concat(e(r),'" alt="" />\n\n \n\n    </div>'),l.innerHTML=c,document.querySelector(".emptyImg").src="../images/mainbooks.png"):function(n){for(var e=Math.ceil(n.length/3),t="",o=1;o<=e;o+=1)t+=o===g?'<button class="paginationButton paginationButtonCurrent">'.concat(o,"</button>"):'<button class="paginationButton">'.concat(o,"</button>");d.innerHTML=t,n.length>=2?(d.insertAdjacentHTML("beforeend",'<button class="increase">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>\n      </svg>\n    </button>'),d.insertAdjacentHTML("afterbegin",'<button class="reduction">\n     <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-back"></use>\n      </svg>\n    </button>'),d.insertAdjacentHTML("afterbegin",'<button class="doubleReduction">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-back "></use>\n      </svg>\n      <svg class="more" width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-back"></use>\n      </svg>\n    </button>'),d.insertAdjacentHTML("beforeend",'<button class="doubleIncrease">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>\n      </svg>\n      <svg class="less" width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next "></use>\n      </svg>\n    </button>')):(v(n),d.style.display="none");var i=document.querySelectorAll(".paginationButton");i.forEach((function(e,t){e.addEventListener("click",(function(){var o=3*((g=t+1)-1),i=o+3;v(n.slice(o,i)),f(e)}))}));var s=document.querySelector(".increase"),r=document.querySelector(".reduction"),c=document.querySelector(".doubleIncrease"),a=document.querySelector(".doubleReduction");s.addEventListener("click",(function(){if(g<e){var t=3*((g+=1)-1),o=t+3;v(n.slice(t,o)),f(i[g-1])}})),r.addEventListener("click",(function(){if(g>1){var e=3*((g-=1)-1),t=e+3;v(n.slice(e,t)),f(i[g-1])}})),c.addEventListener("click",(function(){if(g<e-1){var t=3*((g+=2)-1),o=t+3;v(n.slice(t,o)),f(i[g-1])}})),a.addEventListener("click",(function(){if(g>2){var e=3*((g-=2)-1),t=e+3;v(n.slice(e,t)),f(i[g-1])}})),v(n.slice(0,3))}(a)}();
//# sourceMappingURL=shopingList.f0b93fd6.js.map
