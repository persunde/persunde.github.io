_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"5MvH":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},Gpft:function(e,t,n){},LEOp:function(e,t,n){},VAPu:function(e,t,n){},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ve}));var r={};n.r(r),n.d(r,"initialize",(function(){return z})),n.d(r,"ga",(function(){return F})),n.d(r,"set",(function(){return G})),n.d(r,"send",(function(){return R})),n.d(r,"pageview",(function(){return K})),n.d(r,"modalview",(function(){return X})),n.d(r,"timing",(function(){return Z})),n.d(r,"event",(function(){return $})),n.d(r,"exception",(function(){return Q})),n.d(r,"plugin",(function(){return W})),n.d(r,"outboundLink",(function(){return Y})),n.d(r,"testModeAPI",(function(){return ee})),n.d(r,"default",(function(){return te}));var o=n("q1tI"),a=n.n(o),i=n("7O5W"),c=n("nOHt"),s=n.n(c),u=n("17x9"),l=n.n(u);function f(e){console.warn("[react-ga]",e)}function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?v(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){function t(){var e,n;b(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return O(v(n=m(this,(e=h(t)).call.apply(e,[this].concat(o)))),"handleClick",(function(e){var r=n.props,o=r.target,a=r.eventLabel,i=r.to,c=r.onClick,s=r.trackerNames,u={label:a},l="_blank"!==o,f=!(e.ctrlKey||e.shiftKey||e.metaKey||1===e.button);l&&f?(e.preventDefault(),t.trackLink(u,(function(){window.location.href=i}),s)):t.trackLink(u,(function(){}),s),c&&c(e)})),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},g(e,["to"]),{href:t,onClick:this.handleClick});return"_blank"===this.props.target&&(n.rel="noopener noreferrer"),delete n.eventLabel,delete n.trackerNames,a.a.createElement("a",n)}}])&&y(n.prototype,r),o&&y(n,o),t}(o.Component);function j(e){return e.replace(/^\s+|\s+$/g,"")}O(k,"trackLink",(function(){f("ga tracking not enabled")})),O(k,"propTypes",{eventLabel:l.a.string.isRequired,target:l.a.string,to:l.a.string,onClick:l.a.func,trackerNames:l.a.arrayOf(l.a.string)}),O(k,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var E=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function P(e,t){return function(e){return"string"===typeof e&&-1!==e.indexOf("@")}(e)?(f("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):t?j(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(E)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})):e}function A(e){console.info("[react-ga]",e)}var S=[],I={calls:S,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];S.push([].concat(t))},resetCalls:function(){S.length=0}};function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){return(q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _="undefined"===typeof window||"undefined"===typeof document,x=!1,D=!0,B=!1,V=!0,M=function(){var e;return B?I.ga.apply(I,arguments):!_&&(window.ga?(e=window).ga.apply(e,arguments):f("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function H(e){return P(e,D)}function J(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!V&&Array.isArray(e)||M.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){M.apply(void 0,L(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):f("ga command must be a string")}function U(e,t){e?t&&(t.debug&&!0===t.debug&&(x=!0),!1===t.titleCase&&(D=!1),t.useExistingGa)||(t&&t.gaOptions?M("create",e,t.gaOptions):M("create",e,"auto")):f("gaTrackingID is required in initialize()")}function z(e,t){if(t&&!0===t.testMode)B=!0;else{if(_)return!1;t&&!0===t.standardImplementation||function(e){var t,n,r,o,a,i,c,s="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?s=e.gaAddress:e&&e.debug&&(s="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=s,a="ga",t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,i=n.createElement(r),c=n.getElementsByTagName(r)[0],i.async=1,i.src=o,c.parentNode.insertBefore(i,c)}(t)}return V=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach((function(e){"object"===q(e)?U(e.trackingId,e):f("All configs must be an object")})):U(e,t),!0}function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(M.apply(void 0,t),x&&(A("called ga('arguments');"),A("with arguments: ".concat(JSON.stringify(t))))),window.ga}function G(e,t){e?"object"===q(e)?(0===Object.keys(e).length&&f("empty `fieldsObject` given to .set()"),J(t,"set",e),x&&(A("called ga('set', fieldsObject);"),A("with fieldsObject: ".concat(JSON.stringify(e))))):f("Expected `fieldsObject` arg to be an Object"):f("`fieldsObject` is required in .set()")}function R(e,t){J(t,"send",e),x&&(A("called ga('send', fieldObject);"),A("with fieldObject: ".concat(JSON.stringify(e))),A("with trackers: ".concat(JSON.stringify(t))))}function K(e,t,n){if(e){var r=j(e);if(""!==r){var o={};if(n&&(o.title=n),J(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),x){A("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),A("with path: ".concat(r).concat(a))}}else f("path cannot be an empty string in .pageview()")}else f("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=j(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);J(t,"send","pageview",o),x&&(A("called ga('send', 'pageview', path);"),A("with path: ".concat(o)))}else f("modalName cannot be an empty string or a single / in .modalview()")}else f("modalName is required in .modalview(modalName)")}function Z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var i={hitType:"timing",timingCategory:H(t),timingVar:H(n),timingValue:r};o&&(i.timingLabel=H(o)),R(i,a)}else f("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=T(e,["category","action","label","value","nonInteraction","transport"]),s=arguments.length>1?arguments[1]:void 0;if(t&&n){var u={hitType:"event",eventCategory:H(t),eventAction:H(n)};r&&(u.eventLabel=H(r)),"undefined"!==typeof o&&("number"!==typeof o?f("Expected `args.value` arg to be a Number."):u.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?f("`args.nonInteraction` must be a boolean."):u.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?f("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&f("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),u.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){u[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){u[e]=c[e]})),R(u,s)}else f("args.category AND args.action are required in event()")}function Q(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=H(n)),"undefined"!==typeof r&&("boolean"!==typeof r?f("`args.fatal` must be a boolean."):o.exFatal=r),R(o,t)}var W={require:function(e,t,n){if(e){var r=j(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==q(t))return void f("Expected `options` arg to be an Object");0===Object.keys(t).length&&f("Empty `options` given to .require()"),F(o,r,t),x&&A("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else F(o,r),x&&A("called ga('require', '".concat(r,"');"))}else f("`name` cannot be an empty string in .require()")}else f("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)f("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)f("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(F(o,r,n),x&&(A("called ga('".concat(o,"');")),A('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(F(o,n),x&&(A("called ga('".concat(o,"');")),A("with payload: ".concat(JSON.stringify(n))))):(F(o),x&&A("called ga('".concat(o,"');")))}}};function Y(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:H(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},R(r,n)}else f("args.label is required in outboundLink()");else f("hitCallback function is required")}var ee=I,te={initialize:z,ga:F,set:G,send:R,pageview:K,modalview:X,timing:Z,event:$,exception:Q,plugin:W,outboundLink:Y,testModeAPI:I};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}k.origTrackLink=k.trackLink,k.trackLink=Y;var oe=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r,{OutboundLink:k}),ae=function(){console.log("Logging pageview for ".concat(window.location.pathname)),oe.set({page:window.location.pathname}),oe.pageview(window.location.pathname)},ie=(n("VAPu"),n("wHSu"));n("5MvH"),n("iOjB"),n("Gpft"),n("LEOp");const ce="trackEvent",se="trackLink",ue="trackSiteSearch",le="trackPageView",fe="trackEcommerceOrder",pe="trackEcommerceCartUpdate";var de=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var ge=class{constructor(e){if(!e.urlBase)throw new Error("Matomo urlBase is required.");if(!e.siteId)throw new Error("Matomo siteId is required.");this.initialize(e)}initialize({urlBase:e,siteId:t,userId:n,trackerUrl:r,srcUrl:o,disabled:a,heartBeat:i,linkTracking:c=!0,configurations:s={}}){var u;const l="/"!==e[e.length-1]?e+"/":e;if("undefined"===typeof window)return;if(window._paq=window._paq||[],0!==window._paq.length)return;if(a)return;this.pushInstruction("setTrackerUrl",null!==r&&void 0!==r?r:l+"matomo.php"),this.pushInstruction("setSiteId",t),n&&this.pushInstruction("setUserId",n),Object.entries(s).forEach(e=>{this.pushInstruction(e[0],e[1])}),(!i||i&&i.active)&&this.enableHeartBeatTimer(null!==(u=i&&i.seconds)&&void 0!==u?u:15),this.enableLinkTracking(c);const f=document,p=f.createElement("script"),d=f.getElementsByTagName("script")[0];p.type="text/javascript",p.async=!0,p.defer=!0,p.src=o||l+"matomo.js",d&&d.parentNode&&d.parentNode.insertBefore(p,d)}enableHeartBeatTimer(e){this.pushInstruction("enableHeartBeatTimer",e)}enableLinkTracking(e){this.pushInstruction("enableLinkTracking",e)}trackEventsForElements(e){e.length&&e.forEach(e=>{e.addEventListener("click",()=>{const{matomoCategory:t,matomoAction:n,matomoName:r,matomoValue:o}=e.dataset;if(!t||!n)throw new Error("Error: data-matomo-category and data-matomo-action are required.");this.trackEvent({category:t,action:n,name:r,value:Number(o)})})})}trackEvents(){const e='[data-matomo-event="click"]';let t=!1;if(this.mutationObserver||(t=!0,this.mutationObserver=new MutationObserver(t=>{t.forEach(t=>{t.addedNodes.forEach(t=>{if(!(t instanceof HTMLElement))return;t.matches(e)&&this.trackEventsForElements([t]);const n=Array.from(t.querySelectorAll(e));this.trackEventsForElements(n)})})})),this.mutationObserver.observe(document,{childList:!0,subtree:!0}),t){const t=Array.from(document.querySelectorAll(e));this.trackEventsForElements(t)}}stopObserving(){this.mutationObserver&&this.mutationObserver.disconnect()}trackEvent(e){var{category:t,action:n,name:r,value:o}=e,a=de(e,["category","action","name","value"]);if(!t||!n)throw new Error("Error: category and action are required.");this.track(Object.assign({data:[ce,t,n,r,o]},a))}trackSiteSearch(e){var{keyword:t,category:n,count:r}=e,o=de(e,["keyword","category","count"]);if(!t)throw new Error("Error: keyword is required.");this.track(Object.assign({data:[ue,t,n,r]},o))}trackLink({href:e,linkType:t="link"}){this.pushInstruction(se,e,t)}trackPageView(e){this.track(Object.assign({data:[le]},e))}addEcommerceItem({sku:e,productName:t,productCategory:n,productPrice:r=0,productQuantity:o=1}){this.pushInstruction("addEcommerceItem",e,t,n,r,o)}trackEcommerceOrder({orderId:e,orderRevenue:t,orderSubTotal:n,taxAmount:r,shippingAmount:o,discountOffered:a=!1}){this.track({data:[fe,e,t,n,r,o,a]})}trackEcommerceCartUpdate(e){this.pushInstruction(pe,e)}setEcommerceView({sku:e,productName:t,productCategory:n,productPrice:r}){this.pushInstruction("setEcommerceView",e,t,n,r)}setEcommerceCategoryView(e){this.setEcommerceView({productCategory:e,productName:!1,sku:!1})}track({data:e=[],documentTitle:t=window.document.title,href:n=window.location.href,customDimensions:r=!1}){e.length&&(r&&Array.isArray(r)&&r.length&&r.map(e=>this.pushInstruction("setCustomDimension",e.id,e.value)),this.pushInstruction("setCustomUrl",n),this.pushInstruction("setDocumentTitle",t),this.pushInstruction(...e))}pushInstruction(e,...t){return"undefined"!==typeof window&&window._paq.push([e,...t]),this}};var be=function(e){return new ge(e)}({urlBase:"https://matomo.nordictechjobs.com",siteId:2,disabled:!1,heartBeat:{active:!0,seconds:10},linkTracking:!1,configurations:{disableCookies:!0,setSecureCookie:!0,setRequestMethod:"POST"}}),ye=n("KbOs");var me=({children:e,value:t})=>{const n=ye.a;return a.a.createElement(n.Provider,{value:t},e)},he=a.a.createElement;function ve(e){var t=e.Component,n=e.pageProps;return Object(o.useEffect)((function(){console.log("GA init"),oe.initialize("UA-166119494-1",{gaOptions:{siteSpeedSampleRate:100}}),ae(),s.a.events.on("routeChangeComplete",ae)}),[]),he(me,{value:be},he(t,n))}i.a.autoAddCss=!1,i.c.add(ie.a,ie.e)},iOjB:function(e,t,n){}},[[0,0,2,5,1,4]]]);