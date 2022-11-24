import{r as e,o as t,c as p,a as n,b as o,F as c,d as s,e as r}from"./app.7d274c27.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"crontab",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#crontab","aria-hidden":"true"},"#"),s(" crontab")],-1),b=n("blockquote",null,[n("p",null,"\u5B9A\u65F6\u4EFB\u52A1\u542F\u52A8\u65F6\u7684 workdir \u4E3A\u7528\u6237\u5BB6\u76EE\u5F55")],-1),m={href:"https://www.gairuo.com/p/cron-expression-sheet",target:"_blank",rel:"noopener noreferrer"},d=s("\u53C2\u8003"),k=r(`<p>\u5177\u4F53\u683C\u5F0F\u53C2\u7167 <code>crontab -e</code> \u65F6\u7684\u7CFB\u7EDF\u63D0\u793A\u683C\u5F0F \u5982Ubuntu:<code># m h dom mon dow command</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u683C\u5F0F\u662F\uFF1A\u5206 \u65F6 \u65E5 \u6708 \u661F\u671F \u8981\u8FD0\u884C\u7684\u547D\u4EE4</span>
<span class="token comment"># week (0 - 6) = sun,mon,tue,wed,thu,fri,sat</span>
<span class="token comment"># Example of job definition:</span>
<span class="token comment"># .---------------- minute (0 - 59)</span>
<span class="token comment"># |  .------------- hour (0 - 23)</span>
<span class="token comment"># |  |  .---------- day of month (1 - 31)</span>
<span class="token comment"># |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...</span>
<span class="token comment"># |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,...,sat</span>
<span class="token comment"># |  |  |  |  |</span>
<span class="token comment"># *  *  *  *  * user-name command to be executed</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> usage</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>usage:  crontab [-u user] file
        crontab [ -u user ] [ -i ] { -e | -l | -r }
                (default operation is replace, per 1003.2)
        -e      (edit user&#39;s crontab)
        -l      (list user&#39;s crontab)
        -r      (delete user&#39;s crontab)
        -i      (prompt before deleting user&#39;s crontab)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="tldr" tabindex="-1"><a class="header-anchor" href="#tldr" aria-hidden="true">#</a> tldr</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">crontab</span>
Schedule <span class="token function">cron</span> <span class="token function">jobs</span> to run on a <span class="token function">time</span> interval <span class="token keyword">for</span> the current user.Job definition format: <span class="token string">&quot;(min) (hour) (day_of_month) (month) (day_of_week) command_to_execute&quot;</span>.More information: https://manned.org/crontab.

 - Edit the <span class="token function">crontab</span> <span class="token function">file</span> <span class="token keyword">for</span> the current user:
   <span class="token function">crontab</span> -e

 - Edit the <span class="token function">crontab</span> <span class="token function">file</span> <span class="token keyword">for</span> a specific user:
   <span class="token function">sudo</span> <span class="token function">crontab</span> -e -u <span class="token punctuation">{</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span><span class="token punctuation">}</span>

 - Replace the current <span class="token function">crontab</span> with the contents of the given file:
   <span class="token function">crontab</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path/to/file<span class="token punctuation">}</span><span class="token punctuation">}</span>

 - View a list of existing <span class="token function">cron</span> <span class="token function">jobs</span> <span class="token keyword">for</span> current user:
   <span class="token function">crontab</span> -l

 - Remove all <span class="token function">cron</span> <span class="token function">jobs</span> <span class="token keyword">for</span> the current user:
   <span class="token function">crontab</span> -r

 - Sample job <span class="token function">which</span> runs at <span class="token number">10</span>:00 every day <span class="token punctuation">(</span>* means any value<span class="token punctuation">)</span>:
   <span class="token number">0</span> <span class="token number">10</span> * * * <span class="token punctuation">{</span><span class="token punctuation">{</span>command_to_execute<span class="token punctuation">}</span><span class="token punctuation">}</span>

 - Sample job <span class="token function">which</span> runs every minute on the 3rd of April:
   * * <span class="token number">3</span> Apr * <span class="token punctuation">{</span><span class="token punctuation">{</span>command_to_execute<span class="token punctuation">}</span><span class="token punctuation">}</span>

 - Sample job <span class="token function">which</span> runs a certain script at 02:30 every Friday:
   <span class="token number">30</span> <span class="token number">2</span> * * Fri <span class="token punctuation">{</span><span class="token punctuation">{</span>/absolute/path/to/script.sh<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,6);function h(f,_){const a=e("ExternalLinkIcon");return t(),p(c,null,[i,b,n("blockquote",null,[n("p",null,[n("a",m,[d,o(a)])])]),k],64)}var v=l(u,[["render",h]]);export{v as default};
