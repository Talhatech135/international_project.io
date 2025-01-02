const products = [
    {
        "id": "1",
        "type": "Furniture",
        "name": "Beds and Mattresses",
        "price": 150,
        "img": "asset/img/Furniture/beds1.jpg"
    },
    {
        "id": "2",
        "type": "Furniture",
        "name": "Beds and Mattresses",
        "price": 300,
        "img": "asset/img/Furniture/beds2.jpg"
    },
    {
        "id": "3",
        "type": "Furniture",
        "name": "Sofas and Couches",
        "price": 600,
        "img": "asset/img/Furniture/Sofa.jpg"
    },
    {
        "id": "4",
        "type": "Furniture",
        "name": "Chairs and Recliners",
        "price": 600,
        "img": "asset/img/Furniture/chair1.webp"
    },
    {
        "id": "5",
        "type": "Furniture",
        "name": "Chairs and Recliners",
        "price": 600,
        "img": "asset/img/Furniture/chair2.webp"
    },
    {
        "id": "6",
        "type": "Furniture",
        "name": "Dining Tables",
        "price": 600,
        "img": "asset/img/Furniture/diningTable1.jpg"
    }
];
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
          </div>
        </div>`;
      
      productList.appendChild(div);
    });
  }
  
  
  // Function to update cart quantity in the header
  function updateHeader() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cartQuantity").innerHTML = totalItems;
  }
  
  // Initial render of products
  renderProducts(products);
  