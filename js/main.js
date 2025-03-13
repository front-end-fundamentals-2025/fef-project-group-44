//Marquee
const marquee = document.querySelector(".marquee");
marquee.addEventListener("mouseover", function () {
  //animationPlayState was taken from this website and transformed into js format: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
  this.style.animationPlayState = "paused";
});

marquee.addEventListener("mouseleave", function () {
  this.style.animationPlayState = "running";
});

// Navigation icons scaling

const navigationElements = document.getElementsByClassName(
  "navigation-user-options"
);

const socialElements = document.getElementsByClassName("social-links");

// Loop through the navigation menus (in case there's more than one like now)
for (let i = 0; i < navigationElements.length; i++) {
  // Get all icons inside the current navigation menu
  const navigationIcons = navigationElements[i].getElementsByTagName("i");

  // Scale when the mouse is over
  for (let j = 0; j < navigationIcons.length; j++) {
    navigationIcons[j].addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2)";
    });

    // Unscale back to the initial size when the mouse leaves
    navigationIcons[j].addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
}

// Search Bar
const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

// Function to expand the search input
function expandSearch() {
  searchInput.style.width = "150px";
  searchInput.style.opacity = "1";
  searchInput.style.padding = "5px 10px";
}

// Function to collapse the search input
function collapseSearch() {
  // If the input is empty, collapse it back to small size
  if (searchInput.value === "") {
    searchInput.style.width = "0"; // Make it smaller
    searchInput.style.opacity = "0"; // Make it invisible
    searchInput.style.padding = "5px"; // Reset the padding
  }
}

// When the user clicks the search icon, toggle the search input size
searchIcon.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission (page reload)
  // The idea to use "stopPropagation" was taken from this link: https://www.w3schools.com/jsref/event_stoppropagation.asp
  event.stopPropagation(); // Prevent the click from collapsing the search input

  if (searchInput.style.width === "0px" || searchInput.style.width === "") {
    expandSearch(); // Expand if it's collapsed
  } else {
    collapseSearch(); // Collapse if it's already expanded
  }
});

// When the user clicks outside the search area, collapse the input
document.addEventListener("click", function (event) {
  // If the click is not inside the search icon or input, collapse the input
  if (
    !searchIcon.contains(event.target) &&
    !searchInput.contains(event.target)
  ) {
    collapseSearch();
  }
});

// Social media icons scaling

for (let i = 0; i < socialElements.length; i++) {
  // Get all icons inside the current navigation menu
  const socialIcons = socialElements[i].getElementsByTagName("i");

  // Scale when the mouse is over
  for (let j = 0; j < socialIcons.length; j++) {
    socialIcons[j].addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2)";
    });

    // Unscale back to the initial size when the mouse leaves
    socialIcons[j].addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }
}

// Countdown timer

// The way how to do the countdown timer was learnt from this video: https://youtu.be/34kbdFLpff8?si=P774Cr5gECMlKMY9
const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("April 22 , 2025 23:59:59").getTime();

function timer() {
  const currentDate = new Date().getTime();
  const distance = targetDate - currentDate;

  if (distance < 0) {
    Days.innerHTML = "00";
    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  Days.innerHTML = days < 10 ? "0" + days : days;
  Hours.innerHTML = hours < 10 ? "0" + hours : hours;
  Minutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  Seconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

const countdownInterval = setInterval(timer, 1000);
timer();

// Function to update cart count on all pages
function updateCartCount() {
  let cartCount = document.querySelector(".totalQuantity"); // Select the shopping bag counter
  let listCart = JSON.parse(localStorage.getItem("listCart")) || []; // Get cart data from localStorage

  // Calculate total quantity
  let totalQuantity = listCart.reduce((sum, product) => sum + product.quantity, 0);

  // Update the cart count in the shopping bag icon
  if (cartCount) {
    cartCount.innerText = totalQuantity;
    cartCount.style.display = totalQuantity > 0 ? "flex" : "none"; // Hide if cart is empty
  }
}

// Call this function on page load to ensure the cart count is updated
document.addEventListener("DOMContentLoaded", updateCartCount);
