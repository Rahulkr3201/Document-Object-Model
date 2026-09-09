// ==================================================
// DOM TRAVERSAL
// ==================================================
//
// parentElement
//     → move UP to the parent
//
// children
//     → get direct child ELEMENTS
//
// firstElementChild
//     → first child element
//
// lastElementChild
//     → last child element
//
// nextElementSibling
//     → next sibling element
//
// previousElementSibling
//     → previous sibling element
//
// childNodes
//     → ALL child nodes, including text nodes
//
// ==================================================


// 1. Find the price
const priceElement = document.querySelector(".price");

console.log(priceElement);


// 2. Find its parent
console.log(priceElement.parentElement);


// 3. Find the card's children
const productCard = document.querySelector(".product-card");

console.log(productCard.children);


// 4. Find the first child
console.log(productCard.firstElementChild);


// 5. Find the last child
console.log(productCard.lastElementChild);


// 6. Find the price's previous sibling
console.log(priceElement.previousElementSibling);


// 7. Find the price's next sibling
console.log(priceElement.nextElementSibling);


// 8. Find all child nodes
console.log(productCard.childNodes);