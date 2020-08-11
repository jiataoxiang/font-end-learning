## session在集群/分布式环境下的影响：

在搭建完集群环境后，不得不考虑的一个问题就是用户访问产生的session如何处理。如果不做任何处理的话，用户将出现频繁登录的现象，比如集群中存在A、B两台服务器，用户在第一次访问网站时，Nginx通过其负载均衡机制将用户请求转发到A服务器，这时A服务器就会给用户创建一个Session。当用户第二次发送请求时，Nginx将其负载均衡到B服务器，而这时候B服务器并不存在Session，所以就会将用户踢到登录页面。这将大大降低用户体验度，导致用户的流失，这种情况是项目绝不应该出现的。