(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{59:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(0),a=c.n(s),r=c(7),o=c.n(r),i=(c(59),c(32)),l=c.n(i),d=c(41),u=c(11),j=(c(61),c(103)),f=c(104),h=c(96),v=c(18),b=(c(62),c(100));var O=function(e){var t=e.title,c=e.cases,s=e.isRed,a=e.active,r=e.total,o=Object(v.a)(e,["title","cases","isRed","active","total"]);return Object(n.jsxs)(h.a,{onClick:o.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(s&&"infoBox--red"),children:[Object(n.jsx)(b.a,{color:"textSecondary",className:"infoBox_title",children:t}),Object(n.jsx)("h2",{className:"infoBox_cases ".concat(!s&&"infoBox_cases--green"),children:c}),Object(n.jsxs)(b.a,{color:"textSecondary",className:"infoBox_total",children:["Total-",r]})]})},p=c(102),x=c(106),m=(c(66),c(47)),y=c(25),N=c.n(y),g=c(105),C=c(101),w={cases:{multiplier:800,option:{color:"#cc1034",fillColor:"#cc1034"}},recovered:{multiplier:1200,option:{color:"#7dd71d",fillColor:"#7dd71d"}},deaths:{multiplier:2e3,option:{color:"#ff6c47",fillColor:"#ff6c47"}}},S=function(e){var t=Object(m.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(g.a,{center:[e.countryInfo.lat,e.countryInfo.long],pathOptions:w[t].option,fillOpacity:.4,radius:Math.sqrt(e[t])*w[t].multiplier,children:Object(n.jsx)(C.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases:",N()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered:",N()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths:",N()(e.deaths).format("0,0")]})]})})})}))};var k=function(e){var t=e.countries,c=e.casesType,s=e.center,a=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(p.a,{center:s,zoom:a,children:[Object(n.jsx)(x.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),_(t,c)]})})};c(67);var I=function(e){var t=e.countries;return Object(n.jsxs)("div",{className:"table",children:[t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:N()(c).format("0,0")})})]})})),";"]})};c(68);var R=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)("Worldwide"),o=Object(u.a)(r,2),i=o[0],v=o[1],b=Object(s.useState)({}),p=Object(u.a)(b,2),x=p[0],m=p[1],y=Object(s.useState)([]),N=Object(u.a)(y,2),g=N[0],C=N[1],w=Object(s.useState)({lat:34.80746,lng:-40.4796}),_=Object(u.a)(w,2),R=_[0],B=_[1],T=Object(s.useState)(3),W=Object(u.a)(T,2),z=W[0],D=W[1],E=Object(s.useState)([]),M=Object(u.a)(E,2),J=M[0],q=M[1],A=Object(s.useState)("cases"),K=Object(u.a)(A,2),L=K[0],V=K[1];Object(s.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){m(e)}))}),[]),Object(s.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));q(e),a(t);var c=S(e);C(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var F=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="Worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){v(c),m(e),B("Worldwide"===c?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),D("Worldwide"===c?3:4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app_left",children:[Object(n.jsxs)("div",{className:"app_header",children:[Object(n.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(n.jsxs)(j.a,{className:"sel",variant:"outlined",onChange:F,value:i,children:[Object(n.jsx)(f.a,{value:"Worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(f.a,{value:e.value,children:e.name})}))]})]}),Object(n.jsxs)("div",{className:"app_stats",children:[Object(n.jsx)(O,{isRed:!0,onClick:function(e){return V("cases")},active:"cases"===L,className:"cases_info",title:"Coronavirus Cases",cases:x.todayCases,total:x.cases,Total:!0}),Object(n.jsx)(O,{onClick:function(e){return V("recovered")},active:"recovered"===L,className:"recovered_info",title:"Recovered",cases:x.todayRecovered,total:x.recovered,Total:!0}),Object(n.jsx)(O,{isRed:!0,onClick:function(e){return V("deaths")},active:"deaths"===L,className:"death_info",title:"Deaths",cases:x.todayDeaths,total:x.deaths,Total:!0})]}),Object(n.jsx)(k,{casesType:L,countries:J,center:R,zoom:z})]}),Object(n.jsx)("div",{className:"app_right",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)("h3",{children:"Live cases by country"}),Object(n.jsx)(I,{countries:g})]})})]})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.1e00502c.chunk.js.map