(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(A,e,t){A.exports=t.p+"static/media/logo.f61f3542.png"},20:function(A,e,t){A.exports=t.p+"static/media/group.f93e3631.png"},22:function(A,e,t){A.exports=t(35)},27:function(A,e,t){},28:function(A,e,t){},29:function(A,e,t){},35:function(A,e,t){"use strict";t.r(e),t.d(e,"Config",(function(){return C}));var a=t(10),n=t(15),c=t(0),r=t.n(c),l=t(18),s=t.n(l),g=(t(27),t(12)),o=t(19),m=t.n(o),w=(t(28),function(){var A=Object(c.useContext)(C),e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar__item"},r.a.createElement("img",{src:m.a,alt:"logo"}),r.a.createElement("h3",{className:"navbar__item__companyName"},r.a.createElement("span",{className:"green"},"L"),"eppo")),r.a.createElement("div",{className:"navbar__googleLogin"},A.state.logIn?r.a.createElement("div",{className:"navbar__informations"},r.a.createElement("p",null,"Witamy"),r.a.createElement("p",null,n)):null,A.state.logIn?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.GoogleLogout,{clientId:"741663086321-1eip7aa6cc3i91agpj31b5a0rbhg7otm.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){A.dispatch({type:"logIn",logIn:!1})}})):r.a.createElement(g.GoogleLogin,{clientId:"741663086321-1eip7aa6cc3i91agpj31b5a0rbhg7otm.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){A.dispatch({type:"logIn",logIn:!0}),l(e.getBasicProfile().getName())},onFailure:function(){l("Error")},cookiePolicy:"single_host_origin"})))}),u=t(20),i=t.n(u),B=(t(29),t(9)),D=t.n(B),E=t(6),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__text"},r.a.createElement("h1",null,"The Best"),r.a.createElement("h1",{className:"green"},"Search"),r.a.createElement("h1",null,"Engine")),r.a.createElement("div",{className:"home__image"},r.a.createElement("img",{src:i.a,alt:"blob"}))),r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"links__item"},r.a.createElement(E.b,{to:"/github"},r.a.createElement("img",{src:D.a,alt:"arrow"}),r.a.createElement("h2",null,"Github users"))),r.a.createElement("div",{className:"links__item"},r.a.createElement(E.b,{to:"/facebook"},r.a.createElement("img",{src:D.a,alt:"arrow"}),r.a.createElement("h2",null,"Facebook users"))),r.a.createElement("div",{className:"links__item"},r.a.createElement(E.b,{to:"/weather"},r.a.createElement("img",{src:D.a,alt:"arrow"}),r.a.createElement("h2",null,"Weather forecast"))),r.a.createElement("div",{className:"links__item"},r.a.createElement(E.b,{to:"cos"},r.a.createElement("img",{src:D.a,alt:"arrow"}),r.a.createElement("h2",null,"Cos tam")))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(b,null))},p=t(1),C=Object(c.createContext)(),f={logIn:!1};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,null,r.a.createElement(p.a,{exact:!0,path:"/search-engine-react",component:function(){var A=Object(c.useReducer)((function(A,e){switch(e.type){case"logIn":return Object(n.a)(Object(n.a)({},A),{},{logIn:e.logIn});default:return new Error("Unexpected action")}}),f),e=Object(a.a)(A,2),t=e[0],l=e[1];return r.a.createElement(C.Provider,{value:{state:t,dispatch:l}},r.a.createElement(d,null))}}),r.a.createElement(p.a,{path:"/github",component:function(){return r.a.createElement("h1",null,"Cos")}}))),document.getElementById("root"))},9:function(A,e){A.exports="data:image/png;base64,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"}},[[22,1,2]]]);
//# sourceMappingURL=main.9169eed2.chunk.js.map