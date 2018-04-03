<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #75715e">/*</span>
<span style="color: #75715e">function (value) {</span>
<span style="color: #75715e">    value =&gt; 运行函数传进来的值</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">c</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">before</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f92672">--</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #a6e22e">c</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 0</span>
<span style="color: #a6e22e">c</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; -1</span>
<span style="color: #a6e22e">c</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; -1</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">d</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">before</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">return</span> <span style="color: #f92672">--</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">+</span> <span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #a6e22e">d</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">call</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 1</span>
<span style="color: #a6e22e">d</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">call</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 3</span>
<span style="color: #a6e22e">d</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">call</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 3</span>
</pre></div>
</template>