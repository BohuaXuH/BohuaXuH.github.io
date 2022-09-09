import{_ as s,c as a,o as n,a as p}from"./app.48148ea1.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"weather_react","slug":"weather-react","link":"#weather-react","children":[]}],"relativePath":"React/WeatherReact.md","lastUpdated":null}'),e={name:"React/WeatherReact.md"},l=p(`<h2 id="weather-react" tabindex="-1">weather_react <a class="header-anchor" href="#weather-react" aria-hidden="true">#</a></h2><h4 id="\u4E3B\u9898\u66F4\u6539" tabindex="-1">\u4E3B\u9898\u66F4\u6539 <a class="header-anchor" href="#\u4E3B\u9898\u66F4\u6539" aria-hidden="true">#</a></h4><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13c2f6c4b0b146cda24462d62cf20d1c~tplv-k3u1fbpfcp-watermark.image?" alt="image-20220831134734107.png"></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b461733d505c4076a9421d204bee1ca7~tplv-k3u1fbpfcp-watermark.image?" alt="image-20220831135355145.png"></p><h5 id="\u5177\u4F53\u5B9E\u73B0" tabindex="-1">\u5177\u4F53\u5B9E\u73B0 <a class="header-anchor" href="#\u5177\u4F53\u5B9E\u73B0" aria-hidden="true">#</a></h5><p>\u5B9E\u73B0\u4E5F\u662F\u6BD4\u8F83\u7B80\u5355,\u56E0\u4E3A\u5728react\u4E2D\u5C31\u6CA1\u6709\u76F4\u63A5\u5199:root\u5168\u5C40\u7684\u914D\u7F6E\uFF0C\u5728App\u7EC4\u4EF6\u6700\u5916\u5C42\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u5168\u5C40\u914D\u7F6E\uFF0C</p><p>\u989C\u8272\u53EF\u4EE5\u81EA\u5DF1\u6309\u7740\u914D\u8272\u642D\u914D\u7740\u6765</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#8B949E;">/* Light Mode */</span></span>
<span class="line"><span style="color:#C9D1D9;">.App[color</span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;">mode</span><span style="color:#FF7B72;">=</span><span style="color:#A5D6FF;">&quot;light&quot;</span><span style="color:#C9D1D9;">] {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">surface1</span><span style="color:#C9D1D9;">: #e6e6e6;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">surface2</span><span style="color:#C9D1D9;">: #f2f2f2;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">surface3</span><span style="color:#C9D1D9;">: #ffffff;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">element1</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">111111</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">element2</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">222222</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">element3</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">333333</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">elementInverse</span><span style="color:#C9D1D9;">: #eee;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">primary</span><span style="color:#C9D1D9;">: #01408e;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">secondary</span><span style="color:#C9D1D9;">: #3c5d5c;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">tertiary</span><span style="color:#C9D1D9;">: #fff7d6;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">/* Dark Mode */</span></span>
<span class="line"><span style="color:#C9D1D9;">.App[color</span><span style="color:#FF7B72;">-</span><span style="color:#C9D1D9;">mode</span><span style="color:#FF7B72;">=</span><span style="color:#A5D6FF;">&quot;dark&quot;</span><span style="color:#C9D1D9;">] {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">surface1</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">262626</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">surface2</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">333333</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">surface3</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">404040</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">element1</span><span style="color:#C9D1D9;">: #eeeeee;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">element2</span><span style="color:#C9D1D9;">: #dddddd;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">element3</span><span style="color:#C9D1D9;">: #cccccc;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">elementInverse</span><span style="color:#C9D1D9;">: #</span><span style="color:#79C0FF;">111</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">primary</span><span style="color:#C9D1D9;">: #8fceff;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">secondary</span><span style="color:#C9D1D9;">: #72faca;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">--</span><span style="color:#FFA657;">tertiary</span><span style="color:#C9D1D9;">: #eee8a9;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#8B949E;">//\u5F15\u7528\u5199\u6CD5\uFF1A background-color: var(--element2);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u53C2\u8003\u7F51\u7AD9\uFF1A<a href="https://ryanfeigenbaum.com/dark-mode/" target="_blank" rel="noreferrer">https://ryanfeigenbaum.com/dark-mode/</a></p><h4 id="\u4E00\u4E9B\u529F\u80FD\u7EC4\u4EF6" tabindex="-1">\u4E00\u4E9B\u529F\u80FD\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E00\u4E9B\u529F\u80FD\u7EC4\u4EF6" aria-hidden="true">#</a></h4><p>\u7528\u6765\u4F4D\u7F6E\u67E5\u8BE2api\u548C\u5929\u6C14\u67E5\u8BE2api\u53EF\u4EE5\u81EA\u5DF1\u533A\u7533\u8BF7\uFF0C\u7ED3\u6784\u4E5F\u5F88\u7B80\u5355\uFF0C\u4E00\u4E2Asearch\u7EC4\u4EF6\uFF0C\u8FD8\u6709\u5F53\u5929\u5929\u6C14\u8BE6\u60C5\u4E0E\u672A\u6765\u4E03\u5929\u5929\u6C14\u8BE6\u60C5\u3002</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99775fe1a2b542b784c22103c55a05fb~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c1bfda44b8443138fc122d9875c6338~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>search\u662F\u7528\u4E86\u7EC4\u4EF6\u5E93\uFF08react-select-async-paginate\uFF09\u6709\u4E00\u4E9B\u7B80\u5355\u7684\u914D\u7F6E\u9879</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18927cebffbf461daf74e0066d739dda~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>\u8FD8\u662F\u7528\u4E86Accordion\u7EC4\u4EF6\uFF0C\u63A5\u53E3\u5C11\u7528\u7684fetchd\u83B7\u53D6\u6570\u636E</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e4fa86bb7ba4de8be7716ee41a8cfe8~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>`,17),o=[l];function c(r,t,i,y,D,F){return n(),a("div",null,o)}const d=s(e,[["render",c]]);export{m as __pageData,d as default};
