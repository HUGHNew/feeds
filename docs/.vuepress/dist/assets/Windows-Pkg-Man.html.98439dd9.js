import{r as t,o as p,c as l,a as s,b as a,F as r,e as o,d as e}from"./app.55629926.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},d=o('<h1 id="windows\u5305\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#windows\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a> Windows\u5305\u7BA1\u7406\u5668</h1><h2 id="scoop" tabindex="-1"><a class="header-anchor" href="#scoop" aria-hidden="true">#</a> Scoop</h2><blockquote><p>Scoop is an installer</p><p>The goal of Scoop is to let you use Unix-y programs in a normal Windows environment</p><p>(Scoop\u662F\u4E00\u4E2A\u8BA9\u4F60\u5728Windows\u4E0A\u65B9\u4FBF\u83B7\u53D6\u5F00\u6E90CLI\u5DE5\u5177\u7684\u5B89\u88C5\u5668)</p></blockquote><blockquote><p>scoop \u4F9D\u8D56\u4E8Egit/github \u5728\u65E0\u4EE3\u7406\u60C5\u51B5\u4E0B\u5F88\u7FB8\u5F31</p></blockquote><h3 id="\u4E0B\u8F7D-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-\u5B89\u88C5" aria-hidden="true">#</a> \u4E0B\u8F7D/\u5B89\u88C5</h3>',5),u=e("\u5982\u679C\u6CA1\u6709\u4EE3\u7406\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u53C2\u8003"),h={href:"https://shenbo.github.io/2021/03/23/apps/%E4%BD%BF%E7%94%A8scoop%E5%AE%89%E8%A3%85%E7%AE%A1%E7%90%86windows%E8%BD%AF%E4%BB%B6(2)-github%E5%8A%A0%E9%80%9F/",target:"_blank",rel:"noopener noreferrer"},b=e("\u8FD9\u91CC"),g=o(`<blockquote><p>\u5982\u679C\u4E0B\u8F7Dscoop\u7684\u8FC7\u7A0B\u4E2D\u65AD \u90A3\u4E48\u5FC5\u987B\u5148\u5220\u9664(<code>C:\\Users&lt;user&gt;\\scoop</code>)\u6587\u4EF6\u5939 \u518D\u6267\u884C\u4EE5\u4E0A\u547D\u4EE4\u5B89\u88C5</p><p>Scoop\u7684bucket\u6982\u5FF5\u548C<code>apt</code>\u7684ppa\u6982\u5FF5\u76F8\u8FD1</p></blockquote><p>\u6253\u5F00PowerShell</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">iex</span> <span class="token punctuation">(</span><span class="token function">new-object</span> net<span class="token punctuation">.</span>webclient<span class="token punctuation">)</span><span class="token punctuation">.</span>downloadstring<span class="token punctuation">(</span><span class="token string">&#39;https://get.scoop.sh&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u62A5\u9519 Policy \u76F8\u5173\u7684 \u5148\u6267\u884C\u4E0B\u9762\u8FD9\u6761\u518D\u6267\u884C\u5982\u4E0A\u4E0B\u8F7D\u64CD\u4F5C</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">set-executionpolicy</span> remotesigned <span class="token operator">-</span>s cu 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>scoop\u8F6F\u4EF6\u9ED8\u8BA4\u4E0B\u8F7D\u8DEF\u5F84\u4E3A <code>C:\\Users\\&lt;User&gt;\\scoop\\apps</code></p></blockquote><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3>`,7),m=e("\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u56FD\u5185\u955C\u50CF\u7248"),k={href:"https://gitee.com/squallliu/scoop",target:"_blank",rel:"noopener noreferrer"},_=e("https://gitee.com/squallliu/scoop"),f=o(`<div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>scoop install sudo
scoop install aria2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>aria2</code> \u662F\u4E0B\u8F7D\u52A0\u901F\u7528\u7684 \u5982\u679C\u4E0B\u8F7D <code>aria2</code> \u540E\u6709\u4E0B\u8F7D\u95EE\u9898 \u53EF\u4EE5\u5173\u6389\u8BD5\u8BD5 <code>scoop config aria2-enabled false</code></p><h3 id="\u6DFB\u52A0-bucket" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-bucket" aria-hidden="true">#</a> \u6DFB\u52A0 bucket</h3>`,3),x={href:"https://sspai.com/post/52710",target:"_blank",rel:"noopener noreferrer"},v=e("\u4ECB\u7ECD"),w=s("p",null,[e("\u67E5\u770B\u5B98\u65B9\u7EF4\u62A4\u4ED3\u5E93 : "),s("code",null,"scoop bucket known")],-1),q={href:"https://github.com/rasa/scoop-directory",target:"_blank",rel:"noopener noreferrer"},y=e("\u793E\u533A\u7B2C\u4E09\u65B9\u4ED3\u5E93"),E=e(" \u5728\u7EBF"),A={href:"https://rasa.github.io/scoop-directory/",target:"_blank",rel:"noopener noreferrer"},S=e("\u7F51\u7AD9"),B=e("\u67E5\u8BE2"),F=o(`<p>\u5B89\u88C5\u5B98\u65B9\u5E93</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>scoop bucket add extras
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u793E\u533A\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scoop bucket add dorado https://gitee.com/chawyehsu/dorado
scoop bucket add raresoft https://github.com/L-Trump/scoop-raresoft
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h3><p>\u5220\u9664bucket</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scoop bucket rm raresoft
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5378\u8F7D\u8F6F\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scoop uninstall __soft
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5378\u8F7D\u81EA\u5DF1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scoop uninstall scoop
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E00\u4E9B\u57FA\u672C\u7684\u53C2\u6570</p><p>-g : \u5168\u5C40</p><p>-p : \u79FB\u9664\u914D\u7F6E\u6587\u4EF6</p><h3 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h3><p>unable to access <code>https://github.com/...</code></p><p>\u8FD9\u662F git \u8BBF\u95EE GitHub \u5BFC\u81F4\u7684\u95EE\u9898 \u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E git \u4EE3\u7406\u89E3\u51B3</p><p>\u5982\u5728 <code>$profile</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token keyword">function</span> <span class="token function">start-proxy</span> <span class="token punctuation">{</span>
    git config <span class="token operator">--</span>global http<span class="token punctuation">.</span>proxy socks5:<span class="token operator">/</span><span class="token operator">/</span>127<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1:Port
    git config <span class="token operator">--</span>global https<span class="token punctuation">.</span>proxy socks5:<span class="token operator">/</span><span class="token operator">/</span>127<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1:Port
    <span class="token function">echo</span> <span class="token string">&quot;set git proxy&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">stop-proxy</span> <span class="token punctuation">{</span>
    git config <span class="token operator">--</span>global <span class="token operator">--</span>unset http<span class="token punctuation">.</span>proxy
    git config <span class="token operator">--</span>global <span class="token operator">--</span>unset https<span class="token punctuation">.</span>proxy
    <span class="token function">echo</span> <span class="token string">&quot;unset git proxy&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u4F7F\u7528\u547D\u4EE4\u524D\u8BBE\u7F6E\u597Dgit\u4EE3\u7406</p><h3 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h3><p>\u4E00\u4E9B\u4E0D\u9519\u7684\u6587\u7AE0</p><ul><li>https://www.iamzs.top/archives/scoop-guidebook.html</li><li>https://sspai.com/post/65933</li><li>https://sspai.com/post/52496</li></ul>`,23),N={id:"winget",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#winget","aria-hidden":"true"},"#",-1),W=e(),C={href:"https://docs.microsoft.com/zh-CN/windows/package-manager/winget/",target:"_blank",rel:"noopener noreferrer"},I=e("WinGet"),L=s("blockquote",null,[s("p",null,"winget \u9ED8\u8BA4\u5B89\u88C5\u8DEF\u5F84\u4E3A Program Files")],-1),U=s("h3",{id:"\u4E0B\u8F7D",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E0B\u8F7D","aria-hidden":"true"},"#"),e(" \u4E0B\u8F7D")],-1),V={href:"https://www.microsoft.com/en-us/p/app-installer/9nblggh4nns1?activetab=pivot:overviewtab",target:"_blank",rel:"noopener noreferrer"},j=e("Windows Store"),z=e("\u4E0B\u8F7D \u5E94\u7528\u540D\u4E3A App Installer"),T=o(`<p>\u5199\u6B64\u6587\u65F6\u5DF2\u6709\u6B63\u5F0F\u7248</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code> \u03BB &gt;  winget <span class="token operator">-</span>v
v1<span class="token punctuation">.</span>1<span class="token punctuation">.</span>13405
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><p>\u5F53\u524D\u7248\u672C\u652F\u6301\u547D\u4EE4</p><ul><li>install</li><li>show</li><li>source : \u7BA1\u7406\u5305\u7684\u6E90</li><li>search</li><li>list : \u663E\u793A\u5DF2\u5B89\u88C5\u7684\u5305</li><li>upgrade</li><li>uninstall</li><li>hash</li><li>validate</li><li>settings</li><li>features</li><li>export</li><li>import</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u03BB &gt;  winget source list
Name    Argument
-----------------------------------------------------
msstore https://storeedgefd.dsx.mp.microsoft.com/v9.0
winget  https://winget.azureedge.net/cache
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9ED8\u8BA4\u6709MS Store\u548Cwinget\u5B98\u65B9\u6E90</p><blockquote><p><code>winget list</code> \u5F88\u6162</p></blockquote><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>https://sspai.com/post/60592</p>`,10);function D(G,M){const n=t("ExternalLinkIcon");return p(),l(r,null,[d,s("p",null,[s("s",null,[u,s("a",h,[b,a(n)])])]),g,s("p",null,[m,s("a",k,[_,a(n)])]),f,s("p",null,[s("a",x,[v,a(n)])]),w,s("p",null,[s("a",q,[y,a(n)]),E,s("a",A,[S,a(n)]),B]),F,s("h2",N,[P,W,s("a",C,[I,a(n)])]),L,U,s("p",null,[s("a",V,[j,a(n)]),z]),T],64)}var J=c(i,[["render",D]]);export{J as default};
