(function(e){function t(t){for(var r,n,u=t[0],i=t[1],l=t[2],c=0,d=[];c<u.length;c++)n=u[c],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);m&&m(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,n=1;n<o.length;n++){var u=o[n];0!==s[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={1:0},s={1:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{2:"1ec371a8",3:"7174c868"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={2:1,3:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=new Promise((function(t,o){for(var r="css/"+({}[e]||e)+"."+{2:"62377c4f",3:"af5418f4"}[e]+".css",s=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===s))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===r||c===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete n[e],m.parentNode.removeChild(m),o(a)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,o){r=s[e]=[t,o]}));t.push(r[2]=a);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(m);var o=s[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,o[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;a.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"0047":function(e,t,o){},"2f39":function(e,t,o){"use strict";o.r(t);o("5319");var r=o("c973"),n=o.n(r),s=(o("7d6e"),o("e54f"),o("985d"),o("0047"),o("2b0e")),a=o("1f91"),u=o("42d2"),i=o("b05d"),l=o("2a19"),c=o("436b");s["default"].use(i["a"],{config:{dark:!1,notify:{position:"top",timeout:1e3,progress:!0}},lang:a["a"],iconSet:u["a"],plugins:{Notify:l["a"],Dialog:c["a"]}});var d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1)},m=[],p={name:"App"},f=p,g=o("2877"),h=Object(g["a"])(f,d,m,!1,null,null,null),y=h.exports,w=(o("4fad"),o("ddb0"),o("2f62")),j=o("3a6f"),_=o.n(j),v=o("fd9f"),b=o("2ef0"),S=o("07bd");s["default"].use(_.a),s["default"].use(v["a"]),s["default"].use(w["a"]);var I=function(){const e=new w["a"].Store({state:{ssneo4j_user:window.localStorage.getItem("ssneo4j_user"),ssneo4j_pass:window.localStorage.getItem("ssneo4j_pass"),ssneo4j_host:window.localStorage.getItem("ssneo4j_host"),ssneo4j_port:window.localStorage.getItem("ssneo4j_port"),ssneo4j_scheme:window.localStorage.getItem("ssneo4j_scheme"),ss_remember:window.localStorage.getItem("ss_remember"),isLoggedIn:!1,layoutMode:{},cyElements:[],currentElement:void 0,currentNodeSummary:[]},mutations:{auth_success:(e,t)=>{e.isLoggedIn=!0,e.ssneo4j_user=t.user,e.ssneo4j_pass=t.pass,e.ssneo4j_scheme=t.scheme,e.ssneo4j_host=t.host,e.ssneo4j_port=t.port,t.remember?(window.localStorage.setItem("ssneo4j_user",t.user),window.localStorage.setItem("ssneo4j_pass",t.pass),window.localStorage.setItem("ssneo4j_host",t.host),window.localStorage.setItem("ssneo4j_port",t.port),window.localStorage.setItem("ssneo4j_scheme",t.scheme),window.localStorage.setItem("ss_remember","true")):window.localStorage.setItem("ss_remember","false")},goLogout:e=>{window.localStorage.removeItem("ssneo4j_user"),window.localStorage.removeItem("ssneo4j_pass"),window.localStorage.removeItem("ssneo4j_host"),window.localStorage.removeItem("ssneo4j_port"),window.localStorage.removeItem("ssneo4j_scheme"),window.localStorage.removeItem("ss_remember"),e.isLoggedIn=!1,e.cyElements=[],e.currentElement=void 0,e.currentNodeSummary=[]},changeMode(e,t){e.layoutMode=t},updateElements(e,t){e.cyElements=t},updateNodeSummary(e,t){e.currentNodeSummary=t},setLoggedIn(e,t){e.isLoggedIn=t},setCurrentElement(e,t){e.currentElement=t}},getters:{ssneo4j_user:e=>e.ssneo4j_user,ssneo4j_pass:e=>e.ssneo4j_pass,isLoggedIn:e=>e.isLoggedIn,ssneo4j_port:e=>e.ssneo4j_port,ssneo4j_host:e=>e.ssneo4j_host,ssneo4j_scheme:e=>e.ssneo4j_scheme,layoutMode:e=>e.layoutMode,cyElements:e=>e.cyNodes,currentElement:e=>e.currentElement,currentNodeSummary:e=>e.currentNodeSummary},actions:{setAuth({commit:e},t){e("auth_success",t)},loggedIn({commit:e}){e("setLoggedIn",!0)},logout({commit:e}){e("goLogout")},currentElement({commit:e},t){e("setCurrentElement",t)},currentNodeSummary({commit:e},t){e("updateNodeSummary",t)},makeQueryElements({commit:e,state:t},o){s["default"].prototype.$neo4j.run(o.query,{},{}).then(r=>{let n=[],a=[],u=r["records"];if(0===u.length)s["default"].prototype.$q.notify({color:"red",message:"No results found",timeout:3e3});else if(u.forEach(e=>{for(const[t,o]of Object.entries(e.keys)){let t=e.get(o);t.data={},t.classes="",Object(S["isNode"])(t)?("/"===t["properties"]["name"].charAt(0)?t.data.name=t["properties"]["name"].split("/").pop():t.data.name=t["properties"]["name"],t.data.type=t["properties"]["type"],t.group="nodes",t.data.id="node_"+t["identity"].toString(),n.push(t)):Object(S["isRelationship"])(t)?(t.data.source="node_"+t["start"].toString(),t.data.target="node_"+t["end"].toString(),t.data.id="edge_"+t["identity"].toString(),t.data.type=t.type,t.group="edges",a.push(t)):console.log("If you see this, something's wrong. Not a Node or Relationship",t)}}),o.expand){let o=Object(b["filter"])(t.cyElements,["group","nodes"]),r=Object(b["uniqBy"])([...n,...o],"data.id"),s=Object(b["filter"])(t.cyElements,["group","edges"]),u=Object(b["uniqBy"])([...a,...s],"data.id");e("updateElements",[...r,...u])}else{let t=Object(b["uniqBy"])(n,"data.id"),o=Object(b["uniqBy"])(a,"data.id");e("updateElements",[...t,...o])}}).catch(e=>{s["default"].prototype.$q.notify({color:"red",message:e.message,timeout:3e3})})}},strict:!1});return e},E=o("8c4f");o("e6cf");const O=[{path:"/dashboard",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"713b"))},{path:"/",name:"Login",alias:"/login",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"013f"))}];var N=O;o("a8ed");s["default"].use(E["a"]);var L=function(){const e=new E["a"]({scrollBehavior:()=>({x:0,y:0}),routes:N,mode:"history",base:"/"});return e.beforeEach(function(){var t=n()((function*(t,o,r){"/"==t.path||e.app.$store.getters.isLoggedIn?r():r("/")}));return function(e,o,r){return t.apply(this,arguments)}}()),e},P=function(){return x.apply(this,arguments)};function x(){return x=n()((function*(){const e="function"===typeof I?yield I({Vue:s["default"]}):I,t="function"===typeof L?yield L({Vue:s["default"],store:e}):L;e.$router=t;const o={router:t,store:e,render:e=>e(y),el:"#q-app"};return{app:o,store:e,router:t}})),x.apply(this,arguments)}var q=o("bc3a"),k=o.n(q);s["default"].prototype.$axios=k.a;const C="/";function A(){return M.apply(this,arguments)}function M(){return M=n()((function*(){const{app:e,store:t,router:o}=yield P();let r=!1;const n=e=>{r=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),u=[void 0];for(let l=0;!1===r&&l<u.length;l++)if("function"===typeof u[l])try{yield u[l]({app:e,router:o,store:t,Vue:s["default"],ssrContext:null,redirect:n,urlPath:a,publicPath:C})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&new s["default"](e)})),M.apply(this,arguments)}A()}});