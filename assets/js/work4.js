function viewProductsList() {
    //TODO: функция заполнения выпадающего списка товаров
    let result = '';
    for (let key in PRODUCTS) {
        if (PRODUCTS[key].discount_price == 0) {
            PRODUCTS[key].discount_price = PRODUCTS[key].price;
        }
        result += `<li><span style="font-weight:bold; padding-right:20px; font-size:18px">${PRODUCTS[key].title}</span><span>${PRODUCTS[key].price} ₴ /
        <span style="color:#ff0000"> ${PRODUCTS[key].discount_price}</span><br><span> Доступно : ${PRODUCTS[key].amount} ед.</li>`;
    }
    document.getElementById('products_list').innerHTML = result;
}
viewProductsList();
