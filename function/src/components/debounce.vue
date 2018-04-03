<template>
<div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #75715e">/*</span>
<span style="color: #75715e">function (value) {</span>
<span style="color: #75715e">    value =&gt; 运行函数传进来的值</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounce</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">2000</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">document.</span><span style="color: #a6e22e">body</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">onclick</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">a</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>
<span style="color: #75715e">// =&gt; 2秒内只打印1一次</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounce</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">console</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">log</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">+</span> <span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">2000</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">document.</span><span style="color: #a6e22e">body</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">onclick</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">call</span><span style="color: #f8f8f2">({</span>
        <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">}</span>
<span style="color: #75715e">// =&gt; 2秒内只打印2一次</span>
</pre></div>
<hr>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #e6db74">&lt;div&gt;</span>
<span style="color: #e6db74">    &lt;span&gt;{debounceData}&lt;/span&gt;</span>
<span style="color: #e6db74">    &lt;button @click=&quot;dbf&quot;&gt;+1&lt;/button&gt;</span>
<span style="color: #e6db74">&lt;/div&gt;</span>

<span style="color: #66d9ef">export</span> <span style="color: #66d9ef">default</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">data</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #a6e22e">debounceData</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">10</span><span style="color: #f8f8f2">,</span>
        <span style="color: #f8f8f2">};</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">mounted</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounce</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounce</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounceFunc</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">1000</span><span style="color: #f8f8f2">);</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">methods</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">debounceFunc</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounceData</span> <span style="color: #f92672">+=</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">;</span>
        <span style="color: #f8f8f2">},</span>
        <span style="color: #a6e22e">dbf</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">debounce</span><span style="color: #f8f8f2">();</span>
        <span style="color: #f8f8f2">},</span>
    <span style="color: #f8f8f2">},</span>
<span style="color: #f8f8f2">};</span>
</pre></div>
</div>
</template>