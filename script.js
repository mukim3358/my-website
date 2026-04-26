// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

// Add item to cart
function addCart(productName, price) {
    const item = {
        name: productName,
        price: price,
        id: Date.now()
    };
    
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`✅ ${productName} added to cart!`);
}

// Update cart count display
function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Smooth scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Open WhatsApp
function openWhatsApp() {
    const phoneNumber = '919999999999'; // Replace with your number
    const message = `Hi! I'm interested in your products. Cart has ${cart.length} items.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}