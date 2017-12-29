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
                <clone></clone>
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
                <randomNumber></randomNumber>
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
                <randomAlphabet></randomAlphabet>
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
                <randomNumberAlphabet></randomNumberAlphabet>
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
                <randomColor></randomColor>
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
                <isNaN></isNaN>
            </div>
            <div id="isNumber">
                <h4>_.isNumber(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是数字</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isNumber></isNumber>
            </div>
            <div id="isInteger">
                <h4>_.isInteger(num)</h4>
                <div class="describe">
                    <p>判断一个值是不是整数</p>
                    <h5>参数</h5>
                    <div>num<em>（Number）</em>：需要判断的数</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isInteger></isInteger>
            </div>
            <div id="isArguments">
                <h4>_.isArguments(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是arguments</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isArguments></isArguments>
            </div>
            <div id="isFunction">
                <h4>_.isFunction(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是函数</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isFunction></isFunction>
            </div>
            <div id="isString">
                <h4>_.isString(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是字符串</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isString></isString>
            </div>
            <div id="isDate">
                <h4>_.isDate(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是日期对象</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isDate></isDate>
            </div>
            <div id="isRegExp">
                <h4>_.isRegExp(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是正则表达式</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isRegExp></isRegExp>
            </div>
            <div id="isBoolean">
                <h4>_.isBoolean(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是布尔值</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isBoolean></isBoolean>
            </div>
            <div id="isObject">
                <h4>_.isObject(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是狭义的对象</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isObject></isObject>
            </div>
            <div id="isPast">
                <h4>_.isPast(time)</h4>
                <div class="describe">
                    <p>判断时间是否已过去</p>
                    <h5>参数</h5>
                    <div>time<em>（Number）</em>：需要时间戳</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isPast></isPast>
            </div>
            <div id="isFuture">
                <h4>_.isFuture(time)</h4>
                <div class="describe">
                    <p>判断时间是否在未来</p>
                    <h5>参数</h5>
                    <div>time<em>（Number）</em>：需要时间戳</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isFuture></isFuture>
            </div>
            <div id="isEqual">
                <h4>_.isEqual(obj1, obj2)</h4>
                <div class="describe">
                    <p>判断2个对象是否字面上的相等</p>
                    <h5>参数</h5>
                    <div>obj1<em>（Object || Array）</em>：需要对比的第一个值</div>
                    <div>obj2<em>（Object || Array）</em>：需要对比的第二个值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isEqual></isEqual>
            </div>
            <div id="isExistence">
                <h4>_.isExistence(obj, val, [...])</h4>
                <div class="describe">
                    <p>判断一个集合中是否存在某种值</p>
                    <h5>参数</h5>
                    <div>obj<em>（Object || Array）</em>：需要被检验的集合</div>
                    <div>val<em>（base data type || Function）</em>：需要检测的值或是谓词函数</div>
                    <div>[...]<em>（base data type || Function）</em>：需要检测的值或是谓词函数</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isExistence></isExistence>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from './sidebar.vue';
import clone from './clone.vue';
import randomNumber from './randomNumber.vue';
import randomAlphabet from './randomAlphabet.vue';
import randomNumberAlphabet from './randomNumberAlphabet.vue';
import randomColor from './randomColor.vue';
import isNaN from './isNaN.vue';
import isNumber from './isNumber.vue';
import isInteger from './isInteger.vue';
import isArguments from './isArguments.vue';
import isFunction from './isFunction.vue';
import isString from './isString.vue';
import isDate from './isDate.vue';
import isRegExp from './isRegExp.vue';
import isBoolean from './isBoolean.vue';
import isObject from './isObject.vue';
import isPast from './isPast.vue';
import isFuture from './isFuture.vue';
import isEqual from './isEqual.vue';
import isExistence from './isExistence.vue';


import _ from '../js/ecma';

export default {
    components : {
        sidebar,
        clone,
        randomNumber,
        randomAlphabet,
        randomNumberAlphabet,
        randomColor,
        isNaN,
        isNumber,
        isInteger,
        isArguments,
        isFunction,
        isString,
        isDate,
        isRegExp,
        isBoolean,
        isObject,
        isPast,
        isFuture,
        isEqual,
        isExistence,
    },
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
