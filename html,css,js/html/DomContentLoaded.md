The lifecycle of an HTML page has three important events:

* DOMContentLoaded - the browser fully loaded HTML, and the DOM is built, but external resources like pictures <img> and stylesheets mat be not yet loaded.
* Load - not only HTML is loaded, but also all the external resources: images, styles etc.
* Beforeunload/unload - the user is leaving the page.

We can add event listener to catch it.

```javascript
document.addEventListener("DOMContentLoaded", ready);
```

Scripts that don't block DOMContentLoaded

* Scripts with the async attribute
* Scripts that are generated dynamically with document.createElememt('script');

Autofill (username and password) happened on DOMContentLoaded.

window.onload:

* The load event on the window object triggers when the whole page is loaded including styles, images and other resources. This event is available via the onload property.

window.onunload:

* unload event is when the user leave us, and we'd like to save the data on our server

window.onbeforeunload:

document.readyState: tells us about the current loading state. There are 3 possible values: "loading", "interactive", "complete".

if we set the DOMContentLoad handler after the document is loaded, it never runs.

defer and async:

* defer attribute tells the browser that it should go on working with the page, and load the script "in background", then run the script when it loads.
* async means that the script is completely independent. DOMContentLoad may happen both before or after an async script.

We can also add a script dynamically using JavaScript, it behave as "async" by default.



Resource loading: onload and onerror

* The browser allow us to track the loading of external resources - scripts, iframes, pictures and so on.
* script.onload triggers after the script was loaded and executed
* Errors that occur during the loading of the script can be tracked in an `error` event.
* Crossorigin policy: scripts from one site can't access contents of the other site
* to allow cross-origin access, the <script> tag needs to have the crossorigin attribute, plus the remote server must provide special headers
* there are three levels of cross-origin access
  * No crossorigin attribute - access prohibited
  * crossorigin="anonymous" - access allowed if the server responds with the header `Access-Control-Allow-Origin` with `*` or our origin. Browser doesn't send authorization and cookies to remote server.
  * crossorigin="use-credentials" - access allowed if server sends back the header `Access-Control-Allow-Origin` with our origin and `Access-Control-Allow-Credentials: true`. Browser sends authorization information and cookies to remote server.

