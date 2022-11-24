import{r as e,o,c,a as n,b as t,F as l,e as a,d as s}from"./app.7d274c27.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const u={},r=a(`<h1 id="\u8D85\u65F6\u4E0E\u53D6\u6D88" tabindex="-1"><a class="header-anchor" href="#\u8D85\u65F6\u4E0E\u53D6\u6D88" aria-hidden="true">#</a> \u8D85\u65F6\u4E0E\u53D6\u6D88</h1><p>\u4ECB\u7ECD\u534F\u7A0B\u7684\u53D6\u6D88\u548C\u8D85\u65F6</p><h2 id="\u53D6\u6D88\u534F\u7A0B\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u534F\u7A0B\u6267\u884C" aria-hidden="true">#</a> \u53D6\u6D88\u534F\u7A0B\u6267\u884C</h2><p>\u4F60\u4E5F\u8BB8\u9700\u8981\u5BF9\u4E8E\u957F\u65F6\u95F4\u6267\u884C\u5E94\u7528\u540E\u53F0\u534F\u7A0B\u7684\u7EC6\u7C92\u5EA6\u63A7\u5236 \u53EF\u4EE5\u901A\u8FC7\u5BF9\u4E8E<code>launch</code>\u51FD\u6570\u8FD4\u56DE\u7684<code>Job</code>\u6765\u63A7\u5236</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">import</span> kotlinx<span class="token punctuation">.</span>coroutines<span class="token punctuation">.</span><span class="token operator">*</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> runBlocking <span class="token punctuation">{</span>

    <span class="token keyword">val</span> job <span class="token operator">=</span> launch <span class="token punctuation">{</span>
        <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">-&gt;</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500L</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token comment">// delay a bit</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: I&#39;m tired of waiting!&quot;</span></span><span class="token punctuation">)</span>
    job<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// cancels the job</span>
    job<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// waits for job&#39;s completion </span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: Now I can quit.&quot;</span></span><span class="token punctuation">)</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u53D6\u6D88\u662F\u9700\u8981\u534F\u8C03\u7684" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u662F\u9700\u8981\u534F\u8C03\u7684" aria-hidden="true">#</a> \u53D6\u6D88\u662F\u9700\u8981\u534F\u8C03\u7684</h3><p>\u534F\u7A0B\u7684\u4EE3\u7801\u5FC5\u987B<strong>\u68C0\u67E5\u534F\u7A0B\u53D6\u6D88\u72B6\u6001</strong>\u624D\u80FD\u662F\u53EF\u53D6\u6D88\u7684</p><blockquote><p>\u6240\u6709\u5728<code>kotlinx.coroutine</code>\u7684<code>suspend</code>\u51FD\u6570\u90FD\u662F\u53EF\u53D6\u6D88\u7684 \u4F1A\u68C0\u67E5\u534F\u7A0B\u53D6\u6D88\u72B6\u6001 \u53D6\u6D88\u65F6\u4F1A\u629B\u51FA<code>CancellationException</code> \u4E0A\u4F8B\u4E2D\u7684 <code>delay</code> \u51FD\u6570\u662F <code>suspend</code> \u51FD\u6570</p></blockquote><p><strong>\u4E00\u4E2A\u4E0D\u68C0\u67E5\u53D6\u6D88\u72B6\u6001\u7684\u534F\u7A0B\u662F\u4E0D\u4F1A\u88AB\u53D6\u6D88\u7684</strong></p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">import</span> kotlinx<span class="token punctuation">.</span>coroutines<span class="token punctuation">.</span><span class="token operator">*</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> runBlocking <span class="token punctuation">{</span>

    <span class="token keyword">val</span> startTime <span class="token operator">=</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">val</span> job <span class="token operator">=</span> <span class="token function">launch</span><span class="token punctuation">(</span>Dispatchers<span class="token punctuation">.</span>Default<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> nextPrintTime <span class="token operator">=</span> startTime
        <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// computation loop, just wastes CPU</span>
            <span class="token comment">// print a message twice a second</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> nextPrintTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">i<span class="token operator">++</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
                nextPrintTime <span class="token operator">+=</span> <span class="token number">500L</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token comment">// delay a bit</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: I&#39;m tired of waiting!&quot;</span></span><span class="token punctuation">)</span>
    job<span class="token punctuation">.</span><span class="token function">cancelAndJoin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// cancels the job and waits for its completion</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: Now I can quit.&quot;</span></span><span class="token punctuation">)</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u534F\u7A0B\u4F1A\u6253\u5370\u6240\u67095\u6B21\u4FE1\u606F</p><h3 id="\u8BA9\u4EE3\u7801\u53EF\u53D6\u6D88" tabindex="-1"><a class="header-anchor" href="#\u8BA9\u4EE3\u7801\u53EF\u53D6\u6D88" aria-hidden="true">#</a> \u8BA9\u4EE3\u7801\u53EF\u53D6\u6D88</h3><p>\u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u8BA9\u534F\u7A0B\u7684\u4EE3\u7801\u80FD\u591F\u88AB\u53D6\u6D88</p>`,13),k=s("\u5468\u671F\u6027\u8C03\u7528\u68C0\u67E5\u53D6\u6D88\u7684"),b=n("code",null,"suspend",-1),m=s("\u51FD\u6570(\u6BD4\u5982"),d={href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/yield.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"yield",-1),f=s(")"),h=n("li",null,"\u663E\u5F0F\u68C0\u67E5\u53D6\u6D88\u72B6\u6001",-1),y=a(`<p>\u8FD9\u91CC\u5C55\u793A\u540E\u8005 \u7528<code>while(isActive)</code> \u66FF\u6362\u4E4B\u524D\u4EE3\u7801\u7684 <code>while(i&lt;5)</code></p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> startTime <span class="token operator">=</span> System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">val</span> job <span class="token operator">=</span> <span class="token function">launch</span><span class="token punctuation">(</span>Dispatchers<span class="token punctuation">.</span>Default<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> nextPrintTime <span class="token operator">=</span> startTime
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>isActive<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// cancellable computation loop</span>
        <span class="token comment">// print a message twice a second</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>System<span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> nextPrintTime<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">i<span class="token operator">++</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
            nextPrintTime <span class="token operator">+=</span> <span class="token number">500L</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token comment">// delay a bit</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: I&#39;m tired of waiting!&quot;</span></span><span class="token punctuation">)</span>
job<span class="token punctuation">.</span><span class="token function">cancelAndJoin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// cancels the job and waits for its completion</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: Now I can quit.&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u534F\u7A0B\u4E2D\u53D6\u6D88\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u534F\u7A0B\u4E2D\u53D6\u6D88\u7684\u5904\u7406" aria-hidden="true">#</a> \u534F\u7A0B\u4E2D\u53D6\u6D88\u7684\u5904\u7406</h3><p>\u53EF\u4EE5\u5728\u534F\u7A0B\u4E2D\u6DFB\u52A0 <code>catch</code> \u548C <code>finally</code> \u5757\u6765\u5904\u7406\u53D6\u6D88\u6240\u4EA7\u751F\u7684\u5F02\u5E38</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">import</span> kotlinx<span class="token punctuation">.</span>coroutines<span class="token punctuation">.</span><span class="token operator">*</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> runBlocking <span class="token punctuation">{</span>

    <span class="token keyword">val</span> job <span class="token operator">=</span> launch <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">-&gt;</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
                <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500L</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>c<span class="token operator">:</span>CancellationException<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Catch CancellationException&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m running finally&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token comment">// delay a bit</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: I&#39;m tired of waiting!&quot;</span></span><span class="token punctuation">)</span>
    job<span class="token punctuation">.</span><span class="token function">cancelAndJoin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// cancels the job and waits for its completion</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: Now I can quit.&quot;</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote><p><code>join</code> \u548C <code>cancelAndJoin</code> \u90FD\u4F1A\u7B49\u5F85 <code>finally</code> \u5757\u7684\u6267\u884C</p></blockquote><h3 id="\u4E0D\u80FD\u53D6\u6D88\u7684\u4EE3\u7801\u5757" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u80FD\u53D6\u6D88\u7684\u4EE3\u7801\u5757" aria-hidden="true">#</a> \u4E0D\u80FD\u53D6\u6D88\u7684\u4EE3\u7801\u5757</h3><blockquote><p>\u56E0\u4E3A\u6267\u884C\u4EE3\u7801\u7684\u534F\u7A0B\u88AB\u53D6\u6D88 \u6240\u4EE5\u5728 <code>finally</code> \u5757\u4E2D\u6267\u884C <code>suspend</code> \u51FD\u6570\u4F1A\u5BFC\u81F4 <code>CancellationException</code> \u5F02\u5E38\u7684\u629B\u51FA</p></blockquote><p>\u4F7F\u7528 <code>withContext(NonCancellable){}</code> \u4EE3\u7801\u5757\u6765\u4FDD\u8BC1\u4E0D\u4F1A\u88AB\u53D6\u6D88</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> job <span class="token operator">=</span> launch <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">-&gt;</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500L</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token function">withContext</span><span class="token punctuation">(</span>NonCancellable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: I&#39;m running finally&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;job: And I&#39;ve just delayed for 1 sec because I&#39;m non-cancellable&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token comment">// delay a bit</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: I&#39;m tired of waiting!&quot;</span></span><span class="token punctuation">)</span>
job<span class="token punctuation">.</span><span class="token function">cancelAndJoin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// cancels the job and waits for its completion</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;main: Now I can quit.&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#\u8D85\u65F6" aria-hidden="true">#</a> \u8D85\u65F6</h2>`,11),w=s("\u5728\u534F\u7A0B\u57DF\u4E2D \u53EF\u4EE5\u8BBE\u7F6E\u51FD\u6570\u7684\u8D85\u65F6 "),q={href:"https://play.kotlinlang.org/editor/v1/N4Igxg9gJgpiBcICWBbADhATgFwAQGsJsAbJAOwA8A6STCAV23JgGcqAqAHTO4DN6yuFAENyACgCUuALy5MAgELEIYfOQDmuYN2649uAO5JsACwAqqGA2xiAjAGYADI4AyU7YP1fMMNDGE2ts6O7rhIuAC0AHy6XnF6aJjkJGRinCAAkgDkKLgsxDC%2BGrgAJOFUFekSsfFesMTCAJ5iAKzObjVxAL6dPTxkXSAANCDYwpjqMNgACg3YvFgoCCAAVsIAbsLD4BDoSAWYAGowmCxIEGTLtlQAbFRBIF1AA?_ga=2.71828499.1628050418.1646539220-49589855.1645533652&_gl=1*1ekifed*_ga*NDk1ODk4NTUuMTY0NTUzMzY1Mg..*_ga_J6T75801PF*MTY0Njc5ODE0Ni4yMS4wLjE2NDY3OTgxNDYuNjA.",target:"_blank",rel:"noopener noreferrer"},v=s("Kotlin Playground"),x=a(`<div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token function">withTimeout</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">-&gt;</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500L</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8D85\u65F6\u65F6\u4F1A\u629B\u51FA <code>TimeoutCancellationException</code> \u8FD9\u662F <code>CancellationException</code> \u7684\u4E00\u4E2A\u5B50\u7C7B</p><p>\u53D6\u6D88(cancellation)\u53EA\u662F\u4E00\u79CD\u5F02\u5E38 \u6240\u4EE5\u53EF\u4EE5\u7528 <code>try-catch-finally</code> \u5305\u8D77\u6765\u5904\u7406 \u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>withTimeoutOrNull</code> \u5904\u7406\u9700\u8981\u8FD4\u56DE\u503C\u7684\u60C5\u51B5</p><p>\u8BE5\u51FD\u6570\u5728\u8D85\u65F6\u65F6\u8FD4\u56DEnull\u800C\u4E0D\u629B\u51FA\u5F02\u5E38</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">val</span> result <span class="token operator">=</span> <span class="token function">withTimeoutOrNull</span><span class="token punctuation">(</span><span class="token number">1300L</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> i <span class="token operator">-&gt;</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;I&#39;m sleeping </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">i</span></span><span class="token string"> ...&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">500L</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token string-literal singleline"><span class="token string">&quot;Done&quot;</span></span> <span class="token comment">// will get cancelled before it produces this result</span>
<span class="token punctuation">}</span>
<span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Result is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">result</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5F02\u6B65\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u8D85\u65F6" aria-hidden="true">#</a> \u5F02\u6B65\u8D85\u65F6</h3><blockquote><p><code>withTimeout</code> \u4E2D\u7684\u8D85\u65F6\u4E8B\u4EF6\u76F8\u5BF9\u4E8E\u5728\u5176\u5757\u4E2D\u8FD0\u884C\u7684\u4EE3\u7801\u662F\u5F02\u6B65\u7684\uFF0C\u5E76\u4E14\u53EF\u80FD\u968F\u65F6\u53D1\u751F\uFF0C\u751A\u81F3\u5728\u4ECE\u8D85\u65F6\u5757\u5185\u90E8\u8FD4\u56DE\u4E4B\u524D</p></blockquote><p>\u6240\u4EE5\u5728\u534F\u7A0B\u4E2D\u4F7F\u7528\u8D44\u6E90\u65F6 <strong>\u5728\u6CE8\u610F\u5728finally\u5757\u4E2D\u91CA\u653E\u8D44\u6E90</strong></p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">var</span> acquired <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">class</span> Resource <span class="token punctuation">{</span>
    <span class="token keyword">init</span> <span class="token punctuation">{</span> acquired<span class="token operator">++</span> <span class="token punctuation">}</span> <span class="token comment">// Acquire the resource</span>
    <span class="token keyword">fun</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> acquired<span class="token operator">--</span> <span class="token punctuation">}</span> <span class="token comment">// Release the resource</span>
<span class="token punctuation">}</span>

<span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    runBlocking <span class="token punctuation">{</span>
        <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">100_000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Launch 100K coroutines</span>
            launch <span class="token punctuation">{</span> 
                <span class="token keyword">val</span> resource <span class="token operator">=</span> <span class="token function">withTimeout</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Timeout of 60 ms</span>
                    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// Delay for 50 ms</span>
                    <span class="token function">Resource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Acquire a resource and return it from withTimeout block     </span>
                <span class="token punctuation">}</span>
                resource<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Release the resource</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// Outside of runBlocking all coroutines have completed</span>
    <span class="token function">println</span><span class="token punctuation">(</span>acquired<span class="token punctuation">)</span> <span class="token comment">// Print the number of resources still acquired</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u4F8B\u5982\u6267\u884C\u4E0A\u8FF0\u4E00\u6BB5\u4EE3\u7801 \u6700\u540E\u4E0D\u4E00\u5B9A\u8F93\u51FA0<s>\u8DDF\u5FAA\u73AF\u591A\u52A0\u4E00\u4E24\u4E2A\u6570\u91CF\u7EA7\u7ED3\u679C\u66F4\u660E\u663E</s></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u56E0\u4E3A\u90FD\u53D1\u751F\u5728\u540C\u4E00\u4E2A\u4E3B\u7EBF\u7A0B \u6240\u4EE5100K\u4E2A\u534F\u7A0B\u5BF9\u4E8E<code>acquired</code>\u7684\u52A0\u51CF\u662F\u5B8C\u5168\u5B89\u5168\u7684</p><p>\u66F4\u591A\u7684\u5185\u5BB9\u4F1A\u5728\u4E0B\u4E00\u7AE0\u7684 <code>coroutine context</code> \u4E2D\u8BB2\u89E3</p></div><p>\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\u53EA\u9700\u8981\u628A\u4E0A\u8FF0<code>launch</code>\u4E2D\u7684\u4EE3\u7801\u4FEE\u6539\u4E3A\u8FD9\u6837</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>launch <span class="token punctuation">{</span> 
    <span class="token keyword">var</span> resource<span class="token operator">:</span> Resource<span class="token operator">?</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// Not acquired yet</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">withTimeout</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Timeout of 60 ms</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token comment">// Delay for 50 ms</span>
            resource <span class="token operator">=</span> <span class="token function">Resource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Store a resource to the variable if acquired      </span>
        <span class="token punctuation">}</span>
        <span class="token comment">// We can do something else with the resource here</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>  
        resource<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Release the resource if it was acquired</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u8F93\u51FA0\u4E86</p>`,14);function A(_,j){const p=e("ExternalLinkIcon");return o(),c(l,null,[r,n("ul",null,[n("li",null,[k,b,m,n("a",d,[g,t(p)]),f]),h]),y,n("p",null,[w,n("a",q,[v,t(p)])]),x],64)}var N=i(u,[["render",A]]);export{N as default};