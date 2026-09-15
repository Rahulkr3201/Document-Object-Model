# DOM — Complete Summary

Everything covered across `script.js`, `script1.js`, `script3.js` and `script4.js`.

| File | Topic |
| --- | --- |
| `script.js` | Selecting elements (querySelector / querySelectorAll) |
| `script1.js` | Traversing the DOM (parent / children / siblings) |
| `script3.js` | Modifying the DOM (create, insert, remove) |
| `script4.js` | Attributes, classes and styles |

---

## 1. Selecting Elements — `script.js`

### Selector symbols

| Symbol | Means | Example |
| --- | --- | --- |
| `#` | ID | `#title` |
| `.` | CLASS | `.card` |
| `tag` | HTML tag | `button` |
| `[ ]` | ATTRIBUTE | `[type="email"]` |
| space | inside / descendant | `.product-card .price` |

### The two methods

```js
document.querySelector(".item");     // FIRST match only  → element or null
document.querySelectorAll(".item");  // ALL matches       → NodeList
```

### Examples

```js
// By ID              <h1 id="title">
const title = document.querySelector("#title");

// By class           <div class="card">
const card = document.querySelector(".card");

// By tag             <button>
const button = document.querySelector("button");

// By attribute       <input type="email">
const emailInput = document.querySelector('input[type="email"]');

// ID + class         <div id="product" class="card">
// no space = SAME element must have both
const product = document.querySelector("#product.card");

// Nested             .price inside .product-card
// space = "look inside"
const price = document.querySelector(".product-card .price");
```

### The one thing people mix up

```
#product.card    → ONE element that has id=product AND class=card
#product .card   → a .card INSIDE #product   (the space changes everything)
```

---

## 2. Traversing the DOM — `script1.js`

Once you have one element, you can walk to any element around it.

| Property | Moves |
| --- | --- |
| `parentElement` | UP to the parent |
| `children` | DOWN to direct child elements |
| `firstElementChild` | first child element |
| `lastElementChild` | last child element |
| `nextElementSibling` | to the next sibling |
| `previousElementSibling` | to the previous sibling |
| `childNodes` | ALL child nodes — **includes text nodes** |

```js
const priceElement = document.querySelector(".price");
const productCard  = document.querySelector(".product-card");

priceElement.parentElement;             // <div class="details">
productCard.children;                   // HTMLCollection of elements
productCard.firstElementChild;          // <h2>Product Name</h2>
productCard.lastElementChild;           // <div class="details">
priceElement.previousElementSibling;    // null (it is first inside .details)
priceElement.nextElementSibling;        // <p class="stock">In Stock</p>
productCard.childNodes;                 // elements + whitespace text nodes
```

### `children` vs `childNodes`

```
children    → elements only            ← use this 99% of the time
childNodes  → elements + text + comments (whitespace counts as a text node)
```

Anything with `Element` in the name skips text nodes. That's why
`firstElementChild` is safer than `firstChild`.

---

## 3. Modifying the DOM — `script3.js`

### Reading / writing content

```js
element.textContent = "plain text";          // safe, text only
element.innerHTML   = "<b>real HTML</b>";    // parses HTML — don't use with user input
```

### Creating and inserting

```js
const p = document.createElement("p");   // 1. create (not on the page yet)
p.textContent = "Created dynamically.";  // 2. fill it
container.append(p);                     // 3. attach → NOW it's visible
```

| Method | Puts the element |
| --- | --- |
| `append()` | at the END of the parent |
| `prepend()` | at the BEGINNING of the parent |
| `remove()` | deletes it from the page |

An element only appears once you append/prepend it. Creating is not showing.

### Building a whole component in JS

Target HTML:

```html
<div class="user-card">
    <h3>Rahul</h3>
    <p>Frontend Developer</p>
    <button>View Profile</button>
</div>
```

The pattern — build the children, nest them, attach the parent last:

```js
const userCard = document.createElement("div");
userCard.classList.add("user-card");

const userName = document.createElement("h3");
userName.textContent = "Rahul";

const userRole = document.createElement("p");
userRole.textContent = "Frontend Developer";

const profileButton = document.createElement("button");
profileButton.textContent = "View Profile";

userCard.append(userName, userRole, profileButton);  // nest
container.append(userCard);                          // attach once
```

Building the tree in memory first and attaching once is cheaper than
appending each piece straight to the page.

---

## 4. Attributes, Classes, Styles — `script4.js`

### Attributes

```js
const email = document.querySelector("#email");

email.getAttribute("type");                        // "email"        → READ
email.getAttribute("data-user-id");                // "101"
email.setAttribute("placeholder", "Enter email");  // ADD / CHANGE
email.setAttribute("data-role", "admin");
email.removeAttribute("data-role");                // REMOVE
email.hasAttribute("type");                        // true   → CHECK
email.hasAttribute("disabled");                    // false
```

`getAttribute()` always returns a **string** (or `null`), never a number.

### Classes — `classList`

```js
box.classList.add("active");          // add
box.classList.remove("active");       // remove
box.classList.toggle("active");       // missing → add,  present → remove
box.classList.contains("active");     // true / false
```

```
active missing  →  toggle  →  ADD
active present  →  toggle  →  REMOVE
```

### Styles

```js
box.style.width           = "300px";   // writes INLINE css
box.style.backgroundColor = "blue";
box.style.color           = "white";
```

CSS uses `kebab-case`, JavaScript uses `camelCase`:

| CSS | JavaScript |
| --- | --- |
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `margin-top` | `marginTop` |

```js
const styles = getComputedStyle(box);
styles.width;            // the FINAL value the browser calculated
styles.backgroundColor;
```

| | Reads | Writes |
| --- | --- | --- |
| `element.style` | inline styles only | ✅ yes |
| `getComputedStyle()` | CSS files + `<style>` + inline + inherited + browser defaults | ❌ read-only |

Prefer toggling a class over setting many inline styles — keeps the look in CSS
and the logic in JS.

---

## Full Cheat Sheet

```
SELECT
  querySelector()           first match
  querySelectorAll()        all matches
  #id  .class  tag  [attr]  space = inside

TRAVERSE
  parentElement             up
  children                  down (elements)
  firstElementChild         first child
  lastElementChild          last child
  nextElementSibling        next
  previousElementSibling    previous
  childNodes                everything, text included

MODIFY
  textContent               text in / out
  innerHTML                 HTML in / out
  createElement()           make it
  append()                  add to end
  prepend()                 add to start
  remove()                  delete it

ATTRIBUTES
  getAttribute()            read
  setAttribute()            add / change
  removeAttribute()         remove
  hasAttribute()            check

CLASSES
  classList.add()
  classList.remove()
  classList.toggle()
  classList.contains()

STYLES
  element.style             set inline css   (camelCase)
  getComputedStyle()        read final css   (read-only)
```

---

## Notes to remember

1. `querySelector` returns `null` when nothing matches — reading `.textContent`
   on `null` throws.
2. `querySelectorAll` returns a **NodeList**, not an array. `forEach` works;
   `map` and `filter` don't — use `[...items]` or `Array.from(items)` first.
3. The NodeList is a **snapshot** — elements added afterwards are not in it.
4. `<script>` sits at the bottom of `index.html` on purpose: the HTML above it is
   already parsed, so the selectors find the elements. A script in `<head>` would
   get `null`.
5. Only one script tag is active at a time in `index.html` — swap the `src` to
   run a different file.
6. Markup needed by `script3.js` (`#modify-title`, `.message`, `#container`) and
   by `script4.js` (`#email`, `#box`) is not in `index.html` yet — add it before
   running those, or the selectors return `null`.
