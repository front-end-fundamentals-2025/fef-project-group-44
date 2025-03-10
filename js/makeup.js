// Navigation icons scaling

const navigationElements = document.getElementsByClassName("navigation-user-options");
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

// Product filters

// Get elements by their IDs
var eyes = document.getElementById("eyes");
var face = document.getElementById("face");
var lips = document.getElementById("lips");
var inStock = document.getElementById("inStock");
var outOfStock = document.getElementById("outOfStock");
var brandETUDE = document.getElementById("ETUDE");
var brandHince = document.getElementById("hince");
var brandKaja = document.getElementById("Kaja Beauty");
var brandPeripera = document.getElementById("Peripera");
var brandRomnd = document.getElementById("rom&nd");
var priceRange = document.getElementById("priceRange");
var priceValue = document.getElementById("priceValue");
var products = document.getElementsByClassName("product");

// Function to filter products
function filterProducts() {
  // Initializing an empty array for each category (eyes, face, lips) that will store the selected categories
  var selectedCategories = [];
  // If the checkbox is checked, the string is added to the selectedCategories array
  // The idea to use push was taken from this link: https://www.w3schools.com/jsref/jsref_push.asp
  if (eyes.checked) selectedCategories.push("eyes");
  if (face.checked) selectedCategories.push("face");
  if (lips.checked) selectedCategories.push("lips");

  var selectedStock = [];
  if (inStock.checked) selectedStock.push("in-stock");
  if (outOfStock.checked) selectedStock.push("out-of-stock");

  var selectedBrands = [];
  if (brandETUDE.checked) selectedBrands.push("ETUDE");
  if (brandHince.checked) selectedBrands.push("hince");
  if (brandKaja.checked) selectedBrands.push("Kaja Beauty");
  if (brandPeripera.checked) selectedBrands.push("Peripera");
  if (brandRomnd.checked) selectedBrands.push("rom&nd");

  // Converts the string to an integer
  var maxPrice = parseInt(priceRange.value, 10);

  for (var i = 0; i < products.length; i++) {
    // Retrives attributes from the product elements
    var product = products[i];
    var productStock = product.getAttribute("data-stock");
    var productBrand = product.getAttribute("data-brand");
    var productPrice = parseInt(product.getAttribute("data-price"), 10);
    var productCategory = product.getAttribute("data-category");

    // Checks if the product matches the selected categories, stock, brand and price
    // Stores the results of the checks in the variables
    var matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(productCategory);
    var matchStock =
      selectedStock.length === 0 || selectedStock.includes(productStock);
    var matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(productBrand);
    var matchPrice = productPrice <= maxPrice;

    //If the product matches the selected categories, stock, brand and price, the product is displayed
    //The idea to use block and none was taken from this link: https://www.w3schools.com/jsref/prop_style_display.asp
    if (matchCategory && matchStock && matchBrand && matchPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}

// Event listeners for filtering
// Is triggered when the input is changed
priceRange.addEventListener("input", function () {
  priceValue.textContent = priceRange.value;
  filterProducts();
});

// Is triggered when the checkbox is changed
eyes.addEventListener("change", filterProducts);
face.addEventListener("change", filterProducts);
lips.addEventListener("change", filterProducts);
inStock.addEventListener("change", filterProducts);
outOfStock.addEventListener("change", filterProducts);
brandETUDE.addEventListener("change", filterProducts);
brandHince.addEventListener("change", filterProducts);
brandKaja.addEventListener("change", filterProducts);
brandPeripera.addEventListener("change", filterProducts);
brandRomnd.addEventListener("change", filterProducts);

// Initial filter on page load
filterProducts();
