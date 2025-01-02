function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    if (!selectedProduct) {
      console.error("Product not found");
      return;
    }
  
    // Retrieve or initialize the cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity
    } else {
      // Add new product with initial quantity of 1
      cart.push({ ...selectedProduct, quantity: 1 });
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Debugging: Log the cart contents after adding the product
    console.log('Cart after adding product:', JSON.parse(localStorage.getItem('cart')));
  }
  
  // Call this function when a user clicks the "Add to Cart" button for a product
  

function renderProducts(filteredProducts) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; // Clear the product list before rendering

  filteredProducts.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product-item');

      div.innerHTML = `
          <div class="card h-100 border-0">
              <img src="${product.img}" class="card-img-top" alt="${product.type}" />
              <div class="card-body">
                  <p class="card-text"><b>Type</b>: ${product.type}</p>
                  <p class="card-text"><b>Name</b>: ${product.name}</p>
                  <span class="price"><b>Price</b>: ${product.price}$</span>
                  <div class="rating"><b>Rating</b>: ${generateStars(product.rating)}</div>
                  <button class="b-design" onclick='addToCart(${product.id}, "${product.name}", ${product.price})'>Add to Cart</button>
              </div>
          </div>`;
      
      productList.appendChild(div);
  });
}
// Event Listeners
document.getElementById('searchInput').addEventListener('input', filterAndSortProducts);
document.getElementById('sortSelect').addEventListener('change', filterAndSortProducts);
document.getElementById('filterSelect').addEventListener('change', filterAndSortProducts);

// Initial render of products
renderProducts(products);

// Function to render products
function renderProducts(filteredProducts) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; // Clear the product list before rendering

  filteredProducts.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product-item');

      div.innerHTML = `
          <div class="card h-100 border-0">
              <img src="${product.img}" class="card-img-top" alt="${product.type}" />
              <div class="card-body">
                  <p class="card-text"><b>Type</b>: ${product.type}</p>
                  <p class="card-text"><b>Name</b>: ${product.name}</p>
                  <span class="price"><b>Price</b>: ${product.price}$</span>
                  <div class="rating"><b>Rating</b>: ${generateStars(product.rating)}</div>
                  <button class="b-design" onclick='addToCart(${product.id}, "${product.name}", ${product.price})'>Add to Cart</button>
              </div>
          </div>`;
      
      productList.appendChild(div);
  });
}

// Function to add a product to the cart
function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.id === id);

  if (existingProduct) {
      // Increase the quantity if it already exists in the cart
      existingProduct.quantity += 1; // Add 1 to the existing quantity
  } else {
      // Add new product to the cart
      cart.push({ id, name, price: price.toString(), quantity: 1 }); // Start quantity at 1
  }

  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  updateHeader(); // Update cart quantity in header

  // Show a message that the product was added
  alert(`${name} added to cart!`);
}

// Function to generate stars based on rating
function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
      stars += `<span class="fa fa-star ${i <= rating ? 'checked' : ''}"></span>`;
  }
  return stars;
}

// Function to update cart quantity in the header
function updateHeader() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cartQuantity").innerHTML = totalItems;
}

// Function to filter and sort products
function filterAndSortProducts() {
  let filteredProducts = products; // Assume 'products' is the list of all products

  // Search filter
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
      filteredProducts = filteredProducts.filter(product =>
          product.name.toLowerCase().includes(searchTerm)
      );
  }

  // Type filter
  const filterType = document.getElementById('filterSelect').value;
  if (filterType !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.type === filterType);
  }

  // Sort logic
  const sortOrder = document.getElementById('sortSelect').value;
  if (sortOrder === 'nameAsc') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'nameDesc') {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOrder === 'priceAsc') {
      filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'priceDesc') {
      filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'ratingAsc') {
      filteredProducts.sort((a, b) => a.rating - b.rating);
  } else if (sortOrder === 'ratingDesc') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  // Render the filtered and sorted products
  renderProducts(filteredProducts);
}

// Function to render cart items
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = ''; // Clear the cart items before rendering

  cart.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('cart-item');

      div.innerHTML = `
          <p><b>Name</b>: ${item.name}</p>
          <p><b>Price</b>: ${item.price}$</p>
          <p><b>Quantity</b>: <span class="quantity">${item.quantity}</span></p>
          <button onclick='removeFromCart(${item.id})'>Remove</button>
      `;
      
      cartItemsContainer.appendChild(div);
  });
}

// Function to remove items from the cart
function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Filter out the item with the given id
  cart = cart.filter(item => item.id !== id);
  
  // Save the updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  updateHeader(); // Update cart quantity in header
  
  // Re-render the cart items
  renderCart();
}

// Call renderCart on page load
document.addEventListener('DOMContentLoaded', renderCart);