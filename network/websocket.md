## Websocket:

HTML5出的协议，和HTTP协议基本没有关系，知识为了兼容现有浏览器的握手规范

![img](https://pic2.zhimg.com/80/6651f2f811ec133b0e6d7e6d0e194b4c_720w.jpg?source=1940ef5c)

Websocket是持久化的协议，而HTTP是非持久化协议

* HTTP的生命周期通过request来界定，也就是一个Request一个Response，在HTTP1.0中这次HTTP请求就结束了。
* HTTP1.1中进行了改进，增加了keep-alive，也就是说可以发送多个request和接收多个response但是Request = Response
* Websocket借用了HTTP协议完成一部分握手（建立通道）

![img](https://pic3.zhimg.com/80/v2-9e38e379c1597bd3e45ef5f37c08eaeb_720w.jpg)

websocket的作用：

* 用来弥补http协议在持久通信能力上的不足
* 服务器可以主动给客户端发送数据
* Websocket协议建立后，相互沟通所消耗的请求头是很小的

应用场景：

* 即时聊天通信
* 多玩家游戏
* 在线协同编辑
* 实时数据流的拉取与推送
* 体育/游戏实况
* 实时地图位置