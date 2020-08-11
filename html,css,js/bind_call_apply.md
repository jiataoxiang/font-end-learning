## call：

```javascript
function.prototype.call = function(ctx, ...args) {
    // 将方法挂载在我们传入的对象上， 将挂载以后的对象调用，删除，
    ctx.fn = this;
    ctx.fn(...args);  
    delete ctx.fn
}
```



## apply：

```javascript
function.prototype.apply(ctx, args = []) {
    if (agrs && !(agrs instanceof Array)) {
        throw("only arrays");
    }
    ctx.fn = this;
    ctx.fn(...args);
    delete ctx.fn;
}
```



## bind:

```javascript

//返回值是一个函数
function.prototype.bind(ctx, ...args1) {
    return (...args2) => {
        ctx.fn = this;
        ctx.fn(...args1.concat(args2));
        delete ctx.fn;
    }
}

```

