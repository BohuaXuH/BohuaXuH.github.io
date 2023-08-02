import{u as a,c as t,w as c,_ as r,o as p,a as s,d as l}from"./app-35460d65.js";const y=s("div",{class:"prose m-auto"},[s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#js正则表达式中添加变量"},"js正则表达式中添加变量 ")])])])]),s("h2",{id:"js正则表达式中添加变量",tabindex:"-1"},[l("js正则表达式中添加变量 "),s("a",{class:"header-anchor",href:"#js正则表达式中添加变量","aria-hidden":"true"},"#")]),s("p",null,"最近在刷力扣的时候遇到一个easy题，第一想法是通过正则来解决，但是因为要在正则表达式中添加变量才可以解决，解题方法还有很多，但是想尝试使用这个方法。"),s("pre",null,[s("code",{class:"language-js"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"a"'),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"let"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"e"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"str"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"match"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#E0A569"}},"eval"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"i"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"/g"'),s("span",{style:{color:"#858585"}},"))")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"a"'),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"let"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"e"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"str"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"match"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B58451"}},"eval"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"i"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"/g"'),s("span",{style:{color:"#8E8F8B"}},"))")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,"但是，当想在e这个正则中使用i时会发现无法处理"),s("p",null,"js中所有的对象都是通过构造函数生成的"),s("p",null,"那么，我们就可以用构造函数来代替字面量定义法，例如:"),s("pre",null,[s("code",{class:"language-js"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"s"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"String"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"string"'),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},'//String对象，toString()后为"string"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"a"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Array"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#6394BF"}},"2"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"//[1,2]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"o"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"Object"),s("span",{style:{color:"#858585"}},"();"),s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#758575"}},"//{}")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"s"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"String"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"string"'),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},'//String对象，toString()后为"string"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"a"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Array"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#296AA3"}},"2"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"//[1,2]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"o"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"Object"),s("span",{style:{color:"#8E8F8B"}},"();"),s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#A0ADA0"}},"//{}")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,"相应的，我们也可以用构造函数来生成正则表达式"),s("pre",null,[s("code",{class:"language-js"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"re"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"RegExp"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"^'),s("span",{style:{color:"#D4976C"}},"\\d"),s("span",{style:{color:"#C98A7D"}},'+$"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#C98A7D"}},'"gim"'),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"//注意，反斜杠需要转义")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"re"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"RegExp"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"^'),s("span",{style:{color:"#A65E2B"}},"\\d"),s("span",{style:{color:"#B56959"}},'+$"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#B56959"}},'"gim"'),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"//注意，反斜杠需要转义")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,"那么，给它加变量，就和我们前面写的给字符串加变量一样了。"),s("pre",null,[s("code",{class:"language-js"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"v"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"bl"'),s("span",{style:{color:"#858585"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"re"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"RegExp"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"^'),s("span",{style:{color:"#D4976C"}},"\\d"),s("span",{style:{color:"#C98A7D"}},'+"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"v"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"$"'),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#C98A7D"}},'"gim"'),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// re为/^d+bl$/gim")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"v"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"bl"'),s("span",{style:{color:"#8E8F8B"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"re"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"RegExp"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"^'),s("span",{style:{color:"#A65E2B"}},"\\d"),s("span",{style:{color:"#B56959"}},'+"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"v"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"$"'),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#B56959"}},'"gim"'),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// re为/^d+bl$/gim")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,[l("另外，还有一种方法是用过"),s("code",null,"eval"),l("动态执行一段字符串的方法，但是"),s("code",null,"eval"),l("是一个危险的函数，且**eval() 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。**弊端还有很多。")]),s("pre",null,[s("code",{class:"language-js"},[s("div",{class:"shiki-container"},[s("pre",{class:"shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"re"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"eval"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"/^'),s("span",{style:{color:"#D4976C"}},"\\d"),s("span",{style:{color:"#C98A7D"}},'+"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"v"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"+"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"$/gim"'),s("span",{style:{color:"#858585"}},")")]),l(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"re"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"eval"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"/^'),s("span",{style:{color:"#A65E2B"}},"\\d"),s("span",{style:{color:"#B56959"}},'+"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"v"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"+"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"$/gim"'),s("span",{style:{color:"#8E8F8B"}},")")]),l(`
`),s("span",{class:"line"})])])])])]),s("p",null,[s("img",{src:"https://s1.imagehub.cc/images/2023/01/12/8d8d0596bcd9a76d0a7875755c0690c4.png",alt:"image-20230112001915458"})])],-1),d="leetcode2283 about RegExp",g="2023年第一篇blog",u="2023-01-12T00:25:00.000Z",h="zh",v="jottings",k="3min",f=[{property:"og:title",content:"leetcode2283 about RegExp"},{property:"og:description",content:"2023年第一篇blog"},{name:"description",content:"2023年第一篇blog"}],E={__name:"leetcode2283",setup(A,{expose:e}){const o={title:"leetcode2283 about RegExp",description:"2023年第一篇blog",date:"2023-01-12T00:25:00.000Z",lang:"zh",type:"jottings",duration:"3min",meta:[{property:"og:title",content:"leetcode2283 about RegExp"},{property:"og:description",content:"2023年第一篇blog"},{name:"description",content:"2023年第一篇blog"}]};return e({frontmatter:o}),a({title:"leetcode2283 about RegExp",meta:[{property:"og:title",content:"leetcode2283 about RegExp"},{property:"og:description",content:"2023年第一篇blog"},{name:"description",content:"2023年第一篇blog"}]}),(i,D)=>{const n=r;return p(),t(n,{frontmatter:o},{default:c(()=>[y]),_:1})}}};export{u as date,E as default,g as description,k as duration,h as lang,f as meta,d as title,v as type};