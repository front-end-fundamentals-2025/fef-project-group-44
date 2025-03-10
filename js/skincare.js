// Get elements by their IDs
var serums = document.getElementById('serums');
var cleansers = document.getElementById('cleansers');
var masks = document.getElementById('masks');
var moisturizer = document.getElementById('moisturizer');
var inStock = document.getElementById('inStock');
var outOfStock = document.getElementById('outOfStock');
var brandETUDE = document.getElementById('ANUA');
var brandHince = document.getElementById('belif');
var brandKaja = document.getElementById('ETUDE');
var brandPeripera = document.getElementById('LANEIGE');
var brandRomnd = document.getElementById('Manyo');
var priceRange = document.getElementById('priceRange');
var priceValue = document.getElementById('priceValue');
var products = document.getElementsByClassName('product');

// Function to filter products
function filterProducts() {
  // Initializing an empty array for each category that will store the selected categories
  var selectedCategories = [];
  // If the checkbox is checked, the string is added to the selectedCategories array
  // The idea to use push was taken from this link: https://www.w3schools.com/jsref/jsref_push.asp
  if (serums.checked) selectedCategories.push('serums');
  if (cleansers.checked) selectedCategories.push('cleansers');
  if (masks.checked) selectedCategories.push('masks');
  if (moisturizer.checked) selectedCategories.push('moisturizer');

  var selectedStock = [];
  if (inStock.checked) selectedStock.push('in-stock');
  if (outOfStock.checked) selectedStock.push('out-of-stock');

  var selectedBrands = [];
  if (brandETUDE.checked) selectedBrands.push('ANUA');
  if (brandHince.checked) selectedBrands.push('belif');
  if (brandKaja.checked) selectedBrands.push('ETUDE');
  if (brandPeripera.checked) selectedBrands.push('LANEIGE');
  if (brandRomnd.checked) selectedBrands.push('Manyo');

  // Converts the string to an integer
  var maxPrice = parseInt(priceRange.value, 10);

  for (var i = 0; i < products.length; i++) {
    // Retrives attributes from the product elements
    var product = products[i];
    var productStock = product.getAttribute('data-stock');
    var productBrand = product.getAttribute('data-brand');
    var productPrice = parseInt(product.getAttribute('data-price'), 10);
    var productCategory = product.getAttribute('data-category');

    // Checks if the product matches the selected categories, stock, brand and price
    // Stores the results of the checks in the variables
    var matchCategory = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
    var matchStock = selectedStock.length === 0 || selectedStock.includes(productStock);
    var matchBrand = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
    var matchPrice = productPrice <= maxPrice;

    //If the product matches the selected categories, stock, brand and price, the product is displayed
    //The idea to use block and none was taken from this link: https://www.w3schools.com/jsref/prop_style_display.asp
    if (matchCategory && matchStock && matchBrand && matchPrice) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
}

// Event listeners for filtering
// Is triggered when the input is changed
priceRange.addEventListener('input', function () {
  priceValue.textContent = priceRange.value;
  filterProducts();
});

// Is triggered when the checkbox is changed
serums.addEventListener('change', filterProducts);
cleansers.addEventListener('change', filterProducts);
masks.addEventListener('change', filterProducts);
moisturizer.addEventListener('change', filterProducts);
inStock.addEventListener('change', filterProducts);
outOfStock.addEventListener('change', filterProducts);
brandETUDE.addEventListener('change', filterProducts);
brandHince.addEventListener('change', filterProducts);
brandKaja.addEventListener('change', filterProducts);
brandPeripera.addEventListener('change', filterProducts);
brandRomnd.addEventListener('change', filterProducts);

// Initial filter on page load
filterProducts();