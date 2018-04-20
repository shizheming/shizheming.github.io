<template>
    <div class="ssss">
        <div class="name">隐德莱希</div>
        <sidebar></sidebar>
        <div class="content">
            <div id="forEach">
                <h4>_.forEach(collection, iterator)</h4>
                <div class="describe">
                    <p>迭代一个集合</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要迭代的集合</div>
                    <div>iterator<em>（Function）</em>：迭代器</div>
                    <h5>返回值</h5>
                    <div><em>（undefined）</em>：返回undefined</div>
                </div>
                <forEach></forEach>
            </div>
            <div id="filter">
                <h4>_.filter(collection, predicate)</h4>
                <div class="describe">
                    <p>过滤一个集合</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要过滤的集合</div>
                    <div>predicate<em>（Function）</em>：迭代器</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回过滤后的新集合</div>
                </div>
                <filters></filters>
            </div>
            <div id="filterFalse">
                <h4>_.filterFalse(collection)</h4>
                <div class="describe">
                    <p>过滤假值</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要过滤的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回过滤后的新集合</div>
                </div>
                <filterFalse></filterFalse>
            </div>
            <div id="findKey">
                <h4>_.findKey(collection, value)</h4>
                <div class="describe">
                    <p>通过集合的值寻找键</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要查找的集合</div>
                    <div>value<em>（String || Number || Boolean）</em>：需要通过值来查找</div>
                    <h5>返回值</h5>
                    <div><em>（String）</em>：返回值对应的键</div>
                </div>
                <findKey></findKey>
            </div>
            <div id="value">
                <h4>_.value(collection, [isDeep = false])</h4>
                <div class="describe">
                    <p>输出集合的基础类型值</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要查找的集合</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度查找</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回值的新数组合集</div>
                </div>
                <value></value>
            </div>
            <div id="findCollection">
                <h4>_.findCollection(collection, value, [callback = isDeep], [isDeep = false])</h4>
                <div class="describe">
                    <p>通过键值和筛选条件找到想要的集合</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要查找的集合</div>
                    <div>value<em>（String || Number || Boolean || Object）</em>：需要通过键值来查找</div>
                    <div>[callback = isDeep]<em>（Function）</em>：需要添加的筛选条件来查找</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度查找</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新的数组合集</div>
                    <h5>ps</h5>
                    <div>下面的例子都只是找到一个值，可能会找到多个值</div>
                </div>
                <findCollection></findCollection>
            </div>
            <div id="mappingValue">
                <h4>_.mappingValue(collection, form, [tag = '_'], [isDeep = false], [isDestroy = false])</h4>
                <div class="describe">
                    <p>把集合的值通过映射表进行映射</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要映射的集合</div>
                    <div>form<em>（Array || Object）</em>：映射表</div>
                    <div>[tag = '_']<em>（String）</em>：映射后新值键的标记符号</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度映射</div>
                    <div>[isDestroy = false]<em>（Boolean）</em>：是否需要把原来的键值对销毁</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回映射完的新合集</div>
                    <h5>ps</h5>
                    <div>下面的例子映射表只映射了一个值，可以同时映射多个值</div>
                </div>
                <mappingValue></mappingValue>
            </div>
            <div id="mappingKey">
                <h4>_.mappingKey(collection, form, [tag = '_'], [isDeep = false], [isDestroy = false])</h4>
                <div class="describe">
                    <p>把集合的键通过映射表进行映射</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要映射的集合</div>
                    <div>form<em>（Array || Object）</em>：映射表</div>
                    <div>[tag = '_']<em>（String）</em>：映射后新键的标记符号</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度映射</div>
                    <div>[isDestroy = false]<em>（Boolean）</em>：是否需要把原来的键值对销毁</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回映射完的新合集</div>
                    <h5>ps</h5>
                    <div>下面的例子映射表只映射了一个键，可以同时映射多个键</div>
                </div>
                <mappingKey></mappingKey>
            </div>
            <div id="invert">
                <h4>_.invert(collection, [array])</h4>
                <div class="describe">
                    <p>键值互换</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要互换的集合</div>
                    <div>[array]<em>（Array）</em>：不需要互换的键</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回互换后的新对象集合</div>
                    <h5>ps</h5>
                    <div>下面的例子中，不需要互换的键只用了一个，可以同时提添加多个不需要互换的键</div>
                </div>
                <invert></invert>
            </div>
            <div id="pairs">
                <h4>_.pairs(collection)</h4>
                <div class="describe">
                    <p>把一个集合转换为一个[键, 值]形式的数组集合</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要转换的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回转换后的新数组合集</div>
                </div>
                <pairs></pairs>
            </div>
            <div id="clone">
                <h4>_.clone(collection, [isDeep = false])</h4>
                <div class="describe">
                    <p>复制集合</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要复制的集合</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度克隆</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>不复制访问器属性</div>
                    <div>函数会变null</div>
                </div>
                <clone></clone>
            </div>
            <div id="uniq">
                <h4>_.uniq(collection)</h4>
                <div class="describe">
                    <p>集合去重</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array）</em>：需要去重的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新集合</div>
                </div>
                <uniq></uniq>
            </div>
            <div id="shuffle">
                <h4>_.shuffle(collection)</h4>
                <div class="describe">
                    <p>打乱集合顺序</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array）</em>：需要打乱顺序的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新集合</div>
                </div>
                <shuffle></shuffle>
            </div>
            <div id="chunk">
                <h4>_.chunk(collection, size)</h4>
                <div class="describe">
                    <p>已长度来分组集合中元素</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array）</em>：需要分组的集合</div>
                    <div>size<em>（Number）</em>：需要根据的长度个数</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新集合</div>
                </div>
                <chunk></chunk>
            </div>
            <div id="union">
                <h4>_.union(collection...)</h4>
                <div class="describe">
                    <p>并集</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array）</em>：需要并集的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>下面的例子只合并了2个集合，可以多个集合</div>
                </div>
                <union></union>
            </div>
            <div id="intersection">
                <h4>_.intersection(collection...)</h4>
                <div class="describe">
                    <p>交集</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array）</em>：需要交集的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>下面的例子只想交了2个集合，可以多个集合</div>
                </div>
                <intersection></intersection>
            </div>
            <div id="complement">
                <h4>_.complement(collection...)</h4>
                <div class="describe">
                    <p>补集</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array）</em>：需要补集的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>下面的例子只填补了2个集合，可以多个集合</div>
                </div>
                <complement></complement>
            </div>
            <div id="assign">
                <h4>_.assign(collection...)</h4>
                <div class="describe">
                    <p>并集</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要并集的集合</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>下面的例子只合并了2个集合，可以多个集合</div>
                </div>
                <assign></assign>
            </div>
            <div id="removeValue">
                <h4>_.removeValue(collection, deleteCollection, [isDeep = false])</h4>
                <div class="describe">
                    <p>从集合中删除值</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要进行删除处理的集合</div>
                    <div>deleteCollection<em>（Array）</em>：需要删除值的集合</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度删除</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>下面例子中只删除了一个值，可以同时删除多个值</div>
                </div>
                <removeValue></removeValue>
            </div>
            <div id="removeKey">
                <h4>_.removeKey(collection, deleteCollection, [isDeep = false])</h4>
                <div class="describe">
                    <p>从集合中删除键</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要进行删除处理的集合</div>
                    <div>deleteCollection<em>（Array）</em>：需要删除键的集合</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度删除</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回新集合</div>
                    <h5>ps</h5>
                    <div>下面例子中只删除了一个键，可以同时删除多个键</div>
                </div>
                <removeKey></removeKey>
            </div>
            <div id="trim">
                <h4>_.trim(collection, [isDeep = false])</h4>
                <div class="describe">
                    <p>从集合的值中删除空格</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要进行删除处理的集合</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度删除</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回新集合</div>
                </div>
                <trim></trim>
            </div>
            <div id="toNumber">
                <h4>_.toNumber(collection, [isDeep = false])</h4>
                <div class="describe">
                    <p>把集合中字符串数字变成数字</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要转换的集合</div>
                    <div>[isDeep = false]<em>（Boolean）</em>：是否需要深度转换</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回新集合</div>
                </div>
                <toNumber></toNumber>
            </div>
            <div id="fillZero">
                <h4>_.fillZero(value)</h4>
                <div class="describe">
                    <p>把字符串补零</p>
                    <h5>参数</h5>
                    <div>value<em>（String）</em>：需要补零的值</div>
                    <h5>返回值</h5>
                    <div><em>（String）</em>：返回新值</div>
                </div>
                <fillZero></fillZero>
            </div>
            <div id="money">
                <h4>_.money(value)</h4>
                <div class="describe">
                    <p>以金钱的格式显示数字</p>
                    <h5>参数</h5>
                    <div>value<em>（String）</em>：需要以金钱的格式显示数字的值</div>
                    <h5>返回值</h5>
                    <div><em>（String）</em>：返回新值</div>
                </div>
                <money></money>
            </div>
            <div id="getValue">
                <h4>_.getValue(collection, name)</h4>
                <div class="describe">
                    <p>获取集合中的某个值</p>
                    <h5>参数</h5>
                    <div>collection<em>（Array || Object）</em>：需要获取值来源的集合</div>
                    <div>name<em>（String）</em>：需要查找的属性名</div>
                    <h5>返回值</h5>
                    <div><em>（Array || Object）</em>：返回属性值</div>
                </div>
                <getValue></getValue>
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
                <div class="describe">
                    <h5>demo</h5>
                    <span>{{debounceData}}</span>
                    <button @click="dbf">+1</button>
                </div>
            </div>
            <div id="once">
                <h4>_.once(func)</h4>
                <div class="describe">
                    <p>调用多次，只执行第一次的函数</p>
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
                    <p>把2个函数合起来一起执行，起到装饰的作用</p>
                    <h5>参数</h5>
                    <div>before<em>（Function）</em>：先执行的函数</div>
                    <div>after<em>（Function）</em>：后执行的函数</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：后执行的函数的返回值</div>
                </div>
                <decorate></decorate>
            </div>
            <!-- <div id="state">
                <h4>_.state([state...])</h4>
                <div class="describe">
                    <p>把各种状态按顺序执行</p>
                    <h5>参数</h5>
                    <div>[state...]<em>（Function）</em>：各种状态</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回一个对象，对象中有方法</div>
                    <h5>方法</h5>
                    <h5>执行状态</h5>
                    <div>currState([isLeft = true])</div>
                    <h5>参数</h5>
                    <div>[isLeft = true]<em>（Boolean）</em>：是否需要正序执行状态</div>
                    <h5>返回值</h5>
                    <div><em>（all data type）</em>：当前状态函数运行的返回值</div>
                    <h5>添加状态</h5>
                    <div>addState(newState, [oldState])</div>
                    <h5>参数</h5>
                    <div>newState<em>（Function）</em>：把新的状态添加到尾部</div>
                    <div>[oldState]<em>（Function）</em>：把新的状态添加到指定状态的后面</div>
                    <h5>返回值</h5>
                    <div><em>（Number）</em>：返回所有状态的长度</div>
                    <h5>替换状态</h5>
                    <div>replaceState(newState, oldState)</div>
                    <h5>参数</h5>
                    <div>newState<em>（Function）</em>：需要替换成的新状态</div>
                    <div>oldState<em>（Function）</em>：被替换的老状态</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回替换成的新状态</div>
                    <h5>删除状态</h5>
                    <div>deleteState(state)</div>
                    <h5>参数</h5>
                    <div>state<em>（Function）</em>：需要删除的状态</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回删除的状态</div>
                    <h5>设置状态</h5>
                    <div>setState(state)</div>
                    <h5>参数</h5>
                    <div>state<em>（Function）</em>：需要设置的当前新状态</div>
                    <h5>返回值</h5>
                    <div><em>（all type data）</em>：返回当前执行状态函数的返回值</div>
                </div>
                <state></state>
            </div> -->
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
                <h4>_.randomAlphabet(digit)</h4>
                <div class="describe">
                    <p>随机大小写字母</p>
                    <h5>参数</h5>
                    <div>digit<em>（Number）</em>：需要随机一串字母的位数</div>
                    <h5>返回值</h5>
                    <div><em>（String）</em>：返回参数位数的一串随机字母</div>
                </div>
                <randomAlphabet></randomAlphabet>
            </div>
            <div id="randomNumberAlphabet">
                <h4>_.randomNumberAlphabet(digit)</h4>
                <div class="describe">
                    <p>随机一串大小写字母数字</p>
                    <h5>参数</h5>
                    <div>digit<em>（Number）</em>：需要随机一串的位数</div>
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
                <div class="describe">
                    <h5>demo</h5>
                    <div :style="{backgroundColor:randomColorData,width:'100px',height:'100px', display:'inline-block',verticalAlign:'bottom'}"></div>
                    <button @click="randomColorFunc">随机颜色</button>
                </div>
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
                    <p>判断2个集合是否字面上的相等</p>
                    <h5>参数</h5>
                    <div>collection1<em>（Object || Array）</em>：需要对比的第一个集合</div>
                    <div>collection2<em>（Object || Array）</em>：需要对比的第二个集合</div>
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
                    <div>value<em>（Array）</em>：需要检测的基本数据类型的值或是基本数据类型的谓词函数</div>
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
            <div id="getDays">
                <h4>_.getDays(year, month)</h4>
                <div class="describe">
                    <p>获取月份天数</p>
                    <h5>参数</h5>
                    <div>year<em>（Nubmer）</em>：需要年份</div>
                    <div>month<em>（Nubmer）</em>：需要月份</div>
                    <h5>返回值</h5>
                    <div><em>（Number）</em>：返回天数</div>
                </div>
                <getDays></getDays>
            </div>
            <div id="timeFormat">
                <h4>_.timeFormat(format, [date = new Date()])</h4>
                <div class="describe">
                    <p>格式化时间</p>
                    <h5>参数</h5>
                    <div>format<em>（String）</em>：需要的显示格式</div>
                    <div>[date = new Date()]<em>（和new Date参数一样）</em>：需要的时间</div>
                    <h5>返回值</h5>
                    <div><em>（Number）</em>：返回格式化后的时间</div>
                </div>
                <timeFormat></timeFormat>
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
                <h4>_.link([element...])</h4>
                <div class="describe">
                    <p>创建一个链表</p>
                    <h5>参数</h5>
                    <div>[element...]<em>（Function）</em>：需要添加的元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回一个对象，对象中有属性和方法</div>
                    <h5>属性</h5>
                    <div>head：头部元素</div>
                    <div>tail：尾部元素</div>
                    <h5>方法</h5>
                    <h5>添加元素</h5>
                    <div>add(newElement, [oldElement])</div>
                    <h5>参数</h5>
                    <div>newElement<em>（Function）</em>：把元素添加到链表尾部</div>
                    <div>[oldElement]<em>（Function）</em>：把元素添加到链表指定元素的后面</div>
                    <h5>返回值</h5>
                    <div><em>（Number）</em>：返回链表元素的长度</div>
                    <h5>替换元素</h5>
                    <div>replace(newElement, oldElement)</div>
                    <h5>参数</h5>
                    <div>newElement<em>（Function）</em>：需要替换成的新元素</div>
                    <div>oldElement<em>（Function）</em>：被替换的老元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回替换成的新链表元素</div>
                    <h5>删除元素</h5>
                    <div>delete(element)</div>
                    <h5>参数</h5>
                    <div>element<em>（Function）</em>：需要删除的元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回删除的链表元素</div>
                    <h5>寻找元素</h5>
                    <div>find(element)</div>
                    <h5>参数</h5>
                    <div>element<em>（Function）</em>：需要寻找的元素</div>
                    <h5>返回值</h5>
                    <div><em>（Object）</em>：返回寻找到的链表元素</div>
                    <h5>寻找元素</h5>
                    <div>display()</div>
                    <h5>参数</h5>
                    <div>无</div>
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
import state from './state.vue';
import findKey from './findKey.vue';
import value from './value.vue';
import findCollection from './findCollection.vue';
import filterFalse from './filterFalse.vue';
import mappingValue from './mappingValue.vue';
import mappingKey from './mappingKey.vue';
import invert from './invert.vue';
import pairs from './pairs.vue';
import uniq from './uniq.vue';
import shuffle from './shuffle.vue';
import removeValue from './removeValue.vue';
import removeKey from './removeKey.vue';
import toNumber from './toNumber.vue';
import getValue from './getValue.vue';
import chunk from './chunk.vue';
import union from './union.vue';
import intersection from './intersection.vue';
import complement from './complement.vue';
import trim from './trim.vue';
import fillZero from './fillZero.vue';
import money from './money.vue';
import assign from './assign.vue';
import getDays from './getDays.vue';
import timeFormat from './timeFormat.vue';




import '../js/ecma';

export default {
    data () {
        return {
            debounceData : 10,
            randomColorData : '#ccc',
        };
    },
    mounted () {
        this.debounce = _.debounce(this.debounceFunc, 1000);
    },
    methods : {
        debounceFunc () {
            this.debounceData += 1;
        },
        dbf () {
            this.debounce();
        },
        randomColorFunc () {
            this.randomColorData = _.randomColor();
        },
    },
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
        state,
        findKey,
        value,
        findCollection,
        filterFalse,
        mappingValue,
        mappingKey,
        invert,
        pairs,
        uniq,
        shuffle,
        removeValue,
        removeKey,
        toNumber,
        getValue,
        chunk,
        union,
        intersection,
        complement,
        trim,
        fillZero,
        money,
        assign,
        getDays,
        timeFormat,
    },
}
</script>


<style>
.name{
    font-size:30px;
    position:fixed;
    top:0;
    height:60px;
    line-height:60px;
    width:300px;
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
    /*column-count:2;*/
    /*column-gap: 1em;*/
}
.content >div{
    border:1px solid #e8e8e8;
    margin-bottom:20px;
    /*break-inside: avoid;*/
}
.name{
    font-family:'Consolas','Courier New','monospace'
}

</style>
