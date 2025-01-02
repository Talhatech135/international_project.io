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
            <button class="b-design border-0" onclick='alert("Product Added To Cart")'>Add to Cart</button>
          </div>
        </div>`;
      
      productList.appendChild(div);
    });
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
  
  // Event Listeners
  document.getElementById('searchInput').addEventListener('input', filterAndSortProducts);
  document.getElementById('sortSelect').addEventListener('change', filterAndSortProducts);
  document.getElementById('filterSelect').addEventListener('change', filterAndSortProducts);
  
  // Initial render of products
  renderProducts(products);
  