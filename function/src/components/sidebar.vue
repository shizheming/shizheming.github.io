<template>
    <div class="left">
        <h2>修饰</h2>
        <h3>迭代</h3>
        <ul>
        	<li><a href="#forEach">_.forEach</a></li>
        </ul>
        <h3>过滤</h3>
        <ul>
            <li><a href="#filter">_.filter</a></li>
            <li><a href="#findKey">_.findKey</a></li>
            <li><a href="#value">_.value</a></li>
        	<li><a href="#key">_.key</a></li>
        </ul>
        <h3>克隆</h3>
        <ul>
            <li><a href="#clone">_.clone</a></li>
        </ul>
        <h3>消抖</h3>
        <ul>
            <li><a href="#debounce">_.debounce</a></li>
        </ul>
        <h3>次数</h3>
        <ul>
            <li><a href="#once">_.once</a></li>
            <li><a href="#after">_.after</a></li>
            <li><a href="#before">_.before</a></li>
        </ul>
        <h3>装饰</h3>
        <ul>
            <li><a href="#decorate">_.decorate</a></li>
        </ul>
        <h3>状态</h3>
        <ul>
            <li><a href="#state">_.state</a></li>
        </ul>
        <h3>随机</h3>
        <ul>
            <li><a href="#randomNumber">_.randomNumber</a></li>
            <li><a href="#randomAlphabet">_.randomAlphabet</a></li>
            <li><a href="#randomNumberAlphabet">_.randomNumberAlphabet</a></li>
            <li><a href="#randomColor">_.randomColor</a></li>
        </ul>
        <h2>谓词</h2>
        <ul>
            <li><a href="#isNaN">_.isNaN</a></li>
            <li><a href="#isNumber">_.isNumber</a></li>
            <li><a href="#isInteger">_.isInteger</a></li>
            <li><a href="#isArguments">_.isArguments</a></li>
            <li><a href="#isFunction">_.isFunction</a></li>
            <li><a href="#isDate">_.isDate</a></li>
            <li><a href="#isRegExp">_.isRegExp</a></li>
            <li><a href="#isBoolean">_.isBoolean</a></li>
            <li><a href="#isObject">_.isObject</a></li>
            <li><a href="#isExistence">_.isExistence</a></li>
            <li><a href="#isEqual">_.isEqual</a></li>
            <li><a href="#negate">_.negate</a></li>
        </ul>
        <h2>实体</h2>
        <h3>迭代器</h3>
        <ul>
            <li><a href="#identity">_.identity</a></li>
        </ul>
        <h3>链表</h3>
        <ul>
            <li><a href="#link">_.link</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      msg: 'asdasdasd'
    }
  }
}
</script>


<style>
h2, h3{
    font-weight:400;
    font-style:italic;
    margin:0;
}
h2{
	font-size:14px;
	font-weight:700;
}
h3{
	font-size:14px;
}
a{
    color:#000;
    text-decoration:none;
}
a:hover{
    text-decoration:underline;
}
ul>li{
    list-style:none;
}
.left{
    position:fixed;
    top:60px;
    width:300px;
    overflow:auto;
    height:92%;
    padding-left:10px;
    box-sizing:border-box;
    margin-top:0;
    margin-bottom:0;
}
li{
    line-height:1.8;
    font-family:'Consolas','Courier New','monospace';
}
.left li{
	font-size:14px;
}
.left ul{
	margin:0;
}
</style>
