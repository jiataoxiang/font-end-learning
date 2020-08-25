## HTML attributes:

when the browser parses the HTML to create the HTML to create DOM objects for tags, it recognizes standard attributes and create DOM properties from them

So if an attribute is non-standard, there won't be a DOM-property for it.

However, all attribute are accessible by using the following method.

```javascript
elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute.
elem.attributes - read all attributes
```

HTML attributes have the following features:

* Their name is case-insensitive.
* Their values are always strings.

Property-attribute synchronization:

* input id is modified as an attribute, and we can see the property changed to. And then the same backwards.
* But input value synchronizes only form attribute to property but not back.

DOM property are typed:

* ```html
  <div id="div" style="color:red;font-size:120%">Hello</div>
  
  <script>
    // string
    alert(div.getAttribute('style')); // color:red;font-size:120%
  
    // object
    alert(div.style); // [object CSSStyleDeclaration]
    alert(div.style.color); // red
  </script>
  ```

  In the example above, style attribute is a string, but style property is an object.

```html
<style>
  /* styles rely on the custom attribute "order-state" */
  .order[order-state="new"] {
    color: green;
  }

  .order[order-state="pending"] {
    color: blue;
  }

  .order[order-state="canceled"] {
    color: red;
  }
</style>

<div class="order" order-state="new">
  A new order.
</div>

<div class="order" order-state="pending">
  A pending order.
</div>

<div class="order" order-state="canceled">
  A canceled order.
</div>
```

use attribute is more convenient to manage.

All attributes starting with "data-" are reserved for programmers' use. They are available in the dataset property. Multiword attributes like data-order-state become camel-cased. We  can not only read, but also modify data-attributes. 

## Modifying the document:

```javascript
node.append(...nodes or strings) – append nodes or strings at the end of node,
node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
node.before(...nodes or strings) –- insert nodes or strings before node,
node.after(...nodes or strings) –- insert nodes or strings after node,
node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
```

insertAdjacentHTML/Text/Element:

![image-20200822181124295](C:\Users\a3891\AppData\Roaming\Typora\typora-user-images\image-20200822181124295.png)

elem.insertAdjacentHTML(where, html)

```html
"beforebegin" – insert html immediately before elem,
"afterbegin" – insert html into elem, at the beginning,
"beforeend" – insert html into elem, at the end,
"afterend" – insert html immediately after elem.

<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>
```

The method has two brothers:

* elem.insertAdjacentText
* elem.insertAdjacentElement

Node removal:

to remove node, there is method called node.remove()

All insertion methods automatically remove the node from the old place.

```javascript
<div id="first">First</div>
<div id="second">Second</div>
<script>
  // no need to call remove
  second.after(first); // take #second and after it insert #first
</script>
```

Clone Nodes:

The call `elem.cloneNode(true)` creates a “deep” clone of the element – with all attributes and subelements. If we call `elem.cloneNode(false)`, then the clone is made without child elements.

DocumentFragment:

special DOM node that serves as a wrapper to pass around lists of nodes. We can append other nodes to it, but when we insert it somewhere, then its content is inserted instead.

```javascript
// <ul id="ul"></ul>

function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)

```

if we don't use this special DOM node, we can do this:

```javascript
ul.append(...getListContent()); // append + "..." operator = friends!
```

## Styles and Classes:

* we have two ways to style an element: class and style. We should always prefer CSS classes to `style`. The latter should only be used if classes “can’t handle it”. 
* className, classList