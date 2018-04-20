<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">assign</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">4</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">5</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; [3, 4, 5]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">assign</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">4</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 1,</span>
<span style="color: #75715e">    b : 3,</span>
<span style="color: #75715e">    c : 4</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">assign</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
    <span style="color: #f8f8f2">}</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">e</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">3</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">f</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">4</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : 1,</span>
<span style="color: #75715e">    b : {</span>
<span style="color: #75715e">        c : 2,</span>
<span style="color: #75715e">        e : 3</span>
<span style="color: #75715e">    },</span>
<span style="color: #75715e">    f : 4</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>