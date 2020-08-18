// we'll make worker.slow caching
let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      // scary CPU-heavy task here
      console.log("Called with " + x);
    //   console.log(this);
      return x * this.someMethod(); // (*)
    //   return x * this.someMethod();
    }
  };
  
  // same code as before
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      console.log(this);
      if (cache.has(x)) {
        console.log("original");
        return cache.get(x);
      }
      let result = func.call(this, x); // (**)
      cache.set(x, result);
      return result;
    };
  }
  
  console.log( worker.slow(1) ); // the original method works
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
  
  console.log( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined
  console.log( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined

