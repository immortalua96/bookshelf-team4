var books=[],refs={shoppingList:document.querySelector(".ShoppingList"),pagination:document.querySelector(".pagination")},shoppingList=refs.shoppingList,pagination=refs.pagination,booksPerPage=3,currentPage=1;function renderPagination(e){for(var n=Math.ceil(e.length/booksPerPage),t="",s=1;s<=n;s+=1)t+=s===currentPage?'<button class="paginationButton paginationButtonCurrent">'.concat(s,"</button>"):'<button class="paginationButton">'.concat(s,"</button>");pagination.innerHTML=t,e.length>=2?(pagination.insertAdjacentHTML("beforeend",'<button class="increase">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>\n      </svg>\n    </button>'),pagination.insertAdjacentHTML("afterbegin",'<button class="reduction">\n     <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-back"></use>\n      </svg>\n    </button>'),pagination.insertAdjacentHTML("afterbegin",'<button class="doubleReduction">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-back "></use>\n      </svg>\n      <svg class="more" width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-back"></use>\n      </svg>\n    </button>'),pagination.insertAdjacentHTML("beforeend",'<button class="doubleIncrease">\n      <svg width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next"></use>\n      </svg>\n      <svg class="less" width="13" height="13">\n        <use href="/symbol-defs.505e88bc.svg#icon-next "></use>\n      </svg>\n    </button>')):(renderBooks(e),pagination.style.display="none");var o=document.querySelectorAll(".paginationButton");o.forEach((function(n,t){n.addEventListener("click",(function(){var s=((currentPage=t+1)-1)*booksPerPage,o=s+booksPerPage;renderBooks(e.slice(s,o)),selectsActive(n)}))}));var i=document.querySelector(".increase"),r=document.querySelector(".reduction"),c=document.querySelector(".doubleIncrease"),a=document.querySelector(".doubleReduction");i.addEventListener("click",(function(){if(currentPage<n){var t=((currentPage+=1)-1)*booksPerPage,s=t+booksPerPage;renderBooks(e.slice(t,s)),selectsActive(o[currentPage-1])}})),r.addEventListener("click",(function(){if(currentPage>1){var n=((currentPage-=1)-1)*booksPerPage,t=n+booksPerPage;renderBooks(e.slice(n,t)),selectsActive(o[currentPage-1])}})),c.addEventListener("click",(function(){if(currentPage<n-1){var t=((currentPage+=2)-1)*booksPerPage,s=t+booksPerPage;renderBooks(e.slice(t,s)),selectsActive(o[currentPage-1])}})),a.addEventListener("click",(function(){if(currentPage>2){var n=((currentPage-=2)-1)*booksPerPage,t=n+booksPerPage;renderBooks(e.slice(n,t)),selectsActive(o[currentPage-1])}})),renderBooks(e.slice(0,booksPerPage))}function selectsActive(e){document.querySelectorAll(".paginationButton").forEach((function(e){e.classList.remove("paginationButtonCurrent")})),e.classList.add("paginationButtonCurrent")}function renderBooks(e){shoppingList.innerHTML="",e.map((function(e){var n=e.img,t=e.name,s=e.artisticDirection,o=e.description,i=e.author,r='\n      <li class="shoppingItem">\n        <img class="bookImg" src="'.concat(n,'" alt="" />\n        <div class="bookInformationBox">\n          <div class="scroll">\n            <h2 class="bookName">').concat(t,'</h2>\n          </div>\n          <button class="dump">\n            <svg width="16" height="16">\n              <use href="/symbol-defs.505e88bc.svg#icon-dump"></use>\n            </svg>\n          </button>\n          <div class="scroll">\n            <p class="artisticDirectionBook">').concat(s,'</p>\n          </div>\n          <div class="artisticDirectionBookScroll">\n            <p class="descriptionBook">').concat(o,'</p>\n          </div>\n          <div class="authorBookScroll">\n            <p class="authorBook">').concat(i,'</p>\n          </div>\n        </div>\n        <div class="imgLink">\n          <a href=""> \n          <svg width="16" height="16">\n              <use href="/amazon_- logo-1000x302.svg#Page-1"></use>\n            </svg>\n          </a>\n          <a href=""> \n          <svg width="16" height="16">\n              <use href="/Users/maksim/Desktop/безіменна папка/book-square-svgrepo-com.svg"></use>\n            </svg>\n          </a>\n        </div>\n      </li>\n    ');shoppingList.insertAdjacentHTML("beforeend",r)}))}function renderEmpty(){shoppingList.innerHTML='<div class="emptyPaga">\n      <p class="emptyText">\n        This page is empty, add some books and proceed to order.\n      </p>\n      <img class="emptyImg" src="/10.48ab74dc.png" alt="" />\n    </div>'}0===books.length?renderEmpty():renderPagination(books);
//# sourceMappingURL=shopingList.7cf779dd.js.map