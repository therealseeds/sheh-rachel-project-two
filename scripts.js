
//Set up our FIREBASE database. This includes initializing our database and our dbRef.
import app from "./firebase-config.js";
import {getDatabase, ref, set, onValue} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const database = getDatabase(app);
const dbRef = ref(database);

//Declaring a function that will add our data, both the inventory and the currencies, to our database. We'll want to set up specific key names to go with our data as well.

const addToDatabase = (key, value) => {

  const customRef = ref(database, key);

  set(customRef, value);

}
//Initial data set to Firebase (commented out after setup to avoid mistakenly pulling from it instead of pulling from Firebase)

// const totalInventory = [
//     {
//     alt: "A pale green lounge chair."
//     title: "Malm Chair",
//     url: "./novas-project/assets/prod-1.jpg",
//     price: 22.00,
//   },
//   {
//     alt: "A pastel green folding side table."
//     title: "Pendant Lamp",
//     url: "./novas-project/assets/prod-2.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A pastel footstool."
//     title: "Magnolia Dream",
//     url: "./novas-project/assets/prod-3.jpg",
//     price: 18.00,
//   },
//   {
//     alt: "A grey lounge chair from the side."
//     title: "Malm Chair",
//     url: "./novas-project/assets/prod-4.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A white hanging lamp with gold trimming"
//     title: "Pendant Lamp",
//     url: "./novas-project/assets/prod-5.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A white throw pillow with decorative black lines."
//     title: "Candle",
//     url: "./novas-project/assets/prod-6.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A colorful throw blanket with fringe."
//     title: "Lorem Ipsum",
//     url: "./novas-project/assets/prod-7.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A wooden child's chair, designed to look like an elephant."
//     title: "Pendant Lamp",
//     url: "./novas-project/assets/prod-8.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A candle in a pink candleholder with pink lid."
//     title: "Pendant Lamp",
//     url: "./novas-project/assets/prod-9.jpg",
//     price: 45.00,
//   },
//   {
//     alt: "A lightbulb repurposed as a terrarium with a cactus growing inside of it."
//     title: "Pendant Lamp",
//     url: "./novas-project/assets/prod-10.jpg",
//     price: 45.00,
//   }
// ]

//Here we called our function to add our inventory data to Firebase, and then commented this out to prevent the console from thinking that totalInventory is not defined.

//addToDatabase("inventory", totalInventory);

// Step 4: Let's use the OnValue method to pull in our data from firebase - Don't forget to import it at the top of the page!




//OVERALL PSEUDOCODE DRAFT FOR PROJECT TWO


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



        //DATA STRUCTURE FOR FIREBASE (PROJECT TWO)

// // Add all product data to Firebase (images, price, title, etc).

// image:
// price:
// title:

// //display the number of items currently added to the user's cart

// set numbers of items current addred to the user's cart

// // If we hit stretch goal we can then refactor data to include:
// // Remove an item from the cart.

// remove a product object from the cart

// // See the total price of all items.



// //Implement a search bar that allows users to search for products by name.

// search returns the product object of every product matching the search query




//ADDING JS FUNCTIONALIY FOR ASSIGNMENT #2
        // //find the form element on the page
        // const formElement = document.querySelector("form");

        // formElement.addEventListener("submit", function(event) {
        //     event.preventDefault();
            
        //     const inputElement = document.querySelector("input");
        //     const task = inputElement.value;
        
        // });
        
        //trying to figure out some error handling for form submissions.  
        
            //if(task !== ""){  
            //console.log(task);
            //} else {
              //pop a message that says "Please complete the form before submitting"?
            //} 
        
        //Making mobile hamburger menu functional
        
        // const menu = document.querySelector(".menu");
        // const hamburger = document.querySelector(".hamburgerMenu");
        // const open = document.querySelector(".fa-solid.fa.bars");
        // const close = document.querySelector(".fa-solid.fa-xmark"); 
        
        // hamburger.addEventListener("click", function() {
        //   // Open menu
        //   if (!menu.classList.add("showMenu")) {
        //     menu.classList.add("showMenu");
        //     open.style.display = "none";
        //     close.style.display = "block";
        //     close.style.fontSize = "2rem";
        //     close.style.paddingTop = "10px";
        //     menu.style.display = "block";
        //   }
        //   // Close menu
        //   else {
        //     menu.classList.remove("showMenu");
        //     open.style.display = "block";
        //     close.style.display = "none";
        //     menu.style.display = "flex";
        //   }
        // });
        
        // const navUl = document.querySelector("nav.ul");
        // let clicked = false;
        
        // const hamburger = document.querySelector(".hamburger-label"); 
        // hamburger.addEventListener("click", function(){
        //     if (clicked===false){
        //       navUl.style.display="block"
        //     }
        // });
        
        //at say 960px screen sizes and smaller, the hamburger menu should appear per media query, and the nav links should disappear and flex-direction: column when you click on the hamburger menu.  What do I need to use JS for to make them more "functional" than they are now, since they currently link to the correct pages?  Is it not possible to do that within a hamburger menu using HTML?




  // assignment of variables for pop out search window
  const icons = document.querySelector(".icons");
  const searchBar = document.querySelector(".searchBar");
  const searchIcon = document.querySelector(".fa-solid");
  const closeIcon = document.querySelector(".fa-regular");


  function toggleSearch() {
  if (searchBar.classList.contains("showSearch")) {
    searchBar.classList.remove("showSearch");
    searchIcon.style.display = "block";
    closeIcon.style.display = "none";

  } else {

    searchBar.classList.add("showSearch");
    closeIcon.style.display = "block";
    searchIcon.style.display = "none";

    }
  }

  icons.addEventListener('click', toggleSearch);

    // created event listener that assigns the button to the variable of submit
    const submit = document.querySelector('.submit')

    // function that says - once the submit button is pushed on click then to then grab the value inside the element that has an id of 'search' (the search bar)
    submit.addEventListener('click', (event) => {
      // this prevents the default state of refreshing on click

      event.preventDefault();
      // this selects the value of what is entered in the search bar and is assigned to userInput variable 
      let userInput = document.getElementById('search').value;
      searchDatabase(userInput)
      if (document.getElementById('search').value) {
        document.getElementById('search').value = '';
        userInput = '';
      }
    });
    // here we are passing the argument of userInput to the searchDatabase function by calling it above and creating the function that will filter through our results to find a matching title in our database
    const searchDatabase = (userInput) => {
      // line that references our database
      if (userInput) {
        onValue(dbRef, function(data) {
          // adding a variable for the data value in our database
          const ourData = data.val();
          // assigned a variable to the specific array in our database
          const inventory = ourData.inventory;
          // filter that sorts through the inventory array and returns search results that match the item title based on the user input ALSO turns input into lowercase on return so that capitalization does not matter and removes any white space at the end of userinput using trim()
            let searchResults = inventory.filter((item) => {
              return item.title.includes(userInput.toLowerCase().trim())
        
          })
          
          // by passing the argument of search results by calling the function above, we can move the info from search results down to this function
          addSearchResults(searchResults)
          searchResults = [];
        })
      }
      else {
        alert('Please enter a search query.');
      }
    }
    // creating a function for adding search results to the page and passing it above to the function that filters and returns userinput. 
    const addSearchResults = (searchResults) => {
      document.querySelector('#results').innerHTML = ''; 
      searchResults.forEach((object) => {
        // add a line of code that empties the ul every time to avoid duplication of results
        // creating html elements so that we can append them to the ul 
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        const title = document.createElement('p');
        const price = document.createElement('p');
        const alt = document.createElement('alt')
        // selecting each element and assigning it to the key value pair in the array on firebase
        image.src = object.url
        title.innerText = object.title
        price.innerText = object.price
        image.alt = object.alt 
        // appending those items to the li so that we can display them in the empty UL 
        listItem.append(image, title, price, alt);
        document.querySelector('#results').append(listItem)
      })
    }








// ORIGINAL PSEUDOCODE

  // Need to create a function that takes the search input and displays results based on what they have typed
  // Step one: grab the data set from firebase
  // Step two: style the database to look like the gallery inventory on the home page
  // Step three: connect the data set so that it filters based on what the user has entered in the search bar

//     Prevent the submit from causing the page to refresh (using the event.preventDefault() method)?
//     Get what the user wrote in the text input (using the .value property).
// Create a filter for the array to be able to take out what we need from it - based on title
// Connect that filter to the search input so that the results show only if they match the userInput 
// append empty UL in index to populate with results based on what the user has entered 

      // Add the logic that would target .price .title .url and then append those items as list items and insert them into the empty UL 
      // Variable that contains list item in backticks with written html and will add the html/css that I want and append that list item to the page 
      // Add method to clear the searchresults on submit 
      // Add case sensitivity 
