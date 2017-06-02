---
title: Node 与 Element 的关系
date: 2017-06-01
tags:
- DOM
- Javascipt
categories:
- Javascipt
---
前几天去面试，被问到一个关于 DOM 的问题，如下：
```js
<div id="box">
  <h1>title1</h1>
  <h2>title2</h2>
</div>
```
请问以上代码中 `div` 的 `childNodes` 的长度是多少？其实是个很基础的问题，但是当时我问答的数量是错误的，回来研究了下其实这里面有很多学问。

### Node 是什么？

根据《JavaScript 高级程序设计》书里面的表述：
> DOM1 级定义了一个 Node 接口，该接口将由 DOM 中所有节点类型的实现。这个 Node 接口在 JavaScript 中作为 Node 类型的实现。JavaScript 中的所有节点类型都继承自 Node 类型。

实际上 Node 表示的是 DOM 树的结构，常见的节点类型有：

| 常量 | 值 (nodeType) | 描述 |
| ------| ------ | ------ |
| Node.ELEMENT_NODE | 1 | 一个元素节点，例如 `<p>` 和 `<div>` |
| Node.TEXT_NODE | 3 | Element 或者 Attr 中的文字 |
| Node.PROCESSING_INSTRUCTION_NODE | 7 | 一个用于 xml 文档的 ProcessingInstruction，例如 <?xml-stylesheet ... ?> 声明 |
| Node.COMMENT_NODE | 8 | 一个注释节点 |
| Node.DOCUMENT_NODE | 9 | 一个文档节点 |
| Node.DOCUMENT_TYPE_NODE | 10 | 描述文档类型的 DocumentType 节点。例如 <!DOCTYPE HTML> |
| Node.DOCUMENT_FRAGMENT_NODE | 11 | 一个 DocumentFragment 节点 |

每个节点都有 `nodeType`、`nodeName` 和 `nodeValue` 属性。以上述的 `<div id="box"></div>` 为例，那么它的 `nodeName` 为 `DIV`,`nodeType` 为 `1`，`nodeValue` 为 `null`。

> [Node.nodeValue](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeValue)：对于文档节点来说，nodeValue 返回 null. 对于 text, comment, 和 CDATA 节点来说，nodeValue 返回该节点的文本内容。对于 attribute 节点来说，返回该属性的属性值。

### Element 是什么？

从上述的介绍中我们可以知道 Element 是 Node 多种类型中的一种，它继承自 Node。
```js
Element.prototype instanceof Node // true
```
另外 Element 扩展了 Node，Element 拥有 id、class、children 等属性。

### NodeList 是什么？

NodeList 是节点集合，在最新 Chrome 中测试，someNode.childNodes、node.querySelectorAll 和 node.getElementsByName 返回的就是 NodeList。
 
以上述的 `<div id="box"></div>` 为例，它的 `childNodes.length = 5`，其中元素之间的空白字符，当做为文本节点。但是如果换下 HTML 排版把它们放在同一行

```html
<div id="box"><h1>title1</h1><h2>title2</h2></div>
```
那么它的 `childNodes.length = 2`。

节点的其他属性还有：
- parentNode
- nextSibling
- previousSibling
- firstChild === someNode.childNodes [0]
- lastChild === someNode.childNodes [someNode.childNodes.length - 1]

### HTMLCollection 是什么？

HTMLCollection 是元素集合，在最新 Chrome 中测试，node.children 和 node.getElementsByXXX 返回的就是 HTMLCollection。node.getElementsByName 返回的是 NodeList。

参考资料：
- [why Element instanceof Node return false](https://stackoverflow.com/questions/42685328/why-element-instanceof-node-return-false)
- [Element 和 Node 的区别你造吗？](http://www.jianshu.com/p/695b5c78a7ca)
- [JavaScript 中 Element 与 Node 的区别，children 与 childNodes 的区别](http://www.cnblogs.com/jscode/archive/2012/09/04/2670819.html)
- [NodeList 和 HTMLCollection 之间的关系？](https://www.zhihu.com/question/31576889/answer/52559370)
