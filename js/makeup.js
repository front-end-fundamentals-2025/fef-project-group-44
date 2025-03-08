// Get elements by their IDs
var eyes = document.getElementById('eyes');
var face = document.getElementById('face');
var lips = document.getElementById('lips');
var inStock = document.getElementById('inStock');
var outOfStock = document.getElementById('outOfStock');
var brandETUDE = document.getElementById('ETUDE');
var brandHince = document.getElementById('hince');
var brandKaja = document.getElementById('Kaja Beauty');
var brandPeripera = document.getElementById('Peripera');
var brandRomnd = document.getElementById('rom&nd');
var priceRange = document.getElementById('priceRange');
var priceValue = document.getElementById('priceValue');
var products = document.getElementsByClassName('product');

// Function to filter products
function filterProducts() {
  // Initializing an empty array for each category (eyes, face, lips) that will store the selected categories
  var selectedCategories = [];
  // If the checkbox is checked, the string is added to the selectedCategories array
  // The idea to use push was taken from this link: https://www.w3schools.com/jsref/jsref_push.asp
  if (eyes.checked) selectedCategories.push('eyes');
  if (face.checked) selectedCategories.push('face');
  if (lips.checked) selectedCategories.push('lips');

  var selectedStock = [];
  if (inStock.checked) selectedStock.push('in-stock');
  if (outOfStock.checked) selectedStock.push('out-of-stock');

  var selectedBrands = [];
  if (brandETUDE.checked) selectedBrands.push('ETUDE');
  if (brandHince.checked) selectedBrands.push('hince');
  if (brandKaja.checked) selectedBrands.push('Kaja Beauty');
  if (brandPeripera.checked) selectedBrands.push('Peripera');
  if (brandRomnd.checked) selectedBrands.push('rom&nd');

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
eyes.addEventListener('change', filterProducts);
face.addEventListener('change', filterProducts);
lips.addEventListener('change', filterProducts);
inStock.addEventListener('change', filterProducts);
outOfStock.addEventListener('change', filterProducts);
brandETUDE.addEventListener('change', filterProducts);
brandHince.addEventListener('change', filterProducts);
brandKaja.addEventListener('change', filterProducts);
brandPeripera.addEventListener('change', filterProducts);
brandRomnd.addEventListener('change', filterProducts);

// Initial filter on page load
filterProducts();