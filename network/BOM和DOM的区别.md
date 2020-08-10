## BOM和DOM的区别：BOM包含了DOM

DOM： document object model文档对象模型，提供操作页面元素的方法和属性

是为了操作文档出现的接口

位置： 通过浏览器的地址栏输入URL然后回车将这个document加载到本地，浏览

Document根节点包含子节点：forms，embeds，anchors，images，links

BOM： browser object model浏览器对象模型，提供一些属性和方法可以操作浏览器，核心是windows。windows对象包涵的属性document，location，navigator，screen，history，frames。

为了控制浏览器的行为而出现的接口：为了解决页面跳转，前进，后退，获取屏幕大小

location.href = "http://www.xxx.com"里的location就是BOM里的一个对象

位置：浏览器的标签页，地址栏，搜索栏，书签栏，滚动条，DOM加载状态

![img](https://user-gold-cdn.xitu.io/2019/9/10/16d191f327978675?imageslim)

DOM描述了处理网页内容的方法和接口，BOM描述了与浏览器进行交互的方法和接口

DOM的节点：

元素节点：html，body， p等标签

文本节点：

* 属性节点：a中的链接属性href=“http://www.xxx.com”.
* 查找元素：getElementById， getElementByTagName，getElementByName，getAttribute。。

元素节点属性：

* nodeName返回一个字符串，其内容是节点的名字
* nodeType返回一个整数，这个数值代表给定节点的类型
* nodeValue返回给定节点的当前值

遍历节点树：

* childNodes返回一个数组，这个数组由给定元素的子节点构成
* firstChild返回第一个子节点
* lastChild
* parentNode
* nextSibling
* previousSibling

DOM操作：

* creatElement
* creatTextNode
* appendChild
* insertBefore
* removeChild
* replaceChild

BOM部分：（核心是window，而window对象又具有双重角色，它既是通过js访问浏览器窗口的一个接口，又是一个Global全局对象）

* document对象
* location对象
* navigator对象
* screen对象





