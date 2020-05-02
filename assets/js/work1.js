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
    getCustomersOptions();
    viewCustomersList();
}

//TODO: написать функцию, которая будет выводить список покупателей
function viewCustomersList() {
    let list = '<ul>';
    for (let i = 0; i < CUSTOMERS.length; i++){
        if (CUSTOMERS[i].status == 1) {
        list += `<li><span>${CUSTOMERS[i].name}; ${CUSTOMERS[i].discount}%</span><button type="button" onclick="processCustomer()">На кассу</button></li>`;
        } else {
            list += `<li><span>${CUSTOMERS[i].name}; ${CUSTOMERS[i].discount}%</span></li>`;
        }
    }
    list +='</ul>';
    document.getElementById('customers_list').innerHTML = list;
}
