<template>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #75715e">// 创建链表</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">link</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">link</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">/* =&gt; {</span>
<span style="color: #75715e">    add : ƒunc,</span>
<span style="color: #75715e">    delete : ƒunc,</span>
<span style="color: #75715e">    display : ƒunc, </span>
<span style="color: #75715e">    find : ƒunc,</span>
<span style="color: #75715e">    replace : ƒunc,</span>
<span style="color: #75715e">    head : {...},</span>
<span style="color: #75715e">    tail : {...},</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>

<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">a</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span><span style="color: #66d9ef">return</span> <span style="color: #e6db74">&#39;a&#39;</span><span style="color: #f8f8f2">;};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span><span style="color: #66d9ef">return</span> <span style="color: #e6db74">&#39;b&#39;</span><span style="color: #f8f8f2">;};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">c</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span><span style="color: #66d9ef">return</span> <span style="color: #e6db74">&#39;c&#39;</span><span style="color: #f8f8f2">;};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">d</span> <span style="color: #f92672">=</span> <span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{</span><span style="color: #66d9ef">return</span> <span style="color: #e6db74">&#39;d&#39;</span><span style="color: #f8f8f2">;};</span>

<span style="color: #75715e">// 1. 查看链表元素</span>
<span style="color: #75715e">// 一个只读数组列表，操作这个数组对链表没有意义，只是方便用户查看里面的元素</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">display</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// 空链表的时候只有头尾两个字符串</span>
<span style="color: #75715e">// =&gt; [&#39;tail&#39;, &#39;head&#39;]</span>

<span style="color: #75715e">// 2. 添加链表</span>
<span style="color: #75715e">// 添加至末尾</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 1</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 2</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">display</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; [function () {return &#39;a&#39;;}, function () {return &#39;b&#39;;}]</span>
<span style="color: #75715e">// 添加指定的位置</span>
<span style="color: #75715e">// 插到a的后面</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">add</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">c</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 3</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">display</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; [function () {return &#39;a&#39;;}, function () {return &#39;c&#39;;}, function () {return &#39;b&#39;;}]</span>

<span style="color: #75715e">// 3. 替换链表元素</span>
<span style="color: #75715e">// 把a替换成d</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">replace</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">d</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/* =&gt; {</span>
<span style="color: #75715e">    element : d,</span>
<span style="color: #75715e">    next : {...},</span>
<span style="color: #75715e">    previous : {...},</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">display</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; [function () {return &#39;d&#39;;}, function () {return &#39;c&#39;;}, function () {return &#39;b&#39;;}]</span>

<span style="color: #75715e">// 4. 删除链表元素</span>
<span style="color: #75715e">// 删除b</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #66d9ef">delete</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">b</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/* =&gt; {</span>
<span style="color: #75715e">    element : b,</span>
<span style="color: #75715e">    next : {...},</span>
<span style="color: #75715e">    previous : {...},</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">display</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; [function () {return 4;}, function () {return 3;}]</span>

<span style="color: #75715e">// 5. 寻找链表元素</span>
<span style="color: #75715e">// 寻找c</span>
<span style="color: #a6e22e">link</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">find</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">c</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">/* =&gt; {</span>
<span style="color: #75715e">    element : c,</span>
<span style="color: #75715e">    next : {...},</span>
<span style="color: #75715e">    previous : {...},</span>
<span style="color: #75715e">}</span>
<span style="color: #75715e">*/</span>
</pre></div>
</template>