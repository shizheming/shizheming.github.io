<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">filterFalse</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">false</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">undefined</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">NaN</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">null</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;&#39;</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; [1]</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">filterFalse</span><span style="color: #f8f8f2">({</span>
    <span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">0</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #66d9ef">false</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">d</span> <span style="color: #f92672">:</span> <span style="color: #66d9ef">undefined</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">e</span> <span style="color: #f92672">:</span> <span style="color: #66d9ef">NaN</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">f</span> <span style="color: #f92672">:</span> <span style="color: #66d9ef">null</span><span style="color: #f8f8f2">,</span>
    <span style="color: #a6e22e">g</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;&#39;</span>
<span style="color: #f8f8f2">});</span>
<span style="color: #75715e">/*</span>
<span style="color: #75715e">=&gt; {</span>
<span style="color: #75715e">    b : 1</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>