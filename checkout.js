

let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}
// Retrieve cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalQuantity = document.getElementById('totalQuantity');
    const totalPrice = document.getElementById('totalPrice');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalQuantity.textContent = '0';
        totalPrice.textContent = '$0.00';
        return;
    }

    cartItemsContainer.innerHTML = ''; // Clear container before rendering

    let totalQty = 0;
    let totalCost = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('item');

        // Create cart item HTML
        cartItem.innerHTML = `
            <img src="images/1.webp" alt="Product Image">
            <div class="info">
                <div class="name">${item.name}</div>
                <div class="price">$${item.price} / 1 product</div>
            </div>
            <div class="quantity">${item.quantity}</div>
            <div class="returnPrice">$${item.totalPrice}</div>
        `;

        cartItemsContainer.appendChild(cartItem);

        // Update totals
        totalQty += item.quantity;
        totalCost += parseFloat(item.totalPrice);
    });

    // Update total quantity and total price
    totalQuantity.textContent = totalQty;
    totalPrice.textContent = `$${totalCost.toFixed(2)}`;
}

// Render cart items on page load
renderCartItems();
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        let isVisible = true;
        
        // Filter by category
        if (categoryFilter && !product.classList.contains(categoryFilter)) {
            isVisible = false;
        }
        
        // Filter by price
        const productPrice = parseFloat(product.getAttribute('data-price'));
        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(Number);
            if (max && (productPrice < min || productPrice > max)) {
                isVisible = false;
            } else if (!max && productPrice < min) {
                isVisible = false;
            }
        }
        
        // Show/hide product based on filter
        product.style.display = isVisible ? 'block' : 'none';
    });
}
let cartCount = 0;

function updateCartCount() {
    cartCount++;
    document.getElementById('counter').textContent = cartCount;
}

document.getElementById('btn_add1').addEventListener('click', updateCartCount);
document.getElementById('btn_add2').addEventListener('click', updateCartCount);
document.getElementById('btn_add3').addEventListener('click', updateCartCount);
document.getElementById('btn_add4').addEventListener('click', updateCartCount);
document.getElementById('btn_add5').addEventListener('click', updateCartCount);
document.getElementById('btn_add6').addEventListener('click', updateCartCount);
document.getElementById('btn_add7').addEventListener('click', updateCartCount);
document.getElementById('btn_add8').addEventListener('click', updateCartCount);
document.getElementById('btn_add9').addEventListener('click', updateCartCount);
document.getElementById('btn_add10').addEventListener('click', updateCartCount);
document.getElementById('btn_add11').addEventListener('click', updateCartCount);
document.getElementById('btn_add12').addEventListener('click', updateCartCount);
document.getElementById('btn_add13').addEventListener('click', updateCartCount);
document.getElementById('btn_add17').addEventListener('click', updateCartCount);
document.getElementById('btn_add15').addEventListener('click', updateCartCount);
document.getElementById('btn_add16').addEventListener('click', updateCartCount);
document.getElementById('btn_add17').addEventListener('click', updateCartCount);
document.getElementById('btn_add18').addEventListener('click', updateCartCount);
document.getElementById('btn_add19').addEventListener('click', updateCartCount);
document.getElementById('btn_add20').addEventListener('click', updateCartCount);
document.getElementById('btn_add21').addEventListener('click', updateCartCount);
document.getElementById('btn_add22').addEventListener('click', updateCartCount);
document.getElementById('btn_add23').addEventListener('click', updateCartCount);
document.getElementById('btn_add24').addEventListener('click', updateCartCount);


function logout() {
    // Clear session or token if any
    // Redirect to login page (or reload the page)
    window.location.href = 'login.html';  // Change this URL to your actual login page
}
console.log(localStorage.getItem('cart'));
// Function to display current date and time
function showDateAndTime() {
    // Get current date and time
    let currentDateTime = new Date();
    let date = currentDateTime.toLocaleDateString(); // Date in MM/DD/YYYY format
    let time = currentDateTime.toLocaleTimeString(); // Time in HH:MM:SS AM/PM format
   
    // Display date and time in the HTML
    let dateTimeHTML = document.querySelector('.dateTime');
    if (dateTimeHTML) {
        dateTimeHTML.innerHTML = `Current Date and Time: ${date} ${time}`;
    }
}
