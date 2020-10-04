(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/gold-gradient-background.44159229.png"},function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=(n(11),n(1)),c=n(2),s={none:{display:"none"},up:{transform:"rotate(-90deg)"},down:{transform:"rotate(90deg)"}},u=s.none;function d(e){switch(e.sorting){case"desc":u=s.up;break;case"asc":u=s.down;break;default:u=s.none}return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:u},">"))}var g={header:{paddingTop:"20px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",fontSize:"20px"},headerChildren:{display:"flex",flexDirection:"column"},headerLeft:{borderTopLeftRadius:"25px"},headerRight:{borderTopRightRadius:"25px"},filler:{height:"27px"}};function h(e){var t=e.state,n=e.handleSorting;return r.a.createElement(r.a.Fragment,null,t.mobileMode?null:r.a.createElement("th",{style:Object(i.a)({},g.header,g.headerLeft),onClick:function(){return n("date")}},r.a.createElement("div",{style:g.headerChildren},"Stock exchange date","date"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):r.a.createElement("span",{style:g.filler}))),t.mobileMode?null:r.a.createElement("th",{style:g.header,onClick:function(){return n("base")}},r.a.createElement("div",{style:g.headerChildren},"Base currency","base"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):r.a.createElement("span",{style:g.filler}))),r.a.createElement("th",{style:t.mobileMode?Object(i.a)({},g.header,g.headerLeft):g.header,onClick:function(){return n("currencyCode")}},r.a.createElement("div",{style:g.headerChildren},"Currency","currencyCode"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):r.a.createElement("span",{style:g.filler}))),r.a.createElement("th",{style:Object(i.a)({},g.header,g.headerRight),onClick:function(){return n("value")}},r.a.createElement("div",{style:g.headerChildren},"Value","value"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):r.a.createElement("span",{style:g.filler}))))}var f={footer:{display:"flex",width:"90vw"},footerBtns:{textAlign:"center",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"40vw"},footerPage:{textAlign:"center",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"10vw"},footerRight:{borderBottomRightRadius:"25px"},footerLeft:{borderBottomLeftRadius:"25px"}};function m(e){var t=e.handlePagination,n=e.state,a=e.arrayLength;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:f.footer},r.a.createElement("div",{style:Object(i.a)({},f.footerBtns,f.footerLeft),onClick:function(){return t("prev",a)}},"Previous"),r.a.createElement("div",{style:f.footerPage},"Page: ",n.page),r.a.createElement("div",{style:Object(i.a)({},f.footerBtns,f.footerRight),onClick:function(){return t("next",a)}},"Next")))}var p={input:{borderRadius:"25px",height:"23px"}};function b(e){var t=e.handleSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Search:",r.a.createElement("input",{style:p.input,onKeyUp:function(e){return t(e)}}))))}var y=function(e,t){return t.filter(function(t){return Object.keys(t).some(function(n){return-1!==t[n].toString().toLowerCase().indexOf(e.toLowerCase())})})},E=function(e,t,n){switch(e.sorting){case"none":return n(function(e){return Object(i.a)({},e,{sortingKey:t,sorting:"asc"})});case"asc":return n(function(e){return Object(i.a)({},e,{sortingKey:t,sorting:"desc"})});case"desc":return n(function(e){return Object(i.a)({},e,{sortingKey:t,sorting:"asc"})});default:return n(function(e){return Object(i.a)({},e,{sortingKey:"none",sorting:"none"})})}},v=function(e,t){var n=e.sorting,a=e.sortingKey;switch(n){case"asc":return function(e,t){return e.sort(function(e,n){var a=e[t],r=n[t],o=0;return a>r?o=1:a<r&&(o=-1),o})}(t,a);case"desc":return function(e,t){return e.sort(function(e,n){var a=e[t],r=n[t],o=0;return a>r?o=-1:a<r&&(o=1),o})}(t,a);default:return t}},w={table:{width:"90vw"},tableCell:{border:"1px solid black",fontSize:"20px"},numCell:{textAlign:"end"}};function x(e){var t=e.arrayForTable,n=e.state,a=e.handleSorting,o=e.handlePagination,l=e.handleSearch,c=n.rowsPerPage*n.page,s=c-n.rowsPerPage,u=y(n.searchText,t);return u!==[]&&v(n,u),r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{handleSearch:l}),r.a.createElement("table",{style:w.table},r.a.createElement("thead",null,n.mobileMode?r.a.createElement("tr",null,r.a.createElement("th",null,"Date: ",n.data.date),r.a.createElement("th",null,"Base: ",n.data.base)):null,r.a.createElement("tr",null,r.a.createElement(h,{handleSorting:a,state:n}))),r.a.createElement("tbody",null,u.slice(s,c).map(function(e,t){return r.a.createElement("tr",{key:t},n.mobileMode?null:r.a.createElement("td",{style:w.tableCell},n.data.date),n.mobileMode?null:r.a.createElement("td",{style:w.tableCell},n.data.base),r.a.createElement("td",{style:w.tableCell},e.currencyCode),r.a.createElement("td",{style:Object(i.a)({},w.numCell,w.tableCell)},e.value.toFixed(2)))}))),r.a.createElement(m,{handlePagination:o,state:n,arrayLength:u.length}))}var S={paragraph:{textAlign:"center"}};var C=function(e){var t=e.state,n=e.handleSorting,a=e.handlePagination,o=e.handleSearch,l=[];if(t.data.rates)for(var i=0,s=Object.entries(t.data.rates);i<s.length;i++){var u=s[i],d=Object(c.a)(u,2),g=d[0],h=d[1];l.push({currencyCode:g,value:h})}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Currency table"),r.a.createElement("p",{style:S.paragraph},"With a growing number of options for your needs",r.a.createElement("br",null),"Search what you want",r.a.createElement("br",null),"Sort columns",r.a.createElement("br",null),"Change page"),r.a.createElement(x,{arrayForTable:l,state:t,handleSorting:n,handlePagination:a,handleSearch:o}))},k="https://api.exchangeratesapi.io/latest",O=function(e,t){return sessionStorage.setItem("data",JSON.stringify(e)),t(function(t){return Object(i.a)({},t,{data:e})})},j=function(e,t,n){fetch(e,{method:"GET"}).then(function(e){e.ok?e.json().then(function(e){t(e,n)}):alert("Wyst\u0105pi\u0142 b\u0142\u0105d. Przepraszamy")}).catch(function(e){console.error(e)})},P=function(e,t,n){var a=n,r=Math.ceil(a/10);switch(e){case"prev":return t(function(e){return Object(i.a)({},e,{page:1===e.page?1:e.page-1})});case"next":return t(function(e){return Object(i.a)({},e,{page:e.page===r?r:e.page+1})});default:return t(function(e){return Object(i.a)({},e,{page:e.page})})}},L=n(5),K={appStyle:{backgroundImage:"url(".concat(n.n(L).a,")"),minHeight:"100vh",fontFamily:'"Parisienne", cursive',display:"flex",flexDirection:"column",alignItems:"center",fontSize:"calc(10px + 2vmin)",color:"#282c34"}};var M=function(){var e=Object(a.useState)({data:sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):[],page:1,rowsPerPage:10,searchText:"",sortingKey:"none",sorting:"none",mobileMode:!0}),t=Object(c.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(function(){sessionStorage.getItem("data")||j(k,O,o)},[]),Object(a.useLayoutEffect)(function(){var e=function(){return window.innerWidth<600?o(function(e){return Object(i.a)({},e,{mobileMode:!0})}):window.innerWidth>600?o(function(e){return Object(i.a)({},e,{mobileMode:!1})}):void 0};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),r.a.createElement("div",{className:"App",style:K.appStyle},r.a.createElement(C,{state:n,handleSorting:function(e){return E(n,e,o)},handlePagination:function(e,t){return P(e,o,t)},handleSearch:function(e){var t=e.target.value;return o(function(e){return Object(i.a)({},e,{page:1,searchText:t})})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[6,1,2]]]);
//# sourceMappingURL=main.99ad97e9.chunk.js.map