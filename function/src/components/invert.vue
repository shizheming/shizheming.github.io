<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">invert</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    a : &#39;0&#39;,</span>
<span style="color: #75715e">    b : &#39;1&#39;</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">invert</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    1 : &#39;a&#39;,</span>
<span style="color: #75715e">    2 : &#39;b&#39;</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">invert</span><span style="color: #f8f8f2">([</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{</span>
<span style="color: #75715e">    1 : &#39;b&#39;,</span>
<span style="color: #75715e">    a : &#39;0&#39;</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">invert</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span>
<span style="color: #f8f8f2">},</span> <span style="color: #f8f8f2">[</span><span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">{ </span>
<span style="color: #75715e">    1 : &#39;a&#39;,</span>
<span style="color: #75715e">    b : 2</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>