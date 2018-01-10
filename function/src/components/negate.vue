<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isString</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;1&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isString</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">isNoString</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">reversePredicate</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isString</span><span style="color: #f8f8f2">);</span>
<span style="color: #a6e22e">isNoString</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;1&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>
<span style="color: #a6e22e">isNoString</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
</pre></div>
</template>