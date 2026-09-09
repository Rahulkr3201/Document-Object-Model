// ==================================================
// DOM SELECTORS — QUICK REFERENCE
// ==================================================
//
// #       → ID
// .       → CLASS
// tag     → HTML TAG
// []      → ATTRIBUTE
// space   → SELECT SOMETHING INSIDE SOMETHING ELSE
//
// querySelector()    → returns FIRST matching element
// querySelectorAll() → returns ALL matching elements
//
// ==================================================


// 1. Find h1 using ID
// HTML: <h1 id="title">
// # means ID

const title = document.querySelector("#title");

console.log(title);


// 2. Find card using CLASS
// HTML: <div class="card">
// . means CLASS

const card = document.querySelector(".card");

console.log(card);


// 3. Find first button using TAG
// HTML: <button>
// No # or . because "button" is the HTML tag

const button = document.querySelector("button");

console.log(button);


// 4. Find email input using ATTRIBUTE
// HTML: <input type="email">
// [] is used for attributes

const emailInput = document.querySelector('input[type="email"]');

console.log(emailInput);


// 5. Find product using ID + CLASS
// HTML: <div id="product" class="card">
// #product → ID
// .card    → CLASS
//
// #product.card means:
// Find an element with ID "product"
// AND class "card"

const product = document.querySelector("#product.card");

console.log(product);


// 6. Find price INSIDE product-card
// HTML structure:
//
// <div class="product-card">
//     <p class="price">₹999</p>
// </div>
//
// .product-card .price
//      ↑          ↑
//    parent      child
//
// A SPACE means "inside"

const price = document.querySelector(".product-card .price");

console.log(price);


// 7. Find FIRST item using querySelector()
// If there are multiple .item elements,
// querySelector() returns ONLY THE FIRST ONE.

const firstItem = document.querySelector(".item");

console.log(firstItem);


// 8. Find ALL items using querySelectorAll()
// querySelectorAll() returns ALL matching elements.

const items = document.querySelectorAll(".item");

console.log(items);


// ==================================================
// QUICK SUMMARY
// ==================================================
//
// #title
//   → Find by ID
//
// .card
//   → Find by CLASS
//
// button
//   → Find by TAG
//
// [type="email"]
//   → Find by ATTRIBUTE
//
// #product.card
//   → ID + CLASS
//
// .product-card .price
//   → Find .price inside .product-card
//
// querySelector()
//   → FIRST matching element
//
// querySelectorAll()
//   → ALL matching elements
//
// ==================================================