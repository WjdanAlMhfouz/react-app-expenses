(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),s=n.n(a),i=(n(13),n(7)),l=n(2),j=n(8),r=(n(14),n(0));var d=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),j=Object(l.a)(i,2),d=j[0],u=j[1],o=Object(c.useState)(""),b=Object(l.a)(o,2),x=b[0],O=b[1];return Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:d,date:new Date(x)};e.saveData(n),s(""),u(""),O("")},children:[Object(r.jsxs)("div",{className:"new-exp__items",children:[Object(r.jsxs)("div",{className:"new-exp__item",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-exp__item",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",value:d,min:"0.01",step:"0.01",onChange:function(e){u(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-exp__item",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",value:x,min:"2019-01-01",max:"2022-12-31",onChange:function(e){O(e.target.value)}})]})]}),Object(r.jsx)("div",{className:"new-exp__button",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})};n(16);var u=function(e){return Object(r.jsx)("div",{className:"new-exp",children:Object(r.jsx)(d,{saveData:function(t){var n=Object(j.a)({},t);e.onAddExp(n)}})})},o=(n(17),n(18),function(e){return Object(r.jsx)("div",{className:"exp-filter",children:Object(r.jsxs)("div",{className:"exp-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(19),n(20);var b=function(e){var t=e.date.toLocaleString("en-EG",{month:"long"}),n=e.date.toLocaleString("en-EG",{day:"2-digit"}),c=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__day",children:n}),Object(r.jsx)("div",{className:"expense-date__year",children:c})]})};var x=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"item",children:[Object(r.jsx)(b,{date:e.date}),Object(r.jsxs)("div",{className:"item__dec",children:[Object(r.jsx)("div",{className:"item__title",children:e.title}),Object(r.jsxs)("div",{className:"item__price",children:["$",e.amount]})]})]})})},O=function(e){var t=Object(c.useState)("2020"),n=Object(l.a)(t,2),a=n[0],s=n[1],i=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{className:"item",children:Object(r.jsxs)("div",{className:"expenses",children:[Object(r.jsx)(o,{selectd:i,onChangeFilter:function(e){s(e)}}),0===i.length?Object(r.jsx)("p",{children:"No Expense!"}):i.map((function(e,t){return Object(r.jsx)(x,{title:e.title,amount:e.amount,date:e.date},t)}))]})})},m=[{title:"Grocery",amount:"260",date:new Date(2021,4,1)},{title:"Car Insurance",amount:"290",date:new Date(2021,5,1)}];var h=function(){var e=Object(c.useState)(m),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title",children:"Apps "}),Object(r.jsx)("h2",{className:"title",children:"Expenses items "}),Object(r.jsx)(u,{onAddExp:function(e){a((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(r.jsx)(O,{items:n})]})};s.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.1c5452e5.chunk.js.map