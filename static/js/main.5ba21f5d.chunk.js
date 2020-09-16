(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/gold-gradient-background.44159229.png"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=(a(11),a(2)),i=a(1),u={none:{display:"none"},up:{display:"inline-block",padding:"10px",transform:"rotate(-90deg)"},down:{display:"inline-block",padding:"10px",transform:"rotate(90deg)"}},s=u.none;function d(e){switch(e.sorting){case"desc":s=u.up;break;case"asc":s=u.down;break;default:s=u.none}return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:s},">"))}var g={header:{cursor:"pointer",backgroundColor:"darkslategrey",color:"white"},headerLeft:{borderTopLeftRadius:"25px"},headerRight:{borderTopRightRadius:"25px"}};function h(e){var t=e.state,a=e.handleSorting;return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{style:Object(i.a)({},g.header,g.headerLeft),onClick:function(){return a("date")}},"Stock exchange date","date"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):null),r.a.createElement("th",{style:g.header,onClick:function(){return a("base")}},"Base currency","base"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):null),r.a.createElement("th",{style:g.header,onClick:function(){return a("currencyCode")}},"Currency","currencyCode"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):null),r.a.createElement("th",{style:Object(i.a)({},g.header,g.headerRight),onClick:function(){return a("value")}},"Value","value"===t.sortingKey?r.a.createElement(d,{sorting:t.sorting}):null))}var f={footer:{display:"flex",width:"90vw"},footerBtns:{textAlign:"center",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"40vw"},footerPage:{textAlign:"center",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"10vw"},footerRight:{borderBottomRightRadius:"25px"},footerLeft:{borderBottomLeftRadius:"25px"}};function m(e){var t=e.handlePagination,a=e.state,n=e.arrayLength;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:f.footer},r.a.createElement("div",{style:Object(i.a)({},f.footerBtns,f.footerLeft),onClick:function(){return t("prev",n)}},"Previous"),r.a.createElement("div",{style:f.footerPage},"Page: ",a.page),r.a.createElement("div",{style:Object(i.a)({},f.footerBtns,f.footerRight),onClick:function(){return t("next",n)}},"Next")))}var p={input:{borderRadius:"25px",height:"23px"}};function y(e){var t=e.handleSearch,a=e.arrayForTable;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",null,"Search:",r.a.createElement("input",{style:p.input,onKeyUp:function(e){return t(e,a)}}))))}var b={table:{width:"90vw"},numCell:{display:"flex",justifyContent:"flex-end"}};function E(e){var t=e.arrayForTable,a=e.state,n=e.handleSorting,o=e.handlePagination,l=e.handleSearch,c=a.rowsPerPage*a.page,i=c-a.rowsPerPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{handleSearch:l,arrayForTable:t}),r.a.createElement("table",{style:b.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(h,{handleSorting:n,state:a}))),r.a.createElement("tbody",null,t.slice(i,c).map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,a.data.date),r.a.createElement("td",null,a.data.base),r.a.createElement("td",null,e.currencyCode),r.a.createElement("td",null,e.value))}))),r.a.createElement(m,{handlePagination:o,state:a,arrayLength:t.length}))}var v=function(e){var t=e.state,a=e.handleSorting,n=e.handlePagination,o=e.handleSearch,l=[];if(t.data.rates)for(var i=0,u=Object.entries(t.data.rates);i<u.length;i++){var s=u[i],d=Object(c.a)(s,2),g=d[0],h=d[1];l.push({currencyCode:g,value:h})}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Currency table"),r.a.createElement("p",null,"With a growing number of options for your needs"),r.a.createElement(E,{arrayForTable:l,state:t,handleSorting:a,handlePagination:n,handleSearch:o}))},w="https://api.exchangeratesapi.io/latest",k=function(e,t){return sessionStorage.setItem("data",JSON.stringify(e)),t(function(t){return Object(i.a)({},t,{data:e})})},S=function(e,t,a){fetch(e,{method:"GET"}).then(function(e){e.ok?e.json().then(function(e){t(e,a)}):alert("Wyst\u0105pi\u0142 b\u0142\u0105d. Przepraszamy")}).catch(function(e){console.error(e)})},x=function(e,t,a){var n=a-1,r=Math.ceil(n/10);switch(e){case"prev":return t(function(e){return Object(i.a)({},e,{page:1===e.page?1:e.page-1})});case"next":return t(function(e){return Object(i.a)({},e,{page:e.page===r?r:e.page+1})});default:return t(function(e){return Object(i.a)({},e,{page:e.page})})}},C=a(5),O={appStyle:{backgroundImage:"url(".concat(a.n(C).a,")")}};var P=function(){var e=Object(n.useState)({data:sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):[],page:1,rowsPerPage:10,sortingKey:null,sorting:null}),t=Object(c.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){sessionStorage.getItem("data")||S(w,k,o)},[]),r.a.createElement("div",{className:"App",style:O.appStyle},r.a.createElement(v,{state:a,handleSorting:function(e){console.log(e)},handlePagination:function(e,t){x(e,o,t)},handleSearch:function(e,t){var a=e.target.value,n=t.filter(function(e){return Object.keys(e).some(function(t){return-1!==e[t].toString().toLowerCase().indexOf(a)})});console.log(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[6,1,2]]]);
//# sourceMappingURL=main.5ba21f5d.chunk.js.map