<template>
<div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; &#39;hsl(328, 50%, 50%)&#39;</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;70%&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; &#39;hsl(24, 70%, 70%)&#39;</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;5%&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;46%&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; &#39;hsl(17, 5%, 46%)&#39;</span>
</pre></div>
<hr style="border: none;height: 1px;margin: 0;background-color: #666;">
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #e6db74">&lt;div :style=&quot;{backgroundColor:randomColorData,width:&#39;100px&#39;,height:&#39;100px&#39;, display:&#39;inline-block&#39;,verticalAlign:&#39;bottom&#39;}&quot;&gt;&lt;/div&gt;</span>
<span style="color: #e6db74">&lt;button @click=&quot;randomColorFunc&quot;&gt;随机颜色&lt;/button&gt;</span>

<span style="color: #66d9ef">export</span> <span style="color: #66d9ef">default</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">data</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #66d9ef">return</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #a6e22e">randomColorData</span> <span style="color: #f92672">:</span> <span style="color: #e6db74">&#39;#ccc&#39;</span><span style="color: #f8f8f2">,</span>
        <span style="color: #f8f8f2">};</span>
    <span style="color: #f8f8f2">},</span>
    <span style="color: #a6e22e">methods</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span>
        <span style="color: #a6e22e">randomColorFunc</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span>
            <span style="color: #66d9ef">this</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColorData</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">();</span>
        <span style="color: #f8f8f2">},</span>
    <span style="color: #f8f8f2">},</span>
<span style="color: #f8f8f2">};</span>
</pre></div>
</div>
</template>