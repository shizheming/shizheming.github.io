<template>
	<div class="ssss">
		<div class="name">tobe</div>
		<sidebar></sidebar>
		<div class="content">
			<div id="clone">
				<h4>_.clone(obj)</h4>
				<div class="describe">
					<p>复制对象（浅复制）</p>
					<h5>参数</h5>
					<div>obj<em>（Array || Object）</em>：需要复制的对象</div>
					<h5>返回值</h5>
					<div><em>（Array || Object）</em>：返回复制出的新对象</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #66d9ef">var</span> <span style="color: #a6e22e">obj</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">{</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">};</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneObj</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">obj</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; {a : 1}</span>
<span style="color: #a6e22e">obj</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneObj</span>
<span style="color: #75715e">// =&gt; false</span>


<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">arr</span> <span style="color: #f92672">=</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">4</span><span style="color: #f8f8f2">];</span>
<span style="color: #66d9ef">var</span> <span style="color: #a6e22e">cloneArr</span> <span style="color: #f92672">=</span> <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">clone</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">arr</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; [1, 2, 3, 4]</span>
<span style="color: #a6e22e">arr</span> <span style="color: #f92672">===</span> <span style="color: #a6e22e">cloneArr</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
			<div id="randomNumber">
				<h4>_.randomNumber([digit = 1], [digit2])</h4>
				<div class="describe">
					<p>随机数字</p>
					<h5>参数</h5>
					<div>1. [digit = 1]<em>（Number）</em>：需要随机一串数的位数</div>
					<div>2. [digit = 1], [digit2]<em>（Number）</em>：需要开始的数和结束的数</div>
					<h5>返回值</h5>
					<div>1. <em>（Number）</em>：返回参数位数的一串随机数</div>
					<div>2. <em>（Number）</em>：返回两个值之间的随机数</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomNumber</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; 4</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomNumber</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">3</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 534</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomNumber</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">4</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">78</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; 65</span>
</pre></div>
			</div>
			<div id="randomAlphabet">
				<h4>_.randomAlphabet([digit = 1])</h4>
				<div class="describe">
					<p>随机大小写字母</p>
					<h5>参数</h5>
					<div>[digit = 1]<em>（Number）</em>：需要随机一串字母的位数</div>
					<h5>返回值</h5>
					<div><em>（String）</em>：返回参数位数的一串随机字母</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomAlphabet</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; &#39;K&#39;</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomAlphabet</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">12</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; &#39;hojnMnIAwuhY&#39;</span>
</pre></div>
			</div>
			<div id="randomNumberAlphabet">
				<h4>_.randomNumberAlphabet([digit = 10])</h4>
				<div class="describe">
					<p>随机一串大小写字母数字</p>
					<h5>参数</h5>
					<div>[digit = 10]<em>（Number）</em>：需要随机一串的位数</div>
					<h5>返回值</h5>
					<div><em>（String）</em>：返回参数位数的一串随机大小写字母数字</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomNumberAlphabet</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; &#39;5568V06785&#39;</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomNumberAlphabet</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">20</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; &#39;i2ccegHV2NTboJwbWrnS&#39;</span>
</pre></div>
			</div>
			<div id="randomColor">
				<h4>_.randomColor([saturation = '50%'], [light = saturation])</h4>
				<div class="describe">
					<p>随机颜色</p>
					<h5>参数</h5>
					<div>1. [saturation = '50%']<em>（String）</em>：设置纯度的值</div>
					<div>2. [light = saturation]<em>（String）</em>：设置明度的值</div>
					<h5>返回值</h5>
					<div><em>（String）</em>：返回一串HSL</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">();</span>
<span style="color: #75715e">// =&gt; &#39;hsl(328, 50%, 50%)&#39;</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;70%&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; &#39;hsl(24, 70%, 70%)&#39;</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">randomColor</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;5%&#39;</span><span style="color: #f8f8f2">,</span> <span style="color: #e6db74">&#39;46%&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; &#39;hsl(17, 5%, 46%)&#39;</span>
</pre></div>
				<div style="background-color:hsl(328, 50%, 50%);width:100px;height:100px;display:inline-block;"></div><div style="background-color:hsl(24, 70%, 70%);width:100px;height:100px;display:inline-block;"></div><div style="background-color:hsl(17, 5%, 46%);width:100px;height:100px;display:inline-block;"></div>
			</div>
			<div id="isNaN">
				<h4>_.isNaN(n)</h4>
				<div class="describe">
					<p>判断一个值是不是NaN</p>
					<h5>参数</h5>
					<div>n<em>（all data type）</em>：需要判断的值</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.isNaN(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.isNaN(</span><span style="color: #66d9ef">NaN</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
</pre></div>
			</div>
			<div id="isNumber">
				<h4>_.isNumber(n)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>n<em>（all data type）</em>：需要判断的值</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isNumber</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">564</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isNumber</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;66&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
			<div id="isInteger">
				<h4>_.isInteger(num)</h4>
				<div class="describe">
					<p>判断一个数是不是整数</p>
					<h5>参数</h5>
					<div>num<em>（Number）</em>：需要判断的数</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isInteger</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">8</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isInteger</span><span style="color: #f8f8f2">(</span><span style="color: #f92672">-</span><span style="color: #ae81ff">8</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isInteger</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">8.1</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
			<div id="isPast">
				<h4>_.isPast(time)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>time<em>（Number）</em>：需要时间戳</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isPast</span><span style="color: #f8f8f2">((</span><span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">Date(</span><span style="color: #ae81ff">2011</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">11</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">12</span><span style="color: #f8f8f2">)).</span><span style="color: #a6e22e">getTime</span><span style="color: #f8f8f2">());</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isPast</span><span style="color: #f8f8f2">((</span><span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">Date(</span><span style="color: #ae81ff">2991</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">5</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">20</span><span style="color: #f8f8f2">)).</span><span style="color: #a6e22e">getTime</span><span style="color: #f8f8f2">());</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
			<div id="isFuture">
				<h4>_.isFuture(time)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>time<em>（Number）</em>：需要时间戳</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isFuture</span><span style="color: #f8f8f2">((</span><span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">Date(</span><span style="color: #ae81ff">2011</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">11</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">12</span><span style="color: #f8f8f2">)).</span><span style="color: #a6e22e">getTime</span><span style="color: #f8f8f2">());</span>
<span style="color: #75715e">// =&gt; false</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isFuture</span><span style="color: #f8f8f2">((</span><span style="color: #66d9ef">new</span> <span style="color: #f8f8f2">Date(</span><span style="color: #ae81ff">2991</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">5</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">20</span><span style="color: #f8f8f2">)).</span><span style="color: #a6e22e">getTime</span><span style="color: #f8f8f2">());</span>
<span style="color: #75715e">// =&gt; true</span>
</pre></div>
			</div>
			<div id="isArguments">
				<h4>_.isArguments(n)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>n<em>（all data type）</em>：需要判断的值</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">)</span> <span style="color: #f8f8f2">{</span>
    <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isArguments</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">arguments</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">// =&gt; true</span>
    <span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isArguments</span><span style="color: #f8f8f2">(</span><span style="color: #a6e22e">a</span><span style="color: #f8f8f2">);</span>
    <span style="color: #75715e">// =&gt; false</span>
<span style="color: #f8f8f2">})(</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">);</span>
</pre></div>
			</div>
			<div id="isFunction">
				<h4>_.isFunction(n)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>n<em>（all data type）</em>：需要判断的值</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isFunction</span><span style="color: #f8f8f2">(</span><span style="color: #66d9ef">function</span> <span style="color: #f8f8f2">()</span> <span style="color: #f8f8f2">{});</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isFunction</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;abc&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
			<div id="isString">
				<h4>_.isString(n)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>n<em>（all data type）</em>：需要判断的值</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isString</span><span style="color: #f8f8f2">(</span><span style="color: #e6db74">&#39;abc&#39;</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isString</span><span style="color: #f8f8f2">(</span><span style="color: #ae81ff">12</span><span style="color: #f8f8f2">);</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
			<div id="isEqual">
				<h4>_.isEqual(obj1, obj2)</h4>
				<div class="describe">
					<h5>参数</h5>
					<div>obj1<em>（Object || Array）</em>：需要对比的第一个值</div>
					<div>obj2<em>（Object || Array）</em>：需要对比的第二个值</div>
					<h5>返回值</h5>
					<div><em>（Boolean）</em>：返回布尔值</div>
				</div>
<div class="highlight" style="background: #272822"><pre style="line-height: 125%"><span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isEqual</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isEqual</span><span style="color: #f8f8f2">([</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">],</span> <span style="color: #f8f8f2">[</span><span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">,</span> <span style="color: #ae81ff">4</span><span style="color: #f8f8f2">]);</span>
<span style="color: #75715e">// =&gt; false</span>

<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isEqual</span><span style="color: #f8f8f2">({</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">}, {</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">});</span>
<span style="color: #75715e">// =&gt; true</span>
<span style="color: #a6e22e">_</span><span style="color: #f8f8f2">.</span><span style="color: #a6e22e">isEqual</span><span style="color: #f8f8f2">({</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">}, {</span><span style="color: #a6e22e">a</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">1</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">b</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">2</span><span style="color: #f8f8f2">,</span> <span style="color: #a6e22e">c</span> <span style="color: #f92672">:</span> <span style="color: #ae81ff">3</span><span style="color: #f8f8f2">});</span>
<span style="color: #75715e">// =&gt; false</span>
</pre></div>
			</div>
		</div>
	</div>
</template>

<script>
import sidebar from './sidebar.vue';
import _ from '../js/ecma'; 

export default {
	name: 'fn',
	data () {
		return {
			fnName : [],
		}
	},
	mounted () {
		// this.getName();
	},
	components : {
		sidebar
	},
	methods : {
		getName () {
			var that = this;
			Object.keys(_).forEach((item, index, arr) => {
				that.fnName.push(item);
			});
		}
	}
}
</script>


<style>
.name{
	font-size:30px;
	position:fixed;
	width:100%;
	top:0;
	height:60px;
	line-height:60px;
}
.ssss{
	font-family:'Microsoft YaHei';
}
.describe{
	margin:1em;
	font-size:14px;
}
.describe>div{
	text-indent:1em;
	font-family:'Consolas','Courier New','monospace'
}
h4{
	background-color:#6d426d;
	color:#fff;
	margin:0;
	padding:.75em;
	font-weight:400;
	font-family:'Consolas','Courier New','monospace'
}
.highlight{
	padding:.75em;
	background-color:#333!important;
}
pre{
	margin:0;
	font-family:'Consolas','Courier New','monospace'
}
.content{
	margin-left:310px;
}
.content >div{
	border:1px solid #e8e8e8;
	margin-bottom:20px;
}
</style>
