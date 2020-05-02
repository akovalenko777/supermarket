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