(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(1),c=n(2),u={ASC:"asc",DESC:"desc",NONE:"none"},s=function(e,t,n){switch(e.sorting){case u.NONE:return n(function(e){return Object(i.a)({},e,{sortingKey:t,sorting:u.ASC})});case u.ASC:return n(function(e){return Object(i.a)({},e,{sortingKey:t,sorting:u.DESC})});case u.DESC:return n(function(e){return Object(i.a)({},e,{sortingKey:t,sorting:u.ASC})});default:return n(function(e){return Object(i.a)({},e,{sortingKey:u.NONE,sorting:u.NONE})})}},d={height:"25px"};function g(e){switch(e.sorting){case u.DESC:return r.a.createElement("div",{style:d},"\u2191");case u.ASC:return r.a.createElement("div",{style:d},"\u2193");default:return r.a.createElement("div",{style:d})}}var m={header:{paddingTop:"20px",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",fontSize:"20px"},headerChildren:{display:"flex",flexDirection:"column"},headerLeft:{borderTopLeftRadius:"25px"},headerRight:{borderTopRightRadius:"25px"},valueStyle:{width:"200px"}};function h(e){var t=e.state,n=e.handleSorting;return r.a.createElement(r.a.Fragment,null,t.mobileMode?null:r.a.createElement("th",{style:Object(i.a)({},m.header,m.headerLeft),onClick:function(){return n("date")}},r.a.createElement("div",{style:m.headerChildren},"Stock exchange date",r.a.createElement(g,{sorting:"date"===t.sortingKey?t.sorting:null}))),t.mobileMode?null:r.a.createElement("th",{style:m.header,onClick:function(){return n("base")}},r.a.createElement("div",{style:m.headerChildren},"Base currency",r.a.createElement(g,{sorting:"base"===t.sortingKey?t.sorting:null}))),r.a.createElement("th",{style:t.mobileMode?Object(i.a)({},m.header,m.headerLeft):m.header,onClick:function(){return n("currencyCode")}},r.a.createElement("div",{style:m.headerChildren},"Currency",r.a.createElement(g,{sorting:"currencyCode"===t.sortingKey?t.sorting:null}))),r.a.createElement("th",{style:Object(i.a)({},m.header,m.headerRight,m.valueStyle),onClick:function(){return n("value")}},r.a.createElement("div",{style:m.headerChildren},"Value",r.a.createElement(g,{sorting:"value"===t.sortingKey?t.sorting:null}))))}var f={PREV:"prev",NEXT:"next"},p=function(e,t,n){switch(e){case f.PREV:return t(function(e){return Object(i.a)({},e,{page:1===e.page?1:e.page-1})});case f.NEXT:return t(function(e){return Object(i.a)({},e,{page:e.page===n?n:e.page+1})});default:return t(function(t){return Object(i.a)({},t,{page:(n=e,a=t.page,isNaN(Number(n))?a:Number(n))});var n,a})}},E={footer:{display:"flex",width:"90vw"},footerBtns:{textAlign:"center",cursor:"pointer",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"40vw"},footerPage:{textAlign:"center",backgroundColor:"darkslategrey",color:"white",border:"1px solid black",width:"10vw"},footerRight:{borderBottomRightRadius:"25px"},footerLeft:{borderBottomLeftRadius:"25px"}};function b(e){var t=e.handlePagination,n=e.state,a=e.pageLimit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:E.footer},r.a.createElement("div",{style:Object(i.a)({},E.footerBtns,E.footerLeft),onClick:function(){return t(f.PREV,a)}},"Previous"),r.a.createElement("div",{style:E.footerPage},r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Page:\xa0",r.a.createElement("select",{value:n.page,onChange:function(e){return t(e.target.value,a)}},a?function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t}(a).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}):null)))),r.a.createElement("div",{style:Object(i.a)({},E.footerBtns,E.footerRight),onClick:function(){return t(f.NEXT,a)}},"Next")))}var S={input:{borderRadius:"25px",height:"23px",textAlign:"center"},form:{marginBottom:"15px"}};function y(e){var t=e.handleSearch;return r.a.createElement("form",{style:S.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Search:\xa0",r.a.createElement("input",{style:S.input,onKeyUp:function(e){return t(e)}})))}var v=function(e,t){var n=e.searchText,a=t.filter(function(e){return Object.keys(e).some(function(t){return-1!==e[t].toString().toLowerCase().indexOf(n.toLowerCase())})});return a.length?function(e,t){var n=e.sorting,a=e.sortingKey;switch(n){case u.ASC:return function(e,t){return e.sort(function(e,n){var a=e[t],r=n[t],l=0;return a>r?l=1:a<r&&(l=-1),l})}(t,a);case u.DESC:return function(e,t){return e.sort(function(e,n){var a=e[t],r=n[t],l=0;return a>r?l=-1:a<r&&(l=1),l})}(t,a);default:return t}}(e,a):a},C={input:{borderRadius:"25px",height:"23px",textAlign:"center"},form:{marginBottom:"15px"}};function D(e){var t=e.data,n=e.isLoading,a=e.handleSelect;return r.a.createElement("form",{style:C.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Change base:\xa0",n?r.a.createElement("input",{readOnly:!0,style:C.input,value:"Loading..."}):r.a.createElement("select",{style:C.input,value:t.base,onChange:function(e){return a(e)}},t.rates?Object.keys(t.rates).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}):null)))}var N={table:{width:"90vw"},tableCell:{border:"1px solid black",fontSize:"20px"},nonNumCell:{textAlign:"center"},numCell:{textAlign:"end",paddingRight:"15px"}};function O(e){var t=e.arrayForTable,n=e.state,a=e.handleSorting,l=e.handlePagination,o=e.handleSearch,c=e.handleSelect,u=n.rowsPerPage*n.page,s=u-n.rowsPerPage,d=v(n,t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{data:n.data,isLoading:n.isLoading,handleSelect:c}),r.a.createElement(y,{handleSearch:o}),r.a.createElement("table",{style:N.table},r.a.createElement("thead",null,n.mobileMode?r.a.createElement("tr",null,r.a.createElement("th",null,"Date: ",n.data.date),r.a.createElement("th",null,"Base: ",n.data.base)):null,r.a.createElement("tr",null,r.a.createElement(h,{handleSorting:a,state:n}))),r.a.createElement("tbody",null,d.length?d.slice(s,u).map(function(e,t){return r.a.createElement("tr",{key:t},n.mobileMode?null:r.a.createElement("td",{style:Object(i.a)({},N.nonNumCell,N.tableCell)},n.data.date),n.mobileMode?null:r.a.createElement("td",{style:Object(i.a)({},N.nonNumCell,N.tableCell)},n.data.base),r.a.createElement("td",{style:Object(i.a)({},N.nonNumCell,N.tableCell)},e.currencyCode),r.a.createElement("td",{style:Object(i.a)({},N.numCell,N.tableCell)},e.value.toFixed(2)))}):r.a.createElement("tr",null,r.a.createElement("td",{style:N.nonNumCell,colSpan:n.mobileMode?2:4},r.a.createElement("b",null,"Loading..."))))),r.a.createElement(b,{handlePagination:l,state:n,pageLimit:Math.ceil(d.length/10)}))}var R={paragraph:{textAlign:"center"}},P=function(e){return e?Object.entries(e).map(function(e){var t=Object(c.a)(e,2);return{currencyCode:t[0],value:t[1]}}):[]};var L=function(e){var t=e.state,n=e.handleSorting,a=e.handlePagination,l=e.handleSearch,o=e.handleSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Currency table"),t.data.isDemo?r.a.createElement("p",{style:R.paragraph},"Oops, something went wrong with the download. The presented data is a demo."):r.a.createElement("p",{style:R.paragraph},"The latest data for the ",t.data.base," currency."),r.a.createElement(O,{arrayForTable:P(t.data.rates),state:t,handleSorting:n,handlePagination:a,handleSearch:l,handleSelect:o}))},x="https://api.apilayer.com/exchangerates_data/latest",w="https://api.apilayer.com/exchangerates_data/latest?base=",A=function(e,t){return sessionStorage.setItem("data",JSON.stringify(e)),t(function(t){return Object(i.a)({},t,{data:e,isLoading:!1})})},M={isDemo:!0,base:"EUR",date:"2022-10-18",rates:{AED:3.613087,AFN:83.770669,ALL:116.710322,AMD:393.224322,ANG:1.756439,AOA:436.363364,ARS:150.01395,AUD:1.564358,AWG:1.773093,AZN:1.668477,BAM:1.955126,BBD:1.967731,BDT:100.085139,BGN:1.95267,BHD:.37084,BIF:2014.4142,BMD:.983686,BND:1.389599,BOB:6.734074,BRL:5.195436,BSD:.974579,BTC:50276113e-12,BTN:80.292254,BWP:13.063859,BYN:2.471035,BYR:19280.237265,BZD:1.964432,CAD:1.351176,CDF:2011.636633,CHF:.979244,CLF:.034646,CLP:955.994933,CNY:7.079682,COP:4657.761033,CRC:600.381991,CUC:.983686,CUP:26.067668,CVE:110.225285,CZK:24.568038,DJF:173.491018,DKK:7.43864,DOP:51.944868,DZD:137.826105,EGP:19.379001,ERN:14.755284,ETB:51.572891,EUR:1,FJD:2.274527,FKP:.868127,GBP:.869711,GEL:2.71008,GGP:.868127,GHS:11.450874,GIP:.868127,GMD:55.332159,GNF:8407.541674,GTQ:7.662261,GYD:203.85655,HKD:7.721435,HNL:24.078059,HRK:7.527258,HTG:122.791758,HUF:412.424945,IDR:15220.763635,ILS:3.473226,IMP:.868127,INR:80.97454,IQD:1422.337527,IRR:41659.084551,ISK:141.099691,JEP:.868127,JMD:148.801924,JOD:.697436,JPY:146.742773,KES:119.173701,KGS:81.368209,KHR:4018.552102,KMF:492.088831,KPW:885.316882,KRW:1401.156807,KWD:.305051,KYD:.812116,KZT:461.208514,LAK:16900.182611,LBP:1473.684008,LKR:356.684911,LRD:151.24185,LSL:17.725938,LTL:2.904568,LVL:.595021,LYD:4.91308,MAD:10.753625,MDL:18.925773,MGA:4152.577134,MKD:61.522785,MMK:2046.594221,MNT:3304.96236,MOP:7.879561,MRO:351.175581,MUR:43.182466,MVR:15.212688,MWK:996.433176,MXN:19.66836,MYR:4.638107,MZN:62.788962,NAD:17.834223,NGN:428.453836,NIO:35.05437,NOK:10.379477,NPR:128.472629,NZD:1.732344,OMR:.378747,PAB:.974549,PEN:3.890498,PGK:3.433898,PHP:57.939575,PKR:213.672058,PLN:4.80983,PYG:6963.93246,QAR:3.581845,RON:4.936119,RSD:117.284575,RUB:60.717972,RWF:1038.91792,SAR:3.695217,SBD:8.03022,SCR:13.397879,SDG:559.224069,SEK:10.91316,SGD:1.39706,SHP:1.354931,SLL:16476.7331,SOS:559.222753,SRD:28.055665,STD:20360.305344,SVC:8.526884,SYP:2471.539551,SZL:17.672492,THB:37.458695,TJS:9.876841,TMT:3.4429,TND:3.204352,TOP:2.417456,TRY:18.288363,TTD:6.609086,TWD:31.479416,TZS:2293.954522,UAH:35.816941,UGX:3732.455184,USD:.983686,UYU:40.214102,UZS:10847.921179,VND:24036.357019,VUV:123.108142,WST:2.798523,XAF:655.747397,XAG:.052568,XAU:.00595,XCD:2.658459,XDR:.763437,XOF:655.740733,XPF:119.640768,YER:246.167002,ZAR:17.754442,ZMK:8854.359358,ZMW:15.533519,ZWL:316.746354},success:!0,timestamp:1666083364},T=function(e,t,n){n(function(e){return Object(i.a)({},e,{isLoading:!0})}),fetch(e,{method:"GET",headers:{apikey:"1BixjhzFKYDVSQj2MqTS2XkplEsqjklG"}}).then(function(e){e.ok?e.json().then(function(e){e.success?t(e,n):t(M,n)}):t(M,n)}).catch(function(e){console.error("TEST",e),t(M,n)})},B=n(5),K={appStyle:{backgroundImage:"url(".concat(n.n(B).a,")"),minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"calc(10px + 2vmin)",color:"#282c34"}};var j=function(){var e=Object(a.useState)({data:sessionStorage.getItem("data")?JSON.parse(sessionStorage.getItem("data")):[],page:1,rowsPerPage:10,searchText:"",sortingKey:u.NONE,sorting:u.NONE,mobileMode:!0,isLoading:!1}),t=Object(c.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)(function(){sessionStorage.getItem("data")||T(x,A,l)},[]),Object(a.useLayoutEffect)(function(){var e=function(){return window.innerWidth<600?l(function(e){return Object(i.a)({},e,{mobileMode:!0})}):window.innerWidth>600?l(function(e){return Object(i.a)({},e,{mobileMode:!1})}):void 0};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),r.a.createElement("div",{className:"App",style:K.appStyle},r.a.createElement(L,{state:n,handleSorting:function(e){return l(function(e){return Object(i.a)({},e,{page:1})}),s(n,e,l)},handlePagination:function(e,t){return p(e,l,t)},handleSearch:function(e){var t=e.target.value;return l(function(e){return Object(i.a)({},e,{page:1,searchText:t})})},handleSelect:function(e){var t=e.target.value;T(w+t,A,l)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})},5:function(e,t,n){e.exports=n.p+"static/media/gold-gradient-background.44159229.png"},6:function(e,t,n){e.exports=n(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.15db670a.chunk.js.map