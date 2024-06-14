document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('nav ul li a');

  function showPage(pageId) {
    pages.forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      showPage(event.target.getAttribute('onclick').split("'")[1]);
    });
  });

  showPage('home');
});

let cart = [];

function addToCart(productName, price) {
  const cartCount = document.getElementById('cartCount');
  const cartList = document.getElementById('cartList');
  const totalAmount = document.getElementById('totalAmount');

  const cartItem = { productName, price, id: Date.now() };
  cart.push(cartItem);

  const listItem = document.createElement('li');
  listItem.textContent = `${productName} - GH${price.toFixed(2)}`;
  listItem.id = cartItem.id;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.onclick = () => removeFromCart(cartItem.id);

  listItem.appendChild(removeButton);
  cartList.appendChild(listItem);

  const currentTotal = parseFloat(totalAmount.textContent);
  totalAmount.textContent = (currentTotal + price).toFixed(2);

  cartCount.textContent = cart.length;
}

function removeFromCart(itemId) {
  const cartList = document.getElementById('cartList');
  const totalAmount = document.getElementById('totalAmount');

  const itemIndex = cart.findIndex(item => item.id === itemId);
  if (itemIndex > -1) {
    const [removedItem] = cart.splice(itemIndex, 1);
    const currentTotal = parseFloat(totalAmount.textContent);
    totalAmount.textContent = (currentTotal - removedItem.price).toFixed(2);
  }

  const itemElement = document.getElementById(itemId);
  if (itemElement) {
    cartList.removeChild(itemElement);
  }

  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = cart.length;
}

function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const productName = card.querySelector('h2').textContent.toLowerCase();
    if (productName.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function navigate(direction) {
  // Implement navigation logic if needed
}
