<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #75715e">/*</span>
<span style="color: #75715e">function (currentValue, key, collection) {</span>
<span style="color: #75715e">    currentValue =&gt; 当前值</span>
<span style="color: #75715e">    key =&gt; 当前键</span>
<span style="color: #75715e">    collection =&gt; 正在迭代的集合</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">forEach</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">],</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">index</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">array</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">array</span><span style="color: #f8f8f2">[</span><span style="color: #a6e22e">index</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">currentValue</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">// =&gt; [2, 3]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">forEach</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">key</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">object</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">object</span><span style="color: #f8f8f2">[</span><span style="color: #a6e22e">key</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">currentValue</span> <span style="color: #f92672">+</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; {</span>
<span style="color: #75715e">    c : 2,</span>
<span style="color: #75715e">    d : 3</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>