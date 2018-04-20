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
            <li><a href="#filterFalse">_.filterFalse</a></li>
            <li><a href="#findKey">_.findKey</a></li>
            <li><a href="#value">_.value</a></li>
        	<li><a href="#findCollection">_.findCollection</a></li>
        </ul>
        <h3>映射</h3>
        <ul>
            <li><a href="#mappingValue">_.mappingValue</a></li>
            <li><a href="#mappingKey">_.mappingKey</a></li>
            <li><a href="#invert">_.invert</a></li>
        </ul>
        <h3>形式</h3>
        <ul>
            <li><a href="#pairs">_.pairs</a></li>
        </ul>
        <h3>克隆</h3>
        <ul>
            <li><a href="#clone">_.clone</a></li>
        </ul>
        <h3>去重</h3>
        <ul>
            <li><a href="#uniq">_.uniq</a></li>
        </ul>
        <h3>打乱</h3>
        <ul>
            <li><a href="#shuffle">_.shuffle</a></li>
        </ul>
        <h3>分组</h3>
        <ul>
            <li><a href="#chunk">_.chunk</a></li>
        </ul>
        <h3>集合</h3>
        <ul>
            <li><a href="#union">_.union</a></li>
            <li><a href="#intersection">_.intersection</a></li>
            <li><a href="#complement">_.complement</a></li>
            <li><a href="#assign">_.assign</a></li>
        </ul>

        <h3>取值</h3>
        <ul>
            <li><a href="#getValue">_.getValue</a></li>
        </ul>
        <h3>删除</h3>
        <ul>
            <li><a href="#removeValue">_.removeValue</a></li>
            <li><a href="#removeKey">_.removeKey</a></li>
            <li><a href="#trim">_.trim</a></li>
        </ul>
        <h3>消抖</h3>
        <ul>
            <li><a href="#debounce">_.debounce</a></li>
        </ul>
        <h3>数字</h3>
        <ul>
            <li><a href="#toNumber">_.toNumber</a></li>
            <li><a href="#fillZero">_.fillZero</a></li>
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
        <!-- <ul>
            <li><a href="#state">_.state</a></li>
        </ul> -->
        <h3>金钱</h3>
        <ul>
            <li><a href="#money">_.money</a></li>
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
        <h3>时间</h3>
        <ul>
            <li><a href="#getDays">_.getDays</a></li>
            <li><a href="#timeFormat">_.timeFormat</a></li>
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
