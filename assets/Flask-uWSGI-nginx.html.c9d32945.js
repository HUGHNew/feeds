import{r as l,o as t,c as o,a as n,b as e,F as r,e as p,d as s}from"./app.7d274c27.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=p(`<h1 id="\u4F7F\u7528\u7684uwsgi\u548Cnginx\u7684-flask-\u670D\u52A1\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7684uwsgi\u548Cnginx\u7684-flask-\u670D\u52A1\u90E8\u7F72" aria-hidden="true">#</a> \u4F7F\u7528\u7684uwsgi\u548Cnginx\u7684 Flask \u670D\u52A1\u90E8\u7F72</h1><blockquote><p>\u672C\u6587\u4EC5\u5C55\u793A Flask\u4F7F\u7528uwsgi nginx\u90E8\u7F72\u7684\u8FC7\u7A0B\u548C\u8FC7\u7A0B\u4E2D\u5FC5\u8981\u7684\u4ECB\u7ECD</p></blockquote><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2><p>\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684Flask\u9879\u76EE</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># filename:app.py</span>
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&lt;p&gt;Hello, World!&lt;/p&gt;&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD0\u884C\u65B9\u6CD5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">FLASK_APP</span><span class="token operator">=</span>app
<span class="token comment"># \u9700\u8981\u5148\u6307\u5B9A app \u6587\u4EF6 \u5982\u679C\u8BE5\u6587\u4EF6\u540D\u4E3A app.py \u6216 wsgi.py \u53EF\u7701\u7565</span>
$ flask run
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9ED8\u8BA4\u90E8\u7F72\u5728 <code>127.0.0.1:5000</code></p><p>\u8FD8\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u6307\u5B9A\u7AEF\u53E3\u548CIP</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&lt;p&gt;Hello, World!&lt;/p&gt;&quot;</span>
<span class="token keyword">if</span> __name__<span class="token operator">==</span><span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app<span class="token punctuation">.</span>run<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>port<span class="token operator">=</span><span class="token number">5000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ python app.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5C06\u7AEF\u53E3\u6539\u4E3A <code>0.0.0.0</code> \u5373\u53EF\u5916\u90E8\u8BBF\u95EE \u53EF\u4F5C\u4E3A\u7B80\u5355\u90E8\u7F72\u65B9\u5F0F<strong>\u4F46\u4E0D\u63A8\u8350</strong></p><h2 id="uwsgi\u4E0Enginx" tabindex="-1"><a class="header-anchor" href="#uwsgi\u4E0Enginx" aria-hidden="true">#</a> uWSGI\u4E0Enginx</h2>`,14),b=s("WSGI:Web Server Gateway Interface \u662F\u4E00\u4E2APython\u6807\u51C6"),m={href:"https://www.python.org/dev/peps/pep-0333/",target:"_blank",rel:"noopener noreferrer"},d=s("PEP0333"),k=p(`<p>uWSGI:\u4E00\u4E2AC\u7F16\u5199\u7684\u5E94\u7528\u670D\u52A1\u5668(\u5168\u529F\u80FDHTTP\u670D\u52A1\u5668) \u53EF\u4EE5\u76F4\u63A5\u6784\u5EFA\u7F51\u7EDC\u670D\u52A1 \u9ED8\u8BA4\u5355\u6838\u5355\u7EBF\u7A0B</p><p>uwsgi:\u4E00\u79CD\u534F\u8BAE uWSGI/nginx/apache httpd \u90FD\u652F\u6301</p><h2 id="\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a> \u90E8\u7F72</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> flask uwsgi
<span class="token comment"># uwsgi \u9700\u8981gcc\u7F16\u8BD1</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
<span class="token comment"># sudo yum install nginx</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h3><h4 id="uwsgi" tabindex="-1"><a class="header-anchor" href="#uwsgi" aria-hidden="true">#</a> uwsgi</h4><p>uwsgi\u914D\u7F6E\u6587\u4EF6\u653E\u5728\u5F53\u524D\u8DEF\u5F84\u4E0B \u53EF\u547D\u540D\u4E3A <code>uwsgi.ini</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>uwsgi<span class="token punctuation">]</span> 
socket <span class="token operator">=</span> <span class="token number">127.0</span>.0.1:5000
<span class="token comment">#  \u542F\u52A8\u7A0B\u5E8F\u65F6\u6240\u4F7F\u7528\u7684\u5730\u5740\u548C\u7AEF\u53E3</span>
<span class="token comment">#  \u4E0D\u8FC7\u5728\u670D\u52A1\u5668\u4E0A\u662F\u901A\u8FC7uwsgi\u8BBE\u7F6E\u7AEF\u53E3 \u901A\u8FC7uwsgi\u6765\u542F\u52A8\u9879\u76EE</span>
<span class="token comment">#  \u4E5F\u5C31\u662F\u8BF4\u542F\u52A8\u4E86uwsgi \u4E5F\u5C31\u542F\u52A8\u4E86\u9879\u76EE</span>
chdir <span class="token operator">=</span> /path/to/your/project
<span class="token comment">#  \u5207\u6362\u76EE\u5F55/\u914D\u7F6E\u9879\u76EE\u8DEF\u5F84</span>
wsgi-file <span class="token operator">=</span> app.py
<span class="token comment"># flask\u7A0B\u5E8F\u7684\u542F\u52A8\u6587\u4EF6</span>
<span class="token comment"># \u901A\u5E38\u5728\u672C\u5730\u662F\u901A\u8FC7\u8FD0\u884C  python app.py runserver \u6765\u542F\u52A8\u9879\u76EE\u7684</span>
callable <span class="token operator">=</span> app
<span class="token comment"># \u7A0B\u5E8F\u5185\u542F\u7528\u7684application\u53D8\u91CF\u540D</span>
processes <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># \u5904\u7406\u5668\u4E2A\u6570</span>
threads <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># \u7EBF\u7A0B\u4E2A\u6570</span>
stats <span class="token operator">=</span> <span class="token number">127.0</span>.0.1:9191
<span class="token comment"># \u83B7\u53D6uwsgi\u7EDF\u8BA1\u4FE1\u606F\u7684\u670D\u52A1\u5730\u5740</span>
pidfile <span class="token operator">=</span> uwsgi.pid
<span class="token comment"># \u4FDD\u5B58pid\u4FE1\u606F \u65B9\u4FBF\u505C\u6B62\u670D\u52A1\u548C\u91CD\u542F\u7684\u65F6\u5019\u7528</span>
daemonize <span class="token operator">=</span> uwsgi.log
<span class="token comment"># \u540E\u53F0\u8FD0\u884C\u65F6\u8BB0\u5F55uwsgi\u7684\u8FD0\u884C\u65E5\u5FD7</span>
<span class="token comment"># \u6587\u4EF6\u8DEF\u5F84\u57FA\u4E8Echdir\u8DEF\u5F84</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h4 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h4><p>\u53EF\u4EE5\u76F4\u63A5\u66F4\u6539 <code>/etc/nginx/sites-enabled/default</code> \u4E0D\u7136\u53EF\u80FD\u4F1A\u53D1\u751F\u670D\u52A1\u8986\u76D6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
    listen <span class="token number">5000</span><span class="token punctuation">;</span>
    <span class="token comment"># port</span>
    location /<span class="token punctuation">{</span>
        include uwsgi_params<span class="token punctuation">;</span>
        <span class="token comment"># \u5F15\u5165uwsgi\u53C2\u6570</span>
        uwsgi_pass <span class="token number">127.0</span>.0.1:5000<span class="token punctuation">;</span>
        <span class="token comment"># \u8BBE\u7F6Euwsgi\u5730\u5740</span>
        uwsgi_param UWSGI_CHDIR /path/to/your/project<span class="token punctuation">;</span>
        <span class="token comment"># \u4FDD\u6301\u4E0E\u4E4B\u524D\u7684\u8DEF\u5F84\u76F8\u540C</span>
        uwsgi_param UWSGI_SCRIPT app:app<span class="token punctuation">;</span>
        <span class="token comment"># app_filename:callable</span>
    <span class="token punctuation">}</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   /usr/share/nginx/html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u670D\u52A1\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u63A7\u5236" aria-hidden="true">#</a> \u670D\u52A1\u63A7\u5236</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>uwsgi uwsgi.ini
uwsgi --ini uwsgi.ini
<span class="token comment"># \u4E0A\u8FF0\u4E24\u79CD\u65B9\u5F0F\u4E00\u6837</span>
uwsgi  uwsgi.ini --daemonize
<span class="token comment"># \u540E\u53F0\u8FD0\u884C\u542F\u52A8</span>
uwsgi --stop uwsgi.pid
<span class="token comment"># \u505C\u6B62\u670D\u52A1</span>
uwsgi --reload uwsgi.pid
<span class="token comment"># \u53EF\u4EE5\u65E0\u7F1D\u91CD\u542F\u670D\u52A1</span>


nginx
<span class="token comment"># \u542F\u52A8</span>
nginx -s stop/quit
<span class="token comment"># \u505C\u6B62</span>
nginx -s reload
<span class="token comment"># \u70ED\u52A0\u8F7D</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u53C2\u8003\u6587\u6863-\u535A\u5BA2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u6863-\u535A\u5BA2" aria-hidden="true">#</a> \u53C2\u8003\u6587\u6863/\u535A\u5BA2</h2>`,15),h={href:"https://flask.palletsprojects.com/en/2.0.x/deploying/uwsgi/",target:"_blank",rel:"noopener noreferrer"},g=s("Flask uWSGI \u5B98\u65B9\u6587\u6863"),_={href:"https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uswgi-and-nginx-on-ubuntu-18-04",target:"_blank",rel:"noopener noreferrer"},w=s("Flask with nginx and uWSGI on Ubuntu Bionic"),f={href:"https://blog.csdn.net/hit0803107/article/details/53264066",target:"_blank",rel:"noopener noreferrer"},x=s("Flask+uwsgi+nginx\u9879\u76EE\u90E8\u7F72"),v={href:"https://blog.csdn.net/dqchouyang/article/details/81639788",target:"_blank",rel:"noopener noreferrer"},y=s("nginx\u4E0EuWSGI"),q=n("h2",{id:"\u4F18\u79C0\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F18\u79C0\u6587\u7AE0","aria-hidden":"true"},"#"),s(" \u4F18\u79C0\u6587\u7AE0")],-1),F={href:"https://windard.com/project/2016/12/01/Deploy-Flask-APP",target:"_blank",rel:"noopener noreferrer"},I=s("Flask \u7684\u90E8\u7F72");function S(W,G){const a=l("ExternalLinkIcon");return t(),o(r,null,[u,n("p",null,[b,n("a",m,[d,e(a)])]),k,n("ul",null,[n("li",null,[n("a",h,[g,e(a)])]),n("li",null,[n("a",_,[w,e(a)])]),n("li",null,[n("a",f,[x,e(a)])]),n("li",null,[n("a",v,[y,e(a)])])]),q,n("ul",null,[n("li",null,[n("a",F,[I,e(a)])])])],64)}var N=c(i,[["render",S]]);export{N as default};
