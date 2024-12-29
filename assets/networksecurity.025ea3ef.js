import{u as a,c as t,w as c,_ as p,o as r,a as s,p as l}from"./app.1bcf4311.js";const i=s("div",{class:"prose m-auto"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#\u653B\u51FB\u7BC7"},"\u653B\u51FB\u7BC7 "),s("ul",null,[s("li",null,[s("a",{href:"#cross-site-scripting-xss"},"Cross-Site Scripting(XSS) ")]),s("li",null,[s("a",{href:"#cross-site-request-forgery-csrf"},"Cross-site request forgery(CSRF) ")]),s("li",null,[s("a",{href:"#injection"},"Injection ")]),s("li",null,[s("a",{href:"#denial-of-service-dos"},"Denial of Service(Dos) ")]),s("li",null,[s("a",{href:"#ddos"},"DDos ")]),s("li",null,[s("a",{href:"#\u57FA\u4E8E\u4F20\u8F93\u5C42\u7684\u653B\u51FB"},"\u57FA\u4E8E\u4F20\u8F93\u5C42\u7684\u653B\u51FB ")]),s("li",null,[s("a",{href:"#\u4E2D\u95F4\u4EBA\u653B\u51FB"},"\u4E2D\u95F4\u4EBA\u653B\u51FB ")])])])])])]),s("h2",{id:"\u653B\u51FB\u7BC7",tabindex:"-1"},[l("\u653B\u51FB\u7BC7 "),s("a",{class:"header-anchor",href:"#\u653B\u51FB\u7BC7","aria-hidden":"true"},"#")]),s("h3",{id:"cross-site-scripting-xss",tabindex:"-1"},[l("Cross-Site Scripting(XSS) "),s("a",{class:"header-anchor",href:"#cross-site-scripting-xss","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/698de4cc15f841b4930edf9d821587a0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206223325825.png"})]),s("h4",{id:"xss\u4E3B\u8981\u5229\u7528\u4E86",tabindex:"-1"},[l("XSS\u4E3B\u8981\u5229\u7528\u4E86 "),s("a",{class:"header-anchor",href:"#xss\u4E3B\u8981\u5229\u7528\u4E86","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"\u76F2\u76EE\u76F8\u4FE1\u7528\u6237\u7684\u63D0\u4EA4\u5185\u5BB9"),s("li",null,"\u76F4\u63A5\u5C06\u7528\u6237\u4F20\u5165\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3ADOM string->DOM")]),s("p",null,[l("\u2013 "),s("code",null,"document.write")]),s("p",null,[l("\u2013 "),s("code",null,"element.innerHTML=anyString")]),s("p",null,[l("\u2013 "),s("code",null,"SSR(user_data)"),l(" //\u4F2A\u4EE3\u7801")]),s("h4",{id:"xss\u7684\u4E00\u4E9B\u7279\u70B9",tabindex:"-1"},[l("XSS\u7684\u4E00\u4E9B\u7279\u70B9 "),s("a",{class:"header-anchor",href:"#xss\u7684\u4E00\u4E9B\u7279\u70B9","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"\u901A\u5E38\u96BE\u4EE5\u4ECEUI\u4E0A\u611F\u77E5\uFF08\u6697\u5730\u91CC\u6267\u884C\u811A\u672C\uFF09"),s("li",null,"\u7A83\u53D6\u7528\u6237\u4FE1\u606F\uFF08cookie/token\uFF09"),s("li",null,"\u7ED8\u5236UI\uFF08\u4F8B\u5982\u5F39\u7A97\uFF09\uFF0C\u8BF1\u9A97\u7528\u6237\u8FDB\u884C\u70B9\u51FB/\u586B\u5199\u8868\u5355")]),s("h4",{id:"xss-demo",tabindex:"-1"},[l("XSS demo "),s("a",{class:"header-anchor",href:"#xss-demo","aria-hidden":"true"},"#")]),s("pre",null,[s("code",{class:"language-typescript"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"public"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"submit"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}},"   "),s("span",{style:{color:"#758575"}},"//\u5199\u6570\u636E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"content"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"id"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"request"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"body"),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"    "),s("span",{style:{color:"#758575"}},"// \u6CA1\u6709\u5BF9 content \u8FC7\u6EE4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"db"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"save"),s("span",{style:{color:"#858585"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#B8A965"}},"content"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}},"  \u2757")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#B8A965"}},"id")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    J);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"public "),s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"render"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}},"   "),s("span",{style:{color:"#758575"}},"//\u8BFB\u6570\u636E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"content"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"db"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"query"),s("span",{style:{color:"#858585"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"query"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"id")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// \u6CA1\u6709\u5BF9 content \u8FC7\u6EE4 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"ctx"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"body"),s("span",{style:{color:"#C98A7D"}},"`<div>"),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"content"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"</div>`"),s("span",{style:{color:"#DBD7CA"}},"  \u2757"),s("span",{style:{color:"#B8A965"}},"\u6CA1\u6709\u8FC7\u6EE4"),s("span",{style:{color:"#CB7676"}},"!")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u590D\u5236\u4EE3\u7801")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"public"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"submit"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}},"   "),s("span",{style:{color:"#A0ADA0"}},"//\u5199\u6570\u636E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"content"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"id"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"request"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"body"),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// \u6CA1\u6709\u5BF9 content \u8FC7\u6EE4")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"db"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"save"),s("span",{style:{color:"#8E8F8B"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8C862B"}},"content"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}},"  \u2757")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8C862B"}},"id")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    J);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"public "),s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"render"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}},"   "),s("span",{style:{color:"#A0ADA0"}},"//\u8BFB\u6570\u636E")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"content"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"db"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"query"),s("span",{style:{color:"#8E8F8B"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"query"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"id")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// \u6CA1\u6709\u5BF9 content \u8FC7\u6EE4 ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"ctx"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"body"),s("span",{style:{color:"#B56959"}},"`<div>"),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"content"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"</div>`"),s("span",{style:{color:"#393A34"}},"  \u2757"),s("span",{style:{color:"#8C862B"}},"\u6CA1\u6709\u8FC7\u6EE4"),s("span",{style:{color:"#AB5959"}},"!")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u590D\u5236\u4EE3\u7801")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b54dcd29cc844059955f5387fd5fa07f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206224452395.png"})]),s("h4",{id:"_1\u3001stored-xss",tabindex:"-1"},[l("1\u3001Stored XSS "),s("a",{class:"header-anchor",href:"#_1\u3001stored-xss","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c998ad2b14ab4d2fae290037032f0d3b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206224713019.png"})]),s("h4",{id:"_2\u3001reflected-xss",tabindex:"-1"},[l("2\u3001Reflected XSS "),s("a",{class:"header-anchor",href:"#_2\u3001reflected-xss","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"\u4E0D\u6D89\u53CA\u6570\u636E\u5E93"),s("li",null,"\u4ECEURL\u4E0A\u653B\u51FB")]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46d55143d1f14dfc90c37844b1cfac9f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206224841800.png"})]),s("h4",{id:"_3\u3001dom-based-xss",tabindex:"-1"},[l("3\u3001DOM-based XSS "),s("a",{class:"header-anchor",href:"#_3\u3001dom-based-xss","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"\u4E0D\u9700\u8981\u670D\u52A1\u5668\u7684\u53C2\u4E0E"),s("li",null,"\u6076\u610F\u653B\u51FB\u7684\u53D1\u8D77 + \u6267\u884C\uFF0C\u5168\u5728\u6D4F\u89C8\u5668\u5B8C\u6210")]),s("p",null,[s("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5896ee659834416904ae8df82a7ddd2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225002366.png"})]),s("h5",{id:"reflected-vs-dom-based",tabindex:"-1"},[l("Reflected vs DOM-based "),s("a",{class:"header-anchor",href:"#reflected-vs-dom-based","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1b9949c0ce4f47989f14b647fdfea06b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225144103.png"})]),s("h4",{id:"_4\u3001mutation-based-xss",tabindex:"-1"},[l("4\u3001Mutation-based XSS "),s("a",{class:"header-anchor",href:"#_4\u3001mutation-based-xss","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"\u5229\u7528\u6D4F\u89C8\u5668\u6E32\u67D3DOM\u7684\u7279\u6027\uFF08\u72EC\u7279\u4F18\u5316\uFF09"),s("li",null,"\u4E0D\u540C\u6D4F\u89C8\u5668\uFF0C\u4F1A\u6709\u533A\u522B\uFF08\u6309\u6D4F\u89C8\u5668\u8FDB\u884C\u653B\u51FB\uFF09")]),s("p",null,[l("\u{1F47B}\u2757\u2757\u2757"),s("strong",null,"\u6CA1\u4EBA\u6BD4\u6211\u66F4\u61C2\u6D4F\u89C8\u5668")]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfc5282169bb47eb966f6bfdc0912ca2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225254621.png"})]),s("h3",{id:"cross-site-request-forgery-csrf",tabindex:"-1"},[l("Cross-site request forgery(CSRF) "),s("a",{class:"header-anchor",href:"#cross-site-request-forgery-csrf","aria-hidden":"true"},"#")]),s("ul",null,[s("li",null,"\u5728\u7528\u6237\u4E0D\u77E5\u60C5\u7684\u524D\u63D0\u4E0B"),s("li",null,"\u5229\u7528\u7528\u6237\u6743\u9650(cookie)"),s("li",null,"\u6784\u9020\u6307\u5B9AHTTP\u8BF7\u6C42\uFF0C\u7A83\u53D6\u6216\u4FEE\u6539\u7528\u6237\u654F\u611F\u4FE1\u606F")]),s("h4",{id:"csrf-demo",tabindex:"-1"},[l("CSRF demo "),s("a",{class:"header-anchor",href:"#csrf-demo","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7afb3a6eb94f485c964fb0ea27041bc0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225432158.png"}),l(" \u5728\u90AE\u7BB1\u4E2D\u70B9\u51FB\u6076\u610F\u94FE\u63A5")]),s("p",null,[s("strong",null,"CSRF\u2013GET \u6700\u5E38\u89C1")]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/50932a1edafb488a8cf343f14d77daff~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225542577.png"})]),s("h3",{id:"injection",tabindex:"-1"},[l("Injection "),s("a",{class:"header-anchor",href:"#injection","aria-hidden":"true"},"#")]),s("h4",{id:"sql-injection",tabindex:"-1"},[l("SQL Injection "),s("a",{class:"header-anchor",href:"#sql-injection","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65de872e079948d68384d66635d50940~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225745410.png"})]),s("h5",{id:"injection-demo1",tabindex:"-1"},[l("injection demo1 "),s("a",{class:"header-anchor",href:"#injection-demo1","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ff60dd0775b403fb83198d5d340524a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225829954.png"})]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e06b6b372fa4107a473cabf18a71366~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206225929008.png"})]),s("h5",{id:"injection-demo2",tabindex:"-1"},[l("injection demo2 "),s("a",{class:"header-anchor",href:"#injection-demo2","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d15e599129dd4d20969008b6a6e4607c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206230021631.png"})]),s("h5",{id:"injection-demo2-\u6267\u884C",tabindex:"-1"},[l("injection demo2-\u6267\u884C "),s("a",{class:"header-anchor",href:"#injection-demo2-\u6267\u884C","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ab11bd0ebb94ba0bd3287362fa6c4dc~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206230034102.png"})]),s("p",null,[s("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f87b819e9a27412e810db4dd7689914b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206230841506.png"})]),s("h5",{id:"injection-demo2\u2013\u8BFB\u53D6-\u4FEE\u6539",tabindex:"-1"},[l("injection demo2\u2013\u8BFB\u53D6+\u4FEE\u6539 "),s("a",{class:"header-anchor",href:"#injection-demo2\u2013\u8BFB\u53D6-\u4FEE\u6539","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74e3edf2bab7443b9924fde1c4dd8662~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206230631777.png"})]),s("p",null,[s("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/592f5329f60340b3969ebc18ed4a746d~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206230939870.png"})]),s("h3",{id:"denial-of-service-dos",tabindex:"-1"},[l("Denial of Service(Dos) "),s("a",{class:"header-anchor",href:"#denial-of-service-dos","aria-hidden":"true"},"#")]),s("p",null,"\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\uFF08\u6784\u9020\u7279\u5B9A\u8BF7\u6C42\uFF09\uFF0C\u5BFC\u81F4\u670D\u52A1\u5668\u8D44\u6E90\u88AB\u663E\u8457\u6D88\u8017\uFF0C\u6765\u4E0D\u53CA\u54CD\u5E94\u66F4\u591A\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u8BF7\u6C42\u6324\u538B\uFF0C\u8FDB\u800C\u96EA\u5D29\u6548\u76CA"),s("p",null,"\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684Dos"),s("p",null,"\u6B63\u5219\u8868\u8FBE\u5F0F\u4E00\u4E00\u8D2A\u5A6A\u6A21\u5F0F"),s("p",null,[s("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65f62de0141440128cc4794c75061794~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206231248474.png"})]),s("h5",{id:"redos-\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684-dos",tabindex:"-1"},[l("ReDos:\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684 DOS "),s("a",{class:"header-anchor",href:"#redos-\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u7684-dos","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2821768400784b708a0bd673a6f1bc22~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206231441886.png"})]),s("h3",{id:"ddos",tabindex:"-1"},[l("DDos "),s("a",{class:"header-anchor",href:"#ddos","aria-hidden":"true"},"#")]),s("p",null,"\u77ED\u65F6\u95F4\u5185\uFF0C\u6765\u81EA\u5927\u91CF\u50F5\u5C38\u8BBE\u5907\u7684\u8BF7\u6C42\u6D41\u91CF\uFF0C\u670D\u52A1\u5668\u4E0D\u80FD\u53CA\u65F6\u5B8C\u6210\u5168\u90E8\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u8BF7\u6C42\u5806\u79EF\uFF0C\u8FDB\u800C\u96EA\u5D29\uFF0C\u65E0\u6CD5\u54CD\u5E94\u65B0\u8BF7\u6C42\uFF0C\u4E3B\u8981\u662F\u6D88\u8017\u5E26\u5BBD (\u4E0D\u641E\u590D\u6742\uFF0C\u91CF\u5927)"),s("p",null,"\u4E0D\u4F1A\u9650\u5236\u5728\u57DF\u540D\u8BBF\u95EE\uFF0C\u66F4\u591A\u76F4\u63A5\u8BBF\u95EEip\u3002\u4E0D\u533A\u5206\u63A5\u53E3\uFF0C\u4E3B\u8981\u6D88\u8017\u5E26\u5BBD"),s("ul",null,[s("li",null,"\u8017\u65F6\u7684\u540C\u6B65\u64CD\u4F5C"),s("li",null,"\u6570\u636E\u5E93\u5199\u5165"),s("li",null,"SQL join"),s("li",null,"\u6587\u4EF6\u5907\u4EFD"),s("li",null,"\u5FAA\u73AF\u6267\u884C\u903B\u8F91")]),s("p",null,[s("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/885252550c3c4a2eb4377518ba123655~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206232152273.png"})]),s("p",null,"\u4E09\u6B21\u63E1\u624B\u65E0\u6CD5\u5B8C\u6210"),s("h3",{id:"\u57FA\u4E8E\u4F20\u8F93\u5C42\u7684\u653B\u51FB",tabindex:"-1"},[l("\u57FA\u4E8E\u4F20\u8F93\u5C42\u7684\u653B\u51FB "),s("a",{class:"header-anchor",href:"#\u57FA\u4E8E\u4F20\u8F93\u5C42\u7684\u653B\u51FB","aria-hidden":"true"},"#")]),s("h3",{id:"\u4E2D\u95F4\u4EBA\u653B\u51FB",tabindex:"-1"},[l("\u4E2D\u95F4\u4EBA\u653B\u51FB "),s("a",{class:"header-anchor",href:"#\u4E2D\u95F4\u4EBA\u653B\u51FB","aria-hidden":"true"},"#")]),s("p",null,[s("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e601d8873f247d389d6fbd8693eb3fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?",alt:"image-20230206232313707.png"})])],-1),m="Web\u5F00\u53D1\u5B89\u5168",h="Web\u5F00\u53D1\u5B89\u5168",B="2023-02-07T01:12:00.000Z",g="zh",A="jottings",D="10min",C=[{property:"og:title",content:"Web\u5F00\u53D1\u5B89\u5168"},{property:"og:description",content:"Web\u5F00\u53D1\u5B89\u5168"},{name:"description",content:"Web\u5F00\u53D1\u5B89\u5168"}],k={__name:"networksecurity",setup(d,{expose:o}){const e={title:"Web\u5F00\u53D1\u5B89\u5168",description:"Web\u5F00\u53D1\u5B89\u5168",date:"2023-02-07T01:12:00.000Z",lang:"zh",type:"jottings",duration:"10min",meta:[{property:"og:title",content:"Web\u5F00\u53D1\u5B89\u5168"},{property:"og:description",content:"Web\u5F00\u53D1\u5B89\u5168"},{name:"description",content:"Web\u5F00\u53D1\u5B89\u5168"}]};return o({frontmatter:e}),a({title:"Web\u5F00\u53D1\u5B89\u5168",meta:[{property:"og:title",content:"Web\u5F00\u53D1\u5B89\u5168"},{property:"og:description",content:"Web\u5F00\u53D1\u5B89\u5168"},{name:"description",content:"Web\u5F00\u53D1\u5B89\u5168"}]}),(u,f)=>{const n=p;return r(),t(n,{frontmatter:e},{default:c(()=>[i]),_:1})}}};export{B as date,k as default,h as description,D as duration,g as lang,C as meta,m as title,A as type};