(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"23aj":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r("mXGw"),o=r.n(n),a=r("9fEB"),i=r.n(a),l=r("5dyF"),s=r.n(l),c=r("X7+o"),u=r("W0B4"),f=r.n(u);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var h=!1;try{h=!0}catch(E){}function v(e){return null===e?null:"object"===p(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function w(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?b({},e,t):{}}function j(e){var t=e.icon,r=e.mask,n=e.symbol,o=e.className,a=e.title,i=v(t),l=w("classes",[].concat(O(function(e){var t,r=e.spin,n=e.pulse,o=e.fixedWidth,a=e.inverse,i=e.border,l=e.listItem,s=e.flip,c=e.size,u=e.rotation,f=e.pull,p=(b(t={"fa-spin":r,"fa-pulse":n,"fa-fw":o,"fa-inverse":a,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(c),"undefined"!==typeof c&&null!==c),b(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u),b(t,"fa-pull-".concat(f),"undefined"!==typeof f&&null!==f),b(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(e)),O(o.split(" ")))),s=w("transform","string"===typeof e.transform?c.d.transform(e.transform):e.transform),u=w("mask",v(r)),f=Object(c.b)(i,m({},l,{},s,{},u,{symbol:n,title:a}));if(!f)return function(){var e;!h&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",i),null;var p=f.abstract,y={};return Object.keys(e).forEach((function(t){j.defaultProps.hasOwnProperty(t)||(y[t]=e[t])})),x(p[0],y)}j.displayName="FontAwesomeIcon",j.propTypes={border:f.a.bool,className:f.a.string,mask:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),fixedWidth:f.a.bool,inverse:f.a.bool,flip:f.a.oneOf(["horizontal","vertical","both"]),icon:f.a.oneOfType([f.a.object,f.a.array,f.a.string]),listItem:f.a.bool,pull:f.a.oneOf(["right","left"]),pulse:f.a.bool,rotation:f.a.oneOf([90,180,270]),size:f.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:f.a.bool,symbol:f.a.oneOfType([f.a.bool,f.a.string]),title:f.a.string,transform:f.a.oneOfType([f.a.string,f.a.object]),swapOpacity:f.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=g(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[g(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=d(n,["style"]);return a.attrs.style=m({},a.attrs.style,{},l),t.apply(void 0,[r.tag,m({},a.attrs,{},s)].concat(O(o)))}.bind(null,o.a.createElement),k=r("KM2f"),N=o.a.createElement,P=function(e){return N("div",{className:"Socialmedia-div"},N("span",{className:"Socialmedia-icon"},N("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/persunde"},N(j,{icon:k.a,color:e.color,size:"2x"}))),N("span",{className:"Socialmedia-icon"},N("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/per-sunde-578b68184"},N(j,{icon:k.b,color:e.color,size:"2x"}))))},A=o.a.createElement;function S(){return A("div",{className:"App"},A(i.a,null,A("title",null,"Create Next App"),A("link",{rel:"icon",href:"/favicon.ico"})),A("header",{className:"App-header"},A("div",null,A("figure",{className:"image is-128x128",style:{display:"inline-block"}},A("img",{alt:"Per Sunde",className:"is-rounded",src:"/static/img/annonperson.png"}))),A(P,{color:"black"}),A("div",{style:{display:"inline-block"},className:"buttons subtitle"},A(s.a,{href:"/blog"},A("a",{className:"button is-rounded is-primary"},"Blog"))),A("p",null,"Per Sunde fullstack developer")))}},WjHl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])}},[["WjHl",0,2,7,1,3,5]]]);