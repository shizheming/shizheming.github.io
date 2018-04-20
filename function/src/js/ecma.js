/*
名称：tobe.js
版本：2.4
时间：2018.04

更新：
1. 1.0的时候只是把一些觉得实用的常用的功能罗列的写出来，没有提升到抽象层面♥♥♥♥
2. 修改对象都要返回新的对象，不要在原有的对象上改♥♥♥♥
3. 处理数组和对象一种是策略，都当对象处理，最后分离，因为他变成了统一质料♥♥♥♥
5. 函数参数容错处理♥♥♥♥一开始我把容错写在私有函数里了，这样对外函数体就感觉比较干净点，但觉得判断的容错逻辑应该独立出来，不和具体的私有功能函数逻辑耦合在一起，做到职责单一
6. 解决对对象深度循环操作的问题----
    这样做，一开始想把它抽出来，后来发现没有东西抽出来，直接就递归了，现在我想把浅的深的分开来函数处理，最后在合起来，我不想把深浅耦合在一起♥♥♥♥

8. 长数据不用字符串拼接，以免导致数据格式错乱，像那个项目一样♥♥♥♥

10. 给字符串的数字和数字之间做个转换（只处理最基本的类型，不处理对象）（比如传1和'1'都可以，当然不是所有都可以，isNumber就不行）♥♥♥♥

12. 现在写的方法都是以一维集合为数据源，不以单个基础值为单位♥♥♥♥


15. 用多态消灭条件语句（如果只是if-else的话还是条件或三元吧，多态在多种条件选择的时候才能体现优势）♥♥♥♥
16. 获取后端的数据要处理下没有值的情况，以免前端报错♥♥♥♥

抽象是哲学的根本特点，代码亦如此。
（理念和实体）（共相和殊相）（抽象和具象）（现象和本质）（形式和内容）


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
    集合统一转换
*/

var objectTransformation =  function (original, output, isArrayShift) {
    return Array.isArray(original) ? transformation(output, [], isArrayShift) : transformation(output, {});
}

/*
    对象数组转换
*/

var transformation = function (collection, dataType, isArrayShift) {
    // 这里是把对象数组统一了，但还是有个小问题[empty,'1']，会有这种情况
    _.forEach(collection, function (currentValue, key, collection) {
        isArrayShift === true ? dataType.push(currentValue) : dataType[key] = currentValue;
    });
    return dataType;
};

/*
    递归
*/

var recursive = function (collection, baseCallback, ObjectCallback, level) {
    level = _.isNumber(level) ? ++level : 1;
    baseCallback = processFunction(baseCallback);
    ObjectCallback = processFunction(ObjectCallback);
    var result = {
        collection : [],
        value : [],
    };
    _.forEach(collection, function (currentValue, key, collection) {
        if (Array.isArray(currentValue) || _.isObject(currentValue)) {
            // 对象值的时候一个断点回调
            var output = ObjectCallback(currentValue, key, collection, level);
            output && result.collection.push(output);
            var recursiveValue = recursive(currentValue, baseCallback, ObjectCallback, level);
            result.value = result.value.concat(recursiveValue.value);
            result.collection = result.collection.concat(recursiveValue.collection);
        } else {
            // 基础值的时候一个断点回调
            result.value.push(baseCallback(currentValue, key, collection, level));
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



window._ = {};

/*
★★★★动词★★★★
*/

/****************
    柯理化-部分应用
****************/

/*
    左柯理
*/

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

var clone = function (original) {
    return objectTransformation(original, factoryClone(original));
};

_.clone = function (original,  isDeep) {
    original = processCollection(original);
    return isDeep !== true ? clone(original) : JSON.parse(JSON.stringify(original));
};

/****************
    迭代
    迭代，过滤的深度操作没有意思，应为集合也是值，如果判断是集合就深入，那他本身是不能处理的，所以不可取
****************/

_.forEach = function (collection, iterator) {
    collection = processCollection(collection);
    iterator = processFunction(iterator);
    Object.keys(collection).forEach(function (currentValue, key, array) {
        iterator(collection[currentValue], currentValue, collection);
    });
};

/****************
    过滤
****************/

/*
    过滤一些特定条件后的数据
    开始想过滤也加深度，后来发现不靠谱，因为他是根据谓词函数来控制的，控制权在用户手里，用户可以操作集合并非一定要基础类型的值，所以我去通过递归循环过滤没有意义，集合本来就是个值，可以被过滤掉的
*/

_.filter = function (original, predicate) {
    predicate = processFunction(predicate);
    return objectTransformation(original, factoryNew(original, function (currentValue, key, output) {
        if (predicate(currentValue, key, output)) output[key] = currentValue;
    }), true);
};

/*
    过滤假值
*/

_.filterFalse = function (collection) {
    return _.filter(collection, function (currentValue, key, collection) {
        return !!currentValue;
    });
};

/*
    过滤出所有集合的基础类型值
*/

var value = function (original) {
    return factoryNew(original, function (value, key, output) {
        Array.isArray(value) || _.isObject(value) ? _.forEach(value, function (currentValue, key, collection) {
            output.push(currentValue);
        }) : output.push(value);
    }, []);
};
_.value = function (collection, isDeep) {
    return isDeep !== true ? value(collection) : recursive(collection, function (value, key, collection, level) {
            return value;
        }).value;
};

/*
    通过value找key
*/

_.findKey = function (original, value) {
    var invert = _.invert(original);
    return value in invert && invert[value];
};

/*
    通过值寻找所在的集合
    这里本来想深度复制集合后操作的但是我想只是寻找像做原始的迭代一样，我并没有去改变原集合，所以想想占时想作罢吧
*/

var findCollection = function (collection, value) {
    var keyResult = Object.keys(collection).indexOf(String(value.key)) > -1 && collection;
    var valueResult = transformation(collection, [], true).indexOf(value.value || value) > -1 && collection;
    if (_.isObject(value)) {
        return Object.keys(value).length === 2 ? keyResult && valueResult && collection[value.key] === value.value && collection : keyResult || valueResult;
    } else return valueResult;
};
_.findCollection = function (collection, value, callback, isDeep) {
    isDeep = _.isBoolean(callback) ? callback : isDeep;
    callback = processFunction(callback);
    var result = [];
    var output = findCollection(collection, value);
    output && result.push(output);
    return isDeep !== true ? result : result.concat(recursive(collection, null, function (currentValue, key, collection, level) {
        return findCollection(currentValue, value) && callback(currentValue, key, collection, level) && currentValue;
    }).collection);
};

/****************
    消抖
****************/

_.debounce = function (func, wait) {
    func = processFunction(func);
    var lock = true;
    return function () {
        if (!lock) return; else {
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
    再加个暴力的参数一种是在原有的对象上加映射完的属性，另一种是我直接把原来的干掉
    那这里就又是二维的概念了，一个是映射key还是映射value，另一个是保留原来的还是干掉原来的
*/

var mapping = function (original, form, tag, type, isDestroy) {
    tag = isDestroy ? '' : tag || '_';
    var typeList = {
        key : function (value, key, output, form) {
            output[tag + form[key]] = value;
            isDestroy && delete output[key];
        },
        value : function (value, key, output, form) {
            // 映射值的时候有个小问题，当当前的值是个集合，不是单值的时候，是找不到映射表里面的值的，例如映射表是['a']，迭代的当前值是[1, 2]，那么去找映射的值的时候会是这样['a'][1, 2]，这显然是个undefined，所以要处理下值是集合的情况
            if (typeof(value) === 'object' || _.isFunction(value)) return;
            output[tag + key] = form[key][value];
        }
    };
    // 通过表的key找到obj的key后的值对应表的key的值
    return objectTransformation(original, factoryClone(original, function (value, key, output) {
        // 我觉得还是要保留原来的值，不然其他地方用到就蛋疼了
        if (key in form) typeList[type](value, key, output, form);
    }));
};

/*
    映射value
*/

_.mappingValue = function (collection, form, tag, isDeep, isDestroy) {
    var param = [tag, isDeep, isDestroy].filter(function (currentValue, index, array) {
        return currentValue === true || currentValue === false;
    });
    if (param.length == 2) {
        isDeep = param[0];
        isDestroy = param[1];
    }
    if (param.length == 1) {
        isDeep = param[0];
        isDestroy = false;
    }
    tag = _.isBoolean(tag) ? undefined : tag;
    var OneMappingValue = mapping(collection, form, tag, 'value', isDestroy);
    if (isDeep !== true) return OneMappingValue; else {
        recursive(OneMappingValue, null, function (value, key, collection, level) {
            collection[key] = mapping(value, form, tag, 'value', isDestroy);
        });
    }
    return OneMappingValue;
};

/*
    映射key
*/

_.mappingKey = function (collection, form, tag, isDeep, isDestroy) {
    var param = [tag, isDeep, isDestroy].filter(function (currentValue, index, array) {
        return currentValue === true || currentValue === false;
    });
    if (param.length == 2) {
        isDeep = param[0];
        isDestroy = param[1];
    }
    if (param.length == 1) {
        isDeep = param[0];
        isDestroy = false;
    }
    tag = _.isBoolean(tag) ? undefined : tag;
    var OneMappingKey = mapping(collection, form, tag, 'key', isDestroy);
    if (isDeep !== true) return OneMappingKey; else {
        recursive(OneMappingKey, null, function (value, key, collection, level) {
            collection[key] = mapping(value, form, tag, 'key', isDestroy);
        });
    }
    return OneMappingKey;
}

/*
    辩证法-你是我，我是你
    键值互换
*/

_.invert = function (original, array) {
    // array是指那些不需要互换的，并不是所有情况都要互换
    function surplus (key) {
        return array.every(function (currentValue, index, array) {
            return currentValue == key;
        });
    }
    surplus = array ? surplus : function () {};
    return factoryNew(original, function (currentValue, key, output) {
        surplus(key) ? output[key] = currentValue : output[currentValue] = key;
    });
};

/****************
    去重
****************/

_.uniq = function (array) {
    array = processArray(array);
    return transformation(factoryNew(array, function (currentValue, index, output) {
        output[currentValue] = currentValue;
    }), [], true);
};

/****************
    打乱顺序
****************/

_.shuffle = function(original) {
    original = processArray(original);
    return factoryNew(original, function (currentValue, index, output) {
        var random = _.randomNumber(0, index);
        if (random !== index) output[index] = output[random];
        output[random] = currentValue;
    }, []);
};

/****************
    分组
****************/

_.chunk = function (collection, size) {
    collection = processCollection(collection);
    var length = Math.ceil(collection.length / size);
    var result = [];
    var index = 0;
    while (index++ < length) result.push(collection.splice(0, size));
    return result;
};

/****************
    集合--并集，交集，补集，
****************/

/*
    不管多少个求交集，补集，都是2个之间集合的比较
*/

var perGenusEtDifferentiam = function (aCollection, bCollection) {
    var equally = [];
    var difference = [];
    // 首先自己要去重，不然就bug了
    var allCollection = _.value([_.uniq(aCollection), _.uniq(bCollection)]);
    _.forEach(allCollection, function (currentValue, key, array) {
        var result = [];
        var index = array.indexOf(currentValue);
        while (index != -1) {
          result.push(index);
          index = array.indexOf(currentValue, index + 1);
        }
        result.length === 2 && equally.push(currentValue);
        result.length === 1 && difference.push(currentValue);
    });
    return {
        equally : _.uniq(equally),
        difference : difference
    };
};

/*
    并集
*/

_.union = function () {
    return _.uniq(_.value([].slice.call(arguments)));
};

/*
    交集
*/

_.intersection = function () {
    if (arguments.length < 2) return [];
    var result = factoryNew(_.chunk([].slice.call(arguments), 2), function (currentValue, key, output) {
        if (currentValue.length === 1) output.push(currentValue[0]); else output.push(perGenusEtDifferentiam(currentValue[0], currentValue[1]).equally);
    }, []);
    if (result.length >= 2) result = _.intersection.apply(null, result);
    return _.value(result);
};

/*
    补集
*/

_.complement = function () {
    var result = factoryNew(_.chunk([].slice.call(arguments), 2), function (currentValue, key, output) {
        if (currentValue.length === 1) output.push(currentValue[0]); else output.push(perGenusEtDifferentiam(currentValue[0], currentValue[1]).difference);
    }, []);
    if (result.length >= 2) result = _.intersection.apply(null, result);
    return _.value(result);
};

/****************
    形式转换
****************/

/*
    把一个集合转换为一个[key, value]形式的数组
*/

_.pairs = function (original) {
    return factoryNew(original, function (currentValue, key, output) {
        output.push([key, currentValue]);
    }, []);
};

/****************
    删除
****************/

var removeSomething = function(collection, deleteCollection, type) {
    var isArrayShift = type === 'key' ? false : true;
    var result = objectTransformation(collection, factoryNew(collection, function (currentValue, key, output) {
        if (type === 'value' && !_.isExistence(deleteCollection, [currentValue])) output[key] = currentValue;
        if (type === 'key' && !_.isExistence(deleteCollection.join().split(','), [key])) output[key] = currentValue
    }), isArrayShift);
    return result;
};

/*
    删除vlaue
*/

_.removeValue = function (collection, deleteCollection, isDeep) {
    var oneRemoveValue = removeSomething(collection, deleteCollection, 'value');
    if (isDeep !== true) return oneRemoveValue; else {
        recursive(oneRemoveValue, null, function (currentValue, key, collection, level) {
            collection[key] = removeSomething(currentValue, deleteCollection, 'value');
        });
        return oneRemoveValue;
    }
};

/*
    删除key
*/

_.removeKey = function (collection, deleteCollection, isDeep) {
    var oneRemoveKey = removeSomething(collection, deleteCollection, 'key');
    if (isDeep !== true) return oneRemoveKey; else {
        recursive(oneRemoveKey, null, function (currentValue, key, collection, level) {
            collection[key] = removeSomething(currentValue, deleteCollection, 'key');
        });
        return oneRemoveKey;
    }
};

/*
    删除空格
*/

var trim = function (collection) {
    return objectTransformation(collection, factoryClone(collection, function (currentValue, key, output) {
        if (_.isString(currentValue)) output[key] = currentValue.replace(/(^\s*)|(\s*$)/g,'');
    }));
};

_.trim = function(collection, isDeep) {
    var oneTrim = trim(collection);
    if (isDeep !== true) return oneTrim; else {
        recursive(oneTrim, function (currentValue, key, collection, level) {
            if (_.isString(currentValue)) collection[key] = currentValue.replace(/(^\s*)|(\s*$)/g,'');
        });
    }
    return oneTrim;
};

/****************
    数字
    我从倒计时，日期，数字的分隔中抽象出数字，也就是抽象出了质料，我又从倒计时，数字的分隔中中抽象出了时间，金钱，也就抽象出了形式，这是数字赋予形式后的2的意思
****************/

/*
    补零
*/

_.fillZero = function (value) {
    return value < 10 ? '0' + value : String(value);
};

/*
    把字符串数字变成数字
*/

var toNumber = function (original) {
    return objectTransformation(original, factoryClone(original, function (currentValue, key, output) {
        var value = _.isString(currentValue) && Number(currentValue);
        if(_.isNumber(value)) output[key] = value;
    }));
};

_.toNumber = function (original, isDeep) {
    var oneToNumber = toNumber(original);
    if(isDeep !== true) return oneToNumber; else {
        recursive(oneToNumber, null, function (currentValue, key, collection, level) {
            collection[key] = toNumber(currentValue);
        });
        return oneToNumber;
    }
};

/****************
    金钱
****************/

/*
    数字3位加逗号，金钱显示
*/

_.money = function (value) {
    return String(value).split('').reverse().join('').replace(/(\d{3})/g, '$1,').split('').reverse().join('').replace(/^\,/,'');
};

/****************
    获取集合的某个值
    目的是为了，不管访问层级都做到兼容不报错
****************/

_.getValue = function (collection, node) {
    node = String(node).split('.');
    var result = '';
    var levelCollection = collection;
    _.forEach(node, function (currentValue, index, array) {
        if (typeof levelCollection === 'object' && currentValue in levelCollection) result = levelCollection[currentValue]; else result = '';
        levelCollection = _.isObject(levelCollection) ? '' : levelCollection[currentValue];
    });
    return result;
};

/****************
    组合对象集合
****************/

var assign = function (original, basics) {
    original = _.clone(processCollection(original), true);
    // 处理引用值的键
    var citeKey = [];
    recursive(basics, function (currentValue, key, collection, level) {
        citeKey.push(key);
    }, function (currentValue, key, collection, level) {
        citeKey.push(key);
    });
    var basicsCollection = factoryNew(citeKey, function (currentValue, key, output) {
        var parent;
        var parentLevel;
        var result = _.findCollection(basics, {
            key : currentValue
        }, function (currentValue, key, collection, level) {
            parent = key;
            parentLevel = level;
            return true;
        }, true);
        result.length && output.push({
            parent : parent,
            parentLevel : parentLevel ? parentLevel : 0,
            value : result[0]
        });
    }, []);
    // 处理基础值的键
    var basicsObject = _.filter(basics, function (currentValue, key, collection) {
        var isCite = _.isObject(currentValue) || Array.isArray(currentValue);
        return !isCite || isCite && !Object.keys(currentValue).length;
    });
    _.forEach(basicsCollection.sort(function (a, b) {
        return b.parentLevel - a.parentLevel;
    }), function (currentValue, key, collection, level) {
        // 这是存在属性合并的情况
        recursive(original, null, function (current, bolt, object, grade) {
            if (grade === currentValue.parentLevel && currentValue.parent in object && bolt === currentValue.parent) {
                object[bolt] = Object.assign(current, currentValue.value);
                // 更新原始值
                var result = _.findCollection(basics, {
                    key : currentValue.parent
                }, true);
                if (result.length) result[0][currentValue.parent] = object[bolt];
            }
        });
        // 第一层不存在属性要添加的情况
        if (currentValue.parentLevel === 1 && !(currentValue.parent in original)) original[currentValue.parent] = currentValue.value;
    });
    return Object.assign(original, basicsObject);
};

_.assign = function () {
    var result = factoryNew(_.chunk([].slice.call(arguments), 2), function (currentValue, key, output) {
        if (currentValue.length === 1) output.push(currentValue[0]); else output.push(assign(currentValue[0], currentValue[1]));
    },[]);
    result = result.length >= 2 ? _.assign.apply(null, result) : result[0];
    return result;
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
    _['is' + currentValue] = function (obj) {
        return Object.prototype.toString.call(obj) === '[object ' + currentValue + ']';
    };
});

/*
    判断2个对象是否相等
*/

_.isEqual = function (a, b, aStack, bStack) {
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

/****************
    时间
****************/

/*
    获取某个月份的天数
*/

_.getDays = function (year, month) {
    return new Date(year, month, 0).getDate();
};

/*
    时间格式化
*/

_.timeFormat = function (format, date) {
    var time = _.isNumber(date) ? new Date(date) : new Date();
    var o = { 
        'M+' : time.getMonth() + 1,                 //月份 
        'd+' : time.getDate(),                    //日 
        'h+' : time.getHours(),                   //小时 
        'm+' : time.getMinutes(),                 //分 
        's+' : time.getSeconds(),                 //秒 
        'q+' : Math.floor((time.getMonth() + 3) / 3), //季度 
        'S'  : time.getMilliseconds()             //毫秒 
    }; 
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length)); 
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return format; 
}

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
    newLink = Object.assign(newLink, linkOperation);
    // 初始化添加链表元素
    var allLink = [].filter.call(arguments, function (currentValue, index, array) {
        return _.isFunction(currentValue);
    });
    allLink.forEach(function (currentValue, index, array) {
        newLink.add(currentValue);
    });
    return newLink;
};


// export default _;