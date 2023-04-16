//PSEUDOCODE DRAFT FOR PROJECT TWO


// IN BRIEF
// Step 1: set up firebase
// Step 2: get data onto firebase
// Step 3: get data FROM firebase
// Step 4: filter data to remove out of stock and no image products
// Step 5: display products on the page


// IN GREATER DETAIL

//SHEH'S DRAFT
// Create a file (firebase.js) to configure and export the Firebase object.
// Import the database object, and any required Firebase modules at the top of the main app file (app.js)
// Call getDatabase() and ref() to create a reference to the Firebase database.
// Create onValue(?) to load current stock on page refresh
// Create an event listener on the search button/field
    // Prevent the submit from causing the page to refresh (using the event.preventDefault() method).
    // Get what the user wrote in the text input (using the .value property).
// If search bar drop down - create html elements that append showing links to what the user has typed in the field
// If we create separate search page that pops up
  // create event listener for user clicking on search icon
  // ^ that would transition the user to a separate page with search bar + results
// Add event listeners to "add to cart" buttons
// Connect shopping cart image to event listener so that it counts each time the user clicks on "add to cart"

//RACHEL'S DRAFT

//// Create a file (firebase.js) to configure and export the Firebase object.

// Import the database object, and any required Firebase modules at the top of the main app file (app.js)

// Use document.querySelector() to get three JS objects:
    // One that points to the UL where caught Pokemon will be displayed.
    // One that points to the text input where users can add Pokemon names.
    // One that points to the form containing the text input.

// Call getDatabase() and ref() to create a reference to the Firebase database.

// Call onValue() to get a snapshot of the database, and to get a new snapshot any time the data changes/updates.
    // First, clear all content in the UL on the page, so that we can update it with the current list of Pokemon.
    // Loop through the snapshot object.
    // For each Pokemon in the database:
        // Create a new LI and two P elements (document.createElement()).
        // Put the Pokemon name in one P and the number of logged catches in the other, and .append() both into the LI.
        // .append() the new LI into the UL on the page.

// Add an event listener to the form to listen for submission. On submit it should:
    // Prevent the submit from causing the page to refresh (using the event.preventDefault() method).
    // Get what the user wrote in the text input (using the .value property).
    // Use Firebase's get() function to get a snapshot of current list of Pokemon in the database.
        // Loop through the current list of Pokemon.
            // If the Pokemon the user entered is already in the list, add one to the number of logged catches (using ++, the increment operator).
            // If not, add the new Pokemon to the list and set the logged catches to 1.
        // Use Firebase's update() function to send the updated list of Pokemon to Firebase (this will trigger the onValue() listener to update the page).


//ADDING JS FUNCTIONALIY FOR ASSIGNMENT #2
        //find the form element on the page
const formElement = document.querySelector("form");

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inputElement = document.querySelector("input");
    const task = inputElement.value;

});

//trying to figure out some error handling for form submissions.  

    //if(task !== ""){  
    //console.log(task);
    //} else {
      //pop a message that says "Please complete the form before submitting"?
    //}


//Adding a pop-up modal (on page load, or for images, etc)


//Making mobile hamburger menu functional

const menu = document.querySelector(".menu");
const hamburger = document.querySelector(".hamburgerMenu");
const open = document.querySelector(".fa-solid.fa.bars");
const close = document.querySelector(".fa-solid.fa-xmark"); 

hamburger.addEventListener("click", function() {
  // Open menu
  if (!menu.classList.add("showMenu")) {
    menu.classList.add("showMenu");
    open.style.display = "none";
    close.style.display = "block";
    close.style.fontSize = "2rem";
    close.style.paddingTop = "10px";
    menu.style.display = "block";
  }
  // Close menu
  else {
    menu.classList.remove("showMenu");
    open.style.display = "block";
    close.style.display = "none";
    menu.style.display = "flex";
  }
});

// const navUl = document.querySelector("nav.ul");
// let clicked = false;

// const hamburger = document.querySelector(".hamburger-label"); 
// hamburger.addEventListener("click", function(){
//     if (clicked===false){
//       navUl.style.display="block"
//     }
// });

//at say 960px screen sizes and smaller, the hamburger menu should appear per media query, and the nav links should disappear and flex-direction: column when you click on the hamburger menu.  What do I need to use JS for to make them more "functional" than they are now, since they currently link to the correct pages?  Is it not possible to do that within a hamburger menu using HTML?
