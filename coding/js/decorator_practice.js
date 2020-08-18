// function work(a, b) {
//     console.log( a + b ); // work is an arbitrary function or method
// }
// // spy decorator
// function spy(fn) {
//     function wraper(...args) {
//         wraper.calls.push(args);
//         return fn.apply(this, args);
//     }
//     wraper.calls = [];
//     return wraper;
// }


// work = spy(work);
// work(1, 2); // 3
// work(4, 5); // 9
// console.log(work.calls);

// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// // delay decorator

// function delay(fn, time) {
    
//     return function(...args) {
//         setTimeout(() => {fn.apply(this, args)}, time);
//     }
// }

// work = delay(work, 1000);

// work(1, 2); // 3
// work(4, 5); // 9


class Animal {
    showName() {  // instead of this.name = 'animal'
      console.log('animal');
    }
  
    constructor() {
      this.showName(); // instead of console.log(this.name);
    }
  }
  
  class Rabbit extends Animal {
    showName() {
      console.log('rabbit');
    }
  }
  
  new Animal(); // animal
  new Rabbit(); // rabbit