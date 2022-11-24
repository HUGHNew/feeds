import{e as n}from"./app.7d274c27.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="string\u548Cslice\u7684\u957F\u5EA6" tabindex="-1"><a class="header-anchor" href="#string\u548Cslice\u7684\u957F\u5EA6" aria-hidden="true">#</a> string\u548CSlice\u7684\u957F\u5EA6</h1><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// go runtime</span>
<span class="token keyword">type</span> stringStruct <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	str unsafe<span class="token punctuation">.</span>Pointer
	<span class="token builtin">len</span> <span class="token builtin">int</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>string</code> \u7684\u957F\u5EA6\u5C31\u662F\u5B57\u7B26\u4E32\u6216\u8005string\u5207\u7247\u7684\u957F\u5EA6</p><h2 id="slice" tabindex="-1"><a class="header-anchor" href="#slice" aria-hidden="true">#</a> slice</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// go runtime</span>
<span class="token keyword">type</span> slice <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	array unsafe<span class="token punctuation">.</span>Pointer
	<span class="token builtin">len</span>   <span class="token builtin">int</span>
	<span class="token builtin">cap</span>   <span class="token builtin">int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>Slice</code> \u7684\u957F\u5EA6\u662F\u5207\u7247\u957F\u5EA6 \u4F46\u662FSlice\u7684\u5BB9\u91CF\u662F\u5207\u7247\u5F00\u59CB\u4F4D\u7F6E\u5230\u539FSlice\u7684\u5BB9\u91CF\u7ED3\u675F\u4F4D\u7F6E</p><p>\u5BF9\u4E8ESlice\u5207\u7247\u7684\u64CD\u4F5C\u4F1A\u4F5C\u7528\u4E8E\u5E95\u5C42\u6570\u7EC4</p><p>\u66F4\u6709\u8DA3\u7684\u4E00\u4E9B\u4E8B\u60C5\u662F <code>append</code> \u64CD\u4F5C\u5982\u679C\u6CA1\u6709\u8D85\u8FC7\u539FSlice\u7684\u5BB9\u91CF\u7684\u8BDD \u4F1A\u76F4\u63A5\u4FEE\u6539\u503C</p><p>\u5982\u679C\u8D85\u8FC7\u4E86 \u5C31\u4F1A\u91CD\u65B0\u5206\u914D(\u5148\u68C0\u6D4B \u518D\u5206\u914D\u8D4B\u503C)</p><h2 id="len-cap" tabindex="-1"><a class="header-anchor" href="#len-cap" aria-hidden="true">#</a> len&amp;cap</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token string">&quot;12345678&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;len of v:%d=8\\tv[1:]:%d=8-1\\tv[1:3]:%d=3-1\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>v<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s len:%d=8,cap:%d=8\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s[1:] len:%d=8-1,cap:%d=8-1\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s[2:7] len:%d=7-2,cap:%d=8-2\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// how about append the slice of Slice</span>
	it <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;raw data:%d,addr:%p\\nin it v:%d,addr:%p\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> it<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>it<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s[2:7] len:%d=7-2,cap:%d=8-2\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;it len:%d=7-2+1,cap:%d=8-2\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// something more interesting</span>
	it <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;it:&quot;</span><span class="token punctuation">,</span> it<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;raw data:%d,addr:%p\\nin it v:%d,addr:%p\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	it <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;s:&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;it:&quot;</span><span class="token punctuation">,</span> it<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;raw data:%d,addr:%p\\nin it v:%d,addr:%p\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>s<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u5404\u90E8\u5206\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>len of v:8=8    v[1:]:7=8-1     v[1:3]:2=3-1
s len:8=8,cap:8=8
s[1:] len:7=8-1,cap:7=8-1
s[2:7] len:5=7-2,cap:6=8-2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>raw data:9,addr:0xc0000c0078
in it v:9,addr:0xc0000c0078
s[2:7] len:5=7-2,cap:6=8-2
it len:6=7-2+1,cap:6=8-2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>s: [1 2 3 4 10 11 12 9]
it: [4 10 11 12]
raw data:9,addr:0xc0000c0078
in it v:4,addr:0xc0000c0058
s: [1 2 3 4 10 11 12 9]
it: [12 20 21 22]
raw data:9,addr:0xc0000c0078
in it v:12,addr:0xc0000be020
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,16);function t(c,e){return p}var l=s(a,[["render",t]]);export{l as default};
