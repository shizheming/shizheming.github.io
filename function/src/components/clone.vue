<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #66d9ef">var</span> <span style="color: #a6e22e">array1</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">];</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneArray1</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">array1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [1]</span>
<span style="color: #a6e22e">array1</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneArray1</span>
<span style="color: #75715e">// =&gt; false</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">array2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]];</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneArray2</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">array2</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[1]]</span>
<span style="color: #a6e22e">cloneArray2</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">].</span><span style="color: #a6e22e">push</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; cloneArray2[0] = [1, 2]</span>
<span style="color: #75715e">// =&gt; array2[0] = [1, 2]</span>
<span style="color: #a6e22e">array2</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneArray2</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span>
<span style="color: #75715e">// =&gt; true</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">array3</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">]];</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneArray3</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">array3</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [[1]]</span>
<span style="color: #a6e22e">cloneArray3</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">].</span><span style="color: #a6e22e">push</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">2</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; cloneArray3[0] = [1, 2]</span>
<span style="color: #75715e">// =&gt; array3[0] = [1]</span>
<span style="color: #a6e22e">array3</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneArray3</span><span style="color: #f8f8f2">[</span><span style="color: #ae81ff">0</span><span style="color: #f8f8f2">]</span>
<span style="color: #75715e">// =&gt; false</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">object1</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneObject1</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">object1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; {a : 1}</span>
<span style="color: #a6e22e">object1</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneObject1</span>
<span style="color: #75715e">// =&gt; false</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">object2</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">}};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneObject2</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">object2</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; {a : {a : 1}}</span>
<span style="color: #a6e22e">cloneObject2</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">;</span>
<span style="color: #75715e">// =&gt; cloneObject2.a = {a : 1, b : 2}</span>
<span style="color: #75715e">// =&gt; object2.a = {a : 1, b : 2}</span>
<span style="color: #a6e22e">object2</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneObject2</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span>
<span style="color: #75715e">// =&gt; true</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">object3</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">}};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneObject3</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">object3</span><span style="color: #f8f8f2">,</span> <span style="color: #66d9ef">true</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; {a : {a : 1}}</span>
<span style="color: #a6e22e">cloneObject3</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">;</span>
<span style="color: #75715e">// =&gt; cloneObject3.a = {a : 1, b : 2}</span>
<span style="color: #75715e">// =&gt; object3.a = {a : 1, b : 2}</span>
<span style="color: #a6e22e">object3</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneObject3</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">a</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
</template>