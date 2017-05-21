---
title: 阅读《闲谈CSS那些事儿》总结
date: 2016-05-28
tags:
- CSS
categories:
- CSS
---
今天晚上翻看了林小志的微信公众号《闲谈CSS那些事儿》，从中涨了很多知识，想着还是开个贴记录下。

### border-radius
`border-radius` 属性我们一般都会写 `borde-radius = 5px` 这种形式，其实它还可以这么写：

```css
border-radius: 15px 5px;
border-radius: 15px 5px 25px;
border-radius: 15px 5px 25px 0px;
border-radius: 15px 5px / 3px;
border-radius: 15px 5px 25px / 3px 5px;
border-radius: 4px 3px 6px 5px/ 2px 4px 3px 5px;
//border-radius还可以用斜杠设置第二组值。这时，第一组值表示水平半径，第二组值表示垂直半径。第二组值也可以同时设置1到4个值，应用规则与第一组值相同。
```
还可以设置单个圆角的大小：

* border-top-left-radius
* border-top-right-radius
* border-bottom-right-radius
* border-bottom-left-radius

`border-radius` 属性详解可以看阮一峰老师的文章[《CSS3圆角详解》](http://www.ruanyifeng.com/blog/2010/12/detailed_explanation_of_css3_rounded_corners.html)。
<!-- more -->
### 实现两端对齐

主要用到的两个属性是：

- text-align:justify
- display: inline-block;

具体代码可以见林老师的[demo](http://linxz.github.io/CSS_Skills/wechat/auto_step.html#rd)

### text-indent

一般使用在文字的缩进上，它其实还可以设置为负值，可以向段落文字外面伸出。

### line-height

常见 `line-height` 几个属性值的区别你了解吗？

- line-height: 20px;
- line-height: 2em;
- line-height: 2;
- line-height: 200%;

详细分析可见

- [深入了解css的行高Line Height属性](http://www.cnblogs.com/fengzheng126/archive/2012/05/18/2507632.html)

- [css行高line-height的一些深入理解及应用](http://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)

一般推荐使用无单位数值给 `line-height` 赋值。

### vertical-align

`vertical-align` 属性只对行内元素有效，行内元素还包括图片、表单输入元素等，同时，垂直对齐不能被继承。

![](http://sinchang.qiniudn.com/text_036.gif)

详细分析请看文章[垂直对齐：vertical-align属性](http://www.ddcat.net/blog/?p=233)

### box-sizing

一般开发的时候会使用

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

### border 到时是 0 还是 none

结论是使用 `border: 0 none;`

### CSS 选择符
![](http://sinchang.qiniudn.com/getmediadata.jpeg)

### PS 字符面板与样式息息相关
![](http://sinchang.qiniudn.com/640.jpg)

### 纯 CSS 实现星星评级制作

```html
<div class="demo">
	<input type="radio" name="" id="">
	<input type="radio" name="" id="">
	<input type="radio" name="" id="">
	<input type="radio" name="" id="">
	<input type="radio" name="" id="">
</div>
```

```css
demo input {
    float: right;
    /* 所有input（星星）向右浮动，形成“倒序”形式 */
    width: 44px;
    height: 44px;
    -webkit-appearance: none;
    /* 去掉input默认样式 */
    outline: none;
    border: 0 none;
    background: url(img/demo_001-star-rating.png) 0 -44px no-repeat;
    opacity: .3;
    transition: all 100ms linear;
    /* 增加过渡效果 */
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.demo input:hover,
.demo input:hover ~ input {
    opacity: 1;
}

.demo input:checked,
.demo input:checked ~ input {
    background-position: 0 0;
    /* input选中状态切换背景图 */
    opacity: 1;
}
```
[demo](http://linxz.github.io/CSS_Skills/wechat/demo_001-star-rating.html#rd)

欢迎扫描二维码关注他的微信公众号

![](http://linxz.github.io/CSS_Skills/wechat/img/qrcode_talk-css.jpg)

