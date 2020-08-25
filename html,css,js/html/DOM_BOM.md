## DOM：

Document Object Model，指所有可以被改变的网页内容

DOM collections：childNodes 时collection，可以用for...of但是不能用array method。或者可以通过Array.from转化成array然后用array method。Collection are read-only。不要用for...in因为collection里面有额外的信息。

table：

* table element support table.row and table.caption/tHead/tFoot
* <tr> cells-collection of <td> and <th> cells inside the given <tr>. tr.sectionRowIndex - the position(index) of given <tr> inside the enclosing <thead> <tbody> <tfoot>. tr.rowIndex - the number of the <tr> in the table as a whole.

Node type：

* 1 for element node
* 3 for text node
* 9 for document object

TagName only support for Element，nodeName support for any node

If `innerHTML` inserts a `<script>` tag into the document – it becomes a part of HTML, but doesn’t execute， and innerHTML += does a full overwrite





## BOM：

Browser Object Model，指浏览器对象：导航栏，地址

```javascript
alert(location.href); // shows current URL
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
```

