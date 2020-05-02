function addCustomer() {
    let nameInput = document.querySelector("#customer_name").value,
        prosentInput = document.querySelector('#customer_discount').value;
    if (nameInput != '' && prosentInput != '') {
        CUSTOMERS.push({
            name: nameInput,
            discount: prosentInput,
            status: 0,
            cart: []
        });
    } else {
        alert('Error, try again!');

    }
}
