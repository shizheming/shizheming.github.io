<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #75715e">/*</span>
<span style="color: #75715e">function (value) {</span>
<span style="color: #75715e">    value =&gt; 运行函数传进来的值</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #75715e">// ajax请求</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">ajax2</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">};</span>
<span style="color: #75715e">// 统计代码-统计ajax请求次数</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">ga2</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">decorate</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">ajax2</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">ga2</span><span style="color: #f8f8f2">);</span>
<span style="color: #a6e22e">b</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;baidu.com&#39;</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; &#39;baidu.com&#39;</span>
<span style="color: #75715e">// =&gt; &#39;baidu.com&#39;</span>

<span style="color: #75715e">// ajax请求</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">ajax3</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">};</span>
<span style="color: #75715e">// 统计代码-统计ajax请求次数</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">ga3</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">digit</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">digit</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">c</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">decorate</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">ajax3</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">ga3</span><span style="color: #f8f8f2">);</span>
<span style="color: #a6e22e">c</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;baidu.com&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; &#39;baidu.com&#39;</span>
<span style="color: #75715e">// =&gt; 1</span>

<span style="color: #75715e">// ajax请求</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">ajax4</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">url</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">};</span>
<span style="color: #75715e">// 统计代码-统计ajax请求次数</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">ga4</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">digit</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">digit</span><span style="color: #f8f8f2">);</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">digit</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">d</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">decorate</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">ajax4</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">ga4</span><span style="color: #f8f8f2">);</span>
<span style="color: #a6e22e">d</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">call</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">url</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;sina.com&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">digit</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;baidu.com&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; &#39;baidu.com&#39;</span>
<span style="color: #75715e">// =&gt; &#39;sina.com&#39;</span>
<span style="color: #75715e">// =&gt; 1</span>
<span style="color: #75715e">// =&gt; 2</span>
</pre></div>
</template>