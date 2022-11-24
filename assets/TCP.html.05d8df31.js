import{e as n}from"./app.7d274c27.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="quick-know-tcp" tabindex="-1"><a class="header-anchor" href="#quick-know-tcp" aria-hidden="true">#</a> Quick-Know TCP</h1><ul><li>\u5168\u53CC\u5DE5</li><li>\u70B9\u5BF9\u70B9\u8FDE\u63A5</li></ul><blockquote><p><code>MSS</code>(Maximum Segment Size) MSS=MTU-TCP_Header-IP_Header TCP payload</p><p><code>MTU</code>(Maximum Transmission Unit) \u6700\u5927\u94FE\u8DEF\u5C42\u5E27\u957F\u5EA6 data-link payload</p><p>TCP Segment=message+TCP header</p></blockquote><h2 id="\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5" aria-hidden="true">#</a> \u8FDE\u63A5</h2><h3 id="\u5EFA\u7ACB" tabindex="-1"><a class="header-anchor" href="#\u5EFA\u7ACB" aria-hidden="true">#</a> \u5EFA\u7ACB</h3><blockquote><p>\u4E09\u8DEF\u63E1\u624B</p></blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
<span class="token keyword">participant</span> c as client
<span class="token keyword">participant</span> s as server
c<span class="token arrow operator">-&gt;&gt;</span>s<span class="token operator">:</span>SYN<span class="token text string">(TCP req)</span> seq=x
<span class="token keyword">Note over</span> c<span class="token operator">:</span>SYN-SENT
s<span class="token arrow operator">-&gt;&gt;</span>c<span class="token operator">:</span>SYN ACK seq=y ack=x+1
<span class="token keyword">Note over</span> s<span class="token operator">:</span>SYN-RECV
c<span class="token arrow operator">-&gt;&gt;</span>s<span class="token operator">:</span>ACK seq=x+1 ack=y+1
<span class="token keyword">Note over</span> c<span class="token operator">:</span>ESTABLISHED
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u62C6\u9664" tabindex="-1"><a class="header-anchor" href="#\u62C6\u9664" aria-hidden="true">#</a> \u62C6\u9664</h3><blockquote><p>\u56DB\u8DEF\u6325\u624B</p></blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
<span class="token keyword">participant</span> c as client
<span class="token keyword">participant</span> s as server
c<span class="token arrow operator">-&gt;&gt;</span>s<span class="token operator">:</span>FIN ACK
<span class="token keyword">Note over</span> c<span class="token operator">:</span>FIN-WAIT-1
s<span class="token arrow operator">-&gt;&gt;</span>c<span class="token operator">:</span>ACK
<span class="token keyword">Note over</span> c<span class="token operator">:</span>FIN-WAIT-2
s<span class="token arrow operator">-&gt;&gt;</span>c<span class="token operator">:</span>FIN ACK
<span class="token keyword">Note over</span> s<span class="token operator">:</span>CLOSE-FIN
c<span class="token arrow operator">-&gt;&gt;</span>s<span class="token operator">:</span>ACK
<span class="token keyword">Note over</span> s<span class="token operator">:</span>LAST-ACK
<span class="token keyword">Note over</span> c<span class="token operator">:</span>wait 2MSL
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u91CF\u63A7\u5236</h2><blockquote><p>\u7EF4\u62A4\u63A5\u6536\u7A97\u53E3 \u6D88\u9664\u53D1\u9001\u65B9\u4F7F<strong>\u63A5\u6536\u65B9\u7F13\u5B58\u6EA2\u51FA</strong>\u7684\u53EF\u80FD\u6027</p></blockquote><div class="custom-container tip"><p class="custom-container-title">TCP ZeroWindow Probe</p><p>\u5F53\u63A5\u6536\u65B9\u7F13\u5B58\u6EE1\u65F6 \u56DE\u590D <code>Window Full</code> ACK \u4E4B\u540E\u53D1\u9001\u65B9\u4F1A\u95F4\u65AD\u53D1\u9001 Len\u4E3A0\u7684 <code>Keep-Alive</code> \u63A5\u6536\u65B9\u4F1A\u56DE\u590D <code>ZeroWindow</code></p></div><h2 id="\u62E5\u585E\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u62E5\u585E\u63A7\u5236" aria-hidden="true">#</a> \u62E5\u585E\u63A7\u5236</h2><blockquote><p>\u7EF4\u62A4\u62E5\u585E\u7A97\u53E3(\u53D1\u9001\u7A97\u53E3) \u9632\u6B62\u7F51\u7EDC\u62E5\u585E</p></blockquote><p>\u7F51\u7EDC\u62E5\u585E\u4FE1\u53F7</p><ul><li>\u8D85\u65F6</li><li>3\u4E2A\u5197\u4F59ACK</li></ul><p><s>\u4E3A\u4EC0\u4E48\u4E0D\u662F\u4E24\u4E2A\u5197\u4F59ACK? \u4E24\u4E2A\u5927\u6982\u7387\u662F\u4E71\u5E8F \u4E09\u4E2A\u66F4\u53EF\u80FD\u662F\u4E22\u5305</s></p><h2 id="\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B" aria-hidden="true">#</a> \u7F16\u7A0B</h2><p>\u670D\u52A1\u7AEF\u4EE3\u7801</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;netinet/in.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">worker</span><span class="token punctuation">(</span><span class="token keyword">int</span> client<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u5411\u5BA2\u6237\u7AEF\u53D1\u9001\u6570\u636E</span>
  <span class="token keyword">char</span> str<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">;</span>
  <span class="token function">write</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5173\u95ED\u5957\u63A5\u5B57</span>
  <span class="token function">close</span><span class="token punctuation">(</span>client<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> serv_sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// tcp server socket</span>

  <span class="token comment">// \u5C06\u5957\u63A5\u5B57\u548CIP\u3001\u7AEF\u53E3\u7ED1\u5B9A</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_addr<span class="token punctuation">;</span>
  <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u6BCF\u4E2A\u5B57\u8282\u90FD\u75280\u586B\u5145</span>
  serv_addr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>            <span class="token comment">// \u4F7F\u7528IPv4\u5730\u5740</span>
  serv_addr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">inet_addr</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u5177\u4F53\u7684IP\u5730\u5740</span>
  serv_addr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">// \u7AEF\u53E3</span>
  <span class="token function">bind</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8FDB\u5165\u76D1\u542C\u72B6\u6001\uFF0C\u7B49\u5F85\u7528\u6237\u53D1\u8D77\u8BF7\u6C42</span>
  <span class="token function">listen</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u63A5\u6536\u5BA2\u6237\u7AEF\u8BF7\u6C42</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> clnt_addr<span class="token punctuation">;</span>
  <span class="token class-name">socklen_t</span> clnt_addr_size <span class="token operator">=</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>clnt_addr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> clnt_sock <span class="token operator">=</span>
      <span class="token function">accept</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>clnt_addr<span class="token punctuation">,</span> <span class="token operator">&amp;</span>clnt_addr_size<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">worker</span><span class="token punctuation">(</span>clnt_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5173\u95ED\u5957\u63A5\u5B57</span>
  <span class="token function">close</span><span class="token punctuation">(</span>serv_sock<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u521B\u5EFA\u5957\u63A5\u5B57</span>
  <span class="token function">serve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u5BA2\u6237\u7AEF\u4EE3\u7801</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;arpa/inet.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;sys/socket.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;unistd.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token keyword">int</span> port <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">;</span>
  <span class="token comment">//\u521B\u5EFA\u5957\u63A5\u5B57</span>
  <span class="token keyword">int</span> sock <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>AF_INET<span class="token punctuation">,</span> SOCK_STREAM<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u5411\u670D\u52A1\u5668\uFF08\u7279\u5B9A\u7684IP\u548C\u7AEF\u53E3\uFF09\u53D1\u8D77\u8BF7\u6C42</span>
  <span class="token keyword">struct</span> <span class="token class-name">sockaddr_in</span> serv_addr<span class="token punctuation">;</span>
  <span class="token function">memset</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u6BCF\u4E2A\u5B57\u8282\u90FD\u75280\u586B\u5145</span>
  serv_addr<span class="token punctuation">.</span>sin_family <span class="token operator">=</span> AF_INET<span class="token punctuation">;</span>            <span class="token comment">//\u4F7F\u7528IPv4\u5730\u5740</span>
  serv_addr<span class="token punctuation">.</span>sin_addr<span class="token punctuation">.</span>s_addr <span class="token operator">=</span> <span class="token function">inet_addr</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5177\u4F53\u7684IP\u5730\u5740</span>
  serv_addr<span class="token punctuation">.</span>sin_port <span class="token operator">=</span> <span class="token function">htons</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">//\u7AEF\u53E3</span>
  <span class="token function">connect</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">sockaddr</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>serv_addr<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>serv_addr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u8BFB\u53D6\u670D\u52A1\u5668\u4F20\u56DE\u7684\u6570\u636E</span>
  <span class="token keyword">char</span> buffer<span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token function">read</span><span class="token punctuation">(</span>sock<span class="token punctuation">,</span> buffer<span class="token punctuation">,</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Message form server: %s\\n&quot;</span><span class="token punctuation">,</span> buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//\u5173\u95ED\u5957\u63A5\u5B57</span>
  <span class="token function">close</span><span class="token punctuation">(</span>sock<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>Makefile</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go:client server
	./server&amp;
	./client
client:client.c
server:server.c
clean:
	rm client server
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,25);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
