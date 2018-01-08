<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #66d9ef">var</span> <span style="color: #a6e22e">object</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneObject</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">object</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; {a : 1}</span>
<span style="color: #a6e22e">object</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneObject</span>
<span style="color: #75715e">// =&gt; false</span>


<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">array</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">];</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneArray</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">array</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [1]</span>
<span style="color: #a6e22e">array</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneArray</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
</template>