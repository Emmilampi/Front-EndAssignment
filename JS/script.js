
//Inspiration to cart functionality from this article:
//https://dev.to/pillagerplayz/how-to-create-a-simple-shopping-cart-in-html5-css3-and-js-with-payment-integration-4cel



//basic setup

document.addEventListener('DOMContentLoaded', function () {
  // Variables
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to save cart to localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});

// Function to add product to cart
function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartCount();
  }


function updateCartCount()



updateCartCount() {



function removeFromCart 

alert product Added to Cart

alert product removed from Cart


function updatecart