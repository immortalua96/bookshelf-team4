!function(){function t(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=a.parcelRequireb987;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var i={id:t,exports:{}};return e[t]=i,a.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,a){n[t]=a},a.parcelRequireb987=i),i("iE7OH").register(JSON.parse('{"EVgbq":"index.f5531bc4.js","jdAVK":"wrong.e9d1c1e1.svg","9AbHI":"shopingList.e0eaff2b.js"}'));var o,r,s=i("bpxeT"),l=i("2TvXO"),p=i("sRYpV"),c=i("4Nugj"),m={};function x(){return(x=t(s)(t(l).mark((function a(){var e,n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.fetchCategories)();case 3:e=t.sent,n=e.map((function(t){var a=t.list_name;return' <li class="itemsCategories">'.concat(a,"</li>")})).join(""),c.refs.listCategories.insertAdjacentHTML("beforeend",n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),m.Report.failure("Something went wrong","Please, refresh the current page or try again later.","Okay"),console.log(t.t0);case 12:case"end":return t.stop()}}),a,null,[[0,8]])})))).apply(this,arguments)}o=void 0!==a?a:"undefined"!=typeof window?window:m,r=function(t){"use strict";if(void 0===t&&void 0===t.document)return!1;var a,e="Success",n="Failure",i="Warning",o="Info",r={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(a){return a||(a="head"),null!==t.document[a]||(s('\nNotiflix needs to be appended to the "<'+a+'>" element, but you called it before the "<'+a+'>" element has been created.'),!1)},p=function(){var t={},a=!1,e=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(a=arguments[0],e++);for(var n=function(e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a&&"[object Object]"===Object.prototype.toString.call(e[n])?t[n]=p(t[n],e[n]):t[n]=e[n])};e<arguments.length;e++)n(arguments[e]);return t},c=function(a){var e=t.document.createElement("div");return e.innerHTML=a,e.textContent||e.innerText||""},m=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},x=function(s,m,x,u,b,d){if(!l("body"))return!1;a||f.Report.init({});var g={};if("object"==typeof b&&!Array.isArray(b)||"object"==typeof d&&!Array.isArray(d)){var k={};"object"==typeof b?k=b:"object"==typeof d&&(k=d),g=p(!0,a,{}),a=p(!0,a,k)}var y=a[s.toLocaleLowerCase("en")];"string"!=typeof m&&(m="Notiflix "+s),"string"!=typeof x&&(s===e?x='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':s===n?x='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':s===i?x='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':s===o&&(x='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof u&&(u="Okay"),a.plainText&&(m=c(m),x=c(x),u=c(u)),a.plainText||(m.length>a.titleMaxLength&&(m="Possible HTML Tags Error",x='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',u="Okay"),x.length>a.messageMaxLength&&(m="Possible HTML Tags Error",x='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',u="Okay"),u.length>a.buttonMaxLength&&(m="Possible HTML Tags Error",x='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',u="Okay")),m.length>a.titleMaxLength&&(m=m.substring(0,a.titleMaxLength)+"..."),x.length>a.messageMaxLength&&(x=x.substring(0,a.messageMaxLength)+"..."),u.length>a.buttonMaxLength&&(u=u.substring(0,a.buttonMaxLength)+"..."),a.cssAnimation||(a.cssAnimationDuration=0);var w=t.document.createElement("div");w.id=r.ID,w.className=a.className,w.style.zIndex=a.zindex,w.style.borderRadius=a.borderRadius,w.style.fontFamily='"'+a.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.alignItems="center",w.style.justifyContent="center";var h="",v=!0===a.backOverlayClickToClose;a.backOverlay&&(h='<div class="'+a.className+"-overlay"+(a.cssAnimation?" nx-with-animation":"")+(v?" nx-report-click-to-close":"")+'" style="background:'+(y.backOverlayColor||a.backOverlayColor)+";animation-duration:"+a.cssAnimationDuration+'ms;"></div>');var N,R,z="";if(s===e?(N=a.svgSize,R=y.svgColor,N||(N="110px"),R||(R="#32c682"),z='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+N+'" height="'+N+'" fill="'+R+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):s===n?z=function(t,a){return t||(t="110px"),a||(a="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(a.svgSize,y.svgColor):s===i?z=function(t,a){return t||(t="110px"),a||(a="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(a.svgSize,y.svgColor):s===o&&(z=function(t,a){return t||(t="110px"),a||(a="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+a+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(a.svgSize,y.svgColor)),w.innerHTML=h+'<div class="'+a.className+"-content"+(a.cssAnimation?" nx-with-animation ":"")+" nx-"+a.cssAnimationStyle+'" style="width:'+a.width+"; background:"+a.backgroundColor+"; animation-duration:"+a.cssAnimationDuration+'ms;"><div style="width:'+a.svgSize+"; height:"+a.svgSize+';" class="'+a.className+'-icon">'+z+'</div><h5 class="'+a.className+'-title" style="font-weight:500; font-size:'+a.titleFontSize+"; color:"+y.titleColor+';">'+m+'</h5><p class="'+a.className+'-message" style="font-size:'+a.messageFontSize+"; color:"+y.messageColor+';">'+x+'</p><a id="NXReportButton" class="'+a.className+'-button" style="font-weight:500; font-size:'+a.buttonFontSize+"; background:"+y.buttonBackground+"; color:"+y.buttonColor+';">'+u+"</a></div>",!t.document.getElementById(w.id)){t.document.body.appendChild(w);var X=function(){var e=t.document.getElementById(w.id);e.classList.add("nx-remove");var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(n)}),a.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof b&&b(),X()})),h&&v&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){X()}))}a=p(!0,a,g)},f={Report:{init:function(e){a=p(!0,r,e),function(a,e){if(!l("head"))return!1;if(null!==a()&&!t.document.getElementById(e)){var n=t.document.createElement("style");n.id=e,n.innerHTML=a(),t.document.head.appendChild(n)}}(m,"NotiflixReportInternalCSS")},merge:function(t){if(!a)return s("You have to initialize the Report module before call Merge function."),!1;a=p(!0,a,t)},success:function(t,a,n,i,o){x(e,t,a,n,i,o)},failure:function(t,a,e,i,o){x(n,t,a,e,i,o)},warning:function(t,a,e,n,o){x(i,t,a,e,n,o)},info:function(t,a,e,n,i){x(o,t,a,e,n,i)}}};return"object"==typeof t.Notiflix?p(!0,t.Notiflix,{Report:f.Report}):{Report:f.Report}},"function"==typeof define&&define.amd?define([],(function(){return r(o)})):"object"==typeof m?m=r(o):o.Notiflix=r(o),i("1Py0S"),i("i8Q71"),i("4Nugj");s=i("bpxeT"),l=i("2TvXO"),c=i("4Nugj"),p=i("sRYpV");function f(){return u.apply(this,arguments)}function u(){return(u=t(s)(t(l).mark((function a(){var e,n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.fetchBestBooks)();case 3:e=t.sent,n=e.map((function(t){var a=t.list_name,e=t.books;return'<div class="containerForCategory">\n     \n      <h2 class="list_name">'.concat(a,'</h2>\n      <ul class="itemsBooksOfCategory">\n        <li class="itemOneBook">\n        <img loading="lazy" class="book_image" src="').concat(e[0].book_image,'" alt="">\n          <h3 class="book_title">').concat(e[0].title,'</h3>\n          <p class="book_author">').concat(e[0].author,'</p></li>\n        <li class="itemOneBook">\n        <img loading="lazy" class="book_image" src="').concat(e[1].book_image,'" alt="">\n          <h3 class="book_title">').concat(e[1].title,'</h3>\n          <p class="book_author">').concat(e[1].author,'</p></li>\n        <li class="itemOneBook">\n        <img loading="lazy" class="book_image" src="').concat(e[2].book_image,'" alt="">\n          <h3 class="book_title">').concat(e[2].title,'</h3>\n          <p class="book_author">').concat(e[2].author,'</p></li>\n        <li class="itemOneBook">\n        <img loading="lazy" class="book_image" src="').concat(e[3].book_image,'" alt="">\n          <h3 class="book_title">').concat(e[3].title,'</h3>\n          <p class="book_author">').concat(e[3].author,'</p></li>\n        <li class="itemOneBook">\n        <img loading="lazy" class="book_image" src="').concat(e[4].book_image,'" alt="">\n          <h3 class="book_title">').concat(e[4].title,'</h3>\n          <p class="book_author">').concat(e[4].author,'</p></li>\n      </ul>\n      <button class="see_more">see more</button>\n   \n  </div>')})).join(""),c.refs.mainPage.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".see_more").forEach((function(t){t.addEventListener("click",b)})),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),m.Report.failure("Something went wrong","Please, refresh the current page or try again later.","Okay"),console.log(t.t0);case 14:case"end":return t.stop()}}),a,null,[[0,10]])})))).apply(this,arguments)}function b(t){return d.apply(this,arguments)}function d(){return(d=t(s)(t(l).mark((function a(e){var n,i,o,r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.target.parentNode.children[0].textContent,i=e.target.parentNode.children[1],t.next=4,(0,p.fetchGategoryBooks)(n);case 4:o=t.sent,r=o.map((function(t){var a=t.book_image,e=t.title,n=t.author;return'<li class="itemOneBook">\n        <img class="book_image" src="'.concat(a,'" alt="">\n          <h3 class="book_title">').concat(e,'</h3>\n          <p class="book_author">').concat(n,"</p></li>")})).join(""),i.innerHTML="",i.innerHTML=r,e.target.style.display="none";case 9:case"end":return t.stop()}}),a)})))).apply(this,arguments)}f(),i("j1Fxp");s=i("bpxeT"),l=i("2TvXO"),c=i("4Nugj"),c=i("4Nugj");function g(){c.refs.mainPage.innerHTML=""}var k;p=i("sRYpV");function y(){return(y=t(s)(t(l).mark((function a(e){var n,i,o,r,s,m,x;return t(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=document.querySelector(".currentActiveLi"),e.target.classList.add("currentActiveLi"),n&&n.classList.remove("currentActiveLi"),a.prev=3,"LI"!==e.target.nodeName||"All categories"===e.target.textContent){a.next=20;break}return g(),i=e.target.textContent,a.next=9,(0,p.fetchGategoryBooks)(i);case 9:o=a.sent,(r=document.createElement("h2")).classList.add("list_name_one_category"),r.textContent=i,(s=document.createElement("ul")).classList.add("itemsBooksOfCategory"),c.refs.mainPage.append(r,s),m=o.map((function(t){var a=t._id,e=t.title,n=t.book_image,i=t.author;return'\n      <li class="itemOneBook">\n        <img src="'.concat(n,'" alt="').concat(e,'" class="book_image" loading="lazy" data-id=').concat(a,'>\n          <h3 class="book_title">').concat(e,'</h3>\n          <p class="book_author">').concat(i,"</p></li>")})).join(""),s.insertAdjacentHTML("beforeend",m),a.next=21;break;case 20:"All categories"===e.target.textContent&&(e.target.classList.add("currentActiveLi"),g(),f());case 21:a.next=27;break;case 23:a.prev=23,a.t0=a.catch(3),x='<div class="error_page"><img class="error_icon" src="'.concat(t(k),'" alt="">\n    <p class="error_msg">"Sorry, there are no books matching the chosen category."</p></div>'),c.refs.mainPage.insertAdjacentHTML("beforeend",x);case 27:case"end":return a.stop()}}),a,null,[[3,23]])})))).apply(this,arguments)}k=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("jdAVK"),function(){x.apply(this,arguments)}(),c.refs.listCategories.addEventListener("click",(function(t){return y.apply(this,arguments)}));s=i("bpxeT"),l=i("2TvXO"),c=i("4Nugj"),p=i("sRYpV");function w(t,a,e,n){return'<div class="cardBody">\n      <div class="cardBodiItem">\n        <img class="oneBookImg" loading="lazy" src="'.concat(t,'" alt="').concat(e,'" />\n        <div class="wrapper">\n          <h2 class="cardTitle">').concat(e,'</h2>\n          <p class="cardAuthor">').concat(a,'</p>\n          <p class="cardDescription">').concat(n,'</p>\n          <div>\n           ИКОНКИ\n          </div>\n        </div>\n      </div>\n      <button class="addShoppingList">Add to Shopping List</button>\n    </div>')}c=i("4Nugj");function h(){c.refs.modal.innerHTML=""}var v=new(0,i("8kGuF").LocalstorageBooks);function N(){c.refs.openModalBtn.classList.add("is-hidden"),document.body.classList.remove("overflow")}function R(){return(R=t(s)(t(l).mark((function a(e){var n,i,o,r,s,x,f,u,b;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"IMG"!==e.target.nodeName){t.next=19;break}return h(),n=e.target.dataset.id,t.next=6,(0,p.fetchBookID)(n);case 6:i=t.sent,o=Object.values(i),r=o[7],s=o[6],x=o[24],f=o[15],u=w(r,s,x,f),c.refs.modal.insertAdjacentHTML("beforeend",u),document.body.classList.add("overflow"),c.refs.openModalBtn.classList.remove("is-hidden"),b=document.querySelector(".addShoppingList"),v.updateButtonText(n,b),b.addEventListener("click",(function(){-1===v.getBooks().indexOf(n)?(v.putBooks(n),b.textContent="Remove from Shopping List"):(v.removeBook(n),b.textContent="Add to Shopping List")}));case 19:t.next=25;break;case 21:t.prev=21,t.t0=t.catch(0),m.Report.failure("Something went wrong","This book is not found, refresh the current page or try again later.","Okay"),console.log(t.t0);case 25:case"end":return t.stop()}}),a,null,[[0,21]])})))).apply(this,arguments)}c.refs.closeModalBtn.addEventListener("click",N),c.refs.openModalBtn.addEventListener("click",(function(t){document.querySelector(".modal-page"),"DIV"===t.target.nodeName&&N()})),document.addEventListener("keydown",N),c.refs.mainPage.addEventListener("click",(function(t){return R.apply(this,arguments)})),i("kvC6y"),i("cs7FV")}();
//# sourceMappingURL=index.f5531bc4.js.map