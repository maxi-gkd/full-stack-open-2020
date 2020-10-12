(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(19),t(2)),l=function(e){var n=e.filterInput,t=e.handleFilterInputChange;return r.a.createElement("div",null,"Filter shown with:",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.name,t=e.number,a=e.handleNameChange,u=e.handleNumberChange,o=e.handleAddPerson;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.person,t=e.handleDeletePerson;return r.a.createElement("div",null,n.name,n.number,r.a.createElement("button",{type:"button",onClick:function(){return t(n.id,n.name)}}," Delete "))},m=function(e){var n=e.persons,t=e.nameFilter,a=e.handleDeletePerson,u=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,u.map((function(e){return r.a.createElement(d,{key:e.id,person:e,handleDeletePerson:a})})))},f=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n)},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px"}},n)},h=t(3),b=t.n(h),p="/api/persons",g=function(){return b.a.get(p).then((function(e){return e.data}))},E=function(e){return b.a.post(p,e).then((function(e){return e.data}))},v=function(e,n){return b.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return b.a.delete("".concat(p,"/").concat(e))},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),d=Object(c.a)(o,2),h=d[0],b=d[1],p=Object(a.useState)(""),w=Object(c.a)(p,2),y=w[0],O=w[1],C=Object(a.useState)(""),S=Object(c.a)(C,2),k=S[0],x=S[1],D=Object(a.useState)(null),P=Object(c.a)(D,2),N=P[0],F=P[1],I=Object(a.useState)(null),A=Object(c.a)(I,2),B=A[0],T=A[1];Object(a.useEffect)((function(){g().then((function(e){u(e)}))}),[]);var z=function(e){F(e),setTimeout((function(){F(null)}),5e3)},J=function(e){T(e),setTimeout((function(){T(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:N}),r.a.createElement(s,{message:B}),r.a.createElement(l,{filterInput:k,handleFilterInputChange:function(e){x(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(i,{name:h,number:y,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){O(e.target.value)},handleAddPerson:function(e){e.preventDefault();var n={name:h,number:y},a=t.filter((function(e){return e.name===h}));if(a.length>0){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var r=a[0].id;v(r,n).then((function(e){u(t.map((function(n){return n.id!==e.id?n:e}))),b(""),O(""),z(" Updated ".concat(h))})).catch((function(){J("Error: ".concat(h," has already been deleted from server")),u(t.filter((function(e){return e.id!==r})))}))}}else E(n).then((function(e){u(t.concat(e)),b(""),O(""),z(" Added ".concat(h))})).catch((function(){J("Error: The minimum length for Name are 3 characters and the minimum length for number are 8 characters")}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{persons:t,nameFilter:k,handleDeletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&j(e).then((function(){u(t.filter((function(n){return n.id!==e})))})).catch((function(){J("Error: ".concat(n," has already been deleted from server")),u(t.filter((function(n){return n.id!==e})))}))}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.96e84673.chunk.js.map