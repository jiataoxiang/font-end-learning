## HTTP:

* URI（Uniform Resourse Identifier）: 包括URL（Uniform Resource Locator）和URN（Uniform Resource Name）
* 请求报文和响应报文
* 长连接：简历一次TCP连接就能进行多次HTTP通信。从HTTP/1.1开始默认是长连接，之前默认是短链接
* HttpOnly的Cookie不能被JS的脚本调用，所以可以一定程度上避免XSS攻击
* 



Cookie和Session的选择：

- Cookie 只能存储 ASCII 码字符串，而 Session 则可以存储任何类型的数据，因此在考虑数据复杂性时首选 Session；
- Cookie 存储在浏览器中，容易被恶意查看。如果非要将一些隐私数据存在 Cookie 中，可以将 Cookie 值进行加密，然后在服务器进行解密；
- 对于大型网站，如果用户所有的信息都存储在 Session 中，那么开销是非常大的，因此不建议将所有的用户信息都存储到 Session 中。