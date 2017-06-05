---
title: 什么情况下不能使用箭头函数
date: 2017-06-05
tags:
- ES6
categories:
- JavaScript
---
学过 ES6 的想必对于箭头函数都非常熟悉，它没有自己的 this 值，箭头函数里面的 this 值继承自外围作用域。但是有些特殊情况下是不宜使用箭头函数的，下面就列举下。

### 点击事件

假设页面上有个按钮，当点击时改变它的 class。

使用箭头函数写法如下：

```js
document.getElementById('btn').addEventListener('click', () => {
  this.classList.toggle('on')
})
```

这样的话，箭头函数里面的 this 是指向 Window，这就不符合预期。

正确写法：

```js
document.getElementById('btn').addEventListener('click', function {
  this.classList.toggle('on')
})
```

### 对象方法

假设这里有个 person 对象，有个 getName 方法来输出它的 name。

```js
const person = {
  name: 'sinchang',
  getName: () => {
    console.log(this.name)
  }
}
```

同样的，这是箭头函数里面的 this 也是指向 Window。

正确写法：

```js
const person = {
  name: 'sinchang',
  getName: function() {
    console.log(this.name)
  }
}
```

### prototype 方法

```js
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.ptototype.getName = () => {
    console.log(this.name)
}

Person('sinchang', '18')
```

此时箭头函数里面的 this 指向 Window。

正确写法：

```js
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.getName = function() {
    console.log(this.name)
}

new Person('sinchang', '18').getName()
```

### 获取 arguments 对象的时候

```js
const getArg = (name, age) => {
    console.log(arguments.length)
}
```

因为在箭头函数中是没有 arguments 对象的，所以上述代码无法运行。

正确写法：

```js
const getArg = function (name, age) {
  
    console.log(arguments.length)
}

getArg('sinchang', '18')
```

参考资料：

- [When Not to use an Arrow Function](http://wesbos.com/arrow-function-no-no/)
