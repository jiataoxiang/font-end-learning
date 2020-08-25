## 万恶的This：

* 默认绑定：window

* 隐式绑定：function被object调用，this指向object

* 显式绑定：call，apply，bind

* new绑定：

  * 创建一个全新的对象
  * 执行prototype连接
  * 新对象绑定函数调用的this
  * 如果函数没有返回其他对象，会自动返回这个对象

  ```javascript
  function new(constructor, ...args) {
      let obj = {};
      Object.setPrototypeOf(obj, constructor.prototype);
      return Constructor.apply(obj, args) || obj;
  }
  ```

* 优先级：

  * new >  显示绑定 > 隐式绑定 > 默认绑定