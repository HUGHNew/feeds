import{e as s}from"./app.7d274c27.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";var a="/feeds/images/settings-locate.png",e="/feeds/images/screenshots.png",p="/feeds/images/ocr-hotkey-add.png";const t={},c=s('<h1 id="ocr-on-gnome" tabindex="-1"><a class="header-anchor" href="#ocr-on-gnome" aria-hidden="true">#</a> OCR on Gnome</h1><blockquote><p>Windows\u4E0A\u6700\u65B9\u4FBF\u7684\u622A\u56FE+OCR\u662F Snipaste(Windows Store\u514D\u8D39\u4E0B\u8F7D)+TIM/QQ OCR</p><p>\u6446\u8131QQ OCR\u6709\u70B9\u9EBB\u70E6 \u5C31\u6CA1\u6709\u6298\u817E\u4E86</p></blockquote><p>\u672C\u6587\u4ECB\u7ECD Ubuntu Gnome\u4E0B\u7684\u622A\u56FE+OCR\u89E3\u51B3\u65B9\u6848</p><blockquote><p>\u4F9D\u8D56 : gnome-screenshot(\u5E94\u8BE5\u662F\u81EA\u5E26\u7684) tesseract-ocr imagemagick(\u653E\u5927\u56FE\u7247\u63D0\u9AD8\u7CBE\u5EA6) xclip(\u5C06\u5185\u5BB9\u590D\u5236\u5230\u526A\u5207\u677F)</p></blockquote><h2 id="screenshot" tabindex="-1"><a class="header-anchor" href="#screenshot" aria-hidden="true">#</a> screenshot</h2><p><img src="'+a+'" alt="location"></p><p>\u4ECE\u5FEB\u6377\u952E\u8BBE\u7F6E\u80FD\u770B\u51FA\u6765 screenshot \u662F\u5426\u81EA\u5E26</p><p>\u540C\u65F6\u6539\u4E00\u4E0B\u5FEB\u6377\u952E\u66F4\u65B9\u4FBF\u5355\u624B\u622A\u56FE\u64CD\u4F5C</p><p><img src="'+e+`" alt="Shortcuts rewrite"></p><h2 id="\u4E0B\u8F7D\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u4F9D\u8D56" aria-hidden="true">#</a> \u4E0B\u8F7D\u4F9D\u8D56</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">## install tesseract-ocr</span>
<span class="token function">sudo</span> add-apt-repository ppa:alex-p/tesseract-ocr

<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y tesseract-ocr imagemagick gnome-screenshot xclip
<span class="token comment"># download Chinese data</span>
<span class="token comment"># \u4E0B\u8F7D\u4E2D\u6587\u8BCD\u5E93</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u53BB &lt;https://github.com/tesseract-ocr/tessdata&gt; \u4E0B\u8F7D\u5176\u4ED6\u8BED\u8A00\u7684\u8BCD\u5E93 \u524D\u7F00\u5E94\u8BE5\u662F\u5BF9\u5E94\u82F1\u8BED\u7684\u4E09\u4E2A\u5B57\u6BCD</span>
<span class="token function">wget</span> https://github.com/tesseract-ocr/tessdata/raw/main/chi_sim.traineddata -O chi_sim.traineddata
<span class="token comment"># \u628A\u4E0B\u8F7D\u597D\u7684\u8BCD\u5E93\u79FB\u52A8\u5230\u8D44\u6E90\u76EE\u5F55\u4E0B</span>
<span class="token function">sudo</span> <span class="token function">mv</span> chi_sim.traineddata /usr/share/tesseract-ocr/4.00/tessdata/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u547D\u4EE4\u884C <code>tesseract --list-langs</code> \u6765\u68C0\u67E5\u73B0\u6709\u7684\u8BED\u8A00\u652F\u6301</p><h2 id="\u914D\u7F6E\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4F7F\u7528" aria-hidden="true">#</a> \u914D\u7F6E\u4F7F\u7528</h2><p>\u76F4\u63A5\u914D\u7F6E\u811A\u672C\u548C\u5FEB\u6377\u952E\u652F\u6301\u622A\u56FE\u5E76OCR\u590D\u5236\u5185\u5BB9\u5230\u526A\u5207\u677F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># Dependencies: gnome-screenshot tesseract-ocr imagemagick xclip</span>
<span class="token comment"># may only works on Gnome</span>

<span class="token comment"># reference : &lt;https://blog.csdn.net/weixin_39949673/article/details/111116693&gt;</span>

<span class="token comment"># tmp file</span>
<span class="token assign-left variable">src</span><span class="token operator">=</span><span class="token string">&quot;/tmp/ocr_tmp&quot;</span>

<span class="token comment"># take a shot</span>
gnome-screenshot -a -f <span class="token variable">$src</span>.png

<span class="token comment"># increase the png which can increase the detection rate</span>
mogrify -modulate <span class="token number">100,0</span> -resize <span class="token number">400</span>% <span class="token variable">$src</span>.png

<span class="token comment"># OCR by tesseract</span>
<span class="token comment"># tesseract save the output to $outputbase.txt</span>
tesseract <span class="token variable">$src</span>.png <span class="token variable">$src</span> <span class="token operator">&amp;&gt;</span>/dev/null -l eng+chi_sim

<span class="token comment">#use sed to delete the blanks &amp; get the text and copy to clipboard</span>
<span class="token function">cat</span> <span class="token variable">$src</span>.txt <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/ //g&#39;</span> <span class="token operator">|</span> xclip -sel clip
<span class="token comment"># no need to rm because you&#39;ll rewrite them each time you use OCR</span>
<span class="token comment"># rm $src.png $src</span>

<span class="token comment"># notify U that this work is done</span>
<span class="token function">notify-send</span> <span class="token string">&quot;OCR Done&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="`+p+'" alt="ocr-hotkey-add"> \u518D\u8BBE\u7F6E Gnome \u5FEB\u6377\u952E</p><p>\u914D\u7F6E\u597D\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86</p>',17);function r(o,l){return c}var b=n(t,[["render",r]]);export{b as default};
