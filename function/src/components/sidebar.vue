<template>
    <div class="left">
        <h2>动词</h2>
        <h3>克隆-复制</h3>
        <ul>
            <li><a href="#clone">_.clone</a></li>
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
            <li><a href="#isPast">_.isPast</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isArguments">_.isArguments</a></li>
            <li><a href="#isFunction">_.isFunction</a></li>
            <li><a href="#isDate">_.isDate</a></li>
            <li><a href="#isRegExp">_.isRegExp</a></li>
            <li><a href="#isBoolean">_.isBoolean</a></li>
            <li><a href="#isObject">_.isObject</a></li>
            <li><a href="#isExistence">_.isExistence</a></li>
            <li><a href="#Array.isArray">Array.isArray</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isFuture">_.isFuture</a></li>
            <li><a href="#isEqual">_.isEqual</a></li>
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
}
h3{
    font-style:italic;
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
}
</style>
