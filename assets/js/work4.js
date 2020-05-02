function addProduct() {
    //TODO: функция добавления товаров в общий список
    let title = document.getElementById("product_title").value,
        price = document.getElementById("product_price").value,
        discount_price = document.getElementById("product_discount_price").value,
        amount = document.getElementById("product_amount").value;
    let valid = true;
    let msg = 'Товар успешно добавлен';
    if (title == '') {
        valid = false;
        msg = 'Укажите название товара';
    }
    if (price == '') {
        valid = false;
        msg = 'Укажите цену';
    } else {
        if (parseInt(price) == 0) {
            valid = false;
            msg = 'Цена не может быть нулевой';
        }
    }
    if (discount_price == '') {
        discount_price = 0;
    }
    if (amount == '') {
        valid = false;
        msg = 'Укажите доступное количество';
    } else {
        if (parseInt(amount) == 0) {
            valid = false;
            msg = 'Количество не может быть нулевым';
        }
    }
    if (valid) {
        PRODUCTS.push({
            title: title,
            price: parseFloat(price),
            discount_price: parseFloat(discount_price),
            amount: parseInt(amount)
        });
        document.getElementById("product_title").value = '';
        document.getElementById("product_price").value = '';
        document.getElementById("product_discount_price").value = '';
        document.getElementById("product_amount").value = '';
        //viewProductsList();
        getProductsOptions();
    } else {
        alert(msg);
    }
}
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
