<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]]);</span>
<span style="color: #75715e">// =&gt; [0, 1, _0 : &#39;a&#39;]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 0,</span>
<span style="color: #75715e">    b : 1,</span>
<span style="color: #75715e">    _a : 1</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]],</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [0, 1, @0 : &#39;a&#39;]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]</span>
<span style="color: #f8f8f2">},</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 0,</span>
<span style="color: #75715e">    b : 1,</span>
<span style="color: #75715e">    @a: 1</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">([[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]],</span> <span style="color: #f8f8f2">[{</span>
    <span style="color: #ae81ff">1</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]</span>
<span style="color: #f8f8f2">}],</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[1, 0, @1 : &#39;a&#39;]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;c&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #e6db74">&#39;@&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a: {</span>
<span style="color: #75715e">        b : &#39;c&#39;,</span>
<span style="color: #75715e">        d : 1,</span>
<span style="color: #75715e">        @b : 2</span>
<span style="color: #75715e">    }</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">([[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]],</span> <span style="color: #f8f8f2">[[</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]],</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [&#39;a&#39;, 1]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">mappingValue</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;c&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a: {</span>
<span style="color: #75715e">        b : 2,</span>
<span style="color: #75715e">        d : 1</span>
<span style="color: #75715e">    }</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>