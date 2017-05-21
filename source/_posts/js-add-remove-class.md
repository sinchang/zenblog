---
title: 如何使用 Javascript 给元素增加/删除 class
date: 2016-05-17
tags:
- JavaScript
- jQuery
categories:
- Javascipt
---
会介绍两种实现的方法，一个是使用原生的 JavaScript，还有一种就是 jQuery。

例子的 HTML、CSS 如下：

```html
<div class="center">
    <button id="btn1" class="buttonProps blue" onclick="toggleColor()">classList.toggle()</button>
</div>
```
```css
.blue {
 background: blue;
}
.red {
 background: red;
}
```
### classList

原生 JavaScript 的实现主要利用到了 [classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList) 属性。

```js
function toggleColor() { 
    var myButtonClasses = document.getElementById("btn1").classList; 
    if (myButtonClasses.contains("blue")) {   
        myButtonClasses.remove("blue"); 
    } else {   
        myButtonClasses.add("blue"); 
    } 
    if (myButtonClasses.contains("red")) {   
        myButtonClasses.remove("red"); 
    } else {   
        myButtonClasses.add("red"); 
    }
}
```
还有一种类似的实现方法是利用到`toggle()`方法。

```js
function toggleColor() {
	document.getElementById("btn1").classList.toggle("blue");
	document.getElementById("btn1").classList.toggle("red");
}
```
还支持添加多个 class。

```
document.getElementById("btn1").classList.toggle("blue”,  “bold");
document.getElementById("btn1").classList.toggle("red”,  “italics");
```
`classList`浏览器支持情况如图，如果要兼容 IE，那基本就用不到这个属性了。

![](http://sinchang.qiniudn.com/screenshot%201.png)

### jQuery

利用 jQuery 来实现 class 切换的话能保证有良好的浏览器的兼容性，代码也很简单。

```js
function toggleColor() {
	$("#btn1").toggleClass("blue");
	$("#btn1").toggleClass("red");  
}
```
当然也可以添加多个 class。

```js
$("#btn1").toggleClass("blue bold");
$("#btn1").toggleClass("red italics");
```
### 原文链接
- [How to Add/Remove CSS classes using JavaScript](http://appendto.com/2016/02/addremove-css-classes-using-javascript/)

