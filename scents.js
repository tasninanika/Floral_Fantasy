let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center";

    li.innerHTML = `
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeFromCart(${index})" class="text-red-500 btn px-2">Remove</button>
      `;

    cartList.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function toggleCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.classList.toggle("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
});
