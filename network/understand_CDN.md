CDN大概过程（Content Delivery Network 内容分发网络）

简介：CDN将源站内容发布到接近用户的网络“边缘”，用户可以就近获取所需数据，不仅降低了网络拥塞状况，提高请求的响应速度，也减少了源站的负载压力。

### 源站的访问过程（不使用缓存）：



![img](https://user-gold-cdn.xitu.io/2019/6/24/16b87f006a1ab7bd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

注意：客户端向本地DNS发起的查询属于递归，本地DNS向外网DNS发起的请求属于迭代。

当我们要访问某个网站时，客户端首先会在本机的hosts文件和hosts缓存中查找该域名对应的IP地址，如果本机中没有这个IP地址的话，就会到我们的本地DNS进行询问。

DNS系统中，最常见的资源记录方式是Internet类记录，该记录包含4个字段的数据构成：Name，Value，Type， TTL（应当从缓存中删除的时间）

接下来说一下DNS的记录类型（Type）：

* A记录（Address）：描述域名到IP地址的关系。将目标域名与A记录的Name字段进行匹配，将成功匹配的的记录的Value字段的内容输出到DNS回应报文中
* CNAME记录：描述域名到别名的关系。

### 通过CDN获取缓存的过程

![img](https://user-gold-cdn.xitu.io/2019/6/24/16b87f0340a17453?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

DNS解析域名时新增了

* GSLB（全局负载均衡系统）：它的功能是根据本地DNS的IP地址判断用户的位置，筛选出距离用户最近的SLB
* SLB（本地负载均衡系统）：它负责判断缓存服务器集群中是否包含用户请求的资源数据，如果缓存服务器中存在请求资源，就会更具缓存服务器中节点的健康程度，负载量等多种因素筛选出最优的缓存节点，并将http的请求重定向到最有的缓存节点上

原理：

1. 当用户发送`request.com`的请求后，查看本地DNS缓存中是否存在对应IP
2. 没有的话则通过本地DNS迭代解析IP：根DNS -> 顶级DNS -> 权威DNS
3. 当权威DNS找到一条NAME字段为 `request.com`的CNAME记录，该记录的Value为`request.cdn.com`，并且找到另一条NAME字段为`request.cdn.com`的A记录，该记录的Value字段为GSLB的IP地址
4. GSLB根据本地DNS大概判断用户的地址筛选出最近的SLB，将IP返回给客户端
5. 客户端向SLB发送请求，SLB综合考虑缓存服务器的各种情况，选出最优的缓存节点回应客户端的HTTP请求
6. 客户端接收到SLB的HTTP回复后重新定向到改缓存节点上
7. 缓存节点判断请求资源是否存在，存在的话就直接返回给客户端，不存在则进到源站进行数据更新再回复。



以上仅是自己学习整理的笔记，方便日后观看

原文出处： https://juejin.im/post/6844903873518239752