import{r as o,o as t,c,a as n,b as e,F as p,d as s,e as l}from"./app.7d274c27.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"docker-volume",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-volume","aria-hidden":"true"},"#"),s(" docker volume")],-1),d=n("p",null,"\u6570\u636E\u5377 \u662F\u4E00\u4E2A\u53EF\u4F9B\u4E00\u4E2A\u6216\u591A\u4E2A\u5BB9\u5668\u4F7F\u7528\u7684\u7279\u6B8A\u76EE\u5F55\uFF0C\u5B83\u7ED5\u8FC7 UFS\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u5F88\u591A\u6709\u7528\u7684\u7279\u6027\uFF1A",-1),m=n("ul",null,[n("li",null,"\u6570\u636E\u5377 \u53EF\u4EE5\u5728\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\u548C\u91CD\u7528"),n("li",null,"\u5BF9 \u6570\u636E\u5377 \u7684\u4FEE\u6539\u4F1A\u7ACB\u9A6C\u751F\u6548"),n("li",null,"\u5BF9 \u6570\u636E\u5377 \u7684\u66F4\u65B0\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u955C\u50CF"),n("li",null,"\u6570\u636E\u5377 \u9ED8\u8BA4\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u5373\u4F7F\u5BB9\u5668\u88AB\u5220\u9664")],-1),b={href:"https://yeasy.gitbook.io/docker_practice/data_management/volume",target:"_blank",rel:"noopener noreferrer"},k=s("\u6CE8\u610F\uFF1A\u6570\u636E\u5377 \u7684\u4F7F\u7528\uFF0C\u7C7B\u4F3C\u4E8E Linux \u4E0B\u5BF9\u76EE\u5F55\u6216\u6587\u4EF6\u8FDB\u884C mount\uFF0C\u955C\u50CF\u4E2D\u7684\u88AB\u6307\u5B9A\u4E3A\u6302\u8F7D\u70B9\u7684\u76EE\u5F55\u4E2D\u7684\u6587\u4EF6\u4F1A\u590D\u5236\u5230\u6570\u636E\u5377\u4E2D\uFF08\u4EC5\u6570\u636E\u5377\u4E3A\u7A7A\u65F6\u4F1A\u590D\u5236\uFF09\u3002"),h=l(`<h2 id="mount-with-run" tabindex="-1"><a class="header-anchor" href="#mount-with-run" aria-hidden="true">#</a> mount-with-run</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run -d -P <span class="token punctuation">\\</span>
    --name web <span class="token punctuation">\\</span>
    --mount <span class="token assign-left variable">source</span><span class="token operator">=</span>my-vol,target<span class="token operator">=</span>/usr/share/nginx/html <span class="token punctuation">\\</span>
    nginx:alpine
<span class="token comment"># \u4E0A\u4E0B\u4E24\u79CD\u7528\u6CD5\u4E00\u6837</span>
<span class="token function">docker</span> run -d -P <span class="token punctuation">\\</span>
    --name web <span class="token punctuation">\\</span>
    -v my-vol:/usr/share/nginx/html <span class="token punctuation">\\</span>
    nginx:alpine
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u540C\u65F6 -v \u8FD8\u53EF\u4EE5\u76F4\u63A5\u6302\u8F7D\u672C\u5730\u7EDD\u5BF9\u8DEF\u5F84</p><p><code>-v /path/to/local/a:/path/to/container/a</code></p><p>\u5F53\u8DEF\u5F84\u4E0D\u5B58\u5728\u65F6\u4F1A\u76F4\u63A5\u521B\u5EFA\u8DEF\u5F84</p></div><h2 id="volume" tabindex="-1"><a class="header-anchor" href="#volume" aria-hidden="true">#</a> volume</h2><div class="custom-container tip"><p class="custom-container-title">\u6982\u5FF5</p><p>volume \u7684\u6982\u5FF5 \u5C31\u662F\u4E00\u5757\u5B58\u50A8\u7A7A\u95F4</p><p><code>docker volume create</code> \u65F6 \u53EA\u662F\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u53EF\u7528\u7684\u5B58\u50A8\u7A7A\u95F4 \u5E76\u4E0D\u4F1A\u5C06\u4EFB\u4F55\u4E1C\u897F\u653E\u8FDB\u53BB</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> volume
    create __name <span class="token comment"># \u521B\u5EFA\u5377</span>
    <span class="token function">ls</span>
    inspect __name <span class="token comment"># \u67E5\u770B\u5377\u4FE1\u606F</span>
    <span class="token function">rm</span> __names
    prune
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h2><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">VOLUME</span> [<span class="token string">&quot;/data&quot;</span>,<span class="token string">&quot;/var/log&quot;</span>]</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> /data /var/log</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>VOLUME</code> \u521B\u5EFA\u6302\u8F7D\u70B9\u5E76\u6807\u8BB0\u4E3A\u672C\u5730\u6216\u8005\u6765\u81EA\u5176\u4ED6\u5BB9\u5668 \u53EF\u4EE5\u914D\u5408 <code>--volume-from</code>(docker run) \u4F7F\u7528</p><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><p>\u5728\u7B2C\u4E00\u4E2A\u5BB9\u5668 <code>/data</code> \u8DEF\u5F84\u4E0B \u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6 \u5E76\u5728\u53E6\u4E00\u4E2A\u5BB9\u5668\u4E2D\u67E5\u770B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">docker</span> run -v /data -it --name ap alpine /bin/ash
/ <span class="token comment"># ls data</span>
/ <span class="token comment"># touch data/{1..20}.txt</span>
/ <span class="token comment"># ls data</span>
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">20</span><span class="token punctuation">}</span>.txt
/ <span class="token comment"># %     </span>
<span class="token comment"># Ctrl + p + q \u9000\u51FA\u5BB9\u5668</span>
$ <span class="token function">sudo</span> <span class="token function">docker</span> run --rm --volumes-from ap alpine <span class="token function">ls</span> /data
<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">20</span><span class="token punctuation">}</span>.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,12),v={href:"https://docs.docker.com/storage/volumes/",target:"_blank",rel:"noopener noreferrer"},_=s("\u8BE6\u7EC6\u4ECB\u7ECD");function g(f,x){const a=o("ExternalLinkIcon");return t(),c(p,null,[u,d,m,n("p",null,[n("a",b,[k,e(a)])]),h,n("p",null,[n("a",v,[_,e(a)])])],64)}var y=r(i,[["render",g]]);export{y as default};