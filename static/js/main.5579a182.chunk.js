(this["webpackJsonpredux-form-task"]=this["webpackJsonpredux-form-task"]||[]).push([[0],{189:function(e,t,n){},190:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(35),r=n.n(c),s=n(13),o=n(6),a=n(193),l=Object(o.b)({form:a.a}),j=(window.devToolsExtension?window.devToolsExtension()(o.c):o.c)(l),d=n(53),u=n.n(d),b=n(77),h=n(78),p=n(192),m=n(191),x=n(194),O=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=2?t:t.length<=5?"".concat(t.slice(0,2),":").concat(t.slice(2)):"".concat(t.slice(0,2),":").concat(t.slice(2,4),":").concat(t.slice(4,6))},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e){var n=e.replace(/[^\d]/g,"");return"spiciness"===t?Number(n)>10?10:Number(n.slice(0,2)):"diameter"===t&&n.length>2?Number("".concat(n.slice(0,2),".").concat(n.slice(2))):Number(n)}},v=n(3),y=function(e){var t=e.handleSubmit,n=e.dishType;return Object(v.jsxs)("form",{onSubmit:t,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"name",children:"Dish Name"}),Object(v.jsx)(p.a,{name:"name",component:"input",type:"text",required:!0})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"preparation_time",children:"Preparation Time (hh:mm:ss)"}),Object(v.jsx)(p.a,{name:"preparation_time",component:"input",type:"text",normalize:O,required:!0})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"type",children:"Type"}),Object(v.jsxs)(p.a,{name:"type",component:"select",required:!0,children:[Object(v.jsx)("option",{value:"",children:"Please choose the type"}),Object(v.jsx)("option",{value:"pizza",children:"Pizza"}),Object(v.jsx)("option",{value:"soup",children:"Soup"}),Object(v.jsx)("option",{value:"sandwich",children:"Sandwich"})]})]}),"pizza"===n&&Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"no_of_slices",children:"Number of Slices: "}),Object(v.jsx)(p.a,{name:"no_of_slices",component:"input",type:"text",normalize:f,required:!0}),Object(v.jsx)("label",{htmlFor:"Diameter",children:"Diameter: "}),Object(v.jsx)(p.a,{name:"diameter",component:"input",type:"text",normalize:function(e){return f(e,"diameter")},required:!0})]}),"soup"===n&&Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{htmlFor:"spiciness_scale",children:"Spiciness scale(1-10): "}),Object(v.jsx)(p.a,{name:"spiciness_scale",component:"input",type:"text",normalize:function(e){return f(e,"spiciness")},required:!0})]}),"sandwich"===n&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("label",{htmlFor:"slices_of_bread",children:["Number of Bread Slices Required:"," "]}),Object(v.jsx)(p.a,{name:"slices_of_bread",component:"input",type:"text",normalize:f,required:!0})]}),Object(v.jsx)("button",{type:"submit",children:"Submit"})]})};y=Object(m.a)({form:"dish",initialValues:{preparation_time:"00:00:00"}})(y);var w=Object(x.a)("dish"),g=y=Object(s.b)((function(e){return{dishType:w(e,"type")}}))(y);n(189);var S=function(){var e=Object(i.useState)("Response from the API will be visible here"),t=Object(h.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(b.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://frosty-wood-6558.getsandbox.com:443/dishes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("h3",{children:"HexOcean Form Task"}),Object(v.jsx)(g,{onSubmit:function(e){c("loading"),r(e).then((function(e){return c(JSON.stringify(e))})).catch((function(e){return c(JSON.stringify(e))}))}}),Object(v.jsxs)("section",{children:[Object(v.jsx)("h4",{children:"Result:"}),Object(v.jsx)("p",{children:"loading"===n?"Loading":n})]}),Object(v.jsx)("footer",{children:Object(v.jsxs)("span",{children:["Made by"," ",Object(v.jsx)("a",{href:"https://github.com/KowalewskiPawel",children:"Pawel Kowalewski"})]})})]})};r.a.render(Object(v.jsx)(s.a,{store:j,children:Object(v.jsx)(S,{})}),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.5579a182.chunk.js.map