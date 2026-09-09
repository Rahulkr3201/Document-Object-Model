// ==================================================
// DOM MODIFICATION
// ==================================================
//
// textContent
//     → read/change text
//
// innerHTML
//     → read/change HTML inside an element
//
// createElement()
//     → create a new DOM element
//
// append()
//     → add to the end
//
// prepend()
//     → add to the beginning
//
// remove()
//     → remove an element
//
// ==================================================


// ==================================================
// Task 1
// Select #modify-title
// Change "DOM Modification"
// to "Learning DOM Manipulation"
// ==================================================

const modifyTitle = document.querySelector("#modify-title");

modifyTitle.textContent = "Learning DOM Manipulation";


// ==================================================
// Task 2
// Select .message
// Change its text
// ==================================================

const message = document.querySelector(".message");

message.textContent = "I changed this using JavaScript!";


// ==================================================
// Task 3
// Create a new <p>
// Set its text
// Add it to the END of #container
// ==================================================

const container = document.querySelector("#container");

const newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created dynamically.";

container.append(newParagraph);


// ==================================================
// Task 4
// Create another <p>
// Set its text
// Add it to the BEGINNING of #container
// ==================================================

const beginningParagraph = document.createElement("p");

beginningParagraph.textContent = "I was added at the beginning.";

container.prepend(beginningParagraph);


// ==================================================
// Task 5
// Select .message
// Remove it
// ==================================================

const messageToRemove = document.querySelector(".message");

messageToRemove.remove();


// ==================================================
// Task 6
// Create the entire user-card using JavaScript
//
// Expected HTML:
//
// <div class="user-card">
//     <h3>Rahul</h3>
//     <p>Frontend Developer</p>
//     <button>View Profile</button>
// </div>
// ==================================================


// Create div
const userCard = document.createElement("div");


// Add class
userCard.classList.add("user-card");


// Create h3
const userName = document.createElement("h3");

userName.textContent = "Rahul";


// Create p
const userRole = document.createElement("p");

userRole.textContent = "Frontend Developer";


// Create button
const profileButton = document.createElement("button");

profileButton.textContent = "View Profile";


// Put h3, p and button inside user-card
userCard.append(userName);
userCard.append(userRole);
userCard.append(profileButton);


// Finally add user-card to the page
container.append(userCard);