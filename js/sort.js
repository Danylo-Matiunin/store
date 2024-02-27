const sortLowButton = document.querySelector('.sort-low');
const sortHighButton = document.querySelector('.sort-high');
const productsContainer = document.querySelector('.products');

fetch('products.json')
  .then(response => response.json())
  .then(data => {
    displayProducts(data);
    
    sortLowButton.addEventListener('click', () => {
      const sortedProducts = data.slice().sort((a, b) => a.price - b.price);
      displayProducts(sortedProducts);
    });

    sortHighButton.addEventListener('click', () => {
      const sortedProducts = data.slice().sort((a, b) => b.price - a.price);
      displayProducts(sortedProducts);
    });
  });

function displayProducts(products) {
  productsContainer.innerHTML = '';

  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    imageElement.alt = product.title;

    const titleElement = document.createElement('h3');
    titleElement.textContent = product.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;

    const priceElement = document.createElement('p');
    priceElement.textContent = `$${product.price.toFixed(2)}`;

    productElement.appendChild(imageElement);
    productElement.appendChild(titleElement);
    productElement.appendChild(descriptionElement);
    productElement.appendChild(priceElement);

    productsContainer.appendChild(productElement);
  });
}
