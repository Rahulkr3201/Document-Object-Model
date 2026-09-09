// ==================================================
// ATTRIBUTES
// ==================================================

// HTML:
// <input
//     id="email"
//     type="email"
//     placeholder="Enter email"
//     data-user-id="101"
// >

const email = document.querySelector("#email");


// --------------------------------------------------
// 1. getAttribute()
// --------------------------------------------------
// Used to READ an attribute.

// Get the type
console.log(email.getAttribute("type"));
// Output: "email"

// Get the placeholder
console.log(email.getAttribute("placeholder"));
// Output: "Enter email"

// Get the custom data attribute
console.log(email.getAttribute("data-user-id"));
// Output: "101"


// --------------------------------------------------
// 2. setAttribute()
// --------------------------------------------------
// Used to ADD or CHANGE an attribute.

// Change existing attribute
email.setAttribute("placeholder", "Enter your email");

// Add a new attribute
email.setAttribute("data-role", "admin");

console.log(email);


// --------------------------------------------------
// 3. removeAttribute()
// --------------------------------------------------
// Used to REMOVE an attribute.

email.removeAttribute("data-role");

console.log(email);


// --------------------------------------------------
// 4. hasAttribute()
// --------------------------------------------------
// Used to CHECK whether an attribute exists.
// Returns true or false.

console.log(email.hasAttribute("type"));
// true

console.log(email.hasAttribute("disabled"));
// false



// ==================================================
// CLASSES
// ==================================================

const box = document.querySelector("#box");


// --------------------------------------------------
// 5. classList.add()
// --------------------------------------------------
// Adds a class to the element.

box.classList.add("active");

console.log(box);


// --------------------------------------------------
// 6. classList.remove()
// --------------------------------------------------
// Removes a class from the element.

box.classList.remove("active");

console.log(box);


// --------------------------------------------------
// 7. classList.toggle()
// --------------------------------------------------
// If class exists → removes it
// If class doesn't exist → adds it

box.classList.toggle("active");

console.log(box);


// Run it again:
//
// box.classList.toggle("active");
//
// Now "active" will be removed.
//
// So toggle works like:
//
// active doesn't exist
//        ↓
//      ADD
//
// active exists
//        ↓
//     REMOVE


// --------------------------------------------------
// 8. classList.contains()
// --------------------------------------------------
// Checks whether an element has a particular class.
// Returns true or false.

console.log(box.classList.contains("active"));



// ==================================================
// STYLES
// ==================================================


// --------------------------------------------------
// 9. element.style
// --------------------------------------------------
// Used to ADD/CHANGE INLINE CSS using JavaScript.

box.style.width = "300px";

box.style.height = "150px";

box.style.backgroundColor = "blue";

box.style.color = "white";

box.style.padding = "20px";

console.log(box.style);


// Remember:
//
// CSS:
// background-color
//
// JavaScript:
// backgroundColor
//
// CSS:
// font-size
//
// JavaScript:
// fontSize



// --------------------------------------------------
// 10. getComputedStyle()
// --------------------------------------------------
// Gets the ACTUAL styles calculated by the browser.
//
// This includes styles coming from:
// - CSS files
// - <style> tags
// - inline styles
// - inherited styles
// - browser defaults

const styles = getComputedStyle(box);


// Get computed width
console.log(styles.width);

// Get computed height
console.log(styles.height);

// Get computed background color
console.log(styles.backgroundColor);

// Get computed color
console.log(styles.color);



// ==================================================
// QUICK SUMMARY
// ==================================================
//
// ATTRIBUTES
//
// getAttribute()
//     → READ attribute
//
// setAttribute()
//     → ADD / CHANGE attribute
//
// removeAttribute()
//     → REMOVE attribute
//
// hasAttribute()
//     → CHECK if attribute exists
//
//
// CLASSES
//
// classList.add()
//     → ADD class
//
// classList.remove()
//     → REMOVE class
//
// classList.toggle()
//     → ADD if missing
//       REMOVE if present
//
// classList.contains()
//     → CHECK if class exists
//
//
// STYLES
//
// element.style
//     → CHANGE inline styles
//
// getComputedStyle()
//     → READ the final styles
//       calculated by the browser
//
// ==================================================