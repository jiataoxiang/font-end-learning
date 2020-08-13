## Intro to JavaScript:

recommend webpage: https://javascript.info/

Initially created to make web pages alive. The program in this language are called scripts, and can be written right in a web page's HTML and run automatically as the page loads.

The browser has an embedded engine sometimes called a "JavaScript virtual machine". Different engines have different "codenames". For example: 

* V8 - in Chrome and Opera
* SpiderMonkey in Firefox

The engine reads the script and convert it to the machine language, and then the machine code runs, pretty fast.

JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that's safety limitation. Such limits do not exist if JavaScript is used outside of the browser, for example on a server. Modern browser also allow plugin/extensions which may ask for extended permissions.

The syntax of JavaScript does not suit everyone's needs. Different people want different features, so recently a plethora of new languages appeared, which are transpiled to JavaScript before they run in the browser. (CoffeeScript, TypeScript, Flow, Dart)

ECMAScript: specification that contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.

Use Chrome or Firefox for development because those browser have the best developer tools.

## Fundamentals:

* <script type="text/javascript"> 
      // tag: type attribute (it not required anymore)
  </script>

* <script src="/path/to/script.js">
      // external scripts, or you can give a full URL as well.
      // like src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
      // More complex file should reside in separate file, The benefit of a separate file is that the browser will download it and store it in cache
  </script>

* <script>
      // if src is set, the script content is ignored.
  </script>

### Code Structure:

* statement CAN be separated with a semicolon

* JavaScript does not assume a semicolon before square brackets `[...]`

* Please make sure that `"use strict"` is at the top of your scripts, otherwise strict mode may not be enabled. (cannot cancel after activate the mode)

* If you use `classes` or `modules`, use strict will be enabled automatically

* Variables:

  * ```javascript
    // first way
    let test;
    test = 'Hello'
    // second way
    let user = 'John', age = 25, message = 'Hello';
    // or in multiple lines separated by comma
    ```

  * var: var variable will be hoist up, and have function scope instead of block scope.

  * camelCase for name convention

  * `$` and `_` can also be used without any special meaning. Besides, name must contain only letter, digits and above two symbols, and first character must not be a digit. (case matters)

  * `let, class, return, and function` are reserved, which cannot be used as variable names because they are used by language itself.

  * `const` is similar to let, but the value cannot be changed (capital-named constants are only used as aliases for "hard-coded" values)

* Data Types:

  * number, BigInt(add n to the end), string(Double quote, Single quote, Backticks), boolean, null, undefined, Symbol (create unique identifiers for object), Object
  * typeof: works for primitive types except null. typeof null is object

* Interaction: alert, prompt, confirm

  * alert: It shows a message and waits for the user to press "OK".
  * prompt: accept title and default (initial value for the input field). It shows a modal with a text message, an input field for the visitor, and the buttons OK/Cancel.
  * confirm: shows a modal window with a question and two button: OK and Cancel, return value true or false.

* Type Conversions:

  * String Conversion: String(value)
  * Numeric Conversion: happens in mathematical functions and expressions automatically. Number(val), undefined => NaN, null => 0, true/false => 1/0, string => white space from start to end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is "read" from the string. An error gives NaN
  * Boolean Conversion: Boolean(val), value that are intuitively "empty", like 0, an empty string, null, undefined, and NaN, become false. Other value become true.

* String concatenation with binary +, chaining assignment, comma operator (rarely used)

* Comparisons: comparing values of different types, JS converts the values to numbers. === checks the equality without type conversion. 

* Undefined incomparable (all false),  (null >= 0 / true, null > 0 / false, null  == 0 / false, undefined == null)

* if ... else if ... else, question mark ternary (let a = (age > 18) ? value1 : value2), could use a sequence of question mark operators

*  || could used to find the first truthy value, && could used to find the first falsy value, precedence of && is higher than ||

* Nullish coalescing operator `??` , `a ?? b` means choose a if a is not null or undefined, otherwise b. `||` returns the first truthy value

* While loop: while(condition) {}, do {} while (condition)

* for (begin; condition; step) {}, we can omit begin, condition or step as needed

* label name for break, labelName: for ( break labelName;) {} this will break the loop all the way to labelName.

* switch statement:  (could group cases)

  ```javascript
  switch (x) {
      case'val0':
      case 'val1':
          [break]
      case 'val2':
          [break]
      default:
          [break]
  }
  ```

* Function:

  * ```javascript
    function showMessage() {
        
    }
    ```

  * A function can access an outer variable, but only used when there is no local one

  * If a parameter is not provided, then its value becomes undefined

  * if a function does not return a value, it is the same as if it returns undefined.

  * Function expressions: 

    ```javascript
    let showMessage = function showMessage() {
        
    };
    ```

    need a semicolon above. A function expression is created when the execution reaches it and is usable only from that moment. A Function Declaration can be called earlier than it is defined. In strict mode, function declaration is within a code block.

  * call back function, function as input of a function.


## Code Quality:

* source panel

* debugger command:

  ```javascript
  function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    debugger;  // <-- the debugger stops here
  
    say(phrase);
  }
  ```

* Could use Automated Linters to check the style of your code.

* Automated testing with Mocha:

  ```javascript
  describe("title", function() {
      it("use case expression", function() {
         assert.equal(pow(2, 3), 8); 
      });
  })
  ```

  Mocha: core test framework, Chai: library with many assertions, Sinon: library to spy over functions

* Babel: transpiler. A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

* 

## Objects:

* There are 8 data types in JS, 7 of them are called primitive, the other is called Object.

* object declared as const can be modified

* Computed properties:

  ```javascript
  let fruit = prompt("Which fruit to buy?", "apple");
  
  let bag = {
      [fruit]: 5,
  };
  
  // bag[fruit] = 5; works the same
  
  alert(bag.apple); // 5 if fruit === "apple"
  ```

* property value short hand

  ```javascript
  function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }
  ```

* property name can not be reserved words

* property existence test, "in" operator

* for ... in loop, loop through object

  ```javascript
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }
  ```

* One fundamental differences of objects vs primitives is that they are stored and copied by reference.

* Cloning and merging, Object.assign

  ```javascript
  //Object.assign(dest, [src1, src2, src3...])
  let user = { name: "John" };
  
  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };
  
  // copies all properties from permissions1 and permissions2 into user
  Object.assign(user, permissions1, permissions2);
  
  // now user = { name: "John", canView: true, canEdit: true }
  ```

  if the copied property name already exists, it gets overwritten

* Garbage-Collection:

  * The basic garbage collection algorithm is called "mark-and-sweep"
  * The following gc steps are regularly performed
    * The garbage collector takes roots and mark them
    * Then it visits and marks all references from them
    * Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future
    * And so on until every reachable references are visited
    * All objects except marked ones are removed
  * JS engines apply many optimizations to make it run faster and not affect the execution
  * Optimizations:
    * Generational collection: objects are split into two sets: “new ones” and “old ones”. Many objects appear, do their job and die fast, they can be cleaned up aggressively. Those that survive for long enough, become “old” and are examined less often.
    * Incremental collection: the engine tries to split the garbage collection into pieces. Then the pieces are executed one by one, separately. That requires some extra bookkeeping between them to track changes, but we have many tiny delays instead of a big one.
    * Idle-time collection:  the garbage collector tries to run only while the CPU is idle

* Object method, "this":

  * To access the object, a method can use the this keyword.

  * calling without object, this become undefined

    ```javascript
    function sayHi() {
      alert(this);
    }
    
    sayHi(); // undefined
    ```

  * arrow functions are special, they don't have their own this, it uses this from the outer scope that has this.

* Constructor

  * ```javascript
    // to implement reusable object creation code.
    function User(name) {
      this.name = name;
      this.isAdmin = false;
    }
    
    let user = new User("Jack");
    // trick
    function User(name) {
      if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
      }
    
      this.name = name;
    }
    
    let john = User("John"); // redirects call to new User
    alert(john.name); // John
    ```

* Optional chaining: `?.` stops the evaluation and returns undefined if the part before `?.` is undefined or null.

  ```javascript
  let user = {}; // user has no address
  
  alert( user?.address?.street ); // undefined (no error)
  ```

  `?.` is not an operation, but a special syntax construct, that also works with function and square brackets.

  ```javascript'
  let user1 = {
    admin() {
      alert("I am admin");
    }
  }
  
  let user2 = {};
  
  user1.admin?.(); // I am admin
  user2.admin?.();
  
  delete user?.name; // delete user.name if user exists
  ```

  

* Symbol type:

  * Symbols don't auto convert to a string

    ```javascript
    let id = Symbol("id");
    alert(id.toString()); // Symbol(id), now it works
    alert(id.description); // id
    ```

  * If we want to use a symbol in an object literal {...}, we need square brackets around it.

  * Symbols are skipped by for...in

  * In contrast, Object.assign copies both string and symbol properties.

  * Global symbols: 

    ```javascript
    // read from the global registry
    let id = Symbol.for("id"); // if the symbol did not exist, it is created
    
    // read it again (maybe from another part of the code)
    let idAgain = Symbol.for("id");
    
    // the same symbol
    alert( id === idAgain ); // true
    
    // get symbol by name
    let sym = Symbol.for("name");
    let sym2 = Symbol.for("id");
    
    // get name by symbol
    alert( Symbol.keyFor(sym) ); // name
    alert( Symbol.keyFor(sym2) ); // id
    ```

* Object to primitive conversion:

  * All object are true in a boolean context.

  * The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date object can be subtracted, and the result of `date1 - date2` is the time difference between two dates.

  * As for the string conversion - it usually happens when we output an object like `alert(obj)` and in similar contexts.

  * ToString

    ```javascript
    // output
    alert(obj);
    
    // using object as a property key
    anotherObj[obj] = 123;
    ```

  * ToNumber

    ```javascript
    // explicit conversion
    let num = Number(obj);
    
    // maths (except binary plus)
    let n = +obj; // unary plus
    let delta = date1 - date2;
    
    // less/greater comparison
    let greater = user1 > user2;
    ```

  * default

    ```javascript
    //Occurs in rare cases when the operator is "not sure" what type to expect
    // binary plus uses the "default" hint
    let total = obj1 + obj2;
    
    // obj == number uses the "default" hint
    if (user == 1) { ... };
                    
    // < > can work with both strings and numbers too. Still, they use the "number" hint, not "default". That's for historical reasons.
    // all build-in objects except for one case (Date Object) implement "default" conversion the same way as "number".
    ```

  * To do the conversion, JS tries to find and call three object methods.

    ```javascript
    // Obj[Symbol.toPrimitive](hint) - the method with the symbolic key Symbol.toPrimitive, if such method exists.
    // if hint is "string" - try obj.toString() and obj.valueOf()
    // if hint is "number" or "default" - try obj.valueOf() and obj.toString()
    let user = {
      name: "John",
      money: 1000,
    
      [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
      }
    };
    
    // conversions demo:
    alert(user); // hint: string -> {name: "John"}
    alert(+user); // hint: number -> 1000
    alert(user + 500); // hint: default -> 1500
    ```

    By default, a plain object has following `toString` and `valueOf` methods:

    - The `toString` method returns a string `"[object Object]"`.
    - The `valueOf` method returns the object itself.
    - Historical reasons, if toString or valueOf returns an object, there's no error, but such value is ignored. That’s because in ancient times there was no good “error” concept in JavaScript.In contrast, `Symbol.toPrimitive` *must* return a primitive, otherwise there will be an error.

* DataTypes

  * Methods of primitives (null / undefined have no methods)

  * **Constructors** `String/Number/Boolean` **are for internal use only**

  * **Number**:

    * In JavaScript, we shorten a number by appending the letter `"e"` to the number and specifying the zeroes count:

      ```
      let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
      
      alert( 7.3e9 );  // 7.3 billions (7,300,000,000)
      ```

    * hex(0x),  binary(0b), octal(0o)

    * toString(base) will give you string representation

    * If we want to call a method directly on a number, like `toString` in the example above, then we need to place two dots `..` after it.

    * Rounding: Math.floor(), Math.ceil(), Math.round(), Math.trunc() removes anything after the decimal point.

    * num.toFixed(num), keep number of decimals, round up

    * there might be imprecise calculations, because numbers are stored in binary

    * isNaN(val) converts its argument to a number and then tests it for being NaN

    * NaN is unique, that is NaN === NaN will return false.

    * Object.is(NaN, NaN) === true, Object.is(0, -0) === false

    * parseInt(str, radix = base), parseFloat

    * Math.random(), Math.max(), Math.pow(n, power)

  * String:

    * string.length (property)

    * get char at position: str[0] or str.charAt(0)

    * strings are immutable, cannot change

      ```javascript
      let str = 'Hi';
      
      str[0] = 'h'; // error
      alert( str[0] ); // doesn't work
      ```

      

    * str.toUpperCase(), str.toLowerCase()

    * str.indexOf(substr, pos): pos is starting position

    * str.lastIndexOf(substr, pos)

    * bitwise not trick: `~2`, the same as - (2 + 1)

      ```javascript
      let str = "Widget with id";
      
      if (str.indexOf("Widget") != -1) {
          alert("We found it"); // works now!
      }
      
      let str = "Widget";
      
      if (~str.indexOf("Widget")) {
        alert( 'Found it!' ); // works
      }
      ```

      

    * str.includes(substr, pos), str.startWith(substr), str.endWith(substr)

    * str.slice(start, end)L return the part of the string from start to end(not including)

    * str.substring(start, end): this is similar to slice but it allows start to be greater than end 

    * str.substr(start, length)

    * str.codePointAt(pos): return the code for the character at position pos

      ```javascript
      // different case letters have different codes
      alert( "z".codePointAt(0) ); // 122
      alert( "Z".codePointAt(0) ); // 90
      ```

    * String.fromCodePoint(code): creates a char by its numeric code

    * str.split(", ") will split str into arr. str.split("") will split into letters

  * Arrays

    * ```javascript
      let arr = new Array();
      let arr = [];
      ```

    * array.push( elm ): appends an element to the end

    * array.shift(): get an element from the beginning, advancing the queue

    * array.pop(): takes an element from the end

    * array.unshift( elm ): add a element to the beginning of the array

    * Performance: methods push/pop run fast, while shift/unshift are slow

    * loops: for (let fruit of arr) {console.log(fruit)}

    * for (let key in arr) {console.log(arrp[key])}

    * for...in  loop is optimized for generic objects, not arrays, and thus 10-100 times slower, but still very fast. Generally shouldn't use for...in for arrays

    * ```javascript
      let fruits = [];
      fruits[123] = "Apple";
      
      alert( fruits.length ); // 124
      ```

    * Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, they implement only `toString` conversion,

    * array.splice(1, 1): from index 1 remove 1 element

    * ```javascript
      // used to remove
      let arr = ["I", "study", "JavaScript", "right", "now"];
      
      // remove 3 first elements and replace them with another
      arr.splice(0, 3, "Let's", "dance");
      
      alert( arr ) // now ["Let's", "dance", "right", "now"]
      ```

    * ```javascript
      // used to insert
      let arr = ["I", "study", "JavaScript"];
      
      // from index 2
      // delete 0
      // then insert "complex" and "language"
      arr.splice(2, 0, "complex", "language");
      
      alert( arr ); // "I", "study", "complex", "language", "JavaScript"
      ```

    * negative indexes allowed

    * arr.slice(start, end)

    * arr.concat(arg1, arg2)

    * [Symbol.isConcatSpreadable]: true

      ```javascript
      let arr = [1, 2];
      
      let arrayLike = {
        0: "something",
        1: "else",
        [Symbol.isConcatSpreadable]: true,
        length: 2 // need add length
      };
      
      alert( arr.concat(arrayLike) ); // 1,2,something,else
      ```

    * arr.forEach(function)

    * arr.indexOf(item, from), arr.lastIndexOf(item, from), arr.includes(item, from)

    * arr.find(item => item.id == 1), arr.filter(item.id => item !== 1). If it returns `true`, the search is stopped, the `item` is returned. If nothing found, `undefined` is returned.

    * arr.map(function): create a new array

    * arr.sort() // items are sorted as string by default.

      ```javascript
      let arr = [ 1, 2, 15 ];
      
      // the method reorders the content of arr
      arr.sort();
      
      alert( arr );  // 1, 15, 2
      
      function compare(a, b) {
        if (a > b) return 1; // if the first value is greater than the second
        if (a == b) return 0; // if values are equal
        if (a < b) return -1; // if the first value is less than the second
      }
      arr.sort(compare);
      alert(arr);  // 1, 2, 15
      arr.sort(function(a, b) { return a - b; });
      ```

    * arr.reverse()

    * arr.join(";"): will glue the array into a string using `;`.

    * arr.reduce(fn, initial)

      ```javascript
      arr.reduce((sum, current) => sum + current);
      ```

    * Array.isArray()

    * thisArg can pass as context

  * Iterables:

    * Symbol.iterator

      ```javascript
      let range = {
        from: 1,
        to: 5
      };
      
      // 1. call to for..of initially calls this
      range[Symbol.iterator] = function() {
      
        // ...it returns the iterator object:
        // 2. Onward, for..of works only with this iterator, asking it for next values
        return {
          current: this.from,
          last: this.to,
      
          // 3. next() is called on each iteration by the for..of loop
          next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
              return { done: false, value: this.current++ };
            } else {
              return { done: true };
            }
          }
        };
      };
      
      // now it works!
      for (let num of range) {
        alert(num); // 1, then 2, 3, 4, 5
      }
      ```

    * string is iterable

    * Iterables are objects that implement the Symbol.iterator method.

    * Array-likes are objects that have indexes and length, so they look like arrays

    * Array.from(obj, map_fn ): it takes an iterable or array-like value and makes a “real” `Array` from it. The optional second argument `mapFn` can be a function that will be applied to each element before adding it to the array, and `thisArg` allows us to set `this` for it.

  * Map and Set

    * new Map(), map.set(key, val), map.get(key), map.has(key), map.delete(key), map.clear(), map.size

    * For Object, you can't use object as key.

    * NaN can be used as key as well

    * Every `map.set` call returns the map itself, so we can “chain” the calls

    * iteration over map: map.keys(), map.values(), map.entries()

    * When a `Map` is created, we can pass an array (or another iterable) with key/value pairs for initialization

    * If we have a plain object, we can create a map:

      ```javascript
      let obj = {
        name: "John",
        age: 30
      };
      
      let map = new Map(Object.entries(obj));
      
      alert( map.get('name') ); // John
      // Object.fromEntries does the reverse
      let prices = Object.fromEntries([
        ['banana', 1],
        ['orange', 2],
        ['meat', 4]
      ]);
      
      // now prices = { banana: 1, orange: 2, meat: 4 }
      
      alert(prices.orange); // 2
      ```

  * Set

    * new Set(iterable), set.add(value), set.delete(value), set.has(value), set.clear(), set.size
    * We can loop over a set either with `for..of` or using `forEach`

  * WeakMap and WeakSet

    * WeakMap is fundamentally different in the aspect of garbage-collection
    * The first difference from `Map` is that `WeakMap` keys must be objects
    * `WeakMap` does not support iteration and methods, METHOD: `weakMap.get(key)`, `weakMap.set(key, value)`, `weakMap.delete(key),`weakMap.has(key)`
    * Use case: additional data, caching, 

  * Object.keys, values, entries:

    * support for Map, Set and Array

    * Plain objects also support similar method but syntax is a bit different: Object.key(obj), Object.value(obj), Object.entries(obj), just like for ... in loop, these methods ignore properties that use Symbol(...) as keys

    * Transforming objects:

      1. Use `Object.entries(obj)` to get an array of key/value pairs from `obj`.
      2. Use array methods on that array, e.g. `map`.
      3. Use `Object.fromEntries(array)` on the resulting array to turn it back into an object.

    * Destructuring assignment: 

      * ```javascript
        // we have an array with the name and surname
        let arr = ["Ilya", "Kantor"]
        
        // destructuring assignment
        // sets firstName = arr[0]
        // and surname = arr[1]
        let [firstName, surname] = arr;
        
        alert(firstName); // Ilya
        alert(surname);  // Kantor
        ```

      * Unwanted elements of the array can also be thrown away via an extra comma

      * We can use it with any iterable, not only arrays.

      * ```javascript
        let user = new Map();
        user.set("name", "John");
        user.set("age", "30");
        
        for (let [key, value] of user) {
          alert(`${key}:${value}`); // name:John, then age:30
        }
        ```

    * swap variable trick: 

      ```javascript
      let guest = "Jane";
      let admin = "Pete";
      
      // Swap values: make guest=Pete, admin=Jane
      [guest, admin] = [admin, guest];
      ```

    * The rest `...`.

    * default value is undefined

  * Date and Time

    * ```javascript
      let now = new Date();
      alert( now ); // shows current date/time
      // An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
      new Date(timestamp)
      new Date(datestring)
      new Date(year, month, date, hours, minutes, seconds, ms)
      ```

    * Mehods: getFullYear(), getMonth(), getDate(), getHours()...and its corresponding set methods

    * ```javascript
      function diffSubtract(date1, date2) {
        return date2 - date1;
      }
      
      // getTime is much faster, but there is no type conversion!
      function diffGetTime(date1, date2) {
        return date2.getTime() - date1.getTime();
      }
      
      Date.parse(string)
      ```

  * JSON method

    * JSON.stringify: convert object into JSON (can be applied to primitive as well)

    * JSON.parse: convert JSON back into an object

    * Support following data types:

      * Object, Arrays, Primitive (strings, numbers, boolean, null)

    * JSON is data only, so some properties are skipped by JSON.stringify (function properties, properties that store undefined)

    * ```javascript
      let user = {
        sayHi() { // ignored
          alert("Hello");
        },
        [Symbol("id")]: 123, // ignored
        something: undefined // ignored
      };
      
      alert( JSON.stringify(user) ); // {} (empty object)
      ```

    * ```javascript
      //revive function
      let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
      
      let meetup = JSON.parse(str, function(key, value) {
        if (key == 'date') return new Date(value);
        return value;
      });
      
      alert( meetup.date.getDate() ); // now works!
      ```

## Advanced working with functions:

* Linked list

  ```javascript
  let list = { value: 1 };
  list.next = { value: 2 };
  list.next.next = { value: 3 };
  list.next.next.next = { value: 4 };
  list.next.next.next.next = null;
  ```

* Rest parameters and spread syntax

  * Many JavaScript built-in functions support an arbitrary number of arguments.

    ```javascript
    function sumAll(...args) { // args is the name for the array
      let sum = 0;
    
      for (let arg of args) sum += arg;
    
      return sum;
    }
    
    alert( sumAll(1) ); // 1
    alert( sumAll(1, 2) ); // 3
    alert( sumAll(1, 2, 3) ); // 6
    ```

  * spread

    ```javascript
    let arr = [3, 5, 1];
    
    alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)
    ```

  * ```javascript
    // using spread syntax to copy is short than Object.assign({}, obj)
    let obj = { a: 1, b: 2, c: 3 };
    let objCopy = { ...obj }; // spread the object into a list of parameters
                              // then return the result in a new object
    ```

* Closure

  * they automatically remember where they were created using a hidden `[[Environment]]` property, and then their code can access outer variables.

* var

  * var tolerates redeclarations while let does not
  * variable use var to declare become the property of the global object, while let does not
  * not encouraged

* Global object provides variables and functions that are available anywhere

* 

