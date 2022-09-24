import{_ as s,c as n,o as a,a as l}from"./app.48148ea1.js";const u=JSON.parse('{"title":"useReducer-useState","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6700\u6B63\u5E38\u7684\u7528\u6CD5","slug":"\u6700\u6B63\u5E38\u7684\u7528\u6CD5","link":"#\u6700\u6B63\u5E38\u7684\u7528\u6CD5","children":[]},{"level":2,"title":"\u5B9E\u73B0\u7C7B\u4F3CuseState","slug":"\u5B9E\u73B0\u7C7B\u4F3Cusestate","link":"#\u5B9E\u73B0\u7C7B\u4F3Cusestate","children":[]}],"relativePath":"React/useReducer-useState.md","lastUpdated":null}'),p={name:"React/useReducer-useState.md"},o=l(`<h1 id="usereducer-usestate" tabindex="-1"><code>useReducer</code>-<code>useState</code> <a class="header-anchor" href="#usereducer-usestate" aria-hidden="true">#</a></h1><h2 id="\u6700\u6B63\u5E38\u7684\u7528\u6CD5" tabindex="-1">\u6700\u6B63\u5E38\u7684\u7528\u6CD5 <a class="header-anchor" href="#\u6700\u6B63\u5E38\u7684\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570<strong>\u7B2C\u4E00\u4E2Areducer\u7B2C\u4E8C\u4E2A\u521D\u59CB\u503C</strong>(\u4E0Eredux\u7684\u5C0F\u4E0D\u540C)</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">countReducer</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">action</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> {</span><span style="color:#79C0FF;">type</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">step</span><span style="color:#C9D1D9;">} </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> action</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">switch</span><span style="color:#C9D1D9;"> (type) {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">case</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;increment&#39;</span><span style="color:#C9D1D9;">: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">state,</span></span>
<span class="line"><span style="color:#C9D1D9;">        count: state.count </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> step,</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">default</span><span style="color:#C9D1D9;">: {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">throw</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Error</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">\`Unsupported action type: \${</span><span style="color:#C9D1D9;">type</span><span style="color:#A5D6FF;">}\`</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">/*  default: {</span></span>
<span class="line"><span style="color:#8B949E;">        return state;   \u6216\u8005\u8FD9\u6837\u5199</span></span>
<span class="line"><span style="color:#8B949E;">    }*/</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Counter</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">initialCount</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">step</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">}) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">dispatch</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> React.</span><span style="color:#D2A8FF;">useReducer</span><span style="color:#C9D1D9;">(countReducer, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    count: initialCount,</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> {</span><span style="color:#79C0FF;">count</span><span style="color:#C9D1D9;">} </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> state</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">increment</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">dispatch</span><span style="color:#C9D1D9;">({type: </span><span style="color:#A5D6FF;">&#39;increment&#39;</span><span style="color:#C9D1D9;">, step})</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">onClick</span><span style="color:#FF7B72;">={</span><span style="color:#C9D1D9;">increment</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FF7B72;">{</span><span style="color:#C9D1D9;">count</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">App</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">Counter</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u5B9E\u73B0\u7C7B\u4F3Cusestate" tabindex="-1">\u5B9E\u73B0\u7C7B\u4F3C<code>useState</code> <a class="header-anchor" href="#\u5B9E\u73B0\u7C7B\u4F3Cusestate" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#8B949E;">////****useState\u6E90\u7801\u90E8\u5206\u7247\u6BB5</span></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">basicStateReducer</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">action</span><span style="color:#C9D1D9;">) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// $FlowFixMe: Flow doesn&#39;t like mixed types</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">typeof</span><span style="color:#C9D1D9;"> action </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;function&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">?</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">action</span><span style="color:#C9D1D9;">(state) </span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> action;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#FF7B72;">********************************************************************************</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useState</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA657;">S</span><span style="color:#C9D1D9;">&gt;(</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">initialState</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> (() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">S</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">S</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">)</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> [</span><span style="color:#FFA657;">S</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">Dispatch</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA657;">BasicStateAction</span><span style="color:#C9D1D9;">&lt;</span><span style="color:#FFA657;">S</span><span style="color:#C9D1D9;">&gt;&gt;] {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">useReducer</span><span style="color:#C9D1D9;">(</span></span>
<span class="line"><span style="color:#C9D1D9;">    basicStateReducer,</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// useReducer has a special case to support lazy useState initializers</span></span>
<span class="line"><span style="color:#C9D1D9;">    (</span><span style="color:#FFA657;">initialState</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">),</span></span>
<span class="line"><span style="color:#C9D1D9;">  );</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#8B949E;">//useState\u6E90\u7801\u91CC\u4E5F\u662F\u5BF9useReducer\u7684\u4F7F\u7528</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>**\u6B64\u5904<code>action</code>**\u7531<code>setState</code>(\u76F8\u5F53\u4E8E<code>dispatch</code>)\uFF0C\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u65B0\u7684\u503C\u76F4\u63A5\u66FF\u4EE3\u7C7B\u4F3C<code>useState</code>\u4E86\u3002</p><p>**\u4ECE\u6700\u4E0B\u9762\u7684\u4EE3\u7801\u7247\u6BB5\u5F00\u59CB\u5230\u8FD9\u91CC\u4E00\u6B65\u4E00\u6B65\u7528<code>useReducer</code>\u5B9E\u73B0\u4E86<code>useState</code>\u7684\u529F\u80FD</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">countReducer</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">action</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> ({</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">state,</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">typeof</span><span style="color:#C9D1D9;"> action </span><span style="color:#FF7B72;">===</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;function&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">?</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">action</span><span style="color:#C9D1D9;">(state) </span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> action),</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Counter</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">initialCount</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">step</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">}) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">setState</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> React.</span><span style="color:#D2A8FF;">useReducer</span><span style="color:#C9D1D9;">(countReducer, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    count: initialCount,</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> {</span><span style="color:#79C0FF;">count</span><span style="color:#C9D1D9;">} </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> state</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">increment</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">setState</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">currentState</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> ({count: currentState.count </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> step}))</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">onClick</span><span style="color:#FF7B72;">={</span><span style="color:#C9D1D9;">increment</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FF7B72;">{</span><span style="color:#C9D1D9;">count</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">App</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">Counter</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">countReducer</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">action</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> ({</span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">state, </span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">action})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Counter</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">initialCount</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">step</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">}) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">state</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">setState</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> React.</span><span style="color:#D2A8FF;">useReducer</span><span style="color:#C9D1D9;">(countReducer, {</span></span>
<span class="line"><span style="color:#C9D1D9;">    count: initialCount,</span></span>
<span class="line"><span style="color:#C9D1D9;">  })</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> {</span><span style="color:#79C0FF;">count</span><span style="color:#C9D1D9;">} </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> state</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">increment</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">setState</span><span style="color:#C9D1D9;">({count: count </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> step})</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">onClick</span><span style="color:#FF7B72;">={</span><span style="color:#C9D1D9;">increment</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FF7B72;">{</span><span style="color:#C9D1D9;">count</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">App</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">Counter</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//\u7528action\u66FF\u6362\u539F\u672C\u7684state</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">countReducer</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">count</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">change</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> count </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> change</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Counter</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">initialCount</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">step</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">}) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">count</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">changeCount</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> React.</span><span style="color:#D2A8FF;">useReducer</span><span style="color:#C9D1D9;">(countReducer, initialCount)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">increment</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">changeCount</span><span style="color:#C9D1D9;">(step)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">onClick</span><span style="color:#FF7B72;">={</span><span style="color:#C9D1D9;">increment</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FF7B72;">{</span><span style="color:#C9D1D9;">count</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Usage</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">Counter</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//step\u7C7B\u4F3Caction\u4E0E\u539F\u6765\u7684\u503C\u8FDB\u884C\u8FD0\u7B97\u518D\u8FD4\u56DE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Counter</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">initialCount</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">step</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;">}) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> [</span><span style="color:#79C0FF;">count</span><span style="color:#C9D1D9;">, </span><span style="color:#79C0FF;">setCount</span><span style="color:#C9D1D9;">] </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> React.</span><span style="color:#D2A8FF;">useReducer</span><span style="color:#C9D1D9;">(countReducer, initialCount)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">increment</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">setCount</span><span style="color:#C9D1D9;">(count </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> step)</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">onClick</span><span style="color:#FF7B72;">={</span><span style="color:#C9D1D9;">increment</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FF7B72;">{</span><span style="color:#C9D1D9;">count</span><span style="color:#FF7B72;">}</span><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">function</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">App</span><span style="color:#C9D1D9;">() {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#7EE787;">Counter</span><span style="color:#C9D1D9;"> /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">//\u628A\u4F20\u5165\u7684action\u5F53\u4F5C\u4E00\u4E2A\u65B0\u7684state\u8FD4\u56DE</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,12),e=[o];function c(t,r,D,y,F,i){return a(),n("div",null,e)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};