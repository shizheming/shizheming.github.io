<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #75715e">/*</span>
<span style="color: #75715e">function (currentValue, key, collection, level) {</span>
<span style="color: #75715e">    currentValue =&gt; 当前值</span>
<span style="color: #75715e">    key =&gt; 当前键</span>
<span style="color: #75715e">    collection =&gt; 正在迭代的集合</span>
<span style="color: #75715e">    level =&gt; 当前层数</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">([[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">]],</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[&#39;b&#39;]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; [{</span>
<span style="color: #75715e">    d : 2</span>
<span style="color: #75715e">}]</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">// =&gt; [[&#39;a&#39;, &#39;b&#39;]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;d&#39;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; [{</span>
<span style="color: #75715e">    d : 2</span>
<span style="color: #75715e">}]</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">value</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;b&#39;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">// =&gt; [[&#39;a&#39;, &#39;b&#39;]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
    <span style="color: #f8f8f2">},</span> 
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;d&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">value</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; [{</span>
<span style="color: #75715e">    d : 2</span>
<span style="color: #75715e">}]</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">([[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">]],</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">value</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">return</span> <span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">];</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">// =&gt; [[2, 3]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span>
        <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">},</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">value</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">return</span> <span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">d</span><span style="color: #f8f8f2">;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; [{</span>
<span style="color: #75715e">    b : 2,</span>
<span style="color: #75715e">    d : 1</span>
<span style="color: #75715e">}]</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">([[[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">]],</span> <span style="color: #f8f8f2">[[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">]]],</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">value</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">return</span> <span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">];</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[2, 3]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">findCollection</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
        <span style="color: #f8f8f2">},</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">e</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
            <span style="color: #a6e22e">f</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
        <span style="color: #f8f8f2">},</span>
    <span style="color: #f8f8f2">},</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">key</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;c&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">value</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #66d9ef">return</span> <span style="color: #a6e22e">currentValue</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">f</span><span style="color: #f8f8f2">;</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; [{</span>
<span style="color: #75715e">    c : 1,</span>
<span style="color: #75715e">    f : 2</span>
<span style="color: #75715e">}]</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>