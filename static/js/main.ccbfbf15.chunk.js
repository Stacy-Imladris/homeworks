(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,,function(e,a,t){e.exports={main:"Header_main__2d1qL",links:"Header_links__1QbCr",nav:"Header_nav__1SeK5",active:"Header_active__3v1wg",menu:"Header_menu__2U58R"}},,,function(e,a,t){e.exports={main:"Message_main__3Vizw",avatar:"Message_avatar__10JI9",angle:"Message_angle__2Sq_c",in:"Message_in__13z9-",text:"Message_text__2_VkM",name:"Message_name__12rix",message:"Message_message__271Va",time:"Message_time__3bEB4"}},function(e,a,t){e.exports={main:"AlternativeMessage_main__3DIws",avatar:"AlternativeMessage_avatar__2GycO",angle:"AlternativeMessage_angle__39nkb",in:"AlternativeMessage_in__100an",text:"AlternativeMessage_text__3hA_y",name:"AlternativeMessage_name__37m5D",message:"AlternativeMessage_message__1QYpo",time:"AlternativeMessage_time__2LfqX"}},function(e,a,t){e.exports={container:"Affairs_container__2lXza",title:"Affairs_title__xTJkj",button:"Affairs_button__3C9kP"}},function(e,a,t){e.exports={button:"Greeting_button__3W97A",error:"Greeting_error__2hk1o",ok:"Greeting_ok__3fXEo",forError:"Greeting_forError__3s0ow",forOk:"Greeting_forOk__3cHiv"}},function(e,a,t){e.exports={container:"Error_container__16aiX",error:"Error_error__3uZKD",text:"Error_text__1fAS7",nav:"Error_nav__yvS-w",textNav:"Error_textNav__N_mMe",joke:"Error_joke__17ceO"}},,,function(e,a,t){e.exports={affair:"Affair_affair__uqmYx",name:"Affair_name__3L_Zk",priority:"Affair_priority__1rbPh"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2E9Ay",errorInput:"SuperInputText_errorInput__176d7",error:"SuperInputText_error__1wT8X"}},function(e,a,t){e.exports={blue:"HW4_blue__2S4o0",column:"HW4_column__2hEdl",testSpanError:"HW4_testSpanError__3bPNF"}},,function(e,a,t){e.exports={default:"SuperButton_default__12maz",red:"SuperButton_red__2iVw8"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2OEd1",spanClassName:"SuperCheckbox_spanClassName__cqnDf"}},,function(e,a,t){e.exports={App:"App_App__1KRo0"}},function(e,a,t){e.exports={main:"HW2_main__2jvyR"}},function(e,a,t){e.exports={editableSpan:"SuperEditableSpan_editableSpan__1LWsG"}},,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(22),s=t.n(c),i=(t(31),t(23)),o=t.n(i),l=t(6),j=t.n(l),u=t(7),d=t(9),b=t.n(d),m=t(0),_=function(e){return Object(m.jsxs)("div",{className:b.a.main,children:[Object(m.jsxs)("div",{className:b.a.avatar,children:[Object(m.jsx)("img",{src:e.avatar}),Object(m.jsx)("div",{className:b.a.angle,children:Object(m.jsx)("div",{className:b.a.in})})]}),Object(m.jsxs)("div",{className:b.a.text,children:[Object(m.jsx)("div",{className:b.a.name,children:e.name}),Object(m.jsx)("div",{className:b.a.message,children:e.message}),Object(m.jsx)("div",{className:b.a.time,children:e.time})]})]})},O=t(10),x=t.n(O),h=function(e){return Object(m.jsxs)("div",{className:x.a.main,children:[Object(m.jsxs)("div",{className:x.a.text,children:[Object(m.jsx)("div",{className:x.a.name,children:e.name}),Object(m.jsx)("div",{className:x.a.message,children:e.message}),Object(m.jsx)("div",{className:x.a.time,children:e.time})]}),Object(m.jsxs)("div",{className:x.a.avatar,children:[Object(m.jsx)("img",{src:e.avatar}),Object(m.jsx)("div",{className:x.a.angle,children:Object(m.jsx)("div",{className:x.a.in})})]})]})},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Stacy Imladris",p="Homework is done! I really did it myself. Thank you, IT-incubator!",N="03:49",g="http://s020.radikal.ru/i710/1311/b6/1d6e1d8d58d7.jpg",k="IT-Incubator",C="Good job! :)",y="21:40";var S=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("hr",{}),Object(m.jsx)(_,{avatar:v,name:f,message:p,time:N}),Object(m.jsx)(h,{avatar:g,name:k,message:C,time:y}),Object(m.jsx)("hr",{})]})},E=t(3),A=t(16),I=t.n(A),w=t(5),J=t(8),P=t(20),M=t.n(P),U=function(e){var a=e.red,t=e.className,n=Object(J.a)(e,["red","className"]),r="".concat(a?M.a.red:M.a.default," ").concat(t);return Object(m.jsx)("button",Object(w.a)({className:r},n))};var R=function(e){var a={backgroundColor:"high"===e.affair.priority?"#e14848":"middle"===e.affair.priority?"#cb811e":"#88cc2a"};return Object(m.jsxs)("div",{className:I.a.affair,children:[Object(m.jsx)("div",{className:I.a.name,children:e.affair.name}),Object(m.jsx)("div",{className:I.a.priority,style:a,children:e.affair.priority}),Object(m.jsx)("div",{children:Object(m.jsx)(U,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})})]})},T=t(11),H=t.n(T);var F=function(e){var a=e.data.map((function(a){return Object(m.jsx)(R,{affair:a,deleteAffairCallback:e.deleteAffairCallback},a._id)}));return Object(m.jsx)("div",{className:H.a.container,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:H.a.title,children:"My ToDoList:"}),Object(m.jsx)(U,{onClick:function(){e.setFilter("all")},className:H.a.button,children:"All"}),Object(m.jsx)(U,{onClick:function(){e.setFilter("high")},className:H.a.button,children:"High"}),Object(m.jsx)(U,{onClick:function(){e.setFilter("middle")},className:H.a.button,children:"Middle"}),Object(m.jsx)(U,{onClick:function(){e.setFilter("low")},className:H.a.button,children:"Low"}),Object(m.jsx)("div",{children:a})]})})},q=t(24),B=t.n(q),L=[{_id:1,name:"Study",priority:"high"},{_id:2,name:"Books",priority:"low"},{_id:3,name:"Skyrim",priority:"low"},{_id:4,name:"React",priority:"high"},{_id:5,name:"JS / TS",priority:"middle"}];var W=function(){var e=Object(n.useState)(L),a=Object(E.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("all"),s=Object(E.a)(c,2),i=s[0],o=s[1],l=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,i);return Object(m.jsxs)("div",{className:B.a.main,children:[Object(m.jsx)(F,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),Object(m.jsx)("hr",{})]})},G=t(26),D=t(12),X=t.n(D),K=t(17),z=t.n(K),V=function(e){var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(z.a.error," ").concat(i||""),j="".concat(z.a.errorInput," ").concat(s||z.a.superInput);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",Object(w.a)({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(m.jsx)("span",{className:l,children:c})]})},Y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s="Name is require!"===r||0===a.length,i="Name is require!"===r?X.a.error:X.a.ok,o="Name is require!"===r?X.a.forError:X.a.forOk;return Object(m.jsxs)("div",{children:[Object(m.jsx)(V,{value:a,onChange:t,error:r,spanClassName:o,className:i}),Object(m.jsxs)("div",{className:X.a.cont,children:[Object(m.jsx)(U,{disabled:s,onClick:n,className:X.a.button,children:"add"}),Object(m.jsxs)("span",{children:["Total number: ",c]})]})]})},Z=function(e){var a=e.users,t=e.addUserCallback,r=Object(n.useState)(""),c=Object(E.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)("Enter your name"),l=Object(E.a)(o,2),j=l[0],u=l[1],d=a.length;return Object(m.jsx)(Y,{name:s,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(i(a),u("Name is correct!")):(u("Name is require!"),i(""))},addUser:function(){t(s),alert("Hello ".concat(s,"!")),i(""),u("Enter your name")},error:j,totalUsers:d})},Q=t(35);var $=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(Z,{users:t,addUserCallback:function(e){r([{_id:Object(Q.a)(),name:e}].concat(Object(G.a)(t)))}}),Object(m.jsx)("hr",{})]})},ee=t(18),ae=t.n(ee),te=t(21),ne=t.n(te),re=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(J.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ne.a.checkbox," ").concat(n||"");return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",Object(w.a)({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),r&&Object(m.jsx)("span",{className:ne.a.spanClassName,children:r})]})};var ce=function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],r=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),o=Object(E.a)(i,2),l=o[0],j=o[1];return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:ae.a.column,children:[Object(m.jsx)(V,{value:t,onChangeText:r,onEnter:s,error:c,spanClassName:ae.a.testSpanError}),Object(m.jsx)(V,{className:ae.a.blue}),Object(m.jsx)(U,{children:"default"}),Object(m.jsx)(U,{red:!0,onClick:s,children:"delete "}),Object(m.jsx)(U,{disabled:!0,children:"disabled"}),Object(m.jsx)(re,{checked:l,onChangeChecked:j,children:"some text "}),Object(m.jsx)(re,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(m.jsx)("hr",{})]})},se=t(25),ie=t.n(se),oe=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,r=e.spanProps,c=Object(J.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(E.a)(s,2),o=i[0],l=i[1],j=r||{},u=j.children,d=j.onDoubleClick,b=j.className,_=Object(J.a)(j,["children","onDoubleClick","className"]),O="".concat(ie.a.editableSpan," ").concat(b);return Object(m.jsx)(m.Fragment,{children:o?Object(m.jsx)(V,Object(w.a)({autoFocus:!0,onBlur:function(e){l(!1),a&&a(e)},onEnter:function(){l(!1),t&&t()}},c)):Object(m.jsxs)("span",Object(w.a)(Object(w.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:O},_),{},{children:["\u270e ",u||c.value]}))})};function le(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function je(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}le("test",{x:"A",y:1});je("test",{x:"",y:0});var ue=function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(oe,{value:t,onChangeText:r,spanProps:{children:t?void 0:"enter text here..."}})}),Object(m.jsx)(U,{onClick:function(){le("editable-span-value",t)},children:"save"}),Object(m.jsx)(U,{onClick:function(){r(je("editable-span-value",t))},children:"restore"}),Object(m.jsx)("hr",{})]})};var de=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(S,{}),Object(m.jsx)(W,{}),Object(m.jsx)($,{}),Object(m.jsx)(ce,{}),Object(m.jsx)(ue,{})]})};var be=function(){return Object(m.jsx)("div",{children:"Empty Junior Page"})};var me=function(){return Object(m.jsx)("div",{children:"Empty Junior Plus Page"})},_e=t(13),Oe=t.n(_e);var xe,he=function(){return Object(m.jsxs)("div",{className:Oe.a.container,children:[Object(m.jsx)("div",{className:Oe.a.error,children:"404"}),Object(m.jsx)("div",{className:Oe.a.text,children:"Page not found!"}),Object(m.jsxs)("div",{className:Oe.a.textNav,children:["Maybe, you want to see our ",Object(m.jsx)(u.b,{to:xe.PRE_JUNIOR,className:Oe.a.nav,children:"Pre-Junior"})," page?"]}),Object(m.jsxs)("div",{children:["In case you decide to leave this awesome application, press button:",Object(m.jsx)("div",{className:Oe.a.joke,children:Object(m.jsx)(U,{children:"Leave"})})]})]})},ve=t(2);!function(e){e.PRE_JUNIOR="/pre-junior",e.JUNIOR="/junior",e.JUNIOR_PLUS="/junior-plus"}(xe||(xe={}));var fe=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(ve.d,{children:[Object(m.jsx)(ve.b,{path:"/",element:Object(m.jsx)(ve.a,{to:xe.PRE_JUNIOR})}),Object(m.jsx)(ve.b,{path:xe.PRE_JUNIOR,element:Object(m.jsx)(de,{})}),Object(m.jsx)(ve.b,{path:xe.JUNIOR,element:Object(m.jsx)(be,{})}),Object(m.jsx)(ve.b,{path:xe.JUNIOR_PLUS,element:Object(m.jsx)(me,{})}),Object(m.jsx)(ve.b,{element:Object(m.jsx)(he,{})})]})})};var pe=function(){return Object(m.jsxs)("nav",{className:j.a.main,children:[Object(m.jsxs)("div",{className:j.a.links,children:[Object(m.jsx)(u.b,{to:xe.PRE_JUNIOR,className:function(e){return e.isActive?j.a.active:j.a.nav},children:"Pre-Junior"}),Object(m.jsx)(u.b,{to:xe.JUNIOR,className:function(e){return e.isActive?j.a.active:j.a.nav},children:"Junior"}),Object(m.jsx)(u.b,{to:xe.JUNIOR_PLUS,className:function(e){return e.isActive?j.a.active:j.a.nav},children:"Junior+"})]}),Object(m.jsx)("div",{className:j.a.menu,children:"Menu"})]})};var Ne=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(pe,{}),Object(m.jsx)(fe,{})]})})};var ge=function(){return Object(m.jsx)("div",{className:o.a.App,children:Object(m.jsx)(Ne,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(ge,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.ccbfbf15.chunk.js.map