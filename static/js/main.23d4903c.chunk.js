(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{113:function(e,t){},114:function(e,t){},121:function(e,t){},123:function(e,t){},155:function(e,t,c){},160:function(e,t,c){},180:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(74),i=c.n(a),r=(c(80),c(81),c(48)),l=c(2),j=c(181),o=(c(82),c(0)),d=(c(84),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(l.a)(a,2),d=i[0],b=i[1],h=Object(n.useState)(""),O=Object(l.a)(h,2),u=(O[0],O[1],Object(n.useState)("")),x=Object(l.a)(u,2),m=(x[0],x[1],[]);return Object(n.useEffect)((function(){fetch("http://localhost:9999").then((function(e){return e.json()})).then((function(e){s((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e))})),m.push(e)})).then((function(e){b(!0),b(!1)})).catch((function(e){}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"align",children:!d&&c.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"card",style:{margin:"10%"},children:Object(o.jsxs)(j.a,{style:{width:"18rem"},children:[Object(o.jsx)(j.a.Img,{variant:"top",src:e.img,style:{height:"40%",width:"auto"}}),Object(o.jsxs)(j.a.Body,{children:[Object(o.jsxs)(j.a.Title,{children:["Title :",e.title]}),Object(o.jsxs)(j.a.Text,{children:[" Descriptions:",e.description]}),Object(o.jsxs)(j.a.Text,{children:["Manufacturer:",e.manufacturer]}),Object(o.jsxs)(j.a.Text,{children:["Price:",e.price]}),Object(o.jsx)("button",{onClick:function(){!function(e){console.log(e),fetch("http://localhost:9999/delete/"+e,{method:"DELETE"}).then((function(e){console.log("Got successfully DELETE",e),window.alert("Item deleted")})).catch((function(e){console.log(e)}))}(e._id)},className:"btn btn-primary",children:"Delete"})]})]})},e._id)})}))})})}),b=c(182),h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=(t[0],t[1],Object(n.useState)("")),s=Object(l.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)(""),j=Object(l.a)(r,2),d=j[0],h=j[1],O=Object(n.useState)(""),u=Object(l.a)(O,2),x=u[0],m=u[1],p=Object(n.useState)(""),g=Object(l.a)(p,2),f=g[0],v=g[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),S=y[0],w=(y[1],Object(n.useState)("")),C=Object(l.a)(w,2),E=C[0],I=(C[1],Object(n.useState)("")),T=Object(l.a)(I,2),P=T[0],k=(T[1],Object(n.useState)("")),D=Object(l.a)(k,2),F=D[0],A=D[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container shadow",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",children:[" Product URL ",Object(o.jsx)("input",{placeholder:"Product URL",className:"img",onChange:function(e){i(e.target.value)},style:{margin:"10px"}})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",children:["Product Title ",Object(o.jsx)("input",{placeholder:"Product title",className:"title",onChange:function(e){h(e.target.value)},style:{margin:"10px"}})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",children:["  Description ",Object(o.jsx)("input",{placeholder:"Description",className:"Description",onChange:function(e){m(e.target.value)},style:{margin:"10px"}})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",children:[" Enter Price      ",Object(o.jsx)("input",{placeholder:"price",className:"price",onChange:function(e){v(e.target.value)},style:{margin:"10px"}})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col",children:["  Manufacturer   ",Object(o.jsx)("input",{placeholder:"manufacturer",className:"manufacturer",onChange:function(e){A(e.target.value)},style:{margin:"10px"}}),"   "]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",style:{margin:"10px"}})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col",style:{margin:"10px"}})}),Object(o.jsx)(b.a,{onClick:function(){fetch("http://localhost:9999/add",{method:"POST",body:JSON.stringify({img:a,title:d,description:x,price:f,inventory:S,id:E,deal:P,manufacturer:F}),headers:{"content-Type":"application/json"}}).then((function(e){console.log(e),window.alert("Added Successfully")})).catch((function(e){console.log("error")}))},className:"btn btn-primary",style:{margin:"10px"},children:"Submit Now"})]})})},O=(c(155),c(8)),u=c(3);function x(){return Object(o.jsx)(O.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" Inventory"}),Object(o.jsx)("div",{children:"ADD Inventory"}),Object(o.jsx)("div",{children:Object(o.jsx)(O.b,{to:"/",children:"Cart"})}),Object(o.jsx)("div",{children:Object(o.jsx)(O.b,{to:"/add",children:"Add Items"})})]}),Object(o.jsx)(u.b,{path:"/",exact:!0,component:d}),Object(o.jsx)(u.b,{path:"/add",component:h}),Object(o.jsx)(u.b,{path:"/home",exact:!0,component:d})]})})}c(160),c(161);var m=c.p+"static/media/back3.ffc33221.jpg";var p=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(l.a)(a,2),r=i[0],j=i[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),h=b[0],O=b[1],p=Object(n.useState)(!1),g=Object(l.a)(p,2),f=g[0],v=g[1],N=function(e){"email"===e.target.name&&s(e.target.value),"password"===e.target.name&&j(e.target.value)};return Object(o.jsxs)(o.Fragment,{children:[h?Object(o.jsx)(u.a,{push:!0,to:"/home"}):null,f?null:Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(m,")")},children:["   ",Object(o.jsxs)("div",{id:"sign-in",className:"outer",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Sign In"})}),Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsxs)("div",{className:"form-field",children:[Object(o.jsx)("th",{children:"Email Id*   :-"})," ",Object(o.jsx)("td",{children:Object(o.jsx)("input",{placeholder:"Enter Email Id",type:"text",name:"email",value:c,onChange:N})})]}),Object(o.jsxs)("div",{className:"form-field",children:[Object(o.jsx)("th",{children:"Password*:"}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{placeholder:"Enter password",type:"password",name:"password",value:r,onChange:N})})]}),Object(o.jsx)("div",{className:"form-field",children:Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){fetch("http://localhost:9999/login",{method:"POST",body:JSON.stringify({email:c,password:r}),headers:{"content-Type":"application/json"}}).then((function(e){console.log("success"),200===e.status&&(window.localStorage.setItem("login",JSON.stringify(e.data)),v(!0))})).catch((function(e){console.log(e),O(!0)}))},children:"Signin"})})]})]})]}),f?Object(o.jsx)(x,{}):null]})};var g=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=(t[0],t[1],Object(n.useState)("")),s=Object(l.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)(""),j=Object(l.a)(r,2),d=j[0],h=j[1],x=Object(n.useState)(""),g=Object(l.a)(x,2),f=g[0],v=g[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),S=y[0],w=y[1];return Object(o.jsxs)(o.Fragment,{children:[S?null:Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(m,")")},children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("form",{className:"form",children:Object(o.jsxs)("center",{children:[Object(o.jsx)("h1",{children:"User Registration"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("th",{children:"USER NAME "})," ",Object(o.jsx)("td",{children:Object(o.jsx)("input",{placeholder:"Enter User Name",className:"name",onChange:function(e){i(e.target.value)},style:{margin:"10px"}})})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("th",{children:"EMAIL ID"}),Object(o.jsxs)("td",{children:[" ",Object(o.jsx)("input",{placeholder:"Enter Email Id",className:"email",onChange:function(e){h(e.target.value)},style:{margin:"10px"}})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("th",{children:"PASSWORD"}),Object(o.jsxs)("td",{children:[" ",Object(o.jsx)("input",{placeholder:"Enter Password",className:"password",onChange:function(e){v(e.target.value)},style:{margin:"10px"}})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(b.a,{onClick:function(){fetch("http://localhost:9999/signup",{method:"POST",body:JSON.stringify({name:a,email:d,password:f}),headers:{"content-Type":"application/json"}}).then((function(e){console.log(e),w(!0)})).catch((function(e){console.log("error")}))},className:"btn btn-primary",children:"Sign Up"}),Object(o.jsx)(O.a,{children:Object(o.jsx)(u.b,{exact:!0,path:"/login",component:p})})]})]})})})}),S?Object(o.jsx)(p,{}):null]})},f=c(33),v=c(34),N=c(36),y=c(35),S=c.p+"static/media/back3.ffc33221.jpg",w=function(e){Object(N.a)(c,e);var t=Object(y.a)(c);function c(){return Object(f.a)(this,c),t.apply(this,arguments)}return Object(v.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{style:{backgroundImage:"url(".concat(S,")")},children:Object(o.jsx)("div",{style:{height:"150vh"},className:"container valign-wrapper",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{style:{marginTop:"100px"},className:"col s12 center-align",children:[Object(o.jsxs)("h4",{children:[Object(o.jsx)("b",{children:"Product App,"}),"  Welcome !!!"]}),Object(o.jsx)("p",{className:"flow-text grey-text text-darken-1",children:"New User? ,Please Register here..!!!"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col s6",children:Object(o.jsx)(O.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3",children:Object(o.jsxs)("b",{children:[" ",Object(o.jsx)("u",{children:"SignUp"})]})})}),Object(o.jsx)("div",{className:"col s6",children:Object(o.jsx)(O.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text",children:Object(o.jsx)("b",{children:Object(o.jsx)("u",{children:"Log In"})})})})]})})})})}}]),c}(n.Component),C=function(e){Object(N.a)(c,e);var t=Object(y.a)(c);function c(){return Object(f.a)(this,c),t.apply(this,arguments)}return Object(v.a)(c,[{key:"render",value:function(){return Object(o.jsx)("div",{className:"navbar-fixed",children:Object(o.jsx)("nav",{className:"z-depth-0",children:Object(o.jsx)("div",{className:"nav-wrapper white"})})})}}]),c}(n.Component);var E=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(O.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(C,{}),Object(o.jsx)(u.b,{exact:!0,path:"/",component:w}),Object(o.jsx)(u.b,{exact:!0,path:"/login",component:p}),Object(o.jsx)(u.b,{exact:!0,path:"/register",component:g})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,183)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};c(179);i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),I()},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){}},[[180,1,2]]]);
//# sourceMappingURL=main.23d4903c.chunk.js.map