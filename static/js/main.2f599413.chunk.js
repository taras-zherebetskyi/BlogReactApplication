(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{32:function(t,e,n){},34:function(t,e,n){},36:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(10),a=n.n(r),s=n(4),o=n(11),i=(n(32),n(3)),u=n(2),l=n.n(u),b=n(5),j=n(6),p=n(21),d=n.n(p),f=n(7),O="https://bloggy-api.herokuapp.com";function h(t){return m.apply(this,arguments)}function m(){return(m=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(O).concat(e));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("error ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(O).concat(e),{method:"DELETE"});case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("error ".concat(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function y(t,e){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(l.a.mark((function t(e,n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(O).concat(e),{method:"POST",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(Object(f.a)({},n))});case 2:return c=t.sent,t.abrupt("return",c.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(b.a)(l.a.mark((function t(e,n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(O).concat(e),{method:"PUT",headers:{"Content-type":"application/json; charset=utf-8"},body:JSON.stringify(Object(f.a)({},n))});case 2:return c=t.sent,t.abrupt("return",c.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return h("/posts")}function k(t){return h("/posts/".concat(t))}function g(t,e){return function(t,e){return N.apply(this,arguments)}("/posts/".concat(e),t)}var P="SET_ALL_POSTS",C="SET_ACTIVE_POST_ID",E="SET_COMMENTS",S="SET_MODEL_EDIT",T="SET_MODEL_REMOVE",A=function(t){return{type:P,payloud:t}},M=function(t){return{type:C,payloud:t}},D=function(t){return{type:E,payloud:t}},L=function(t){return{type:S,payloud:t}},F=function(t){return{type:T,payloud:t}},I=function(t){return t.posts},R=function(t){return t.activePostId},q=function(t){return t.comments},B=function(t){return t.isEditModel},J=function(t){return t.isRemoveModel},V=(n(34),n(1)),H=function(){return Object(V.jsx)("div",{className:"Loader",children:Object(V.jsx)("div",{className:"Loader__content"})})},U=(n(36),n(9)),X=n.n(U),z=function(){var t=Object(s.b)(),e=Object(s.c)(B),n=Object(s.c)(R),r=Object(c.useState)(""),a=Object(j.a)(r,2),o=a[0],i=a[1],u=Object(c.useState)(""),p=Object(j.a)(u,2),d=p[0],f=p[1],O=function(){var t=Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(n);case 2:e=t.sent,i(e.title),f(e.body);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,t(M(0)),t(A(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);var m=function(){var t=Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={id:n,title:o,body:d},t.next=3,g(e,n);case 3:h();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){t(L(!1))},v=function(t){var e=t.currentTarget,n=e.value;switch(e.name){case"body":f(n);break;case"title":i(n)}};return X.a.setAppElement("#root"),Object(V.jsx)("div",{children:Object(V.jsxs)(X.a,{isOpen:e,onRequestClose:x,className:"Modal",children:[Object(V.jsx)("h2",{className:"subtitle Modal__title",children:"Edit product"}),Object(V.jsxs)("form",{className:"Modal__form",onSubmit:function(e){e.preventDefault(),(d.trim()?o.trim()||(i(o.trim()),0):(f(d.trim()),0))&&(m(),t(L(!1)))},children:[Object(V.jsxs)("label",{htmlFor:"title",children:["Title: \xa0",Object(V.jsx)("input",{className:"input",type:"text",required:!0,placeholder:"Title",name:"title",id:"title",value:o,onChange:v})]}),Object(V.jsxs)("label",{htmlFor:"body",children:["Body: \xa0",Object(V.jsx)("textarea",{className:"textarea Modal__textarea",required:!0,placeholder:"Body",name:"body",id:"body",value:d,onChange:v})]}),Object(V.jsxs)("section",{className:"Modal__buttons",children:[Object(V.jsx)("button",{type:"submit",className:"button",children:"Save"}),Object(V.jsx)("button",{type:"button",className:"button",onClick:x,children:"Close"})]})]})]})})},G=(n(46),n(47),function(){var t=Object(s.b)(),e=Object(s.c)(J),n=Object(s.c)(R),c=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,t(M(0)),t(A(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){t(F(!1))},a=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/posts/".concat(n));case 2:c(),t(F(!1)),t(M(0));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return X.a.setAppElement("#root"),Object(V.jsx)("div",{children:Object(V.jsxs)(X.a,{isOpen:e,onRequestClose:r,className:"Modal",children:[Object(V.jsx)("h2",{className:"subtitle Modal__title",children:"Are you sure?"}),Object(V.jsxs)("section",{className:"Modal__buttons",children:[Object(V.jsx)("button",{type:"button",className:"button",onClick:a,children:"Delete"}),Object(V.jsx)("button",{type:"button",className:"button",onClick:r,children:"Close"})]})]})})}),K=function(){var t=Object(s.b)(),e=Object(s.c)(I),n=Object(s.c)(B),r=Object(s.c)(J),a=Object(s.c)(R),o=Object(c.useState)(!1),i=Object(j.a)(o,2),u=i[0],p=i[1],f=function(){var e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:n=e.sent,t(A(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,f();case 3:p(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){O()}),[]);var h=function(e){var n=e.currentTarget.value;t(M(a===+n?0:+n))},m=function(e){t(M(+e.currentTarget.value)),t(L(!0))},x=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(M(+n.currentTarget.value)),t(F(!0));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u?Object(V.jsx)(H,{}):Object(V.jsxs)("div",{className:"PostsList",children:[Object(V.jsx)("h2",{className:"subtitle PostsList__subtitle",children:"Posts:"}),Object(V.jsx)("ul",{className:"PostsList__list",children:e.map((function(t){return Object(V.jsxs)("li",{className:"PostsList__item",children:[Object(V.jsxs)("section",{className:"PostsList__post",children:[Object(V.jsx)("h3",{className:"subtitle",children:t.title}),Object(V.jsx)("div",{className:"PostsList__body",children:t.body})]}),Object(V.jsx)("button",{type:"button",className:d()("button PostsList__button-open",{"is-active":a===t.id}),value:t.id,onClick:h,children:a===t.id?Object(V.jsx)(V.Fragment,{children:"Close"}):Object(V.jsx)(V.Fragment,{children:"Open"})}),Object(V.jsxs)("div",{className:"PostsList__buttons",children:[Object(V.jsx)("button",{type:"button",className:"button",value:t.id,onClick:m,children:"Edit"}),Object(V.jsx)("button",{type:"button",className:"button",value:t.id,onClick:x,children:"Delete"})]})]},t.id)}))}),n&&Object(V.jsx)(z,{}),r&&Object(V.jsx)(G,{})]})};function Q(t){return h("/comments?postId=".concat(t))}n(48);var W=function(){var t=Object(s.b)(),e=Object(s.c)(R),n=Object(s.c)(q),c=function(){var e=Object(b.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n);case 2:c=e.sent,t(D(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){var t=Object(b.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.currentTarget.value,t.next=3,x("/comments/".concat(+r));case 3:c(e);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(V.jsx)("ul",{className:"CommentList",children:n.map((function(t){return Object(V.jsxs)("li",{className:"CommentList__item",children:[Object(V.jsx)("button",{type:"button",className:"CommentList__button button",value:t.id,onClick:r,children:"X"}),Object(V.jsx)("p",{children:t.body})]},t.id)}))})},Y=(n(49),function(){var t=Object(s.b)(),e=Object(s.c)(R),n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],o=r[1],i=function(){var e=Object(b.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n);case 2:c=e.sent,t(D(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var t=Object(b.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y("/comments",{postId:e,body:a});case 2:(a.trim()||(o(a.trim()),0))&&(o(""),i(e));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(V.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),u()},children:[Object(V.jsx)("div",{className:"form-field",children:Object(V.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"textarea",value:a,onChange:function(t){o(t.currentTarget.value)},required:!0})}),Object(V.jsx)("button",{type:"submit",className:"NewCommentForm__button button",children:"Add a comment"})]})}),Z=(n(50),function(){var t=Object(s.b)(),e=Object(s.c)(R),n=Object(s.c)(q),r=Object(c.useState)(!0),a=Object(j.a)(r,2),o=a[0],i=a[1],u=Object(c.useState)(null),p=Object(j.a)(u,2),d=p[0],f=p[1],O=Object(c.useState)(!1),h=Object(j.a)(O,2),m=h[0],x=h[1],v=function(){var e=Object(b.a)(l.a.mark((function e(n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n);case 2:c=e.sent,t(D(c));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var t=Object(b.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.next=3,k(n);case 3:c=t.sent,v(e),f(c),x(!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){e&&y(e)}),[e]);return m?Object(V.jsx)(H,{}):Object(V.jsxs)("div",{className:"PostDetails",children:[Object(V.jsx)("h2",{className:"subtitle PostDetails__subtitle",children:"Post details:"}),d?Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("section",{className:"PostDetails__post",children:[Object(V.jsx)("h3",{className:"subtitle PostDetails__post-title",children:d.title}),Object(V.jsx)("div",{className:"PostDetails__post-body",children:d.body})]}),!!n.length&&Object(V.jsxs)("section",{className:"PostDetails__comments",children:[Object(V.jsxs)("button",{type:"button",className:"button PostDetails__hide",onClick:function(){i((function(t){return!t}))},children:[o?Object(V.jsx)(V.Fragment,{children:"Hide "}):Object(V.jsx)(V.Fragment,{children:"Show "}),n.length,Object(V.jsx)(V.Fragment,{children:" comments"})]}),o&&Object(V.jsx)(W,{})]}),Object(V.jsx)("section",{children:Object(V.jsx)("div",{className:"PostDetails__form",children:Object(V.jsx)(Y,{})})})]}):Object(V.jsx)("span",{children:"Can not find post details"})]})}),$=(n(51),function(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),s=Object(j.a)(a,2),o=s[0],i=s[1],u=function(){var t=Object(b.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e={title:n,body:o},!(o.trim()?n.trim()||(r(n.trim()),0):(i(o.trim()),0))){t.next=5;break}return t.next=4,y("/posts",e);case 4:r(""),i("");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(t){var e=t.currentTarget,n=e.value;switch(e.name){case"body":i(n);break;case"title":r(n)}};return Object(V.jsxs)("form",{className:"AddPost__form",onSubmit:function(t){t.preventDefault(),u()},children:[Object(V.jsxs)("label",{htmlFor:"title",children:["Title: \xa0",Object(V.jsx)("input",{className:"input AddPost__input",type:"text",id:"title",name:"title",required:!0,value:n,placeholder:"Type title here",onChange:p})]}),Object(V.jsxs)("label",{htmlFor:"body",children:["Body: \xa0",Object(V.jsx)("textarea",{className:"textarea AddPost__textarea",required:!0,id:"body",name:"body",value:o,placeholder:"Type body here",onChange:p})]}),Object(V.jsx)("button",{type:"submit",className:"button AddPost__button",children:"Add post"})]})}),tt=function(){var t=Object(s.c)(R);return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsxs)("header",{className:"App__header",children:[Object(V.jsx)("h1",{className:"title App__title",children:"React/Redux Blog"}),Object(V.jsx)(o.b,{to:"/",className:"button App__button",children:"Posts"}),Object(V.jsx)(o.b,{to:"/addpost",className:"button App__button",children:"Add post"})]}),Object(V.jsx)("main",{className:"App__main",children:Object(V.jsxs)(i.c,{children:[Object(V.jsx)(i.a,{path:"/addpost",element:Object(V.jsx)(V.Fragment,{children:Object(V.jsx)("div",{className:"App__content",children:Object(V.jsx)($,{})})})}),Object(V.jsx)(i.a,{path:"/",element:Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"App__sidebar",children:Object(V.jsx)(K,{})}),Object(V.jsx)("div",{className:"App__content",children:t?Object(V.jsx)(Z,{}):Object(V.jsx)("h3",{className:"subtitle",children:"Select post"})})]})})]})})]})},et=(n(52),n(22)),nt={posts:[],activePostId:0,comments:[],isEditModel:!1,isRemoveModel:!1},ct=Object(et.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:return Object(f.a)(Object(f.a)({},t),{},{isEditModel:e.payloud});case T:return Object(f.a)(Object(f.a)({},t),{},{isRemoveModel:e.payloud});case E:return Object(f.a)(Object(f.a)({},t),{},{comments:e.payloud});case P:return Object(f.a)(Object(f.a)({},t),{},{posts:e.payloud});case C:return Object(f.a)(Object(f.a)({},t),{},{activePostId:e.payloud});default:return t}}));a.a.render(Object(V.jsx)(s.a,{store:ct,children:Object(V.jsx)(o.a,{children:Object(V.jsx)(tt,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2f599413.chunk.js.map