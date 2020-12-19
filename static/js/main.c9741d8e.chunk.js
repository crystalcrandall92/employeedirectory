(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[0],{139:function(e,t,a){"use strict";a.r(t);var r=a(15),s=a(0),n=a(11),i=a.n(n),l=a(44),c=a(45),o=a(63),d=a(62);a(54);var m=function(){return Object(r.jsx)("div",{className:"hero header",children:"Employee Directory"})},u=a(52),h=a(96),p=Object(u.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"25ch"}}}));function f(e){var t=p();return Object(r.jsx)("div",{className:t.root,children:Object(r.jsxs)("div",{className:"searchStyle",children:[Object(r.jsx)(h.a,{id:"standard-full-width",label:"Search by First Name",style:{margin:8},placeholder:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},onChange:e.search}),Object(r.jsxs)("div",{className:"center",children:[Object(r.jsx)("p",{children:"Be sure to use capital letters for employee's names."}),Object(r.jsx)("p",{children:"You may also click the top of the columns to sort users alphabetically in each category"})]})]})})}var j=a(87),b=[{field:"firstName",headerName:"First Name",width:200,description:"Employee's First Name"},{field:"lastName",headerName:"Last Name",width:200,description:"Employee's Last Name"},{field:"userName",headerName:"User Name",width:200,description:"Employee's User Name"},{field:"email",headerName:"E-mail",width:300,description:"Employee's Email"},{field:"cell",headerName:"Phone Number",width:200,description:"Employee's Cell"}];function y(e){var t=e.props.map((function(e,t){var a={};return a.id=t+1,a.userName=e.login.username,a.firstName=e.name.first,a.lastName=e.name.last,a.email=e.email,a.cell=e.cell,a}));return Object(r.jsx)("div",{className:"searchStyle",style:{width:"60%",margin:"auto"},children:Object(r.jsx)(j.a,{rows:t,columns:b,autoHeight:!0})})}var N=a(89),v=a.n(N),x=function(){return v.a.get("https://randomuser.me/api/?results=20&nat=us")},O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",employees:[],filtered:[]},e.search=function(t){return e.setState({filtered:e.state.employees.filter((function(e){return e.name.first.includes(t.target.value)}))})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.setState({employees:t.data.results,filtered:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{}),Object(r.jsx)(f,{search:this.search}),Object(r.jsx)(y,{props:this.state.filtered})]})}}]),a}(s.Component);a(138);i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},54:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.c9741d8e.chunk.js.map