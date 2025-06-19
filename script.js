// script.js
// script.js
const products = [
  { id: 1, name: "Denim Jacket", price: 4150, category: "Jackets", image: "https://images.unsplash.com/photo-1602810318883-6b8caaf6f0cb?auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Graphic Tee", price: 1650, category: "T-Shirts", image: "https://images.unsplash.com/photo-1622519407082-848172b37685?auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Skinny Jeans", price: 3320, category: "Pants", image: "https://images.unsplash.com/photo-1585128792020-3c1d41c9fdf5?auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Sneakers", price: 4990, category: "Shoes", image: "https://images.unsplash.com/photo-1616469829580-338b0c6bd660?auto=format&fit=crop&w=400&q=80" },
  { id: 5, name: "Hoodie", price: 2490, category: "Sweatshirts", image: "https://images.unsplash.com/photo-1618354691278-62fc2cbe7e33?auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Formal Shirt", price: 2900, category: "Shirts", image: "https://images.unsplash.com/photo-1593032457865-44d2f6e6f58f?auto=format&fit=crop&w=400&q=80" },
  { id: 7, name: "Chinos", price: 3570, category: "Pants", image: "https://images.unsplash.com/photo-1584467735871-d2e4b230c55c?auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Leather Jacket", price: 7490, category: "Jackets", image: "https://images.unsplash.com/photo-1618375531911-2c1c197a8d6d?auto=format&fit=crop&w=400&q=80" },
  { id: 9, name: "Canvas Shoes", price: 3750, category: "Shoes", image: "https://images.unsplash.com/photo-1619023059914-b0cc47e29dd7?auto=format&fit=crop&w=400&q=80" },
  { id: 10, name: "Printed Kurta", price: 2090, category: "Ethnic", image: "https://images.unsplash.com/photo-1582437576983-6b9c54c6c43c?auto=format&fit=crop&w=400&q=80" },
  { id: 11, name: "Crop Top", price: 1340, category: "Tops", image: "https://images.unsplash.com/photo-1520975681460-a9b34a0cfdb0?auto=format&fit=crop&w=400&q=80" },
  { id: 12, name: "Palazzo Pants", price: 2490, category: "Pants", image: "https://images.unsplash.com/photo-1602810318232-8583a388ccfa?auto=format&fit=crop&w=400&q=80" },
  { id: 13, name: "Woolen Scarf", price: 1120, category: "Accessories", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" },
  { id: 14, name: "Baseball Cap", price: 950, category: "Accessories", image: "https://images.unsplash.com/photo-1611967164524-3ec5ce66d289?auto=format&fit=crop&w=400&q=80" },
  { id: 15, name: "Cargo Pants", price: 2920, category: "Pants", image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80" },
  { id: 16, name: "Bomber Jacket", price: 5400, category: "Jackets", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80" },
  { id: 17, name: "Ankle Boots", price: 5990, category: "Shoes", image: "https://images.unsplash.com/photo-1603981549846-259f2b250248?auto=format&fit=crop&w=400&q=80" },
  { id: 18, name: "Maxi Dress", price: 4990, category: "Dresses", image: "https://images.unsplash.com/photo-1520975941448-4eac06d4e65c?auto=format&fit=crop&w=400&q=80" },
  { id: 19, name: "Tank Top", price: 1170, category: "Tops", image: "https://images.unsplash.com/photo-1572101901650-fcca9201d94b?auto=format&fit=crop&w=400&q=80" },
  { id: 20, name: "Track Jacket", price: 3250, category: "Jackets", image: "https://images.unsplash.com/photo-1588286840104-8957f1b6b18b?auto=format&fit=crop&w=400&q=80" },
  { id: 21, name: "Linen Shirt", price: 2790, category: "Shirts", image: "https://images.unsplash.com/photo-1618354691541-70f7f265d16f?auto=format&fit=crop&w=400&q=80" },
  { id: 22, name: "Slip Dress", price: 3580, category: "Dresses", image: "https://images.unsplash.com/photo-1616016709212-cde2fd7f880f?auto=format&fit=crop&w=400&q=80" },
  { id: 23, name: "Blazer", price: 5850, category: "Outerwear", image: "https://images.unsplash.com/photo-1618354691455-682d66cc8b29?auto=format&fit=crop&w=400&q=80" },
  { id: 24, name: "Flannel Shirt", price: 2590, category: "Shirts", image: "https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=400&q=80" },
  { id: 25, name: "High Heels", price: 4710, category: "Shoes", image: "https://images.unsplash.com/photo-1531310138845-7c31d6dc81a4?auto=format&fit=crop&w=400&q=80" }
];



const cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function renderProducts(filter = "") {
  productList.innerHTML = "";
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.category.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%; height:auto; border-radius:8px;" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <label for="rating-${product.id}">Rating:</label>
      <select id="rating-${product.id}" onchange="rateProduct(${product.id}, this.value)">
        <option value="">--Rate--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p id="review-${product.id}">No rating yet.</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

function rateProduct(id, rating) {
  const review = document.getElementById(`review-${id}`);
  review.textContent = `Rated: ${rating} star${rating > 1 ? 's' : ''}`;
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rs ${item.price}`;
    cartItems.appendChild(li);
  });
  cartTotal.textContent = `Rs ${total}`;
}

// Add search filter UI and basic login/register simulation
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.placeholder = "Search products...";
  searchBar.style.margin = "1rem 0";
  searchBar.addEventListener("input", (e) => {
    renderProducts(e.target.value);
  });
  document.getElementById("products").insertBefore(searchBar, productList);

  renderProducts();

  // Simple user login/register simulation
  const userAuth = document.createElement("div");
  userAuth.innerHTML = `
    <input type="text" placeholder="Username" id="username" />
    <input type="password" placeholder="Password" id="password" />
    <button onclick="loginUser()">Login</button>
    <button onclick="registerUser()">Register</button>
    <p id="auth-msg"></p>
  `;
  document.body.prepend(userAuth);
});

function loginUser() {
  const user = document.getElementById("username").value;
  const msg = document.getElementById("auth-msg");
  msg.textContent = `Welcome back, ${user}!`;
}

function registerUser() {
  const user = document.getElementById("username").value;
  const msg = document.getElementById("auth-msg");
  msg.textContent = `Account created for ${user}. Please login.`;
}
