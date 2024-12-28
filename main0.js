// Apply filters based on category and price range
function applyFilters() {
    let category = document.getElementById('categoryFilter').value;
    let priceRange = document.getElementById('priceFilter').value;
    
    let products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        let productCategory = product.classList[1]; // assuming the second class is the category
        let productPrice = parseFloat(product.getAttribute('data-price'));
        
        // Check if product matches selected filters
        let isCategoryMatch = category ? productCategory === category : true;
        let isPriceMatch = false;
        
        if (priceRange) {
            if (priceRange === '0-500') {
                isPriceMatch = productPrice <= 500;
            } else if (priceRange === '500-1000') {
                isPriceMatch = productPrice > 500 && productPrice <= 1000;
            } else if (priceRange === '1000-5000') {
                isPriceMatch = productPrice > 1000 && productPrice <= 5000;
            } else if (priceRange === '5000+') {
                isPriceMatch = productPrice > 5000;
            }
        } else {
            isPriceMatch = true;
        }
        
        // Toggle visibility based on filter criteria
        if (isCategoryMatch && isPriceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
