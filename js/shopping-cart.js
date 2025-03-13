let listCartHTML = document.querySelector(".list-cart");
let cartCount = document.querySelector(".totalQuantity");
let totalPriceHTML = document.querySelector(".total-price");

let listCart = JSON.parse(localStorage.getItem("listCart")) || [];

function saveCart() {
  localStorage.setItem("listCart", JSON.stringify(listCart));
}

function updateTotalPrice() {
  let totalPrice = listCart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  totalPriceHTML.innerText = `Total: ${totalPrice} SEK`;
}

function addCartToHTML() {
  if (!listCartHTML) return;
  listCartHTML.innerHTML = "";

  if (listCart.length === 0) {
    listCartHTML.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  listCart.forEach((product, index) => {
    let newCartItem = document.createElement("div");
    newCartItem.classList.add("cart-item");
    newCartItem.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <div class="cart-content">
                  <strong>${product.name}</strong>
                  <p>${product.price} SEK</p>
                  <div class="quantity-controls">
                      <button class="decrease" data-index="${index}">-</button>
                      <span class="value">${product.quantity}</span>
                      <button class="increase" data-index="${index}">+</button>
                  </div>
              </div>
          `;
    listCartHTML.appendChild(newCartItem);
  });

  updateTotalPrice();
  attachCartEventListeners();
}

function changeQuantity(index, type) {
  if (type === "+") {
    listCart[index].quantity++;
  } else if (type === "-") {
    listCart[index].quantity--;
    if (listCart[index].quantity <= 0) {
      listCart.splice(index, 1);
    }
  }

  saveCart();
  addCartToHTML();
}

function attachCartEventListeners() {
  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      changeQuantity(index, "+");
    });
  });

  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      changeQuantity(index, "-");
    });
  });
}

addCartToHTML();
