import{r as t,o as r,c as l,a as e,b as s,F as o,e as p,d as a}from"./app.7d274c27.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const c={},d=p(`<h1 id="gnome-\u7684\u684C\u9762\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#gnome-\u7684\u684C\u9762\u5165\u53E3" aria-hidden="true">#</a> Gnome \u7684\u684C\u9762\u5165\u53E3</h1><div class="custom-container tip"><p class="custom-container-title">\u9002\u5B9C\u4EBA\u7FA4</p><ul><li>\u60F3\u5728\u65B0\u5EFA\u4E00\u4E2A\u684C\u9762\u5165\u53E3\u8DD1\u811A\u672C</li><li>\u60F3\u5173\u8054\u6587\u4EF6\u7C7B\u578B\u5230\u81EA\u5DF1\u60F3\u8981\u7684\u53EF\u6267\u884C\u6587\u4EF6</li><li>\u60F3\u4E86\u89E3\u4E3A\u4EC0\u4E48\u6587\u4EF6\u7C7B\u578B\u7684\u5173\u8054\u65B9\u5F0F</li><li>\u60F3\u6539\u6389\u4E00\u4E9B\u83AB\u540D\u5947\u5999\u7684\u6587\u4EF6\u7C7B\u578B\u5173\u8054</li></ul></div><blockquote><p>.desktop \u6587\u4EF6</p><p>Desktop Entry \u684C\u9762\u5165\u53E3\u6587\u4EF6 \u6307\u5B9A\u4E00\u4E2A\u5165\u53E3 \u53EF\u4EE5\u5173\u8054\u5230\u53EF\u6267\u884C\u6587\u4EF6\u548C\u5904\u7406\u7684\u6587\u4EF6\u7C7B\u578B</p></blockquote><h2 id="\u9ED8\u8BA4\u5173\u8054" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u5173\u8054" aria-hidden="true">#</a> \u9ED8\u8BA4\u5173\u8054</h2><p>\u53EF\u4EE5\u5728\u4E00\u4E9B\u6587\u4EF6\u4E2D\u770B\u89C1MIME\u7C7B\u578B\u548C\u4E00\u4E9B\u5BF9\u5E94\u7684\u9ED8\u8BA4\u7A0B\u5E8F\u7684\u5173\u8054</p><ul><li>/etc/gnome/defaults.list</li><li>/usr/share/applications/defaults.list</li></ul><p>\u80FD\u770B\u5230\u6BD4\u5982\u8FD9\u6837\u7684\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>application/xhtml+xml=google-chrome.desktop;
application/rdf+xml=google-chrome.desktop;
application/rss+xml=google-chrome.desktop;
application/xhtml+xml=google-chrome.desktop;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>google-chrome.desktop</code> \u5C31\u662F\u524D\u9762MIME\u7C7B\u578B\u6307\u5B9A\u7684\u9ED8\u8BA4\u6253\u5F00\u5E94\u7528\u7684\u5165\u53E3</p><p>\u4F46\u662F\u8FD9\u4E0D\u662F\u5E94\u7528\u76F8\u5173\u7684\u4EFB\u4F55id \u800C\u662F\u53EF\u4EE5\u81EA\u5DF1\u521B\u5EFA\u548C\u4FEE\u6539\u7684\u684C\u9762\u5165\u53E3 \u53EF\u4EE5\u5728<code>/usr/share/applications/</code> \u4E2D\u627E\u5230</p><details class="custom-container details"><summary>\u7B80\u7565\u7248\u7684 google-chrome.desktop</summary><div class="language-desktop ext-desktop line-numbers-mode"><pre class="language-desktop"><code>[Desktop Entry]
Version=1.0
Name=Google Chrome
# Only KDE 4 seems to use GenericName, so we reuse the KDE strings.
# From Ubuntu&#39;s language-pack-kde-XX-base packages, version 9.04-20090413.
GenericName=Web Browser
# Gnome and KDE 3 uses Comment.
Comment=Access the Internet
Comment[zh_CN]=\u8BBF\u95EE\u4E92\u8054\u7F51
Exec=/usr/bin/google-chrome-stable %U
StartupNotify=true
Terminal=false
Icon=google-chrome
Type=Application
Categories=Network;WebBrowser;
MimeType=application/pdf;application/rdf+xml;application/rss+xml;application/xhtml+xml;application/xhtml_xml;application/xml;image/gif;image/jpeg;image/png;image/webp;text/html;text/xml;x-scheme-handler/http;x-scheme-handler/https;
Actions=new-window;new-private-window;
[Desktop Action new-window]
Name=New Window
Name[zh_CN]=\u65B0\u5EFA\u7A97\u53E3
Name[zh_TW]=\u958B\u65B0\u8996\u7A97
Exec=/usr/bin/google-chrome-stable
[Desktop Action new-private-window]
Name=New Incognito Window
Name[zh_CN]=\u65B0\u5EFA\u9690\u8EAB\u7A97\u53E3
Name[zh_TW]=\u65B0\u589E\u7121\u75D5\u5F0F\u8996\u7A97
Exec=/usr/bin/google-chrome-stable --incognito
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></details><h2 id="\u521B\u5EFA\u81EA\u5DF1\u7684\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u81EA\u5DF1\u7684\u5165\u53E3" aria-hidden="true">#</a> \u521B\u5EFA\u81EA\u5DF1\u7684\u5165\u53E3</h2><p>\u540C\u6837\u4E5F\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u5165\u53E3 \u4E0D\u8FC7\u4E0D\u7528\u5728 <code>/usr/share/applications</code> \u5728 <code>~/.local/share/applications</code> \u5C31\u53EF\u4EE5\u4E86</p><p>\u5177\u4F53\u7684\u5199\u6CD5\u53EF\u4EE5\u53C2\u8003\u51E0\u4E2A\u6BD4\u8F83\u77ED\u7684 <code>.desktop</code> \u6587\u4EF6 \u8FD9\u91CC\u6BD4\u5982\u817E\u8BAF\u4F1A\u8BAE</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Desktop Entry]
Name=WeMeetApp
Exec=/opt/wemeet/wemeetapp.sh %u
Comment=
Terminal=false
Icon=/opt/wemeet/icons/hicolor/64x64/mimetypes/wemeetapp.png
Type=Application
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><table><thead><tr><th style="text-align:center;">\u5B57\u6BB5</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>Name</strong></td><td>\u5916\u9732\u663E\u793A\u7684\u5E94\u7528\u540D</td></tr><tr><td style="text-align:center;"><strong>Type</strong></td><td>\u5165\u53E3\u7C7B\u578B</td></tr><tr><td style="text-align:center;">Comment</td><td>\u53EF\u80FD\u662F\u67D0\u4E9B\u8BE6\u7EC6\u9875\u7684\u4ECB\u7ECD \u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u8BED\u8A00\u8BBE\u7F6E <code>Comment[zh_CN]</code></td></tr><tr><td style="text-align:center;">Terminal(boolean)</td><td>\u662F\u5426\u7EC8\u7AEF\u53EF\u7528</td></tr><tr><td style="text-align:center;">Exec</td><td>\u76F8\u5173\u53EF\u6267\u884C\u6587\u4EF6\u8DEF\u5F84</td></tr><tr><td style="text-align:center;">Icon</td><td>\u663E\u793A\u7684\u56FE\u6807(\u9ED8\u8BA4\u8DEF\u5F84\u5728<code>/usr/share/icons</code>)</td></tr><tr><td style="text-align:center;">MimeType</td><td>\u5173\u8054\u7684MIME\u6587\u4EF6\u7C7B\u578B</td></tr><tr><td style="text-align:center;">Categories</td><td>\u5165\u53E3\u5206\u7C7B</td></tr></tbody></table><details class="custom-container details"><summary>\u8FD9\u91CC\u4EE5 [Koodo Reader](https://github.com/troyeguo/koodo-reader) appimage \u7248\u672C\u4E3E\u4F8B</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Desktop Entry]
Name=Koodo-reader
Comment=Epub/Mobi/Azw3 Reader know more here @troyeguo/koodo-reader
Icon=/path/to/koodo-reader.png
Exec=/path/to/your/reader
Terminal=false
Type=Application
Keywords=reader;epub;mobi;azw3;opensource;
Categories=Utility;Office;
MimeType=application/epub+zip;application/x-mobipocket-ebook;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5BF9\u4E8E\u8FD9\u4E2A\u5165\u53E3\u800C\u8A00 \u8BBE\u7F6E <code>MimeType</code> \u662F\u6211\u4F7F\u7528\u65F6\u6700\u5173\u6CE8\u7684\u4E00\u4E2A\u4E1C\u897F \u56E0\u4E3Aubuntu\u6CA1\u6709\u81EA\u5E26\u7684epub\u9605\u8BFB\u5668 \u800C\u6211\u53C8\u4F7F\u7528\u7684appimage\u683C\u5F0F</p></details><h2 id="\u66F4\u65B0\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u7D22\u5F15" aria-hidden="true">#</a> \u66F4\u65B0\u7D22\u5F15</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ desktop-file-validate your_entry.desktop <span class="token comment"># \u68C0\u67E5\u683C\u5F0F\u662F\u5426\u6709\u95EE\u9898</span>
$ desktop-file-install --dir<span class="token operator">=~</span>/.local/share/applications your_entry.desktop <span class="token comment"># \u5C06\u5165\u53E3\u6587\u4EF6\u653E\u5165\u6307\u5B9A\u76EE\u5F55 \u4F3C\u4E4E\u76F4\u63A5 mv \u4E5F\u884C</span>
$ update-desktop-database ~/.local/share/applications <span class="token comment"># \u66F4\u65B0\u7D22\u5F15\u4EE5\u4FBF\u53EF\u7528</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,20),m={href:"https://wiki.archlinux.org/title/desktop_entries",target:"_blank",rel:"noopener noreferrer"},b=a("Arch Wiki entry"),u={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",target:"_blank",rel:"noopener noreferrer"},h=a("Mozilla MIME");function g(x,k){const n=t("ExternalLinkIcon");return r(),l(o,null,[d,e("ul",null,[e("li",null,[e("a",m,[b,s(n)])]),e("li",null,[e("a",u,[h,s(n)])])])],64)}var f=i(c,[["render",g]]);export{f as default};
