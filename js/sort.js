// High
function sortProductsByPrice() {
    const productCards = document.querySelectorAll('.card');
    const productArray = Array.from(productCards);

    const sortedProducts = productArray.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
        return priceA - priceB;
    });

    const productContainer = document.querySelector('.row');
    productContainer.innerHTML = '';

    sortedProducts.forEach(product => {
        const clonedProduct = product.cloneNode(true);
        clonedProduct.style.padding = '';
        productContainer.appendChild(clonedProduct);
    });
}

//Style
function setRowGap(gapValue) {
    let rows = document.getElementsByClassName("row");
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.gap = gapValue;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setRowGap("24px");
});

const sortByPriceLink = document.querySelector('.dropdown-item[href="#!"]');
sortByPriceLink.addEventListener('click', sortProductsByPrice);


// Low
function sortProductsByPriceBack() {
    const productCards = document.querySelectorAll('.card');
    const productArray = Array.from(productCards);

    const sortedProducts = productArray.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
        return priceB - priceA;
    });

    const productContainer = document.querySelector('.row');
    productContainer.innerHTML = '';

    sortedProducts.forEach(product => {
        const clonedProduct = product.cloneNode(true);
        clonedProduct.style.padding = '';
        productContainer.appendChild(clonedProduct);
    });
}
