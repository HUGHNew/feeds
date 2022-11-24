import{e as n}from"./app.7d274c27.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="linux-\u67E5\u627E\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#linux-\u67E5\u627E\u6307\u4EE4" aria-hidden="true">#</a> Linux \u67E5\u627E\u6307\u4EE4</h1><table><thead><tr><th>command</th><th><code>which</code><br>(builtin)</th><th><code>where</code><br>(builtin)</th><th><code>whereis</code></th><th><code>whatis</code></th><th><code>locate</code><br>\u9700\u8981\u4E0B\u8F7D</th><th><code>find</code></th></tr></thead><tbody><tr><td>\u67E5\u8BE2\u57DF</td><td>\u7528\u6237<code>PATH</code></td><td><code>PATH</code>/alias/builtin</td><td>binary/source/man</td><td>man</td><td>\u81EA\u5EFA\u7684\u7D22\u5F15</td><td>\u6574\u4E2A\u6587\u4EF6\u7CFB\u7EDF</td></tr><tr><td>\u6570\u636E\u66F4\u65B0</td><td></td><td></td><td></td><td></td><td>\u4F7F\u7528find\u5B9A\u671F\u66F4\u65B0/<code>updatedb</code>\u5F3A\u5236\u66F4\u65B0</td><td></td></tr><tr><td>\u7ED3\u679C</td><td>\u663E\u793A\u7B2C\u4E00\u4E2A(<code>-a</code>\u663E\u793A\u6240\u6709)</td><td>\u663E\u793A\u6240\u6709\u67E5\u627E\u7ED3\u679C(\u4E0E<code>which -a</code>\u76F8\u4F3C)</td><td>(\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u8BBE\u5B9A\u7C7B\u578B)</td><td>\u663E\u793Aman\u624B\u518C\u7684\u4E00\u884C\u63CF\u8FF0</td><td></td><td></td></tr></tbody></table><h2 id="which-where" tabindex="-1"><a class="header-anchor" href="#which-where" aria-hidden="true">#</a> which/where</h2><blockquote><p>\u5728\u7528\u6237\u7684 <code>PATH</code> \u4E2D\u5BFB\u627E \u4F46\u5176\u5B9E\u8DDF<code>where</code>\u67E5\u627E\u8303\u56F4\u4E00\u6837</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">which</span> <span class="token function">ls</span>
ls: aliased to <span class="token function">ls</span> --color<span class="token operator">=</span>auto
$ <span class="token function">which</span> -a <span class="token function">ls</span>
ls: aliased to <span class="token function">ls</span> --color<span class="token operator">=</span>auto
/usr/bin/ls
/bin/ls
$ <span class="token function">which</span> where
where: shell built-in <span class="token builtin class-name">command</span>

<span class="token comment"># where</span>
$ where <span class="token function">ls</span>
ls: aliased to <span class="token function">ls</span> --color<span class="token operator">=</span>auto
/usr/bin/ls
/bin/ls
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="whereis" tabindex="-1"><a class="header-anchor" href="#whereis" aria-hidden="true">#</a> whereis</h2><blockquote><p>\u9ED8\u8BA4\u67E5\u627Ebinary(<code>-b</code>) source(<code>-s</code>)\u548Cman pages(<code>-m</code>)</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">whereis</span> <span class="token function">ls</span>
ls: /usr/bin/ls /usr/share/man/man1/ls.1.gz
$ <span class="token function">whereis</span> -b <span class="token function">ls</span>
ls: /usr/bin/ls
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="whatis" tabindex="-1"><a class="header-anchor" href="#whatis" aria-hidden="true">#</a> whatis</h2><blockquote><p>\u663E\u793Aman\u624B\u518C\u7684\u4E00\u884C\u63CF\u8FF0</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ whatis whatis
whatis <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>           - display one-line manual pag<span class="token punctuation">..</span>.

<span class="token comment"># \u663E\u793A\u5B8C\u6574\u7684\u4E0D\u53D7\u7EC8\u7AEF\u5BBD\u5EA6\u5F71\u54CD\u7684\u4E00\u884C</span>
$ whatis --long whatis
whatis <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>           - display one-line manual page descriptions
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><blockquote><p>\u6587\u4EF6\u7CFB\u7EDF\u67E5\u627E\u6587\u4EF6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">find</span> /usr/bin -name <span class="token function">ls</span>
/usr/bin/ls
$ <span class="token function">find</span> /usr/bin -type f -name <span class="token function">ls</span>
/usr/bin/ls
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>tldr</code> \u63CF\u8FF0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find
Find files or directories under the given directory tree, recursively.More information: https://manned.org/find.

 - Find files by extension:
   find {{root_path}} -name &#39;{{*.ext}}&#39;

 - Find files matching multiple path/name patterns:
   find {{root_path}} -path &#39;{{**/path/**/*.ext}}&#39; -or -name &#39;{{*pattern*}}&#39;

 - Find directories matching a given name, in case-insensitive mode:
   find {{root_path}} -type d -iname &#39;{{*lib*}}&#39;

 - Find files matching a given pattern, excluding specific paths:
   find {{root_path}} -name &#39;{{*.py}}&#39; -not -path &#39;{{*/site-packages/*}}&#39;

 - Find files matching a given size range:
   find {{root_path}} -size {{+500k}} -size {{-10M}}

 - Run a command for each file (use {} within the command to access the filename):
   find {{root_path}} -name &#39;{{*.ext}}&#39; -exec {{wc -l {} }}\\;

 - Find files modified in the last 7 days and delete them:
   find {{root_path}} -daystart -mtime -{{7}} -delete

 - Find empty (0 byte) files and delete them:
   find {{root_path}} -type {{f}} -empty -delete
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,16);function t(i,l){return e}var p=s(a,[["render",t]]);export{p as default};
