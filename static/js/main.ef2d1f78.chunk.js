(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{18:function(e,a,t){e.exports=t(40)},23:function(e,a,t){},24:function(e,a,t){},4:function(e){e.exports=JSON.parse('{"company":"Topmac Digital","title":"dashboard telegram","api":{"getJson":"https://9ia11njxu4.execute-api.us-east-1.amazonaws.com/dev/get-config","save":"https://9ia11njxu4.execute-api.us-east-1.amazonaws.com/dev/save-config","getAllUsers":"https://9ia11njxu4.execute-api.us-east-1.amazonaws.com/dev/get-all-users","banUserById":"https://9ia11njxu4.execute-api.us-east-1.amazonaws.com/dev/ban-user-by-id","getGroupNames":"https://9ia11njxu4.execute-api.us-east-1.amazonaws.com/dev/get-group-names"}}')},40:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(11),s=t.n(c),o=(t(23),t(24),t(25),t(2)),i=t(7),m=t(3),u=t.n(m),d=t(6),p=t(4),f=function(e){return l.a.createElement("div",{className:"loader"})},E=function(e){var a=e.shouldWarn,t=e.setShouldWarn,n=l.a.useState(!0),r=Object(o.a)(n,2),c=r[0],s=r[1];l.a.useEffect((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p.api.getJson).then((function(e){return e.json()})).then((function(e){var a=e.body;Object.keys(a).forEach((function(e){var t=document.querySelector("#".concat(e));t&&(t.value=a[e])}))})).catch((function(e){throw e}));case 2:s(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);var i=l.a.useCallback(function(){var e=Object(d.a)(u.a.mark((function e(a){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.persist(),a.preventDefault(),t(!1),n={},new FormData(a.target).forEach((function(e,a){return n[a]=e})),r=p.api.save,e.next=8,fetch(r,{method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()}));case 8:window.alert("dados salvos com sucesso!");case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[t]);if(c)return l.a.createElement(f,null);return l.a.createElement("div",{className:"form container has-text-left "},l.a.createElement("form",{onChange:function(e){e.persist(),a||t(!0),console.log(e.target)},onSubmit:i,className:"is-left"},l.a.createElement("h1",{className:"title"},"Geral:"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Usu\xe1rios Blindados (separados por v\xedrgula)"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"whitelist",id:"whitelist",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("hr",null),l.a.createElement("h1",{className:"title"},"Mensagens:"),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"In\xedcio da autentica\xe7\xe3o"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"start_message",id:"start_message",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Boas vindas"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"greetings",id:"greetings",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Contato recebido"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"received",id:"received",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Sobrescrever contato"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"override",id:"override",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"limite de tempo excedido"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"exceeded_timeout",id:"exceeded_timeout",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"n\xfamero ativo"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"active_number",id:"active_number",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"n\xfamero inativo"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"inactive_number",id:"inactive_number",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"fim do tempo limite"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"end_of_timeout",id:"end_of_timeout",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"bot\xe3o de compartilhamento de n\xfamero"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"share_button",id:"share_button",className:"textarea",type:"text",placeholder:"insira aqui seu text"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"problemas na assinatura"),l.a.createElement("div",{className:"control"},l.a.createElement("textarea",{name:"cancel_association",id:"cancel_association",className:"textarea",placeholder:"insira aqui seu text"}))),l.a.createElement("h1",{className:"title"},"Timeouts: ",l.a.createElement("small",{className:"is-size-5 has-text-weight-light"},"(valores em segundos)")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"tempo limite para recebimento do n\xfamero"),l.a.createElement("div",{class:"control"},l.a.createElement("input",{className:"input",name:"timeout_receive",id:"timeout_receive",type:"text",placeholder:"Text input"}))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"tempo limite para bloqueio de usu\xe1rio"),l.a.createElement("div",{class:"control"},l.a.createElement("input",{className:"input",name:"timeout_block",id:"timeout_block",type:"text",placeholder:"Text input"}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"button is-link",type:"submit"},"Salvar todas as modifica\xe7\xf5es")))},b=t(5),v=t(16),h=t.n(v),N=t(17),g=t.n(N),x=t(1),y=t.n(x),O={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},j=function(){var e=Object(d.a)(u.a.mark((function e(a,t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p.api.banUserById,{method:"POST",body:JSON.stringify({userId:a,groupId:t,reason:n})}).then((function(e){console.log(e),e&&e.data&&!e.data.ok?alert("problema ao deletar o usuario, contate o suporte!"):(alert("usuario deletado com sucesso!"),window.location.reload())}));case 2:console.log(a,t);case 3:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),w=function(e){var a=e.isOpen,t=e.closeModal,n=e.data,r=l.a.useState(null),c=Object(o.a)(r,2),s=c[0],i=c[1];return l.a.createElement(g.a,{isOpen:a,onRequestClose:t,style:O,shouldCloseOnOverlayClick:!0},l.a.createElement("h2",null,"Descreva para o usuario o motivo do banimento"),l.a.createElement("div",{className:"control reason"},l.a.createElement("textarea",{onChange:function(e){e.persist(),i(e.target.value)},className:"textarea"})),l.a.createElement("div",{className:"action-buttons"},l.a.createElement("button",{onClick:function(){var e=y.a.get(n,"userId",""),a=y.a.get(n,"groupId");j(e,a,s),t()},className:"button is-primary"},"Confirmar"),l.a.createElement("button",{onClick:t,className:"button is-secondary"},"Cancelar")))},k=t(8),C=function(e){return function(a){return l.a.createElement("span",{className:"trigger-container"},e,a?l.a.createElement(k.b,null):l.a.createElement(k.a,null))}},_=function(e){var a=e.groupId,t=e.users,n=e.filter,r=e.onDelete,c=l.a.useState(null),s=Object(o.a)(c,2),i=s[0],m=s[1];l.a.useEffect((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p.api.getGroupNames,"?groupId=").concat(encodeURI(a))).then((function(e){return e.json()}));case 2:t=e.sent,m(t.body);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var f=i||("-1001241265705"===a?"COMUNIDADE TOPMAC DE SINAIS E ACOMPANHAMENTOS":"Carregando..."),E="container has-background-info has-text-white";return l.a.createElement(h.a,{className:E,openedClassName:E,contentOuterClassName:"has-background-white",trigger:C(f)(!1),triggerWhenOpen:C(f)(!0),key:a},l.a.createElement(S,{users:t,id:a,onDelete:r,filter:n}))},S=function(e){var a=e.users,t=e.id,n=e.filter,r=e.onDelete;return l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table group-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"nome"),l.a.createElement("th",null,"telefone"),l.a.createElement("th",null,"estado"),l.a.createElement("th",null,"a\xe7\xf5es"))),l.a.createElement("tbody",null,a.filter((function(e){return function(e,a){var t=y.a.reduce(a,(function(e,a,t){return void 0===a&&delete e[t],e}),a);return 0===Object.keys(t).length||Object.keys(t).some((function(a){return y.a.isBoolean(y.a.get(e,a))?t[a]===y.a.get(e,a):y.a.get(e,a)&&y.a.get(e,a).toLowerCase().includes((t[a]||"").toLowerCase())}))}(e,n)&&!e.removed})).map((function(e){var a=e.phone_number,n=e.active,c=e.user_id,s=e.user;return l.a.createElement("tr",{key:c},l.a.createElement("td",null,s?s.name:""),l.a.createElement("td",null,a),l.a.createElement("td",null,l.a.createElement("span",{className:"tag ".concat(n?"is-success":"is-danger")},n?"ativo":"inativo")),l.a.createElement("td",null,l.a.createElement(k.c,{className:"icon",onClick:function(){return r(c,t)}})))})))))},I=function(e){var a=l.a.useState(!1),t=Object(o.a)(a,2),n=t[0],r=t[1],c=l.a.useState(null),s=Object(o.a)(c,2),m=s[0],E=s[1],v=l.a.useState(null),h=Object(o.a)(v,2),N=h[0],g=h[1],x=l.a.useState({}),O=Object(o.a)(x,2),j=O[0],k=O[1],C=function(e,a){r(!0),E({userId:e,groupId:a})};if(l.a.useEffect((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p.api.getAllUsers).then((function(e){return e.json()}));case 2:a=e.sent,g(y.a.groupBy(y.a.orderBy(a.users,["active"],["desc"]),"group_id"));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!N)return l.a.createElement(f,null);var S=y.a.debounce((function(e,a){return k(Object(b.a)(Object(b.a)({},j),{},Object(i.a)({},a,e.target.value||void 0)))}),500);return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,{isOpen:n,data:m,closeModal:function(){r(!1),E(null)}}),l.a.createElement("label",{htmlFor:"filter_name"},"Filtro Nome"),l.a.createElement("input",{type:"text",onChange:function(e){return e.persist(),S(e,"user.name")},name:"filter_name"}),l.a.createElement("label",{htmlFor:"filter_number"},"Filtro N\xfamero"),l.a.createElement("input",{type:"text",onChange:function(e){e.persist(),S(e,"phone_number")},name:"filter_number"}),l.a.createElement("button",{className:"button is-primary",onClick:function(){return k(Object(b.a)(Object(b.a)({},j),{},{active:!0}))}},"Filtrar ativos"),l.a.createElement("button",{className:"button is-danger",onClick:function(){return k(Object(b.a)(Object(b.a)({},j),{},{active:!1}))}},"Filtrar inativos"),l.a.createElement("button",{className:"button",onClick:function(){return k(Object(b.a)(Object(b.a)({},j),{},{active:void 0}))}},"Mostrar ativos e inativos"),l.a.createElement("button",{className:"button",onClick:function(){return k({})}},"Limpar"),y.a.map(N,(function(e,a){return l.a.createElement(l.a.Fragment,{key:a},l.a.createElement(_,{users:e,groupId:a,onDelete:C,filter:j}))})))},q=(n={},Object(i.a)(n,"gerenciamento",(function(e){return l.a.createElement(I,null)})),Object(i.a)(n,"mensagens",(function(e){return l.a.createElement(E,e)})),n),D=function(e){var a=e.active,t=e.setTab,n=e.tabName;return l.a.createElement("li",{className:n===a?"is-active":"",key:n},l.a.createElement("a",{onClick:function(){return t(n)}},n.toUpperCase()))},T=function(e){var a=l.a.useState("gerenciamento"),t=Object(o.a)(a,2),n=t[0],r=t[1],c=l.a.useState(!1),s=Object(o.a)(c,2),i=s[0],m=s[1],u=q[n],d=function(e){var a=!0;i&&(a=window.confirm("h\xe1 altera\xe7\xf5es n\xe3o salvas que ser\xe3o perdidas. tem certeza que deseja mudar de aba?")),a&&(r(e),m(!1))};return l.a.createElement("div",{className:"tablist"},l.a.createElement("div",{className:"tabs is-centered"},l.a.createElement("ul",null,Object.keys(q).map((function(e){return l.a.createElement(D,{key:e,active:n,setTab:d,tabName:e})})))),l.a.createElement("div",{className:"container"},l.a.createElement(u,{shouldWarn:i,setShouldWarn:m,setTab:r})))},A=function(e){return l.a.createElement("section",{className:"hero is-info bg-blue"},l.a.createElement("div",{className:"hero-body"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"title"},p.company||"company"),l.a.createElement("h2",{className:"subtitle"},p.title||"title"))))};var B=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(A,null),l.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ef2d1f78.chunk.js.map