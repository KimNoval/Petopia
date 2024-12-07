document.addEventListener('DOMContentLoaded', () => {
    let iconCart = document.querySelector('.icon-cart');
    let closeCart = document.querySelector('.closeBtn');
    let body = document.querySelector('body');
    
    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });
    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    });
});
