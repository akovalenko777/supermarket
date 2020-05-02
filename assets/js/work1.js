//TODO: написать функцию, которая будет выводить список покупателей
function viewCustomersList() {
    debugger;
    let list = '<ul>';
    for (let i = 0; i = CUSTOMERS.length; i++){
        list += `<li><span>${CUSTOMERS[i].name}; ${CUSTOMERS[i].discount}%</span></li>`;
    }
    list +='</ul>';
    document.getElementById('customers_list').innerHTML = list;
}
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
