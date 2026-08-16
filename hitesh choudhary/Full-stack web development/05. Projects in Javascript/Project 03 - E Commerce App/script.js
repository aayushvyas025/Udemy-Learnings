document.addEventListener("DOMContentLoaded", function () {
  console.log("Dom content loaded successfully!!!");
  // dom elements
  const cartItems = document.getElementById("cart-items");
  const productsList = document.getElementById("product-list");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const cartTotalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  // features

     const products = [
        { id: 1, name: "Product 1", price: 300 },
        { id: 2, name: "product 2", price: 500 },
        { id: 3, name: "product 3", price: 700 },
        { id: 4, name: "product 4", price: 900 },
      ]; 

     let cart = JSON.parse(localStorage.getItem("cart")) || [],
   

  function AddToCartItems(product) {
    if (!product) return;
    cart.push(product);
    saveCart();
    renderCart(cart);
  }

  function renderEmptyCart(cart) {
    if (cart.length === 0) {
      emptyCartMessage.classList.remove("hidden");
      cartTotalMessage.classList.add("hidden");
      cartTotalPrice.innerText = 0.00;
      return;
    }

    emptyCartMessage.classList.add("hidden");
    cartTotalMessage.classList.remove("hidden")
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart(cart) {
    if (!cart) return;
    let totalPrice = 0;
    cartItems.innerHTML = "";
    renderEmptyCart(cart);
    cart.forEach((item, index) => {
      console.log(item);
      totalPrice += item.price;
      const cartItem = document.createElement("div");
      cartItem.classList.add('cart-item'); 
      cartItem.innerHTML = `<span>${item.name} - ${item.price.toFixed(2)}</span> <button data-id=${item.id}>Delete</button>`;
      cartItems.appendChild(cartItem);
      const deleteBtn = cartItem.querySelector('button'); 
      deleteBtn.addEventListener('click', function(event){
        if(event.target.tagName === "BUTTON") {
            console.log("product deleted")
            const itemId = parseInt(event.target.getAttribute("data-id")); 
            cart= cart.filter(product => product.id !== itemId);  
            saveCart(); 
            renderCart(cart);  
        }
      })
    });
    cartTotalPrice.innerText = totalPrice;
  }

  function renderProducts() {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span> <button data-id=${product.id}>Add to Cart</button>`;
      productsList.appendChild(productDiv);
      const addToCartBtn = productDiv.querySelector("button");
      addToCartBtn.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
          const productId = parseInt(event.target.getAttribute("data-id"));
          const product = products.find((product) => product.id === productId);
          AddToCartItems(product);
        }
      });
    });
  }

  renderProducts();

  // event listener
  checkoutBtn.addEventListener("click", function () {
    alert(`Your Total Bill is $${cartTotalPrice.innerText}`);
  });
  console.log(cart); 
});
