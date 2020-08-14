## Fiddler：

![img](https://pic3.zhimg.com/80/v2-c086e7352fc646f8951562248f8dc9e9_720w.jpg)

* 当启动fiddler，程序将会把自己作为一个代理，所以的http请求在达到目标服务器之前都会经过fiddler，同样的，所有的http响应都会在返回客户端之前流经fiddler
* Fiddler最强大的功能莫过于设置断点

第一种：打开fiddler点击Rules->Automatic Breakpoint->Before Requests(这种方法会中断所有的会话)

消除办法：点击Rules->Automatic Breakpoint->Disabled