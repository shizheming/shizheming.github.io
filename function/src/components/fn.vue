<template>
    <div class="ssss">
        <div class="name">TOBE</div>
        <sidebar></sidebar>
        <div class="content">
            <div id="forEach">
                <h4>_.forEach(collection, iterator)</h4>
                <div class="describe">
                    <p>迭代一个对象</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要迭代的对象</div>
                    <div>iterator<em>（Function）</em>：迭代器</div>
                    <h5>返回值</h5>
                    <div><em>（undefined）</em>：返回undefined</div>
                </div>
                <forEach></forEach>
            </div>
            <div id="filter">
                <h4>_.filter(collection, predicate)</h4>
                <div class="describe">
                    <p>过滤一个对象</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要过滤的对象</div>
                    <div>predicate<em>（Function）</em>：迭代器</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回过滤后的对象</div>
                </div>
                <filters></filters>
            </div>
            <div id="clone">
                <h4>_.clone(collection, [isDeep = false])</h4>
                <div class="describe">
                    <p>复制对象</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要复制的对象</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深克隆</div>
                    <h5>PS</h5>
                    <div>不复制访问器属性</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回复制出的新对象</div>
                </div>
                <clone></clone>
            </div>
            <div id="debounce">
                <h4>_.debounce(func, wait)</h4>
                <div class="describe">
                    <p>间隔时间内，只执行一次函数，而且是第一次</p>
                    <h5>参数</h5>
                    <div>func<em>（Function）</em>：需要间隔的函数</div>
                    <div>wait<em>（Number）</em>：需要间隔的时间</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：返回等待函数的返回值</div>
                </div>
                <debounce></debounce>
            </div>
            <div id="once">
                <h4>_.once(func)</h4>
                <div class="describe">
                    <p>调用多次，只实行一次的函数，只执行第一次</p>
                    <h5>参数</h5>
                    <div>func<em>（Function）</em>：需要执行的函数</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：返回执行函数的返回值</div>
                </div>
                <once></once>
            </div>
            <div id="after">
                <h4>_.after(times, func)</h4>
                <div class="describe">
                    <p>调用多次后才执行函数</p>
                    <h5>参数</h5>
                    <div>times<em>（Number）</em>：需要几次才执行函数</div>
                    <div>func<em>（Function）</em>：需要执行的函数</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：返回执行函数的返回值</div>
                </div>
                <after></after>
            </div>
            <div id="before">
                <h4>_.before(times, func)</h4>
                <div class="describe">
                    <p>在调用次数里允许执行函数</p>
                    <h5>参数</h5>
                    <div>times<em>（Number）</em>：可以执行多少次</div>
                    <div>func<em>（Function）</em>：需要执行的函数</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：返回执行函数的返回值</div>
                </div>
                <before></before>
            </div>
            <div id="decorate">
                <h4>_.decorate(before, after)</h4>
                <div class="describe">
                    <p>把2个函数合起来一起执行</p>
                    <h5>参数</h5>
                    <div>before<em>（Function）</em>：先执行的函数</div>
                    <div>after<em>（Function）</em>：后执行的函数</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：后执行的函数的返回值</div>
                </div>
                <decorate></decorate>
            </div>
            <div id="randomNumber">
                <h4>_.randomNumber([digit = 1], [digit2])</h4>
                <div class="describe">
                    <p>随机数字</p>
                    <h5>参数</h5>
                    <div>[digit = 1]<em>（Number）</em>：需要随机一串数的位数</div>
                    <div>[digit = 1], [digit2]<em>（Number）</em>：需要开始的数和结束的数</div>
                    <h5>返回值</h5>
                    <div><em>（Number）</em>：返回参数位数的一串随机数</div>
                    <div><em>（Number）</em>：返回两个值之间的随机数</div>
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
                <h4>_.isInteger(n)</h4>
                <div class="describe">
                    <p>判断一个值是不是整数</p>
                    <h5>参数</h5>
                    <div>n<em>（all data type）</em>：需要判断的值</div>
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
            <div id="isEqual">
                <h4>_.isEqual(collection1, collection2)</h4>
                <div class="describe">
                    <p>判断2个对象是否字面上的相等</p>
                    <h5>参数</h5>
                    <div>collection1<em>（Object || Array）</em>：需要对比的第一个值</div>
                    <div>collection2<em>（Object || Array）</em>：需要对比的第二个值</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isEqual></isEqual>
            </div>
            <div id="isExistence">
                <h4>_.isExistence(object, value, [isDeep = false])</h4>
                <div class="describe">
                    <p>判断一个集合中是否存在某些值</p>
                    <h5>参数</h5>
                    <div>object<em>（Object || Array）</em>：需要被检验的集合</div>
                    <div>value<em>（Array）</em>：需要检测的值或是谓词函数</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度验证</div>
                    <h5>返回值</h5>
                    <div><em>（Boolean）</em>：返回布尔值</div>
                </div>
                <isExistence></isExistence>
            </div>
            <div id="negate">
                <h4>_.negate(predicate)</h4>
                <div class="describe">
                    <p>把谓词函数反转过来</p>
                    <h5>参数</h5>
                    <div>predicate<em>（Function）</em>：需要被反转的谓词函数</div>
                    <h5>返回值</h5>
                    <div><em>（Function）</em>：返回一个与原谓词函数相反的谓词函数</div>
                </div>
                <negate></negate>
            </div>
            <div id="identity">
                <h4>_.identity(value)</h4>
                <div class="describe">
                    <p>将值变成函数获取（原始迭代器）</p>
                    <h5>参数</h5>
                    <div>value<em>（all type data）</em>：需要迭代的参数</div>
                    <h5>返回值</h5>
                    <div><em>（all type data）</em>：返回迭代的参数</div>
                </div>
                <identity></identity>
            </div>
            <div id="link">
                <h4>_.link()</h4>
                <div class="describe">
                    <p>创建一个链表</p>
                    <h5>方法</h5>
                    <div>添加元素-add(newElement, [oldElement])</div>
                    <h5>参数</h5>
                    <div>newElement<em>（Function）</em>：把元素添加到链表尾部</div>
                    <div>newElement, [oldElement]<em>（Function）</em>：把元素添加到链表指定元素的后面</div>
                    <h5>返回值</h5>
                    <div><em>（Number）</em>：返回链表元素的长度</div>
                    <h5>方法</h5>
                    <div>替换元素-replace(newElement, oldElement)</div>
                    <h5>参数</h5>
                    <div>newElement<em>（Function）</em>：替换成的新元素</div>
                    <div>oldElement<em>（Function）</em>：被替换的老元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回替换的链表元素</div>
                    <h5>方法</h5>
                    <div>删除元素-delete(element)</div>
                    <h5>参数</h5>
                    <div>element<em>（Function）</em>：需要删除的元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回删除的链表元素</div>
                    <h5>方法</h5>
                    <div>寻找元素-find(element)</div>
                    <h5>参数</h5>
                    <div>element<em>（Function）</em>：需要寻找的元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回寻找到的链表元素</div>
                    <h5>方法</h5>
                    <div>寻找元素-display()</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回所有的链表元素</div>
                </div>
                <links></links>
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
import isEqual from './isEqual.vue';
import isExistence from './isExistence.vue';
import negate from './negate.vue';
import forEach from './forEach.vue';
import filters from './filter.vue';
import debounce from './debounce.vue';
import once from './once.vue';
import after from './after.vue';
import before from './before.vue';
import decorate from './decorate.vue';
import identity from './identity.vue';
import links from './link.vue';


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
        isEqual,
        isExistence,
        negate,
        forEach,
        filters,
        debounce,
        once,
        after,
        before,
        decorate,
        identity,
        links,
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
.name{
    font-family:'Consolas','Courier New','monospace'
}
</style>
