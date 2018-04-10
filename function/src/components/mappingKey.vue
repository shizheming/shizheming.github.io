<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; [1, 0, _2 : 1]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;b&#39;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 0,</span>
<span style="color: #75715e">    c : 1,</span>
<span style="color: #75715e">    _b : 0</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [1, 2, @a : 1]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;b&#39;</span>
<span style="color: #f8f8f2">},</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 0,</span>
<span style="color: #75715e">    c : 1,</span>
<span style="color: #75715e">    @b : 0</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">([[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]],</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #ae81ff">1</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]</span>
<span style="color: #f8f8f2">},</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[1, 0, @a: 0]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;c&#39;</span>
        <span style="color: #a6e22e">e</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;d&#39;</span>
<span style="color: #f8f8f2">},</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a: {</span>
<span style="color: #75715e">        b : &#39;c&#39;,</span>
<span style="color: #75715e">        e : 1,</span>
<span style="color: #75715e">        @d : &#39;c&#39;</span>
<span style="color: #75715e">    }</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">([[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">]],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">],</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [ , , [ , 2, 1]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingKey</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;c&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #a6e22e">e</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;d&#39;</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a: {</span>
<span style="color: #75715e">        d : &#39;c&#39;,</span>
<span style="color: #75715e">        e : 1</span>
<span style="color: #75715e">    }</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>