(window.webpackJsonpv2=window.webpackJsonpv2||[]).push([[9],{717:function(e,t,c){"use strict";c.r(t);var n=c(13),a=c(0),i=c.n(a),o=c(14),s=c(23),r=c(48),u=c(62);t.default=function(e){var t=Object(o.c)(),c=Object(a.useState)(""),l=Object(n.a)(c,2),d=(l[0],l[1]);function b(){var t=Object(u.a)("prevRouter")||"/";t.includes("?code=")?e.history.push("/"):e.history.push(t)}return Object(a.useEffect)(function(){var c=!1,n=Object(s.c)(e.location.search);return n.code&&(d(!0),t(Object(r.a)({code:n.code})).then(function(){b(),c||d(!1)}).catch(function(e){b(),c||d(!1)})),function(){c=!0}},[]),i.a.createElement("div",{className:"github-loading-container"},i.a.createElement("div",null,i.a.createElement("img",{src:"https://github.githubassets.com/images/spinners/octocat-spinner-64.gif",alt:"loading",className:"github-loading-img"})),i.a.createElement("div",{className:"text"},"Loading activity..."))}}}]);