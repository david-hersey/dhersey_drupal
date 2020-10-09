/*! For license information please see commons-0438a6d64292b58a1a23.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",u),f}}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var c=n("TSYQ"),s=n.n(c);n("QLaP");function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){return Object.keys(t).reduce((function(n,a){var i,c=n,s=c[l(a)],p=c[a],d=u(c,[l(a),a].map(f)),m=t[a],v=function(e,t,n){var a=Object(r.useRef)(void 0!==e),i=Object(r.useState)(t),o=i[0],u=i[1],c=void 0!==e,s=a.current;return a.current=c,!c&&s&&o!==t&&u(t),[c?e:o,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(p,s,e[m]),h=v[0],y=v[1];return o({},d,((i={})[a]=h,i[m]=y,i))}),e)}var d=n("dI71");n("94VI");var m=/-(.)/g;var v=a.a.createContext({});v.Consumer,v.Provider;function h(e,t){var n=Object(r.useContext)(v);return e||n[t]||t}var y=function(e){return e[0].toUpperCase()+(t=e,t.replace(m,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var b=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,c=u(e,["bsPrefix","className","as"]);n=h(n,"navbar-brand");var l=i||(c.href?"a":"span");return a.a.createElement(l,o({},c,{ref:t,className:s()(r,n)}))}));b.displayName="NavbarBrand";var g=b;function E(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var T=/([A-Z])/g;var x=/^ms-/;function w(e){return function(e){return e.replace(T,"-$1").toLowerCase()}(e).replace(x,"-ms-")}var O=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var C=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(w(t))||function(e,t){return E(e).getComputedStyle(e,t)}(e).getPropertyValue(w(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!O.test(e))}(a)?n+=w(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(w(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},S=!("undefined"==typeof window||!window.document||!window.document.createElement),A=!1,k=!1;try{var j={get passive(){return A=!0},get once(){return k=A=!0}};S&&(window.addEventListener("test",j,j),window.removeEventListener("test",j,!0))}catch(ye){}var N=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!k){var a=r.once,i=r.capture,o=n;!k&&a&&(o=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=o),e.addEventListener(t,o,A?r:i)}e.addEventListener(t,n,r)};var P=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var L=function(e,t,n,r){return N(e,t,n,r),function(){P(e,t,n,r)}};function I(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=L(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function M(e,t,n,r){var a,i;null==n&&(a=C(e,"transitionDuration")||"",i=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*i||0);var o=I(e,n,r),u=L(e,"transitionend",t);return function(){o(),u()}}var R=n("i8i4"),D=n.n(R),_=!1,F=a.a.createContext(null),U=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(d.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[D.a.findDOMNode(this),r],i=a[0],o=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||_?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:D.a.findDOMNode(this);t&&!_?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:D.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,u(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(F.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function q(){}U.contextType=F,U.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:q,onEntering:q,onEntered:q,onExit:q,onExiting:q,onExited:q},U.UNMOUNTED="unmounted",U.EXITED="exited",U.ENTERING="entering",U.ENTERED="entered",U.EXITING="exiting";var B=U;var H,Y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var V={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function z(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=V[e];return n+parseInt(C(t,r[0]),10)+parseInt(C(t,r[1]),10)}var W=((H={}).exited="collapse",H.exiting="collapsing",H.entering="collapsing",H.entered="collapse show",H),K={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:z},Q=a.a.forwardRef((function(e,t){var n=e.onEnter,i=e.onEntering,c=e.onEntered,l=e.onExit,f=e.onExiting,p=e.className,d=e.children,m=e.dimension,v=void 0===m?"height":m,h=e.getDimensionValue,y=void 0===h?z:h,b=u(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"==typeof v?v():v,E=Object(r.useMemo)((function(){return Y((function(e){e.style[g]="0"}),n)}),[g,n]),T=Object(r.useMemo)((function(){return Y((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),i)}),[g,i]),x=Object(r.useMemo)((function(){return Y((function(e){e.style[g]=null}),c)}),[g,c]),w=Object(r.useMemo)((function(){return Y((function(e){e.style[g]=y(g,e)+"px",e.offsetHeight}),l)}),[l,y,g]),O=Object(r.useMemo)((function(){return Y((function(e){e.style[g]=null}),f)}),[g,f]);return a.a.createElement(B,o({ref:t,addEndListener:M},b,{"aria-expanded":b.role?b.in:null,onEnter:E,onEntering:T,onEntered:x,onExit:w,onExiting:O}),(function(e,t){return a.a.cloneElement(d,o({},t,{className:s()(p,d.props.className,W[e],"width"===g&&"width")}))}))}));Q.defaultProps=K;var X=Q,Z=a.a.createContext(null);Z.displayName="NavbarContext";var $=Z,G=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,i=u(e,["children","bsPrefix"]);return r=h(r,"navbar-collapse"),a.a.createElement($.Consumer,null,(function(e){return a.a.createElement(X,o({in:!(!e||!e.expanded)},i),a.a.createElement("div",{ref:t,className:r},n))}))}));G.displayName="NavbarCollapse";var J=G;var ee=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};var te=a.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.children,l=e.label,f=e.as,p=void 0===f?"button":f,d=e.onClick,m=u(e,["bsPrefix","className","children","label","as","onClick"]);n=h(n,"navbar-toggler");var v=Object(r.useContext)($)||{},y=v.onToggle,b=v.expanded,g=function(e){var t=ee(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}((function(e){d&&d(e),y&&y()}));return"button"===p&&(m.type="button"),a.a.createElement(p,o({},m,{ref:t,onClick:g,"aria-label":l,className:s()(i,n,!b&&"collapsed")}),c||a.a.createElement("span",{className:n+"-icon"}))}));te.displayName="NavbarToggle",te.defaultProps={label:"Toggle navigation"};var ne,re,ae,ie,oe,ue,ce,se,le=te,fe=a.a.createContext(null),pe=(ne="navbar-text",ie=(ae=void 0===(re={Component:"span"})?{}:re).displayName,oe=void 0===ie?y(ne):ie,ue=ae.Component,ce=ae.defaultProps,(se=a.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,i=e.as,c=void 0===i?ue||"div":i,l=u(e,["className","bsPrefix","as"]),f=h(r,ne);return a.a.createElement(c,o({ref:t,className:s()(n,f)},l))}))).defaultProps=ce,se.displayName=oe,se),de=a.a.forwardRef((function(e,t){var n=p(e,{expanded:"onToggle"}),i=n.bsPrefix,c=n.expand,l=n.variant,f=n.bg,d=n.fixed,m=n.sticky,v=n.className,y=n.children,b=n.as,g=void 0===b?"nav":b,E=n.expanded,T=n.onToggle,x=n.onSelect,w=n.collapseOnSelect,O=u(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),C=h(i,"navbar"),S=Object(r.useCallback)((function(){x&&x.apply(void 0,arguments),w&&E&&T&&T(!1)}),[x,w,E,T]);void 0===O.role&&"nav"!==g&&(O.role="navigation");var A=C+"-expand";"string"==typeof c&&(A=A+"-"+c);var k=Object(r.useMemo)((function(){return{onToggle:function(){return T&&T(!E)},bsPrefix:C,expanded:!!E}}),[C,E,T]);return a.a.createElement($.Provider,{value:k},a.a.createElement(fe.Provider,{value:S},a.a.createElement(g,o({ref:t},O,{className:s()(v,C,c&&A,l&&C+"-"+l,f&&"bg-"+f,m&&"sticky-"+m,d&&"fixed-"+d)}),y)))}));de.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},de.displayName="Navbar",de.Brand=g,de.Toggle=le,de.Collapse=J,de.Text=pe;var me=de,ve=function(){return a.a.createElement(me,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},a.a.createElement(me.Brand,{to:"#home"},"David Hersey Drupal"),a.a.createElement(me.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(me.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(i.Link,{to:"#articleOne",className:"nav-link"},"Article One"),a.a.createElement(i.Link,{to:"#articleTwo",className:"nav-link"},"Article Two"),a.a.createElement(i.Link,{to:"#articleThree",className:"nav-link"},"Article Three"),a.a.createElement(i.Link,{to:"#articleFour",className:"nav-link"},"Article Four")))},he=function(){return a.a.createElement("footer",null,"STUFF WILL GO IN THIS LOVELY FOOTER")};n("8ypT"),t.a=function(e){var t=e.children,n=Object(i.useStaticQuery)("256249292");return a.a.createElement(a.a.Fragment,null,a.a.createElement(ve,null),a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,n.site.siteMetadata.title),a.a.createElement("p",null,n.site.siteMetadata.description),t),a.a.createElement(he,null))}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=o.length)return!1;for(c=u;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((u=t.length)!=o.length)return!1;for(c=u;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],o[s[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return ve}));var r,a,i,o,u=n("17x9"),c=n.n(u),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),m=n.n(d),v=n("YVoz"),h=n.n(v),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),x="cssText",w="href",O="http-equiv",C="innerHTML",S="itemprop",A="name",k="property",j="rel",N="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",R="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",F=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),U=[E.NOSCRIPT,E.SCRIPT,E.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=G(e,E.TITLE),n=G(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,I);return t||r||void 0},Q=function(e){return G(e,D)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var u=i[o],c=u.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==C&&u!==x&&u!==S||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var u=i[o],c=h()({},r[u],a[u]);r[u]=c}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:e.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(E.BODY,r),ce(E.HTML,a),ue(f,p);var d={baseTag:se(E.BASE,n),linkTags:se(E.LINK,i),metaTags:se(E.META,o),noscriptTags:se(E.NOSCRIPT,u),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,l)},m={},v={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(v[e]=d[e].oldTags)})),t&&t(),c(e,m,v)},oe=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(E.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),u=0;u<o.length;u++){var c=o[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===x){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===x)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(b,a,r),link:pe(E.LINK,i,r),meta:pe(E.META,o,r),noscript:pe(E.NOSCRIPT,u,r),script:pe(E.SCRIPT,c,r),style:pe(E.STYLE,s,r),title:pe(E.TITLE,{title:f,titleAttributes:p},r)}},me=l()((function(e){return{baseTag:Z([w,P],e),bodyAttributes:X(y,e),defer:G(e,M),encode:G(e,R),htmlAttributes:X(b,e),linkTags:$(E.LINK,[j,w],e),metaTags:$(E.META,[A,T,O,k,S],e),noscriptTags:$(E.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:$(E.SCRIPT,[N,C],e),styleTags:$(E.STYLE,[x],e),title:K(e),titleAttributes:X(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),ve=(a=me,o=i=function(e){function t(){return B(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},i)});case E.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(V(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=V(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ve.renderStatic=ve.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("qhky"),o=n("Wbzz");function u(e){var t,n,r=e.description,u=e.lang,c=e.meta,s=e.title,l=Object(o.useStaticQuery)("63159454").site,f=r||l.siteMetadata.description,p=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(i.a,{htmlAttributes:{lang:u},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(c)})}u.defaultProps={lang:"en",meta:[],description:""},t.a=u},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-0438a6d64292b58a1a23.js.map