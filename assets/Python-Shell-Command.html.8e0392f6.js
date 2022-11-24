import{r as p,o,c,a as s,b as e,F as r,d as n,e as t}from"./app.7d274c27.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h1",{id:"python-\u6267\u884C\u547D\u4EE4\u884C",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#python-\u6267\u884C\u547D\u4EE4\u884C","aria-hidden":"true"},"#"),n(" Python \u6267\u884C\u547D\u4EE4\u884C")],-1),d=s("p",null,"\u53C2\u8003",-1),k={href:"https://janakiev.com/blog/python-shell-commands/",target:"_blank",rel:"noopener noreferrer"},h=n("https://janakiev.com/blog/python-shell-commands/"),b={href:"https://www.cnblogs.com/chengd/articles/7770898.html",target:"_blank",rel:"noopener noreferrer"},m=n("Python \u591A\u7EBF\u7A0B"),_=t(`<div class="custom-container warning"><p class="custom-container-title">\`close\`!</p><p>\u4E0B\u9762\u7684\u5C55\u793A\u4EE3\u7801\u4E0D\u4E00\u5B9A\u5173\u95ED\u4E86\u7BA1\u9053\u6216\u6587\u4EF6 \u5B9E\u9645\u4EE3\u7801\u4E2D\u8BB0\u5F97 <code>close</code></p><p>\u6216\u8005\u4F7F\u7528 <code>with</code> \u8BED\u53E5</p></div><h2 id="os" tabindex="-1"><a class="header-anchor" href="#os" aria-hidden="true">#</a> os</h2><h3 id="os-system" tabindex="-1"><a class="header-anchor" href="#os-system" aria-hidden="true">#</a> os.system</h3><p>\u6700\u76F4\u63A5\u7684\u65B9\u5F0F</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
code <span class="token operator">=</span> os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&quot;pwd&quot;</span><span class="token punctuation">)</span> <span class="token comment"># \u5F97\u5230\u6267\u884C\u811A\u672C\u7684\u8DEF\u5F84</span>
<span class="token comment"># \u8FD4\u56DE return code</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,5),g={id:"os-popen",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#os-popen","aria-hidden":"true"},"#",-1),f=n(),v={href:"https://docs.python.org/3/library/os.html#os.popen",target:"_blank",rel:"noopener noreferrer"},x=n("os.popen"),w=t(`<p>\u4F7F\u7528\u7BA1\u9053 \u53EF\u4EE5\u83B7\u53D6\u8F93\u51FA\u5185\u5BB9</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
pipe <span class="token operator">=</span> os<span class="token punctuation">.</span>popen<span class="token punctuation">(</span><span class="token string">&#39;echo Returned output&#39;</span><span class="token punctuation">)</span>
output <span class="token operator">=</span> pipe<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># read from pipe</span>
<span class="token comment"># pipe.close()</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="subprocess" tabindex="-1"><a class="header-anchor" href="#subprocess" aria-hidden="true">#</a> subprocess</h2><blockquote><p><code>subprocess</code> \u63D0\u4F9B\u4E86\u6267\u884C\u65B0\u8FDB\u7A0B\u540C\u65F6\u83B7\u53D6\u7ED3\u679C\u7684\u5F3A\u5927\u529F\u80FD</p></blockquote>`,4),P={id:"subprocess-run",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#subprocess-run","aria-hidden":"true"},"#",-1),E=n(),I={href:"https://docs.python.org/3/library/subprocess.html#subprocess.run",target:"_blank",rel:"noopener noreferrer"},j=n("subprocess.run"),q=t(`<p>since Python&gt;=3.5</p><p><code>subprocess.run(*popenargs, input:bytes=None, capture_output=False, timeout=None, check=False, **kwargs)</code></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
result <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;-l&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># \u963B\u585E API</span>
<span class="token comment"># result : CompletedProcess</span>
<span class="token comment"># result.args</span>
<span class="token comment"># result.returncode</span>
<span class="token comment"># result.stdout/stderr \u6355\u83B7\u7684\u8F93\u51FA \u5373 caputer_output=True \u65F6\u6709\u7528</span>
result <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;-l&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>caputer_output<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span>stdout <span class="token comment"># bytes</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,3),F={id:"subprocess-popen",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#subprocess-popen","aria-hidden":"true"},"#",-1),B=n(),C={href:"https://docs.python.org/3/library/subprocess.html#subprocess.Popen",target:"_blank",rel:"noopener noreferrer"},T=n("subprocess.Popen"),L=t(`<p>\u6B64\u7C7B\u53EF\u4EE5\u521B\u9020\u548C\u7BA1\u7406\u6267\u884C\u7684\u8FDB\u7A0B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> subprocess
process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;echo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;More output&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                     stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">,</span> 
                     stderr<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span> <span class="token comment"># \u6307\u5B9A\u4E3A pipe \u901A\u8FC7 communicate \u8BFB\u53D6</span>
stdout<span class="token punctuation">,</span> stderr <span class="token operator">=</span> process<span class="token punctuation">.</span>communicate<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u7C7B\u578B\u90FD\u662F bytes</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u6307\u5B9A\u6587\u4EF6\u4F5C\u4E3A\u8F93\u51FA</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    process <span class="token operator">=</span> subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-l&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span>f<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,4);function S(A,M){const a=p("ExternalLinkIcon");return o(),c(r,null,[i,d,s("ul",null,[s("li",null,[s("a",k,[h,e(a)])]),s("li",null,[s("a",b,[m,e(a)])])]),_,s("h3",g,[y,f,s("a",v,[x,e(a)])]),w,s("h3",P,[N,E,s("a",I,[j,e(a)])]),q,s("h3",F,[V,B,s("a",C,[T,e(a)])]),L],64)}var D=l(u,[["render",S]]);export{D as default};
