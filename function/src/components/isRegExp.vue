<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isRegExp</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">RegExp(</span><span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">))</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isRegExp</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">/a/</span><span style="color: #f8f8f2">)</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isRegExp</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;/a/&#39;</span><span style="color: #f8f8f2">)</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
</template>