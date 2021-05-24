(this["webpackJsonpreact-restaurant"]=this["webpackJsonpreact-restaurant"]||[]).push([[0],{39:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),i=s(12),c=s.n(i),r=(s(36),s(37),s(38),s(39),s(8)),l=s(9),o=s(11),d=s(10),h=s(3),j=s(5),m=s(1),b=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isNavOpen:!1,isModalOpen:!1},e.toggleNav=function(){return e.setState({isNavOpen:!e.state.isNavOpen})},e.toggleModal=function(){return e.setState({isModalOpen:!e.state.isModalOpen})},e.handleLogin=function(t){e.toggleModal(),console.log(e.username),alert("Username: "+e.username.value+" Password: "+e.password.value+" Remember: "+e.remember.checked),t.preventDefault()},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.A,{dark:!0,expand:"md",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h.C,{onClick:this.toggleNav}),Object(m.jsx)(h.B,{className:"mr-auto",href:"/",children:Object(m.jsx)("img",{src:"react-restaurant/assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(m.jsxs)(h.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(m.jsxs)(h.y,{navbar:!0,children:[Object(m.jsx)(h.z,{children:Object(m.jsxs)(j.c,{className:"nav-link",to:"/home",children:[Object(m.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(m.jsx)(h.z,{children:Object(m.jsxs)(j.c,{className:"nav-link",to:"/aboutus",children:[Object(m.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(m.jsx)(h.z,{children:Object(m.jsxs)(j.c,{className:"nav-link",to:"/menu",children:[Object(m.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(m.jsx)(h.z,{children:Object(m.jsxs)(j.c,{className:"nav-link",to:"/contactus",children:[Object(m.jsx)("span",{className:"fa fa-address-card  fa-lg"})," Contact Us"]})})]}),Object(m.jsx)(h.y,{className:"ml-auto",navbar:!0,children:Object(m.jsx)(h.z,{children:Object(m.jsxs)(h.c,{outline:!0,onClick:this.toggleModal,children:[Object(m.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(m.jsx)(h.s,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row row-header",children:Object(m.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(m.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(m.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(m.jsxs)(h.v,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(m.jsx)(h.x,{toggle:this.toggleModal,children:"Login"}),Object(m.jsx)(h.w,{children:Object(m.jsxs)(h.n,{onSubmit:this.handleLogin,children:[Object(m.jsxs)(h.p,{children:[Object(m.jsx)(h.t,{htmlFor:"username",children:"Username"}),Object(m.jsx)(h.r,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(m.jsxs)(h.p,{children:[Object(m.jsx)(h.t,{htmlFor:"password",children:"Password"}),Object(m.jsx)(h.r,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(m.jsx)(h.p,{check:!0,children:Object(m.jsxs)(h.t,{check:!0,children:[Object(m.jsx)(h.r,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(m.jsx)(h.c,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),s}(a.Component),u=[{id:0,name:"Uthappizza",image:"/assets/images/uthappizza.png",category:"mains",label:"Hot",price:"4.99",featured:!0,description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Zucchipakoda",image:"/assets/images/zucchipakoda.png",category:"appetizer",label:"",price:"1.99",featured:!1,description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Vadonut",image:"/assets/images/vadonut.png",category:"appetizer",label:"New",price:"1.99",featured:!1,description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"ElaiCheese Cake",image:"/assets/images/elaicheesecake.png",category:"dessert",label:"",price:"2.99",featured:!1,description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],O=[{id:0,name:"Peter Pan",image:"/assets/images/alberto.png",designation:"Chief Epicurious Officer",abbr:"CEO",featured:!1,description:"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."},{id:1,name:"Dhanasekaran Witherspoon",image:"/assets/images/alberto.png",designation:"Chief Food Officer",abbr:"CFO",featured:!1,description:"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"},{id:2,name:"Agumbe Tang",image:"/assets/images/alberto.png",designation:"Chief Taste Officer",abbr:"CTO",featured:!1,description:"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."},{id:3,name:"Alberto Somayya",image:"/assets/images/alberto.png",designation:"Executive Chef",abbr:"EC",featured:!0,description:"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"}],x=[{id:0,name:"Weekend Grand Buffet",image:"/assets/images/buffet.png",label:"New",price:"19.99",featured:!0,description:"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person"}],f=[{id:0,dishId:0,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:1,dishId:0,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:2,dishId:0,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:3,dishId:0,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:4,dishId:0,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:5,dishId:1,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:6,dishId:1,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:7,dishId:1,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:8,dishId:1,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:9,dishId:1,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:10,dishId:2,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:11,dishId:2,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:12,dishId:2,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:13,dishId:2,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:14,dishId:2,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"},{id:15,dishId:3,rating:5,comment:"Imagine all the eatables, living in conFusion!",author:"John Lemon",date:"2012-10-16T17:57:28.556094Z"},{id:16,dishId:3,rating:4,comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",author:"Paul McVites",date:"2014-09-05T17:57:28.556094Z"},{id:17,dishId:3,rating:3,comment:"Eat it, just eat it!",author:"Michael Jaikishan",date:"2015-02-13T17:57:28.556094Z"},{id:18,dishId:3,rating:4,comment:"Ultimate, Reaching for the stars!",author:"Ringo Starry",date:"2013-12-02T17:57:28.556094Z"},{id:19,dishId:3,rating:2,comment:"It's your birthday, we're gonna party!",author:"25 Cent",date:"2011-12-02T17:57:28.556094Z"}],g=function(e){var t=e.dish;return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsx)(h.d,{children:Object(m.jsxs)(j.b,{to:"/menu/".concat(t.id),children:[Object(m.jsx)(h.g,{width:"100%",src:"react-restaurant"+t.image,alt:t.name}),Object(m.jsx)(h.h,{children:Object(m.jsx)(h.k,{children:t.name})})]})})})},p=function(e){var t=e.dishes.map((function(e){return Object(m.jsx)(g,{dish:e},e.id)}));return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{children:Object(m.jsx)(j.b,{to:"/home",children:"Home"})}),Object(m.jsx)(h.b,{active:!0,children:"Menu"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Menu"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsx)("div",{className:"row",children:t})]})},v=function(){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(m.jsx)("h5",{children:"Links"}),Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/aboutus",children:"About Us"})}),Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)("li",{children:Object(m.jsx)(j.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(m.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone fa-lg"})," +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax fa-lg"})," +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope fa-lg"})," ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsxs)("a",{className:"m-1 btn btn-social-icon btn-google",href:"http://google.com/+",children:[" ",Object(m.jsx)("i",{className:"fa fa-google-plus"})]}),Object(m.jsxs)("a",{className:"m-1 btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:[" ",Object(m.jsx)("i",{className:"fa fa-facebook"})]}),Object(m.jsx)("a",{className:"m-1 btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(m.jsx)("i",{className:"fa fa-linkedin"})}),Object(m.jsx)("a",{className:"m-1 btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(m.jsx)("i",{className:"fa fa-twitter"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(m.jsx)("i",{className:"fa fa-youtube"})}),Object(m.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(m.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-auto",children:Object(m.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};function y(e){var t=e.item;return Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.g,{src:"react-restaurant"+t.image,alt:t.name}),Object(m.jsxs)(h.e,{children:[Object(m.jsx)(h.k,{children:t.name}),t.designation?Object(m.jsx)(h.i,{children:t.designation}):null,Object(m.jsx)(h.j,{children:t.description})]})]})}var N=function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row align-items-start",children:[Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(y,{item:e.dish})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(y,{item:e.promotion})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(y,{item:e.leader})})]})})},w=s(23),k=s(14),C=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:"",touched:{firstname:!1,lastname:!1,telnum:!1,email:!1}},e.handleInputChange=function(t){var s=t.target,a="checkbox"===s.type?s.checked:s.value,n=s.name;e.setState(Object(k.a)({},n,a))},e.handleSubmit=function(t){console.log("Current State is: "+JSON.stringify(e.state)),alert("Current State is: "+JSON.stringify(e.state)),t.preventDefault()},e.handleBlur=function(t){return function(s){e.setState({touched:Object(w.a)(Object(w.a)({},e.state.touched),{},Object(k.a)({},t,!0))})}},e}return Object(l.a)(s,[{key:"validate",value:function(e,t,s,a){var n={firstname:"",lastname:"",telnum:"",email:""};this.state.touched.firstname&&e.length<3?n.firstname="First Name should be >= 3 characters":this.state.touched.firstname&&e.length>10&&(n.firstname="First Name should be <= 10 characters"),this.state.touched.lastname&&t.length<3?n.lastname="Last Name should be >= 3 characters":this.state.touched.lastname&&t.length>10&&(n.lastname="Last Name should be <= 10 characters");return this.state.touched.telnum&&!/^\d+$/.test(s)&&(n.telnum="Tel. Number should contain only numbers"),this.state.touched.email&&1!==a.split("").filter((function(e){return"@"===e})).length&&(n.email="Email should contain a @"),n}},{key:"render",value:function(){var e=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{children:Object(m.jsx)(j.b,{to:"/home",children:"Home"})}),Object(m.jsx)(h.b,{active:!0,children:"Contact Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Contact Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Location Information"})}),Object(m.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope"}),": ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(m.jsx)("h5",{children:"Map of our Location"})}),Object(m.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(m.jsxs)("div",{className:"btn-group",role:"group",children:[Object(m.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(m.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-info",href:"skpe.com",children:[Object(m.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(m.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Send us your Feedback"})}),Object(m.jsx)("div",{className:"col-12 col-md-9",children:Object(m.jsxs)(h.n,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.t,{htmlFor:"firstname",md:2,children:"First Name"}),Object(m.jsxs)(h.l,{md:10,children:[Object(m.jsx)(h.r,{type:"text",id:"firstname",name:"firstname",placeholder:"First Name",value:this.state.firstname,valid:""===e.firstname,invalid:""!==e.firstname,onBlur:this.handleBlur("firstname"),onChange:this.handleInputChange}),Object(m.jsx)(h.o,{children:e.firstname}),Object(m.jsx)(h.q,{children:"Minimum 3 Maximum 10 characters"})]})]}),Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.t,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(m.jsxs)(h.l,{md:10,children:[Object(m.jsx)(h.r,{type:"text",id:"lastname",name:"lastname",placeholder:"Last Name",value:this.state.lastname,valid:""===e.lastname,invalid:""!==e.lastname,onBlur:this.handleBlur("lastname"),onChange:this.handleInputChange}),Object(m.jsx)(h.o,{children:e.lastname}),Object(m.jsx)(h.q,{children:"Minimum 3 Maximum 10 characters"})]})]}),Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.t,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(m.jsxs)(h.l,{md:10,children:[Object(m.jsx)(h.r,{type:"tel",id:"telnum",name:"telnum",placeholder:"Tel. Number",value:this.state.telnum,valid:""===e.telnum,invalid:""!==e.telnum,onBlur:this.handleBlur("telnum"),onChange:this.handleInputChange}),Object(m.jsx)(h.o,{children:e.telnum}),Object(m.jsx)(h.q,{children:"Only numbers"})]})]}),Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.t,{htmlFor:"email",md:2,children:"Email"}),Object(m.jsxs)(h.l,{md:10,children:[Object(m.jsx)(h.r,{type:"email",id:"email",name:"email",placeholder:"Email",value:this.state.email,valid:""===e.email,invalid:""!==e.email,onBlur:this.handleBlur("email"),onChange:this.handleInputChange}),Object(m.jsx)(h.o,{children:e.email}),Object(m.jsx)(h.q,{children:"Only Valid Email"})]})]}),Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.l,{md:{size:6,offset:2},children:Object(m.jsxs)(h.p,{check:!0,children:[Object(m.jsxs)(h.t,{check:!0,children:[Object(m.jsx)(h.r,{type:"checkbox",name:"agree",checked:this.state.agree,onChange:this.handleInputChange})," "," ",Object(m.jsx)("strong",{children:"May we contact you?"})]}),Object(m.jsx)(h.q,{children:"Optional"})]})}),Object(m.jsxs)(h.l,{md:{size:3,offset:1},children:[Object(m.jsxs)(h.r,{type:"select",name:"contactType",value:this.state.contactType,onChange:this.handleInputChange,children:[Object(m.jsx)("option",{children:"Tel."}),Object(m.jsx)("option",{children:"Email"})]}),Object(m.jsx)(h.q,{children:"Optional"})]})]}),Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.t,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(m.jsx)(h.l,{md:10,children:Object(m.jsx)(h.r,{type:"textarea",id:"message",name:"message",rows:"12",value:this.state.message,onChange:this.handleInputChange})}),Object(m.jsx)(h.q,{children:"Optional"})]}),Object(m.jsxs)(h.p,{row:!0,children:[Object(m.jsx)(h.l,{md:{size:10,offset:2},children:Object(m.jsx)(h.c,{type:"submit",color:"primary",children:"Send Feedback"})}),Object(m.jsx)(h.q,{children:"Your Infos will not be sendet actually!"})]})]})})]})]})}}]),s}(a.Component);var I=function(e){var t=function(e){var t=e.leader;return Object(m.jsxs)(h.u,{tag:"li",children:[Object(m.jsx)(h.u,{left:!0,top:!0,style:{padding:".3rem 1rem 1rem 0"},children:Object(m.jsx)(h.u,{object:!0,src:"react-restaurant"+t.image,alt:t.name})}),Object(m.jsxs)(h.u,{body:!0,children:[Object(m.jsx)(h.u,{heading:!0,children:t.name}),Object(m.jsx)("p",{children:t.designation}),Object(m.jsx)("p",{className:"d-none d-sm-block",children:t.description})]})]})},s=e.leaders.map((function(e){return Object(m.jsx)(t,{leader:e},e.id)}));return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{children:Object(m.jsx)(j.b,{to:"/home",children:"Home"})}),Object(m.jsx)(h.b,{active:!0,children:"About Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"About Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsxs)("div",{className:"col-12 col-md-6",children:[Object(m.jsx)("h2",{children:"Our History"}),Object(m.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(m.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(m.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(m.jsx)("div",{className:"col-12 col-md-5",children:Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(m.jsx)(h.e,{children:Object(m.jsxs)("dl",{className:"row p-1",children:[Object(m.jsx)("dt",{className:"col-6",children:"Started"}),Object(m.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(m.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(m.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(m.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(m.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(m.jsx)("dt",{className:"col-6",children:"Employees"}),Object(m.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)(h.d,{children:Object(m.jsx)(h.e,{className:"bg-faded",children:Object(m.jsxs)("blockquote",{className:"blockquote",children:[Object(m.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(m.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(m.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h2",{children:"Corporate Leadership"})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)(h.u,{list:!0,children:s})})]})]})},F=function(e){return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsxs)(h.d,{children:[Object(m.jsx)(h.g,{width:"100%",src:"/react-restaurant"+e.image,alt:e.name}),Object(m.jsxs)(h.e,{children:[Object(m.jsx)(h.k,{children:e.name}),Object(m.jsx)(h.j,{children:e.description})]})]})})},T=function(e){var t=e.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsxs)("p",{children:[e.comment," - ",e.dishId]}),Object(m.jsxs)("p",{children:["-- ",e.author,", ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]},e.id)}));return Object(m.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(m.jsx)("h4",{children:"Comments"}),Object(m.jsx)("ul",{className:"list-unstyled",children:t})]})},M=function(e){var t=e.dish,s=e.comments;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.b,{children:Object(m.jsx)(j.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)(h.b,{active:!0,children:t.name})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row",children:[F(t),T(s)]})]})},S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={dishes:u,leaders:O,promotions:x,comments:f},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(j.f,{children:[Object(m.jsx)(j.e,{path:"/home",component:function(){return Object(m.jsx)(N,{dish:e.state.dishes.filter((function(e){return e.featured}))[0],promotion:e.state.promotions.filter((function(e){return e.featured}))[0],leader:e.state.leaders.filter((function(e){return e.featured}))[0]})}}),Object(m.jsx)(j.e,{exact:!0,path:"/menu",component:function(){return Object(m.jsx)(p,{dishes:e.state.dishes})}}),Object(m.jsx)(j.e,{exact:!0,path:"/menu/:dishId",component:function(t){var s=t.match;return Object(m.jsx)(M,{dish:e.state.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],comments:e.state.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)}))})}}),Object(m.jsx)(j.e,{exact:!0,path:"/contactus",component:C}),Object(m.jsx)(j.e,{exact:!0,path:"/aboutus",component:function(){return Object(m.jsx)(I,{leaders:e.state.leaders})}}),Object(m.jsx)(j.d,{to:"/home"})]}),Object(m.jsx)(v,{})]})}}]),s}(a.Component),A=(s(50),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsx)(j.a,{children:Object(m.jsx)("div",{children:Object(m.jsx)(S,{})})})}}]),s}(a.Component)),z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,52)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),z()}},[[51,1,2]]]);
//# sourceMappingURL=main.207fb2ac.chunk.js.map