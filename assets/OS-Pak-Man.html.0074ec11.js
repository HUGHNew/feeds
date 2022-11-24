import{r as t,o as d,c,a as e,b as n,w as p,F as r,e as l,d as a}from"./app.7d274c27.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const h={},u=l(`<h1 id="os-\u4E0E-\u5305\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#os-\u4E0E-\u5305\u7BA1\u7406\u5668" aria-hidden="true">#</a> OS \u4E0E \u5305\u7BA1\u7406\u5668</h1><p>\u91CD\u6240\u5468\u77E5\uFF0C*nix\u7CFB\u7EDF\u90FD\u4F1A\u81EA\u5E26\u5305\u7BA1\u7406\u5668\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EA\u4F1A\u5728 Ubuntu \u4F7F\u7528 apt/apt-get\uFF1B\u5728 fedora \u4F7F\u7528 dnf/yum\u3002</p><h2 id="\u5305\u7BA1\u7406\u5668\u884C\u4E3A" tabindex="-1"><a class="header-anchor" href="#\u5305\u7BA1\u7406\u5668\u884C\u4E3A" aria-hidden="true">#</a> \u5305\u7BA1\u7406\u5668\u884C\u4E3A</h2><p>\u539F\u751F\u7684\u5305\u7BA1\u7406\u5668\u4F1A\u7BA1\u7406\u6240\u6709\u7684\u4F9D\u8D56\u7B49\u8D44\u6E90\uFF0C\u5B83\u4F1A\u7EF4\u62A4\u81EA\u5DF1\u7684\u4F9D\u8D56\u6811\u548C\u6587\u4EF6\u3002\u5982\u679C\u5728\u4E00\u4E2A\u7CFB\u7EDF\u540C\u65F6\u4F7F\u7528\u591A\u4E2A\u8FD9\u6837\u7684\u5305\u7BA1\u7406\u5668\u53EF\u80FD\u5BFC\u81F4\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p>\u5982Ubuntu\u7684apt/dpkg\u7EF4\u62A4\u81EA\u5DF1\u7684\u4F9D\u8D56\u6811\uFF0C\u8FD9\u65F6\u4E0B\u8F7Dyum/rpm\uFF0C\u540C\u65F6\u4F7F\u7528\u7684\u8BDD\uFF0C\u53EF\u80FD\u5BFC\u81F4\u5E95\u5C42glibc\u4E4B\u7C7B\u7684\u5305\u4F9D\u8D56\u4E0D\u540C\u800C\u8986\u76D6\u5B89\u88C5\u3002</p><h2 id="\u65B0\u7684\u6253\u5305\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u65B0\u7684\u6253\u5305\u65B9\u5F0F" aria-hidden="true">#</a> \u65B0\u7684\u6253\u5305\u65B9\u5F0F</h2><blockquote><p>\u4E3B\u8981\u7684\u533A\u522B\u5728\u4E8E Snap\u548CFlakpak \u90FD\u662F\u4E3A\u4E86\u89E3\u51B3\u53D1\u884C\u7248\u4F9D\u8D56\u4E0D\u540C\u800C\u63D0\u51FA\u7684\u6C99\u76D2/\u5BB9\u5668</p></blockquote><h3 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h3><blockquote><p>snap \u901A\u7528 Linux \u5305\u683C\u5F0F\uFF0C\u4F7F\u7B80\u5355\u7684\u4E8C\u8FDB\u5236\u5305\u80FD\u591F\u5B8C\u7F8E\u7684\u3001\u5B89\u5168\u7684\u8FD0\u884C\u5728\u4EFB\u4F55 Linux \u684C\u9762\u3001\u670D\u52A1\u5668\u3001\u4E91\u548C\u8BBE\u5907\u4E0A</p></blockquote><blockquote><p>\u4E0B\u8F7D\u67E5\u8BE2\u5378\u8F7D\u4E4B\u7C7B\u7684\u64CD\u4F5C\u8DDF<code>apt</code>\u5DEE\u4E0D\u591A</p></blockquote><h4 id="\u5B89\u88C5\u7684\u51E0\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7684\u51E0\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> \u5B89\u88C5\u7684\u51E0\u79CD\u6A21\u5F0F</h4><blockquote><p>\u5B89\u88C5\u76EE\u5F55 <code>/snap/bin</code> <s>\u4F3C\u4E4E<code>~/snap</code>\u4E5F\u4F1A\u6709</s></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>snap <span class="token function">install</span> --<span class="token punctuation">[</span>devmode<span class="token operator">|</span>jailmode<span class="token operator">|</span>edge<span class="token operator">|</span>beta<span class="token operator">|</span>stable<span class="token operator">|</span>classic<span class="token punctuation">]</span> __pak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><table><thead><tr><th>mode</th><th>disable</th><th style="text-align:center;">\u7B80\u4ECB</th></tr></thead><tbody><tr><td>devmode</td><td>security confinement</td><td style="text-align:center;">\u5F00\u53D1\u6A21\u5F0F</td></tr><tr><td>jailmode</td><td></td><td style="text-align:center;">\u5F3A\u5236\u9650\u5236\u6A21\u5F0F</td></tr><tr><td>classic</td><td>security</td><td style="text-align:center;">\u7ECF\u5178\u6A21\u5F0F</td></tr></tbody></table><h4 id="\u8F6F\u4EF6\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u542F\u52A8" aria-hidden="true">#</a> \u8F6F\u4EF6\u542F\u52A8</h4><p>\u76F4\u63A5\u8F6F\u4EF6\u540D\u5C31\u80FD\u542F\u52A8</p><p>\u4E5F\u80FD\u5728\u8F6F\u4EF6\u9009\u62E9\u91CC\u9762\u627E</p><h3 id="flatpak" tabindex="-1"><a class="header-anchor" href="#flatpak" aria-hidden="true">#</a> Flatpak</h3><blockquote><p>\u4ECE\u4E00\u5F00\u59CB\u5B83\u7684\u4E3B\u8981\u76EE\u6807\u662F\u5141\u8BB8\u76F8\u540C\u7684\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u5728\u5404\u79CD Linux \u53D1\u884C\u7248\u548C\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u3002</p></blockquote><blockquote><p>\u4F7F\u7528\u6C99\u76D2\u548C\u547D\u540D\u7A7A\u95F4\uFF08\u6BD4\u5982<code>com.gnu.emacs</code>\uFF09</p></blockquote><p>Flatpak\u6BD4snap\u591A\u4E00\u4E2Aruntime\u4E2D\u95F4\u5C42</p><p>flatpak \u53EF\u4EE5\u53EA\u4E3A\u7528\u6237\u5B89\u88C5\uFF08\u9ED8\u8BA4\u4E3A\u7CFB\u7EDF(<code>--system</code>)\u5B89\u88C5\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flatpak <span class="token function">install</span> --user __pak
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9700\u8981\u4F7F\u7528\u5E26\u547D\u540D\u7A7A\u95F4\u7684\u540D\u79F0\u624D\u80FD\u8C03\u7528\uFF0C\u5982<code>com.gnu.emacs</code></p><h3 id="appimage" tabindex="-1"><a class="header-anchor" href="#appimage" aria-hidden="true">#</a> AppImage</h3><blockquote><p>\u4E00\u4E2A\u6587\u4EF6\u5C31\u662F\u4E00\u4E2A\u5E94\u7528 \u4E0D\u4F9D\u8D56\u7CFB\u7EDF\u8D44\u6E90</p></blockquote><p>\u4E0B\u8F7D\u4E00\u4E2A .appimage \u6587\u4EF6\uFF0C\u7ED9\u6267\u884C\u6743\u9650</p><p>\u7136\u540E\u5C31\u53EF\u4EE5\u8FD0\u884C\u4E86</p>`,28),b={href:"https://docs.appimage.org/user-guide/portable-mode.html",target:"_blank",rel:"noopener noreferrer"},k=a("Portable Mode"),m=e("p",null,[a("\u4F3C\u4E4E\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u5728 "),e("code",null,"~/.config/__name")],-1),_=e("h2",{id:"windows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),a(" Windows?")],-1),g=e("p",null,"Windows \u4E0B\u5305\u7BA1\u7406\u5668\u63A8\u8350 winget+scoop",-1),f=e("p",null,"winget\u7528\u4E8E\u4E0B\u8F7D\u5546\u5E97\u8F6F\u4EF6\u548C\u4E00\u4E9B\u5176\u4ED6\u8F6F\u4EF6\u5982steam epic\u7B49",-1),x=e("p",null,[a("scoop\u7528\u6765\u4E0B\u8F7D\u5F00\u53D1\u5DE5\u5177(unix tools)"),e("s",null,"\u9700\u8981git\u548C\u4EE3\u7406")],-1),q=a("\u8BE6\u7EC6\u4ECB\u7ECD");function v(w,y){const s=t("ExternalLinkIcon"),o=t("RouterLink");return d(),c(r,null,[u,e("blockquote",null,[e("p",null,[e("a",b,[k,n(s)])])]),m,_,g,f,x,e("p",null,[n(o,{to:"/blogs/Windows-Pkg-Man.html"},{default:p(()=>[q]),_:1})])],64)}var S=i(h,[["render",v]]);export{S as default};
