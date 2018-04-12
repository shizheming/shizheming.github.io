<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toNumber</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;0&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; [0, &#39;a&#39;]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toNumber</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;0&#39;</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;c&#39;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 0,</span>
<span style="color: #75715e">    b : &#39;c&#39;</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toNumber</span><span style="color: #f8f8f2">([[</span><span style="color: #e6db74">&#39;0&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">]],</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[0, &#39;a&#39;]]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">toNumber</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;0&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;d&#39;</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
        <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;d&#39;</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">}</span>
</pre></div>
</template>