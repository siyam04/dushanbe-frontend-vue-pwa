(function(e){function t(t){for(var i,o,s=t[0],r=t[1],c=t[2],u=0,b=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],i=!0,s=1;s<a.length;s++){var r=a[s];0!==n[r]&&(i=!1)}i&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},l=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b53":function(e,t,a){"use strict";a("c9ad")},"12d0":function(e,t,a){"use strict";a("52f9")},"2d27":function(e,t,a){},"52f9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("ad3d"),n=(a("ab8b"),a("3e48"),a("7a23"));function l(e,t,a,i,l,o){var s=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["d"])(s)}var o={name:"App",components:{}};a("e2c0");o.render=l;var s=o,r=a("ecee"),c=a("c074");r["c"].add(c["a"]);var d=a("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("fb6a");Object(n["w"])("data-v-54b61750");var u={class:"main-header bg-white shadow-sm px-3 py-2"},b={class:"container"},g={class:"header-box bg-white d-flex align-items-center justify-content-between"},m=Object(n["g"])("div",{class:"header d-flex align-items-center"},[Object(n["g"])("img",{src:"https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png",alt:"Dushanbe"}),Object(n["g"])("h1",{class:"mb-0"},"Works List")],-1),p={class:"page-title-heading"},f=Object(n["g"])("button",{type:"button",class:"btn btn-primary"},[Object(n["g"])("span",{class:"fas fa-plus-circle mr-1"}),Object(n["f"])(" Add Work ")],-1),O={class:"container mb-4"},j={key:0,class:"loading-container"},v=Object(n["g"])("div",{class:"d-flex align-items-center"},[Object(n["g"])("div",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(n["g"])("h6",{class:"ml-2 mb-0"},"Loading...")],-1),_={class:"accordion mt-4",id:"accordionExample"},h={class:"mb-0"},y={class:"card-body border-top"},w={class:"outer-box type-and-user"},k={class:"inner-box"},S=Object(n["g"])("small",null,"Serial No",-1),x={class:"inner-box"},I=Object(n["g"])("small",null,"Unit",-1),B={class:"text"},D={class:"inner-box"},L=Object(n["g"])("small",null,"Quantity",-1),F={class:"inner-box"},P=Object(n["g"])("small",null,"Work Progress",-1),C={class:"inner-box"},N=Object(n["g"])("small",null,"Submitted By",-1),A={class:"inner-box"},T=Object(n["g"])("small",null,"Type",-1),W=Object(n["g"])("div",{class:"dropdown-divider mt-3"},null,-1),M={class:"outer-box"},E=Object(n["g"])("h5",null,"Material",-1),U={class:"mb-0"},q={key:1,class:"pagination d-flex justify-content-between my-3"},J={class:""},V={class:"mb-0"},$={class:"lists-group d-flex mb-0"};function z(e,t,a,i,l,o){var s=Object(n["v"])("router-link"),r=Object(n["v"])("CheckOnlineOrOffline");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",u,[Object(n["g"])("div",b,[Object(n["g"])("div",g,[m,Object(n["g"])("div",p,[Object(n["g"])(s,{to:{name:"WorkSubmissionCreate"}},{default:Object(n["D"])((function(){return[f]})),_:1})])])])]),Object(n["g"])(r,{class:"mb-4"}),Object(n["g"])("div",O,[l.isLoading?(Object(n["p"])(),Object(n["d"])("div",j,[v])):Object(n["e"])("",!0),Object(n["g"])("div",_,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(l.all_work_submissions.slice(),(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{class:"card",key:e.id},[Object(n["g"])("div",{class:"card-header",id:"heading_"+e.id},[Object(n["g"])("h2",h,[Object(n["g"])("button",{class:"btn btn-link",type:"button","data-toggle":"collapse","data-target":"#collapse_"+e.id,"aria-expanded":t<1,"aria-controls":"collapse_"+e.id},[Object(n["g"])("span",null,Object(n["y"])(e.id+". "+e.bill.bill_name+"..."),1),Object(n["g"])("span",null,Object(n["y"])(e.submission_date),1)],8,["data-target","aria-expanded","aria-controls"])])],8,["id"]),Object(n["g"])("div",{id:"collapse_"+e.id,class:t<1?"collapse show":"collapse","aria-labelledby":"heading_"+e.id,"data-parent":"#accordionExample"},[Object(n["g"])("div",y,[Object(n["g"])("div",w,[Object(n["g"])("div",k,[S,Object(n["g"])("h5",null,Object(n["y"])(e.material.serial_no),1)]),Object(n["g"])("div",x,[I,Object(n["g"])("h5",B,Object(n["y"])(e.material.unit),1)]),Object(n["g"])("div",D,[L,Object(n["g"])("h5",null,Object(n["y"])(e.material.quantity),1)]),Object(n["g"])("div",F,[P,Object(n["g"])("h5",null,Object(n["y"])(e.work_progress),1)]),Object(n["g"])("div",C,[N,Object(n["g"])("h5",null,Object(n["y"])(e.created_by.username),1)]),Object(n["g"])("div",A,[T,Object(n["g"])("h5",null,Object(n["y"])(e.type.type_name),1)])]),W,Object(n["g"])("div",M,[E,Object(n["g"])("p",U,Object(n["y"])(e.material.material_name),1)])])],10,["id","aria-labelledby"])])})),128))]),l.pagination.count?(Object(n["p"])(),Object(n["d"])("div",q,[Object(n["g"])("div",J,[Object(n["g"])("p",V," Showing "+Object(n["y"])(l.pagination.showing)+" of "+Object(n["y"])(l.pagination.count),1)]),Object(n["g"])("ul",$,[Object(n["g"])("li",{class:[{disabled:!l.pagination.previous},"page-item"]},[Object(n["g"])("a",{href:"#",class:"btn",onClick:t[1]||(t[1]=function(e){return o.setPage(l.pagination.previous)})},"Previous")],2),Object(n["g"])("li",{class:[{disabled:!l.pagination.next},"page-item"]},[Object(n["g"])("a",{href:"#",class:"btn",onClick:t[2]||(t[2]=function(e){return o.setPage(l.pagination.next)})},"Next")],2)])])):Object(n["e"])("",!0)])],64)}Object(n["w"])(null);var R=a("1da1"),Y=(a("96cf"),a("bc3a")),Q=a.n(Y),G=(a("d3b7"),function(e){return new Promise((function(t){var a={headers:{}},i=localStorage.getItem("token");i&&(a.headers["Authorization"]="token "+i);var n="https://dushanbe-backend-apis.herokuapp.com/api/";Q.a.get(n+e,{headers:{Authorization:"token ".concat(i)}}).then((function(e){t(e.data)})).catch((function(e){console.log(e),t(!1)}))}))}),H={class:"onlineStatus"},K={key:0},X=Object(n["g"])("div",{class:"alert alert-success text-small",role:"alert"},[Object(n["f"])(" You are in "),Object(n["g"])("strong",null,"Online"),Object(n["f"])(". ")],-1),Z={key:1},ee=Object(n["g"])("div",{class:"alert alert-danger",role:"alert"},[Object(n["f"])(" You are in "),Object(n["g"])("a",{href:"#",class:"alert-link"},"Offline"),Object(n["f"])(". ")],-1);function te(e,t,a,i,l,o){return Object(n["p"])(),Object(n["d"])("div",H,[l.isOnline?(Object(n["p"])(),Object(n["d"])("div",K,[X])):(Object(n["p"])(),Object(n["d"])("div",Z,[ee]))])}var ae={name:"CheckOnlineOrOffline",data:function(){return{isOnline:!1}},methods:{onlineStatus:function(){window.navigator.onLine?this.isOnline=!0:this.isOnline}},created:function(){this.onlineStatus()}};a("59cf");ae.render=te;var ie=ae,ne={components:{CheckOnlineOrOffline:ie},name:"WorkSubmissionList",data:function(){return{all_work_submissions:[],url:"https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",currentPage:1,isLoading:!0,isOnline:!1,pagination:{count:null,next:null,previous:null,showing:0,page:null}}},methods:{loadWorkSubmission:function(){var e=this,t=localStorage.getItem("token"),a=parseInt(localStorage.getItem("id")),i={page:this.$route.query.page};Q.a.get(this.url,{headers:{Authorization:"token ".concat(t)},params:{user_id:a,page:this.$route.query.page,queryParam:i}}).then((function(t){e.all_work_submissions=t.data.results,localStorage.setItem("work_submissions",JSON.stringify(e.all_work_submissions)),e.isLoading=!1,e.pagination.count=t.data.count,e.pagination.next=t.data.next,e.pagination.previous=t.data.previous,e.pagination.showing=t.data.results.length})).catch((function(e){console.log(e)})),console.log(this.pagination),localStorage.getItem("work_submissions")&&(this.all_work_submissions=JSON.parse(localStorage.getItem("work_submissions")),this.isLoading=!1)},setPage:function(e){this.pagination.page=e,this.searchWork()},searchWork:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push({path:"work-submission-list",query:{page:e.pagination.page}});case 2:e.loadWorkSubmission();case 3:case"end":return t.stop()}}),t)})))()}},created:function(){this.loadWorkSubmission()}};a("ab63");ne.render=z,ne.__scopeId="data-v-54b61750";var le=ne;function oe(e,t,a,i,l,o){var s=Object(n["v"])("Form");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(s)])}Object(n["w"])("data-v-b95f0b0e");var se={class:"loginContainer"},re={class:"container"},ce={class:"form-container"},de=Object(n["g"])("div",{class:"logo-container mb-4 d-flex align-items-center"},[Object(n["g"])("img",{src:"https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png",alt:"Dushanbe"}),Object(n["g"])("div",null,[Object(n["g"])("h3",{class:"login-header-text"},"Login | DUSHANBE"),Object(n["g"])("p",{class:"formDescription mb-0"},"www.ludwigpfeiffer.com")])],-1),ue={class:"formInput"},be={class:"form-group"},ge={class:"form-group"};function me(e,t,a,i,l,o){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",se,[Object(n["g"])("div",re,[Object(n["g"])("div",ce,[de,Object(n["g"])("div",ue,[Object(n["g"])("form",{style:{"max-width":"500px",margin:"auto"},action:"#",onSubmit:t[4]||(t[4]=Object(n["F"])((function(){return o.loginSubmit&&o.loginSubmit.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",be,[Object(n["E"])(Object(n["g"])("input",{class:["form-control",{"is-invalid":l.login_validation_data&&l.login_validation_data.username}],type:"email",placeholder:"Email",name:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.username=e})},null,2),[[n["B"],l.username]]),l.login_validation_data&&l.login_validation_data.username?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.login_validation_data&&l.login_validation_data.username}},Object(n["y"])(l.login_validation_data.username[0]),3)):Object(n["e"])("",!0)]),Object(n["g"])("div",ge,[Object(n["E"])(Object(n["g"])("input",{class:["form-control",{"is-invalid":l.login_validation_data&&l.login_validation_data.password}],type:"password",placeholder:"Password",name:"psw","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.password=e})},null,2),[[n["B"],l.password]]),l.login_validation_data&&l.login_validation_data.password?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.login_validation_data&&l.login_validation_data.password}},Object(n["y"])(l.login_validation_data.password[0]),3)):Object(n["e"])("",!0)]),Object(n["g"])("button",{onSubmit:t[3]||(t[3]=Object(n["F"])((function(){return o.loginSubmit&&o.loginSubmit.apply(o,arguments)}),["prevent"])),type:"submit",class:" btn btn-primary mt-1",disabled:!!l.isDataSubmit},Object(n["y"])(l.isDataSubmit?"Loading...":"LOGIN"),41,["disabled"])],32)])])])])])}Object(n["w"])(null);var pe=a("3d20"),fe=a.n(pe),Oe={name:"Form",data:function(){return{username:null,password:null,login_validation_data:{username:null,password:null},isDataSubmit:!1}},methods:{loginSubmit:function(){var e=this;this.isDataSubmit=!0,Q.a.post("https://dushanbe-backend-apis.herokuapp.com/api/login/",{username:this.username,password:this.password}).then((function(t){localStorage.setItem("id",t.data.id),localStorage.setItem("username",t.data.username),localStorage.setItem("first_name",t.data.first_name),localStorage.setItem("last_name",t.data.last_name),localStorage.setItem("active_status",t.data.active_status),localStorage.setItem("superuser_status",t.data.superuser_status),localStorage.setItem("token",t.data.token),localStorage.setItem("groups",JSON.stringify(t.data.groups)),localStorage.setItem("user_permissions",JSON.stringify(t.data.user_permissions)),e.isDataSubmit=!1,e.$router.push("work-submission-create")})).catch((function(t){return e.login_validation_data=t.response.data,e.isDataSubmit=!1,pe["fire"]({icon:"error",text:"Provided Credentials Are Not Correct! Please Try Again..."}),t.status(400).json({error:t})}))}}};a("6dba");Oe.render=me,Oe.__scopeId="data-v-b95f0b0e";var je=Oe,ve={name:"Login",components:{Form:je}};ve.render=oe;var _e=ve;function he(e,t,a,i,l,o){var s=Object(n["v"])("Form"),r=Object(n["v"])("Master");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(r,null,{contents:Object(n["D"])((function(){return[Object(n["g"])(s)]})),_:1})])}function ye(e,t,a,i,l,o){var s=Object(n["v"])("Navbar"),r=Object(n["v"])("CheckOnlineOrOffline");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(s),Object(n["g"])(r),Object(n["u"])(e.$slots,"contents")])}Object(n["w"])("data-v-570b0635");var we={class:"navbar navbar-expand-lg bg-white shadow-sm"},ke={class:"container my-0"},Se={class:"main-container d-flex justify-content-between align-items-center"},xe={class:"navbar-brand text-dark",href:"#"},Ie={class:"navbar-nav flex-row"},Be={class:"nav-item"},De=Object(n["f"])("View "),Le={class:"nav-item"};function Fe(e,t,a,i,l,o){var s=Object(n["v"])("fa-icon"),r=Object(n["v"])("router-link");return Object(n["p"])(),Object(n["d"])("nav",we,[Object(n["g"])("div",ke,[Object(n["g"])("div",Se,[Object(n["g"])("a",xe,[Object(n["g"])(s,{icon:"user"}),Object(n["f"])(" "+Object(n["y"])(l.username),1)]),Object(n["g"])("ul",Ie,[Object(n["g"])("li",Be,[Object(n["g"])(r,{class:"nav-link",id:"work_details_button",to:{name:"WorkSubmissionList"}},{default:Object(n["D"])((function(){return[De]})),_:1})]),Object(n["g"])("li",Le,[Object(n["g"])("a",{href:"",class:"nav-link logout-btn",id:"logout_button",onClick:t[1]||(t[1]=function(){return o.logout&&o.logout.apply(o,arguments)})},"Logout")])])])])])}Object(n["w"])(null);var Pe={name:"Navbar",data:function(){return{username:localStorage.getItem("username"),first_name:localStorage.getItem("first_name"),last_name:localStorage.getItem("last_name")}},methods:{logout:function(){G("logout/"),localStorage.removeItem("token"),localStorage.clear(),this.$router.push("/")}}};a("bbeb");Pe.render=Fe,Pe.__scopeId="data-v-570b0635";var Ce=Pe,Ne={name:"Master.vue",components:{Navbar:Ce,CheckOnlineOrOffline:ie}};a("5726");Ne.render=ye,Ne.__scopeId="data-v-5b3622d8";var Ae=Ne,Te={class:"create-form-container"},We={class:"container"},Me={class:"card-header bg-white"},Ee={class:"header d-flex align-items-center"},Ue=Object(n["g"])("img",{src:"https://ludwigpfeiffer.com/wp-content/themes/Ludwig-Pfeiffer_Theme/img/logo.png",alt:"Dushanbe"},null,-1),qe=Object(n["g"])("h1",{class:""},"Work Submission | Dushanbe",-1),Je={class:"card-body"},Ve={class:"form-group"},$e=Object(n["g"])("label",null,"Bill",-1),ze=Object(n["g"])("option",{selected:"",disabled:""},"select bill",-1),Re={class:"form-group"},Ye=Object(n["g"])("label",null,"Type",-1),Qe=Object(n["g"])("option",{selected:"",disabled:""},"Select",-1),Ge={class:"form-group"},He=Object(n["g"])("label",null,"Material",-1),Ke=Object(n["g"])("option",{selected:"",disabled:""},"select material",-1),Xe={class:"form-row mt-3"},Ze={class:"col-md-4"},et={class:"form-group mb-lg-0"},tt={class:"col-md-4"},at={class:"form-group mb-lg-0"},it={class:"col-md-4"},nt={class:"form-group mb-0"},lt={class:"form-group"},ot={class:"form-row"},st={class:"col-md-6"},rt={class:"position-relative form-group mb-lg-0"},ct=Object(n["g"])("label",null,"Date",-1),dt={class:"col-md-6"},ut={class:"position-relative form-group mb-0"},bt=Object(n["g"])("label",null,"Work Progress",-1),gt=Object(n["f"])(),mt=Object(n["g"])("br",null,null,-1),pt={class:"btn-container"};function ft(e,t,a,i,l,o){var s=Object(n["v"])("router-link");return Object(n["p"])(),Object(n["d"])("div",Te,[Object(n["g"])("div",We,[Object(n["g"])("form",{name:"bill_form",id:"form_reset",class:"form rounded bg-white",onSubmit:t[13]||(t[13]=Object(n["F"])((function(){return o.submitBillSubmissionForm&&o.submitBillSubmissionForm.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",Me,[Object(n["g"])("div",Ee,[Object(n["g"])(s,{to:{path:"/work-submission-create"}},{default:Object(n["D"])((function(){return[Ue]})),_:1}),qe])]),Object(n["g"])("div",Je,[Object(n["g"])("div",Ve,[$e,Object(n["E"])(Object(n["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.bill=e}),onChange:t[2]||(t[2]=function(e){return o.loadType()}),class:["custom-select",{"is-invalid":l.field_validation_data&&l.field_validation_data.bill}]},[ze,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(l.all_bills,(function(e){return Object(n["p"])(),Object(n["d"])("option",{key:e.id,value:e.id},Object(n["y"])(e.bill_name.substr(0,50)+"..."),9,["value"])})),128))],34),[[n["A"],l.bill]]),l.field_validation_data&&l.field_validation_data.bill?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.field_validation_data&&l.field_validation_data.bill}},Object(n["y"])(l.isOnline?l.field_validation_data.bill[0]:l.field_validation_data.Bill),3)):Object(n["e"])("",!0)]),Object(n["g"])("div",Re,[Ye,Object(n["E"])(Object(n["g"])("select",{disabled:o.switchTypeField(),"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.type=e}),class:l.field_validation_data&&l.field_validation_data.type?"custom-select is-invalid":"custom-select all-type",onChange:t[4]||(t[4]=function(e){return o.loadMaterial()})},[Qe,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(l.filtered_types_by_bill_id,(function(e){return Object(n["p"])(),Object(n["d"])("option",{key:e.id,value:e.id},Object(n["y"])(e.type_name.substr(0,50)+"..."),9,["value"])})),128))],42,["disabled"]),[[n["A"],l.type]]),l.field_validation_data&&l.field_validation_data.type?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.field_validation_data&&l.field_validation_data.type}},Object(n["y"])(l.isOnline?l.field_validation_data.type[0]:l.field_validation_data.Type),3)):Object(n["e"])("",!0)]),Object(n["g"])("div",Ge,[He,Object(n["E"])(Object(n["g"])("select",{disabled:o.switchMaterialField(),"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.material=e}),class:l.field_validation_data&&l.field_validation_data.material?"custom-select is-invalid":"custom-select all-material",onChange:t[6]||(t[6]=function(e){return o.loadMaterialData()})},[Ke,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(l.filtered_materials_by_type_id,(function(e){return Object(n["p"])(),Object(n["d"])("option",{key:e.id,value:e.id},Object(n["y"])(e.material_name.substr(0,50)+"..."),9,["value"])})),128)),l.field_validation_data&&l.field_validation_data.material?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.field_validation_data&&l.field_validation_data.material}},Object(n["y"])(l.isOnline?l.field_validation_data.material[0]:l.field_validation_data.material),3)):Object(n["e"])("",!0)],42,["disabled"]),[[n["A"],l.material]]),Object(n["g"])("div",Xe,[Object(n["g"])("div",Ze,[Object(n["g"])("div",et,[Object(n["E"])(Object(n["g"])("input",{disabled:"",id:"serial_number","onUpdate:modelValue":t[7]||(t[7]=function(e){return l.serial_no=e}),class:"form-control",placeholder:"Serial Number"},null,512),[[n["B"],l.serial_no]])])]),Object(n["g"])("div",tt,[Object(n["g"])("div",at,[Object(n["E"])(Object(n["g"])("input",{disabled:"",id:"unit","onUpdate:modelValue":t[8]||(t[8]=function(e){return l.unit=e}),class:"form-control",placeholder:"Unit"},null,512),[[n["B"],l.unit]])])]),Object(n["g"])("div",it,[Object(n["g"])("div",nt,[Object(n["E"])(Object(n["g"])("input",{disabled:"",id:"quantity","onUpdate:modelValue":t[9]||(t[9]=function(e){return l.quantity=e}),class:"form-control",placeholder:"Quantity"},null,512),[[n["B"],l.quantity]])])])])]),Object(n["g"])("div",lt,[Object(n["g"])("div",ot,[Object(n["g"])("div",st,[Object(n["g"])("div",rt,[ct,Object(n["E"])(Object(n["g"])("input",{type:"date",id:"submission_date",class:["form-control",{"is-invalid":l.field_validation_data&&l.field_validation_data.submission_date}],"onUpdate:modelValue":t[10]||(t[10]=function(e){return l.submission_date=e})},null,2),[[n["B"],l.submission_date]]),l.field_validation_data&&l.field_validation_data.submission_date?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.field_validation_data&&l.field_validation_data.submission_date}},Object(n["y"])(l.isOnline?l.field_validation_data.submission_date[0]:l.field_validation_data.submission_date),3)):Object(n["e"])("",!0)])]),Object(n["g"])("div",dt,[Object(n["g"])("div",ut,[bt,gt,mt,Object(n["E"])(Object(n["g"])("input",{type:"number",id:"work_progress",class:["form-control",{"is-invalid":l.field_validation_data&&l.field_validation_data.work_progress}],"onUpdate:modelValue":t[11]||(t[11]=function(e){return l.work_progress=e}),placeholder:"0",min:"0",step:".01"},null,2),[[n["B"],l.work_progress]]),l.field_validation_data&&l.field_validation_data.work_progress?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:{"invalid-feedback":l.field_validation_data&&l.field_validation_data.work_progress}},Object(n["y"])(l.isOnline?l.field_validation_data.work_progress[0]:l.field_validation_data.work_progress),3)):Object(n["e"])("",!0)])])])]),Object(n["g"])("div",pt,[Object(n["g"])("button",{onSubmit:t[12]||(t[12]=Object(n["F"])((function(){return o.submitBillSubmissionForm&&o.submitBillSubmissionForm.apply(o,arguments)}),["prevent"])),id:"submit_button",class:" btn btn-primary mt-1",disabled:!!l.isDataSubmit},Object(n["y"])(l.isDataSubmit?"Loading...":"SUBMIT"),41,["disabled"])])])],32)])])}a("4de4");var Ot=a("1157"),jt=a.n(Ot),vt={name:"Form",data:function(){return{all_bills:[],all_types:[],all_materials:[],filter_bill:[],filtered_types_by_bill_id:[],filtered_materials_by_type_id:[],serial_no:null,unit:null,quantity:null,bill:null,type:null,material:null,submission_date:null,work_progress:null,field_validation_data:{bill:"",type:"",material:"",submission_date:"",work_progress:""},test1:"",isDataSubmit:!1,isOnline:window.navigator.onLine,username:localStorage.getItem("username")}},methods:{getAllData:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!localStorage.getItem("bills")){t.next=4;break}e.all_bills=JSON.parse(localStorage.getItem("bills")),t.next=8;break;case 4:return t.next=6,G("bills/");case 6:a=t.sent,a&&localStorage.setItem("bills",JSON.stringify(a));case 8:if(!localStorage.getItem("types")){t.next=12;break}e.all_types=JSON.parse(localStorage.getItem("types")),t.next=16;break;case 12:return t.next=14,G("types/");case 14:i=t.sent,i&&localStorage.setItem("types",JSON.stringify(i));case 16:if(!localStorage.getItem("materials")){t.next=20;break}e.all_materials=JSON.parse(localStorage.getItem("materials")),t.next=24;break;case 20:return t.next=22,G("materials/");case 22:n=t.sent,n&&localStorage.setItem("materials",JSON.stringify(n));case 24:case"end":return t.stop()}}),t)})))()},loadType:function(){var e=this;this.filtered_types_by_bill_id=this.all_types.filter((function(t){return t.bill.id===e.bill}))},loadMaterial:function(){var e=this;this.filtered_materials_by_type_id=this.all_materials.filter((function(t){return t.type.id===e.type}))},loadMaterialData:function(){var e=this,t=this.filtered_materials_by_type_id.filter((function(t){return t.id===e.material})),a=t.length?t[0]:{};this.serial_no=a.serial_no,this.unit=a.unit,this.quantity=a.quantity},todayDate:function(){this.submission_date=(new Date).toISOString().substr(0,10)},submitBillSubmissionForm:function(){var e=this,t=localStorage.getItem("token"),a={headers:{Authorization:"token ".concat(t)}},i={bill:this.bill,type:this.type,material:this.material,submission_date:this.submission_date,work_progress:this.work_progress};this.isDataSubmit=!0,Q.a.post("https://dushanbe-backend-apis.herokuapp.com/api/work-submissions/",i,a).then((function(t){e.isDataSubmit=!1,fe.a.fire({icon:"success",html:'Work Submitted Successfully!<br><br><div class="swal-btn-cotnainer"> <button  class="btn btn-secondary SwalBtn1 customSwalBtn">Add Again</button><button  class="btn btn-success ml-2 SwalBtn2 customSwalBtn">View List</button> </div>',showCancelButton:!1,showConfirmButton:!1}),jt()(".SwalBtn1").on("click",(function(){fe.a.close(),console.log("SwalBtn1")})),jt()(".SwalBtn2").on("click",(function(){console.log("SwalBtn2"),window.location.assign("work-submission-list")}))})).catch((function(t){window.navigator.onLine?e.field_validation_data=t.response.data:e.field_validation_data={bill:"This field may not be null",type:"This field may not be null",material:"This field may not be null",submission_date:"This field may not be null",work_progress:"This field may not be null"},e.isDataSubmit=!1})),!0===!window.navigator.onLine&&this.bill&&this.type&&this.material&&this.submission_date&&this.work_progress&&(fe.a.fire({icon:"success",html:"Work Submitted Successfully!<br><br>You're offline. Work you've submitted is processing in the background & will be add to SharePoint including work-list when you're back online.<br><br><button  class=\"btn btn-secondary SwalBtn1 customSwalBtn\">Add Again</button>",showCancelButton:!1,showConfirmButton:!1}).then((function(t){e.isDataSubmit=!1,console.log("You are in offline"),console.log(e.field_validation_data)})),jt()(".SwalBtn1").on("click",(function(){fe.a.close()}))),this.bill=null,this.type=null,this.material=null,this.submission_date=null,this.work_progress=null},switchTypeField:function(){},switchMaterialField:function(){},test:function(){}},created:function(){this.getAllData(),this.todayDate(),this.switchTypeField(),this.switchMaterialField(),this.test()}};a("12d0");vt.render=ft;var _t=vt,ht={name:"WorkSubmissionCreate",components:{Master:Ae,Form:_t}};a("0b53");ht.render=he;var yt=ht,wt=a("6c02"),kt=[{path:"/",name:"Login",component:_e},{path:"/work-submission-create",name:"WorkSubmissionCreate",component:yt},{path:"/work-submission-list",name:"WorkSubmissionList",component:le}],St=Object(wt["a"])({history:Object(wt["b"])("/"),routes:kt}),xt=St;Object(n["c"])(s).use(xt).component("fa-icon",i["a"]).mount("#app")},5726:function(e,t,a){"use strict";a("deae")},"59cf":function(e,t,a){"use strict";a("b368")},"6dba":function(e,t,a){"use strict";a("2d27")},ab63:function(e,t,a){"use strict";a("e194")},b368:function(e,t,a){},bbeb:function(e,t,a){"use strict";a("bd7c")},bd7c:function(e,t,a){},c9ad:function(e,t,a){},d01b:function(e,t,a){},deae:function(e,t,a){},e194:function(e,t,a){},e2c0:function(e,t,a){"use strict";a("d01b")}});
//# sourceMappingURL=app.dcb5c3a9.js.map