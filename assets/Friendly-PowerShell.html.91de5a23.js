import{r as l,o as r,c as p,a as n,b as a,F as t,d as s,e as o}from"./app.7d274c27.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var i="/feeds/images/Posh-Themes.png";const d={},h=n("h1",{id:"windows\u5982\u4F55\u83B7\u5F97\u597D\u7528\u7684powershell",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows\u5982\u4F55\u83B7\u5F97\u597D\u7528\u7684powershell","aria-hidden":"true"},"#"),s(" Windows\u5982\u4F55\u83B7\u5F97\u597D\u7528\u7684PowerShell")],-1),m=n("blockquote",null,[n("p",null,[s("\u4E0B\u8FF0\u6240\u6709\u5B89\u88C5\u6B65\u9AA4\u901F\u5EA6\u89C6\u7F51\u7EDC\u73AF\u5883"),n("s",null,"\u548C\u4EE3\u7406\u60C5\u51B5"),s("\u800C\u5B9A")])],-1),u=n("p",null,"\u51C6\u5907",-1),b=n("li",null,[s("Microsoft Store \u4E0B\u8F7D "),n("code",null,"Windows Terminal"),s(" \u6216\u8005 "),n("code",null,"winget install --id Microsoft.WindowsTerminal")],-1),k=s("\u4E0B\u8F7D\u5E76\u5B89\u88C5 "),_={href:"https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?WT.mc_id=THOMASMAURER-blog-thmaure&view=powershell-7.2#msi",target:"_blank",rel:"noopener noreferrer"},w=s("PowerShell7"),f=s("\u5B89\u88C5\u4E00\u4E2A\u66F4\u53CB\u597D\u7684\u5B57\u4F53 \u6BD4\u5982 "),g={href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/FiraCode.zip",target:"_blank",rel:"noopener noreferrer"},S=s("FiraCode Nerd Font"),y=s(" \u4E5F\u53EF\u4EE5\u9009\u62E9\u5176\u4F60\u559C\u6B22\u7684\u652F\u6301Unicode\u7684\u5B57\u4F53"),v={href:"https://www.nerdfonts.com/font-downloads",target:"_blank",rel:"noopener noreferrer"},P=s("https://www.nerdfonts.com/font-downloads"),x=n("li",null,"\u5728 Windows Terminal \u4E2D\u4F7F\u7528\u8BE5\u5B57\u4F53",-1),H=o(`<h2 id="\u5B89\u88C5\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7EC4\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u7EC4\u4EF6</h2><p>\u5728 PowerShell7 \u4E2D\u9010\u884C\u8F93\u5165</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">Install-Module</span> <span class="token operator">-</span>Name PSReadLine  <span class="token operator">-</span>Scope CurrentUser
<span class="token function">Install-Module</span> oh-my-posh <span class="token operator">-</span>Scope CurrentUser
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),T={href:"https://ohmyposh.dev/",target:"_blank",rel:"noopener noreferrer"},F=s("oh-my-posh"),I=s("\u5B98\u7F51 \u53EF\u83B7\u53D6\u8BE6\u7EC6\u914D\u7F6E\u4FE1\u606F"),M=o(`<h2 id="\u6DFB\u52A0\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8BBE\u7F6E" aria-hidden="true">#</a> \u6DFB\u52A0\u8BBE\u7F6E</h2><p>\u5728 PowerShell7 \u4E2D\u7F16\u8F91 <code>$profile</code></p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token comment"># \u5148\u4FEE\u6539\u6267\u884C\u6743\u9650\u518D\u7F16\u8F91\u5185\u5BB9</span>
<span class="token function">Set-ExecutionPolicy</span> RemoteSigned
notepad <span class="token variable">$profile</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u4EFB\u4F55\u4F60\u559C\u6B22\u7684\u7F16\u8F91\u5668\u90FD\u884C</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token comment">#------------------------   Import BEGIN    ---------------------------#</span>
<span class="token function">Import-Module</span> PSReadLine
<span class="token function">Import-Module</span> oh-my-posh

<span class="token function">Set-PoshPrompt</span> <span class="token operator">-</span>Theme schema
<span class="token comment"># -Theme \u540E\u9762\u7684\u53C2\u6570\u8868\u793A\u4E3B\u9898\u540D</span>
<span class="token comment">#------------------------   Import END    -----------------------------#</span>
<span class="token comment">#------------------------   Hot-Keys BEGIN    -------------------------#</span>
<span class="token comment"># \u8BBE\u7F6E\u9884\u6D4B\u6587\u672C\u6765\u6E90\u4E3A\u5386\u53F2\u8BB0\u5F55</span>
<span class="token function">Set-PSReadLineOption</span> <span class="token operator">-</span>PredictionSource History

<span class="token comment"># \u6BCF\u6B21\u56DE\u6EAF\u8F93\u5165\u5386\u53F2\uFF0C\u5149\u6807\u5B9A\u4F4D\u4E8E\u8F93\u5165\u5185\u5BB9\u672B\u5C3E</span>
<span class="token function">Set-PSReadLineOption</span> <span class="token operator">-</span>HistorySearchCursorMovesToEnd

<span class="token comment"># \u8BBE\u7F6E Tab \u4E3A\u83DC\u5355\u8865\u5168\u548C Intellisense</span>
<span class="token function">Set-PSReadLineKeyHandler</span> <span class="token operator">-</span>Key <span class="token string">&quot;Tab&quot;</span> <span class="token operator">-</span><span class="token keyword">Function</span> MenuComplete

<span class="token comment"># \u8BBE\u7F6E Ctrl+z \u4E3A\u64A4\u9500</span>
<span class="token function">Set-PSReadLineKeyHandler</span> <span class="token operator">-</span>Key <span class="token string">&quot;Ctrl+z&quot;</span> <span class="token operator">-</span><span class="token keyword">Function</span> Undo

<span class="token comment"># \u8BBE\u7F6E\u5411\u4E0A\u952E\u4E3A\u540E\u5411\u641C\u7D22\u5386\u53F2\u8BB0\u5F55</span>
<span class="token function">Set-PSReadLineKeyHandler</span> <span class="token operator">-</span>Key UpArrow <span class="token operator">-</span><span class="token keyword">Function</span> HistorySearchBackward

<span class="token comment"># \u8BBE\u7F6E\u5411\u4E0B\u952E\u4E3A\u524D\u5411\u641C\u7D22\u5386\u53F2\u7EAA\u5F55</span>
<span class="token function">Set-PSReadLineKeyHandler</span> <span class="token operator">-</span>Key DownArrow <span class="token operator">-</span><span class="token keyword">Function</span> HistorySearchForward
<span class="token comment">#------------------------   Hot-Keys END    ---------------------------#</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="\u6DFB\u52A0\u65B0\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u65B0\u4E3B\u9898" aria-hidden="true">#</a> \u6DFB\u52A0\u65B0\u4E3B\u9898</h3><p>\u5728 PowerShell7 \u4E2D\u8F93\u5165\u4E0B\u5217\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u73B0\u6709\u4E3B\u9898</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code><span class="token function">Get-PoshThemes</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E3B\u9898\u663E\u793A\u5B8C\u4E4B\u540E \u4F60\u4F1A\u770B\u89C1\u4E3B\u9898\u7684\u4FDD\u5B58\u8DEF\u5F84 \u4E00\u822C\u662F Documents/PowerShell/Modules/oh-my-posh/themes <img src="`+i+'" alt="themes-path"></p><p>\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u4E00\u4E2A\u73B0\u6709\u7684\u4E3B\u9898\u6216\u8005\u65B0\u5EFA\u4E00\u4E2A\u4E3B\u9898\u6587\u4EF6\u6765\u81EA\u5B9A\u4E49 Prompt(\u547D\u4EE4\u884C\u63D0\u793A\u7B26) \u6837\u5F0F</p><p>\u6587\u4EF6\u7684\u9ED8\u8BA4\u540E\u7F00\u662F .omp.json \u683C\u5F0F\u4E3A json</p><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>https://github.com/HUGHNew/Posh-Prompt/</li><li>https://zhuanlan.zhihu.com/p/137595941 \u8FD9\u91CC\u7684\u7B2C5\u30016\u6B65\u53EF\u4EE5\u4E0D\u7BA1</li></ul>',13);function N(R,E){const e=l("ExternalLinkIcon");return r(),p(t,null,[h,m,u,n("ol",null,[b,n("li",null,[k,n("a",_,[w,a(e)])]),n("li",null,[f,n("a",g,[S,a(e)]),y,n("a",v,[P,a(e)])]),x]),H,n("p",null,[n("a",T,[F,a(e)]),I]),M],64)}var C=c(d,[["render",N]]);export{C as default};