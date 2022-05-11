(()=>{var e={974:e=>{if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},612:(e,t,n)=>{var r=n(974);function i(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=function(e,t,n,r,o){var a=i.apply(this,arguments);return e.addEventListener(n,a,o),{destroy:function(){e.removeEventListener(n,a,o)}}}},78:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof Element||t instanceof SVGElement?this.link=t:(this.link=document.createElement("a"),this.link.href=t)}return n(e,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),e}();t.default=r},728:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===t[0]&&(t=t.splice(1)),""===t&&(t="homepage"),t}},906:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},470:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},i=n({},r,e),o=new XMLHttpRequest;return o.onreadystatechange=function(){4===o.readyState&&(o.status,t(o))},o.open(i.method,i.url,!0),Object.keys(i.headers).forEach((function(e){o.setRequestHeader(e,i.headers[e])})),o.send(i.data),o}},956:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return window.location.pathname+window.location.search}},890:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},o=n(957);t.default=function(e,t){var n=document.createElement("html");n.innerHTML=e;for(var r=[],a=function(e){if(null==n.querySelector(t[e]))return{v:null};(0,o.queryAll)(t[e]).forEach((function(i,a){(0,o.queryAll)(t[e],n)[a].setAttribute("data-swup",r.length),r.push((0,o.queryAll)(t[e],n)[a].outerHTML)}))},s=0;s<t.length;s++){var u=a(s);if("object"===(void 0===u?"undefined":i(u)))return u.v}var l={title:n.querySelector("title").innerText,pageClass:n.querySelector("body").className,originalContent:e,blocks:r};return n.innerHTML="",n=null,l}},308:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.markSwupElements=t.getCurrentUrl=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=void 0;var r=d(n(728)),i=d(n(906)),o=d(n(890)),a=d(n(470)),s=d(n(694)),u=d(n(956)),l=d(n(91)),c=d(n(78));function d(e){return e&&e.__esModule?e:{default:e}}t.classify=r.default,t.createHistoryRecord=i.default,t.getDataFromHtml=o.default,t.fetch=a.default,t.transitionEnd=s.default,t.getCurrentUrl=u.default,t.markSwupElements=l.default,t.Link=c.default},91:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(957);t.default=function(e,t){for(var n=0,i=function(i){null==e.querySelector(t[i])?console.warn("Element "+t[i]+" is not in current page."):(0,r.queryAll)(t[i]).forEach((function(o,a){(0,r.queryAll)(t[i],e)[a].setAttribute("data-swup",n),n++}))},o=0;o<t.length;o++)i(o)}},694:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return t[n];return!1}},743:(e,t,n)=>{"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=y(n(612)),a=y(n(250)),s=y(n(773)),u=y(n(850)),l=y(n(56)),c=y(n(854)),d=y(n(584)),h=y(n(809)),f=y(n(593)),p=y(n(928)),m=n(225),g=n(957),v=n(308);function y(e){return e&&e.__esModule?e:{default:e}}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},i=r({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=i,this.plugins=[],this.transition={},this.delegatedListeners={},this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new a.default,this.cache.swup=this,this.loadPage=s.default,this.renderPage=u.default,this.triggerEvent=l.default,this.on=c.default,this.off=d.default,this.updateTransition=h.default,this.getAnimationPromises=f.default,this.getPageData=p.default,this.log=function(){},this.use=m.use,this.unuse=m.unuse,this.findPlugin=m.findPlugin,this.enable()}return i(e,[{key:"enable",value:function(){var e=this;if("undefined"!=typeof Promise){this.delegatedListeners.click=(0,o.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler);var t=(0,v.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers);t.url=t.responseURL=(0,v.getCurrentUrl)(),this.options.cache&&this.cache.cacheUrl(t),(0,v.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach((function(t){e.use(t)})),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")}else console.warn("Promise is not supported")}},{key:"destroy",value:function(){var e=this;this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach((function(t){e.unuse(t)})),(0,g.queryAll)("[data-swup]").forEach((function(e){e.removeAttribute("data-swup")})),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e),e.preventDefault();var t=new v.Link(e.delegateTarget);if(t.getAddress()==(0,v.getCurrentUrl)()||""==t.getAddress())""!=t.getHash()?(this.triggerEvent("samePageWithHash",e),null!=document.querySelector(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")")):this.triggerEvent("samePage",e);else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var n=e.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:t.getAddress(),customTransition:n},!1)}}}},{key:"popStateHandler",value:function(e){if(!this.options.skipPopStateHandling(e)){var t=new v.Link(e.state?e.state.url:window.location.pathname);""!==t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e)}}}]),e}();t.Z=w},250:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=t.Cache=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pages={},this.last=null}return n(e,[{key:"cacheUrl",value:function(e){e.url in this.pages==0&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),e}();t.default=r},593:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(957),i=n(308);t.default=function(){var e=[];return(0,r.queryAll)(this.options.animationSelector).forEach((function(t){var n=new Promise((function(e){t.addEventListener((0,i.transitionEnd)(),(function(n){t==n.target&&e()}))}));e.push(n)})),e}},928:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(308);t.default=function(e){var t=e.responseText,n=(0,r.getDataFromHtml)(t,this.options.containers);return n?(n.responseURL=e.responseURL?e.responseURL:window.location.href,n):(console.warn("Received page is invalid."),null)}},773:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(308);t.default=function(e,t){var n=this,o=[],a=void 0;this.triggerEvent("transitionStart",t),null!=e.customTransition?(this.updateTransition(window.location.pathname,e.url,e.customTransition),document.documentElement.classList.add("to-"+(0,i.classify)(e.customTransition))):this.updateTransition(window.location.pathname,e.url),!t||this.options.animateHistoryBrowsing?function(){if(n.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),t&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,i.classify)(e.url)),o=n.getAnimationPromises("out"),Promise.all(o).then((function(){n.triggerEvent("animationOutDone")})),!t){var r;r=null!=n.scrollToElement?e.url+n.scrollToElement:e.url,(0,i.createHistoryRecord)(r)}}():this.triggerEvent("animationSkipped"),this.cache.exists(e.url)?(a=new Promise((function(e){e()})),this.triggerEvent("pageRetrievedFromCache")):a=this.preloadPromise&&this.preloadPromise.route==e.url?this.preloadPromise:new Promise((function(t,o){(0,i.fetch)(r({},e,{headers:n.options.requestHeaders}),(function(r){if(500===r.status)return n.triggerEvent("serverError"),void o(e.url);var i=n.getPageData(r);null!=i?(i.url=e.url,n.cache.cacheUrl(i),n.triggerEvent("pageLoaded"),t()):o(e.url)}))})),Promise.all(o.concat([a])).then((function(){n.renderPage(n.cache.getPage(e.url),t),n.preloadPromise=null})).catch((function(e){n.options.skipPopStateHandling=function(){return window.location=e,!0},window.history.go(-1)}))}},584:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=this;if(null!=e)if(null!=t)if(this._handlers[e]&&this._handlers[e].filter((function(e){return e===t})).length){var r=this._handlers[e].filter((function(e){return e===t}))[0],i=this._handlers[e].indexOf(r);i>-1&&this._handlers[e].splice(i,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach((function(e){n._handlers[e]=[]}))}},854:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this._handlers[e]?this._handlers[e].push(t):console.warn("Unsupported event "+e+".")}},225:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.use=function(e){if(e.isSwupPlugin)return this.plugins.push(e),e.swup=this,"function"==typeof e._beforeMount&&e._beforeMount(),e.mount(),this.plugins;console.warn("Not swup plugin instance "+e+".")},t.unuse=function(e){var t=void 0;if(t="string"==typeof e?this.plugins.find((function(t){return e===t.name})):e){t.unmount(),"function"==typeof t._afterUnmount&&t._afterUnmount();var n=this.plugins.indexOf(t);return this.plugins.splice(n,1),this.plugins}console.warn("No such plugin.")},t.findPlugin=function(e){return this.plugins.find((function(t){return e===t.name}))}},850:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=(n(957),n(308));t.default=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var o=new i.Link(e.responseURL);window.location.pathname!==o.getPath()&&(window.history.replaceState({url:o.getPath(),random:Math.random(),source:"swup"},document.title,o.getPath()),this.cache.cacheUrl(r({},e,{url:o.getPath()}))),t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",t);for(var a=0;a<e.blocks.length;a++)document.body.querySelector('[data-swup="'+a+'"]').outerHTML=e.blocks[a];if(document.title=e.title,this.triggerEvent("contentReplaced",t),this.triggerEvent("pageView",t),this.options.cache||this.cache.empty(),setTimeout((function(){t&&!n.options.animateHistoryBrowsing||(n.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))}),10),!t||this.options.animateHistoryBrowsing){var s=this.getAnimationPromises("in");Promise.all(s).then((function(){n.triggerEvent("animationInDone"),n.triggerEvent("transitionEnd",t),document.documentElement.className.split(" ").forEach((function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)}))}))}else this.triggerEvent("transitionEnd",t);this.scrollToElement=null}},56:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this._handlers[e].forEach((function(e){try{e(t)}catch(e){console.error(e)}}));var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},809:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){this.transition={from:e,to:t,custom:n}}},957:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:t.querySelector(e)},t.queryAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:Array.prototype.slice.call(t.querySelectorAll(e))}},853:e=>{var t=document.querySelector(".main"),n=t.querySelector(".container"),r=t.querySelector(".main__headline"),i=Array.from(t.querySelectorAll(".main__image")),o=t.querySelector(".main__button"),a=document.querySelector(".goods"),s=t.querySelector(".main__button-anchor"),u=document.querySelector("#good");e.exports={mainSection:t,imagesOnMainPage:i,mainButton:o,goodsSection:a,generateFromTemplate:function(e,t){return e.content.cloneNode(!0).querySelector(t)},mainAnchor:s,mainContainer:n,mainHeadline:r,goodTemplate:u,initPages:function(){console.log(document)}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="",(()=>{"use strict";var e=n(743);n(853),n.p,n.p,n.p,document.querySelector(".goods"),(0,e.Z)()})()})();