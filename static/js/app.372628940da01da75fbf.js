webpackJsonp([0],{"4UMO":function(t,e){},"7R84":function(t,e){},Hbqt:function(t,e){},IJUo:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row",attrs:{id:"header"}},[e("nav",{staticClass:"nav nav-pills flex-column flex-sm-row"},[e("a",{staticClass:"flex-sm-fill text-sm-center nav-link"},[e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),e("a",{staticClass:"flex-sm-fill text-sm-center nav-link"},[e("router-link",{attrs:{to:"/profile"}},[this._v("Profile")])],1),this._v(" "),e("a",{staticClass:"flex-sm-fill text-sm-center nav-link"},[e("router-link",{attrs:{to:"/contact"}},[this._v("Contact")])],1),this._v(" "),e("a",{staticClass:"flex-sm-fill text-sm-center nav-link"},[e("router-link",{attrs:{to:"/register"}},[this._v("Register")])],1)])])},staticRenderFns:[]};var s={mounted:function(){var t=this;setInterval(function(){t.$emit("onClock",Date())},100)},name:"Footer",props:["title","color"]},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("span",{style:{color:this.color}},[this._v(this._s(this.title))])])},staticRenderFns:[]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"content"}},[e("router-view")],1)},staticRenderFns:[]};var l={name:"App",components:{Header:a("VU/8")({name:"Header"},n,!1,function(t){a("IJUo")},"data-v-2a7e1305",null).exports,Footer:a("VU/8")(s,o,!1,function(t){a("7R84")},null,null).exports,Content:a("VU/8")({name:"Content"},r,!1,function(t){a("4UMO")},null,null).exports},data:function(){return{time:""}},methods:{Reset:function(){this.title=""},onClock:function(t){this.time=t}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("Header"),this._v(" "),e("Content"),this._v(" "),e("Footer",{attrs:{title:"@copyright 20202 www.kafiwz.comz",color:"green"},on:{onClock:this.onClock}}),this._v(" "),e("span",[this._v(this._s(this.time))])],1)},staticRenderFns:[]},u=a("VU/8")(l,c,!1,null,null,null).exports,m=a("/ocq"),p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"tab-pane text-left"},[this._v(this._s(this.home))])},staticRenderFns:[]};var d=a("VU/8")({name:"Home",data:function(){return{home:"....Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud."}}},p,!1,function(t){a("Hbqt")},null,null).exports,v={name:"Profile",mounted:function(){this.welcome="welcome...",this.FirstShow()},data:function(){return{obj:{id:1,name:"few"},arr:["...Intachot","...Menz","...pukie"],isShow:!1,welcome:"",profile:"Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis."}},methods:{FirstShow:function(){console.log("welcome!")},Click:function(){alert("hi!"),this.isShow=!0}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[t.isShow?a("h4",{staticClass:"h4 text-danger"},[t._v(t._s(t.welcome)+t._s(t.obj.name)+t._s(t.arr[0]))]):t._e()]),t._v(" "),a("div",{staticClass:"tab-pane text-left"},[t._v(t._s(t.profile))]),t._v(" "),a("div",{staticClass:"col-md-12 my-3 mx-1 text-left"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.Click}},[t._v("click me")])]),t._v(" "),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.welcome,expression:"welcome"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.welcome},on:{input:function(e){e.target.composing||(t.welcome=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("ul",{staticClass:"col-md-1"},t._l(t.arr,function(e,i){return a("li",{key:i},[t._v(t._s(e))])}),0)])])},staticRenderFns:[]};var _=a("VU/8")(v,f,!1,function(t){a("sfDH")},"data-v-5aa9b9e6",null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"tab-pane text-left"},[t._v(t._s(t.contact))]),t._v(" "),a("div",{staticClass:"text-center my-4"},[a("img",{staticClass:"rounded",attrs:{src:t.img,height:t.img_height,width:t.img_width}})]),t._v(" "),a("div",{staticClass:"text-center"},[a("a",{style:t.isActive?t.styleObj:t.noStyle,attrs:{href:t.link},on:{click:t.ShowActive}},[t._v("click here")])])])},staticRenderFns:[]};var x=a("VU/8")({name:"Contact",mounted:function(){this.isActive=!1},data:function(){return{isActive:!1,noStyle:{backgroundColor:"yellow",color:"green"},styleObj:{fontSize:"25px",color:"red"},link:"https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A",img_height:350,img_width:500,img:"https://assets.brandinside.asia/uploads/2019/11/KBankxBLACKPINK_Main-KV.jpg",contact:"Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non."}},methods:{ShowActive:function(){this.isActive=!0}}},h,!1,function(t){a("oxLv")},"data-v-97046004",null).exports,g=a("mvHQ"),C=a.n(g),b={name:"register",data:function(){return{ageMin:0,ageMax:99,wordBreak:"break-all",backgroundColor:"yellow",app:{first_name:"",last_name:"",sex:"male",course:"",age:0}}},methods:{Submit:function(){alert(C()(this.app))},Clear:function(){this.app={first_name:"",last_name:"",course:"",sex:"male",age:0}},UseDefault:function(){this.app={first_name:"Kim",last_name:"Jisoo",course:"vuejs",sex:"female",age:24}}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row my-3"},[a("div",{staticClass:"col-md-4 my-3 p-4 text-left border border-success rounded"},[a("h5",{staticClass:"h5 mb-3"},[t._v("Course Registation")]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.Submit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"first_name"}},[t._v("First Name :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.app.first_name,expression:"app.first_name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"first_name"},domProps:{value:t.app.first_name},on:{input:function(e){e.target.composing||t.$set(t.app,"first_name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"last_name"}},[t._v("Last Name :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.app.last_name,expression:"app.last_name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"sex"},domProps:{value:t.app.last_name},on:{input:function(e){e.target.composing||t.$set(t.app,"last_name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"age"}},[t._v("Age :")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.app.age,expression:"app.age",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",name:"age",min:t.ageMin,max:t.ageMax},domProps:{value:t.app.age},on:{input:function(e){e.target.composing||t.$set(t.app,"age",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.app.sex,expression:"app.sex"}],staticClass:"form-check-input",attrs:{type:"radio",name:"sex",value:"male"},domProps:{checked:t._q(t.app.sex,"male")},on:{change:function(e){return t.$set(t.app,"sex","male")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"sex"}},[t._v("\n                        Male\n                    ")])]),t._v(" "),a("div",{staticClass:"form-check form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.app.sex,expression:"app.sex"}],staticClass:"form-check-input",attrs:{type:"radio",name:"sex",value:"female"},domProps:{checked:t._q(t.app.sex,"female")},on:{change:function(e){return t.$set(t.app,"sex","female")}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"sex"}},[t._v("\n                        Female\n                    ")])]),t._v(" "),a("div",{staticClass:"form-group my-3"},[a("label",{attrs:{for:"inputState"}},[t._v("Course :")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.app.course,expression:"app.course"}],staticClass:"form-control",attrs:{id:"course"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.app,"course",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:""}},[t._v("--select--")]),t._v(" "),a("option",{attrs:{value:"vuejs"}},[t._v("Vuejs")]),t._v(" "),a("option",{attrs:{value:"jquery"}},[t._v("jQuery")]),t._v(" "),a("option",{attrs:{value:"angular"}},[t._v("Angular")]),t._v(" "),a("option",{attrs:{value:"react"}},[t._v("React")])])]),t._v(" "),a("div",{staticClass:"my-2"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:[function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.Clear(e)},function(e){return e.altKey?t.UseDefault(e):null}]}},[t._v("Clear")])])])]),t._v(" "),a("div",{staticClass:"col-md-4 mx-5 p-2",style:{backgroundColor:t.backgroundColor}},[a("span",{style:{wordBreak:t.wordBreak}},[t._v(" : "+t._s(JSON.stringify(t.app))+" ")])])])])},staticRenderFns:[]};var k=a("VU/8")(b,w,!1,function(t){a("TKfy")},null,null).exports;i.a.use(m.a);var y=new m.a({routes:[{path:"/",name:"home",component:d},{path:"/profile",name:"profile",component:_},{path:"/contact",name:"contact",component:x},{path:"/register",name:"register",component:k}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:y,components:{App:u},template:"<App/>"})},TKfy:function(t,e){},oxLv:function(t,e){},sfDH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.372628940da01da75fbf.js.map