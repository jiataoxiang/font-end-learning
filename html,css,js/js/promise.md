## Promise原理：

* 三种状态：pending，resolve， reject
* 两种结果：onFulfilled，onRejected

```javascript
class myPromise {
	constructor(executor) {
        this.state = "pending";
     	this.val = undefined;
    	this.err = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
		const resolve = (value) => {
            // only execute when state is pending
			if(this.state === 'pending') {
                this.state = "fulfilled";
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
		}
		
		const reject = (err) => {
			if(this.state === 'pending') {
                this.state = "rejected";
                this.err = err;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
		}
	}
    
    then(onFulfilled, onRejected) {
        const p2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                // consider event loop
                setTimeout(() => {
                    const x = onFulfilled(this.value);
                    resolvePromise(p2, x, resolve, reject);
                }, 0)
            	
            } 
            if (this.state === 'rejected') {
                setTimeout(() => {
                    const x = onRejected(this.err);
                    resolvePromise(p2, x, resolve, reject);
                }, 0)
            }

            if (this.state === 'pending') {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                    	const x = onFulfilled(this.value);
                    	resolvePromise(p2, x, resolve, reject);
                	}, 0)
                })
                this.onRejectedCallBacks.push(() => {
                    setTimeout(() => {
                    	const x = onRejected(this.err);
                    	resolvePromise(p2, x, resolve, reject);
                	}, 0)
                })
            }
        }) 
         return p2;
    }
    
     
    resolvePromise(promise2, x, resolve, reject) {
        console.log(promise, x, resolve, reject);
        if (promise2 === x) {
            return reject(new TypeError("循环因果"));
        }
        
    }
    
}

// 发布订阅者模式
```

