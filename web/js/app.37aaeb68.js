(function(){"use strict";var t={969:function(t,e,n){n.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-overlay",{attrs:{show:t.show,"no-wrap":""}})],1)},o=[],r={data(){return{show:!0}}},i=r,s=n(1001),l=(0,s.Z)(i,a,o,!1,null,null,null),c=l.exports},9520:function(t,e,n){var a=n(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"fluid nav nav-tabs"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/database"}},[t._v("Database")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("MASCOT")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])])]),n("router-view"),n("hr",{staticClass:"fixed-bottom",staticStyle:{color:"black"}}),n("footer",{staticClass:"fixed-bottom bg-secondary"},[n("nav",{staticClass:"navbar navbar-expand-sm",staticStyle:{"font-family":"Avenir,Arial,sans-serif"}},[n("div",{staticClass:"container"},[n("span",{staticClass:"navbar-text",staticStyle:{"font-size":"13px",color:"white"}},[t._v("Copyright @2022 of Chen Lab at Boston Chilren's Hospital")]),n("a",{staticStyle:{color:"white"},attrs:{href:"mailto: Rongbin.Zheng@childrens.harvard.edu"}},[n("span",{staticClass:"navbar-text",staticStyle:{"font-size":"13px"}},[n("svg",{staticClass:"icon",staticStyle:{"margin-right":"10px"},attrs:{t:"1594304718896",viewBox:"0 0 1385 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2148",width:"20",height:"20"}},[n("path",{attrs:{d:"M1226.571294 36.442353h-1090.258823c-74.992941 0-136.312471 54.211765-136.312471 120.470588v722.82353c0 66.258824 61.319529 120.470588 136.312471 120.470588h1090.258823c74.992941 0 136.312471-54.211765 136.312471-120.470588v-722.82353c0-66.258824-61.319529-120.470588-136.312471-120.470588z m0 240.941176l-545.129412 301.176471-545.129411-301.176471v-120.470588l545.129411 301.176471 545.129412-301.176471v120.470588z",fill:"white","p-id":"2149"}})]),t._v(" Rongbin.Zheng@childrens.harvard.edu ")])])])])])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"p-4 bg-secondary text-center"},[n("h1",{staticStyle:{color:"white","font-family":"Avenir","font-weight":"bold"}},[t._v("Metabolic Communication Knowledgebase")])])}],i=n(1001),s={},l=(0,i.Z)(s,o,r,!1,null,null,null),c=l.exports,u=n(2809),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("transition",{attrs:{name:"fade"}},[t.isLoading?a("LoadingVue"):t._e()],1),a("br"),a("h1",[t._v("Welcome to Metabolic Communication Website")]),a("p",[a("I",[t._v("A collection of information for modeling metabolite-based cell-cell communication using single cell omics data")])],1),a("b-row",[a("b-col",{attrs:{cols:"5"}},[a("img",{attrs:{alt:"model logo",width:"460",height:"345",src:n(6758)}})]),a("b-col",{attrs:{cols:"7"}},[a("br"),a("h3",[t._v("In order to study metabolic communication in tissues.")]),a("h3",[t._v("We developed:")]),a("li",[a("span",[t._v("Database for communication-related metabolite")])]),a("ul",[a("dd",[a("span",[t._v("- Metabolite basic annotation")])]),a("dd",[a("span",[t._v("- Metabolic reaction and related enzymes")])]),a("dd",[a("span",[t._v("- Metabolite associated sensors including receptor and transporter")])])]),a("li",[a("span",[t._v("Computational Estimator for metabolite abundance using transcriptome data")])]),a("li",[a("span",[a("B",[t._v("MASCOT")]),t._v(": "),a("B",[t._v("M")]),t._v("odel-based "),a("B",[t._v("A")]),t._v("naly"),a("B",[t._v("S")]),t._v("is of Metabolic "),a("B",[t._v("CO")]),t._v("mmunication from "),a("B",[t._v("S")]),t._v("ingle Cell "),a("B",[t._v("T")]),t._v("ranscriptome")],1)])])],1),a("div",{staticClass:"container"},[a("b-input-group",{staticClass:"mt-4",attrs:{size:"lg"}},[a("b-button",{attrs:{size:"lg",variant:"secondary"}},[t._v("Keyword")]),a("b-form-input",{attrs:{id:"hpageInput",placeholder:"search by metabolite name, HMDB ID, KEGG chemical ID, gene name, receptor, or transporter name",size:"sm"},model:{value:t.inputKeyword,callback:function(e){t.inputKeyword=e},expression:"inputKeyword"}}),a("b-input-group-append",[a("b-button",{attrs:{size:"lg",variant:"primary"},on:{click:function(e){return t.keyJump()}}},[t._v("Search")])],1)],1)],1)],1)},f=[],v=n(969),m={name:"HomeView",components:{LoadingVue:v.Z},data(){return{isLoading:!1,inputKeyword:""}},methods:{keyJump(){this.isLoading=!0,this.$router.push({path:"/database",query:{keyword_content:this.inputKeyword}})}}},p=m,b=(0,i.Z)(p,d,f,!1,null,null,null),h=b.exports;a["default"].use(u.Z);const g=[{path:"/",name:"home",component:h},{path:"/database",name:"database",component:()=>n.e(443).then(n.bind(n,7343))},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5830))}],y=new u.Z({routes:g});var _=y,w=n(8262),C=n(3266);n(44);a["default"].config.productionTip=!1,a["default"].use(w.XG7),a["default"].use(C.A7),new a["default"]({router:_,render:t=>t(c)}).$mount("#app")},6758:function(t,e,n){t.exports=n.p+"img/metabolic_comm_model.5b2c7504.png"}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,o,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],r=t[u][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.209b90f3.js"}}(),function(){n.miniCssF=function(t){return"css/about.a9c9bbdb.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="mascot_web:";n.l=function(a,o,r,i){if(t[a])t[a].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+r),s.src=a),t[a]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(v);var o=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=r,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===t||r===e))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===t||r===e)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(e(i,s))return o();t(a,s,o,r)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=a(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(e),s=new Error,l=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(e&&e(a);c<i.length;c++)r=i[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkmascot_web"]=self["webpackChunkmascot_web"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9520)}));a=n.O(a)})();
//# sourceMappingURL=app.37aaeb68.js.map