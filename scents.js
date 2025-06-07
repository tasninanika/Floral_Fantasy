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
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

function toggleCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  cartItemsDiv.classList.toggle("hidden");
}

// Load from localStorage when page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }
});
