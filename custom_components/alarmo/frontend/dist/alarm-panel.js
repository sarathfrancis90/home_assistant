!function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function a(e,a,t,i){var s,n=arguments.length,r=n<3?a:null===i?i=Object.getOwnPropertyDescriptor(a,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,a,t,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(n<3?s(r):n>3?s(a,t,r):s(a,t))||r);return n>3&&r&&Object.defineProperty(a,t,r),r
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class s{constructor(e,a){if(a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n=new Map,r=e=>{let a=n.get(e);return void 0===a&&n.set(e,a=new s(e,i)),a},o=(e,...a)=>{const t=1===e.length?e[0]:a.reduce((a,t,i)=>a+(e=>{if(e instanceof s)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+e[i+1],e[0]);return r(t)},d=(e,a)=>{t?e.adoptedStyleSheets=a.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):a.forEach(a=>{const t=document.createElement("style");t.textContent=a.cssText,e.appendChild(t)})},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return(e=>r("string"==typeof e?e:e+""))(a)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var c,h,m,u;const p={toAttribute(e,a){switch(a){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,a){let t=e;switch(a){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},g=(e,a)=>a!==e&&(a==a||e==e),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};class _ extends HTMLElement{constructor(){super(),this.??i=new Map,this.??o=void 0,this.??l=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.??h=null,this.u()}static addInitializer(e){var a;null!==(a=this.v)&&void 0!==a||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((a,t)=>{const i=this.??p(t,a);void 0!==i&&(this.??m.set(i,t),e.push(i))}),e}static createProperty(e,a=v){if(a.state&&(a.attribute=!1),this.finalize(),this.elementProperties.set(e,a),!a.noAccessor&&!this.prototype.hasOwnProperty(e)){const t="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,t,a);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,a,t){return{get(){return this[a]},set(i){const s=this[e];this[a]=i,this.requestUpdate(e,s,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.??m=new Map,this.hasOwnProperty("properties")){const e=this.properties,a=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const t of a)this.createProperty(t,e[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)a.unshift(l(e))}else void 0!==e&&a.push(l(e));return a}static"??p"(e,a){const t=a.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.??g=new Promise(e=>this.enableUpdating=e),this.L=new Map,this.??_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach(e=>e(this))}addController(e){var a,t;(null!==(a=this.??U)&&void 0!==a?a:this.??U=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(t=e.hostConnected)||void 0===t||t.call(e))}removeController(e){var a;null===(a=this.??U)||void 0===a||a.splice(this.??U.indexOf(e)>>>0,1)}"??_"(){this.constructor.elementProperties.forEach((e,a)=>{this.hasOwnProperty(a)&&(this.??i.set(a,this[a]),delete this[a])})}createRenderRoot(){var e;const a=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return d(a,this.constructor.elementStyles),a}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.??U)||void 0===e||e.forEach(e=>{var a;return null===(a=e.hostConnected)||void 0===a?void 0:a.call(e)}),this.??l&&(this.??l(),this.??o=this.??l=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.??U)||void 0===e||e.forEach(e=>{var a;return null===(a=e.hostDisconnected)||void 0===a?void 0:a.call(e)}),this.??o=new Promise(e=>this.??l=e)}attributeChangedCallback(e,a,t){this.K(e,t)}"??j"(e,a,t=v){var i,s;const n=this.constructor.??p(e,t);if(void 0!==n&&!0===t.reflect){const r=(null!==(s=null===(i=t.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==s?s:p.toAttribute)(a,t.type);this.??h=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.??h=null}}K(e,a){var t,i,s;const n=this.constructor,r=n.??m.get(e);if(void 0!==r&&this.??h!==r){const e=n.getPropertyOptions(r),o=e.converter,d=null!==(s=null!==(i=null===(t=o)||void 0===t?void 0:t.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==s?s:p.fromAttribute;this.??h=r,this[r]=d(a,e.type),this.??h=null}}requestUpdate(e,a,t){let i=!0;void 0!==e&&(((t=t||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],a)?(this.L.has(e)||this.L.set(e,a),!0===t.reflect&&this.??h!==e&&(void 0===this.??k&&(this.??k=new Map),this.??k.set(e,t))):i=!1),!this.isUpdatePending&&i&&(this.??g=this.??q())}async"??q"(){this.isUpdatePending=!0;try{for(await this.??g;this.??o;)await this.??o}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.??i&&(this.??i.forEach((e,a)=>this[a]=e),this.??i=void 0);let a=!1;const t=this.L;try{a=this.shouldUpdate(t),a?(this.willUpdate(t),null===(e=this.??U)||void 0===e||e.forEach(e=>{var a;return null===(a=e.hostUpdate)||void 0===a?void 0:a.call(e)}),this.update(t)):this.??$()}catch(e){throw a=!1,this.??$(),e}a&&this.E(t)}willUpdate(e){}E(e){var a;null===(a=this.??U)||void 0===a||a.forEach(e=>{var a;return null===(a=e.hostUpdated)||void 0===a?void 0:a.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}"??$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.??g}shouldUpdate(e){return!0}update(e){void 0!==this.??k&&(this.??k.forEach((e,a)=>this.??j(a,this[a],e)),this.??k=void 0),this.??$()}updated(e){}firstUpdated(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var f,b,y,w;_.finalized=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null===(h=(c=globalThis).reactiveElementPlatformSupport)||void 0===h||h.call(c,{ReactiveElement:_}),(null!==(m=(u=globalThis).reactiveElementVersions)&&void 0!==m?m:u.reactiveElementVersions=[]).push("1.0.0-rc.2");const $=globalThis.trustedTypes,k=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,x="?"+A,j=`<${x}>`,O=document,C=(e="")=>O.createComment(e),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,E=/>/g,q=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,D=/'/g,N=/"/g,P=/^(?:script|style|textarea)$/i,L=(e=>(a,...t)=>({_$litType$:e,strings:a,values:t}))(1),R=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),I=new WeakMap,H=O.createTreeWalker(O,129,null,!1);class F{constructor({strings:e,_$litType$:a},t){let i;this.parts=[];let s=0,n=0;const r=e.length-1,o=this.parts,[d,l]=((e,a)=>{const t=e.length-1,i=[];let s,n=2===a?"<svg>":"",r=T;for(let a=0;a<t;a++){const t=e[a];let o,d,l=-1,c=0;for(;c<t.length&&(r.lastIndex=c,d=r.exec(t),null!==d);)c=r.lastIndex,r===T?"!--"===d[1]?r=z:void 0!==d[1]?r=E:void 0!==d[2]?(P.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=q):void 0!==d[3]&&(r=q):r===q?">"===d[0]?(r=null!=s?s:T,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,o=d[1],r=void 0===d[3]?q:'"'===d[3]?N:D):r===N||r===D?r=q:r===z||r===E?r=T:(r=q,s=void 0);const h=r===q&&e[a+1].startsWith("/>")?" ":"";n+=r===T?t+j:l>=0?(i.push(o),t.slice(0,l)+"$lit$"+t.slice(l)+A+h):t+A+(-2===l?(i.push(void 0),a):h)}const o=n+(e[t]||"<?>")+(2===a?"</svg>":"");return[void 0!==k?k.createHTML(o):o,i]})(e,a);if(this.el=F.createElement(d,t),H.currentNode=this.el.content,2===a){const e=this.el.content,a=e.firstChild;a.remove(),e.append(...a.childNodes)}for(;null!==(i=H.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(A)){const t=l[n++];if(e.push(a),void 0!==t){const e=i.getAttribute(t.toLowerCase()+"$lit$").split(A),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:a[2],strings:e,ctor:"."===a[1]?Q:"?"===a[1]?W:"@"===a[1]?K:B})}else o.push({type:6,index:s})}for(const a of e)i.removeAttribute(a)}if(P.test(i.tagName)){const e=i.textContent.split(A),a=e.length-1;if(a>0){i.textContent=$?$.emptyScript:"";for(let t=0;t<a;t++)i.append(e[t],C()),H.nextNode(),o.push({type:2,index:++s});i.append(e[a],C())}}}else if(8===i.nodeType)if(i.data===x)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(A,e+1));)o.push({type:7,index:s}),e+=A.length-1}s++}}static createElement(e,a){const t=O.createElement("template");return t.innerHTML=e,t}}function G(e,a,t=e,i){var s,n,r,o;if(a===R)return a;let d=void 0!==i?null===(s=t.??i)||void 0===s?void 0:s[i]:t.??o;const l=S(a)?void 0:a._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(n=null==d?void 0:d.O)||void 0===n||n.call(d,!1),void 0===l?d=void 0:(d=new l(e),d.T(e,t,i)),void 0!==i?(null!==(r=(o=t).??i)&&void 0!==r?r:o.??i=[])[i]=d:t.??o=d),void 0!==d&&(a=G(e,d.S(e,a.values),d,i)),a}class Y{constructor(e,a){this.l=[],this.N=void 0,this.D=e,this.M=a}u(e){var a;const{el:{content:t},parts:i}=this.D,s=(null!==(a=null==e?void 0:e.creationScope)&&void 0!==a?a:O).importNode(t,!0);H.currentNode=s;let n=H.nextNode(),r=0,o=0,d=i[0];for(;void 0!==d;){if(r===d.index){let a;2===d.type?a=new V(n,n.nextSibling,this,e):1===d.type?a=new d.ctor(n,d.name,d.strings,this,e):6===d.type&&(a=new Z(n,this,e)),this.l.push(a),d=i[++o]}r!==(null==d?void 0:d.index)&&(n=H.nextNode(),r++)}return s}v(e){let a=0;for(const t of this.l)void 0!==t&&(void 0!==t.strings?(t.I(e,t,a),a+=t.strings.length-2):t.I(e[a])),a++}}class V{constructor(e,a,t,i){this.type=2,this.N=void 0,this.A=e,this.B=a,this.M=t,this.options=i}setConnected(e){var a;null===(a=this.P)||void 0===a||a.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,a=this){e=G(this,e,a),S(e)?e===U||null==e||""===e?(this.H!==U&&this.R(),this.H=U):e!==this.H&&e!==R&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):(e=>{var a;return M(e)||"function"==typeof(null===(a=e)||void 0===a?void 0:a[Symbol.iterator])})(e)?this.g(e):this.m(e)}k(e,a=this.B){return this.A.parentNode.insertBefore(e,a)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const a=this.A.nextSibling;null!==a&&3===a.nodeType&&(null===this.B?null===a.nextSibling:a===this.B.previousSibling)?a.data=e:this.$(O.createTextNode(e)),this.H=e}_(e){var a;const{values:t,_$litType$:i}=e,s="number"==typeof i?this.C(e):(void 0===i.el&&(i.el=F.createElement(i.h,this.options)),i);if((null===(a=this.H)||void 0===a?void 0:a.D)===s)this.H.v(t);else{const e=new Y(s,this),a=e.u(this.options);e.v(t),this.$(a),this.H=e}}C(e){let a=I.get(e.strings);return void 0===a&&I.set(e.strings,a=new F(e)),a}g(e){M(this.H)||(this.H=[],this.R());const a=this.H;let t,i=0;for(const s of e)i===a.length?a.push(t=new V(this.k(C()),this.k(C()),this,this.options)):t=a[i],t.I(s),i++;i<a.length&&(this.R(t&&t.B.nextSibling,i),a.length=i)}R(e=this.A.nextSibling,a){var t;for(null===(t=this.P)||void 0===t||t.call(this,!1,!0,a);e&&e!==this.B;){const a=e.nextSibling;e.remove(),e=a}}}class B{constructor(e,a,t,i,s){this.type=1,this.H=U,this.N=void 0,this.V=void 0,this.element=e,this.name=a,this.M=i,this.options=s,t.length>2||""!==t[0]||""!==t[1]?(this.H=Array(t.length-1).fill(U),this.strings=t):this.H=U}get tagName(){return this.element.tagName}I(e,a=this,t,i){const s=this.strings;let n=!1;if(void 0===s)e=G(this,e,a,0),n=!S(e)||e!==this.H&&e!==R,n&&(this.H=e);else{const i=e;let r,o;for(e=s[0],r=0;r<s.length-1;r++)o=G(this,i[t+r],a,r),o===R&&(o=this.H[r]),n||(n=!S(o)||o!==this.H[r]),o===U?e=U:e!==U&&(e+=(null!=o?o:"")+s[r+1]),this.H[r]=o}n&&!i&&this.W(e)}W(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Q extends B{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===U?void 0:e}}class W extends B{constructor(){super(...arguments),this.type=4}W(e){e&&e!==U?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends B{constructor(){super(...arguments),this.type=5}I(e,a=this){var t;if((e=null!==(t=G(this,e,a,0))&&void 0!==t?t:U)===R)return;const i=this.H,s=e===U&&i!==U||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var a,t;"function"==typeof this.H?this.H.call(null!==(t=null===(a=this.options)||void 0===a?void 0:a.host)&&void 0!==t?t:this.element,e):this.H.handleEvent(e)}}class Z{constructor(e,a,t){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=a,this.options=t}I(e){G(this,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var J,X,ee,ae,te,ie;null===(b=(f=globalThis).litHtmlPlatformSupport)||void 0===b||b.call(f,F,V),(null!==(y=(w=globalThis).litHtmlVersions)&&void 0!==y?y:w.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(J=(ie=globalThis).litElementVersions)&&void 0!==J?J:ie.litElementVersions=[]).push("3.0.0-rc.2");class se extends _{constructor(){super(...arguments),this.renderOptions={host:this},this.??t=void 0}createRenderRoot(){var e,a;const t=super.createRenderRoot();return null!==(e=(a=this.renderOptions).renderBefore)&&void 0!==e||(a.renderBefore=t.firstChild),t}update(e){const a=this.render();super.update(e),this.??t=((e,a,t)=>{var i,s;const n=null!==(i=null==t?void 0:t.renderBefore)&&void 0!==i?i:a;let r=n._$litPart$;if(void 0===r){const e=null!==(s=null==t?void 0:t.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new V(a.insertBefore(C(),e),e,void 0,t)}return r.I(e),r})(a,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.??t)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.??t)||void 0===e||e.setConnected(!1)}render(){return R}}se.finalized=!0,se._$litElement$=!0,null===(ee=(X=globalThis).litElementHydrateSupport)||void 0===ee||ee.call(X,{LitElement:se}),null===(te=(ae=globalThis).litElementPlatformSupport)||void 0===te||te.call(ae,{LitElement:se});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ne=e=>a=>"function"==typeof a?((e,a)=>(window.customElements.define(e,a),a))(e,a):((e,a)=>{const{kind:t,elements:i}=a;return{kind:t,elements:i,finisher(a){window.customElements.define(e,a)}}})(e,a)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,re=(e,a)=>"method"===a.kind&&a.descriptor&&!("value"in a.descriptor)?{...a,finisher(t){t.createProperty(a.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:a.key,initializer(){"function"==typeof a.initializer&&(this[a.key]=a.initializer.call(this))},finisher(t){t.createProperty(a.key,e)}};function oe(e){return(a,t)=>void 0!==t?((e,a,t)=>{a.constructor.createProperty(t,e)})(e,a,t):re(e,a)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function de(e){return oe({...e,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var le=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ce="[^\\s]+",he=/\[([^]*?)\]/gm;function me(e,a){for(var t=[],i=0,s=e.length;i<s;i++)t.push(e[i].substr(0,a));return t}var ue=function(e){return function(a,t){var i=t[e].map((function(e){return e.toLowerCase()})).indexOf(a.toLowerCase());return i>-1?i:null}};function pe(e){for(var a=[],t=1;t<arguments.length;t++)a[t-1]=arguments[t];for(var i=0,s=a;i<s.length;i++){var n=s[i];for(var r in n)e[r]=n[r]}return e}var ge=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ve=["January","February","March","April","May","June","July","August","September","October","November","December"],_e=me(ve,3),fe={dayNamesShort:me(ge,3),dayNames:ge,monthNamesShort:_e,monthNames:ve,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},be=pe({},fe),ye=function(e,a){for(void 0===a&&(a=2),e=String(e);e.length<a;)e="0"+e;return e},we={D:function(e){return String(e.getDate())},DD:function(e){return ye(e.getDate())},Do:function(e,a){return a.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ye(e.getDay())},ddd:function(e,a){return a.dayNamesShort[e.getDay()]},dddd:function(e,a){return a.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ye(e.getMonth()+1)},MMM:function(e,a){return a.monthNamesShort[e.getMonth()]},MMMM:function(e,a){return a.monthNames[e.getMonth()]},YY:function(e){return ye(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ye(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ye(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ye(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ye(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ye(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ye(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ye(e.getMilliseconds(),3)},a:function(e,a){return e.getHours()<12?a.amPm[0]:a.amPm[1]},A:function(e,a){return e.getHours()<12?a.amPm[0].toUpperCase():a.amPm[1].toUpperCase()},ZZ:function(e){var a=e.getTimezoneOffset();return(a>0?"-":"+")+ye(100*Math.floor(Math.abs(a)/60)+Math.abs(a)%60,4)},Z:function(e){var a=e.getTimezoneOffset();return(a>0?"-":"+")+ye(Math.floor(Math.abs(a)/60),2)+":"+ye(Math.abs(a)%60,2)}},$e=function(e){return+e-1},ke=[null,"[1-9]\\d?"],Ae=[null,ce],xe=["isPm",ce,function(e,a){var t=e.toLowerCase();return t===a.amPm[0]?0:t===a.amPm[1]?1:null}],je=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var a=(e+"").match(/([+-]|\d\d)/gi);if(a){var t=60*+a[1]+parseInt(a[2],10);return"+"===a[0]?t:-t}return 0}],Oe=(ue("monthNamesShort"),ue("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Ce=function(e,a,t){if(void 0===a&&(a=Oe.default),void 0===t&&(t={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];a=(a=Oe[a]||a).replace(he,(function(e,a){return i.push(a),"@@@"}));var s=pe(pe({},be),t);return(a=a.replace(le,(function(a){return we[a](e,s)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function Se(e){return e.substr(0,e.indexOf("."))}function Me(e){return e.substr(e.indexOf(".")+1)}var Te="hass:bookmark",ze=function(e,a,t,i){i=i||{},t=null==t?{}:t;var s=new Event(a,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=t,e.dispatchEvent(s),s},Ee={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function qe(e,a){if(e in Ee)return Ee[e];switch(e){case"alarm_control_panel":switch(a){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return a&&"off"===a?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===a?"hass:window-closed":"hass:window-open";case"lock":return a&&"unlocked"===a?"hass:lock-open":"hass:lock";case"media_player":return a&&"off"!==a&&"idle"!==a?"hass:cast-connected":"hass:cast";case"zwave":switch(a){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+a+")"),Te}}var De=function(e,a,t){void 0===t&&(t=!1),t?history.replaceState(null,"",a):history.pushState(null,"",a),ze(window,"location-changed",{replace:t})},Ne={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Pe={binary_sensor:function(e){var a=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return a?"hass:battery":"hass:battery-outline";case"cold":return a?"hass:thermometer":"hass:snowflake";case"connectivity":return a?"hass:server-network-off":"hass:server-network";case"door":return a?"hass:door-closed":"hass:door-open";case"garage_door":return a?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return a?"hass:shield-check":"hass:alert";case"heat":return a?"hass:thermometer":"hass:fire";case"light":return a?"hass:brightness-5":"hass:brightness-7";case"lock":return a?"hass:lock":"hass:lock-open";case"moisture":return a?"hass:water-off":"hass:water";case"motion":return a?"hass:walk":"hass:run";case"occupancy":return a?"hass:home-outline":"hass:home";case"opening":return a?"hass:square":"hass:square-outline";case"plug":return a?"hass:power-plug-off":"hass:power-plug";case"presence":return a?"hass:home-outline":"hass:home";case"sound":return a?"hass:music-note-off":"hass:music-note";case"vibration":return a?"hass:crop-portrait":"hass:vibrate";case"window":return a?"hass:window-closed":"hass:window-open";default:return a?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var a="closed"!==e.state;switch(e.attributes.device_class){case"garage":return a?"hass:garage-open":"hass:garage";case"door":return a?"hass:door-open":"hass:door-closed";case"shutter":return a?"hass:window-shutter-open":"hass:window-shutter";case"blind":return a?"hass:blinds-open":"hass:blinds";case"window":return a?"hass:window-open":"hass:window-closed";default:return qe("cover",e.state)}},sensor:function(e){var a=e.attributes.device_class;if(a&&a in Ne)return Ne[a];if("battery"===a){var t=Number(e.state);if(isNaN(t))return"hass:battery-unknown";var i=10*Math.round(t/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var s=e.attributes.unit_of_measurement;return"??C"===s||"??F"===s?"hass:thermometer":qe("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?qe("input_datetime"):"hass:calendar":"hass:clock"}};const Le=async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"config"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const a=document.createElement("ha-panel-config");await a.routerOptions.routes.automation.load(),e.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")},Re=o`
  ha-card {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .card-header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.warning {
    color: var(--error-color);
    margin-top: 20px;
  }

  div.checkbox-row {
    min-height: 40px;
    display: flex;
    align-items: center;
  }

  div.checkbox-row ha-switch {
    margin-right: 20px;
  }

  div.checkbox-row.right ha-switch {
    margin-left: 20px;
    position: absolute;
    right: 0px;
  }

  mwc-button.active {
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
    border-radius: 4px;
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  mwc-button.success {
    --mdc-theme-primary: var(--success-color);
  }

  mwc-button.disabled.active {
    opacity: 0.5;
  }

  div.entity-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px 0px;
  }
  div.entity-row .info {
    margin-left: 16px;
    flex: 1 0 60px;
  }
  div.entity-row .info,
  div.entity-row .info > * {
    color: var(--primary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row .secondary {
    display: block;
    color: var(--secondary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row state-badge {
    flex: 0 0 40px;
  }

  ha-dialog div.wrapper {
    margin-bottom: -20px;
  }

  paper-textarea {
    width: 100%;
  }

  a,
  a:visited {
    color: var(--primary-color);
  }
  mwc-button ha-icon {
    padding-right: 11px;
  }
  mwc-button[trailingIcon] ha-icon {
    padding: 0px 0px 0px 6px;
  }
  mwc-button.vertical {
    height: 60px;
    --mdc-button-height: 60px;
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
  }
  mwc-button.vertical div {
    display: flex;
    flex-direction: column;
  }
  mwc-button.vertical span {
    display: flex;
  }
  mwc-button.vertical ha-icon {
    display: flex;
    margin-left: 50%;
  }
  mwc-tab ha-icon {
    --mdc-icon-size: 20px;
  }
  mwc-tab.disabled {
    --mdc-theme-primary: var(--disabled-text-color);
    --mdc-tab-color-default: var(--disabled-text-color);
    --mdc-tab-text-label-color-default: var(--disabled-text-color);
  }

  ha-card settings-row:first-child,
  ha-card settings-row:first-of-type {
    border-top: 0px;
  }

  ha-card > ha-card {
    margin: 10px;
  }

  div.table-filter {
    display: flex;
    width: 100%;
    min-height: 52px;
    border-top: 1px solid var(--divider-color);
    box-sizing: border-box;
    padding: 2px 8px;
    flex-direction: row;
    align-items: center;
  }
  div.table-filter .header {
    display: flex;
    white-space: nowrap;
    padding: 8px 8px;
  }
  div.table-filter[narrow] {
    flex-direction: column;
    align-items: flex-start;
  }
`,Ue=o`
  @media all and (min-width: 450px) and (min-height: 500px) {
    ha-paper-dialog {
      min-width: 400px;
    }
  }
  @media all and (max-width: 450px), all and (max-height: 500px) {
    paper-dialog,
    ha-paper-dialog {
      margin: 0;
      width: calc(
        100% - env(safe-area-inset-right) - env(safe-area-inset-left)
      ) !important;
      min-width: calc(
        100% - env(safe-area-inset-right) - env(safe-area-inset-left)
      ) !important;
      max-width: calc(
        100% - env(safe-area-inset-right) - env(safe-area-inset-left)
      ) !important;
      max-height: calc(100% - var(--header-height));
      position: fixed !important;
      bottom: 0px;
      left: env(safe-area-inset-left);
      right: env(safe-area-inset-right);
      overflow: scroll;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    /* overrule the ha-style-dialog max-height on small screens */
    ha-dialog {
      --mdc-dialog-max-height: 100%;
      height: 100%;
    }
  }
  @media all and (min-width: 850px) {
    ha-dialog {
      --mdc-dialog-min-width: 550px;
    }
  }
  ha-dialog div.description {
    margin-bottom: 10px;
  }
`;var Ie,He,Fe={modes_long:{armed_away:"Mode fora de casa activat",armed_home:"Mode a casa activat",armed_night:"Mode nit activat",armed_custom_bypass:"Mode personalitzat activat"},modes_short:{armed_away:"Fora",armed_home:"Casa",armed_night:"Nit",armed_custom_bypass:"Personalitzat"}},Ge={time_slider:{seconds:"seg",minutes:"min",infinite:"infinit",none:"cap"},editor:{ui_mode:"Canvia a UI",yaml_mode:"Canvia a YAML",edit_in_yaml:"Edit in YAML"}},Ye={general:{title:"General",cards:{general:{description:"Aquest tauler defineix alguns par??metres globals de l'alarma.",fields:{disarm_after_trigger:{heading:"Desactivar despr??s del disparador",description:"Quan hagi transcorregut el temps d???activaci??, desactiveu l???alarma en lloc de tornar a l???estat armat."},enable_mqtt:{heading:"Activa MQTT",description:"Permet controlar el tauler d'alarma mitjan??ant MQTT."},enable_master:{heading:"Activa l'alarma mestra",description:"Crea una entitat per controlar totes les ??rees simult??niament."}},actions:{setup_mqtt:"Configuraci?? MQTT",setup_master:"Configuraci?? mestra"}},modes:{title:"Modes",description:"Aquest tauler es pot utilitzar per configurar els modes d'activaci?? de l'alarma.",fields:{mode:{armed_away:"El mode fora de casa s'utilitzar?? quan totes les persones surtin de casa. Es controlen totes les portes i finestres que permeten l'acc??s a la casa, aix?? com els sensors de moviment dins de la casa.",armed_home:"El mode a casa (tamb?? conegut com mode casa) s'utilitzar?? quan configureu l'alarma mentre hi hagi persones a la casa. Es controlen totes les portes i finestres que permetin l'acc??s a la casa, per?? no els sensors de moviment a l'interior de la casa.",armed_night:"El mode nit s'utilitzar?? quan configureu l'alarma abans d'anar a dormir. Es controlaran totes les portes i finestres que permetin l'acc??s a la casa i es seleccionaran els sensors de moviment (per exemple, a la planta baixa) de la casa.",armed_custom_bypass:"Un mode addicional per definir el vostre propi per??metre de seguretat.",enabled:"Activat",disabled:"Desactivat"},exit_delay:{heading:"Retard de sortida",description:"Quan activeu l'alarma, en aquest per??ode de temps els sensors encara no activaran l'alarma."},entry_delay:{heading:"Retard d'entrada",description:"Temps de retard fins que s'activi l'alarma despr??s que s'activi un dels sensors."},trigger_time:{heading:"Temps d'activaci??",description:"Temps durant el qual sonar?? la sirena"}}},mqtt:{title:"Configuraci?? MQTT",description:"Aquest tauler es pot utilitzar per configurar la interf??cie MQTT.",fields:{state_topic:{heading:"Tema d'estat",description:"Tema sobre el qual es publiquen les actualitzacions d'estat"},event_topic:{heading:"Tema d'esdeveniment",description:"Tema sobre el qual es publiquen els esdeveniments d'alarma"},command_topic:{heading:"Tama d'ordre",description:"Tema sobre el qual s'envien les ordres d'activaci??/desactivaci??."},require_code:{heading:"Requereix codi",description:"Requereix l'enviament d'un codi amb l'ordre."},state_payload:{heading:"Configura la c??rrega ??til per estat",item:"Definiu una c??rrega ??til per a l'estat '{state}'"},command_payload:{heading:"Configura la c??rrega ??til per ordre",item:"Definiu una c??rrega ??til per a l'ordre '{command}'"}}},areas:{title:"??rees",description:"Les ??rees es poden utilitzar per dividir el sistema d'alarma en diversos compartiments.",no_items:"Encara no hi ha ??rees definides.",table:{remarks:"Observacions",summary:"Aquesta ??rea cont?? {summary_sensors} i {summary_automations}.",summary_sensors:"{number} sensors",summary_automations:"{number} automatismes"},actions:{add:"Afegeix"}}},dialogs:{create_area:{title:"??rea nova",fields:{copy_from:"Copia la configuraci?? de"}},edit_area:{title:"Edita l'??rea '{area}'",name_warning:"Nota: si canvieu el nom, es canviar?? l'identificador d'entitat"},remove_area:{title:"Voleu eliminar l'??rea?",description:"Confirmeu que voleu eliminar aquesta ??rea? Aquesta ??rea cont?? {sensors} sensors i {automatismes} automatismes, que tamb?? s'eliminaran."},edit_master:{title:"Configuraci?? mestra"},disable_master:{title:"Voleu desactivar l'alarma mestra?",description:"Confirmeu que voleu eliminar l'alarma mestra? Aquesta ??rea cont?? automatismes {automatismes}, que s'eliminaran amb aquesta acci??."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Sensors configurats actualment. Feu clic a una entitat per fer canvis.",no_items:"No hi ha cap sensor per mostrar",table:{arm_modes:"Modes d'armat",always_on:"(Sempre)"},filter:{label:"Filtra per ??rea",no_area:"(Sense ??rea)"}},add_sensors:{title:"Afegeix sensors",description:"Afegiu m??s sensors. Assegureu-vos que els vostres sensors tinguin un friendly_name perqu?? pugueu identificar-los.",no_items:"No hi ha entitats HA disponibles que es puguin configurar per a l'alarma. Assegureu-vos d'incloure entitats del tipus binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"afegeix a l'alarma",show_all:"Mostra-ho tot"}},editor:{title:"Edita el sensor",description:"Edita la configuraci?? del sensor de '{entity}'.",fields:{name:{heading:"Nom",description:"Sobreescriu el friendly_name"},area:{heading:"??rea",description:"Seleccioneu una ??rea que contingui aquest sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Tipus de dispositiu",description:"Trieu un tipus de dispositiu per aplicar autom??ticament la configuraci?? adequada.",choose:{door:{name:"Porta",description:"Porta, porta de garatge o altra entrada que s'utilitzi per entrar/sortir de casa."},window:{name:"Finestra",description:"Finestra o una porta que no s'utilitza per entrar a la casa, com ara un balc??."},motion:{name:"Moviment",description:"Sensor de pres??ncia o dispositiu similar que t?? un retard entre les activacions."},tamper:{name:"Antisabotatge",description:"Detector de retirada de la coberta del sensor, sensor de trencament de vidre, etc."},environmental:{name:"Ambiental",description:"Sensor de fum o gas, detector de fuites, etc. (no relacionat amb la protecci?? antirobatori)."},other:{name:"Gen??ric"}}},always_on:{heading:"Sempre activat",description:"El sensor sempre ha de disparar l'alarma."},modes:{heading:"Modes habilitats",description:"Modes d'alarma en qu?? aquest sensor est?? actiu."},arm_on_close:{heading:"Arma despr??s de tancar",description:"Despr??s de la desactivaci?? d'aquest sensor, s'omet autom??ticament el temps de retard de sortida restant."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Permet obrir mentre s'arma l'alarma",description:"Permeteu que aquest sensor estigui actiu poc despr??s de configurar-lo de manera que no bloquegi l'activaci?? de l'alarma."},auto_bypass:{heading:"Omet autom??ticament",description:"Excloeu aquest sensor de l'alarma si est?? obert mentre s'arma l'alarma.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Activador quan no estigui disponible",description:"Quan l'estat del sensor no estigui disponible, aix?? activar?? el sensor."}},actions:{toggle_advanced:"Configuraci?? avan??ada",remove:"Elimina",setup_groups:"Setup groups"},errors:{description:"Corregiu els errors seg??ents:",no_area:"No s'ha seleccionat cap ??rea",no_modes:"No s'han seleccionat modes per als quals el sensor hauria d'estar actiu",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group '{name}'"}}},codes:{title:"Codis",cards:{codes:{description:"Canvieu la configuraci?? del codi.",fields:{code_arm_required:{heading:"Utilitzeu un codi d'activaci??",description:"Requereix un codi per activar l'alarma"},code_disarm_required:{heading:"Utilitzeu un codi de desactivaci??",description:"Requereix un codi per desactivar l'alarma"},code_format:{heading:"Format del codi",description:"Estableix el tipus de codi per a la targeta d'alarma Lovelace.",code_format_number:"codi PIN",code_format_text:"contrasenya"}}},user_management:{title:"Gesti?? d'usuaris",description:"Cada usuari t?? el seu propi codi per activar/desactivar l'alarma.",no_items:"Encara no hi ha usuaris",table:{remarks:"Observacions",administrator:"Administrador"},actions:{new_user:"usuari nou"}},new_user:{title:"Crea un usuari nou",description:"Es poden crear usuaris per proporcionar acc??s al funcionament de l'alarma.",fields:{name:{heading:"Nom",description:"Nom de l'usuari."},code:{heading:"Codi",description:"Codi d'aquest usuari."},confirm_code:{heading:"Confirmeu el codi",description:"Repetiu el codi."},is_admin:{heading:"L'usuari ??s administrador",description:"Permetre a l'usuari fer canvis"},can_arm:{heading:"Permetre que el codi active l'alarma",description:"Entering this code activates the alarm"},can_disarm:{heading:"Permetre que el codi desactive l'alarma",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"??s un codi de sobreescriptura",description:"Si introdu??u aquest codi, es for??ar?? l'estat d'activaci?? de l'alarma"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No s'ha proporcionat cap nom.",no_code:"El codi ha de tenir 4 car??cters o n??meros com a m??nim.",code_mismatch:"Els codis no coincideixen."}},edit_user:{title:"Edita l'usuari",description:"Canvia la configuraci?? de l'usuari '{name}'.",fields:{old_code:{heading:"Codi actual",description:"Codi actual, deixeu-lo en blanc per deixar-lo sense canvis."}}}}},actions:{title:"Accions",cards:{notifications:{title:"Notificacions",description:"Utilitzant aquest tauler, podeu gestionar les notificacions que s'envien quan es produeix un determinat esdeveniment d'alarma.",table:{enabled:"Activat",no_items:"Encara no s'han creat notificacions."},actions:{new_notification:"nova notificaci??"},filter:{label:"Filtra per ??rea",no_area:"(Sense ??rea)"}},actions:{description:"Aquest tauler es pot utilitzar per canviar un dispositiu quan l'estat d'alarma canvia.",table:{no_items:"Encara no s'han creat accions."},actions:{new_action:"nova acci??"}},new_notification:{title:"Crea una notificaci??",description:"Crea una nova notificaci??.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Esdeveniment",description:"Quan s'ha d'enviar la notificaci??",choose:{armed:{name:"L'alarma est?? activada",description:"L'alarma s'ha activat correctament"},disarmed:{name:"L'alarma est?? desactivada",description:"L'alarma est?? desactivada"},triggered:{name:"L'alarma s'activat per esdeveniment",description:"L'alarma s'activat per esdeveniment"},arm_failure:{name:"No s'ha pogut activar l'alarma",description:"L'activaci?? de l'alarma ha fallat a causa d'un o m??s sensors estan oberts"},arming:{name:"S'ha iniciat el retard de sortida",description:"S'ha iniciat el retard de sortida, a punt per sortir de casa."},pending:{name:"S'ha iniciat el retard d'entrada",description:"El retard d'entrada s'ha iniciat, l'alarma s'activar?? aviat."}}},mode:{heading:"Mode",description:"Limita l'acci?? a modes espec??fics d'activaci?? (opcional)"},title:{heading:"T??tol",description:"T??tol del missatge de notificaci??"},message:{heading:"Missatge",description:"Contingut del missatge de notificaci??",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},target:{heading:"Destinatari",description:"Dispositiu al qual enviar el missatge"},name:{heading:"Nom",description:"Descripci?? d'aquesta notificaci??",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Prova-ho"}},new_action:{title:"Crea una acci??",description:"Aquest tauler es pot utilitzar per canviar un dispositiu quan l'estat d'alarma canvia.",fields:{event:{heading:"Esdeveniment",description:"Quan s'ha d'executar l'acci??"},area:{heading:"??rea",description:"??rea per a la qual s'aplica l'esdeveniment, deixeu-la en blanc per seleccionar l'alarma global."},mode:{heading:"Mode",description:"Limita l'acci?? a modes espec??fics d'activaci?? (opcional)"},entity:{heading:"Entitat",description:"Entitat en qu?? es realitzar?? l'acci??"},action:{heading:"Acci??",description:"Acci?? a realitzar a l'entitat",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nom",description:"Descripci?? d'aquesta acci??",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},Ve={common:Fe,components:Ge,title:"Tauler alarma",panels:Ye},Be=Object.freeze({__proto__:null,common:Fe,components:Ge,title:"Tauler alarma",panels:Ye,default:Ve}),Qe={modes_long:{armed_away:"Armed Away",armed_home:"Armed Home",armed_night:"Armed Night",armed_custom_bypass:"Armed Custom"},modes_short:{armed_away:"Away",armed_home:"Home",armed_night:"Night",armed_custom_bypass:"Custom"}},We={time_slider:{seconds:"sec",minutes:"min",infinite:"infinite",none:"none"},editor:{ui_mode:"To UI",yaml_mode:"To YAML",edit_in_yaml:"Edit in YAML"}},Ke={general:{title:"General",cards:{general:{description:"This panel defines some global settings for the alarm.",fields:{disarm_after_trigger:{heading:"Disarm after trigger",description:"After trigger time has expired, disarm the alarm instead of returning to armed state."},enable_mqtt:{heading:"Enable MQTT",description:"Allow the alarm panel to be controlled through MQTT."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"MQTT Configuration",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",fields:{mode:{armed_away:"Armed away will be used when all people left the house. All doors and windows allowing access to the house will be guarded, as well as motion sensors inside the house.",armed_home:"Armed home (also known as armed stay) will be used when setting the alarm while people are in the house. All doors and windows allowing access to the house will be guarded, but not motion sensors inside the house.",armed_night:"Armed night will be used when setting the alarm before going to sleep. All doors and windows allowing access to the house will be guarded, and selected motion sensors (downstairs) in the house.",armed_custom_bypass:"An extra mode for defining your own security perimeter.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Exit delay",description:"When arming the alarm, within this time period the sensors will not trigger the alarm yet."},entry_delay:{heading:"Entry delay",description:"Delay time until the alarm is triggered after one of the sensors is activated."},trigger_time:{heading:"Trigger time",description:"Time during which the alarm will remain in the triggered state after activation."}}},mqtt:{title:"MQTT configuration",description:"This panel can be used for configuration of the MQTT interface.",fields:{state_topic:{heading:"State topic",description:"Topic on which state updates are published"},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Command topic",description:"Topic which Alarmo listens to for arm/disarm commands."},require_code:{heading:"Require code",description:"Require the code to be sent with the command."},state_payload:{heading:"Configure payload per state",item:"Define a payload for state '{state}'"},command_payload:{heading:"Configure payload per command",item:"Define a payload for command '{command}'"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} sensors",summary_automations:"{number} automations"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area '{area}'",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Currently configured sensors. Click on an entity to make changes.",no_items:"There are no sensors to be displayed here.",table:{arm_modes:"Arm Modes",always_on:"(Always)"},filter:{label:"Filter by area",no_area:"(No area)"}},add_sensors:{title:"Add Sensors",description:"Add more sensors. Make sure that your sensors have a friendly_name, so you can identify them.",no_items:"There are no available HA entities that can be configured for the alarm. Make sure to include entities of the type binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"add to alarm",show_all:"Show all"}},editor:{title:"Edit Sensor",description:"Configuring the sensor settings of '{entity}'.",fields:{name:{heading:"Name",description:"Overwrite friendly name."},area:{heading:"Area",description:"Select an area which contains this sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Always on",description:"Sensor should always trigger the alarm."},modes:{heading:"Enabled modes",description:"Alarm modes in which this sensor is active."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Allow open after arming",description:"If the sensor is still active after the exit delay, this will not cause arming to fail."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Trigger when unavailable",description:"When the sensor state becomes 'unavailable', this will activate the sensor."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove",setup_groups:"Setup groups"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group '{name}'"}}},codes:{title:"Codes",cards:{codes:{description:"Change settings for the code.",fields:{code_arm_required:{heading:"Use arm code",description:"Require a code for arming the alarm"},code_disarm_required:{heading:"Use disarm code",description:"Require a code for disarming the alarm"},code_format:{heading:"Code format",description:"Sets the input type for Lovelace alarm card.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"User management",description:"Each user has its own code to arm/disarm the alarm.",no_items:"There are no users yet",table:{remarks:"Remarks",administrator:"Administrator"},actions:{new_user:"new user"}},new_user:{title:"Create new user",description:"Users can be created for providing access to operating the alarm.",fields:{name:{heading:"Name",description:"Name of the user."},code:{heading:"Code",description:"Code for this user."},confirm_code:{heading:"Confirm code",description:"Repeat the code."},is_admin:{heading:"User is administrator",description:"Allow user to make changes"},can_arm:{heading:"Allow code for arming",description:"Entering this code activates the alarm"},can_disarm:{heading:"Allow code for disarming",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"Is override code",description:"Entering this code will arm the alarm in force"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No name provided.",no_code:"Code should have 4 characters/numbers minimum.",code_mismatch:"The codes don't match."}},edit_user:{title:"Edit User",description:"Change configuration for user '{name}'.",fields:{old_code:{heading:"Current code",description:"Current code, leave empty to leave unchanged."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"Using this panel, you can manage notifications to be sent when during a certain alarm event.",table:{enabled:"Enabled",no_items:"There are no notifications created yet."},actions:{new_notification:"new notification"},filter:{label:"Filter by area",no_area:"(No area)"}},actions:{description:"This panel can be used to switch a device when the alarm state changes.",table:{no_items:"There are no actions created yet."},actions:{new_action:"new action"}},new_notification:{title:"Configure notification",description:"Receive a notification when arming/disarming the alarm, on activation, etc.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Event",description:"When should the notification be sent",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},title:{heading:"Title",description:"Title for the notification message"},message:{heading:"Message",description:"Content of the notification message",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},target:{heading:"Target",description:"Device to send the push message to"},name:{heading:"Name",description:"Description for this notification",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Configure action",description:"Switch lights or devices (such as sirens) when arming/disarming the alarm, on activation, etc.",fields:{event:{heading:"Event",description:"When should the action be executed"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},entity:{heading:"Entity",description:"Entity to perform action on"},action:{heading:"Action",description:"Action to perform on the entity",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Name",description:"Description for this action",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},Ze={common:Qe,components:We,title:"Alarm panel",panels:Ke},Je=Object.freeze({__proto__:null,common:Qe,components:We,title:"Alarm panel",panels:Ke,default:Ze}),Xe={modes_long:{armed_away:"Armado ausente",armed_home:"Armado en casa",armed_night:"Armado nocturno",armed_custom_bypass:"Armado personalizado"},modes_short:{armed_away:"Ausente",armed_home:"En casa",armed_night:"Nocturno",armed_custom_bypass:"Personalizado"}},ea={time_slider:{seconds:"seg",minutes:"min",infinite:"infinito",none:"ninguno"},editor:{ui_mode:"Editar en la UI",yaml_mode:"Editar en YAML",edit_in_yaml:"Edit in YAML"}},aa={general:{title:"General",cards:{general:{description:"Este panel define algunos ajustes globales para la alarma.",fields:{disarm_after_trigger:{heading:"Desarmar despu??s de disparar",description:"Una vez transcurrido el tiempo de activaci??n, desactivar la alarma en lugar de volver al estado de armada."},enable_mqtt:{heading:"Habilitar MQTT",description:"Permitir que el panel de alarma se controle a trav??s de MQTT."},enable_master:{heading:"Habilitar alarma maestra",description:"Crea una entidad para controlar todas las ??reas simult??neamente."}},actions:{setup_mqtt:"Configuraci??n MQTT",setup_master:"Configuraci??n maestra"}},modes:{title:"Modos",description:"Este panel se puede utilizar para configurar los modos de armado de la alarma.",fields:{mode:{armed_away:"Armado ausente se utilizar?? cuando todas las personas salgan de la casa. Todas las puertas y ventanas que permitan el acceso a la casa estar??n vigiladas, as?? como los sensores de movimiento dentro de la casa.",armed_home:"Armado en casa (tambi??n conocido como estancia armada) se utilizar?? cuando se active la alarma mientras haya personas en la casa. Todas las puertas y ventanas que permitan el acceso a la casa estar??n protegidas, pero no los sensores de movimiento dentro de la casa.",armed_night:"Armado nocturno se usar?? al configurar la alarma antes de irse a dormir. Todas las puertas y ventanas que permitan el acceso a la casa estar??n resguardadas y se seleccionar??n sensores de movimiento en la casa.",armed_custom_bypass:"Un modo adicional para definir su propio per??metro de seguridad.",enabled:"Habilitar",disabled:"Deshabilitar"},exit_delay:{heading:"Retardo de salida",description:"Al armar la alarma, dentro de este per??odo de tiempo, los sensores a??n no disparar??n la alarma."},entry_delay:{heading:"Retardo de entrada",description:"Tiempo de retardo hasta que se activa la alarma despu??s de que se active alguno de los sensores."},trigger_time:{heading:"Tiempo de activaci??n",description:"Tiempo durante el cual sonar?? la sirena."}}},mqtt:{title:"Configuraci??n MQTT",description:"Este panel se puede utilizar para configurar la interfaz MQTT.",fields:{state_topic:{heading:"Tema del estado",description:"Tema sobre el que se publican las actualizaciones de estado."},event_topic:{heading:"Tema del evento",description:"Tema sobre el que se publican los eventos de alarma."},command_topic:{heading:"Tema del comando",description:"Tema sobre el que se env??an los comandos de armado / desarmado."},require_code:{heading:"Requerir c??digo",description:"Requiere que el c??digo se env??e con el comando."},state_payload:{heading:"Configurar la carga ??til por estado",item:"Defina una carga ??til para el estado '{state}'"},command_payload:{heading:"Configurar la carga ??til por comando",item:"Defina una carga ??til para el comando '{command}'"}}},areas:{title:"??reas",description:"Las ??reas se pueden utilizar para dividir su sistema de alarma en varios compartimentos.",no_items:"A??n no hay ??reas definidas.",table:{remarks:"Comentarios",summary:"Esta ??rea contiene {summary_sensors} y {summary_automations}.",summary_sensors:"{number} sensores",summary_automations:"{number} automatizaciones"},actions:{add:"Agregar"}}},dialogs:{create_area:{title:"Nueva ??rea",fields:{copy_from:"Copiar la configuraci??n de"}},edit_area:{title:"Editando ??rea '{area}'",name_warning:"Nota: cambiar el nombre cambiar?? el ID de la entidad."},remove_area:{title:"??Eliminar ??rea?",description:"??Est?? seguro de que desea eliminar esta ??rea? Esta ??rea contiene {sensors} sensores y {automations} automatizaciones que tambi??n se eliminar??n."},edit_master:{title:"Configuraci??n maestra"},disable_master:{title:"??Deshabilitar maestro?",description:"??Est?? seguro de que desea eliminar la alarma maestra? Esta ??rea contiene {sensors} sensores y {automations} automatizaciones que tambi??n se eliminar??n."}}},sensors:{title:"Sensores",cards:{sensors:{description:"Sensores configurados actualmente. Haga clic en una entidad para realizar cambios.",no_items:"No hay sensores para mostrar aqu??.",table:{arm_modes:"Modos de armado",always_on:"(Siempre)"},filter:{label:"Filtrar por ??rea",no_area:"(Sin ??rea)"}},add_sensors:{title:"Agregar  sensores",description:"Agrega m??s sensores. Aseg??rate de que tus sensores tengan un nombre amigable, para que puedas identificarlos.",no_items:"No hay entidades HA disponibles que se puedan configurar para la alarma. Aseg??rese de incluir entidades del tipo sensor binario.",table:{type:"Detected type"},actions:{add_to_alarm:"agregar a la alarma",show_all:"Mostrar todo"}},editor:{title:"Editar sensor",description:"Configurando los ajustes del sensor de '{entity}'.",fields:{name:{heading:"Nombre",description:"Sobrescribir nombre descriptivo."},area:{heading:"??rea",description:"Seleccione un ??rea que contenga este sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Tipo de dispositivo",description:"Elija un tipo de dispositivo para aplicar autom??ticamente la configuraci??n adecuada.",choose:{door:{name:"Puerta",description:"Una puerta, port??n u otra entrada que se utilice para entrar / salir de la casa."},window:{name:"Ventana",description:"Una ventana o una puerta que no se use para entrar a la casa, como un balc??n."},motion:{name:"Movimiento",description:"Sensor de presencia o dispositivo similar que tiene un retardo entre activaciones."},tamper:{name:"Sabotaje",description:"Detector de extracci??n de la cubierta del sensor, sensor de rotura de vidrio, etc."},environmental:{name:"Medioambiental",description:"Sensor de humo / gas, detector de fugas, etc. (no relacionado con la protecci??n antirrobo)."},other:{name:"Gen??rico"}}},always_on:{heading:"Siempre encendido",description:"El sensor siempre debe activar la alarma."},modes:{heading:"Modos habilitados",description:"Modos de alarma en los que este sensor est?? activo."},arm_on_close:{heading:"Armar despu??s de cerrar",description:"Despu??s de la desactivaci??n de este sensor, el retardo de salida restante se saltar?? autom??ticamente."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Permitir abrir mientras se arma",description:"Permita que este sensor se active poco despu??s de salir de manera que no bloquee el armado."},auto_bypass:{heading:"Omitir autom??ticamente",description:"Excluya este sensor de la alarma si est?? abierto mientras se arma.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Activar cuando no est?? disponible",description:"Cuando el estado del sensor se vuelve 'no disponible', esto activar?? el sensor."}},actions:{toggle_advanced:"Configuraci??n avanzada",remove:"Eliminar",setup_groups:"Setup groups"},errors:{description:"Por favor, corrija los siguientes errores:",no_area:"No se ha seleccionado ninguna ??rea.",no_modes:"No se han seleccionados modos para los que el sensor deba estar activo.",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group '{name}'"}}},codes:{title:"C??digos",cards:{codes:{description:"Cambiar la configuraci??n del c??digo.",fields:{code_arm_required:{heading:"Usar c??digo de armado",description:"Requiere un c??digo para armar la alarma."},code_disarm_required:{heading:"Usar c??digo de desarmado",description:"Requiere un c??digo para desarmar la alarma."},code_format:{heading:"Formato del c??digo",description:"Establece el tipo de entrada para la tarjeta de la alarma.",code_format_number:"c??digo PIN",code_format_text:"contrase??a"}}},user_management:{title:"Gesti??n de usuarios",description:"Cada usuario tiene su propio c??digo para armar / desarmar la alarma.",no_items:"A??n no hay usuarios",table:{remarks:"Comentarios",administrator:"Administrador"},actions:{new_user:"nuevo usuario"}},new_user:{title:"Crear nuevo usuario",description:"Se pueden crear usuarios para proporcionar acceso a la operaci??n de la alarma.",fields:{name:{heading:"Nombre",description:"Nombre del usuario."},code:{heading:"C??digo",description:"C??digo para este usuario."},confirm_code:{heading:"Confirmar c??digo",description:"Repite el c??digo."},is_admin:{heading:"El usuario es administrador",description:"Permitir al usuario realizar cambios."},can_arm:{heading:"Permitir c??digo para armar",description:"Al ingresar este c??digo se activa la alarma."},can_disarm:{heading:"Permitir c??digo para desarmar",description:"Al ingresar este c??digo se desactiva la alarma."},is_override_code:{heading:"Es un c??digo de anulaci??n",description:"Al ingresar este c??digo se forzar?? el armado de la alarma."},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No se proporcion?? ning??n nombre.",no_code:"El c??digo debe tener 4 caracteres / n??meros como m??nimo.",code_mismatch:"Los c??digos no coinciden."}},edit_user:{title:"Editar usuario",description:"Cambiar la configuraci??n del usuario '{name}'.",fields:{old_code:{heading:"C??digo actual",description:"C??digo actual, d??jelo en blanco para no modificarlo."}}}}},actions:{title:"Acciones",cards:{notifications:{title:"Notificaciones",description:"Usando este panel, puede administrar las notificaciones que se enviar??n durante un evento de alarma determinado.",table:{enabled:"Habilitado",no_items:"A??n no se han creado notificaciones."},actions:{new_notification:"nueva notificaci??n"},filter:{label:"Filtrar por ??rea",no_area:"(Sin ??rea)"}},actions:{description:"Este panel se puede utilizar para cambiar un dispositivo cuando cambia el estado de alarma.",table:{no_items:"A??n no se han creado acciones."},actions:{new_action:"nueva acci??n"}},new_notification:{title:"Crear notificaci??n",description:"Crear una nueva notificaci??n.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Evento",description:"Cu??ndo debe enviarse la notificaci??n.",choose:{armed:{name:"La alarma est?? armada",description:"La alarma est?? correctamente armada."},disarmed:{name:"La alarma est?? desarmada",description:"La alarma est?? desarmada."},triggered:{name:"Se ha disparado la alarma",description:"La alarma se ha disparado."},arm_failure:{name:"No se pudo armar",description:"El armado de la alarma fall?? debido a uno o m??s sensores abiertos."},arming:{name:"Se ha iniciado el retardo de salida",description:"Se ha iniciado el retardo de salida, listo para salir de la casa."},pending:{name:"Se ha iniciado el retardo de entrada",description:"Se ha iniciado el retardo de entrada, la alarma se disparar?? pronto."}}},mode:{heading:"Modo",description:"Limita la acci??n a modos de armado espec??ficos (opcional)."},title:{heading:"T??tulo",description:"T??tulo del mensaje de notificaci??n."},message:{heading:"Mensaje",description:"Contenido del mensaje de notificaci??n.",insert_wildcard:"Insertar comod??n",placeholders:{armed:"La alarma est?? configurada en {{arm_mode}}",disarmed:"Ahora la alarma est?? APAGADA",triggered:"??Se ha disparado la alarma! Causa: {{open_sensors}}.",arm_failure:"No se pudo armar la alarma en este momento debido a: {{open_sensors}}.",arming:"Se armar?? pronto la alarma, por favor, salga de la casa.",pending:"??La alarma est?? a punto de dispararse, desarme r??pidamente!"}},target:{heading:"Objetivo",description:"Dispositivo al que enviar el mensaje push."},name:{heading:"Nombre",description:"Descripci??n de esta notificaci??n.",placeholders:{armed:"Notificar a {target} al armar",disarmed:"Notificar a {target} al desarmar",triggered:"Notificar a {target} cuando se dispare",arm_failure:"Notificar a {target} si falla",arming:"Notificar a {target} cuando se vaya",pending:"Notificar a {target} cuando llegue"}},delete:{heading:"Eliminar automatizaci??n",description:"Eliminar esta automatizaci??n de forma permanente"}},actions:{test:"Pru??belo"}},new_action:{title:"Crear acci??n",description:"Este panel se puede utilizar para cambiar un dispositivo cuando cambia el estado de la alarma.",fields:{event:{heading:"Evento",description:"??Cu??ndo debe ejecutarse la acci??n?"},area:{heading:"??rea",description:"??rea para la que se aplica el evento, d??jelo en blanco para seleccionar la alarma global."},mode:{heading:"Modo",description:"Limita la acci??n a modos de armado espec??ficos (opcional)"},entity:{heading:"Entidad",description:"Entidad sobre la que realizar la acci??n."},action:{heading:"Acci??n",description:"Acci??n a realizar en la entidad.",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nombre",description:"Descripci??n de esta acci??n.",placeholders:{armed:"Establecer {entity} en {state} al armar",disarmed:"Establecer {entity} en {state} al desarmar",triggered:"Establecer {entity} en {state} cuando se dispare",arm_failure:"Establecer {entity} en {state} si falla",arming:"Establecer {entity} en {state} cuando se vaya",pending:"Establecer {entity} en {state} cuando llegue"}}}}}}},ta={common:Xe,components:ea,title:"Panel de alarma",panels:aa},ia=Object.freeze({__proto__:null,common:Xe,components:ea,title:"Panel de alarma",panels:aa,default:ta}),sa={modes_long:{armed_away:"Valvestatud eemal",armed_home:"Valvestatud kodus",armed_night:"Valvestatud ????seks",armed_custom_bypass:"Valikuline valvestus"},modes_short:{armed_away:"Eemal",armed_home:"Kodus",armed_night:"????seks",armed_custom_bypass:"Valikuline"}},na={time_slider:{seconds:"sek",minutes:"min",infinite:"piiranguta",none:"puudub"},editor:{ui_mode:"Kasutajaliides",yaml_mode:"Koodiredaktor",edit_in_yaml:"Edit in YAML"}},ra={general:{title:"??lds??tted",cards:{general:{description:"Need seaded kehtivad k??ikides valve olekutes.",fields:{disarm_after_trigger:{heading:"H??ire summutamine",description:"Peale h??ire l??ppu v??ta valvest maha miite ??ra valvesta uuesti."},enable_mqtt:{heading:"Luba MQTT juhtimine",description:"Luba nupustiku juhtimist MQTT abil."},enable_master:{heading:"Luba p??hivalvestus",description:"Loob olemi mis haldab k??iki valvestamise alasid korraga."}},actions:{setup_mqtt:"MQTT seadistamine",setup_master:"P??hivalvestuse s??tted"}},modes:{title:"Re??iimid",description:"Selles vaates seadistatakse valvestamise re??iime.",fields:{mode:{armed_away:"T??ielik valvestamine kui kedagi pole kodus. Kasutusel on k??ik andurid.",armed_home:"Valvestatud kodus ei kasuta liikumisandureid kuid v??isuksed ja aknad on valve all.",armed_night:"Valvestatud ????seks ei kasuta m????ratud liikumisandureid, v??lisperimeeter on valve all.",armed_custom_bypass:"Valikulise valvestuse puhul saab m????rata kasutatavad andurid.",enabled:"Lubatud",disabled:"Keelatud"},exit_delay:{heading:"Ooteaeg valvestamisel",description:"Viivitus enne valvestamise rakendumist."},entry_delay:{heading:"Sisenemise viivitus",description:"Viivitus sisenemisel enne h??ire rakendumist."},trigger_time:{heading:"H??ire kestus",description:"Sireeni jne. aktiveerimise kestus."}}},mqtt:{title:"MQTT s??tted",description:"MQTT parameetrite seadistamine.",fields:{state_topic:{heading:"Oleku teema (topic)",description:"Teema milles avaldatakse oleku muutused."},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"K??skude teema (topic)",description:"Teema milles avaldatakse valvestamise k??sud."},require_code:{heading:"N??ua PIN koodi",description:"K??skude edastamiseks on vajalik PIN kood."},state_payload:{heading:"M????ra olekute toimeandmed",item:"M????ra oleku '{state}' toimeandmed"},command_payload:{heading:"M????ra k??skude toimeandmed",item:"M????ra k??su '{command}' toimeandmed"}}},areas:{title:"Alad",description:"Alasid kasutatakse elamise jagamiseks valvetsoonideks.",no_items:"Valvestamise alad on loomata.",table:{remarks:"Ala teave",summary:"See ala sisaldab {summary_sensors} ja {summary_automations}.",summary_sensors:"{number} andur(it)",summary_automations:"{number} automatiseering(ut)"},actions:{add:"Lisa"}}},dialogs:{create_area:{title:"Uus ala",fields:{copy_from:"Kopeeri s??tted allikast:"}},edit_area:{title:"Ala '{area}' muutmine",name_warning:"NB! Nime muutmisel muutub ka olemi ID"},remove_area:{title:"Kas kustutada ala?",description:"Kas kustutada see ala? Ala kaasab andurid {sensors} ja automatiseeringud {automations} mis samuti eemaldatakse."},edit_master:{title:"P??hiala seaded"},disable_master:{title:"Kas keelata p??hiala?",description:"Kas keelata p??hiala? Ala kaasab andurid {sensors} ja automatiseeringud {automations} mis samuti eemaldatakse.."}}},sensors:{title:"Andurid",cards:{sensors:{description:"Kasutusel olevad andurid. Kl??psa olemil, et seadistada.",no_items:"Andureid pole lisatud. Alustuseks lisa m??ni andur.",table:{arm_modes:"Valvestamise olek",always_on:"(alati)"},filter:{label:"Sordi ala j??rgi",no_area:"(Alad puuduvad)"}},add_sensors:{title:"Andurite lisamine",description:"Lisa veel andureid. M??istlik on panna neile arusaadav nimi (friendly_name).",no_items:"Puuduvad valvestamiseks sobivad Home Assistanti olemid. Lisatavad olemid peavad olema olekuandurid (binary_sensor).",table:{type:"Detected type"},actions:{add_to_alarm:"Lisa valves??steemile",show_all:"Kuva k??ik andurid"}},editor:{title:"Andurite s??tted",description:"Muuda olemi '{entity}' s??tteid.",fields:{name:{heading:"Nimi",description:"Muuda kuvatavat nime."},area:{heading:"Ala",description:"Vali ala kus see andur asub."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Seadme t????p",description:"Vali anduri t????p, et automaatselt rakendada sobivad s??tted.",choose:{door:{name:"Uks",description:"Uks, v??rav v??i muu piire mida kasutatakse sisenemiseks v??i v??ljumiseks."},window:{name:"Aken",description:"Aken v??i uks mida ei kasutata sisenemiseks nagu r??duuks."},motion:{name:"Liikumisandur",description:"Kohaloleku andurid mille rakendumiste vahel on viide."},tamper:{name:"Terviklikkus",description:"Anduri muukimine v??i klaasipurustusandur jms."},environmental:{name:"Ohu andurid",description:"Suitsu v??i gaasilekke andur, veeleke jne. (ei ole seotud sissetungimisega)."},other:{name:"Tavaandur"}}},always_on:{heading:"Alati kasutusel",description:"Andur k??ivitab h??ire igas valve olekus."},modes:{heading:"Valve olekute valik",description:"Valve olekud kus seda andurit kasutatakse."},arm_on_close:{heading:"Valvesta sulgemisel",description:"Selle anduri rakendumisel valvestatakse kohe ilma viiveta."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Lahkumisviivitus",description:"See andur ei aktiveeru enne lahkumisviivituse l??ppu."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Andurite saadavus",description:"K??ivita h??ire kui andur muutub k??ttesaamatuks."}},actions:{toggle_advanced:"T??psemad s??tted",remove:"Eemalda",setup_groups:"Setup groups"},errors:{description:"Palun paranda j??gmised vead:",no_area:"Ala pole m????ratud",no_modes:"Anduri t????p on m????ramata, ei tea kuida kasutada",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group '{name}'"}}},codes:{title:"Koodid",cards:{codes:{description:"Valvestuskoodide muutmine.",fields:{code_arm_required:{heading:"Valvestamine koodiga",description:"Valvestamiseks tuleb sisestada kood"},code_disarm_required:{heading:"Valvest vabastamise kood",description:"Valvest vabastamiseks tulem sisestada kood"},code_format:{heading:"Koodi vorming",description:"Kasutajaliidese koodi t????bid.",code_format_number:"PIN kood",code_format_text:"Salas??na"}}},user_management:{title:"Kasutajate haldus",description:"Igal kasutajal on oma juhtkood.",no_items:"Kasutajaid pole m????ratud",table:{remarks:"M??rkused",administrator:"Haldaja"},actions:{new_user:"Uus kasutaja"}},new_user:{title:"Lisa uus kasutaja",description:"Valves??steemi kasutaja lisamine.",fields:{name:{heading:"Nimi",description:"Kasutaja nimi."},code:{heading:"Valvestuskood",description:"Selle kasutaja kood."},confirm_code:{heading:"Koodi kinnitamine",description:"Sisesta sama kood uuesti."},is_admin:{heading:"Kasutajal on haldus??igused",description:"Kasutaja saab teha muudatusi."},can_arm:{heading:"Tohib valvestada",description:"Koodi sisestamine valvestab."},can_disarm:{heading:"Tohib valvest maha v??tta",description:"Koodi sisestamine v??tab valvest maha."},is_override_code:{heading:"Alistuskood",description:"Koodi sisestamine k??ivitab kohese h??ire"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"Nimi puudub.",no_code:"Kood peab olema vhemalt 4 t??rki.",code_mismatch:"Sisestatud koodid ei klapi."}},edit_user:{title:"Muuda kasutaja s??tteid",description:"Muuda kasutaja '{name}' s??tteid.",fields:{old_code:{heading:"Kehtiv kood",description:"Kehtiv kood, j??ta t??hjaks kui ei taha muuta."}}}}},actions:{title:"Toimingud",cards:{notifications:{title:"Teavitused",description:"Halda saadetavaid teavitusi",table:{enabled:"Lubatud",no_items:"Teavitusi pole veel loodud."},actions:{new_notification:"Uus teavitus"},filter:{label:"Sordi alade j??rgi",no_area:"(Alad puuduvad)"}},actions:{description:"Arenduses, m??eldud seadmete l??litamiseks.",table:{no_items:"Toiminguid pole veel m????ratud."},actions:{new_action:"Uus toiming"}},new_notification:{title:"Loo teavitus",description:"Uue teavituse loomine.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"S??ndmus",description:"Mille puhul teavitada",choose:{armed:{name:"Valvestatud",description:"Valvestamine oli edukas"},disarmed:{name:"Valvest maas",description:"Valve mahav??tmine ??nnestus"},triggered:{name:"H??ire",description:"Valves??steem andis h??ire"},arm_failure:{name:"Valvestamine nurjus",description:"Valvestamine ei ??nnestunud m??ne anduri oleku v??i vea t??ttu"},arming:{name:"Valvestamise eelne viivitus algas",description:"Algas valvestamise eelviide, majast v??ib lahkuda."},pending:{name:"Sisenemise viide rakendus",description:"M??rgati sisenemist, h??ire rakendub peale viidet."}}},mode:{heading:"Olek",description:"Millises valve olekus teavitada (valikuline)"},title:{heading:"P??is",description:"Teavituss??numi p??is"},message:{heading:"Sisu",description:"Teavituss??numi tekst",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},target:{heading:"Saaja",description:"Seade millele edastada teavitus"},name:{heading:"Nimi",description:"Teavituse kirjeldus",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Loo toiming",description:"Seadme oleku muutmine valve oleku muutmisel.",fields:{event:{heading:"S??ndmus",description:"Millisel juhul k??ivitada toiming"},area:{heading:"Ala",description:"Ala millele s??ndmus rakendub, p??hiala puhul j??ta t??hjaks."},mode:{heading:"Olek",description:"Millises valve olekus toiming k??ivitada (valikuline)"},entity:{heading:"Olem",description:"Toimingu olem"},action:{heading:"Toiming",description:"Olemi toiming",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nimi",description:"Toimingu kirjeldus",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},oa={common:sa,components:na,title:"Alarm panel",panels:ra},da={modes_long:{armed_away:"Activ??e en mode absence",armed_home:"Activ??e en mode pr??sence",armed_night:"Activ??e en mode nuit",armed_custom_bypass:"Activ??e en mode personnalis??"},modes_short:{armed_away:"Absence",armed_home:"Pr??sence",armed_night:"Nuit",armed_custom_bypass:"Personnalis??"}},la={time_slider:{seconds:"sec",minutes:"min",infinite:"infini",none:"Aucune"},editor:{ui_mode:"Afficher l'??diteur visuel",yaml_mode:"Afficher l'??diteur de code",edit_in_yaml:"Editer en YAML"}},ca="Configuration de l' alarme",ha={general:{title:"G??n??raux",cards:{general:{description:"Ce panneau d??finit les param??tres globaux de l'alarme.",fields:{disarm_after_trigger:{heading:"D??sactivation apr??s d??clenchement",description:"Lors que le temps de fonctionnement de la sir??ne est ??coul??, d??sactive l'alarme au lieu de la r??activer."},enable_mqtt:{heading:"Utilisation avec MQTT",description:"Permet au panneau d'alarme d'??tre contr??l?? via MQTT."},enable_master:{heading:"Activation de commande centralis??e",description:"Cr??er une entit?? pour piloter toutes les zone en m??me temps."}},actions:{setup_mqtt:"Configuration MQTT",setup_master:"Configuration pricipale"}},modes:{title:"Modes",description:"Ce panneau d??finit le mode de gestion pour chaque type d'activation.",fields:{mode:{armed_away:"Ce mode sera utilis?? lorsque toutes les personnes auront quitt?? la maison. Toutes les portes et fen??tres permettant l'acc??s ?? la maison seront surveill??es, les d??tecteurs de mouvement ?? l'int??rieur de la maison seront op??rationnels.",armed_home:"Ce mode sera utilis??e lorsque des personnes sont dans la maison. Toutes les portes et fen??tres permettant l'acc??s ?? la maison seront surveill??es (p??rim??trie), les d??tecteurs de mouvement ?? l'int??rieur de la maison seront inop??rants.",armed_night:"Ce mode sera utilis??e lors du r??glage de l'alarme avant de s'endormir. Toutes les portes et fen??tres permettant l'acc??s ?? la maison seront surveill??es, et les capteurs de mouvement s??lectionn??s (ex : rez de chauss??e) dans la maison seront op??rationnels.",armed_custom_bypass:"Ce mode suppl??mentaire permet de d??finir votre propre p??rim??tre de s??curit??.",enabled:"Actif",disabled:"Inactif"},exit_delay:{heading:"D??lai pour sortir",description:"Lors de l'activation, pendant cette p??riode, les capteurs ne d??clencheront pas l'alarme."},entry_delay:{heading:"D??lai pour entrer",description:"Temps d'attente avant que l'alarme ne se d??clenche apr??s d??tection d'un des capteurs."},trigger_time:{heading:"Temps de fonctionnement",description:"Temps de fonctionnement de la sir??ne"}}},mqtt:{title:"Configuration MQTT",description:"Ce panneau peut ??tre utilis?? pour la configuration de l'interface MQTT.",fields:{state_topic:{heading:"Etat de donn??es",description:"Donn??e sur laquelle les mises ?? jour d'??tat sont publi??es"},event_topic:{heading:"Ev??nement de donn??es",description:"Donn??e sur laquelle les ??v??nements d'??tat sont publi??s"},command_topic:{heading:"Commande de donn??e",description:"Donn??e sur laquelle les commandes d'armement / d??sarmement sont envoy??es."},require_code:{heading:"Code requis",description:"Exige que le code soit envoy?? avec la commande."},state_payload:{heading:"Configurer une valeur par ??tat",item:"D??finir une valeur par ??tat '{state}'"},command_payload:{heading:"Configurer une valeur par commande",item:"D??finir une valeur par commande '{command}'"}}},areas:{title:"Zones",description:"Les zones peuvent ??tre utilis??es pour diviser votre syst??me d'alarme en plusieurs secteurs.",no_items:"Il n'y a pas encore de zones d??finies.",table:{remarks:"Remarque",summary:"Cette zone contient des {summary_sensors} et {summary_automations}.",summary_sensors:"{number} capteurs",summary_automations:"{number} automatisations"},actions:{add:"Ajouter"}}},dialogs:{create_area:{title:"Nouvelle zone",fields:{copy_from:"Copier les param??tres"}},edit_area:{title:"Editer la zone '{area}'",name_warning:"Note: Changer le nom, changera l'entity ID"},remove_area:{title:"Suppression de zone?",description:"Etes vous sur de vouloir supprimer cette zone? Cette zone contient {sensors} des capteurs et {automations} automatisations, qui seront ??galement supprim??s."},edit_master:{title:"Configuration principale"},disable_master:{title:"D??sactiver la configuration principale?",description:"Etes vous sur de vouloir supprimer la configuration principale? Cette zone contient {automations} automatisations, qui seront ??galement supprim??es."}}},sensors:{title:"Capteurs",cards:{sensors:{description:"Capteurs actuellement configur??s. Cliquez sur une entit?? pour apporter des modifications.",no_items:"Il n'y a pas encore de capteur ajout?? ?? l'alarme. Assurez-vous de les ajouter d'abord.",table:{arm_modes:"Type d'activation",always_on:"(Toujours)"},filter:{label:"Filtrer par zone",no_area:"(Aucune zone)"}},add_sensors:{title:"Ajouter un capteur",description:"Ajoutez plus de capteurs. Assurez-vous que vos capteurs ont un nom personnalis?? afin de pouvoir les identifier.",no_items:"Aucune entit?? HA disponible ne peut ??tre configur??e pour l'alarme. Assurez-vous d'inclure les entit??s de type binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"Ajouter ?? l'alarme",show_all:"Tout montrer"}},editor:{title:"Editer un capteur",description:"Configurer les param??tres du capteur '{entity}'.",fields:{name:{heading:"Nom",description:"Remplacer le nom personnalis?? (friendly name)."},area:{heading:"Zone",description:"Selectionner une zone contenant ce capteur."},group:{heading:"Groupe",description:"Grouper avec d'autres capteurs pour un d??clenchement combin??."},device_type:{heading:"Type de d??tection",description:"Choisissez un type de d??tection pour appliquer automatiquement les param??tres appropri??s.",choose:{door:{name:"Porte",description:"Une porte, un portail ou une autre entr??e utilis??e pour entrer / sortir de la maison."},window:{name:"Fen??tre",description:"Une fen??tre, ou une porte non utilis??e pour entrer dans la maison comme un balcon."},motion:{name:"Mouvement",description:"Capteur de pr??sence ou appareil similaire pr??sentant un d??lai entre les activations."},tamper:{name:"Effraction",description:"D??tection d'arrachage du capteur, capteur de bris de verre, etc.."},environmental:{name:"D??tecteur Environmental",description:"D??tecteur de fum??e / gaz, d??tecteur de fuite, etc. (non li?? ?? la protection anti-effraction)."},other:{name:"G??n??rique"}}},always_on:{heading:"Toujours en service",description:"Le capteur doit toujours d??clencher l'alarme."},modes:{heading:"Mode possible",description:"Modes d'alarme dans lesquels ce capteur est actif."},arm_on_close:{heading:"Activer apr??s fermeture",description:"Apr??s la d??sactivation de ce capteur, le d??lai de sortie restant sera automatiquement ignor??."},use_exit_delay:{heading:"Utiliser le d??lai de sortie",description:"Le capteur est autoris?? ?? ??tre actif lorsque le d??lai de sortie commence."},use_entry_delay:{heading:"Utiliser le d??lai d'entr??e",description:"L'activation du capteur d??clenche l'alarme apr??s le d??lai d'entr??e plut??t qu'instantan??ment."},allow_open:{heading:"Autoriser l'ouverture lors de l'activation",description:"Permet ?? ce capteur d'??tre actif, peu de temps apr??s votre d??part afin qu'il ne bloque pas l'armement."},auto_bypass:{heading:"Bypass automatique",description:"Exclut ce capteur de l'alarme s'il est ouvert lors de l'armement.",modes:"Modes dans lesquels le capteur peut ??tre  ignor??"},trigger_unavailable:{heading:"D??clenchement lorsqu'il n'est pas disponible",description:"Lorsque l'??tat du capteur devient `` indisponible '', cela activera le capteur."}},actions:{toggle_advanced:"Param??tres avanc??es",remove:"Supprimer",setup_groups:"Configuration de Groupe"},errors:{description:"Veuillez corriger les erreurs suivantes:",no_area:"Aucune zone n'est s??lectionn??e",no_modes:"Aucun mode s??lectionn?? pour lequel le capteur doit ??tre actif",no_auto_bypass_modes:"Aucun mode n'est s??lectionn?? car le capteur peut ??tre automatiquement ignor??"}}},dialogs:{manage_groups:{title:"G??rer les groupes de capteurs",description:"Dans un groupe de capteurs, plusieurs capteurs doivent ??tre activ??s dans un laps de temps avant que l'alarme ne se d??clenche.",no_items:"Aucun groupe",actions:{new_group:"Nouveau groupe"}},create_group:{title:"Nouveau groupe de capteurs",fields:{name:{heading:"Nom",description:"Nom du nouveau groupe de capteurs"},timeout:{heading:"Laps de temps",description:"P??riode de temps pendant laquelle les activations cons??cutives du capteur d??clenchent l'alarme."},sensors:{heading:"Capteurs",description:"S??lectionnez les capteurs qui sont contenus dans ce groupe."}},errors:{invalid_name:"Nom fourni non valide.",insufficient_sensors:"Au moins 2 capteurs doivent ??tre s??lectionn??s."}},edit_group:{title:"Editer le groupe de capteurs '{name}'"}}},codes:{title:"Codes",cards:{codes:{description:"Gestion des param??tres des codes.",fields:{code_arm_required:{heading:"Utiliser un code pour l'activation",description:"Code requis pour l'activation de l'alarme"},code_disarm_required:{heading:"Utiliser un code pour la d??sactivation",description:"Code requis pour la d??sactivation de l'alarme"},code_format:{heading:"Format du code",description:"D??finit le type d'entr??e pour la carte d'alarme Lovelace.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"Gestion des utilisateurs",description:"Chaque utilisateur a son propre code pour activer / d??sactiver l'alarme.",no_items:"Il n'y a aucun utilisateur de d??fini",table:{remarks:"Remarque",administrator:"Administrateur"},actions:{new_user:"Nouvel utilisateur"}},new_user:{title:"Cr??er un nouvel utilisateur",description:"Des utilisateurs peuvent ??tre cr????s pour donner acc??s au fonctionnement de l'alarme.",fields:{name:{heading:"Nom",description:"Nom de l'utilisateur."},code:{heading:"Code",description:"Code personnel de l'utilisateur."},confirm_code:{heading:"Confirmation du code",description:"R??p??ter le  code."},is_admin:{heading:"L'utilisateur est aussi administrateur",description:"Autorise l'utilisateur ?? effectuer des changements."},can_arm:{heading:"Demande de code pour l'activation",description:"Entrer ce code pour activer l'alarme."},can_disarm:{heading:"Demande de code pour d??sactivation",description:"Entrer ce code pour d??sactiver l'alarme."},is_override_code:{heading:"Code de s??curit??",description:"La saisie de ce code forcera l'activation l'alarme."},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"Aucun nom saisi.",no_code:"Le code doit contenir 4 caract??res/chiffres minimum.",code_mismatch:"Les codes sont diff??rents."}},edit_user:{title:"Editer l'utilisateur",description:"Changer la  configuration pour l'utilisateur '{name}'.",fields:{old_code:{heading:"Code utilis??",description:"Code actuel, laissez vide pour ne rien changer."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"?? l'aide de ce panneau, vous pouvez g??rer les notifications ?? envoyer lors d'un ??v??nement d'alarme",table:{enabled:"Active",no_items:"Il n'y a aucune notification de  cr????e."},actions:{new_notification:"Nouvelle notification"},filter:{label:"Filtrer par zone",no_area:"(Aucune zone)"}},actions:{description:"Ce panneau est  utilis?? pour changer d'??tat les appareils de votre choix.",table:{no_items:"Il n'y a aucune action de cr??er."},actions:{new_action:"Nouvelle action"}},new_notification:{title:"Cr??er une notification",description:"Cr??er une nouvelle notification.",trigger:"Condition",action:"Action",options:"Options",fields:{event:{heading:"Ev??nement",description:"D??termine quand la notification doit ??tre envoy??e",choose:{armed:{name:"Alarme activ??e ",description:"l'alarme s'est correctement activ??e"},disarmed:{name:"Alarme d??sactiv??e",description:"L'alarme est d??sactiv??e"},triggered:{name:"Alarme d??clench??e",description:"L'alarme est d??clench??e"},arm_failure:{name:"Armement impossible",description:"L'armement est impossible d?? ?? un ou plusieurs capteurs"},arming:{name:"D??lai de sortie activ??",description:"Le d??lai de sortie est activ??, vous devez quitter la maison."},pending:{name:"D??lai d'entr??e activ??",description:"Le d??lai d'entr??e est activ??, l'alarme va se d??clencher."}}},mode:{heading:"Mode",description:"Limite la notification ?? un mode sp??cifique (optionnel)"},title:{heading:"Titre",description:"Titre du message de la notification"},message:{heading:"Message",description:"Contenu du message de la notification",insert_wildcard:"Inserer la wildcard",placeholders:{armed:"L'alarme est r??gl??e sur {{arm_mode}}",disarmed:"L'alarme est maintenant d??sactiv??e",triggered:"L'alarme est d??clench??e! Cause: {{open_sensors}}.",arm_failure:"L'alarme n'a pas pu ??tre arm??e pour le moment, en cause: {{open_sensors}}.",arming:"L'alarme sera bient??t arm??e, veuillez quitter la maison.",pending:"L'alarme est sur le point de se d??clencher, d??sarmez-la rapidement!"}},target:{heading:"Cible",description:"Appareil recevant le message"},name:{heading:"Nom",description:"Description de la notification",placeholders:{armed:"Notification ?? l'armement de : {target}",disarmed:"Notification au d??sarmement de : {target}",triggered:"Notification au d??clenchement de : {target}",arm_failure:"Notification en cas d'??chec de : {target}",arming:"Notification en quittant de : {target}",pending:"Notification au retour de : {target}"}},delete:{heading:"Supprimer l'automatisme",description:"Supprimer d??finitivement cet automatisme"}},actions:{test:"Essai"}},new_action:{title:"Cr??er une action",description:"Ce panneau peut ??tre utilis?? pour commuter un appareil lorsque l'??tat de l'alarme change.",fields:{event:{heading:"Ev??nement",description:"D??termine quand l'action doit ??tre ex??cut??e"},area:{heading:"Zone",description:"Zone pour laquelle l'??v??nement s'applique, laissez vide pour s??lectionner l'alarme globale."},mode:{heading:"Mode",description:"Limite l'action ?? un mode sp??cifique (optionnel)"},entity:{heading:"Entit??",description:"Entit?? sur laquelle effectuer une action"},action:{heading:"Action",description:"Action ?? ex??cuter sur l'entit??",no_common_actions:"Les actions ne peuvent ??tre affect??es qu'en mode YAML pour les entit??s s??lectionn??es."},name:{heading:"Nom",description:"Description de  l'action",placeholders:{armed:"Mettre {entity} ?? {state} lors de l'armement",disarmed:"Mettre {entity} ?? {state} lors du d??sarmement",triggered:"Mettre {entity} ?? {state} lors du d??clenchement de l'alarme",arm_failure:"Mettre {entity} ?? {state} en cas d'??chec de l'armement",arming:"Mettre {entity} ?? {state} lors du d??part de la maison",pending:"Mettre {entity} ?? {state} lors du retour ?? la maison"}}}}}}},ma={common:da,components:la,title:ca,panels:ha},ua={modes_long:{armed_away:"Modalit?? 'fuori casa' attiva",armed_home:"Modalit?? 'in casa' attiva",armed_night:"Modalit?? 'notte' attiva",armed_custom_bypass:"Modalit?? 'personalizzato' attiva"},modes_short:{armed_away:"Fuori casa",armed_home:"In casa",armed_night:"Notte",armed_custom_bypass:"Personalizzato"}},pa={time_slider:{seconds:"sec",minutes:"min",infinite:"infinito",none:"niente"},editor:{ui_mode:"Passa a UI",yaml_mode:"Passa a YAML",edit_in_yaml:"Edit in YAML"}},ga={general:{title:"Generali",cards:{general:{description:"Questo pannello definisce alcune impostazioni da applicare alle modalit?? di allarme.",fields:{disarm_after_trigger:{heading:"Disattiva allarme dopo l'attivazione",description:"Dopo che il tempo di attivazione ?? scaduto, disattivare l'allarme invece di tornare allo stato inserito."},enable_mqtt:{heading:"Abilita MQTT",description:"Permetti al pannello allarme di essere controllato attraverso MQTT."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"Configurazione MQTT",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",fields:{mode:{armed_away:"Modalit?? 'fuori casa': da utilizzare quando tutte le persone lasciano la casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, cos?? come i sensori di movimento all'interno della casa.",armed_home:"Modalit?? 'in casa': da utilizzare quando si attiva l'allarme mentre le persone sono in casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, ma non i sensori di movimento all'interno della casa.",armed_night:"Modalit?? 'notte': da utilizzare quando si imposta la sveglia prima di andare a dormire. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi e sensori di movimento selezionati (ad esempio al piano di sotto) nella casa.",armed_custom_bypass:"Modalit?? 'personalizzato': da utilizzare per definire una modalit?? di allarme specifica per le esigenze dell'utilizzatore.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Tempo di preattivazione",description:"Quando si attiva l'allarme, entro questo periodo di tempo i sensori non attiveranno ancora l'allarme."},entry_delay:{heading:"Ritardo di attivazione",description:"Tempo di ritardo fino allo scatto dell'allarme dopo l'attivazione di uno dei sensori."},trigger_time:{heading:"Tempo di attivazione",description:"Tempo durante il quale suoner?? la sirena"}}},mqtt:{title:"Configurazione MQTT",description:"Questo pannello pu?? essere usato per le impostazioni MQTT.",fields:{state_topic:{heading:"Topic di stato",description:"Topic su cui vengono pubblicati gli aggiornamenti di stato"},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Topic di comando",description:"Topic su cui vengono inviati i comandi di inserimento / disinserimento."},require_code:{heading:"Richiedi Codice",description:"Richiedi il codice da inviare con il comando."},state_payload:{heading:"Configura payload per stato",item:"Definisci un payload per lo stato '{state}'"},command_payload:{heading:"Configura payload per comando",item:"Definisci un payload per il comando '{command}'"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} sensors",summary_automations:"{number} automations"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area '{area}'",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Sensori",cards:{sensors:{description:"Sensori attualmente configurati. Clicca sull'entit?? per modificare.",no_items:"Non ci sono ancora sensori aggiunti a questo allarme. Assicurati di aggiungerli prima.",table:{arm_modes:"Modalit?? di attivazione",always_on:"(Sempre)"},filter:{label:"Filter by area",no_area:"(No area)"}},add_sensors:{title:"Aggiungi Sensori",description:"Aggiungi pi?? sensori. Assicurati che i sensori abbiano un friendly_name (nome amichevole), in modo da identificarli pi?? facilmente.",no_items:"Non ci sono entit?? disponibili che possono essere configurate con l'allarme. Assicurati di includere entit?? del tipo binary_sensor (sensore binario).",table:{type:"Detected type"},actions:{add_to_alarm:"aggiungi all'allarme",show_all:"Mostra tutti"}},editor:{title:"Modifica Sensore",description:"Configura le impostazioni del sensore '{entity}'.",fields:{name:{heading:"Nome",description:"Sovrascrivi friendly name."},area:{heading:"Area",description:"Select an area which contains this sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Sempre attivo",description:"Il sensore attiver?? sempre l'allarme."},modes:{heading:"Modalit?? attive",description:"Modalit?? di allarme in cui il sensore risulta collegato."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Permetti apertura",description:"Consentire a questo sensore di rimanere attivo poco dopo essere usciti."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Fai scattare l'allarme quando non disponibile",description:"L'allarme scatter?? quando lo stato del sensore diverr?? 'non disponibile'."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove",setup_groups:"Setup groups"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group '{name}'"}}},codes:{title:"Codici",cards:{codes:{description:"Modifica le impostazioni dei codici.",fields:{code_arm_required:{heading:"Usa codice d'attivazione",description:"Richiedi un codice per attivare l'allarme"},code_disarm_required:{heading:"Usa codice di disattivazione",description:"Richiedi un codice per disattivare l'allarme"},code_format:{heading:"Formato del codice",description:"Imposta il tipo di codice da digitare nella card di Lovelace.",code_format_number:"codice numerico",code_format_text:"password"}}},user_management:{title:"Gestione utente",description:"Ogni utente ha il suo codice per attivare/disattivare l'allarme.",no_items:"Non ?? stato creato nessun utente per ora",table:{remarks:"Ruolo",administrator:"Amministratore"},actions:{new_user:"nuovo utente"}},new_user:{title:"Crea nuovo utente",description:"Gli utenti potranno operare con l'allarme.",fields:{name:{heading:"Nome",description:"Nome dell'utente."},code:{heading:"Codice operativo",description:"Codice che utilizzer?? quest'utente."},confirm_code:{heading:"Ripeti codice operativo",description:"Ripeti il codice operativo scelto."},is_admin:{heading:"L'utente ?? un amministratore",description:"Ci?? consente al utente di effettuare modifiche al sistema di allarme"},can_arm:{heading:"Utilizza codice per attivare l'allarme",description:"Utilizza codice per attivare l'allarme"},can_disarm:{heading:"Utilizza codice per disattivare l'allarme",description:"Utilizza codice per disattivare l'allarme"},is_override_code:{heading:"E' un codice di forzatura",description:"Inserendo questo codice forzerai lo stato di attivazione dell'allarme"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"Non hai inserito il nome.",no_code:"Il codice deve avere almeno 4 numeri o caratteri.",code_mismatch:"Il codice scelto non combacia, verifica il codice inserito."}},edit_user:{title:"Modifica Utente",description:"Cambia impostazioni per l'utente '{name}'.",fields:{old_code:{heading:"Modifica Codice",description:"Codice attuale, lascia vuoto per non modificare."}}}}},actions:{title:"Azioni",cards:{notifications:{title:"Notifiche",description:"Con questo pannello puoi gestire le notifiche da inviare quanto accade un determinato evento",table:{enabled:"Abilitato",no_items:"Non ?? stata creata nessuna notifica per ora."},actions:{new_notification:"nuova notifica"},filter:{label:"Filter by area",no_area:"(No area)"}},actions:{description:"Questo pannello ?? in fase di sviluppo. Sar?? usato per cambiare lo stato di una o pi?? entit??.",table:{no_items:"Non ?? stata creata nessuna azione per ora."},actions:{new_action:"nuova azione"}},new_notification:{title:"Crea notifica",description:"Crea una nuova notifica.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Evento",description:"Quando questa notifica deve essere inviata",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Modalit??",description:"Limita ad una specifica modalit?? di allarme (opzionale)"},title:{heading:"Titolo",description:"Titolo per il messaggio di notifica"},message:{heading:"Messaggio",description:"Contenuto del messaggio di notifica",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},target:{heading:"Destinatario",description:"Dispositivo a cui inviare il messaggio di notifica"},name:{heading:"Nome",description:"Descrizione della notifica",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Crea azione",description:"Questo pannello pu?? essere usato per cambiare lo stato di un entit?? quando lo stato dell'allarme cambia.",fields:{event:{heading:"Evento",description:"Quando questa azione deve essere eseguita"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Modalit??",description:"Limita ad una specifica modalit?? di allarme (opzionale)"},entity:{heading:"Entit??",description:"Entit?? su cui eseguire l'azione"},action:{heading:"Azione",description:"Azione che deve eseguire l'entit??",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nome",description:"Descrizione dell'azione",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},va={common:ua,components:pa,title:"Alarm panel",panels:ga},_a={modes_long:{armed_away:"Ingeschakeld Afwezig",armed_home:"Ingeschakeld Thuis",armed_night:"Ingeschakeld Nacht",armed_custom_bypass:"Ingeschakeld Aangepast"},modes_short:{armed_away:"Afwezig",armed_home:"Thuis",armed_night:"Nacht",armed_custom_bypass:"Aangepast"}},fa={time_slider:{seconds:"sec",minutes:"min",infinite:"oneindig",none:"geen"},editor:{ui_mode:"Naar UI",yaml_mode:"Naar YAML",edit_in_yaml:"In YAML bewerken"}},ba={general:{title:"Algemeen",cards:{general:{description:"Dit paneel definieert enkele instellingen die van toepassing zijn op alle inschakelmodi.",fields:{disarm_after_trigger:{heading:"Uitschakelen na activatie",description:"Nadat de triggertijd is verstreken, schakelt u het alarm uit in plaats van terug te keren naar de ingeschakelde toestand."},enable_mqtt:{heading:"MQTT inschakelen",description:"Toestaan het alarmpaneel via MQTT aan te sturen."},enable_master:{heading:"Master alarm inschakelen",description:"Cre??ert een entiteit om alle gebieden tegelijkertijd te besturen."}},actions:{setup_mqtt:"MQTT Configuratie",setup_master:"Master configuratie"}},modes:{title:"Modi",description:"Dit paneel kan worden gebruikt om de inschakelmodi van het alarm in te stellen.",fields:{mode:{armed_away:"Ingeschakeld weg wordt gebruikt als alle mensen het huis hebben verlaten. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, evenals bewegingssensoren in het huis.",armed_home:"Ingeschakeld thuis (ook wel ingeschakeld thuisblijven genoemd) wordt gebruikt bij het instellen van het alarm terwijl er mensen in huis zijn. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, maar bewegingssensoren in het huis worden niet gebruikt.",armed_night:"Ingeschakeld nacht wordt gebruikt bij het instellen van het alarm voordat u gaat slapen. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, en geselecteerde bewegingssensoren (beneden) in het huis.",armed_custom_bypass:"Een extra modus om uw eigen beveiligingsperimeter te defini??ren.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Vertrek vertraging",description:"Bij het inschakelen van het alarm zullen de sensoren binnen deze tijdsperiode het alarm nog niet activeren."},entry_delay:{heading:"Binnenkomst vertraging",description:"Vertragingstijd totdat het alarm afgaat nadat een van de sensoren is geactiveerd."},trigger_time:{heading:"Activeer tijd",description:"Tijd waarin het alarm in de geactiveerde toestand blijft na activatie."}}},mqtt:{title:"MQTT configuratie",description:"Dit paneel kan worden gebruikt voor configuratie van de MQTT-interface.",fields:{state_topic:{heading:"Toestand topic",description:"Topic waarop statusupdates worden gepubliceerd"},event_topic:{heading:"Gebeurtenis topic",description:"Topic waarop gebeurtenissen worden gepubliceerd"},command_topic:{heading:"Commando topic",description:"Topic waarop commando's voor in- / uitschakelen worden verzonden."},require_code:{heading:"Vereis code",description:"Vereis dat de code wordt verzonden met de opdracht."},state_payload:{heading:"Configureer de payload per toestand",item:"Definieer een payload voor toestand '{state}'"},command_payload:{heading:"Configureer een payload per commando",item:"Definieer een payload voor commando '{command}'"}}},areas:{title:"Gebieden",description:"Gebieden kunnen worden gebruikt om uw alarmsysteem in meerdere compartimenten op te delen.",no_items:"Er zijn nog geen gebieden gedefinieerd.",table:{remarks:"Opmerkingen",summary:"Dit gebied bevat {summary_sensors} en {summary_automations}.",summary_sensors:"{number} sensoren",summary_automations:"{number} automatiseringen"},actions:{add:"Toevoegen"}}},dialogs:{create_area:{title:"Nieuw gebied",fields:{copy_from:"Kopieer instellingen van"}},edit_area:{title:"Bewerken van gebied '{area}'",name_warning:"Opmerking: als u de naam wijzigt, wordt de entiteits-ID gewijzigd"},remove_area:{title:"Gebied verwijderen?",description:"Weet u zeker dat u dit gebied wilt verwijderen? Dit gebied bevat {sensors} sensoren en {automations} automatiseringen, die ook zullen worden verwijderd."},edit_master:{title:"Master configuratie"},disable_master:{title:"Master uitschakelen?",description:"Weet u zeker dat u het master alarm wilt verwijderen? Dit gebied bevat {automations} automatiseringen, die met deze actie worden verwijderd."}}},sensors:{title:"Sensoren",cards:{sensors:{description:"Momenteel geconfigureerde sensoren. Klik op een entiteit om wijzigingen aan te brengen.",no_items:"Er zijn nog geen sensoren aan het alarm toegevoegd. Zorg ervoor dat u ze eerst toevoegt.",table:{arm_modes:"Inschakelmodi",always_on:"(Altijd)"},filter:{label:"Filter op gebied",no_area:"(Geen gebied)"}},add_sensors:{title:"Voeg sensoren toe",description:"Voeg meer sensoren toe. Zorg ervoor dat uw sensoren een friendly_name hebben, zodat u ze kunt identificeren.",no_items:"Er zijn geen beschikbare HA-entiteiten die voor het alarm kunnen worden geconfigureerd. Zorg ervoor dat u entiteiten van het type binary_sensor opneemt.",table:{type:"Gedetecteerd type"},actions:{add_to_alarm:"Voeg aan alarm toe",show_all:"Toon alle"}},editor:{title:"Wijzig Sensor",description:"Configureren van de sensorinstellingen van '{entity}'.",fields:{name:{heading:"Naam",description:"Overschrijf vriendelijke naam."},area:{heading:"Gebied",description:"Selecteer een gebied dat deze sensor bevat."},group:{heading:"Groep",description:"Groepeer met andere sensors voor gecombineerde triggers."},device_type:{heading:"Apparaat Type",description:"Kies een apparaattype om automatisch de juiste instellingen toe te passen.",choose:{door:{name:"Deur",description:"Een deur, poort of andere ingang die wordt gebruikt voor het betreden/verlaten van de woning."},window:{name:"Raam",description:"Een raam of een deur die niet wordt gebruikt om het huis binnen te komen, zoals een balkon."},motion:{name:"Beweging",description:"Aanwezigheidssensor of soortgelijk apparaat met een vertraging tussen activeringen."},tamper:{name:"Sabotage",description:"Detector van verwijdering van sensorkap, glasbreuksensor, enz."},environmental:{name:"Klimaat",description:"Rook/gassensor, lekkage detector, etc. (niet gerelateerd aan inbraakbeveiliging)."},other:{name:"Algemeen"}}},always_on:{heading:"Altijd aan",description:"Een sensor moet altijd het alarm activeren."},modes:{heading:"Ingeschakelde modi",description:"Alarmmodi waarin deze sensor actief is."},arm_on_close:{heading:"Inschakelen na sluiten",description:"Na deactivering van deze sensor wordt de resterende vertrek vertraging automatisch overgeslagen."},use_exit_delay:{heading:"Vertragingstijd bij vertrek",description:"De sensor mag actief zijn wanneer de vertrekperiode wordt gestart."},use_entry_delay:{heading:"Vertragingstijd bij binnenkomst",description:"Als de sensor actief wordt, activeert deze het alarm pas na de vertragingstijd voor binnenkomst."},allow_open:{heading:"Sta open toe tijdens het inschakelen",description:"Sta toe dat deze sensor kort na het verlaten actief is, zodat hij het inschakelen niet blokkeert."},auto_bypass:{heading:"Automatisch omzeilen",description:"Elimineer de sensor als deze actief is tijdens het inschakelen van het alarm.",modes:"Modi waarin de sensor automatisch omzeild mag worden"},trigger_unavailable:{heading:"Activeren indien niet beschikbaar",description:"Wanneer de sensorstatus 'niet beschikbaar' wordt, wordt de sensor geactiveerd."}},actions:{toggle_advanced:"Geavanceerde instellingen",remove:"Verwijder",setup_groups:"Configureer groepen"},errors:{description:"Corrigeer de volgende fouten:",no_area:"Er is geen gebied geselecteerd",no_modes:"Er zijn geen modi geselecteerd waarvoor de sensor actief zou moeten zijn",no_auto_bypass_modes:"Er zijn geen modi geselecteerd waarin de sensor automatisch omzeild mag worden"}}},dialogs:{manage_groups:{title:"Beheer sensorgroepen",description:"In een sensorgroep moeten twee of meer sensoren worden geactiveerd binnen een tijdsperiode voordat het alarm wordt geactiveerd.",no_items:"Nog geen groepen ingesteld.",actions:{new_group:"Nieuwe groep"}},create_group:{title:"Nieuwe sensorgroep",fields:{name:{heading:"Naam",description:"Naam voor sensorgroep."},timeout:{heading:"Time-out",description:"Tijdsperiode waarin meerdere sensoren moeten worden geactiveerd om het alarm te activeren."},sensors:{heading:"Sensoren",description:"Selecteer de sensoren die deel moeten uitmaken van deze groep."}},errors:{invalid_name:"Verkeerde naam opgegeven.",insufficient_sensors:"Tenminste 2 sensoren moeten worden geselecteerd."}},edit_group:{title:"Bewerk sensorgroep '{name}'"}}},codes:{title:"Codes",cards:{codes:{description:"Wijzig de instellingen voor de code.",fields:{code_arm_required:{heading:"Gebruik inschakel code",description:"Vereist een code voor het inschakelen van het alarm"},code_disarm_required:{heading:"Gebruik uitschakelcode",description:"Vereist een code om het alarm uit te schakelen"},code_format:{heading:"Code opmaak",description:"Stelt het invoertype in voor de Lovelace alarmkaart.",code_format_number:"pincode",code_format_text:"wachtwoord"}}},user_management:{title:"Gebruikersbeheer",description:"Elke gebruiker heeft zijn eigen code om het alarm in/uit te schakelen.",no_items:"Er zijn nog geen gebruikers",table:{remarks:"Opmerkingen",administrator:"Beheerder"},actions:{new_user:"nieuwe gebruiker"}},new_user:{title:"Maak een nieuwe gebruiker aan",description:"Gebruikers kunnen worden aangemaakt om toegang te verlenen tot het bedienen van het alarm.",fields:{name:{heading:"Naam",description:"Naam van de gebruiker."},code:{heading:"Code",description:"Code voor deze gebruiker."},confirm_code:{heading:"Bevestig de code",description:"Herhaal de code."},is_admin:{heading:"Gebruiker is beheerder",description:"Sta de gebruiker toe om wijzigingen aan te brengen"},can_arm:{heading:"Code toestaan voor inschakeling",description:"Door deze code in te voeren, wordt het alarm geactiveerd"},can_disarm:{heading:"Code toestaan voor uitschakelen",description:"Door deze code in te voeren, wordt het alarm gedeactiveerd"},is_override_code:{heading:"Is een forceer code",description:"Als u deze code invoert, wordt het alarm geforceerd geactiveerd"},area_limit:{heading:"Beperk gebieden",description:"Beperk de gebruiker tot controle over alleen de gelesecteerde gebieden"}},errors:{no_name:"Geen naam opgegeven.",no_code:"Code moet minimaal 4 tekens/cijfers bevatten.",code_mismatch:"De codes komen niet overeen."}},edit_user:{title:"Wijzig Gebruiker",description:"Wijzig de configuratie voor gebruiker '{name}'.",fields:{old_code:{heading:"Huidige code",description:"Huidige code, laat leeg om ongewijzigd te laten."}}}}},actions:{title:"Acties",cards:{notifications:{title:"Meldingen",description:"Met dit paneel kunt u meldingen beheren die moeten worden verzonden tijdens een bepaalde alarmgebeurtenis",table:{enabled:"Actief",no_items:"Er zijn nog geen notificaties aangemaakt."},actions:{new_notification:"nieuwe melding"},filter:{label:"Filter op gebied",no_area:"(Geen gebied)"}},actions:{description:"Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de status van het alarm veranderd.",table:{no_items:"Er zijn nog geen acties gemaakt."},actions:{new_action:"nieuwe actie"}},new_notification:{title:"Notificatie instellen",description:"Ontvang een notificatie wanneer het alarm wordt in- of uitgeschakeld, wordt geactiveerd etc.",trigger:"Conditie",action:"Taak",options:"Opties",fields:{event:{heading:"Gebeurtenis",description:"Wanneer moet de notificatie worden verzonden",choose:{armed:{name:"Alarm is ingeschakeld",description:"Het alarm is succesvol ingeschakeld"},disarmed:{name:"Alarm is uitgeschakeld",description:"Het alarm is uitgeschakeld"},triggered:{name:"Alarm is afgegaan",description:"Het alarm gaat af"},arm_failure:{name:"Kan niet inschakelen",description:"Het inschakelen van het alarm is mislukt vanwege een of meerdere blokkerende sensoren"},arming:{name:"Vertrek",description:"Vertrekvertraging ingegaan, tijd om het huis te verlaten."},pending:{name:"Binnenkomst",description:"Binnenkomstvertraging ingegaan, het alarm dient te worden uitgeschakeld."}}},mode:{heading:"Modi",description:"Beperk de actie tot specifieke inschakel modi."},title:{heading:"Titel",description:"Titel voor de notificatie"},message:{heading:"Bericht",description:"Tekst voor de notificatie",insert_wildcard:"Wildcard invoegen",placeholders:{armed:"Het alarm is ingeschakeld op {{arm_mode}}",disarmed:"Het alarm is nu uit",triggered:"Het alarm is geactiveerd! Oorzaak: {{open_sensors}}.",arm_failure:"Het alarm kon niet worden ingeschakeld. Oorzaak: {{open_sensors}}.",arming:"Het alarm wordt ingeschakeld, verlaat het huis.",pending:"Het alarm moet nu worden uitgeschakeld, anders wordt deze geactiveerd."}},target:{heading:"Doel",description:"Apparaat om het push-bericht naar te sturen"},name:{heading:"Naam",description:"Beschrijving voor deze notificatie",placeholders:{armed:"Stuur notificatie naar {target} bij inschakelen",disarmed:"Stuur notificatie naar {target} bij uitschakelen",triggered:"Stuur notificatie naar {target} bij alarm",arm_failure:"Stuur notificatie naar {target} bij fout",arming:"Stuur notificatie naar {target} bij vertrek",pending:"Stuur notificatie naar {target} bij binnenkomst"}},delete:{heading:"Automatisering verwijderen",description:"Verwijder deze automatisering permanent"}},actions:{test:"Testen"}},new_action:{title:"Actie instellen",description:"Schakel verlichting of apparaatuur (bijv. sirene) wanneer het alarm wordt in- of uitgeschakeld of wordt geactiveerd etc.",fields:{event:{heading:"Gebeurtenis",description:"Wanneer moet de actie worden uitgevoerd"},area:{heading:"Gebied",description:"Het gebied waarop de gebeurtenis van toepassing is, laat leeg om het algemene alarm te selecteren."},mode:{heading:"Mode",description:"Beperk de actie tot specifieke inschakel modi (optioneel)"},entity:{heading:"Entiteit",description:"Entiteit om actie op uit te voeren"},action:{heading:"Actie",description:"Actie die op de entiteit moet worden uitgevoerd",no_common_actions:"Acties kunnen alleen worden toegewezen in de YAML modus voor de geselecteerde entiteiten."},name:{heading:"Naam",description:"Beschrijving voor deze actie",placeholders:{armed:"Schakel {entity} naar {state} bij inschakelen",disarmed:"Schakel {entity} naar {state} bij uitschakelen",triggered:"Schakel {entity} naar {state} bij alarm",arm_failure:"Schakel {entity} naar {state} bij fout",arming:"Schakel {entity} naar {state} bij vertrek",pending:"Schakel {entity} naar {state} bij binnenkomst"}}}}}}},ya={common:_a,components:fa,title:"Alarmpaneel",panels:ba},wa={ca:Be,en:Je,et:Object.freeze({__proto__:null,common:sa,components:na,title:"Alarm panel",panels:ra,default:oa}),es:ia,fr:Object.freeze({__proto__:null,common:da,components:la,title:ca,panels:ha,default:ma}),it:Object.freeze({__proto__:null,common:ua,components:pa,title:"Alarm panel",panels:ga,default:va}),nl:Object.freeze({__proto__:null,common:_a,components:fa,title:"Alarmpaneel",panels:ba,default:ya})};function $a(e,a,t="",i=""){const s=a.replace(/['"]+/g,"").replace("-","_");var n;try{n=e.split(".").reduce((e,a)=>e[a],wa[s])}catch(a){n=e.split(".").reduce((e,a)=>e[a],wa.en)}if(void 0===n&&(n=e.split(".").reduce((e,a)=>e[a],wa.en)),""!==t&&""!==i){Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);for(let e=0;e<t.length;e++)n=n.replace(t[e],i[e])}return n}!function(e){e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedCustom="armed_custom_bypass"}(Ie||(Ie={})),function(e){e.Armed="armed",e.Disarmed="disarmed",e.Triggered="triggered",e.ArmFailure="arm_failure",e.Arming="arming",e.Pending="pending"}(He||(He={}));const ka=e=>e.callWS({type:"alarmo/config"}),Aa=e=>e.callWS({type:"alarmo/sensors"}),xa=e=>e.callWS({type:"alarmo/users"}),ja=e=>e.callWS({type:"alarmo/automations"}),Oa=e=>e.callWS({type:"alarmo/sensor_groups"}),Ca=(e,a)=>e.callApi("POST","alarmo/config",a),Sa=(e,a)=>e.callApi("POST","alarmo/sensors",a),Ma=(e,a)=>e.callApi("POST","alarmo/automations",a),Ta=(e,a)=>e.callApi("POST","alarmo/automations",{automation_id:a,remove:!0}),za=e=>e.callWS({type:"alarmo/areas"}),Ea=(e,a)=>e.callApi("POST","alarmo/area",a);var qa,Da,Na,Pa,La,Ra;function Ua(e){return function(e){if(!e)return Te;if(e.attributes.icon)return e.attributes.icon;var a=Se(e.entity_id);return a in Pe?Pe[a](e):qe(a,e.state)}(e)}function Ia(e){return(e=e.replace("_"," ")).charAt(0).toUpperCase()+e.slice(1)}function Ha(e){return e?e.attributes&&e.attributes.friendly_name?e.attributes.friendly_name:String(e.entity_id.split(".").pop()):"(unrecognized entity)"}function Fa(e){let a=[];return e.forEach(e=>{a.find(a=>"object"==typeof e?function(...e){return e.every(a=>JSON.stringify(a)===JSON.stringify(e[0]))}(a,e):a===e)||a.push(e)}),a}function Ga(e,a){return e.filter(e=>e!==a)}!function(e){e.ArmedAway="hass:car-traction-control",e.ArmedHome="hass:home-outline",e.ArmedNight="hass:weather-night",e.ArmedCustom="hass:star-outline"}(qa||(qa={})),function(e){e.STATE_ALARM_DISARMED="disarmed",e.STATE_ALARM_ARMED_HOME="armed_home",e.STATE_ALARM_ARMED_AWAY="armed_away",e.STATE_ALARM_ARMED_NIGHT="armed_night",e.STATE_ALARM_ARMED_CUSTOM_BYPASS="armed_custom_bypass",e.STATE_ALARM_PENDING="pending",e.STATE_ALARM_ARMING="arming",e.STATE_ALARM_DISARMING="disarming",e.STATE_ALARM_TRIGGERED="triggered"}(Da||(Da={})),function(e){e.COMMAND_ALARM_DISARM="disarm",e.COMMAND_ALARM_ARM_HOME="arm_home",e.COMMAND_ALARM_ARM_AWAY="arm_away",e.COMMAND_ALARM_ARM_NIGHT="arm_night",e.COMMAND_ALARM_ARM_CUSTOM_BYPASS="arm_custom_bypass"}(Na||(Na={})),function(e){e.Door="door",e.Window="window",e.Motion="motion",e.Tamper="tamper",e.Environmental="environmental",e.Other="other"}(Pa||(Pa={})),function(e){e.Door="hass:door-closed",e.Window="hass:window-closed",e.Motion="hass:motion-sensor",e.Tamper="hass:vibrate",e.Environmental="hass:fire",e.Other="hass:contactless-payment-circle-outline"}(La||(La={})),function(e){e.Notification="notification",e.Action="action"}(Ra||(Ra={}));const Ya=(e,...a)=>{const t={};let i;for(i in e)a.includes(i)||(t[i]=e[i]);return t};function Va(e){return null!=e}function Ba(e,a){if(null===e||null===a)return e===a;const t=Object.keys(e),i=Object.keys(a);if(t.length!==i.length)return!1;for(const i of t)if("object"==typeof e[i]&&"object"==typeof a[i]){if(!Ba(e[i],a[i]))return!1}else if(e[i]!==a[i])return!1;return!0}function Qa(e,a){const t=e.target;ze(t,"show-dialog",{dialogTag:"error-dialog",dialogImport:()=>Promise.resolve().then((function(){return $t})),dialogParams:{error:a}})}function Wa(e,a){Qa(a,L`
    <b>Something went wrong!</b><br />
    ${e.body.message?L`
          ${e.body.message}<br /><br />
        `:""}
    ${e.error}<br /><br />
    Please <a href="https://github.com/nielsfaber/alarmo/issues">report</a> the bug.
  `)}const Ka=(e,a)=>{if(!e)return!1;switch(e){case Da.STATE_ALARM_ARMED_AWAY:return a[Ie.ArmedAway].enabled;case Da.STATE_ALARM_ARMED_HOME:return a[Ie.ArmedHome].enabled;case Da.STATE_ALARM_ARMED_NIGHT:return a[Ie.ArmedNight].enabled;case Da.STATE_ALARM_ARMED_CUSTOM_BYPASS:return a[Ie.ArmedCustom].enabled;default:return!0}};function Za(e,a){return Object.entries(a).forEach(([a,t])=>{e=a in e&&"object"==typeof e[a]&&null!==e[a]?Object.assign(Object.assign({},e),{[a]:Za(e[a],t)}):Object.assign(Object.assign({},e),{[a]:t})}),e}function Ja(e,a){const t=e=>"object"==typeof e?t(e.name):e.trim().toLowerCase();return t(e)<t(a)?-1:1}const Xa=e=>{class t extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return a([oe({attribute:!1})],t.prototype,"hass",void 0),t};let et=class extends se{constructor(){super(...arguments),this.min=0,this.max=100,this.step=10,this.value=0,this.scaleFactor=1,this.unit="",this.disabled=!1}firstUpdated(){this.value>0&&this.value<60&&(this.unit="sec"),"min"==this.unit&&(this.scaleFactor=1/60),"min"==this.unit&&(this.step=1)}render(){return L`
      <div class="container">
        <div class="prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="slider">
          ${this.getSlider()}
        </div>
        <div class="value${this.disabled?" disabled":""}" @click=${this.toggleUnit}>
          ${this.getValue()}
        </div>
      </div>
    `}getValue(){const e=Number(Math.round(this.value*this.scaleFactor));return!e&&this.zeroValue?this.zeroValue:`${e} ${this.getUnit()}`}getUnit(){switch(this.unit){case"sec":return $a("components.time_slider.seconds",this.hass.language);case"min":return $a("components.time_slider.minutes",this.hass.language);default:return""}}getSlider(){return L`
      <ha-slider
        pin
        min=${Math.round(this.min*this.scaleFactor)}
        max=${Math.round(this.max*this.scaleFactor)}
        step=${this.step}
        value=${Math.round(this.value*this.scaleFactor)}
        ?disabled=${this.disabled}
        @change=${this.updateValue}
      ></ha-slider>
    `}updateValue(e){const a=Number(e.target.value);this.value=Math.round(a/this.scaleFactor)}toggleUnit(){this.unit="min"==this.unit?"sec":"min",this.scaleFactor="min"==this.unit?1/60:1,this.step="min"==this.unit?1:10}};et.styles=o`
    :host {
      display: flex;
      flex-direction: column;
      min-width: 250px;
    }

    div.container {
      display: grid;
      grid-template-columns: max-content 1fr 60px;
      grid-template-rows: min-content;
      grid-template-areas: 'prefix slider value';
    }

    div.prefix {
      grid-area: prefix;
      display: flex;
      align-items: center;
    }

    div.slider {
      grid-area: slider;
      display: flex;
      align-items: center;
      flex: 1;
    }

    div.value {
      grid-area: value;
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
    }

    ha-slider {
      --paper-slider-pin-start-color: var(--primary-color);
      width: 100%;
    }

    .disabled {
      color: var(--disabled-text-color);
    }
  `,a([oe({type:Number})],et.prototype,"min",void 0),a([oe({type:Number})],et.prototype,"max",void 0),a([oe({type:Number})],et.prototype,"step",void 0),a([oe({type:Number})],et.prototype,"value",void 0),a([oe()],et.prototype,"scaleFactor",void 0),a([oe({type:String})],et.prototype,"unit",void 0),a([oe({type:Boolean})],et.prototype,"disabled",void 0),a([oe({type:String})],et.prototype,"zeroValue",void 0),et=a([ne("time-slider")],et);let at=class extends se{constructor(){super(...arguments),this.label="",this.items=[],this.clearable=!1,this.icons=!1,this.disabled=!1,this.invalid=!1,this.rowRenderer=(e,a,t)=>{!e.firstElementChild&&this.icons?e.innerHTML='\n        <style>\n          paper-icon-item {\n              margin: -10px;\n              padding: 0;\n          }\n          ha-icon {\n              display: flex;\n              flex: 0 0 40px;\n              color: var(--state-icon-color);\n          }\n          :host([selected]) paper-icon-item {\n            margin-left: 24px;\n          }\n        </style>\n        <paper-icon-item>\n          <ha-icon icon="" slot="item-icon"></ha-icon>\n          <paper-item-body two-line>\n            <div class="name"></div>\n            <div secondary></div>\n          </paper-item-body>\n        </paper-icon-item>\n        ':e.firstElementChild||(e.innerHTML='\n        <style>\n          paper-item {\n              margin: -10px;\n              padding: 0;\n          }\n          :host([selected]) paper-item {\n            margin-left: 24px;\n          }\n        </style>\n        <paper-item>\n          <paper-item-body two-line>\n            <div class="name"></div>\n            <div secondary></div>\n          </paper-item-body>\n        </paper-item>\n        '),e.querySelector(".name").textContent=t.item.name,e.querySelector("[secondary]").textContent=t.item.description||"",this.icons&&(e.querySelector("ha-icon").icon=t.item.icon)}}open(){this.updateComplete.then(()=>{var e,a;null===(a=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("vaadin-combo-box-light"))||void 0===a||a.open()})}focus(){this.updateComplete.then(()=>{var e;(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("paper-input")).focus()})}shouldUpdate(e){if(e.get("items"))if(Ba(this.items,e.get("items"))){if(1==e.size)return!1}else this.firstUpdated();return!0}firstUpdated(){this._comboBox.items=this.items}render(){return L`
      <vaadin-combo-box-light
        item-value-path="value"
        item-id-path="value"
        item-label-path="name"
        .value=${this._value}
        .renderer=${this.rowRenderer}
        .allowCustomValue=${this.allowCustomValue}
        ?disabled=${this.disabled}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .label=${this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ?disabled=${this.disabled}
          ?invalid=${this.invalid}
        >
          ${Va(this._value)&&this.items.find(e=>e.value==this._value)?L`
                ${this.icons?L`
                      <ha-icon slot="prefix" icon="${this.items.find(e=>e.value==this._value).icon}"> </ha-icon>
                    `:""}
                ${this.clearable?L`
                      <ha-icon-button slot="suffix" class="clear-button" @click=${this._clearValue} icon="hass:close">
                      </ha-icon-button>
                    `:""}
              `:""}
          <ha-icon-button
            slot="suffix"
            class="toggle-button"
            icon="${this._opened?"hass:menu-up":"hass:menu-down"}"
          >
          </ha-icon-button>
        </paper-input>
      </vaadin-combo-box-light>
    `}_clearValue(e){e.stopPropagation(),this._setValue("")}get _value(){return Va(this.value)?this.value:""}_openedChanged(e){this._opened=e.detail.value}_valueChanged(e){const a=e.detail.value;a!==this._value&&this._setValue(a)}_setValue(e){this.value=e,setTimeout(()=>{ze(this,"value-changed",{value:e})},0)}static get styles(){return o`
      :host {
        line-height: 1em;
      }
      paper-input > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
      paper-input > ha-icon {
        display: flex;
        flex: 0 0 40px;
        color: var(--state-icon-color);
        width: 40px;
        height: 26px;
        align-items: center;
      }
    `}};a([oe({attribute:!1})],at.prototype,"hass",void 0),a([oe()],at.prototype,"label",void 0),a([oe()],at.prototype,"value",void 0),a([oe()],at.prototype,"items",void 0),a([oe()],at.prototype,"clearable",void 0),a([oe()],at.prototype,"icons",void 0),a([oe({type:Boolean})],at.prototype,"disabled",void 0),a([de()],at.prototype,"_opened",void 0),a([oe({attribute:"allow-custom-value",type:Boolean})],at.prototype,"allowCustomValue",void 0),a([oe({type:Boolean})],at.prototype,"invalid",void 0),a([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(e,a){return(({finisher:e,descriptor:a})=>(t,i)=>{var s;if(void 0===i){const i=null!==(s=t.originalKey)&&void 0!==s?s:t.key,n=null!=a?{kind:"method",placement:"prototype",key:i,descriptor:a(t.key)}:{...t,key:i};return null!=e&&(n.finisher=function(a){e(a,i)}),n}{const s=t.constructor;void 0!==a&&Object.defineProperty(t,i,a(i)),null==e||e(s,i)}})({descriptor:t=>{const i={get(){var a;return null===(a=this.renderRoot)||void 0===a?void 0:a.querySelector(e)},enumerable:!0,configurable:!0};if(a){const a="symbol"==typeof t?Symbol():"__"+t;i.get=function(){var t;return void 0===this[a]&&(this[a]=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)),this[a]}}return i}})}("vaadin-combo-box-light",!0)],at.prototype,"_comboBox",void 0),at=a([ne("alarmo-select")],at);let tt=class extends(Xa(se)){constructor(){super(...arguments),this.currentTab=0}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await za(this.hass))}async firstUpdated(){this.areas=await za(this.hass),this.selectedArea=Object.keys(this.areas)[0],this.data=Object.assign({},this.areas[this.selectedArea].modes)}render(){if(!this.data)return L``;const e=Object.values(Ie)[this.currentTab];return L`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${$a("panels.general.cards.modes.title",this.hass.language)}
          </div>

          ${Object.keys(this.areas).length>1?L`
              <alarmo-select
            .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
            value=${this.selectedArea}
            label=${this.hass.localize("ui.components.area-picker.area")}
            @value-changed=${e=>this.selectArea(e.target.value)}

              </alarmo-select>
              `:""}
        </div>
        <div class="card-content">
          ${$a("panels.general.cards.modes.description",this.hass.language)}
        </div>

        <mwc-tab-bar
          .activeIndex=${this.currentTab}
          @MDCTabBar:activated=${e=>this.currentTab=Number(e.detail.index)}
        >
          ${Object.entries(Ie).map(([e,a])=>L`
              <mwc-tab
                label="${$a("common.modes_short."+a,this.hass.language)}"
                hasImageIcon
                stacked
                class="${this.data[a].enabled?"":"disabled"}"
              >
                <ha-icon icon="${qa[e]}" slot="icon"></ha-icon>
              </mwc-tab>
            `)}
        </mwc-tab-bar>

        <settings-row .narrow=${this.narrow} .large=${!0}>
          <span slot="heading">${$a("common.modes_long."+e,this.hass.language)}</span>
          <span slot="description"
            >${$a("panels.general.cards.modes.fields.mode."+e,this.hass.language)}</span
          >

          <div style="display: flex; margin: 10px 0px; justify-content: center; width: 100%">
            <mwc-button
              class="${this.data[e].enabled?"active":""}"
              @click=${()=>this.data={...this.data,[e]:{...this.data[e],enabled:!0}}}
            >
              ${$a("panels.general.cards.modes.fields.mode.enabled",this.hass.language)}
            </mwc-button>
            <mwc-button
              class="${this.data[e].enabled?"":"active"}"
              @click=${()=>this.data={...this.data,[e]:{...this.data[e],enabled:!1}}}
            >
              ${$a("panels.general.cards.modes.fields.mode.disabled",this.hass.language)}
            </mwc-button>
          </div>
        </settings-row>

        ${this.data[e].enabled?L`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${$a("panels.general.cards.modes.fields.exit_delay.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${$a("panels.general.cards.modes.fields.exit_delay.description",this.hass.language)}</span
                >
                <time-slider
                  .hass=${this.hass}
                  unit="sec"
                  max="180"
                  zeroValue=${$a("components.time_slider.none",this.hass.language)}
                  value=${this.data[e].exit_time||0}
                  @change=${a=>this.data={...this.data,[e]:{...this.data[e],exit_time:Number(a.target.value)}}}
                >
                </time-slider>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${$a("panels.general.cards.modes.fields.entry_delay.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${$a("panels.general.cards.modes.fields.entry_delay.description",this.hass.language)}</span
                >
                <time-slider
                  .hass=${this.hass}
                  unit="sec"
                  max="180"
                  zeroValue=${$a("components.time_slider.none",this.hass.language)}
                  value=${this.data[e].entry_time||0}
                  @change=${a=>this.data={...this.data,[e]:{...this.data[e],entry_time:Number(a.target.value)}}}
                >
                </time-slider>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${$a("panels.general.cards.modes.fields.trigger_time.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${$a("panels.general.cards.modes.fields.trigger_time.description",this.hass.language)}</span
                >
                <time-slider
                  .hass=${this.hass}
                  unit="min"
                  max="3600"
                  zeroValue=${$a("components.time_slider.infinite",this.hass.language)}
                  value=${this.data[e].trigger_time||0}
                  @change=${a=>this.data={...this.data,[e]:{...this.data[e],trigger_time:Number(a.target.value)}}}
                >
                </time-slider>
              </settings-row>
            `:""}

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `}selectArea(e){e!=this.selectedArea&&(this.selectedArea=e,this.data=Object.assign({},this.areas[e].modes))}saveClick(e){Ea(this.hass,{area_id:this.selectedArea,modes:this.data}).catch(a=>Wa(a,e)).then()}};tt.styles=Re,a([oe()],tt.prototype,"hass",void 0),a([oe()],tt.prototype,"narrow",void 0),a([oe()],tt.prototype,"currentTab",void 0),a([oe()],tt.prototype,"config",void 0),a([oe()],tt.prototype,"areas",void 0),a([oe()],tt.prototype,"data",void 0),a([oe()],tt.prototype,"selectedArea",void 0),tt=a([ne("alarm-mode-card")],tt);let it=class extends se{constructor(){super(...arguments),this.threeLine=!1}render(){return L`
      <div class="info">
        <slot name="heading"></slot>
        <div class="secondary"><slot name="description"></slot></div>
      </div>
      <slot></slot>
    `}static get styles(){return o`
      :host {
        display: flex;
        flex-direction: row;
        padding: 0px 16px;
        align-items: center;
        min-height: 72px;
      }
      :host([large]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-bottom: none;
        border-top: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([nested]) {
        border: none;
        padding: 0px 16px 16px 16px;
        margin-top: -16px;
        min-height: 40px;
      }
      :host([nested]:not([narrow])) {
        padding: 16px 16px 16px 32px;
      }
      :host([first]) {
        border-top: none;
      }
      :host([last]) {
        border-bottom: none;
      }
      :host([dialog]) {
        border: none;
        padding: 12px 0px;
      }
      ::slotted(ha-switch) {
        padding: 16px 0;
      }
      .info {
        flex: 1 0 60px;
      }
      :host([large]) .info,
      :host([narrow]) .info {
        flex: 1 0 40px;
      }
      :host([nested]) .info {
        flex: 1 0 26px;
      }
      :host([dialog]) .info {
        flex: 1 0 40px;
        padding-bottom: 8px;
      }
      .secondary {
        color: var(--secondary-text-color);
      }
      :host(:not([large]):not([narrow])):not([dialog])) ::slotted(*) {
        max-width: 66%;
      }
    `}};a([oe({type:Boolean,reflect:!0})],it.prototype,"narrow",void 0),a([oe({type:Boolean,reflect:!0})],it.prototype,"large",void 0),a([oe({type:Boolean,attribute:"three-line"})],it.prototype,"threeLine",void 0),a([oe({type:Boolean})],it.prototype,"nested",void 0),a([oe({type:Boolean})],it.prototype,"dialog",void 0),it=a([ne("settings-row")],it);let st=class extends se{constructor(){super(...arguments),this.header="",this.open=!1}render(){return L`
      ${this.open?L`
            <div class="header open">
              <span
                @click=${()=>{this.open=!1}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                icon="hass:chevron-down"
                @click=${()=>{this.open=!1}}
              >
              </ha-icon-button>
            </div>
            <slot></slot>
            <div class="header open">
              <span
                @click=${()=>{this.open=!1}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                icon="hass:chevron-up"
                @click=${()=>{this.open=!1}}
              >
              </ha-icon-button>
            </div>
          `:L`
            <div class="header">
              <span
                @click=${()=>{this.open=!0}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                icon="hass:chevron-right"
                @click=${()=>{this.open=!0}}
              >
              </ha-icon-button>
            </div>
          `}
    `}static get styles(){return o`
      :host {
      }

      div.header {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        cursor: pointer;
      }
      div.header.open:first-of-type {
        border-bottom: 1px solid var(--divider-color);
      }
      div.header.open:last-of-type {
        border-top: 1px solid var(--divider-color);
      }

      :host([narrow]) div.header {
        border-top: 1px solid var(--divider-color);
        border-bottom: none;
      }

      div.header span {
        display: flex;
        flex-grow: 1;
      }

      div.seperator {
        height: 1px;
        background: var(--divider-color);
      }
    `}};a([oe({type:Boolean,reflect:!0})],st.prototype,"narrow",void 0),a([oe()],st.prototype,"header",void 0),a([oe()],st.prototype,"open",void 0),st=a([ne("collapsible-section")],st);let nt=class extends(Xa(se)){constructor(){super(...arguments),this.areas={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await ka(this.hass);this.config=e,this.areas=await za(this.hass),this.selection=e.mqtt}firstUpdated(){(async()=>{await Le()})()}render(){return this.hass&&this.selection?L`
      <ha-card>
        <div class="card-header">
          <div class="name">${$a("panels.general.cards.mqtt.title",this.hass.language)}</div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">${$a("panels.general.cards.mqtt.description",this.hass.language)}</div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${$a("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${$a("panels.general.cards.mqtt.fields.state_topic.description",this.hass.language)}</span
          >
          <paper-input
            label="${$a("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}"
            value=${this.selection.state_topic}
            @change=${e=>{this.selection={...this.selection,state_topic:e.target.value}}}
          ></paper-input>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${$a("panels.general.cards.mqtt.fields.state_payload.heading",this.hass.language)}
        >
          ${Object.values(Da).filter(e=>Object.values(this.areas).some(a=>Ka(e,a.modes))).map(e=>L`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${Ia(e)}</span>
                  <span slot="description"
                    >${$a("panels.general.cards.mqtt.fields.state_payload.item",this.hass.language,"{state}",Ia(e))}</span
                  >
                  <paper-input
                    label=${Ia(e)}
                    placeholder=${e}
                    value=${this.selection.state_payload[e]||""}
                    @change=${a=>{this.selection=Za(this.selection,{state_payload:{[e]:a.target.value}})}}
                  >
                  </paper-input>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${$a("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${$a("panels.general.cards.mqtt.fields.event_topic.description",this.hass.language)}</span
          >
          <paper-input
            label="${$a("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}"
            value=${this.selection.event_topic}
            @change=${e=>{this.selection={...this.selection,event_topic:e.target.value}}}
          ></paper-input>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${$a("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${$a("panels.general.cards.mqtt.fields.command_topic.description",this.hass.language)}</span
          >
          <paper-input
            label="${$a("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}"
            value=${this.selection.command_topic}
            @change=${e=>{this.selection={...this.selection,command_topic:e.target.value}}}
          ></paper-input>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${$a("panels.general.cards.mqtt.fields.command_payload.heading",this.hass.language)}
        >
          ${Object.values(Na).filter(e=>Object.values(this.areas).some(a=>Ka((e=>{switch(e){case Na.COMMAND_ALARM_DISARM:return Da.STATE_ALARM_DISARMED;case Na.COMMAND_ALARM_ARM_HOME:return Da.STATE_ALARM_ARMED_HOME;case Na.COMMAND_ALARM_ARM_AWAY:return Da.STATE_ALARM_ARMED_AWAY;case Na.COMMAND_ALARM_ARM_NIGHT:return Da.STATE_ALARM_ARMED_NIGHT;case Na.COMMAND_ALARM_ARM_CUSTOM_BYPASS:return Da.STATE_ALARM_ARMED_CUSTOM_BYPASS;default:return}})(e),a.modes))).map(e=>L`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${Ia(e)}</span>
                  <span slot="description"
                    >${$a("panels.general.cards.mqtt.fields.command_payload.item",this.hass.language,"{command}",Ia(e))}</span
                  >
                  <paper-input
                    label=${Ia(e)}
                    placeholder=${e}
                    value=${this.selection.command_payload[e]||""}
                    @change=${a=>{this.selection=Za(this.selection,{command_payload:{[e]:a.target.value}})}}
                  >
                  </paper-input>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${$a("panels.general.cards.mqtt.fields.require_code.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${$a("panels.general.cards.mqtt.fields.require_code.description",this.hass.language)}</span
          >
          <ha-switch
            ?checked=${this.selection.require_code}
            ?disabled=${!this.config.code_arm_required&&!this.config.code_disarm_required}
            @change=${e=>{this.selection={...this.selection,require_code:e.target.checked}}}
          >
          </ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `:L``}saveClick(e){this.hass&&Ca(this.hass,{mqtt:Object.assign(Object.assign({},this.selection),{enabled:!0})}).catch(a=>Wa(a,e)).then(()=>{this.cancelClick()})}cancelClick(){De(0,"/alarmo/general",!0)}};nt.styles=Re,a([oe()],nt.prototype,"narrow",void 0),a([oe()],nt.prototype,"config",void 0),a([oe()],nt.prototype,"areas",void 0),a([oe()],nt.prototype,"selection",void 0),nt=a([ne("mqtt-config-card")],nt);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const rt=2;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class ot extends class{constructor(e){}T(e,a,t){this.??dt=e,this.M=a,this.??ct=t}S(e,a){return this.update(e,a)}update(e,a){return this.render(...a)}}{constructor(e){if(super(e),this.vt=U,e.type!==rt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U)return this.Vt=void 0,this.vt=e;if(e===R)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.vt)return this.Vt;this.vt=e;const a=[e];return a.raw=a,this.Vt={_$litType$:this.constructor.resultType,strings:a,values:[]}}}ot.directiveName="unsafeHTML",ot.resultType=1;const dt=(e=>(...a)=>({_$litDirective$:e,values:a}))(ot);let lt=class extends se{render(){return this.columns&&this.data?L`
      <div class="table">
        ${this.renderHeaderRow()}
        ${this.data.length?this.data.map(e=>this.renderDataRow(e)):L`
              <div class="table-row">
                <div class="table-cell text grow">
                  <slot></slot>
                </div>
              </div>
            `}
      </div>
    `:L``}renderHeaderRow(){return this.columns?L`
      <div class="table-row header">
        ${Object.values(this.columns).map(e=>e.hide?"":L`
                <div
                  class="table-cell ${e.text?"text":""} ${e.grow?"grow":""} ${e.align?e.align:""}"
                  style="${e.grow?"":"width: "+e.width}"
                >
                  <span>${e.title||""}</span>
                </div>
              `)}
      </div>
    `:L``}renderDataRow(e){return this.columns?L`
      <div class="table-row ${this.selectable?"selectable":""}" @click=${()=>this.handleClick(String(e.id))}>
        ${Object.entries(this.columns).map(([a,t])=>t.hide?"":L`
                <div
                  class="table-cell ${t.text?"text":""} ${t.grow?"grow":""} ${t.align?t.align:""}"
                  style="${t.grow?"":"width: "+t.width}"
                >
                  ${e[a]}
                </div>
              `)}
      </div>
    `:L``}handleClick(e){if(!this.selectable)return;const a=new CustomEvent("row-click",{detail:{id:e}});this.dispatchEvent(a)}};lt.styles=o`
    :host {
      width: 100%;
    }
    div.table {
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      width: 100%;
    }
    div.table .header {
      font-weight: bold;
    }
    div.table-row {
      display: flex;
      width: 100%;
      height: 52px;
      border-top: 1px solid var(--divider-color);
    }

    div.table-cell {
      align-self: center;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    div.table-cell.text {
      padding: 4px 16px;
    }
    div.table-cell.grow {
      flex-grow: 1;
      flex-shrink: 1;
    }

    div.table-cell > ha-switch {
      width: 68px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    div.table-cell > ha-icon-button {
      color: var(--secondary-text-color);
    }
    div.table .header div.table-cell span {
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    div.table-row.selectable {
      cursor: pointer;
    }
    div.table-row.selectable:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.04);
    }

    ha-icon {
      color: var(--paper-item-icon-color);
      padding: 8px;
    }

    .secondary {
      color: var(--secondary-text-color);
      display: flex;
      padding-top: 4px;
    }

    a,
    a:visited {
      color: var(--primary-color);
    }
  `,a([oe()],lt.prototype,"columns",void 0),a([oe()],lt.prototype,"data",void 0),a([oe({type:Boolean})],lt.prototype,"selectable",void 0),lt=a([ne("alarmo-table")],lt);let ct=class extends se{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?L`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title">
              ${this._params.title}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.description}
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button slot="secondaryAction" style="float: left" @click=${this.confirmClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:L``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return o`
      ${Re}
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};a([oe({attribute:!1})],ct.prototype,"hass",void 0),a([de()],ct.prototype,"_params",void 0),ct=a([ne("confirm-delete-dialog")],ct);var ht=Object.freeze({__proto__:null,get ConfirmDeleteDialog(){return ct}});let mt=class extends(Xa(se)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={},this.name=""}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await za(this.hass),this.sensors=await Aa(this.hass),this.automations=await ja(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.area_id&&(this.area_id=e.area_id,this.name=this.areas[this.area_id].name),await this.updateComplete}async closeDialog(){this._params=void 0,this.area_id=void 0,this.name=""}render(){return this._params?L`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title">
              ${this.area_id?$a("panels.general.dialogs.edit_area.title",this.hass.language,"{area}",this.areas[this.area_id].name):$a("panels.general.dialogs.create_area.title",this.hass.language)}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <paper-input
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @value-changed=${e=>this.name=e.target.value}
            value="${this.name}"
          >
          </paper-input>
          ${this.area_id?L`
                <span class="note"
                  >${$a("panels.general.dialogs.edit_area.name_warning",this.hass.language)}</span
                >
              `:""}
          ${this.area_id?"":L`
                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.selectedArea}
                  label="${$a("panels.general.dialogs.create_area.fields.copy_from",this.hass.language)}"
                  clearable=${!0}
                  @value-changed=${e=>this.selectedArea=e.target.value}
                >
                </alarmo-select>
              `}
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.area_id?L`
              <mwc-button
                slot="secondaryAction"
                @click=${this.deleteClick}
                class="warning"
                ?disabled=${1==Object.keys(this.areas).length}
              >
                ${this.hass.localize("ui.common.delete")}
              </mwc-button>
            `:""}
      </ha-dialog>
    `:L``}saveClick(e){const a=this.name.trim();if(!a.length)return;let t={name:a};this.area_id?t=Object.assign(Object.assign({},t),{area_id:this.area_id}):this.selectedArea&&(t=Object.assign(Object.assign({},t),{modes:Object.assign({},this.areas[this.selectedArea].modes)})),Ea(this.hass,t).catch(a=>Wa(a,e)).then(()=>{this.closeDialog()})}async deleteClick(e){if(!this.area_id)return;const a=Object.values(this.sensors).filter(e=>e.area==this.area_id).length,t=Object.values(this.automations).filter(e=>{var a;return null===(a=e.triggers)||void 0===a?void 0:a.map(e=>e.area).includes(this.area_id)}).length;let i=!1;var s,n;i=!a&&!t||await new Promise(i=>{ze(e.target,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return ht})),dialogParams:{title:$a("panels.general.dialogs.remove_area.title",this.hass.language),description:$a("panels.general.dialogs.remove_area.description",this.hass.language,["{sensors}","{automations}"],[String(a),String(t)]),cancel:()=>i(!1),confirm:()=>i(!0)}})}),i&&(s=this.hass,n=this.area_id,s.callApi("POST","alarmo/area",{area_id:n,remove:!0})).catch(a=>Wa(a,e)).then(()=>{this.closeDialog()})}static get styles(){return o`
      ${Re}
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
    `}};a([oe({attribute:!1})],mt.prototype,"hass",void 0),a([de()],mt.prototype,"_params",void 0),a([oe()],mt.prototype,"areas",void 0),a([oe()],mt.prototype,"sensors",void 0),a([oe()],mt.prototype,"automations",void 0),a([oe()],mt.prototype,"name",void 0),a([oe()],mt.prototype,"area_id",void 0),a([oe()],mt.prototype,"selectedArea",void 0),mt=a([ne("create-area-dialog")],mt);var ut=Object.freeze({__proto__:null,get CreateAreaDialog(){return mt}});let pt=class extends(Xa(se)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await za(this.hass),this.sensors=await Aa(this.hass),this.automations=await ja(this.hass))}render(){if(!this.hass)return L``;const e=Object.values(this.areas);e.sort(Ja);const a={actions:{width:"48px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},remarks:{title:$a("panels.general.cards.areas.table.remarks",this.hass.language),width:"60%",hide:this.narrow,text:!0}},t=Object.values(e).map(a=>{const t=Object.values(this.sensors).filter(e=>e.area==a.area_id).length,i=1==Object.values(e).length?Object.values(this.automations).filter(e=>{var t,i;return(null===(t=e.triggers)||void 0===t?void 0:t.map(e=>e.area).includes(a.area_id))||!(null===(i=e.triggers)||void 0===i?void 0:i.map(e=>e.area).length)}).length:Object.values(this.automations).filter(e=>{var t;return null===(t=e.triggers)||void 0===t?void 0:t.map(e=>e.area).includes(a.area_id)}).length,s=`<a href="/alarmo/sensors/filter/${a.area_id}">${$a("panels.general.cards.areas.table.summary_sensors",this.hass.language,"{number}",String(t))}</a>`,n=`<a href="/alarmo/actions/filter/${a.area_id}">${$a("panels.general.cards.areas.table.summary_automations",this.hass.language,"{number}",String(i))}</a>`;return{id:a.area_id,actions:L`
          <ha-icon-button @click=${e=>this.editClick(e,a.area_id)} icon="hass:pencil"></ha-icon-button>
        `,name:Ia(a.name),remarks:dt($a("panels.general.cards.areas.table.summary",this.hass.language,["{summary_sensors}","{summary_automations}"],[s,n]))}});return L`
      <ha-card header="${$a("panels.general.cards.areas.title",this.hass.language)}">
        <div class="card-content">
          ${$a("panels.general.cards.areas.description",this.hass.language)}
        </div>

        <alarmo-table .columns=${a} .data=${t}>
          ${$a("panels.general.cards.areas.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addClick}>
            ${$a("panels.general.cards.areas.actions.add",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addClick(e){const a=e.target;ze(a,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return ut})),dialogParams:{}})}editClick(e,a){const t=e.target;ze(t,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return ut})),dialogParams:{area_id:a}})}};pt.styles=Re,a([oe()],pt.prototype,"narrow",void 0),a([oe()],pt.prototype,"path",void 0),a([oe()],pt.prototype,"config",void 0),a([oe()],pt.prototype,"areas",void 0),a([oe()],pt.prototype,"sensors",void 0),a([oe()],pt.prototype,"automations",void 0),pt=a([ne("area-config-card")],pt);let gt=class extends se{constructor(){super(...arguments),this.name=""}async showDialog(e){this._params=e;const a=await ka(this.hass);this.name=a.master.name||"",await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?L`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title"> ${$a("panels.general.dialogs.edit_master.title",this.hass.language)}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <paper-input
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @value-changed=${e=>this.name=e.target.value}
            value="${this.name}"
          >
          </paper-input>
          <span class="note">${$a("panels.general.dialogs.edit_area.name_warning",this.hass.language)}</span>
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        <mwc-button slot="secondaryAction" @click=${this.closeDialog}>
          ${this.hass.localize("ui.common.cancel")}
        </mwc-button>
      </ha-dialog>
    `:L``}saveClick(){const e=this.name.trim();e.length&&Ca(this.hass,{master:{enabled:!0,name:e}}).catch().then(()=>{this.closeDialog()})}static get styles(){return o`
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
    `}};a([oe({attribute:!1})],gt.prototype,"hass",void 0),a([de()],gt.prototype,"_params",void 0),a([oe()],gt.prototype,"name",void 0),gt=a([ne("edit-master-dialog")],gt);var vt=Object.freeze({__proto__:null,get EditMasterDialog(){return gt}});let _t=class extends(Xa(se)){constructor(){super(...arguments),this.areas={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){var e,a;this.hass&&(this.config=await ka(this.hass),this.areas=await za(this.hass),this.automations=await ja(this.hass),this.data=(e=this.config,a=["trigger_time","disarm_after_trigger","mqtt","master"],e?Object.entries(e).filter(([e])=>a.includes(e)).reduce((e,[a,t])=>Object.assign(e,{[a]:t}),{}):{}))}firstUpdated(){(async()=>{await Le()})()}render(){var e,a,t,i,s,n,r,o;return this.hass&&this.config&&this.data?this.path&&"mqtt_configuration"==this.path[0]?L`
        <mqtt-config-card .hass=${this.hass} .narrow=${this.narrow}> </mqtt-config-card>
      `:this.path&&"edit_area"==this.path[0]&&2==this.path.length?L`
        <area-editor-card .hass=${this.hass} .narrow=${this.narrow} item=${this.path[1]}> </area-editor-card>
      `:L`
        <ha-card header="${$a("panels.general.title",this.hass.language)}">
          <div class="card-content">
            ${$a("panels.general.cards.general.description",this.hass.language)}
          </div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${$a("panels.general.cards.general.fields.disarm_after_trigger.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${$a("panels.general.cards.general.fields.disarm_after_trigger.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${this.data.disarm_after_trigger}
              @change=${e=>this.data={...this.data,disarm_after_trigger:e.target.checked}}
              }}
            >
            </ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${$a("panels.general.cards.general.fields.enable_mqtt.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${$a("panels.general.cards.general.fields.enable_mqtt.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${null===(a=null===(e=this.data)||void 0===e?void 0:e.mqtt)||void 0===a?void 0:a.enabled}
              @change=${e=>{this.data={...this.data,mqtt:{...this.data.mqtt,enabled:e.target.checked}}}}
            >
            </ha-switch>
          </settings-row>

          ${(null===(i=null===(t=this.data)||void 0===t?void 0:t.mqtt)||void 0===i?void 0:i.enabled)?L`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button outlined @click=${()=>De(0,"/alarmo/general/mqtt_configuration",!0)}>
                    ${$a("panels.general.cards.general.actions.setup_mqtt",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}
          ${Object.keys(this.areas).length>=2?L`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading"
                    >${$a("panels.general.cards.general.fields.enable_master.heading",this.hass.language)}</span
                  >
                  <span slot="description"
                    >${$a("panels.general.cards.general.fields.enable_master.description",this.hass.language)}</span
                  >
                  <ha-switch
                    ?checked=${(null===(n=null===(s=this.data)||void 0===s?void 0:s.master)||void 0===n?void 0:n.enabled)&&Object.keys(this.areas).length>=2}
                    ?disabled=${Object.keys(this.areas).length<2}
                    @change=${this.toggleEnableMaster}
                  >
                  </ha-switch>
                </settings-row>
              `:""}
          ${(null===(o=null===(r=this.data)||void 0===r?void 0:r.master)||void 0===o?void 0:o.enabled)&&Object.keys(this.areas).length>=2?L`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button outlined @click=${this.setupMasterClick}>
                    ${$a("panels.general.cards.general.actions.setup_master",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}

          <div class="card-actions">
            <mwc-button @click=${this.saveClick}>
              ${this.hass.localize("ui.common.save")}
            </mwc-button>
          </div>
        </ha-card>

        <alarm-mode-card .hass=${this.hass} .narrow=${this.narrow}> </alarm-mode-card>

        <area-config-card .hass=${this.hass} .narrow=${this.narrow}> </area-config-card>
      `:L``}setupMasterClick(e){const a=e.target;ze(a,"show-dialog",{dialogTag:"edit-master-dialog",dialogImport:()=>Promise.resolve().then((function(){return vt})),dialogParams:{}})}async toggleEnableMaster(e){const a=e.target;let t=a.checked;if(!t){const e=Object.values(this.automations).filter(e=>{var a;return!(null===(a=e.triggers)||void 0===a?void 0:a.map(e=>e.area).length)}).length;if(e){await new Promise(t=>{ze(a,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return ht})),dialogParams:{title:$a("panels.general.dialogs.disable_master.title",this.hass.language),description:$a("panels.general.dialogs.disable_master.description",this.hass.language,["{automations}"],[String(e)]),cancel:()=>t(!1),confirm:()=>t(!0)}})})||(t=!0,a.checked=!0)}}this.data=Object.assign(Object.assign({},this.data),{master:Object.assign(Object.assign({},this.data.master),{enabled:t})})}saveClick(e){this.hass&&this.data&&Ca(this.hass,this.data).catch(a=>Wa(a,e)).then()}};_t.styles=Re,a([oe()],_t.prototype,"narrow",void 0),a([oe()],_t.prototype,"path",void 0),a([oe()],_t.prototype,"data",void 0),a([oe()],_t.prototype,"config",void 0),a([oe()],_t.prototype,"areas",void 0),a([oe()],_t.prototype,"automations",void 0),_t=a([ne("alarm-view-general")],_t);const ft=(e,a)=>{if("binary_sensor"==function(e){const a="string"==typeof e?e:e.entity_id;return String(a.split(".").shift())}(e.entity_id)){if(a)return!0;const t=e.attributes.device_class;return!!t&&!!["door","garage_door","gas","heat","lock","moisture","motion","moving","occupancy","opening","presence","safety","smoke","sound","vibration","window"].includes(t)}return!1},bt=e=>{switch(e.attributes.device_class){case"door":case"garage_door":case"lock":case"opening":return Pa.Door;case"window":return Pa.Window;case"gas":case"heat":case"moisture":case"smoke":case"safety":return Pa.Environmental;case"motion":case"moving":case"occupancy":case"presence":return Pa.Motion;case"sound":case"opening":case"vibration":return Pa.Tamper;default:return}},yt=e=>{const a=a=>a.filter(a=>e.includes(a));return{[Pa.Door]:{modes:a([Ie.ArmedAway,Ie.ArmedHome,Ie.ArmedNight]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!0,use_exit_delay:!1},[Pa.Window]:{modes:a([Ie.ArmedAway,Ie.ArmedHome,Ie.ArmedNight]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1},[Pa.Motion]:{modes:a([Ie.ArmedAway]),always_on:!1,allow_open:!0,arm_on_close:!1,use_entry_delay:!0,use_exit_delay:!0},[Pa.Tamper]:{modes:a([Ie.ArmedAway,Ie.ArmedHome,Ie.ArmedNight,Ie.ArmedCustom]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1},[Pa.Environmental]:{modes:a([Ie.ArmedAway,Ie.ArmedHome,Ie.ArmedNight,Ie.ArmedCustom]),always_on:!0,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1}}};let wt=class extends se{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?L`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title">
              ${this.hass.localize("state_badge.default.error")}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.error||""}
        </div>

        <mwc-button slot="primaryAction" style="float: left" @click=${this.closeDialog} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:L``}static get styles(){return o`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};a([oe({attribute:!1})],wt.prototype,"hass",void 0),a([de()],wt.prototype,"_params",void 0),wt=a([ne("error-dialog")],wt);var $t=Object.freeze({__proto__:null,get ErrorDialog(){return wt}});let kt=class extends se{constructor(){super(...arguments),this.items=[],this.value=null,this.selectable=!1,this.multiple=!1}render(){return L`
      ${this.items.map(e=>L`
          <div
            class="chip ${Array.isArray(this.value)&&this.value.includes(e.value)||this.value==e.value?"selected":""}"
            @click=${()=>this.selectItem(e.value)}
          >
            ${this.renderBadge(e)}
            <span class="label">
              ${e.name}
            </span>
          </div>
        `)}
    `}renderBadge(e){return L`
    ${void 0!==e.count?L`<span class="count">${e.count>99?99:e.count}</span>`:void 0!==e.icon?L`<ha-icon icon="${e.icon}"></ha-icon>`:""}
    `}renderIcon(e){return L`
    `}selectItem(e){let a=e;if(this.selectable){if(this.multiple){let a=Array.isArray(this.value)?[...this.value]:Va(this.value)?[this.value]:[];this.value=a.includes(e)?Ga(a,e):[...a,e]}else this.value=this.value==e?null:e;a=this.value}ze(this,"value-changed",{value:a})}static get styles(){return o`
      :host {
      }
      .chip {
        display: inline-flex;
        background: rgba(var(--rgb-primary-text-color), 0.08);
        color: rgba(var(--rgb-primary-text-color), 0.8);
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        padding: 0px 6px;
        margin: 1px 0px;
        height: 32px;
        min-width: 35px;
        font-weight: 500;
        font-size: 0.9rem;
        cursor: pointer;
        user-select: none;
      }
      .chip span.label {
        margin: 0px 6px;
      }
      .chip span.count {
        background: rgba(var(--rgb-secondary-text-color), 0.85);
        color: rgba(var(--rgb-text-primary-color), 1);
        border-radius: 10px;
        height: 20px;
        display: flex;
        width: 20px;
        justify-content: center;
        align-items: flex-start;
        font-size: 0.8rem;
        line-height: 20px;
      }
      .chip ha-icon {
        height: 24px;
        display: flex;
        width: 24px;
        justify-content: center;
        align-items: flex-start;
        font-size: 0.8rem;
        line-height: 24px;
        padding-left: 4px;
      }
      .chip:hover {
        background: rgba(var(--rgb-primary-text-color), 0.12);
      }
      .chip:active {
        background: rgba(var(--rgb-primary-text-color), 0.24);
      }
      .chip.selected {
        background: rgba(var(--rgb-primary-color), 0.9);
        color: var(--text-primary-color);
      }
      .chip.selected:hover {
        background: rgba(var(--rgb-primary-color), 0.85);
      }
      .chip.selected:active {
        background: rgba(var(--rgb-primary-color), 0.74);
      }
    `}};a([oe()],kt.prototype,"items",void 0),a([oe()],kt.prototype,"value",void 0),a([oe({type:Boolean})],kt.prototype,"selectable",void 0),a([oe({type:Boolean})],kt.prototype,"multiple",void 0),kt=a([ne("alarmo-chips")],kt);let At=class extends(Xa(se)){constructor(){super(...arguments),this.sensorGroups={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.sensorGroups=await Oa(this.hass),this.sensors=await Aa(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.group_id&&Object.keys(this.sensorGroups).includes(e.group_id)?this.data=Object.assign({},this.sensorGroups[e.group_id]):this.data={name:"",entities:[],timeout:600},await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?L`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
        .heading=${this.renderHeader()}
      >

        <div class="wrapper">

          <settings-row dialog>
            <span slot="heading">${$a("panels.sensors.dialogs.create_group.fields.name.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.dialogs.create_group.fields.name.description",this.hass.language)}</span>
            <paper-input
              label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
              @value-changed=${e=>this.data={...this.data,name:String(e.target.value).trim()}}
              value="${this.data.name}"
            >
            </paper-input>
          </settings-row>

          <settings-row large dialog>
            <span slot="heading">${$a("panels.sensors.dialogs.create_group.fields.sensors.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.dialogs.create_group.fields.sensors.description",this.hass.language)}</span>

            <div>
              ${this.renderSensorOptions()}
            </div>
          </settings-row>

          <settings-row dialog>
            <span slot="heading">${$a("panels.sensors.dialogs.create_group.fields.timeout.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.dialogs.create_group.fields.timeout.description",this.hass.language)}</span>
            
            <time-slider
              .hass=${this.hass}
              unit="min"
              max="1200"
              .value=${this.data.timeout}
              @change=${e=>this.data={...this.data,timeout:Number(e.target.value)}}
            >
            </time-slider>
          </settings-row>

        </div>
        <mwc-button slot="secondaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.data.group_id?L`
          <mwc-button slot="secondaryAction" @click=${this.deleteClick} class="warning">
            ${this.hass.localize("ui.common.delete")}
          </mwc-button>
          `:""}
      </ha-dialog>
    `:L``}renderHeader(){return L`
    <span class="header_title">
      ${this.data.group_id?$a("panels.sensors.dialogs.edit_group.title",this.hass.language,"{name}",this.sensorGroups[this.data.group_id].name):$a("panels.sensors.dialogs.create_group.title",this.hass.language)}
    </span>
    <ha-icon-button
      .label=${this.hass.localize("ui.dialogs.generic.close")}
      icon="mdi:close"
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>`}renderSensorOptions(){let e=Object.keys(this.sensors).filter(e=>!Va(this.sensors[e].group)||this.sensors[e].group===this.data.group_id).map(e=>{const a=this.hass.states[e],t=Object.entries(Pa).find(([,a])=>a==this.sensors[e].type)[0];return{value:e,name:this.sensors[e].name||Ia(Ha(a)),icon:La[t]}});return e.sort(Ja),e.length?L`
      <alarmo-chips
        .items=${e}
        .value=${this.data.entities}
        ?selectable=${!0}
        ?multiple=${!0}
        @value-changed=${e=>this.data={...this.data,entities:e.detail.value}}
      >
      </alarmo-chips>
    `:$a("panels.sensors.cards.sensors.no_items",this.hass.language)}saveClick(e){var a,t;this.data.name.length&&(this.data.group_id&&this.data.name==this.sensorGroups[this.data.group_id].name||!Object.values(this.sensorGroups).find(e=>e.name.toLowerCase()==this.data.name.toLowerCase()))?this.data.entities.length<2?Qa(e,$a("panels.sensors.dialogs.create_group.errors.insufficient_sensors",this.hass.language)):(a=this.hass,t=this.data,a.callApi("POST","alarmo/sensor_groups",t)).catch(a=>Wa(a,e)).then(()=>{this.closeDialog()}):Qa(e,$a("panels.sensors.dialogs.create_group.errors.invalid_name",this.hass.language))}deleteClick(e){var a,t;this.data.group_id&&(a=this.hass,t=this.data.group_id,a.callApi("POST","alarmo/sensor_groups",{group_id:t,remove:!0})).catch(a=>Wa(a,e)).then(()=>{this.closeDialog()})}static get styles(){return o`
    ${Ue}
      div.wrapper {
        color: var(--primary-text-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
    `}};a([oe({attribute:!1})],At.prototype,"hass",void 0),a([de()],At.prototype,"_params",void 0),a([oe()],At.prototype,"sensorGroups",void 0),a([oe()],At.prototype,"sensors",void 0),a([oe()],At.prototype,"data",void 0),At=a([ne("create-sensor-group-dialog")],At);var xt=Object.freeze({__proto__:null,get CreateSensorGroupDialog(){return At}});let jt=class extends(Xa(se)){constructor(){super(...arguments),this.sensorGroups={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.sensorGroups=await Oa(this.hass),this.sensors=await Aa(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?L`
      <ha-dialog
        open
        .heading=${this.renderHeader()}
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
        <div class="wrapper">
          <div class="description">
            ${$a("panels.sensors.dialogs.manage_groups.description",this.hass.language)}
          </div>
          <div class="container">
            ${Object.keys(this.sensorGroups).length?Object.values(this.sensorGroups).map(e=>this.renderGroup(e)):$a("panels.sensors.dialogs.manage_groups.no_items",this.hass.language)}
          </div>
        </div>
        <mwc-button slot="secondaryAction" @click=${this.createGroupClick}>
          <ha-icon icon="hass:plus"></ha-icon>
          ${$a("panels.sensors.dialogs.manage_groups.actions.new_group",this.hass.language)}
        </mwc-button>
      </ha-dialog>
    `:L``}renderHeader(){return L`
    <span class="header_title">${$a("panels.sensors.dialogs.manage_groups.title",this.hass.language)}</span>
    <ha-icon-button
      .label=${this.hass.localize("ui.dialogs.generic.close")}
      icon="mdi:close"
      dialogAction="close"
      class="header_button"
    ></ha-icon-button>`}renderGroup(e){return L`
    <ha-card
      outlined
      @click=${a=>this.editGroupClick(a,e.group_id)}
    >
      <ha-icon icon="hass:folder-outline"></ha-icon>
      <div>
        <span class="name">${e.name}</span>
        <span class="description">${$a("panels.general.cards.areas.table.summary_sensors",this.hass.language,"{number}",String(e.entities.length))}
      </div>
      <ha-icon-button icon="hass:chevron-right">
      </ha-icon-button>
    </ha-card>
    `}createGroupClick(e){const a=e.target;ze(a,"show-dialog",{dialogTag:"create-sensor-group-dialog",dialogImport:()=>Promise.resolve().then((function(){return xt})),dialogParams:{}})}editGroupClick(e,a){const t=e.target;ze(t,"show-dialog",{dialogTag:"create-sensor-group-dialog",dialogImport:()=>Promise.resolve().then((function(){return xt})),dialogParams:{group_id:a}})}static get styles(){return o`
      ${Ue}

      div.wrapper {
        color: var(--primary-text-color);
      }
      div.container {
        display: flex;
        flex-wrap: wrap;
      }
      ha-card {
        width: 100%;
        text-align: center;
        margin: 4px;
        box-sizing: border-box;
        padding: 8px;
        color: var(--primary-text-color);
        font-size: 16px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
      }
      ha-card:hover {
        background: rgba(var(--rgb-secondary-text-color), 0.1);
      }
      ha-card ha-icon {
        --mdc-icon-size: 24px;
        display: flex;
        flex: 0 0 40px;
        margin: 0px 10px;
        align-items: center;
        color: var(--state-icon-color);
      }
      ha-card ha-icon-button {
        --mdc-icon-size: 24px;
        display: flex;
        flex: 0 0 40px;
        margin: 0px 10px;
        align-items: center;
      }
      ha-card div {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
      }
      ha-card span {
        display: flex;
        flex: 0 0 100%;
      }
      ha-card span.description {
        color: var(--secondary-text-color);
      }
      mwc-button ha-icon {
        padding-right: 11px;
      }

    `}};a([oe({attribute:!1})],jt.prototype,"hass",void 0),a([de()],jt.prototype,"_params",void 0),a([oe()],jt.prototype,"sensorGroups",void 0),a([oe()],jt.prototype,"sensors",void 0),jt=a([ne("manage-sensor-groups-dialog")],jt);var Ot=Object.freeze({__proto__:null,get ManageSensorGroupsDialog(){return jt}});let Ct=class extends(Xa(se)){constructor(){super(...arguments),this.showBypassModes=!1}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){var e;if(!this.hass)return;const a=await za(this.hass);this.areas=a;const t=await Oa(this.hass);this.sensorGroups=t;const i=await Aa(this.hass);this.data=Object.keys(i).includes(this.item)?i[this.item]:void 0,this.data&&!(null===(e=this.data)||void 0===e?void 0:e.area)&&1==Object.keys(a).length&&(this.data=Object.assign(Object.assign({},this.data),{area:Object.keys(this.areas)[0]}))}render(){if(!this.data)return L``;const e=this.hass.states[this.data.entity_id];return L`
      <ha-card>
        <div class="card-header">
          <div class="name">${$a("panels.sensors.cards.editor.title",this.hass.language)}</div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${$a("panels.sensors.cards.editor.description",this.hass.language,"{entity}",this.item)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.sensors.cards.editor.fields.name.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.sensors.cards.editor.fields.name.description",this.hass.language)}</span>

          <paper-input
            label="${$a("panels.sensors.cards.editor.fields.name.heading",this.hass.language)}"
            placeholder=${(null==e?void 0:e.attributes.friendly_name)||""}
            value=${this.data.name}
            @change=${e=>this.data={...this.data,name:e.target.value}}
          >
          </paper-input>
        </settings-row>

        ${Object.keys(this.areas).length>1?L`
        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.sensors.cards.editor.fields.area.description",this.hass.language)}</span>

          <alarmo-select
            .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
            value=${this.data.area}
            label=${$a("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
            @value-changed=${e=>this.data={...this.data,area:e.target.value}}
          </alarmo-select>
        </settings-row>`:""}

        <settings-row .narrow=${this.narrow} .large=${!0}>
          <span slot="heading">${$a("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.sensors.cards.editor.fields.device_type.description",this.hass.language)}</span>

          <alarmo-select
            .hass=${this.hass}
            .items=${a=this.hass,Object.entries(Pa).filter(([,e])=>e!=Pa.Other).map(([e,t])=>Object({value:t,name:$a(`panels.sensors.cards.editor.fields.device_type.choose.${t}.name`,a.language),description:$a(`panels.sensors.cards.editor.fields.device_type.choose.${t}.description`,a.language),icon:La[e]}))}
            label=${$a("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}
            clearable=${!0}
            icons=${!0}
            value=${this.data.type}
            @value-changed=${e=>this.setType(e.target.value||Pa.Other)}
          >
          </alarmo-select>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.sensors.cards.editor.fields.modes.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.sensors.cards.editor.fields.modes.description",this.hass.language)}</span>

          <div>
            ${this.modesByArea(this.data.area).map(e=>L`
                <mwc-button
                  class="${this.data.modes.includes(e)?"active":""}"
                  @click=${()=>{this.setMode(e)}}
                >
                  <ha-icon icon="${qa[Object.entries(Ie).find(([,a])=>a==e)[0]]}"></ha-icon>
                  ${$a("common.modes_short."+e,this.hass.language)}
                </mwc-button>
              `)}
          </div>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.sensors.cards.editor.fields.group.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.sensors.cards.editor.fields.group.description",this.hass.language)}</span>

          <div>
           ${Object.keys(this.sensorGroups).length?L`
            <alarmo-select
              .clearable=${!0}
              .items=${this.getSensorGroups()}
              value=${this.data.group}
              label="${$a("panels.sensors.cards.editor.fields.group.heading",this.hass.language)}"
              @value-changed=${e=>{this.data={...this.data,group:e.detail.value}}}
            >
            </alarmo-select>
            `:""}
            <mwc-button
              @click=${this.manageGroupsClick}
            >
              ${$a("panels.sensors.cards.editor.actions.setup_groups",this.hass.language)}
            </mwc-button>
          </div>

        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${$a("panels.sensors.cards.editor.actions.toggle_advanced",this.hass.language)}
        >
        ${!this.data.type||[Pa.Environmental,Pa.Other].includes(this.data.type)?L`
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.always_on.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.always_on.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.always_on}
              @change=${e=>this._SetData({always_on:e.target.checked})}
            >
            </ha-switch>
          </settings-row>
        `:""}

        ${!this.data.type||[Pa.Window,Pa.Door,Pa.Motion,Pa.Other].includes(this.data.type)?L`
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.use_exit_delay.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.use_exit_delay.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.use_exit_delay}
              ?disabled=${this.data.always_on}
              @change=${e=>this._SetData({use_exit_delay:e.target.checked})}
            >
            </ha-switch>
          </settings-row>

        ${this.data.type&&![Pa.Motion,Pa.Other].includes(this.data.type)||!this.data.use_exit_delay?"":L`
          <settings-row .narrow=${this.narrow} nested>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.allow_open.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.allow_open.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.allow_open}
              ?disabled=${this.data.always_on||this.data.arm_on_close}
              @change=${e=>this._SetData({allow_open:e.target.checked})}
            >
            </ha-switch>
          </settings-row>
        `}


        `:""}

        ${!this.data.type||[Pa.Window,Pa.Door,Pa.Motion,Pa.Other].includes(this.data.type)?L`
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.use_entry_delay.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.use_entry_delay.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.use_entry_delay}
              ?disabled=${this.data.always_on}
              @change=${e=>this._SetData({use_entry_delay:e.target.checked})}
            >
            </ha-switch>
          </settings-row>
        `:""}

        ${!this.data.type||[Pa.Door,Pa.Other].includes(this.data.type)?L`
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.arm_on_close.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.arm_on_close.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.arm_on_close}
              ?disabled=${this.data.always_on}
              @change=${e=>this._SetData({arm_on_close:e.target.checked})}
            >
            </ha-switch>
          </settings-row>
        `:""}

        ${!this.data.type||[Pa.Window,Pa.Door,Pa.Other].includes(this.data.type)?L`
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.auto_bypass.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.auto_bypass.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.auto_bypass}
              ?disabled=${this.data.always_on}
              @change=${e=>this._SetData({auto_bypass:e.target.checked})}
            >
            </ha-switch>
          </settings-row>

          ${this.data.auto_bypass?L`
            <settings-row .narrow=${this.narrow} nested>
              <span slot="heading">${$a("panels.sensors.cards.editor.fields.auto_bypass.modes",this.hass.language)}</span>
              <div>
              ${this.modesByArea(this.data.area).map(e=>L`
                <mwc-button
                  class="${this.data.auto_bypass_modes.includes(e)&&this.data.modes.includes(e)?"active":""}"
                  ?disabled=${!this.data.modes.includes(e)}
                  @click=${()=>{this.setBypassMode(e)}}
                >
                  <ha-icon icon="${qa[Object.entries(Ie).find(([,a])=>a==e)[0]]}"></ha-icon>
                  ${$a("common.modes_short."+e,this.hass.language)}
                </mwc-button>
                  `)}
              </div>
            </settings-row>
          `:""}
        `:""}

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${$a("panels.sensors.cards.editor.fields.trigger_unavailable.heading",this.hass.language)}</span>
            <span slot="description">${$a("panels.sensors.cards.editor.fields.trigger_unavailable.description",this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.trigger_unavailable}
              @change=${e=>this._SetData({trigger_unavailable:e.target.checked})}
            >
            </ha-switch>
          </settings-row>
        </collapsible-section>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          <mwc-button class="warning" @click=${this.deleteClick}>
            ${$a("panels.sensors.cards.editor.actions.remove",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `;var a}modesByArea(e){const a=Object.keys(this.areas).reduce((e,a)=>Object.assign(e,{[a]:Object.entries(this.areas[a].modes).filter(([,e])=>e.enabled).map(([e])=>e)}),{});return e?a[e]:Object.values(a).reduce((e,a)=>e.filter(e=>a.includes(e)))}_SetData(e){if(this.data)for(const[a,t]of Object.entries(e))switch(a){case"always_on":this.data=Object.assign(Object.assign({},this.data),{always_on:1==t}),t&&(this.data=Object.assign(Object.assign({},this.data),{arm_on_close:!1,use_exit_delay:!1,use_entry_delay:!1,allow_open:!1,auto_bypass:!1}));break;case"use_entry_delay":this.data=Object.assign(Object.assign({},this.data),{use_entry_delay:1==t});break;case"use_exit_delay":this.data=Object.assign(Object.assign({},this.data),{use_exit_delay:1==t}),t&&(this.data=Object.assign(Object.assign({},this.data),{allow_open:!1}));break;case"arm_on_close":this.data=Object.assign(Object.assign({},this.data),{arm_on_close:1==t}),t&&(this.data=Object.assign(Object.assign({},this.data),{always_on:!1,allow_open:!1}));break;case"allow_open":this.data=Object.assign(Object.assign({},this.data),{allow_open:1==t}),t&&(this.data=Object.assign(Object.assign({},this.data),{arm_on_close:!1,always_on:!1,use_exit_delay:!0}));break;case"auto_bypass":this.data=Object.assign(Object.assign({},this.data),{auto_bypass:1==t}),t&&(this.data=Object.assign(Object.assign({},this.data),{always_on:!1}));break;case"trigger_unavailable":this.data=Object.assign(Object.assign({},this.data),{trigger_unavailable:1==t})}}setMode(e){this.data&&(this.data=Object.assign(Object.assign({},this.data),{modes:this.data.modes.includes(e)?Ga(this.data.modes,e):Fa(this.data.modes.concat([e]))}))}setBypassMode(e){this.data&&(this.data=Object.assign(Object.assign({},this.data),{auto_bypass_modes:this.data.auto_bypass_modes.includes(e)?Ga(this.data.auto_bypass_modes,e):Fa(this.data.auto_bypass_modes.concat([e]))}))}setType(e){if(!this.data)return;const a=e!=Pa.Other?yt(this.modesByArea(this.data.area))[e]:{};this.data=Object.assign(Object.assign(Object.assign({},this.data),{type:e}),a)}deleteClick(e){var a,t;(a=this.hass,t=this.item,a.callApi("POST","alarmo/sensors",{entity_id:t,remove:!0})).catch(a=>Wa(a,e)).then(()=>{this.cancelClick()})}saveClick(e){if(!this.data)return;const a=[];this.data=Object.assign(Object.assign({},this.data),{auto_bypass_modes:this.data.auto_bypass_modes.filter(e=>this.data.modes.includes(e))}),this.data.area||a.push($a("panels.sensors.cards.editor.errors.no_area",this.hass.language)),this.data.modes.length||this.data.always_on||a.push($a("panels.sensors.cards.editor.errors.no_modes",this.hass.language)),this.data.auto_bypass&&!this.data.auto_bypass_modes.length&&a.push($a("panels.sensors.cards.editor.errors.no_auto_bypass_modes",this.hass.language)),a.length?Qa(e,L`
          ${$a("panels.sensors.cards.editor.errors.description",this.hass.language)}
          <ul>
            ${a.map(e=>L`<li>${e}</li>`)}
          </ul>
        `):Sa(this.hass,Object.assign({},this.data)).catch(a=>Wa(a,e)).then(()=>{this.cancelClick()})}cancelClick(){De(0,"/alarmo/sensors",!0)}manageGroupsClick(e){const a=e.target;ze(a,"show-dialog",{dialogTag:"manage-sensor-groups-dialog",dialogImport:()=>Promise.resolve().then((function(){return Ot})),dialogParams:{}})}getSensorGroups(){return Object.keys(this.sensorGroups).map(e=>Object({value:e,name:this.sensorGroups[e].name}))}};Ct.styles=Re,a([oe()],Ct.prototype,"hass",void 0),a([oe()],Ct.prototype,"narrow",void 0),a([oe()],Ct.prototype,"item",void 0),a([oe()],Ct.prototype,"data",void 0),a([oe()],Ct.prototype,"showBypassModes",void 0),Ct=a([ne("sensor-editor-card")],Ct);let St=class extends(Xa(se)){constructor(){super(...arguments),this.areas={},this.sensors={},this.areaFilterOptions=[]}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await za(this.hass),this.sensors=await Aa(this.hass),this.areaFilterOptions=Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,count:Object.values(this.sensors).filter(a=>a.area==e.area_id).length})).sort(Ja),Object.values(this.sensors).filter(e=>!e.area).length&&(this.areaFilterOptions=[{value:"no_area",name:$a("panels.sensors.cards.sensors.filter.no_area",this.hass.language),count:Object.values(this.sensors).filter(e=>!e.area).length},...this.areaFilterOptions]))}async firstUpdated(){this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.selectedArea=this.path[1])}render(){return this.hass?L`
      <ha-card header="${$a("panels.sensors.title",this.hass.language)}">
        <div class="card-content">
          ${$a("panels.sensors.cards.sensors.description",this.hass.language)}
        </div>

        ${this.areaFilterOptions.length>1?L`
            <div class="table-filter" ?narrow=${this.narrow}>
            <span class="header">${$a("panels.sensors.cards.sensors.filter.label",this.hass.language)}:</span>
            <alarmo-chips
              .items=${this.areaFilterOptions}
              value=${this.selectedArea}
              selectable
              @value-changed=${e=>this.selectedArea=e.target.value}
            >
            </alarmo-chips>
            </div>
        `:""}

        <alarmo-table
          ?selectable=${!0}
          .columns=${this.tableColumns()}
          .data=${this.renderTableData()}
          @row-click=${e=>{De(0,"/alarmo/sensors/edit/"+String(e.detail.id),!0)}}
        >
          ${$a("panels.sensors.cards.sensors.no_items",this.hass.language)}
        </alarmo-table>
      </ha-card>
    `:L``}tableColumns(){return{icon:{width:"40px"},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"60%",grow:!0,text:!0},modes:{title:$a("panels.sensors.cards.sensors.table.arm_modes",this.hass.language),width:"25%",hide:this.narrow,text:!0},enabled:{title:$a("panels.actions.cards.notifications.table.enabled",this.hass.language),width:"68px",align:"center"}}}renderTableData(){let e=Object.keys(this.sensors).map(e=>{const a=this.hass.states[e];return{id:e,name:Ha(a),icon:Ua(a)}});return e.sort(Ja),e=e.filter(e=>!this.selectedArea||!this.areaFilterOptions.find(e=>e.value==this.selectedArea)||this.sensors[e.id].area==this.selectedArea||"no_area"===this.selectedArea&&!this.sensors[e.id].area),e.map(e=>this.renderTableDataRow(e))}renderTableDataRow(e){const a=Object.entries(Pa).find(([,a])=>a==this.sensors[e.id].type)[0],t=this.hass.states[e.id];return{icon:L`
        <paper-tooltip animation-delay="0">
          ${t?$a(`panels.sensors.cards.editor.fields.device_type.choose.${Pa[a]}.name`,this.hass.language):this.hass.localize("state_badge.default.entity_not_found")}
        </paper-tooltip>
        <ha-icon icon="${t?La[a]:"hass:help-circle-outline"}"> </ha-icon>
      `,name:L`
        ${t&&this.sensors[e.id].name||Ia(e.name)}
        <span class="secondary">${e.id}</span>
      `,id:e.id,modes:L`
        ${this.sensors[e.id].always_on?$a("panels.sensors.cards.sensors.table.always_on",this.hass.language):Object.values(Ie).filter(a=>this.sensors[e.id].modes.includes(a)).map(e=>$a("common.modes_short."+e,this.hass.language)).join(", ")}
      `,enabled:L`
        <ha-switch
          @click=${e=>{e.stopPropagation()}}
          ?checked=${this.sensors[e.id].enabled}
          @change=${a=>this.toggleEnabled(a,e.id)}
        >
        </ha-switch>
      `}}toggleEnabled(e,a){const t=e.target.checked;Sa(this.hass,{entity_id:a,enabled:t}).catch(a=>Wa(a,e)).then()}};St.styles=Re,a([oe()],St.prototype,"hass",void 0),a([oe()],St.prototype,"narrow",void 0),a([oe()],St.prototype,"areas",void 0),a([oe()],St.prototype,"sensors",void 0),a([oe()],St.prototype,"selectedArea",void 0),a([oe()],St.prototype,"areaFilterOptions",void 0),a([oe()],St.prototype,"path",void 0),St=a([ne("sensors-overview-card")],St);let Mt=class extends(Xa(se)){constructor(){super(...arguments),this.showAllSensorEntities=!1,this.addSelection=[],this.areas={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await za(this.hass))}async firstUpdated(){this.areas=await za(this.hass),this.sensors=await Aa(this.hass)}render(){const e={checkbox:{width:"48px"},icon:{width:"40px"},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"40%",grow:!0,text:!0},type:{title:$a("panels.sensors.cards.add_sensors.table.type",this.hass.language),width:"40%",hide:this.narrow,text:!0}},a=((e,a,t=!1)=>{let i=Object.values(e.states).filter(e=>ft(e,t)).filter(e=>!a.includes(e.entity_id)).map(e=>Object({id:e.entity_id,name:Ha(e),icon:Ua(e)}));return i.sort(Ja),i})(this.hass,Object.keys(this.sensors),this.showAllSensorEntities).map(e=>({checkbox:L`
            <ha-checkbox
              @change=${a=>this.toggleSelect(a,e.id)}
              ?checked=${this.addSelection.includes(e.id)}
            >
            </ha-checkbox>
          `,icon:L`
            <state-badge .hass=${this.hass} .stateObj=${this.hass.states[e.id]}></state-badge>
          `,name:L`
            ${Ia(e.name)}
            <span class="secondary">${e.id}</span>
          `,type:bt(this.hass.states[e.id])?$a(`panels.sensors.cards.editor.fields.device_type.choose.${bt(this.hass.states[e.id])}.name`,this.hass.language):this.hass.localize("state.default.unknown")}));return L`
    <ha-card header="${$a("panels.sensors.cards.add_sensors.title",this.hass.language)}">
      <div class="card-content">
        ${$a("panels.sensors.cards.add_sensors.description",this.hass.language)}
      </div>

      <div style="display: flex; justify-content: flex-end; padding: 8px 16px">
        <ha-switch
          @change=${e=>this.showAllSensorEntities=e.target.checked}
          style="padding: 0px 8px"
        >
        </ha-switch>
        ${$a("panels.sensors.cards.add_sensors.actions.show_all",this.hass.language)}
      </div>

      <alarmo-table .columns=${e} .data=${a}>
        ${$a("panels.sensors.cards.add_sensors.no_items",this.hass.language)}
      </alarmo-table>

      <div class="card-actions">
        <mwc-button @click=${this.addSelected} ?disabled=${0==this.addSelection.length}>
          ${$a("panels.sensors.cards.add_sensors.actions.add_to_alarm",this.hass.language)}
        </mwc-button>
      </div>
    </ha-card>
  `}toggleSelect(e,a){const t=e.target.checked;this.addSelection=t&&!this.addSelection.includes(a)?[...this.addSelection,a]:t?this.addSelection:this.addSelection.filter(e=>e!=a)}addSelected(e){if(!this.hass)return;const a=Object.values(this.areas).map(e=>Object.entries(e.modes).filter(([,e])=>e.enabled).map(([e])=>e)).reduce((e,a)=>e.filter(e=>a.includes(e)));this.addSelection.map(e=>function(e,a){if(!e)return null;const t=Se(e.entity_id);let i={entity_id:e.entity_id,name:e.attributes.friendly_name||e.entity_id,modes:[],use_entry_delay:!0,use_exit_delay:!0,arm_on_close:!1,allow_open:!1,always_on:!1,auto_bypass:!1,auto_bypass_modes:[],trigger_unavailable:!1,type:Pa.Other,enabled:!0};if("binary_sensor"==t){const t=bt(e);t&&(i=Object.assign(Object.assign(Object.assign({},i),{type:t}),yt(a)[t]))}return i}(this.hass.states[e],a)).map(e=>1==Object.keys(this.areas).length?Object.assign(e,{area:Object.keys(this.areas)[0]}):e).filter(e=>e).forEach(a=>{Sa(this.hass,a).catch(a=>Wa(a,e)).then()}),this.addSelection=[]}};Mt.styles=Re,a([oe()],Mt.prototype,"hass",void 0),a([oe()],Mt.prototype,"narrow",void 0),a([oe()],Mt.prototype,"showAllSensorEntities",void 0),a([oe()],Mt.prototype,"addSelection",void 0),a([oe()],Mt.prototype,"areas",void 0),a([oe()],Mt.prototype,"sensors",void 0),Mt=a([ne("add-sensors-card")],Mt);let Tt=class extends se{firstUpdated(){(async()=>{await Le()})(),this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.selectedArea=this.path[1])}render(){return this.hass?this.path&&2==this.path.length&&"edit"==this.path[0]?L`
        <sensor-editor-card .hass=${this.hass} .narrow=${this.narrow} .item=${this.path[1]}> </sensor-editor-card>
      `:L`
        <sensors-overview-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .selectedArea=${this.selectedArea}
        >
        </sensors-overview-card>
        <add-sensors-card
          .hass=${this.hass}
          .narrow=${this.narrow}
        >
        </add-sensors-card>
      `:L``}};a([oe()],Tt.prototype,"hass",void 0),a([oe()],Tt.prototype,"narrow",void 0),a([oe()],Tt.prototype,"path",void 0),a([oe()],Tt.prototype,"selectedArea",void 0),Tt=a([ne("alarm-view-sensors")],Tt);let zt=class extends se{constructor(){super(...arguments),this.data={is_admin:!1,can_arm:!0,can_disarm:!0,is_override_code:!1},this.repeatCode="",this.areas={}}async firstUpdated(){if(this.users=await xa(this.hass),this.areas=await za(this.hass),this.item){const e=this.users[this.item];this.data=Ya(e,"code","code_format","code_length")}this.data=Object.assign(Object.assign({},this.data),{area_limit:(this.data.area_limit||[]).filter(e=>Object.keys(this.areas).includes(e))}),(this.data.area_limit||[]).length||(this.data=Object.assign(Object.assign({},this.data),{area_limit:Object.keys(this.areas)}))}render(){var e;return this.users?L`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.item?$a("panels.codes.cards.edit_user.title",this.hass.language):$a("panels.codes.cards.new_user.title",this.hass.language)}
          </div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${this.item?$a("panels.codes.cards.edit_user.description",this.hass.language,"{name}",this.users[this.item].name):$a("panels.codes.cards.new_user.description",this.hass.language)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.codes.cards.new_user.fields.name.description",this.hass.language)}</span>

          <paper-input
            label="${$a("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}"
            placeholder=""
            value=${this.data.name}
            @change=${e=>this.data={...this.data,name:e.target.value}}
          >
          </paper-input>
        </settings-row>

        ${this.item?L`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">${$a("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}</span>
                <span slot="description">${$a("panels.codes.cards.edit_user.fields.old_code.description",this.hass.language)}</span>

                <paper-input
                  label="${$a("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.old_code||""}
                  @change=${e=>this.data={...this.data,old_code:String(e.target.value).trim()}}
                >
                </paper-input>
              </settings-row>
            `:""}
        ${this.item&&!(null===(e=this.data.old_code)||void 0===e?void 0:e.length)?"":L`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">${$a("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}</span>
                <span slot="description">${$a("panels.codes.cards.new_user.fields.code.description",this.hass.language)}</span>

                <paper-input
                  label="${$a("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.code}
                  @change=${e=>this.data={...this.data,code:String(e.target.value).trim()}}
                >
                </paper-input>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading">${$a("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}</span>
                <span slot="description">${$a("panels.codes.cards.new_user.fields.confirm_code.description",this.hass.language)}</span>

                <paper-input
                  label="${$a("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.repeatCode||""}
                  @change=${e=>this.repeatCode=String(e.target.value).trim()}
                >
                </paper-input>
              </settings-row>
            `}

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.codes.cards.new_user.fields.is_admin.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.codes.cards.new_user.fields.is_admin.description",this.hass.language)}</span>

          <ha-switch
            ?checked=${this.data.is_admin}
            @change=${e=>this.data={...this.data,is_admin:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.codes.cards.new_user.fields.can_arm.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.codes.cards.new_user.fields.can_arm.description",this.hass.language)}</span>

          <ha-switch
            ?checked=${this.data.can_arm||this.data.is_admin}
            ?disabled=${this.data.is_admin}
            @change=${e=>this.data={...this.data,can_arm:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.codes.cards.new_user.fields.can_disarm.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.codes.cards.new_user.fields.can_disarm.description",this.hass.language)}</span>

          <ha-switch
            ?checked=${this.data.can_disarm||this.data.is_admin}
            ?disabled=${this.data.is_admin}
            @change=${e=>this.data={...this.data,can_disarm:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        ${this.getAreaOptions().length>=2?L`
        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.codes.cards.new_user.fields.area_limit.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.codes.cards.new_user.fields.area_limit.description",this.hass.language)}</span>

          <div class="checkbox-list">
            ${this.getAreaOptions().map(e=>{var a;const t=(this.data.area_limit||[]).includes(e.value)||!(null===(a=this.data.area_limit)||void 0===a?void 0:a.length)||this.data.is_admin;return L`
              <div>
                <ha-checkbox
                  @change=${a=>this.toggleSelectArea(e.value,a.target.checked)}
                  ?disabled=${this.data.is_admin||t&&(this.data.area_limit||[]).length<=1}
                  ?checked=${t}
                >
                </ha-checkbox>
                <span
                  @click=${()=>this.toggleSelectArea(e.value,!t)}
                >
                  ${e.name}
                </span>
              </div>
            `})}
          </div>
        </settings-row>
        `:""}

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${$a("panels.codes.cards.new_user.fields.is_override_code.heading",this.hass.language)}</span>
          <span slot="description">${$a("panels.codes.cards.new_user.fields.is_override_code.description",this.hass.language)}</span>

          <ha-switch
            ?checked=${this.data.is_override_code}
            @change=${e=>this.data={...this.data,is_override_code:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          ${this.item?L`
                <mwc-button class="warning" @click=${this.deleteClick}>
                  ${this.hass.localize("ui.common.delete")}
                </mwc-button>
              `:""}
        </div>
      </ha-card>
    `:L``}getAreaOptions(){let e=Object.keys(this.areas||{}).map(e=>Object({value:e,name:this.areas[e].name}));return e.sort(Ja),e}toggleSelectArea(e,a){if(this.data.is_admin||(this.data.area_limit||[]).length<=1&&!a)return;let t=this.data.area_limit||[];t=a?t.includes(e)?t:[...t,e]:t.includes(e)?t.filter(a=>a!=e):t,this.data=Object.assign(Object.assign({},this.data),{area_limit:t})}deleteClick(e){var a,t;this.item&&(a=this.hass,t=this.item,a.callApi("POST","alarmo/users",{user_id:t,remove:!0})).catch(a=>Wa(a,e)).then(()=>{this.cancelClick()})}saveClick(e){var a,t,i;let s=Object.assign({},this.data);var n,r;(null===(a=s.name)||void 0===a?void 0:a.length)?(null===(t=s.code)||void 0===t?void 0:t.length)&&!(s.code.length<4)||this.item&&!(null===(i=s.old_code)||void 0===i?void 0:i.length)?(s.code||"").length&&s.code!==this.repeatCode?(Qa(e,$a("panels.codes.cards.new_user.errors.code_mismatch",this.hass.language)),this.data=Ya(this.data,"code"),this.repeatCode=""):(s.is_admin&&(s=Object.assign(Object.assign({},s),{can_arm:!0,can_disarm:!0,area_limit:[]})),this.item&&(s.old_code||"").length<4&&Ya(s,"old_code","code"),this.getAreaOptions().length&&!this.getAreaOptions().every(e=>(this.data.area_limit||[]).includes(e.value))||(s=Object.assign(Object.assign({},s),{area_limit:[]})),(n=this.hass,r=s,n.callApi("POST","alarmo/users",r)).catch(a=>Wa(a,e)).then(()=>{this.cancelClick()})):Qa(e,$a("panels.codes.cards.new_user.errors.no_code",this.hass.language)):Qa(e,$a("panels.codes.cards.new_user.errors.no_name",this.hass.language))}cancelClick(){De(0,"/alarmo/codes",!0)}static get styles(){return o`
      ${Re}
      div.checkbox-list {
        display: flex;
        flex-direction: row;
      }
      div.checkbox-list div {
        display: flex;
        align-items: center;
      }
      div.checkbox-list div span {
        cursor: pointer;
      }
    `}};a([oe()],zt.prototype,"hass",void 0),a([oe()],zt.prototype,"narrow",void 0),a([oe()],zt.prototype,"item",void 0),a([oe()],zt.prototype,"data",void 0),a([oe()],zt.prototype,"repeatCode",void 0),zt=a([ne("user-editor-card")],zt);let Et=class extends(Xa(se)){constructor(){super(...arguments),this.users={},this.code_arm_required=!1,this.code_disarm_required=!1,this.code_format="number"}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await ka(this.hass);this.config=e,this.code_arm_required=e.code_arm_required,this.code_disarm_required=e.code_disarm_required,this.code_format=e.code_format;const a=await xa(this.hass);this.users=a}render(){return this.hass?this.path&&"new_user"==this.path[0]?L`
        <user-editor-card .hass=${this.hass} .narrow=${this.narrow}> </user-editor-card>
      `:this.path&&2==this.path.length&&"edit_user"==this.path[0]?L`
        <user-editor-card .hass=${this.hass} .narrow=${this.narrow} item=${this.path[1]}> </user-editor-card>
      `:L`
        <ha-card header="${$a("panels.codes.title",this.hass.language)}">
          <div class="card-content">
            ${$a("panels.codes.cards.codes.description",this.hass.language)}
          </div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${$a("panels.codes.cards.codes.fields.code_arm_required.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${$a("panels.codes.cards.codes.fields.code_arm_required.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${this.code_arm_required}
              @change=${e=>{this.code_arm_required=e.target.checked}}
            >
            </ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${$a("panels.codes.cards.codes.fields.code_disarm_required.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${$a("panels.codes.cards.codes.fields.code_disarm_required.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${this.code_disarm_required}
              @change=${e=>{this.code_disarm_required=e.target.checked}}
            >
            </ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${$a("panels.codes.cards.codes.fields.code_format.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${$a("panels.codes.cards.codes.fields.code_format.description",this.hass.language)}</span
            >
            <mwc-button
              class="${"number"==this.code_format?"active":""} ${this.code_arm_required||this.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.code_format="number"}}
              ?disabled=${!this.code_arm_required&&!this.code_disarm_required}
              >${$a("panels.codes.cards.codes.fields.code_format.code_format_number",this.hass.language)}</mwc-button
            >
            <mwc-button
              class="${"text"==this.code_format?"active":""} ${this.code_arm_required||this.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.code_format="text"}}
              ?disabled=${!this.code_arm_required&&!this.code_disarm_required}
            >
              ${$a("panels.codes.cards.codes.fields.code_format.code_format_text",this.hass.language)}</mwc-button
            >
          </settings-row>

          <div class="card-actions">
            <mwc-button @click=${this.saveClick}>
              ${this.hass.localize("ui.common.save")}
            </mwc-button>
          </div>
        </ha-card>

        ${this.usersPanel()}
      `:L``}usersPanel(){if(!this.hass)return L``;const e=Object.values(this.users);e.sort(Ja);const a={icon:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},remarks:{title:$a("panels.codes.cards.user_management.table.remarks",this.hass.language),width:"40%",hide:this.narrow,text:!0}},t=e.map(e=>({id:e.user_id,icon:L`
          <ha-icon icon="mdi:account-outline"></ha-icon>
        `,name:Ia(e.name),remarks:e.is_admin?$a("panels.codes.cards.user_management.table.administrator",this.hass.language):""}));return L`
      <ha-card header="${$a("panels.codes.cards.user_management.title",this.hass.language)}">
        <div class="card-content">
          ${$a("panels.codes.cards.user_management.description",this.hass.language)}
        </div>

        <alarmo-table
          ?selectable=${!0}
          .columns=${a}
          .data=${t}
          @row-click=${e=>{const a=String(e.detail.id);De(0,"/alarmo/codes/edit_user/"+a,!0)}}
        >
          ${$a("panels.codes.cards.user_management.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addUserClick}>
            ${$a("panels.codes.cards.user_management.actions.new_user",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addUserClick(){De(0,"/alarmo/codes/new_user",!0)}saveClick(e){this.hass&&Ca(this.hass,{code_arm_required:this.code_arm_required,code_disarm_required:this.code_disarm_required,code_format:this.code_format}).catch(a=>Wa(a,e)).then()}};Et.styles=Re,a([oe()],Et.prototype,"narrow",void 0),a([oe()],Et.prototype,"path",void 0),a([oe()],Et.prototype,"config",void 0),a([oe()],Et.prototype,"users",void 0),a([oe()],Et.prototype,"code_arm_required",void 0),a([oe()],Et.prototype,"code_disarm_required",void 0),a([oe()],Et.prototype,"code_format",void 0),Et=a([ne("alarm-view-codes")],Et);const qt=(e,a)=>{switch(e){case Ie.ArmedAway:return{value:Ie.ArmedAway,name:$a("common.modes_long.armed_away",a.language),icon:qa.ArmedAway};case Ie.ArmedHome:return{value:Ie.ArmedHome,name:$a("common.modes_long.armed_home",a.language),icon:qa.ArmedHome};case Ie.ArmedNight:return{value:Ie.ArmedNight,name:$a("common.modes_long.armed_night",a.language),icon:qa.ArmedNight};case Ie.ArmedCustom:return{value:Ie.ArmedCustom,name:$a("common.modes_long.armed_custom_bypass",a.language),icon:qa.ArmedCustom}}},Dt=(e,a)=>{switch(e){case He.Armed:return{value:He.Armed,name:$a("panels.actions.cards.new_notification.fields.event.choose.armed.name",a.language),description:$a("panels.actions.cards.new_notification.fields.event.choose.armed.description",a.language),icon:"hass:shield-check-outline"};case He.Disarmed:return{value:He.Disarmed,name:$a("panels.actions.cards.new_notification.fields.event.choose.disarmed.name",a.language),description:$a("panels.actions.cards.new_notification.fields.event.choose.disarmed.description",a.language),icon:"hass:shield-off-outline"};case He.Triggered:return{value:He.Triggered,name:$a("panels.actions.cards.new_notification.fields.event.choose.triggered.name",a.language),description:$a("panels.actions.cards.new_notification.fields.event.choose.triggered.description",a.language),icon:"hass:bell-alert-outline"};case He.ArmFailure:return{value:He.ArmFailure,name:$a("panels.actions.cards.new_notification.fields.event.choose.arm_failure.name",a.language),description:$a("panels.actions.cards.new_notification.fields.event.choose.arm_failure.description",a.language),icon:"hass:alert-outline"};case He.Arming:return{value:He.Arming,name:$a("panels.actions.cards.new_notification.fields.event.choose.arming.name",a.language),description:$a("panels.actions.cards.new_notification.fields.event.choose.arming.description",a.language),icon:"hass:home-export-outline"};case He.Pending:return{value:He.Pending,name:$a("panels.actions.cards.new_notification.fields.event.choose.pending.name",a.language),description:$a("panels.actions.cards.new_notification.fields.event.choose.pending.description",a.language),icon:"hass:home-import-outline"}}},Nt=(e,a,t)=>0==e?{name:t.master.name,value:0}:Object.keys(a).includes(String(e))?{name:a[e].name,value:e}:{name:String(e),value:e},Pt=(e,...a)=>{let t=a.map(a=>{if(!a)return null;const t=Se(a),i=Me(a);let s={value:a,name:i.replace(/_/g," ").split(" ").map(e=>e.substring(0,1).toUpperCase()+e.substring(1)).join(" "),icon:"hass:home",description:a};switch(t){case"notify":const a=e.states["device_tracker."+i.replace("mobile_app_","")];s=a?Object.assign(Object.assign({},s),{name:a.attributes.friendly_name||Me(a.entity_id),icon:a.attributes.icon||"hass:cellphone-text"}):Object.assign(Object.assign({},s),{icon:"hass:comment-alert"});break;case"tts":s=Object.assign(Object.assign({},s),{icon:"hass:microphone"})}return s}).filter(Va);return t.sort(Ja),t},Lt=(e,a)=>{let t=[];const i=Object.keys(e).filter(a=>Object.values(e[a].modes).some(e=>e.enabled));return a.master.enabled&&i.length>1&&(t=[...t,0]),t=[...t,...i],t},Rt=(e,a)=>{const t=e=>Object.keys(e.modes).filter(a=>e.modes[a].enabled);if(Va(e)&&Object.keys(a).includes(String(e)))return t(a[e]);{const e=Object.keys(a).map(e=>t(a[e]));return e[0].filter(a=>e.every(e=>e.includes(a)))}},Ut=(e,a)=>e.map(e=>({value:e,name:e in a.states?a.states[e].attributes.friendly_name||Me(e):e,icon:e in a.states?a.states[e].attributes.icon||qe(Se(e)):void 0,description:e})),It=e=>[...Object.keys(e.services.notify).map(e=>"notify."+e)],Ht=(e,a)=>{let t=[...Object.keys(e.states).filter(a=>Qt(a,e).length)];return a&&a.length&&(t=[...t,...a.filter(e=>!t.includes(e))]),t.sort(Ja),t},Ft=e=>"string"==typeof e&&e.trim().length,Gt=(e,a)=>Ft(e)&&a.services[Se(e)]&&a.services[Se(e)][Me(e)],Yt=(e,a)=>Ft(e)&&a.states[e],Vt=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),Bt=e=>"string"==typeof e,Qt=(e,a)=>{if(Array.isArray(e)){let t=e.map(e=>Qt(e,a));return Wt(...t)}if(!Va(e))return[];const t=Se(e);switch(t){case"light":case"switch":case"input_boolean":case"siren":return[t+".turn_on",t+".turn_off"];case"script":return[e];case"lock":return["lock.lock","lock.unlock"];case"group":let i=e in a.states?a.states[e]:void 0;const s=(null==i?void 0:i.attributes.entity_id)||[];return Qt(s,a);default:return[]}},Wt=(...e)=>{if(!e.length||!e.every(e=>e.length))return[];if(1==e.length&&e[0].length>1&&Fa(e[0].map(Se)).length>1)return Wt(...e[0].map(e=>Array(e)));let a=[...e[0]];return e.forEach(e=>{a=a.map(a=>e.includes(a)?a:"script"==Se(a)&&e.map(Se).includes("script")?"script.script":e.map(Me).includes(Me(a))?"homeassistant."+Me(a):null).filter(Va)}),a};let Kt=class extends se{constructor(){super(...arguments),this.items=[],this.value=[],this.label="",this.invalid=!1}shouldUpdate(e){return e.get("items")&&(Ba(this.items,e.get("items"))||this.firstUpdated()),!0}firstUpdated(){this.value.some(e=>!this.items.map(e=>e.value).includes(e))&&(this.value=this.value.filter(e=>this.items.map(e=>e.value).includes(e)),ze(this,"value-changed",{value:this.value}))}render(){return L`
    <div class="chip-set">
      ${this.value.length?this.value.map(e=>this.items.find(a=>a.value==e)).filter(Va).map(e=>L`
          <div class="chip">
            <ha-icon class="icon" icon=${e.icon}>
            </ha-icon>
            <span class="label">
              ${e.name}
            </span>            
            <ha-icon class="button" icon="hass:close" @click=${()=>this._removeClick(e.value)}>
            </ha-icon>
            </mwc-icon-button>
          </div>
        `):""}
          <alarmo-select
            .hass=${this.hass}
            .items=${this.items.filter(e=>!this.value.includes(e.value))}
            ?disabled=${this.value.length==this.items.length}
            label=${this.label}
            icons=${!0}
            @value-changed=${this._addClick}
            ?invalid=${this.invalid&&this.value.length!=this.items.length}
          >
          </alarmo-select>
    </div>
    `}_removeClick(e){this.value=this.value.filter(a=>a!==e),ze(this,"value-changed",{value:this.value})}_addClick(e){e.stopPropagation();const a=e.target,t=a.value;this.value.includes(t)||(this.value=[...this.value,t]),a.value="",ze(this,"value-changed",{value:[...this.value]})}static get styles(){return o`
      div.chip {
        height: 32px;
        border-radius: 16px;
        border: 2px solid rgb(168, 232, 251);
        line-height: 1.25rem;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0px 12px;
        display: inline-flex;  
        align-items: center;
        box-sizing: border-box;
        margin: 1px 0px;
      }
      .icon {
        vertical-align: middle;
        outline: none;
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 6px;
        color: rgba(0, 0, 0, 0.54);
        background: rgb(168, 232, 251);
        --mdc-icon-size: 20px;
        margin-left: -14px !important;
      }
      .label {
        margin: 0px 4px;
      }
      .button {
        cursor: pointer;
        background: var(--secondary-text-color);
        border-radius: 50%;
        --mdc-icon-size: 14px;
        color: var(--card-background-color);
        width: 16px;
        height: 16px;
        padding: 1px;
        box-sizing: border-box;
        display: inline-flex;  
        align-items: center;
        margin-right: -6px !important;
      }
    `}};var Zt;a([oe()],Kt.prototype,"hass",void 0),a([oe()],Kt.prototype,"items",void 0),a([oe({type:Array})],Kt.prototype,"value",void 0),a([oe()],Kt.prototype,"label",void 0),a([oe({type:Boolean})],Kt.prototype,"invalid",void 0),Kt=a([ne("alarmo-selector")],Kt),function(e){e[e.Yaml=0]="Yaml",e[e.UI=1]="UI"}(Zt||(Zt={}));let Jt=class extends se{constructor(){super(...arguments),this.config={type:Ra.Notification,triggers:[{}],actions:[{}]},this.viewMode=Zt.UI,this.errors={}}async firstUpdated(){if(this.areas=await za(this.hass),this.alarmoConfig=await ka(this.hass),this.item){let e=this.item.actions.map(e=>Ya(e,"entity_id"));this.config=Object.assign(Object.assign({},this.item),{actions:[e[0],...e.slice(1)]}),this.config.triggers.length>1&&(this.config=Object.assign(Object.assign({},this.config),{triggers:[this.config.triggers[0]]}));let a=this.config.triggers[0].area;Va(a)&&!Lt(this.areas,this.alarmoConfig).includes(a)?a=void 0:null===a&&(a=0),this._setArea(new CustomEvent("value-changed",{detail:{value:a}}))}if(!Va(this.config.triggers[0].area)){const e=Lt(this.areas,this.alarmoConfig);1==e.length?this._setArea(new CustomEvent("value-changed",{detail:{value:e[0]}})):e.includes(0)&&this._setArea(new CustomEvent("value-changed",{detail:{value:0}}))}}render(){var e,a,t;return this.hass&&this.areas&&this.alarmoConfig?L`
      <div class="heading">
        <ha-icon-button icon="hass:close" @click=${this._cancelClick} class="icon"></ha-icon-button>
        <div class="header">${$a("panels.actions.cards.new_notification.title",this.hass.language)}</div>
        <div class="description">${$a("panels.actions.cards.new_notification.description",this.hass.language)}</div>
      </div>
      <div class="section-header">${$a("panels.actions.cards.new_notification.trigger",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.event.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.event.description",this.hass.language)}
            </span>

            <alarmo-select
              .hass=${this.hass}
              .items=${Object.values(He).map(e=>Dt(e,this.hass))}
              label=${$a("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.triggers[0].event}
              @value-changed=${this._setEvent}
              ?invalid=${this.errors.event}
            ></alarmo-select>
          </settings-row>

          ${Object.keys(this.areas).length>1?L`
          <settings-row .narrow=${this.narrow} .large=${!0}>
            <span slot="heading">
              ${$a("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_action.fields.area.description",this.hass.language)}
            </span>
            
            <alarmo-select
              .hass=${this.hass}
              .items=${Lt(this.areas,this.alarmoConfig).map(e=>Nt(e,this.areas,this.alarmoConfig))}
              clearable=${!0}
              label=${$a("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
              .value=${this.config.triggers[0].area}
              @value-changed=${this._setArea}
              ?invalid=${this.errors.area}
            ></alarmo-select>
          </settings-row>
          `:""}

          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}
            </span>

            <alarmo-selector
              .hass=${this.hass}
              .items=${Rt(this.config.triggers[0].area,this.areas).map(e=>qt(e,this.hass))}
              label=${$a("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
              .value=${this.config.triggers[0].modes||[]}
              @value-changed=${this._setModes}
              ?invalid=${this.errors.modes}
            ></alarmo-selector>
          </settings-row>
        </div>
      </ha-card>
  
      <div class="section-header">${$a("panels.actions.cards.new_notification.action",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          ${this.viewMode==Zt.UI?L`
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.target.description",this.hass.language)}
            </span>
    
            <alarmo-select
              .hass=${this.hass}
              .items=${Pt(this.hass,...It(this.hass))}
              ?disabled=${!It(this.hass).length}
              label=${$a("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.actions[0].service}
              @value-changed=${this._setService}
              ?invalid=${this.errors.service}
              allow-custom-value
            ></alarmo-select>
          </settings-row>
    
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.title.description",this.hass.language)}
            </span>
    
            <paper-input
              label="${$a("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}"
              .value=${null===(e=this.config.actions[0].service_data)||void 0===e?void 0:e.title}
              @value-changed=${this._setTitle}
              ?invalid=${this.errors.title}
            ></paper-input>
          </settings-row>
    
          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.message.description",this.hass.language)}
            </span>
    
            <paper-textarea
              id="message"
              label="${$a("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}"
              placeholder=${this._messagePlaceholder()}
              .value=${null===(a=this.config.actions[0].service_data)||void 0===a?void 0:a.message}
              @value-changed=${this._setMessage}
              ?invalid=${this.errors.message}
            ></paper-textarea>
    
            ${this.config.triggers[0].event?L`
            <div style="margin-top: 10px">
              <span style="padding-right: 10px">
                ${$a("panels.actions.cards.new_notification.fields.message.insert_wildcard",this.hass.language)}:
              </span>
              <alarmo-chips
                .items=${(e=>{let a=[];return a=[],e&&![He.Pending,He.Triggered,He.ArmFailure].includes(e)||(a=[...a,{name:"Open Sensors",value:"{{open_sensors}}"}]),e&&![He.Armed].includes(e)||(a=[...a,{name:"Bypassed Sensors",value:"{{bypassed_sensors}}"}]),e&&![He.Armed,He.Arming,He.Disarmed].includes(e)||(a=[...a,{name:"Changed By",value:"{{changed_by}}"}]),e&&![He.Armed,He.Arming,He.Pending,He.Triggered,He.ArmFailure].includes(e)||(a=[...a,{name:"Arm Mode",value:"{{arm_mode}}"}]),a})(this.config.triggers[0].event)}
                @value-changed=${e=>this._insertWildCard(e.detail.value)}
              ></alarmo-chips>
            </div>`:""}
    
          </settings-row>`:L`
          <h2>${$a("components.editor.edit_in_yaml",this.hass.language)}</h2>
  
          <ha-yaml-editor
            .defaultValue=${this.config.actions[0]||""}
            @value-changed=${this._setYaml}
          ></ha-yaml-editor>

          ${this.errors.service||this.errors.title||this.errors.message?L`
          <span class="error-message">
            ${this.hass.localize("ui.errors.config.key_missing","key",Object.entries(this.errors).find(([e,a])=>a&&["service","title","message"].includes(e))[0])}
          </span>
            `:""}
          `}
        </div>

        <div class="toggle-button">
          <mwc-button @click=${this._toggleYamlMode}>
            <ha-icon icon="hass:shuffle-variant"></ha-icon>
            ${this.viewMode==Zt.Yaml?$a("components.editor.ui_mode",this.hass.language):$a("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        <div class="card-actions">
          <mwc-button trailingIcon ?disabled=${!this._validAction()} @click=${this._testClick}>
            ${$a("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>

      <div class="section-header">${$a("panels.actions.cards.new_notification.options",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.name.description",this.hass.language)}
            </span>

            <paper-input
              label="${$a("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}"
              placeholder=${this._namePlaceholder()}
              .value=${this.config.name}
              @value-changed=${this._setName}
              ?invalid=${this.errors.name}
            ></paper-input>
          </settings-row>

        ${(null===(t=this.item)||void 0===t?void 0:t.automation_id)?L`
          <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${$a("panels.actions.cards.new_notification.fields.delete.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${$a("panels.actions.cards.new_notification.fields.delete.description",this.hass.language)}
          </span>
          <div>
            <mwc-button class="warning" outlined @click=${this._deleteClick}>
              <ha-icon icon="hass:trash-can-outline"></ha-icon>
              ${this.hass.localize("ui.common.delete")}
            </mwc-button>
          </div>
          </settings-row>
          `:""}
        </div>
      </ha-card>

      <div class="actions">
        <mwc-button raised @click=${this._saveClick} style="width: 100%" class="save-button">
          <ha-icon icon="hass:content-save-outline"></ha-icon>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
      </div>

    `:L``}_setEvent(e){e.stopPropagation();const a=e.detail.value;let t=this.config.triggers;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{event:a})}),this.config=Object.assign(Object.assign({},this.config),{triggers:t}),Object.keys(this.errors).includes("event")&&this._validateConfig()}_setArea(e){var a;e.stopPropagation();const t=e.detail.value;let i=this.config.triggers;Object.assign(i,{0:Object.assign(Object.assign({},i[0]),{area:t})});const s=Rt(t,this.areas);(null===(a=i[0].modes)||void 0===a?void 0:a.length)?this._setModes(new CustomEvent("value-changed",{detail:{value:i[0].modes.filter(e=>s.includes(e))}})):this._setModes(new CustomEvent("value-changed",{detail:{value:s}})),this.config=Object.assign(Object.assign({},this.config),{triggers:i}),Object.keys(this.errors).includes("area")&&this._validateConfig()}_setModes(e){e.stopPropagation();const a=e.detail.value;let t=this.config.triggers;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{modes:a})}),this.config=Object.assign(Object.assign({},this.config),{triggers:t}),Object.keys(this.errors).includes("modes")&&this._validateConfig()}_setService(e){e.stopPropagation();const a=String(e.detail.value);let t=this.config.actions;Object.assign(t,{0:Object.assign(Object.assign(Object.assign({},t[0]),{service:a}),Ya(t[0],"service"))}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("service")&&this._validateConfig()}_setTitle(e){e.stopPropagation();const a=String(e.detail.value);let t=this.config.actions;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{service:t[0].service||"",service_data:Object.assign(Object.assign({},t[0].service_data||{}),{title:a})})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("title")&&this._validateConfig()}_setMessage(e){e.stopPropagation();const a=String(e.detail.value);let t=this.config.actions;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{service:t[0].service||"",service_data:Object.assign(Object.assign({},t[0].service_data||{}),{message:a})})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("message")&&this._validateConfig()}_setName(e){e.stopPropagation();const a=String(e.detail.value);this.config=Object.assign(Object.assign({},this.config),{name:a})}_setYaml(e){const a=e.detail.value;let t={};Bt(null==a?void 0:a.service)&&(t=Object.assign(Object.assign({},t),{service:String(a.service)})),Vt(null==a?void 0:a.service_data)&&(t=Object.assign(Object.assign({},t),{service_data:a.service_data})),Object.keys(t).length&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),t)})})),Object.keys(this.errors).some(e=>["service","message","title"].includes(e))&&this._validateConfig()}_validateConfig(){var e,a;this.errors={};const t=this._parseAutomation(),i=t.triggers[0];i.event&&Object.values(He).includes(i.event)||(this.errors=Object.assign(Object.assign({},this.errors),{event:!0})),Va(i.area)&&Lt(this.areas,this.alarmoConfig).includes(i.area)||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0})),(null===(e=i.modes)||void 0===e?void 0:e.every(e=>Rt(i.area,this.areas).includes(e)))||(this.errors=Object.assign(Object.assign({},this.errors),{modes:!0}));const s=t.actions[0];return s.service&&(It(this.hass).includes(s.service)||"script"==Se(s.service))||(this.errors=Object.assign(Object.assign({},this.errors),{service:!0})),Ft(null===(a=s.service_data)||void 0===a?void 0:a.message)||(this.errors=Object.assign(Object.assign({},this.errors),{message:!0})),Ft(t.name)||(this.errors=Object.assign(Object.assign({},this.errors),{name:!0})),!Object.values(this.errors).length}_validAction(){var e;const a=this._parseAutomation().actions[0];return a.service&&("script"==Se(a.service)||It(this.hass).includes(a.service))&&Ft(null===(e=a.service_data)||void 0===e?void 0:e.message)}_insertWildCard(e){var a;const t=this.shadowRoot.querySelector("#message");t&&t.focus();let i=(null===(a=this.config.actions[0].service_data)||void 0===a?void 0:a.message)||"";i=t&&null!==t.selectionStart&&null!==t.selectionEnd?i.substring(0,t.selectionStart)+e+i.substring(t.selectionEnd,i.length):i+e,this._setMessage(new CustomEvent("value-changed",{detail:{value:i}}))}_toggleYamlMode(){var e,a;this.viewMode=this.viewMode==Zt.UI?Zt.Yaml:Zt.UI,this.viewMode==Zt.Yaml&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),{service:this.config.actions[0].service||"",service_data:Object.assign(Object.assign({},this.config.actions[0].service_data||{}),{title:(null===(e=this.config.actions[0].service_data)||void 0===e?void 0:e.title)||"",message:(null===(a=this.config.actions[0].service_data)||void 0===a?void 0:a.message)||""})})})}))}_namePlaceholder(){const e=this.config.triggers[0].event,a=this.config.actions[0].service?Se(this.config.actions[0].service):null,t=Pt(this.hass,this.config.actions[0].service);return e&&"notify"==a&&t.length?$a("panels.actions.cards.new_notification.fields.name.placeholders."+e,this.hass.language,"{target}",t[0].name):""}_messagePlaceholder(){const e=this.config.triggers[0].event;return e?$a("panels.actions.cards.new_notification.fields.message.placeholders."+e,this.hass.language):""}_parseAutomation(){var e;let a=Object.assign({},this.config),t=a.actions[0];return!Ft(null===(e=t.service_data)||void 0===e?void 0:e.message)&&this.viewMode==Zt.UI&&this._messagePlaceholder()&&(t=Object.assign(Object.assign({},t),{service_data:Object.assign(Object.assign({},t.service_data),{message:this._messagePlaceholder()})}),Object.assign(a,{actions:Object.assign(a.actions,{0:t})})),!Ft(a.name)&&this._namePlaceholder()&&(a=Object.assign(Object.assign({},a),{name:this._namePlaceholder()})),a}_saveClick(e){if(!this._validateConfig())return;let a=this._parseAutomation();Rt(a.triggers[0].area,this.areas).every(e=>{var t;return null===(t=a.triggers[0].modes)||void 0===t?void 0:t.includes(e)})&&(a=Object.assign(Object.assign({},a),{triggers:Object.assign(a.triggers,{0:Object.assign(Object.assign({},a.triggers[0]),{modes:[]})})})),this.item&&(a=Object.assign(Object.assign({},a),{automation_id:this.item.automation_id})),Ma(this.hass,a).catch(a=>Wa(a,e)).then(()=>this._cancelClick())}_deleteClick(e){var a;(null===(a=this.item)||void 0===a?void 0:a.automation_id)&&Ta(this.hass,this.item.automation_id).catch(a=>Wa(a,e)).then(()=>this._cancelClick())}_testClick(e){const a=this._parseAutomation().actions[0],[t,i]=a.service.split(".");let s=a.service_data.message;s=s.replace("{{open_sensors}}","Some Example Sensor is open"),s=s.replace("{{bypassed_sensors}}","Some Bypassed Sensor"),s=s.replace("{{arm_mode}}","Armed away"),s=s.replace("{{changed_by}}","Some Example User"),this.hass.callService(t,i,Object.assign(Object.assign({},a.service_data),{message:s})).then().catch(a=>{Qa(e,a.message)})}_cancelClick(){De(0,"/alarmo/actions",!0)}static get styles(){return o`
      div.content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      } 
      div.header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
      div.section-header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: 18px;
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
        margin: 20px 0px 5px 10px;
      }
      div.actions {
        padding: 20px 0px 30px 0px;
      }
      mwc-button ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 20px;
      }
      .toggle-button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      h2 {
        margin-top: 10px;
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
      }
      span.error-message {
        color: var(--error-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      mwc-button.save-button {
        --mdc-theme-primary: rgba(var(--rgb-primary-color), 0.8);
      }
      div.heading {
        display: grid;
        grid-template-areas: 'header icon'
                             'description icon';
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 48px;
        margin: 20px 0px 10px 10px;
      }
      div.heading .icon {
        grid-area: icon;
      }
      div.heading .header {
        grid-area: header;
      }
      div.heading .description {
        grid-area: description;
      }
    `}};var Xt;a([oe({attribute:!1})],Jt.prototype,"hass",void 0),a([oe()],Jt.prototype,"narrow",void 0),a([oe()],Jt.prototype,"config",void 0),a([oe()],Jt.prototype,"item",void 0),a([oe()],Jt.prototype,"areas",void 0),a([oe()],Jt.prototype,"alarmoConfig",void 0),a([oe()],Jt.prototype,"viewMode",void 0),a([oe()],Jt.prototype,"errors",void 0),Jt=a([ne("notification-editor-card")],Jt),function(e){e[e.Yaml=0]="Yaml",e[e.UI=1]="UI"}(Xt||(Xt={}));let ei=class extends se{constructor(){super(...arguments),this.config={type:Ra.Action,triggers:[{}],actions:[{}]},this.viewMode=Xt.UI,this.errors={}}async firstUpdated(){if(this.areas=await za(this.hass),this.alarmoConfig=await ka(this.hass),this.item){let e=this.item.actions.map(e=>e.entity_id?e:Ya(e,"entity_id"));this.config=Object.assign(Object.assign({},this.item),{actions:[e[0],...e.slice(1)]}),this.config.triggers.length>1&&(this.config=Object.assign(Object.assign({},this.config),{triggers:[this.config.triggers[0]]}));let a=this.config.triggers[0].area;Va(a)&&!Lt(this.areas,this.alarmoConfig).includes(a)?a=void 0:null===a&&(a=0),this._setArea(new CustomEvent("value-changed",{detail:{value:a}})),this._hasCustomEntities()&&(this.viewMode=Xt.Yaml)}if(!Va(this.config.triggers[0].area)){const e=Lt(this.areas,this.alarmoConfig);1==e.length?this._setArea(new CustomEvent("value-changed",{detail:{value:e[0]}})):e.includes(0)&&this._setArea(new CustomEvent("value-changed",{detail:{value:0}}))}}render(){var e;return this.hass&&this.areas&&this.alarmoConfig?L`
      <div class="heading">
        <ha-icon-button icon="hass:close" @click=${this._cancelClick} class="icon"></ha-icon-button>
        <div class="header">${$a("panels.actions.cards.new_action.title",this.hass.language)}</div>
        <div class="description">${$a("panels.actions.cards.new_action.description",this.hass.language)}</div>
      </div>
      <div class="section-header">${$a("panels.actions.cards.new_notification.trigger",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.event.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.event.description",this.hass.language)}
            </span>

            <alarmo-select
              .hass=${this.hass}
              .items=${Object.values(He).map(e=>Dt(e,this.hass))}
              label=${$a("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.triggers[0].event}
              @value-changed=${this._setEvent}
              ?invalid=${this.errors.event}
            ></alarmo-select>
          </settings-row>

          ${Object.keys(this.areas).length>1?L`
          <settings-row .narrow=${this.narrow} .large=${!0}>
            <span slot="heading">
              ${$a("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_action.fields.area.description",this.hass.language)}
            </span>
            
            <alarmo-select
              .hass=${this.hass}
              .items=${Lt(this.areas,this.alarmoConfig).map(e=>Nt(e,this.areas,this.alarmoConfig))}
              clearable=${!0}
              label=${$a("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
              .value=${this.config.triggers[0].area}
              @value-changed=${this._setArea}
              ?invalid=${this.errors.area}
            ></alarmo-select>
          </settings-row>
          `:""}

          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${$a("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}
            </span>

            <alarmo-selector
              .hass=${this.hass}
              .items=${Rt(this.config.triggers[0].area,this.areas).map(e=>qt(e,this.hass))}
              label=${$a("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
              .value=${this.config.triggers[0].modes||[]}
              @value-changed=${this._setModes}
              ?invalid=${this.errors.modes}
            ></alarmo-selector>
          </settings-row>
        </div>
      </ha-card>
  
      <div class="section-header">${$a("panels.actions.cards.new_notification.action",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          ${this.viewMode==Xt.UI?L`
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${$a("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_action.fields.entity.description",this.hass.language)}
            </span>
    
            <alarmo-selector
              .hass=${this.hass}
              .items=${Ut(Ht(this.hass,this._getEntities()),this.hass)}
              ?disabled=${!Ht(this.hass,this._getEntities()).length}
              label=${$a("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
              .value=${this._getEntities()}
              @value-changed=${this._setEntity}
              ?invalid=${this.errors.entity_id}
            ></alarmo-selector>
          </settings-row>

        ${this.config.actions.map(e=>e.entity_id).length?L`        
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${$a("panels.actions.cards.new_action.fields.action.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_action.fields.action.description",this.hass.language)}
            </span>
            
            <div>
              ${this.renderActions()}
            </div>
          </settings-row>
          `:""}
        `:L`
          <h2>${$a("components.editor.edit_in_yaml",this.hass.language)}</h2>
  
          <ha-yaml-editor
            .defaultValue=${this.config.actions||""}
            @value-changed=${this._setYaml}
          ></ha-yaml-editor>

        ${this.errors.service||this.errors.entity_id?L`
          <span class="error-message">
            ${this.hass.localize("ui.errors.config.key_missing","key",Object.entries(this.errors).find(([e,a])=>a&&["service","entity_id"].includes(e))[0])}
          </span>
        `:""}
          `}
        </div>

        <div class="toggle-button">
          <mwc-button @click=${this._toggleYamlMode}>
            <ha-icon icon="hass:shuffle-variant"></ha-icon>
            ${this.viewMode==Xt.Yaml?$a("components.editor.ui_mode",this.hass.language):$a("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        <div class="card-actions">
          <mwc-button trailingIcon ?disabled=${!this._validAction()} @click=${this._testClick}>
            ${$a("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>

      <div class="section-header">${$a("panels.actions.cards.new_notification.options",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${$a("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${$a("panels.actions.cards.new_action.fields.name.description",this.hass.language)}
            </span>

            <paper-input
              label="${$a("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}"
              placeholder=${this._namePlaceholder()}
              .value=${this.config.name}
              @value-changed=${this._setName}
              ?invalid=${this.errors.name}
            ></paper-input>
          </settings-row>

        ${(null===(e=this.item)||void 0===e?void 0:e.automation_id)?L`
          <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${$a("panels.actions.cards.new_notification.fields.delete.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${$a("panels.actions.cards.new_notification.fields.delete.description",this.hass.language)}
          </span>
          <div>
            <mwc-button class="warning" outlined @click=${this._deleteClick}>
              <ha-icon icon="hass:trash-can-outline"></ha-icon>
              ${this.hass.localize("ui.common.delete")}
            </mwc-button>
          </div>
          </settings-row>
        `:""}
        </div>
      </ha-card>

      <div class="actions">
        <mwc-button raised @click=${this._saveClick} style="width: 100%" class="save-button">
          <ha-icon icon="hass:content-save-outline"></ha-icon>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
      </div>
    `:L``}renderActions(){let e=this.config.actions.map(e=>e.entity_id),a=Qt(e,this.hass);if(!a.length)return $a("panels.actions.cards.new_action.fields.action.no_common_actions",this.hass.language);return a.map(e=>L`
      <mwc-button
        class="${((...e)=>!!e.every(Va)&&1==Fa(Wt(e.filter(Va))).length)(this._selectedAction(),e)?"active":""}"
        @click=${()=>this._setAction(e)}
        ?invalid=${this.errors.service}
        ?disabled=${1==a.length}
      >
        ${((e,a)=>{let t=Me(e);switch("script"==Se(e)&&(t="run"),t){case"turn_on":return a.localize("ui.card.media_player.turn_on");case"turn_off":return a.localize("ui.card.media_player.turn_off");case"lock":return a.localize("ui.card.lock.lock");case"unlock":return a.localize("ui.card.lock.unlock");case"run":return a.localize("ui.card.script.run");default:return t}})(e,this.hass)}
      </mwc-button>
      `)}_selectedAction(){let e=this.config.actions.map(e=>e.service);return e.every(Va)?(e=Fa(Wt(e.filter(Va))),1==e.length?e[0]:null):null}_setEvent(e){e.stopPropagation();const a=e.detail.value;let t=this.config.triggers;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{event:a})}),this.config=Object.assign(Object.assign({},this.config),{triggers:t}),Object.keys(this.errors).includes("event")&&this._validateConfig()}_setArea(e){var a;e.stopPropagation();const t=e.detail.value;let i=this.config.triggers;Object.assign(i,{0:Object.assign(Object.assign({},i[0]),{area:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:i}),(null===(a=this.config.triggers[0].modes)||void 0===a?void 0:a.length)||this._setModes(new CustomEvent("value-changed",{detail:{value:Rt(t,this.areas)}})),Object.keys(this.errors).includes("area")&&this._validateConfig()}_setModes(e){e.stopPropagation();const a=e.detail.value,t=this.config.triggers;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{modes:a})}),this.config=Object.assign(Object.assign({},this.config),{triggers:t}),Object.keys(this.errors).includes("service")&&this._validateConfig()}_setEntity(e){e.stopPropagation();const a=e.detail.value;let t=this.config.actions,i=null;if(a.length>t.length&&this._selectedAction()&&(i=this._selectedAction()),t.length>a.length){let e=t.findIndex(e=>!a.includes(e.entity_id||""));e<0&&(e=t.length-1),t.splice(e,1)}a.length||Object.assign(t,{0:Ya(t[0],"entity_id")}),a.forEach((e,a)=>{let i=t.length>a?Object.assign({},t[a]):{};i=i.entity_id==e?Object.assign({},i):{entity_id:e},Object.assign(t,{[a]:i})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),i&&this._setAction(i),Object.keys(this.errors).includes("entity_id")&&this._validateConfig()}_setAction(e){let a=this.config.actions,t=this.config.actions.map(e=>e.entity_id);Qt(t,this.hass).length&&(a.forEach((t,i)=>{let s=Qt(t.entity_id,this.hass),n=(r=e,s.find(e=>e==r||"turn_on"==Me(r)&&"turn_on"==Me(e)||"turn_off"==Me(r)&&"turn_off"==Me(e)||"script"==Se(r)&&"script"==Se(e)));var r;Object.assign(a,{[i]:Object.assign({service:n},Ya(t,"service"))})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}))}_setName(e){e.stopPropagation();const a=String(e.detail.value);this.config=Object.assign(Object.assign({},this.config),{name:a})}_setYaml(e){let a=e.detail.value,t=[{}];var i;Vt(a)&&(a=[a]),"object"==typeof(i=a)&&null!==i&&Array.isArray(i)&&(a.forEach((e,a)=>{let i={};Vt(e)&&Bt(e.service)&&(i=Object.assign(Object.assign({},i),{service:e.service})),Vt(e)&&Bt(e.entity_id)&&(i=Object.assign(Object.assign({},i),{entity_id:e.entity_id})),Vt(e)&&Vt(e.service_data)&&(i=Object.assign(Object.assign({},i),{service_data:e.service_data})),Object.assign(t,{[a]:i})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}))}_validateConfig(){var e;this.errors={};const a=this._parseAutomation(),t=a.triggers[0];t.event&&Object.values(He).includes(t.event)||(this.errors=Object.assign(Object.assign({},this.errors),{event:!0})),Va(t.area)&&Lt(this.areas,this.alarmoConfig).includes(t.area)||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0})),(null===(e=t.modes)||void 0===e?void 0:e.every(e=>Rt(t.area,this.areas).includes(e)))||(this.errors=Object.assign(Object.assign({},this.errors),{modes:!0}));let i=a.actions.map(e=>e.entity_id);this.viewMode==Xt.Yaml&&(i=i.filter(Va)),a.actions.length&&i.every(e=>Yt(e,this.hass))||(this.errors=Object.assign(Object.assign({},this.errors),{entity_id:!0}));const s=a.actions.map(e=>e.service);if(!s.length||!s.every(e=>Gt(e,this.hass))){this.errors=Object.assign(Object.assign({},this.errors),{service:!0}),Qt(i,this.hass).length||(this.viewMode=Xt.Yaml)}return Ft(a.name)||(this.errors=Object.assign(Object.assign({},this.errors),{name:!0})),!Object.values(this.errors).length}_validAction(){const e=this._parseAutomation(),a=e.actions.map(e=>e.service);let t=e.actions.map(e=>e.entity_id);return this.viewMode==Xt.Yaml&&(t=t.filter(Va)),a.length&&a.every(e=>Gt(e,this.hass))&&t.every(e=>Yt(e,this.hass))}_toggleYamlMode(){this.viewMode=this.viewMode==Xt.UI?Xt.Yaml:Xt.UI,this.viewMode==Xt.Yaml&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),{service:this.config.actions[0].service||"",service_data:Object.assign({},this.config.actions[0].service_data||{})})})}))}_namePlaceholder(){var e,a,t,i;if(!this._validAction)return"";const s=this.config.triggers[0].event,n=this.config.actions.map(e=>e.entity_id).filter(Va),r=Ut(n,this.hass).map(e=>e.name).join(", "),o=Fa(this.config.actions.map(e=>e.service).filter(Va).map(e=>Me(e)));let d=void 0;return 1==o.length&&(null===(e=o[0])||void 0===e?void 0:e.includes("turn_on"))&&(d=this.hass.localize("state.default.on")),1==o.length&&(null===(a=o[0])||void 0===a?void 0:a.includes("turn_off"))&&(d=this.hass.localize("state.default.off")),1==o.length&&(null===(t=o[0])||void 0===t?void 0:t.includes("lock"))&&(d=this.hass.localize("component.lock.state._.locked")),1==o.length&&(null===(i=o[0])||void 0===i?void 0:i.includes("unlock"))&&(d=this.hass.localize("component.lock.state._.unlocked")),s&&r&&d?$a("panels.actions.cards.new_action.fields.name.placeholders."+s,this.hass.language,["{entity}","{state}"],[r,d]):""}_getEntities(){return Fa(this.config.actions.map(e=>e.entity_id).filter(Va))||[]}_hasCustomEntities(){return this._getEntities().some(e=>!Ht(this.hass).includes(e))}_parseAutomation(){let e=Object.assign({},this.config);return!Ft(e.name)&&this._namePlaceholder()&&(e=Object.assign(Object.assign({},e),{name:this._namePlaceholder()})),e}_saveClick(e){if(!this._validateConfig())return;let a=this._parseAutomation();Rt(a.triggers[0].area,this.areas).every(e=>{var t;return null===(t=a.triggers[0].modes)||void 0===t?void 0:t.includes(e)})&&(a=Object.assign(Object.assign({},a),{triggers:Object.assign(a.triggers,{0:Object.assign(Object.assign({},a.triggers[0]),{modes:[]})})})),Ma(this.hass,a).catch(a=>Wa(a,e)).then(()=>this._cancelClick())}_deleteClick(e){var a;(null===(a=this.item)||void 0===a?void 0:a.automation_id)&&Ta(this.hass,this.item.automation_id).catch(a=>Wa(a,e)).then(()=>this._cancelClick())}_testClick(e){this._parseAutomation().actions.forEach(a=>{const[t,i]=a.service.split(".");let s=Object.assign({},a.service_data);a.entity_id&&(s=Object.assign(Object.assign({},s),{entity_id:a.entity_id})),this.hass.callService(t,i,s).then().catch(a=>{Qa(e,a.message)})})}_cancelClick(){De(0,"/alarmo/actions",!0)}static get styles(){return o`
      div.content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      } 
      div.header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
      }
      div.section-header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: 18px;
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        opacity: var(--dark-primary-opacity);
        margin: 20px 0px 5px 10px;
      }
      div.actions {
        padding: 20px 0px 30px 0px;
      }
      mwc-button ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 20px;
      }
      .toggle-button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      h2 {
        margin-top: 10px;
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
      }
      span.error-message {
        color: var(--error-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      mwc-button.save-button {
        --mdc-theme-primary: rgba(var(--rgb-primary-color), 0.8);
      }
      mwc-button.active {
        background: var(--primary-color);
        --mdc-theme-primary: var(--text-primary-color);
        border-radius: 4px;
      }
      mwc-button[disabled].active {
        background: var(--disabled-text-color);
        --mdc-button-disabled-ink-color: var(--text-primary-color);
      }
      div.heading {
        display: grid;
        grid-template-areas: 'header icon'
                             'description icon';
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 48px;
        margin: 20px 0px 10px 10px;
      }
      div.heading .icon {
        grid-area: icon;
      }
      div.heading .header {
        grid-area: header;
      }
      div.heading .description {
        grid-area: description;
      }
    `}};a([oe({attribute:!1})],ei.prototype,"hass",void 0),a([oe()],ei.prototype,"narrow",void 0),a([oe()],ei.prototype,"config",void 0),a([oe()],ei.prototype,"item",void 0),a([oe()],ei.prototype,"areas",void 0),a([oe()],ei.prototype,"alarmoConfig",void 0),a([oe()],ei.prototype,"viewMode",void 0),a([oe()],ei.prototype,"errors",void 0),ei=a([ne("automation-editor-card")],ei);let ai=class extends(Xa(se)){constructor(){super(...arguments),this.areas={},this.notificationFilterOptions=[],this.automationFilterOptions=[],this.getAreaForAutomation=e=>{const a=Lt(this.areas,this.config);let t=e.triggers[0].area;return Va(t)&&a.includes(t)?t:void 0}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await ja(this.hass);this.automations=Object.values(e),this.areas=await za(this.hass),this.config=await ka(this.hass),this.notificationFilterOptions=[...Lt(this.areas,this.config).map(a=>Object(Object.assign(Object.assign({},Nt(a,this.areas,this.config)),{count:Object.values(e).filter(e=>e.type==Ra.Notification).map(this.getAreaForAutomation).filter(e=>e==a).length})))].sort(Ja),this.automationFilterOptions=[...Lt(this.areas,this.config).map(a=>Object(Object.assign(Object.assign({},Nt(a,this.areas,this.config)),{count:Object.values(e).filter(e=>e.type==Ra.Action).map(this.getAreaForAutomation).filter(e=>e==a).length})))].sort(Ja),Object.values(e).filter(e=>e.type==Ra.Notification).map(this.getAreaForAutomation).filter(e=>!Va(e)).length&&(this.notificationFilterOptions=[{value:"no_area",name:$a("panels.actions.cards.notifications.filter.no_area",this.hass.language),count:Object.values(e).filter(e=>e.type==Ra.Notification).map(this.getAreaForAutomation).filter(e=>!Va(e)).length},...this.notificationFilterOptions]),Object.values(e).filter(e=>e.type==Ra.Action).map(this.getAreaForAutomation).filter(e=>!Va(e)).length&&(this.automationFilterOptions=[{value:"no_area",name:$a("panels.actions.cards.notifications.filter.no_area",this.hass.language),count:Object.values(e).filter(e=>e.type==Ra.Action).map(this.getAreaForAutomation).filter(e=>!Va(e)).length},...this.automationFilterOptions])}firstUpdated(){this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.notificationFilter=this.path[1],this.automationFilter=this.path[1]),(async()=>{await Le()})()}render(){var e;if(!this.hass||!this.automations)return L``;if((null===(e=this.path)||void 0===e?void 0:e.length)&&["new_notification","edit_notification"].includes(this.path[0])){const e=this.automations.find(e=>this.path.length>1&&e.automation_id==this.path[1]&&e.type==Ra.Notification);return L`
        <notification-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .item=${e}
        ></notification-editor-card>
      `}if(this.path&&this.path.length&&"new_action"==this.path[0])return L`
        <automation-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}>
        ?</automation-editor-card>
      `;if(this.path&&2==this.path.length&&"edit_action"==this.path[0]){const e=this.automations.find(e=>this.path.length>1&&e.automation_id==this.path[1]&&e.type==Ra.Action);return L`
        <automation-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .item=${e}
        >
        </automation-editor-card>
      `}{const e={type:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},enabled:{title:$a("panels.actions.cards.notifications.table.enabled",this.hass.language),width:"68px",align:"center"}},a=this.automations.filter(e=>e.type==Ra.Notification).filter(e=>!Va(this.notificationFilter)||!this.notificationFilterOptions.find(e=>e.value==this.notificationFilter)||this.getAreaForAutomation(e)==this.notificationFilter||"no_area"===this.notificationFilter&&!Va(this.getAreaForAutomation(e))).map(e=>Object({id:e.automation_id,type:L`
              <ha-icon icon="hass:message-text-outline"></ha-icon>
            `,name:e.name,enabled:L`
              <ha-switch
                ?checked=${e.enabled}
                @click=${a=>{a.stopPropagation(),this.toggleEnable(a,e.automation_id)}}
              ></ha-switch>
            `})),t=this.automations.filter(e=>e.type==Ra.Action).filter(e=>!Va(this.notificationFilter)||!this.automationFilterOptions.find(e=>e.value==this.automationFilter)||this.getAreaForAutomation(e)==this.notificationFilter||"no_area"===this.notificationFilter&&!Va(this.getAreaForAutomation(e))).map(e=>Object({id:e.automation_id,type:L`
              <ha-icon icon="hass:flash"></ha-icon>
            `,name:e.name,enabled:L`
              <ha-switch
                ?checked=${e.enabled}
                @click=${a=>{a.stopPropagation(),this.toggleEnable(a,e.automation_id)}}
              ></ha-switch>
            `}));return L`
        <ha-card header="${$a("panels.actions.cards.notifications.title",this.hass.language)}">
          <div class="card-content">
            ${$a("panels.actions.cards.notifications.description",this.hass.language)}
          </div>

          ${this.notificationFilterOptions.length>1?L`
                <div class="table-filter" ?narrow=${this.narrow}>
                  <span class="header"
                    >${$a("panels.actions.cards.notifications.filter.label",this.hass.language)}:</span
                  >
                  <alarmo-chips
                    .items=${this.notificationFilterOptions}
                    value=${this.notificationFilter}
                    selectable
                    @value-changed=${e=>this.notificationFilter=e.target.value}
                  >
                  </alarmo-chips>
                </div>
              `:""}
          <alarmo-table
            ?selectable=${!0}
            .columns=${e}
            .data=${a}
            @row-click=${e=>{const a=String(e.detail.id);De(0,"/alarmo/actions/edit_notification/"+a,!0)}}
          >
            ${$a("panels.actions.cards.notifications.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addNotificationClick}>
              ${$a("panels.actions.cards.notifications.actions.new_notification",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>

        <ha-card header="${$a("panels.actions.title",this.hass.language)}">
          <div class="card-content">${$a("panels.actions.cards.actions.description",this.hass.language)}</div>

          ${this.automationFilterOptions.length>1?L`
                <div class="table-filter" ?narrow=${this.narrow}>
                  <span class="header"
                    >${$a("panels.actions.cards.notifications.filter.label",this.hass.language)}:</span
                  >
                  <alarmo-chips
                    .items=${this.automationFilterOptions}
                    value=${this.automationFilter}
                    selectable
                    @value-changed=${e=>this.automationFilter=e.target.value}
                  >
                  </alarmo-chips>
                </div>
              `:""}
          <alarmo-table
            ?selectable=${!0}
            .columns=${e}
            .data=${t}
            @row-click=${e=>{const a=String(e.detail.id);De(0,"/alarmo/actions/edit_action/"+a,!0)}}
          >
            ${$a("panels.actions.cards.actions.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addActionClick}>
              ${$a("panels.actions.cards.actions.actions.new_action",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>
      `}}toggleEnable(e,a){Ma(this.hass,{automation_id:a,enabled:!e.target.checked}).catch(a=>Wa(a,e)).then()}addNotificationClick(){De(0,"/alarmo/actions/new_notification",!0)}addActionClick(){De(0,"/alarmo/actions/new_action",!0)}};ai.styles=Re,a([oe()],ai.prototype,"hass",void 0),a([oe()],ai.prototype,"narrow",void 0),a([oe()],ai.prototype,"path",void 0),a([oe()],ai.prototype,"alarmEntity",void 0),a([oe()],ai.prototype,"automations",void 0),a([oe()],ai.prototype,"areas",void 0),a([oe()],ai.prototype,"config",void 0),a([oe()],ai.prototype,"notificationFilter",void 0),a([oe()],ai.prototype,"automationFilter",void 0),a([oe()],ai.prototype,"notificationFilterOptions",void 0),a([oe()],ai.prototype,"automationFilterOptions",void 0),ai=a([ne("alarm-view-actions")],ai),e.MyAlarmPanel=class extends se{async firstUpdated(){window.addEventListener("location-changed",()=>{this.requestUpdate()}),await Le(),this.userConfig=await xa(this.hass),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout")||!this.userConfig)return L`
        loading...
      `;const e=Object.values(this.userConfig).find(e=>e.name.toLowerCase()==this.hass.user.name.toLowerCase());return this.hass.user.is_admin||e&&e.is_admin?L`
        <ha-app-layout>
          <app-header fixed slot="header">
            <app-toolbar>
              <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}> </ha-menu-button>
              <div main-title>
                ${$a("title",this.hass.language)}
              </div>
              <div class="version">
                v${"1.7.5"}
              </div>
            </app-toolbar>
            <ha-tabs
              scrollable
              attr-for-selected="page-name"
              .selected=${this.getPath()[2]||"general"}
              @iron-activate=${this.handlePageSelected}
            >
              <paper-tab page-name="general">
                ${$a("panels.general.title",this.hass.language)}
              </paper-tab>
              <paper-tab page-name="sensors">
                ${$a("panels.sensors.title",this.hass.language)}
              </paper-tab>
              <paper-tab page-name="codes">
                ${$a("panels.codes.title",this.hass.language)}
              </paper-tab>
              <paper-tab page-name="actions">
                ${$a("panels.actions.title",this.hass.language)}
              </paper-tab>
            </ha-tabs>
          </app-header>
        </ha-app-layout>
        <div class="view">
          ${this.getView()}
        </div>
      `:L`
        <ha-app-layout>
          <app-header fixed slot="header">
            <app-toolbar>
              <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}> </ha-menu-button>
              <div main-title>
                Alarm panel
              </div>
            </app-toolbar>
          </app-header>
        </ha-app-layout>
        <div class="view">
          <div>
            <ha-card header="Access is blocked">
              <div class="card-content">
                You have no access to view this page. Please check the following:
                <ul>
                  <li>
                    You are logged in using HA user account <b>'${this.hass.user.name}'</b>. This account
                    <b>${this.hass.user.is_admin?"does":"does NOT"}</b> have administrator permission.
                  </li>
                </ul>
                <ul>
                  <li>
                    There is ${e?"a":"no"} user configured in Alarmo with name
                    <b>'${this.hass.user.name}'</b>.
                    ${e?L`This user <b>${e.is_admin?"does":"does NOT"}</b> have administrator permission. `:""}
                  </li>
                </ul>
              </div>
            </ha-card>
          </div>
        </div>
      `}getPath(){return window.location.pathname.split("/")}getView(){const e=this.getPath(),a=e[2]||"general",t=e.slice(3);switch(a){case"general":return L`
          <alarm-view-general
            .hass=${this.hass}
            .narrow=${this.narrow}
            .path=${t.length?t:null}
          ></alarm-view-general>
        `;case"sensors":return L`
          <alarm-view-sensors .hass=${this.hass} .narrow=${this.narrow} .path=${t.length?t:null}>
          </alarm-view-sensors>
        `;case"codes":return L`
          <alarm-view-codes .hass=${this.hass} .narrow=${this.narrow} .path=${t.length?t:null}>
          </alarm-view-codes>
        `;case"actions":return L`
          <alarm-view-actions .hass=${this.hass} .narrow=${this.narrow} .path=${t.length?t:null}>
          </alarm-view-actions>
        `;default:return L`
            <ha-card header="Page not found">
              <div class="card-content">
                The page you are trying to reach cannot be found. 
                Please select a page from the menu above to continue.
              </div>
            </ha-card>
        `}}handlePageSelected(e){const a=e.detail.item.getAttribute("page-name");a!==this.getPath()?(De(0,"/alarmo/"+a),this.requestUpdate()):scrollTo(0,0)}static get styles(){return o`
      ${Re}

      :host {
        color: var(--primary-text-color);
        --paper-card-header-color: var(--primary-text-color);
      }

      app-header,
      app-toolbar {
        background-color: var(--app-header-background-color);
        font-weight: 400;
        color: var(--app-header-text-color, white);
      }
      app-toolbar {
        height: var(--header-height);
      }

      ha-app-layout {
        display: block;
        z-index: 2;
      }

      app-toolbar [main-title] {
        margin-left: 20px;
      }

      ha-tabs {
        margin-left: max(env(safe-area-inset-left), 24px);
        margin-right: max(env(safe-area-inset-right), 24px);
        --paper-tabs-selection-bar-color: var(
          --app-header-selection-bar-color,
          var(--app-header-text-color, #fff)
        );
        text-transform: uppercase;
      }

      .view {
        height: calc(100vh - 112px);
        display: flex;
        justify-content: center;
      }

      .view > * {
        width: 600px;
        max-width: 600px;
      }

      .view > *:last-child {
        margin-bottom: 20px;
      }

      .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
      }
    `}},a([oe()],e.MyAlarmPanel.prototype,"hass",void 0),a([oe({type:Boolean,reflect:!0})],e.MyAlarmPanel.prototype,"narrow",void 0),a([oe()],e.MyAlarmPanel.prototype,"userConfig",void 0),e.MyAlarmPanel=a([ne("alarm-panel")],e.MyAlarmPanel)}({});
