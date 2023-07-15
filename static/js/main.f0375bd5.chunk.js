(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),c=n(1),i=n(2),u={height:"25px"};function s(e){switch(e.sorting){case"desc":return r.a.createElement("div",{style:u},"\u2191");case"asc":return r.a.createElement("div",{style:u},"\u2193");default:return r.a.createElement("div",{style:u})}}var d={header:{paddingTop:"20px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",fontSize:"20px"},headerChildren:{display:"flex",flexDirection:"column"},headerLeft:{borderTopLeftRadius:"25px"},headerRight:{borderTopRightRadius:"25px"},valueStyle:{width:"200px"}};function h(e){var t=e.state,n=e.handleSorting;return r.a.createElement(r.a.Fragment,null,t.mobileMode?null:r.a.createElement("th",{style:Object(c.a)({},d.header,d.headerLeft),onClick:function(){return n("date")}},r.a.createElement("div",{style:d.headerChildren},"Stock exchange date",r.a.createElement(s,{sorting:"date"===t.sortingKey?t.sorting:null}))),t.mobileMode?null:r.a.createElement("th",{style:d.header,onClick:function(){return n("base")}},r.a.createElement("div",{style:d.headerChildren},"Base currency",r.a.createElement(s,{sorting:"base"===t.sortingKey?t.sorting:null}))),r.a.createElement("th",{style:t.mobileMode?Object(c.a)({},d.header,d.headerLeft):d.header,onClick:function(){return n("currencyCode")}},r.a.createElement("div",{style:d.headerChildren},"Currency",r.a.createElement(s,{sorting:"currencyCode"===t.sortingKey?t.sorting:null}))),r.a.createElement("th",{style:Object(c.a)({},d.header,d.headerRight,d.valueStyle),onClick:function(){return n("value")}},r.a.createElement("div",{style:d.headerChildren},"Value",r.a.createElement(s,{sorting:"value"===t.sortingKey?t.sorting:null}))))}var g={footer:{display:"flex",width:"90vw"},footerBtns:{textAlign:"center",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"40vw"},footerPage:{textAlign:"center",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"10vw"},footerRight:{borderBottomRightRadius:"25px"},footerLeft:{borderBottomLeftRadius:"25px"}};function m(e){var t=e.handlePagination,n=e.state,a=e.arrayLength;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:g.footer},r.a.createElement("div",{style:Object(c.a)({},g.footerBtns,g.footerLeft),onClick:function(){return t("prev",a)}},"Previous"),r.a.createElement("div",{style:g.footerPage},"Page: ",n.page),r.a.createElement("div",{style:Object(c.a)({},g.footerBtns,g.footerRight),onClick:function(){return t("next",a)}},"Next")))}var f={input:{borderRadius:"25px",height:"23px",textAlign:"center"},form:{marginBottom:"15px"}};function p(e){var t=e.handleSearch;return r.a.createElement("form",{style:f.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Search:\xa0",r.a.createElement("input",{style:f.input,onKeyUp:function(e){return t(e)}})))}var b=function(e,t){return t.filter(function(t){return Object.keys(t).some(function(n){return-1!==t[n].toString().toLowerCase().indexOf(e.toLowerCase())})})},E=function(e,t,n){switch(e.sorting){case"none":return n(function(e){return Object(c.a)({},e,{sortingKey:t,sorting:"asc"})});case"asc":return n(function(e){return Object(c.a)({},e,{sortingKey:t,sorting:"desc"})});case"desc":return n(function(e){return Object(c.a)({},e,{sortingKey:t,sorting:"asc"})});default:return n(function(e){return Object(c.a)({},e,{sortingKey:"none",sorting:"none"})})}},y=function(e,t){var n=e.sorting,a=e.sortingKey;switch(n){case"asc":return function(e,t){return e.sort(function(e,n){var a=e[t],r=n[t],o=0;return a>r?o=1:a<r&&(o=-1),o})}(t,a);case"desc":return function(e,t){return e.sort(function(e,n){var a=e[t],r=n[t],o=0;return a>r?o=-1:a<r&&(o=1),o})}(t,a);default:return t}},S={input:{borderRadius:"25px",height:"23px",textAlign:"center"},form:{marginBottom:"15px"}};function v(e){var t=e.data,n=e.handleSelect;return r.a.createElement("form",{style:S.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Change base:\xa0",r.a.createElement("select",{style:S.input,defaultValue:t.base,onChange:function(e){return n(e)}},Object.keys(t.rates).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))}var C={table:{width:"90vw"},tableCell:{border:"1px solid black",fontSize:"20px"},nonNumCell:{textAlign:"center"},numCell:{textAlign:"end",paddingRight:"15px"}};function D(e){var t=e.arrayForTable,n=e.state,a=e.handleSorting,o=e.handlePagination,l=e.handleSearch,i=e.handleSelect,u=n.rowsPerPage*n.page,s=u-n.rowsPerPage,d=b(n.searchText,t);return d!==[]&&y(n,d),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{data:n.data,handleSelect:i}),r.a.createElement(p,{handleSearch:l}),r.a.createElement("table",{style:C.table},r.a.createElement("thead",null,n.mobileMode?r.a.createElement("tr",null,r.a.createElement("th",null,"Date: ",n.data.date),r.a.createElement("th",null,"Base: ",n.data.base)):null,r.a.createElement("tr",null,r.a.createElement(h,{handleSorting:a,state:n}))),r.a.createElement("tbody",null,d.slice(s,u).map(function(e,t){return r.a.createElement("tr",{key:t},n.mobileMode?null:r.a.createElement("td",{style:Object(c.a)({},C.nonNumCell,C.tableCell)},n.data.date),n.mobileMode?null:r.a.createElement("td",{style:Object(c.a)({},C.nonNumCell,C.tableCell)},n.data.base),r.a.createElement("td",{style:Object(c.a)({},C.nonNumCell,C.tableCell)},e.currencyCode),r.a.createElement("td",{style:Object(c.a)({},C.numCell,C.tableCell)},e.value.toFixed(2)))}))),r.a.createElement(m,{handlePagination:o,state:n,arrayLength:d.length}))}var R={paragraph:{textAlign:"center"}};var x=function(e){var t=e.state,n=e.handleSorting,a=e.handlePagination,o=e.handleSearch,l=e.handleSelect,c=[];if(t.data.rates)for(var u=0,s=Object.entries(t.data.rates);u<s.length;u++){var d=s[u],h=Object(i.a)(d,2),g=h[0],m=h[1];c.push({currencyCode:g,value:m})}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Currency table"),r.a.createElement("p",{style:R.paragraph},"The latest data for the ",t.data.base," currency.",r.a.createElement("br",null),"More options and possibilities coming soon."),r.a.createElement(D,{arrayForTable:c,state:t,handleSorting:n,handlePagination:a,handleSearch:o,handleSelect:l}))},O="https://api.apilayer.com/exchangerates_data/latest",P="https://api.apilayer.com/exchangerates_data/latest?base=",w=function(e,t){return sessionStorage.setItem("data",JSON.stringify(e)),t(function(t){return Object(c.a)({},t,{data:e})})},L={base:"EUR",date:"2022-10-18",rates:{AED:3.613087,AFN:83.770669,ALL:116.710322,AMD:393.224322,ANG:1.756439,AOA:436.363364,ARS:150.01395,AUD:1.564358,AWG:1.773093,AZN:1.668477,BAM:1.955126,BBD:1.967731,BDT:100.085139,BGN:1.95267,BHD:.37084,BIF:2014.4142,BMD:.983686,BND:1.389599,BOB:6.734074,BRL:5.195436,BSD:.974579,BTC:50276113e-12,BTN:80.292254,BWP:13.063859,BYN:2.471035,BYR:19280.237265,BZD:1.964432,CAD:1.351176,CDF:2011.636633,CHF:.979244,CLF:.034646,CLP:955.994933,CNY:7.079682,COP:4657.761033,CRC:600.381991,CUC:.983686,CUP:26.067668,CVE:110.225285,CZK:24.568038,DJF:173.491018,DKK:7.43864,DOP:51.944868,DZD:137.826105,EGP:19.379001,ERN:14.755284,ETB:51.572891,EUR:1,FJD:2.274527,FKP:.868127,GBP:.869711,GEL:2.71008,GGP:.868127,GHS:11.450874,GIP:.868127,GMD:55.332159,GNF:8407.541674,GTQ:7.662261,GYD:203.85655,HKD:7.721435,HNL:24.078059,HRK:7.527258,HTG:122.791758,HUF:412.424945,IDR:15220.763635,ILS:3.473226,IMP:.868127,INR:80.97454,IQD:1422.337527,IRR:41659.084551,ISK:141.099691,JEP:.868127,JMD:148.801924,JOD:.697436,JPY:146.742773,KES:119.173701,KGS:81.368209,KHR:4018.552102,KMF:492.088831,KPW:885.316882,KRW:1401.156807,KWD:.305051,KYD:.812116,KZT:461.208514,LAK:16900.182611,LBP:1473.684008,LKR:356.684911,LRD:151.24185,LSL:17.725938,LTL:2.904568,LVL:.595021,LYD:4.91308,MAD:10.753625,MDL:18.925773,MGA:4152.577134,MKD:61.522785,MMK:2046.594221,MNT:3304.96236,MOP:7.879561,MRO:351.175581,MUR:43.182466,MVR:15.212688,MWK:996.433176,MXN:19.66836,MYR:4.638107,MZN:62.788962,NAD:17.834223,NGN:428.453836,NIO:35.05437,NOK:10.379477,NPR:128.472629,NZD:1.732344,OMR:.378747,PAB:.974549,PEN:3.890498,PGK:3.433898,PHP:57.939575,PKR:213.672058,PLN:4.80983,PYG:6963.93246,QAR:3.581845,RON:4.936119,RSD:117.284575,RUB:60.717972,RWF:1038.91792,SAR:3.695217,SBD:8.03022,SCR:13.397879,SDG:559.224069,SEK:10.91316,SGD:1.39706,SHP:1.354931,SLL:16476.7331,SOS:559.222753,SRD:28.055665,STD:20360.305344,SVC:8.526884,SYP:2471.539551,SZL:17.672492,THB:37.458695,TJS:9.876841,TMT:3.4429,TND:3.204352,TOP:2.417456,TRY:18.288363,TTD:6.609086,TWD:31.479416,TZS:2293.954522,UAH:35.816941,UGX:3732.455184,USD:.983686,UYU:40.214102,UZS:10847.921179,VND:24036.357019,VUV:123.108142,WST:2.798523,XAF:655.747397,XAG:.052568,XAU:.00595,XCD:2.658459,XDR:.763437,XOF:655.740733,XPF:119.640768,YER:246.167002,ZAR:17.754442,ZMK:8854.359358,ZMW:15.533519,ZWL:316.746354},success:!0,timestamp:1666083364},M=function(e,t,n){fetch(e,{method:"GET",headers:{apikey:"1BixjhzFKYDVSQj2MqTS2XkplEsqjklG"}}).then(function(e){e.ok?e.json().then(function(e){e.success?t(e,n):t(L,n)}):t(L,n)}).catch(function(e){console.error("TEST",e),t(L,n)})},B=function(e,t,n){var a=n,r=Math.ceil(a/10);switch(e){case"prev":return t(function(e){return Object(c.a)({},e,{page:1===e.page?1:e.page-1})});case"next":return t(function(e){return Object(c.a)({},e,{page:e.page===r?r:e.page+1})});default:return t(function(e){return Object(c.a)({},e,{page:e.page})})}},K=n(5),N={appStyle:{backgroundImage:"url(".concat(n.n(K).a,")"),minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"calc(10px + 2vmin)",color:"#282c34"}};var T=function(){var e=Object(a.useState)({data:sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):[],page:1,rowsPerPage:10,searchText:"",sortingKey:"none",sorting:"none",mobileMode:!0}),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)(function(){sessionStorage.getItem("data")||M(O,w,o)},[]),Object(a.useLayoutEffect)(function(){var e=function(){return window.innerWidth<600?o(function(e){return Object(c.a)({},e,{mobileMode:!0})}):window.innerWidth>600?o(function(e){return Object(c.a)({},e,{mobileMode:!1})}):void 0};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),r.a.createElement("div",{className:"App",style:N.appStyle},r.a.createElement(x,{state:n,handleSorting:function(e){return E(n,e,o)},handlePagination:function(e,t){return B(e,o,t)},handleSearch:function(e){var t=e.target.value;return o(function(e){return Object(c.a)({},e,{page:1,searchText:t})})},handleSelect:function(e){var t=e.target.value;M(P+t,w,o)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},5:function(e,t,n){e.exports=n.p+"static/media/gold-gradient-background.44159229.png"},6:function(e,t,n){e.exports=n(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.f0375bd5.chunk.js.map