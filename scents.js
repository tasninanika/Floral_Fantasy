const cartItems = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const cartCountElement = document.getElementById("cart-count");
const cartSection = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");

let total = 0;
let itemCount = 0;

function addToCart(name, price) {
  const li = document.createElement("li");
  li.textContent = `${name} - $${price}`;
  cartItems.appendChild(li);

  total += price;
  itemCount++;
  cartCountElement.textContent = itemCount;
  totalPriceElement.textContent = `Total: $${total}`;
}

cartBtn.addEventListener("click", () => {
  cartSection.classList.toggle("hidden");
});
