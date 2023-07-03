let priceBuy = document.getElementById('priceBuy');
let valueProducts = document.getElementById('valueProducts');
let btnInBuyBasket = document.querySelectorAll('.btn__flex-item');

for (let elem of btnInBuyBasket) {
    elem.addEventListener('click', () => {
        let price = parseFloat(elem.previousElementSibling.textContent);

        valueProducts.textContent++;
        priceBuy.textContent = +priceBuy.textContent + price;
    })
}