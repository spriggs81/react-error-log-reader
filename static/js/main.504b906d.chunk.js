(this["webpackJsonpreact-error-log-reader"]=this["webpackJsonpreact-error-log-reader"]||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(18),r=n.n(s),i=n(19),l=n(2),j=(n(27),function(e){var t=e.title;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{classID:t.toLowerCase().replace(" ","-"),children:t})})}),d=n.p+"static/media/logo.8ecd8726.png",o=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{className:"logo",children:Object(c.jsx)("img",{src:d})}),Object(c.jsx)("li",{className:"head-title",children:"Error Log Reader"}),Object(c.jsx)("li",{children:Object(c.jsx)(j,{title:"Start Over"})})]}),Object(c.jsx)("hr",{})]})})},u=n(21),b=n(10),h=n(7),f=function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"label",children:Object(c.jsx)("h3",{children:"Number of Pages:"})}),Object(c.jsx)("div",{className:"nums",children:function(e){for(var t=[],n=1;n<=e;n++)t.push(Object(c.jsx)("span",{className:"page-num",children:n},n));return t}(e.page)})]})},O=function(e){var t=function(e){var t=e.target.id.split("-"),n=t[0]+"-"+t[t.length-1];e.target.classList.value.indexOf("menu")>-1===!0&&function(e,t){var n,c=document.querySelectorAll(e),a=Object(h.a)(c);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.id!==t&&s.classList.value.indexOf("hidden")>-1==0&&s.classList.add("hidden")}}catch(r){a.e(r)}finally{a.f()}}(".nested-data",n);var c=document.getElementById(e.target.id);document.getElementById(n).classList.toggle("hidden"),c.classList.toggle("selected")};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:function(e){var n,a=[],s=Object(h.a)(e.subData);try{for(s.s();!(n=s.n()).done;){var r=n.value;a.push(Object(c.jsx)("li",{onClick:t,id:r.title+"-menu-"+e.count,className:"menu",children:r.title},r.title+e.count))}}catch(i){s.e(i)}finally{s.f()}return a}(e.data)})}),Object(c.jsx)("div",{className:"subDisplay",children:function(e){var t,n=[],a=0,s=0,r=function e(t,n,r){for(var i=[],l=[],j="nested",d=0;d<a;d++)j+="-sub";for(var o in a++,r){var u=typeof r[o];if(("string"===u||"number"===u||"boolean"===u)&&"title"!==o&&"data"!==o){var b=n+"-"+o+j+"-no"+t;i.push(Object(c.jsx)("div",{className:"data-sub-key",children:Object(c.jsxs)("section",{children:[Object(c.jsxs)("span",{children:[o,":"]}),Object(c.jsx)("span",{children:"'"+r[o]+"'"})]})},b))}if("object"===u&&"data"!==o){var h=t+ ++s;l.push(Object(c.jsxs)("div",{className:"nested-sub",children:[Object(c.jsxs)("section",{id:o+"-menu-"+t,className:j+"-menu",children:[o,":"]}),Object(c.jsx)("section",{id:o+"-"+t,className:j+"-data hidden",children:e(h,o,r[o])})]}))}}for(var f=0,O=l;f<O.length;f++){var g=O[f];i.push(g)}return i},i=Object(h.a)(e.subData);try{var l=function(){var a=t.value;!function(t){var s=0;for(var i in t){null!=t[i]&&""!=t[i]||(t[i]="null/blank");var l=typeof t[i];if("string"!==l&&"number"!==l&&"boolean"!==l||"title"!==i&&n.push(Object(c.jsxs)("div",{id:a.title+"-"+e.count,className:"data-sub",children:[Object(c.jsxs)("span",{className:"sub-key",children:[i,":"]}),Object(c.jsx)("span",{children:t[i]})]},a.title+e.count+i)),"object"===l){s++;var j=e.count+s,d=Object(c.jsx)("div",{id:a.title+"-"+e.count,className:"nested-data",children:r(j,i,t[i])});n.push(d)}}}(a)};for(i.s();!(t=i.n()).done;)l()}catch(j){i.e(j)}finally{i.f()}return n}(e.data)})]})},g=function(e){var t=function(t,n){var a={},s=[],r=[],i=[],l=0;for(var j in t){var d=t[j],o=typeof d,u=null;"string"!==o&&"number"!==o&&"boolean"!==o||"count"!==j&&(l++,u=Object(c.jsxs)("div",{className:"file-info",children:[Object(c.jsxs)("span",{className:"info-key",children:[j,":"]}),Object(c.jsx)("span",{className:"info-data",children:d})]},j+"-"+l+"-"+t.count),s.push(u)),"object"===o&&(u={title:j,data:d},r.push(u))}if(r.length>0){var b={count:t.count,subData:r};i.push(Object(c.jsx)("div",{className:"sub-data",children:Object(c.jsx)(O,{data:b,toggle:e.toggle})},"subkey-"+b.subData.title+b.count))}return s.length>0&&(a.main=s),i.length>0&&(a.sub=i),a}(e.file);if(t.main&&t.sub)return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"unnested",children:t.main}),Object(c.jsx)("div",{className:"nested",children:t.sub})]});t.main&&!t.sub&&t.main},v=function(e){var t=e.data,n=e.toggle;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Your file's Data:"}),Object(c.jsx)("div",{className:"file-data",children:function(e){var t,a=[],s=0,r=Object(h.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;s++,i.count=s,a.push(Object(c.jsx)("div",{className:"file-row",children:Object(c.jsx)(g,{file:i,toggle:n})},s))}}catch(l){r.e(l)}finally{r.f()}return a}(t)})]})},x=function(e){var t=[],n=Object(a.useState)((function(){return!1})),s=Object(b.a)(n,2),r=(s[0],s[1],Object(a.useState)((function(){return 0}))),i=Object(b.a)(r,2),l=i[0],j=i[1],d=Object(a.useState)((function(){return 250})),o=Object(b.a)(d,2),u=o[0];o[1];return function(e){var n,c=[],a=0,s=Object(h.a)(e);try{for(s.s();!(n=s.n()).done;){var r=n.value;c.push(r),c.length===u&&(t[a]=c,a++,c=[])}}catch(i){s.e(i)}finally{s.f()}c.length>0&&c.length<u&&(t[a]=c,a++,c=[])}(e.data),t.length>0?Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"display",children:[Object(c.jsx)("div",{className:"pages",onClick:function(e){"page-num"===e.target.classList.value&&j(Number(e.target.innerText)-1)},children:Object(c.jsx)(f,{page:t.length})}),Object(c.jsx)(v,{data:t[l],toggle:e.toggle})]})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"noting-display",children:Object(c.jsx)("h1",{children:"Nothing here yet!"})})})},m=function(e){var t=e.toggle,n=Object(a.useState)((function(){return[]})),s=Object(b.a)(n,2),r=s[0],i=s[1],l=function(e){if(e.target.files.length>0){var t=e.target.files[0];j(t)}},j=function(e){var t=new FileReader;t.onload=function(e){!function(e,t){var n="string"==typeof e&&e.length>0&&e;n?t(!1,n):t(!0)}(e.target.result,(function(e,t){!e&&t&&d(t)}))},t.readAsText(e)},d=function(e){!function(e,t){var n=[],c="string"==typeof e&&e.length>0&&e;if(c){var a=c.split("\n");if(a.length>0){for(var s in a)if('{"'===a[s].substring(0,2)){var i=JSON.parse(a[s]);n.push(i),r.push(i)}t(!1,n)}}else t(!0)}(e,(function(e,t){!e&&t&&i((function(e){return[].concat(Object(u.a)(e),[t])}))}))};return r.length<=0?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"collect-file",children:Object(c.jsx)("input",{type:"file",onChange:l})})}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"form-data",children:Object(c.jsx)("input",{type:"file",onChange:l})}),Object(c.jsx)("div",{className:"file-data",children:Object(c.jsx)(x,{data:r,toggle:t})})]})},p=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{children:"This is working"})})},N=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"nav",children:Object(c.jsx)(o,{})}),Object(c.jsx)("div",{className:"main",children:Object(c.jsx)(i.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,Path:"/",component:m,toggle:function(e){console.log(e),alert("Clicked")}}),Object(c.jsx)(l.a,{Path:"/show",component:p})]})})})]})})};r.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.504b906d.chunk.js.map