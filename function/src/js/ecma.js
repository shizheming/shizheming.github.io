/*
名称：ecma.js
版本：2.0
时间：2017.10

1. 1.0的时候只是把一些觉得实用的常用的功能罗列的写出来，没有提升到抽象层面♥♥♥♥
2. 修改对象都要返回新的对象，不要在原有的对象上改♥♥♥♥
3. 处理数组和对象一种是策略，一种是就当都对象处理，最后分离，我倾向后一种，因为他变成了统一质料♥♥♥♥
4. js是动态的语言，动态的特性是变化，有哪些变化呢，空间的变化，添加，删除，状态（修改），时间的变化，然后就是功能都分创建时候的静态实体，和用的时候的动态实体，也就是实体会有方法给到外部使用
5. 工具的分类还是通过形式来分类，占时不考虑质料

@@@@从具象到抽象，脱离形，提炼一般化@@@@
抽象是哲学的根本特点，代码亦如此。

心态：有能力就绕过感觉经验，没能力还是得靠感觉经验，以免对自己造成不必要的痛苦而导致无法正常前进

1. 抽象是什么？
	抽象是具象的反义词
2. 为什么要抽象？
	因为让别人看的一脸懵笔的感觉很爽。
	因为抽象是我们创建实体的起点，必经之路，我们不能直接从tab切换的业务代码变成另一个拖拽排序的东西，我们只有从中抽象出数据类型，语法，等等，重新构建另一个，这就是从实体到抽象，抽象再到实体的这么一个过程，所以是必经之路，而复用只是抽象附带的这么一个特性而已。
3. 怎么抽象？
	单个抽象：抽象行为，抽象属性，抽象种属概念（比较难）
	多个抽象：抽象相同的部分和不同的部分，抽象不变的和变化的（比上面容易，因为有比较了）
4. 抽象出什么来？
	抽象出形式	
5. 抽象的程度
	抽象的程度越深，那抽象出来的离抽象本身最近，越一般，与其他抽象越紧密，如果2个抽象依旧没有关系，就说明抽象的程度没有达到联系的那一层，需继续抽象
*/

// 我现在用高阶函数只是存一些数据,状态,配置一些属性,还没有提升到进去一个函数出来另一个函数的能力
// 2步到位

// 要抽象一样东西，我们的先规定形式和质料，形式就是我们要抽象出的那个东西，而这里的质料我只指代码的技巧和方法，当然还有其他质料，因为不是重点，姑且忽略
// 那技巧是什么，就是函数，各种函数，回调，高阶等等。

/*
	代码是种知识，那我们要如何获取知识，知识必须有立足点，必须具有普遍性，一般性，客观性，我们才能把握，那种处在神灭变化当中的我们无法把握，不能获取，所以我们只能把握那个具有，普遍性，一般性，客观性的知识，而知识从何而来，从实体中来，一切范畴都必须依附实体存在。而质料和形式是产生实体的2个本质，这里的实体及时
*/




/****************
	私有
****************/
/*
	处理对象
	经典的一部，数组变对象，一切皆对象，哈哈哈
	数组对象终归一家
	直接对象处理，不要再用那个什么iswhich了这是意见，这里真理是什么，真理就是一切皆对象
*/
var processObject = function (fn) {
	fn = fn || function (oldObj, newObj) {
		return newObj;
	};
	return function (oldObj, iterator, data) {
		var newObj = data || {};
		// 不但要处理新的对象还是处理在什么对象上迭代
		newObj = fn(oldObj, newObj);
		Object.keys(oldObj).forEach(function (item, index, arr) {
			iterator(oldObj[item], item, newObj);
		});
		return newObj;
	};
};
/*
	处理克隆体
*/
var processCloneObject = processObject(function (oldObj, newObj) {
	for (var key in oldObj) newObj[key] = oldObj[key];
	return newObj;
});
/*
	处理新生体
*/
var processNewObject = processObject();
/*
	对象统一转换
*/
var objectTransformation =  function (obj, newObj) {
	return Array.isArray(obj) ? _.objectToArr(newObj) : _.arrToObject(newObj);
}
/*
	集合的种属概念
*/
var aggregate = function(index, bl) {
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
				// console.log(newObj)
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






var _ = {};
_.val = function (val) {
    return val;
};
_.fnVal = function (val) {
	return function () {
		return val;
	};
};



/****************
	复制
****************/
/*
	1.全部复制
	2.过滤复制--一开始我只要基础类型，我想的是传的参数，比如str，nub之类的，后来想那又能我要其他的，这种其他的可能性是没有立足点的，列举几十种策略都满足不了，所以直接抽象上升到迭代器，让用户自己控制
*/
_.clone = function(oldObj, iterator) {
	iterator = !iterator ? function () {
		return true;
	} : iterator;
	// 这里可以判断我进来的是什么数据类型出去的是什么数据类型了
	return objectTransformation(oldObj, processNewObject(oldObj, function (val, key, newObj) {
		newObj[key] = val;
	})).filter(iterator);
};



/****************
	随机
	随机是Math.random()
	用一说明多，一是基础，用一构建多
******************/
/*
	随机位数
	单一的
*/
_.digit = function () {
	return Math.ceil(Math.random() * 10);
};
/*
	随机数字(这里的数字都是正整数)
	数字属性--位数
	一个一位数字，一个多位数字(数量关系)
*/
_.randomNumber = function (digit, digit2) {
	var that = this;
	// 单位一个数字
	var n = function () {
		return that.digit();
	};
	// 多位一个数字
	var nn = function () {
		return Math.ceil(Math.random() * Math.pow(10, digit));
	};
	// digit到digit2之间的一个数字
	var nnn = function () {
		return parseInt(digit + Math.random() * (digit2 - digit));
	};
	return arguments.length  === 2 ? nnn() : digit ? nn() : n();
};
/*
	随机字母
	字母属性--大写，小写(忽略大小写)
*/
_.randomAlphabet = function (digit) {
	var arr = [];
	for (var i = 0; i < (digit ? digit : 1); i++) {
		//生成一个0到25的数字
		arr.push(Math.ceil(Math.random() * 25));
	}
	//大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()
	return String.fromCharCode.apply(null, arr.map(function (currentValue, index, array) {
		return currentValue + 65;
	}));
};
/*
	随机数字字母-随机字母数字
	数字字母字母数字属性--位置(忽略大小写)，开端，结束
*/
_.randomNumberAlphabet = function (digit) {
	// 默认9位
	digit = digit ? digit : 9;
	var s = Math.random().toString(16);
	// 满足位数的同时满足有数字有字母
	var d = /(?:\.[a-zA-Z]+\d+)|(?:\.\d+[a-zA-Z]+)/.test(s);
	return s.length > digit && d ? s.substr(2, digit) : _.randomNumberAlphabet(digit);
};
/*
	随机颜色
*/
_.randomColor = function(){
	return '#' + Math.floor(Math.random() * parseInt('0xffffff',16).toString(10)).toString(16);
},


/****************
	谓词函数
	谓词是有没有，是不是......
******************/
/*
	反转谓词结果，跟其他具体的谓词函数合为一个整体
*/
_.reversePredicate = function (predicate) {
	return function () {
		return !predicate.apply(null, arguments);
	};
};
/*
	判断一堆数据中是否存在一个，一种，多个，多种数据
	存在是一，存在是多(数量关系)
*/
_.isExistence =	 function (data, value) {
	// 现在只是单个存在，要添加多个存在，不但存在一，还要存在多
	// 存在多
	// 这里直接从多入手到一
	var args = [].slice.call(arguments, 1);
	// 纯值
	var val = [];
	// 谓词判断
	var predicate = [];
	args.forEach(function (item, index, arr) {
		typeof item == 'function' ? predicate.push(item) : val.push(item);
	});
	val = val.length == 0 ? true : val.every(function (item, index, arr) {
		for (let key in data) if (data[key] === item) return true;
		return false;
	});
	predicate = predicate.length == 0 ? true : predicate.every(function (item, index, arr) {
		for (let key in data) if (item(data[key])) return true;
		return false;
	});
	return val && predicate;
};
/*
	判断一个值是不是整数
*/
_.isInteger = function (num) {
	return typeof num == 'number' && num % 1 === 0;
};
/*
	判断值是不是NaN
*/
_.isNaN = function (n) {
	return n !== n;
};
/*
	区别undefined，null以外的值
*/
_.isExisty = function (x) {
	return x != null;
};
/*
	判断2个集合是否相等
*/
_.isEqual = function(a, b, aStack, bStack) {
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
		if (!equal(a[key], b[key], aStack, bStack)) return false;
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
	是否过去
*/
_.past = function (date) {
	return (new Date(date)).getTime() < (new Date()).getTime() || false;
};
/*
	是否未来
*/
_.future = function (date) {
	return !_.past(date);
};



/****************
	行为模式
	重形式轻内容
****************/
/*
	重复行为
	重复做直到达到目标，不达目的誓不罢休
	但这里只是重复特定的值，万一我是要做其他更具体的事情呢？？？？
*/
_.repeat = function (create, predicate, arr) {
	arr = arr ? [] : arr;
	// 创建一个新值
	var res = create();
	// 判断这个新值在某个条件中符合不符合
	// 如果符合就添加到数据中
	// 如果不符合接着递归直到符合
	if (predicate(arr, res)) {
		// 达到目的停止
		arr.push(res);
		return res;
	// 没达到目的继续
	} else this.repeat(createVal, predicate, arr);
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
	消抖行为
*/
_.debounce = function(fn, interval) {
	var num = 0;
	return function() {
		if (num) return; else {
			num++;
			var timer = setTimeout(function() {
				num = 0;
				clearTimeout(timer);
			}, interval || 1000);
		}
		fn.apply(null, arguments);
	};
};
/*
	单次行为
*/
_.once = function (fn) {
	var bl = true;
	return function() {
		var result;
		if (bl) result = fn.apply(null, arguments);
		bl = false;
		return result;
	};
};
/*
	达到次数后才激活
*/
_.after = function (times, fn) {
	return function () {
		if (--times < 1) return fn.apply(this, arguments);
	};
};
/*
	规定方法调用次数
*/
_.before = function (times, fn) {
	return function () {
		if (--times > 0) return fn.apply(this, arguments);
	};
};
/*
	装饰行为
*/
_.decorate = function () {
	var args = [].slice.call(arguments);
	var add = function (fn) {
		args.push(fn);
	};
	var go = function () {
		// 每个方法都是独立的，之间没有关系，只是顺序，不像面向对象真的是包在里面的
		[].forEach.call(args, function (item, index, arr) {
			item.apply(args[0], arguments);
		});
	};
	// 增加添加方法
	go.add = add;
	return go;
};
/*
	状态行为--形态
	2种状态，循环，回流
*/
_.state = function () {
	// 1. 静态
	// 首先要定义多个状态和状态的顺序
	// 如果不是function先变成function
	var data = [].map.call(arguments, function (item, index, arr) {
		return _.isFunction(item) ? item : _.fnVal(item);
	});
	var link = _.createLink();
	data.forEach(function (item, index, arr) {
		link.add(item);
	});
	var one = link.find(data[0]);
	// 回流的方向
	var direction = true;
	// 把专门判断方向的变成整体了，还不能说是抽象，只是把零碎的步骤提升到整体，只是整体，一坨的，还没整理
	var directionFn = function () {
		direction ? one = one.next : one = one.previous;
		// 正序
		if (one === link.head.next) direction = true;
		// 倒序
		if (one === link.tail.previous) direction = false;
	};
	var oneByOne = function (backflow) {
		one.el();
		backflow ? void function () {
			directionFn();
		}() : void function () {
			one = one.next;
		}();
	};
	// 2. 动态
	// 然后添加一些方法能动态的添加或是删除或是修改状态
	// 添加状态
	var addState = function (newState, item) {
		link.add(newState, item);
	};
	// 替换状态
	var editState = function (newState, oldState) {
		link.replace(newState, oldState);
		if (one.el === oldState) one = link.find(newState);
	};
	// 删除状态
	var delState = function (obj) {
		// 这里有个问题就是，有时删除的实体已经变成下一个要运行的实体了，例如我运行1，运行完1后，运行实体变成2，虽然紧接着我删除了2，可下次运行的是时候是运行2的实体，因为之前运行完1后，就更新了运行实体，替换也有这个问题
		if (one.el === obj) directionFn();
		link.del(obj);
	};
	return {
		currState : oneByOne,
		addState : addState,
		editState : editState,
		delState : delState
	};
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
/*
	深浅
	对象都有深浅，对于深的操作，对于浅的操作，但归根结底还是策略，还是不同的道路，不同的意见，不是真理，知识需要立足点，我觉的我可以写个策略的形式，至于策略的实际内容，比如深浅，比如参数的不确定性都通过传参的方式，因为这些都是变化的，是意见，唯有真理不变，真理不需要写if，真理只有一条路，呵呵哒
	未完成。。。。。。
*/
_.depth = function () {
	// 这个对策略来时只是内容
	// ...
};



/****************
	寻找(过滤)
****************/
/*
	通过value找key
*/
_.findKey = function (obj, value) {
	for (var key in obj) if (obj[key] == value) return key;
};
/*
	通过ke或是val寻找当前所在对象
	这里有个问题就是，当里面嵌套的key和val一样的时候，就有些蛋疼了，他给了我里面的一个对象，我要的是外面一层的对象，还没有遍历到，所以要改进下，弄个广度优先遍历的
	这个要改，我想了下就是先去维度吧，把他变成一维的，然后再在里面找，要全部找一遍，因为有可能有一样的，把找到的全部返回给外面，有具体业务逻辑决定
	我加个是否需要深度查找不就好了么，
*/
_.getObj = function () {
	// 现在有2种情况
	var arr = [function oneVal (obj, one, depth, result) {
		// 至少深入一层寻找
		// 维度
		var dimension = 1;
		// 2.只知道key或只知道val
		for (var oldKey in obj) {
			if (typeof obj[oldKey] === 'object') {
				if (depth) {
					if (oldKey == one) return obj;
					result = oneVal(obj[oldKey], one, depth, result);
					if (result) return result;
				} else {
					if (dimension === 1) {
						// 浅寻找不能用递归了，还是手动for循环，因为我知道要循环2层
						if (one in obj[oldKey]) return obj[oldKey];
					}
				}
			} else if (one in obj) return obj; else if(one == obj[oldKey]) return obj;
		}
		// 增加维度
		dimension++;

	}, function twoVal (obj, newKey, val, depth, result) {
		// 至少深入一层寻找
		// 维度
		var dimension = dimension || 1;
		// 1.知道key和val
		for (var oldKey in obj) {
			if (typeof obj[oldKey] === 'object') {
				if (depth) {
					result = twoVal(obj[oldKey], newKey, val, depth, result);
					if (result) return result;
				} else {
					if (dimension === 1) {
						// 浅寻找不能用递归了，还是手动for循环，因为我知道要循环2层
						if (newKey in obj[oldKey] && val == obj[oldKey][newKey]) return obj[oldKey];
					}
				}
			} else if (obj[newKey] == val) return obj;
		}
		// 增加维度
		dimension++;
	}];
	return !_.isBoolean(arguments[arguments.length - 1]) ? arr[arguments.length % 2].apply(null, arguments) : arr[arguments.length % 3].apply(null, arguments);
};
/*
	寻找所有的对象的值
*/
_.values = function (obj) {
	var keys = Object.keys(obj);
	var length = keys.length;
	var val = [];
	for (var i = 0; i < length; i++) val[i] = obj[keys[i]];
	return val;
};
/*
	过滤false的值，都返回真值
*/
_.compact = function (oldObj) {
	return objectTransformation(oldObj, processCloneObject(oldObj, function (val, key, newObj) {
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
	return processNewObject(oldObj, function (val, key, newObj) {
		surplus(key) ? newObj[key] = val : newObj[val] = key;
	});
};
/*
	对象通过一张映射表来映射
	值与值之间的映射
	这里也要处理下是深映射还是浅映射--那我把深浅的概念提出来吧
*/
_.paraVal = function (oldObj, form) {
	// 通过表的key找到obj的key后的值对应表的key的值
	return processCloneObject(oldObj, function (val, key, newObj) {
		if (_.isObject(newObj[key]) && newObj[key] !== null) _.paraVal(newObj[key], form); else {
			if (key in form) {
				newObj[key] = form[key][val];
			}
		}
	});
};
/*
	映射key
*/
_.paraKey = function (obj, form) {
	return processNewObject(obj, function (val, key, newObj) {
		// 占时不深映射，深浅之后统一处理
		for (let x in form) {
			if (key === form[x]) newObj[x] = val;
		}
	});
}
/*
	对象变数组
*/
_.objectToArr = function (obj) {
	if (Array.isArray(obj)) return obj;
	var result = [];
	for (var key in obj) result.push(obj[key]);
	return result;
};
/*
	数组变对象
*/
_.arrToObject = function (arr) {
	if (_.isObject(arr)) return arr;
	var result = {};
	arr.forEach(function (item, index, arr) {
		result[index] = item;
	});
	return result;
};




/****************
	形式转换
****************/
/*
	把一个对象转换为一个[key,value]形式的数组
*/
_.pairs = function (oldObj) {
	return _.objectToArr(processNewObject(oldObj, function (val, key, newArr) {
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
	打乱顺序
****************/
_.shuffle = function(obj) {
    var length = obj.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
        rand = n(0, index);
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
	return objectTransformation(oldObj, processCloneObject(oldObj, function (val, key, newObj) {
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
	扁平化
****************/
_.flatten = function(input, oldArr) {
	return processNewObject(input, function (val, key, newArr) {
		Array.isArray(val) ? newArr = newArr.concat(_.flatten(val, newArr)) : newArr.push(val);
	}, oldArr || []);
};



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


/****************
	数据结构--js当中的纯质料
****************/
/*
	链表--循环双向链表
	这张图大致是这样的所有链表真正用的元素之外有一个head一个tail，head的previous是tail，tail的next是head，而head的next是第一实体，tail的previous是最后一个实体，所有实体之间也是双向的，循环的关键在于第一实体和最后一个实体是双向的，这样头尾实体就循环连起来了。
*/
var linkFn = (function () {
	var link = {};
	// 判断是否头尾相连，也就是链表里面有没有元素
	var isConnected = function (that) {
		return that.head.next === that.head.previous;
	};
	// 往后添加
	link.add = function (newElement, item) {
		// 缺点在于一次只能插一个值
		var newNode = {
			el : newElement,
			next : null,
			previous : null
		};
		// 直接插入尾部
		var addLast = function () {
			// 这里是链表里面没有元素的情况下
			if (isConnected(this)) {
				// 更新头尾
				this.head.next = newNode;
				this.tail.previous = newNode;
				// 更新
				return;
			}
			// 这里是链表里面有元素的情况下
			// 循环链接--过掉head和tail--直接链接第一实体，这里就是实体元素之间头尾相连了
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
		}.bind(this);
		// 1个参数直接添加到尾部
		if (!item) {
			addLast();
		// 2个参数是找到第2个参数后面插入
		} else {
			// 某个位置特定插入
			var current = this.find(item);
			if (!current) return;
			// 判断是不是最后一个
			if (current === this.tail.previous) addLast(); else {
				newNode.next = current.next;
				newNode.previous = current;
				current.next.previous = newNode;
				current.next = newNode;
			}
		}
	};
	// 删除
	link.del = function (item) {
		var currNode = this.find(item);
		// 没找到
		if (!currNode) return;
		// 有2种可能需要判断，一种是删实体头，一种是删实体尾，就需要调整虚体头尾的next和previous的指向了
		if (this.head.next === currNode) this.head.next = currNode.next;
		if (this.tail.previous === currNode) this.tail.previous = currNode.previous;
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		// 返回被删除的对象
		return currNode;
	};
	// 替换
	link.replace = function (newElement, item) {
		// 删除和添加就是替换
		this.add(newElement, item);
		this.del(item);
	};
	// 寻找
	// 找到当前的
	link.find = function (item) {
		// 头尾不给找，排除在外，头尾相连也不给找，因为本身里面就没有东西，还没添加呢
		if (item === 'head' || item === 'tail' || isConnected(this)) return;
		// 这里用this，因为head是创建链表时候独立存在的，link是没有head的，find调的时候也要用this，应为如果用link，里面this又指向link了，而link是没有head的
		var currNode = this.head;
		// 要避免无限循环
		while (currNode.el != item && currNode !== this.tail.previous) {
			currNode = currNode.next;
		}
		return currNode.el !== item ? false : currNode;
	};
	// 展示
	link.display = function () {
		var currNode = this.head;
		var arr = [];
		var bl = true;
		while (bl || currNode.next !== this.head.next) {
			arr.push(currNode.next.el);
			currNode = currNode.next;
			bl = false;
		}
		return arr;
	};
	return link;
})();

_.createLink = function () {
	var newLink = {};
	// 头节点
	newLink.head = {
		el : 'head',
		next : null,
		previous : null
	};
	// 尾节点
	newLink.tail = {
		el : 'tail',
		next : newLink.head,
		previous : newLink.head
	};
	// 头尾相连
	newLink.head.next = newLink.tail;
	newLink.head.previous = newLink.tail;
	// 继承方法
	return _.extend(newLink, linkFn);
};





/*
	判断数据类型
*/
['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Array', 'Object', 'Boolean'].forEach(function(element, index, array) {
	_['is' + element] = function(obj) {
		return Object.prototype.toString.call(obj) === '[object ' + element + ']';
	};
});





export default _;