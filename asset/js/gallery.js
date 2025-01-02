// Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("current");
//     current[0].className = current[0].className.replace(" current", "");
//     this.className += " current";
//   });
// }

document.addEventListener('DOMContentLoaded', function () {
  // Initially render all products
  renderProducts(products);

  // Add click event listeners to all buttons for filtering
  const filterButtons = document.querySelectorAll('#myDIV .btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Get the filter value from the button
      const filterValue = this.getAttribute('data-filter');

      // If "All" is selected, show all products, otherwise filter by type
      if (filterValue === 'All') {
        renderProducts(products);
      } else {
        const filteredProducts = products.filter(product => product.type === filterValue);
        renderProducts(filteredProducts);
      }

      // Remove 'current' class from all buttons and add to the clicked button
      filterButtons.forEach(btn => btn.classList.remove('current'));
      this.classList.add('current');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  renderProducts(products);
});

//  Function to render products
function renderProducts(filteredProducts) {
  const productList = document.getElementById('products');
  productList.innerHTML = ''; // Clear the product list before rendering

  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-item', 'col-12', 'col-sm-6', 'col-md-6', 'col-lg-4')

    div.innerHTML = `
      <img src="${product.img}" alt="${product.type}" class="img-fluid w-100" draggable="false">
    `;

    productList.appendChild(div);
  });
}

