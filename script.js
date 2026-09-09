// 1. Find h1 using ID
const title = document.querySelector("#title");
console.log(title);


// 2. Find card using class
const card = document.querySelector(".card");
console.log(card);


// 3. Find first button using tag
const button = document.querySelector("button");
console.log(button);


// 4. Find email input using attribute
const emailInput = document.querySelector('input[type="email"]');
console.log(emailInput);


// 5. Find product using ID + class
const product = document.querySelector("#product.card");
console.log(product);


// 6. Find price inside product-card
const price = document.querySelector(".product-card .price");
console.log(price);


// 7. Find first item using querySelector()
const firstItem = document.querySelector(".item");
console.log(firstItem);


// 8. Find ALL items using querySelectorAll()
const items = document.querySelectorAll(".item");
console.log(items);