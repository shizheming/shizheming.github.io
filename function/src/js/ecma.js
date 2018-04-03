/*
名称：tobe.js
版本：2.3
时间：2018.03

更新：
1. 1.0的时候只是把一些觉得实用的常用的功能罗列的写出来，没有提升到抽象层面♥♥♥♥
2. 修改对象都要返回新的对象，不要在原有的对象上改♥♥♥♥
3. 处理数组和对象一种是策略，都当对象处理，最后分离，因为他变成了统一质料♥♥♥♥
4. 功能还是保持单一性，就像那个复制，我有加了复制之后的过滤，这是2个不同的功能，不需要耦合在一起♥♥♥♥
5. 函数参数容错处理♥♥♥♥一开始我把容错写在私有函数里了，这样对外函数体就感觉比较干净点，但觉得判断的容错逻辑应该独立出来，不和具体的私有功能函数逻辑耦合在一起，做到职责单一
6. 解决对对象深度循环操作的问题----
    这样做，一开始想把它抽不来，后来发现没有东西抽出来，直接就递归了，现在我想把浅的深的分开来函数处理，最后在合起来，我不想把深浅耦合在一起♥♥♥♥
7. 严谨命名变量名，函数名，函数参数名，属性名的命名，也是建立体系的一种训练♥♥♥♥
    函数参数的命名，一会叫original一会叫object还是会引起误解，那该怎么命名呢，original还是不好，原始的只是这个事物的特性而已，不能代表这个事物，使这个事物称其为这个事物是原因是他的形式，而不是他的特性，你觉得叫collection会不会好很多呢？是的，不过如果有多个collection的时候就难以区分了，所以现在是写了他的状态，比如original，output，虽然我想写全但是太长了
8. 长数据不用字符串拼接，以免导致数据格式错乱，像那个项目一样♥♥♥♥
9. 状态添加了设置当前状态♥♥♥♥
10. 给字符串的数字和数字之间做个转换（只处理最基本的类型，不处理对象）（比如穿1和'1'都可以，当然不是所有都可以，isNumber就不行）♥♥♥♥
11. 时间的控制比较蛋疼，比如我要获取3个月前的时间戳，1几小时前（反正就是要获得某一点的时间戳）
12. 增加链式操作
13. 我发现业务逻辑里面好多地方都是相互交叉的耦合，很多很杂，比如说我在操作这个表格的时候，另外某个地方也要有变化，这就非常繁琐，能不能写个类似中介者的东西，虽然vue的数据绑定和watch很方便
14. 怎么做到数据提交时候的正确性，也就是提交给后端的数据中不需要出现后端不要的字段，也就是我给自己用的字段也一并提交给后端了，我想到2个路子，一个是请求拿过来的数据我去删到只剩后端需要的字段，另一种是我新建一个后端需要的数据格式
15. 用多态消灭条件语句
16. 想想一个写好的函数如何做好很好的扩展，首先它的核心功能是什么，然后能在不改动内部代码的情况下添加功能和状态？？
17. 写一个把后端过来的数据中的字符串数字变为数字
18. 递归迭代的时候我怎么知道我在第几层？？全是对象还好办，如果里面有数组怎么办，要不要把数组算一层，因为数组也是对象


抽象是哲学的根本特点，代码亦如此。
（理念和实体）（共相和殊相）（抽象和具象）（现象和本质）（形式和内容）

1. 抽象是什么？
    抽象是具象的反义词
2. 为什么要抽象？
    因为让别人看的一脸懵笔的感觉很爽。
    因为抽象是我们创建实体的起点，必经之路，我们不能直接从tab切换的业务代码变成另一个拖拽排序的东西，我们只有从中抽象出数据类型，语法，等等，重新构建另一个，这就是从实体到抽象，然后再从抽象到实体的这么一个过程，所以是必经之路，而复用只是抽象附带的这么一个特性而已。
3. 怎么抽象？
    单个抽象：抽象行为，抽象属性，抽象种属概念（比较难）
    多个抽象：抽象相同的部分和不同的部分，抽象不变的和变化的（比上面容易，因为有比较了）
4. 抽象出什么来？
    抽象出形式，抽象出质料，任何事物都是形式和质料的统一
5. 抽象的程度
    抽象的程度越深，那抽象出来的离抽象本身最近，越一般，与其他抽象越紧密，如果2个抽象依旧没有关系，就说明抽象的程度没有达到联系的那一层，需继续抽象
*/

// 我现在用高阶函数只是存一些数据,状态,配置一些属性,还没有提升到进去一个函数出来另一个函数的能力


/*
----关于页面----

♥♥♥♥状态♥♥♥♥
初始状态，修改状态，删除状态，添加状态，重置状态，当前状态

（在抽象弹窗抽象出通知的时候，我一度很困惑，这个概念总感觉是相当的具象，因为他限于人，并非动植物，或是无生命体，有局限性，所以具象，所以还不够通用，不够一般，那就再往上抽，把他的属差去掉，他的属差是什么，是人，是有理性，是主观主动性，然后想了想，“发出信息”就出来了，这就不限客观载体了，生命体能发出信息，非生命体也能发出信息，这样就是更加一般形式了）

♥♥♥♥数据♥♥♥♥

♥♥♥♥可读函数♥♥♥♥
还有就是有些判断和对象的赋值操作乍看之下看不出逻辑是什么意思，要联系上下文才看的懂，所以最好封装成有名字的函数运行，读起来会好很多

♥♥♥♥ajax统一处理下♥♥♥♥

♥♥♥♥处理业务逻辑和处理数据分开♥♥♥♥
主体业务逻辑不包含处理数据的部分，我的意思是那些是给人看的代码，和给计算机的代码分开，这样我就能专注业务逻辑了，不会一会写着业务逻辑，一遍处理数据

*/

// 运动，静止
// 我是这样理解偏函数的，当我抽象出某个事物的种的时候我会去用偏函数，当我要记录某些状态变化的时候我会去用偏函数，也就是要分1步以上的我回去用偏函数，如果不是种，而只是某个函数的中一小部分功能的时候，即使这个功能很复用，我也会去写个小函数，在某个函数里面调用，而不会把他作为种在直接在外面调用

/* 
★★★★★★★★★★★★★★★★★★★★
1. 我先不要太烦恼和纠结于寻找那个最大种同时让这个最大的种与我现在写的东西的种之间建立关系等级，因为这是终极目标，不可能一下子找到和建立联系的，那么我现在要掉转枪头，把切入点放在我已有的方法上，从我具体的方法出发，往上找他的形式，往下找他的质料，达到统一，辩证。也就是要训练思维，不能不找边际的乱想
2. 知识的立足点，是那个一般的东西
★★★★★★★★★★★★★★★★★★★★
*/



/****************
    私有
****************/

/*
    输入输出迭代工厂
*/

var factory = function (callback) {
    callback = callback || function (original, output) {
        return output;
    };
    return function (original, iterator, array) {
        original = processCollection(original);
        iterator = processFunction(iterator);
        // 不但要处理新的对象还是处理在什么对象上迭代
        var output = callback(original, array || {});
        Object.keys(original).forEach(function (currentValue, index, array) {
            iterator(original[currentValue], currentValue, output);
        });
        return output;
    };
};

/*
    克隆体
*/

var factoryClone = factory(function (original, output) {
    _.forEach(original, function (currentValue, key, collection) {
        output[key] = collection[key];
    });
    return output;
});

/*
    新生体
*/

var factoryNew = factory();

/*
    对象统一转换
*/

var objectTransformation =  function (original, output) {
    return Array.isArray(original) ? objectToArr(output) : arrToObject(output);
}

/*
    对象变数组
*/

var objectToArr = function (object) {
    var result = [];
    _.forEach(object, function (currentValue, key, collection) {
        result.push(currentValue);
    });
    return result;
};

/*
    数组变对象
*/

var arrToObject = function (array) {
    var result = {};
    _.forEach(array, function (currentValue, key, collection) {
        result[key] = currentValue;
    });
    return result;
};

/*
    递归
*/

var recursive = function (collection, baseCallback, ObjectCallback) {
    baseCallback = processFunction(baseCallback);
    ObjectCallback = processFunction(ObjectCallback);
    var result = {
        collection : [],
        value : [],
    };
    _.forEach(collection, function (currentValue, key, collection) {
        if (Array.isArray(currentValue) || _.isObject(currentValue)) {
            // 对象值的时候一个断点回调
            var output = ObjectCallback(currentValue, key, collection);
            output && result.collection.push(output);
            var recursiveValue = recursive(currentValue, baseCallback, ObjectCallback);
            result.value = result.value.concat(recursiveValue.value);
            result.collection = result.collection.concat(recursiveValue.collection);
        } else {
            // 基础值的时候一个断点回调
            result.value.push(baseCallback(currentValue, key, collection));
        }
    });
    return result;
};

/*
    处理参数集合
*/

var processCollection = function (value) {
    return !_.isObject(value) && !Array.isArray(value) ? [] : value;
};

/*
    处理数组
*/

var processArray = function (value) {
    return Array.isArray(value) ? value : [];
};

/*
    处理参数函数
*/

var processFunction = function (value) {
    return _.isFunction(value) ? value : _.identity;
};

/*
    随机
*/

var random = function () {
    return Math.floor(Math.random() * 10);
};

/*
    剩余参数
*/

var restArgs = function (func) {
    return function () {
        // 获得形参个数
        var argumentsLength = func.length;
        // rest参数的起始位置为最后一个形参位置
        var startIndex = argumentsLength - 1;
        // 最终需要的参数数组
        var args = Array(argumentsLength);
        // 设置rest参数
        var rest = [].slice.call(arguments, startIndex);
        // 设置最终调用时需要的参数
        for (var i = 0; i < startIndex; i++) args[i] = arguments[i];
        args[startIndex] = rest;
        return func.apply(null, args);
    };
};

/*
    链表--循环双向链表
    这张图大致是这样的所有链表真正用的元素之外有一个head一个tail，head的previous是tail，tail的next是head，而head的next是第一，tail的previous是最后一个，所有对象之间也是双向的，循环的关键在于第一和最后一个是双向的，这样头尾实体就循环连起来了。
    1. 空白链表
    head←----→tail
      ↑--------↑
    2. 一个对象的链表
    head----→object←----tail
      ↑------------------↑
    3. 多个对象链表
    head----→object←----→object←----tail
      ↑        ↑------------↑        ↑
       ------------------------------
*/

var linkOperation = (function () {
    var link = {};
    // 判断是否头尾相连，也就是链表里面有没有元素
    var isEmptyLink = function (element) {
        return element.head.next === element.head.previous;
    };
    var isLast = function (element) {
        return element === this.tail.previous
    }.bind(this);
    // 添加
    link.add = function (newElement, oldElement) {
        // 缺点在于一次只能插一个值
        var newNode = {
            element : newElement,
            next : null,
            previous : null
        };
        // 插入尾部
        var addLast = function () {
            // 这里是链表里面没有元素的情况下
            if (isEmptyLink(this)) {
                // 更新头尾
                this.head.next = newNode;
                this.tail.previous = newNode;
            } else {
                // 这里是链表里面有元素的情况下
                // 新元素下一个连第一个
                newNode.next = this.head.next;
                // 新元素上一个连最后一个
                newNode.previous = this.tail.previous;
                // 更新第一个的上一个的指向
                this.head.next.previous = newNode;
                // 更新最后一个的下一个的指向
                this.tail.previous.next = newNode;
                // 更新尾巴的上一个的指向
                this.tail.previous = newNode;
            }
        }.bind(this);
        // 1个参数直接添加到尾部
        if (!oldElement) {
            addLast();
        // 2个参数是找到第2个参数后面插入
        } else {
            var currentValue = this.find(oldElement);
            if (!currentValue) return;
            // 判断是不是最后一个
            if (currentValue === this.tail.previous) addLast(); else {
                newNode.next = currentValue.next;
                newNode.previous = currentValue;
                currentValue.next.previous = newNode;
                currentValue.next = newNode;
            }
        }
        return this.display().length;
    };
    // 删除
    link.delete = function (element) {
        var currentValue = this.find(element);
        // 没找到
        if (!currentValue) return;
        // 有2种可能需要判断，一种是删头，一种是删尾，就需要调整虚体头尾的next和previous的指向了
        if (this.head.next === currentValue) this.head.next = currentValue.next;
        if (this.tail.previous === currentValue) this.tail.previous = currentValue.previous;
        currentValue.previous.next = currentValue.next;
        currentValue.next.previous = currentValue.previous;
        // 返回被删除的对象
        return currentValue;
    };
    // 替换
    link.replace = function (newElement, oldElement) {
        // 删除和添加就是替换
        this.add(newElement, oldElement);
        this.delete(oldElement);
        return this.find(newElement);
    };
    // 寻找
    // 找到当前的
    link.find = function (element) {
        // 头尾不给找，排除在外，头尾相连也不给找，因为本身里面就没有东西，还没添加呢
        if (element === 'head' || element === 'tail' || isEmptyLink(this)) return;
        // 这里用this，因为head是创建链表时候独立存在的，link是没有head的，find调的时候也要用this，应为如果用link，里面this又指向link了，而link是没有head的
        var currentValue = this.head;
        // 要避免无限循环
        while (currentValue.element != element && currentValue !== this.tail.previous) {
            currentValue = currentValue.next;
        }
        return currentValue.element !== element ? false : currentValue;
    };
    // 展示
    link.display = function () {
        var currentValue = this.head;
        var array = [];
        var lock = true;
        while (lock || currentValue.next !== this.head.next) {
            if (!currentValue.next) return array;
            array.push(currentValue.next.element);
            currentValue = currentValue.next;
            lock = false;
        }
        return array;
    };
    return link;
})();

/*
    集合
*/

var aggregate = function (index, bl) {
    return function (obj) {
        var that = this;
        var thatArg = arguments;
        return _.whichData(obj, function () {
            // 并集
            var union = [].concat.apply(obj, [].slice.call(thatArg, 1));
            // 并集 交集
            var result = [union, this.uniq(union)];
            // 并集删除交集就是补集
            result[2] = (function () {
                var complement = union.slice(0);
                result[1].forEach(function (item, index, arr) {
                    that.without(complement, item);
                });
                return complement;
            })();
            return result[index];
        }.bind(this), function () {
            // 哪个为主体的开关
            // 并集
            var result = [function () {
                // 手动clone，自调用会栈溢出，呵呵
                var newObj = {};
                for (let key in obj) newObj[key] = obj[key];
                // var newObj = that.clone(obj);
                for (let i = 1, len = thatArg.length; i < len; i++) {
                    for (let key in thatArg[i]) {
                        if (that.isBoolean(bl) && bl) {
                            if (!newObj.hasOwnProperty(key)) newObj[key] = thatArg[i][key];
                        } else newObj[key] = thatArg[i][key];
                    }
                }
                return newObj;
            // 交集
            }, function () {
                var newObj = {};
                for (let i = 1, len = thatArg.length; i < len; i++) {
                    for (let key in thatArg[i]) {
                        if (that.isExistence(obj, thatArg[i][key])) {
                            newObj[key] = thatArg[i][key];
                        }
                    }
                }
                return newObj;
            }];
            // 补集
            result[2] = function () {
                // 并集
                var union = result[0]();
                // 交集
                var intersection = result[1]();
                // 并集删除交集就是补集
                for (let key in intersection) {
                    that.without(union, intersection[key]);
                }
                return union;
            };
            return result[index]();
        });
    };
};



window._ = {};

/*
★★★★动词★★★★
*/

/****************
    柯理化-部分应用
****************/

_.partial = restArgs(function(func, boundArgs) {
    return function() {
        var position = 0, length = boundArgs.length;
        var args = Array(length);
        for (var i = 0; i < length; i++) {
            args[i] = boundArgs[i];
        }
        while (position < arguments.length) args.push(arguments[position++]);
        return func.apply(null, args);
    };
});

/****************
    复制
****************/

_.clone = function (original,  isDeep) {
    original = processCollection(original);
    return isDeep !== true ? objectTransformation(original, factoryNew(original, function (value, key, output) {
            output[key] = value;
        })) : JSON.parse(JSON.stringify(original));
};

/****************
    迭代
****************/

_.forEach = function (collection, iterator) {
    collection = processCollection(collection);
    iterator = processFunction(iterator);
    Object.keys(collection).forEach(function (currentValue, index, array) {
        iterator(collection[currentValue], currentValue, collection);
    });
};

/****************
    过滤
****************/

/*
    过滤一些特定条件后的数据
*/

_.filter = function (original, predicate) {
    predicate = processFunction(predicate);
    return objectTransformation(original, factoryNew(original, function (value, key, output) {
        if (predicate(value, key, output)) output[key] = value;
    }));
};

/*
    过滤出所有对象的值
*/

var value = function (original) {
    return factoryNew(original, function (value, key, output) {
        output.push(value);
    }, []);
};
_.value = function (collection, isDeep) {
    return isDeep !== true ? value(collection) : recursive(collection, function (value, key, collection) {
            return value;
        }).value;
};

/*
    通过value找key
*/

_.findKey = function (original, value) {
    for (var key in original) if (original[key] == value) return key;
};

/*
    通过值寻找所在的对象
*/

var findCollection = function (collection, value) {
    var keyResult = Object.keys(collection).indexOf(String(value.key)) > -1 && collection;
    var valueResult = _.value(collection).indexOf(value.value || value) > -1 && collection;
    if (_.isObject(value)) {
        return Object.keys(value).length === 2 ? keyResult && valueResult && collection[value.key] === value.value && collection : keyResult || valueResult;
    } else return valueResult;
};
_.findCollection = function (collection, value, callback, isDeep) {
    isDeep = _.isBoolean(callback) ? callback : isDeep;
    callback = processFunction(callback);
    if (isDeep !== true) {
        var result = [];
        _.forEach(collection, function (currentValue, key, collection) {
            var output = findCollection(currentValue, value) && callback(currentValue, key, collection) && currentValue;
            output && result.push(output);
        });
        return result;
    } else return recursive(collection, null, function (currentValue, key, collection) {
        return findCollection(currentValue, value) && callback(currentValue, key, collection) && currentValue;
    }).collection;
};

/****************
    消抖
****************/

_.debounce = function (func, wait) {
    func = processFunction(func);
    var lock = true;
    return function () {
        if (!lock) {
            return;
        } else {
            lock = false;
            var timer = setTimeout(function () {
                lock = true;
                clearTimeout(timer);
            }, wait);
        }
        return func.apply(this, arguments);
    };
};

/****************
    映射
****************/

/*
    对象通过一张映射表来映射
    值与值之间的映射
    这里也要处理下是深映射还是浅映射--那我把深浅的概念提出来吧
*/

var mappingValue = function (original, form, tag) {
    tag = tag || '_';
    // 通过表的key找到obj的key后的值对应表的key的值
    return objectTransformation(original, factoryClone(original, function (value, key, output) {
        // 我觉得还是要保留原来的值，不然其他地方用到就蛋疼了
        if (key in form) {
            output[tag + key] = form[key][value];
        }
    }));
};
_.mappingValue = function (collection, form, tag, isDeep) {
    isDeep = _.isBoolean(tag) ? tag : isDeep;
    tag = _.isBoolean(tag) ? undefined : tag;
    if (isDeep !== true) return mappingValue.apply(null, arguments); else {
        recursive(collection, null, function (value, key, collection) {
            collection[key] = mappingValue(value, form, tag);
        });
    }
    return collection;
};

/****************
    次数
****************/

/*
    达到次数后才执行
*/

_.after = function (times, func) {
    func = processFunction(func);
    return function () {
        if (--times < 1) return func.apply(this, arguments);
    };
};

/*
    多少次前可以执行函数
*/

_.before = function (times, func) {
    func = processFunction(func);
    var result;
    return function () {
        if (--times >= 0) return result = func.apply(this, arguments);
        return result;
    };
};

/*
    单次
*/

_.once = _.partial(_.before, 1);

/****************
    装饰
******************/

_.decorate = function (before, after) {
    before = processFunction(before);
    after = processFunction(after);
    return function (beforeArguments, afterArguments) {
        beforeArguments = processArray(beforeArguments);
        afterArguments = processArray(afterArguments);
        arguments.length === 1 ? afterArguments = beforeArguments : '';
        before.apply(this, beforeArguments);
        return after.apply(this, afterArguments);
    };
};

/****************
    状态
    2种方向，正序，倒序
******************/

_.state = function () {
    // 1. 静态
    // 首先要定义多个状态和状态的顺序
    var stateAll = [].filter.call(arguments, function (currentValue, index, array) {
        return _.isFunction(currentValue);
    });
    if (!stateAll.length) return;
    var link = _.link();
    stateAll.forEach(function (currentValue, index, array) {
        link.add(currentValue);
    });
    var state = link.find(stateAll[0]);
    // 方向
    var left = true;
    var direction = function () {
        state = left ? state.next : state.previous;
        // 正序
        if (state === link.head.next) left = true;
        // 倒序
        if (state === link.tail.previous) left = false;
    };
    var oneByOne = function (isLeft, context) {
        context = _.isBoolean(isLeft) ? context : isLeft;
        var back = state.element.call(context);
        isLeft ? direction() : state = state.next;
        return back;
    };
    // 2. 动态
    // 然后添加一些方法能动态的添加或是删除或是修改状态
    // 添加状态
    var addState = function (newState, oldState) {
        var back = link.add(newState, oldState);
        if (!back) return;
        // 正序替换
        if (oldState && (state.previous.previous.element === oldState)) state = link.find(newState);
        // 倒序替换
        if (oldState && (state.element === oldState)) state = link.find(newState);
        // 加在末尾的情况
        // 正序
        if (!oldState && state.previous.element === newState) state = link.find(newState);
        // 倒序
        if (!oldState && state.next.next.element === newState) state = link.find(newState); 
        return back;
    };
    // 替换状态
    var replaceState = function (newState, oldState) {
        var back = link.replace(newState, oldState);
        if (!back) return;
        // 更新要替换的前一个或后一个的指针
        if (state.element === oldState) state = link.find(newState);
        return back;
    };
    // 删除状态
    var deleteState = function (oldState) {
        if (!_.isFunction(oldState)) return;
        // 这里有个问题就是，有时删除的实体已经变成下一个要运行的实体了，例如我运行1，运行完1后，运行实体变成2，虽然紧接着我删除了2，可下次运行的是时候是运行2的实体，因为之前运行完1后，就更新了运行实体，添加，替换也有这个问题
        if (state.element === oldState) direction();
        return link.delete(oldState);
    };
    // 设置当前状态
    var setState = function (newState) {
        var element = link.find(newState);
        if (!state) return;
        state = element;
        return oneByOne();
    };
    return {
        currState : oneByOne,
        addState : addState,
        replaceState : replaceState,
        deleteState : deleteState,
        setState : setState,
    };
};

/****************
    随机
******************/

/*
    随机数字
*/

_.randomNumber = function (digit, digit2) {
    switch (arguments.length) {
        case 0 : return random();
        case 1 : 
            return Math.floor((Math.random() + '').replace(/\.0+/, '.') * Math.pow(10, digit));
        default : 
            return parseInt(digit + Math.random() * (digit2 - digit));
    }
};

/*
    随机字母
*/

_.randomAlphabet = function (digit) {
    var array = [];
    for (var i = 0; i < digit; i++) array.push(_.randomNumber(0, 25));
    //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()
    var upperCase = String.fromCharCode.apply(null, array.map(function (currentValue, index, array) {
        return currentValue + 65;
    }));
    var result = upperCase;
    var number = _.randomNumber(0, upperCase.length);
    while (number--) {
        var alphabet = upperCase[_.randomNumber(1, upperCase.length)];
        result = upperCase.replace(alphabet, alphabet.toLocaleLowerCase());
    }
    return result;
};

/*
    随机数字字母
*/

_.randomNumberAlphabet = function (digit) {
    var number = _.randomNumber(0, digit);
    var string = _.randomNumber(number) + _.randomAlphabet(digit - number);
    return _.isNaN(number) ? NaN : _.shuffle(string.split('')).join('');
};

/*
    随机颜色
*/

_.randomColor = function (saturation, light) {
    saturation = _.isString(saturation) ? saturation : '50%';
    light = _.isString(light) ? light : '50%';
    if (arguments.length == 1) light = saturation;
    var hsl = ['hsl(', ')'];
    hsl.splice(1, 0, [_.randomNumber(0, 360), saturation, light].join(','));
    /*var r = (0, 60)
    var r = (300, 360)
    var g = (60, 180)
    var b = (180, 300);*/
    return hsl.join('');
};



/*
★★★★谓词★★★★
*/

/*
    判断值是不是NaN
*/

_.isNaN = function (n) {
    return n !== n;
};

/*
    判断一个值是不是数字类型
*/

_.isNumber = function (n) {
    return typeof n === 'number' && !_.isNaN(n);
};

/*
    判断一个值是不是整数
*/

_.isInteger = function (n) {
    return _.isNumber(n) && n % 1 === 0;
};

/*
    判断数据类型
*/

['Arguments', 'Function', 'String', 'Date', 'RegExp', 'Object', 'Boolean'].forEach(function (currentValue, index, array) {
    _['is' + currentValue] = function(obj) {
        return Object.prototype.toString.call(obj) === '[object ' + currentValue + ']';
    };
});

/*
    判断2个对象是否相等
*/

_.isEqual = function(a, b, aStack, bStack) {
    if (!aStack || !bStack) if (!_.isObject(a) && !Array.isArray(a) || !_.isObject(b) && !Array.isArray(b)) return false;
    var c1 = Object.prototype.toString.call(a);
    // 类型不同直接out
    if (c1 !== Object.prototype.toString.call(b)) return false;
    // 判断不同类型
    // 最终还是直达基本类型来比较
    switch (c1) {
        case '[object String]' :
        case '[object RegExp]' :
            return '' + a === '' + b;
        case '[object Number]' :
        case '[object Date]' :
        case '[object Boolean]' :
            return +a === +b;
    }
    // 初次就产生栈
    aStack = aStack || [];
    bStack = bStack || [];
    // 进栈
    aStack.push(a);
    bStack.push(b);
    // 从a的key入手
    var akeys = Object.keys(a);
    var key;
    var length = akeys.length;
    // 首先判断2个集合的长度是否一样，不一样就立马停掉，后面都不需要做了
    if (length !== Object.keys(b).length) return false;
    while (length--) {
        // 每个key
        key = akeys[length];
        // 开始判断了
        if (!_.isEqual(a[key], b[key], aStack, bStack)) return false;
    }
    // 这个维度验证通过，栈弹出
    // 直接递归就可以了，为什么还要用到栈呢？？？？？
    // 因为防止对象自引用，导致的无限递归
    aStack.pop();
    bStack.pop();
    // 到这里就说明这一维度的数组的值相等
    return true;
};

/*
    判断一堆数据中是否存在一个，一种，多个，多种数据
*/

var existence = function (collection) {
    // 现在只是单个存在，要添加多个存在，不但存在一，还要存在多
    // 存在多
    var args = [].slice.call(arguments, 1);
    if (!args.length) return false;
    // 纯值
    var value = [];
    // 谓词判断
    var predicate = [];
    args.forEach(function (currentValue, index, array) {
        _.isFunction(currentValue) ? predicate.push(currentValue) : value.push(currentValue);
    });
    value = value.length == 0 ? true : value.every(function (currentValue, index, array) {
        for (let key in collection) if (collection[key] === currentValue) return true;
        return false;
    });
    predicate = predicate.length == 0 ? true : predicate.every(function (currentValue, index, array) {
        for (let key in collection) if (currentValue(collection[key])) return true;
        return false;
    });
    return value && predicate;
};
_.isExistence = function (collection, value, isDeep) {
    collection = processCollection(collection);
    value = processCollection(value);
    if (isDeep !== true) {
        value.unshift(collection);
        return existence.apply(null, value);
    } else {
        value.unshift(_.value(collection, true));
        return existence.apply(null, value);
    }
};

/*
    反转谓词结果，跟其他具体的谓词函数合为一个整体
*/

_.negate = function (predicate) {
    predicate = processFunction(predicate);
    return function () {
        return !predicate.apply(null, arguments);
    };
};



/*
★★★★名词★★★★
*/

/*
    原始迭代器
*/

_.identity = function (value) {
    return value;
};

/*
    链表
*/

_.link = function () {
    var newLink = {};
    // 头节点
    newLink.head = {
        element : 'head',
        next : null,
        previous : null
    };
    // 尾节点
    newLink.tail = {
        element : 'tail',
        next : newLink.head,
        previous : newLink.head
    };
    // 头尾相连
    newLink.head.next = newLink.tail;
    newLink.head.previous = newLink.tail;
    // 继承方法
    newLink = _.extend(newLink, linkOperation);
    // 初始化添加链表元素
    var allLink = [].filter.call(arguments, function (currentValue, index, array) {
        return _.isFunction(currentValue);
    });
    allLink.forEach(function (currentValue, index, array) {
        newLink.add(currentValue);
    });
    return newLink;
};

















/*
    过滤false的值，都返回真值
*/
_.compact = function (oldObj) {
    return objectTransformation(oldObj, factoryClone(oldObj, function (val, key, newObj) {
        !val && delete newObj[key];
    }));
};



/****************
    映射
****************/
/*
    映射转换
    辩证法-你是我，我是你
    键值互换
*/
_.invert = function (oldObj, arr) {
    // arr是指那些不需要互换的，并不是所有情况都要互换
    function surplus (it) {
        return !arr.every(function (item, index, arr) {
            return item === it ? false : true;
        });
    }
    surplus = arr ? surplus : function () {};
    return factoryNew(oldObj, function (val, key, newObj) {
        surplus(key) ? newObj[key] = val : newObj[val] = key;
    });
};



/*
    映射key
*/
_.paraKey = function (obj, form) {
    return factoryNew(obj, function (val, key, newObj) {
        // 占时不深映射，深浅之后统一处理
        for (let x in form) {
            if (key === form[x]) newObj[x] = val;
        }
    });
}



/****************
    形式转换
****************/
/*
    把一个对象转换为一个[key,value]形式的数组
*/
_.pairs = function (oldObj) {
    return objectToArr(factoryNew(oldObj, function (val, key, newArr) {
        newArr.push([key, val]);
    }, []));
};



/****************
    数据去重
****************/
_.uniq = function (array) {
    var result = [];
    var repeat = [];
    for(var i = 0; i < array.length; i++){
        var value = array[i];
        if(!_.isExistence(result, value)) result.push(value); else {
            i--;
            _.without(array, value);
            if (!_.isExistence(repeat, value)) repeat.push(value);
        }
    }
    return repeat;
};

/****************
    数据包裹
****************/
_.wrap = function (oldObj, addObj) {
    return factoryClone(oldObj, function (val, key, newObj) {
        newObj[key] = _.extend({
            value : val,
        }, addObj[key]);
    });
}

/****************
    解除包裹
****************/
_.wrapBack = function (oldObj) {
    return factoryClone(oldObj, function (val, key, newObj) {
        newObj[key] = val.value;
    });
};

/****************
    打乱顺序
****************/
_.shuffle = function(obj) {
    var length = obj.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = _.randomNumber(0, index);
        if (rand !== index) shuffled[index] = shuffled[rand];
        shuffled[rand] = obj[index];
    }
    return shuffled;
};



/****************
    删除
****************/
/*
    删除元素
*/
_.without = function(oldObj, del) {
    return objectTransformation(oldObj, factoryClone(oldObj, function (val, key, newObj) {
        val === del && delete newObj[key];
    }));
};
/*
    删除空格
*/
_.trim = function(oldObj) {
    var newObj = _.clone(oldObj);
    for (var key in newObj) {
        if (newObj[key] == null || newObj[key] == undefined) {
            newObj[key] = '';
        } else if (typeof newObj[key] == 'object') {
            _.trim(newObj[key]);
        } else {
            newObj[key] = newObj[key].toString().replace(/(^\s*)|(\s*$)/g,'');
        }
    }
    return newObj;
};


/****************
    集合--并集，交集，补集
****************/
/*
    并集
*/
_.union = aggregate(0);
/*
    交集
*/
_.intersection = aggregate(1);
/*
    补集
*/
_.complement = aggregate(2);
/*
    继承
*/
_.extend = aggregate(0, true);



/****************
    时间
****************/
/*
    获取某个月份的天数
*/
_.getDays = function(year, month) {
    return new Date(year, month, 0).getDate();
};
/*
    返回某一时间段日期信息
*/
_.date = function(time) {
    var n = n ? new Date(time) : new Date();
    return [n.getFullYear(), fillZero(n.getMonth() + 1), fillZero(n.getDate()), fillZero(n.getHours()), fillZero(n.getMinutes()), fillZero(n.getSeconds())];
};
/*
    变成这种格式2017-08-20 11:09:25
*/
_.getTime = function (stamp) {
    var time = this.date(stamp);
    return time[0] + '-' + time[1] + '-' + time[2] + ' ' + time[3] + ':' + time[4] + ':' +  time[5];
};
/*
    倒计时
*/
_.countDown = function(c, fn) {
    // 有这么计划总情况需要处理
    // 1.传的是日期 2107-12-24 14:11:00
    // 2.传的是时间戳 1510012800000
    if (/-/g.test(c)) c = (new Date(c)).getTime();
    upDate(c, fn);
    var timer = setInterval(function() {
        if (!upDate(c, fn)) clearInterval(timer);
    },1000);
    function upDate(c, fn){
        var d = new Date();
        //获取当前时间戳
        var nowTime = d.getTime();
        var overTime = c;
        //结束事件戳-当前时间戳 
        var mist = parseInt((overTime - nowTime) / 1000);
        var date = parseInt(mist / 86400);
        //去天后的秒数
        mist = mist % 86400    
        var hours = parseInt(mist / 3600);
        //去小时后的秒数
        mist = mist % 3600;
        var minutes = parseInt(mist / 60);
        mist = mist % 60;
        fn && fn(date, hours, minutes, mist);
        return date + hours + minutes + mist;
    }
};



/****************
    空间
****************/



/****************
    数字
    我从倒计时，日期，数字的分隔中抽象出数字，也就是抽象出了质料，我又从倒计时，数字的分隔中中抽象出了时间，金钱，也就抽象出了形式，这是实体抽象的2的方向，那实体之外的抽象，我该怎么分类呢？
****************/
_.fillZero = function (nub) {
    return nub < 10 ? '0' + nub : nub;
};



/****************
    金钱
****************/
// 数字3位加逗号，金钱显示
_.money = function(num) {
    num += '';
    return num.split('').reverse().join('').replace(/(\d{3})/g, '$1,').split('').reverse().join('').replace(/^\,/,'');
};























/*未完成*/
/*
    重复行为
    重复做直到达到目标，不达目的誓不罢休
    但这里只是重复特定的值，万一我是要做其他更具体的事情呢？？？？其他情况最终还是转化为一个值
*/
_.repeat = function (iterator, predicate, array) {
    array = array ? [] : array;
    // 创建一个新值
    var res = iterator();
    // 判断这个新值在某个条件中符合不符合
    // 如果符合就添加到数据中
    // 如果不符合接着递归直到符合
    if (predicate(array, res)) {
        // 达到目的停止
        array.push(res);
        return res;
    // 没达到目的继续
    } else _.repeat(iterator, predicate, array);
};
/*
    根据不同的数据类型做不同的事情
    以后这种东西都要变成策略
*/
_.whichData = function (data, arr, obj) {
    if (_.isObject(data)) return obj(data);
    if (Array.isArray(data)) return arr(data);
};
/*
    第三者
    发现很多模式都是通过第三者甚至第n者来进行对象与对象之间的访问的，比如中介者，代理
    未完成。。。。。。
*/
_.third = function () {

};
/*
    策略
    访问对象的属性(数字-字符)
    未完成。。。。。。
*/
_.strategy = function (road) {

};
/*
    js特性的终极目标--动态变化
    未完成。。。。。。
*/
_.change = function () {
    // ...
    return function () {
        // ...
    };
};


// export default _;