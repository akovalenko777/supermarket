<<<<<<< HEAD
//TODO: написать функцию, которая будет выводить список покупателей
function viewCustomersList() {
    let list = '<ul>';
    for (let i = 0; i < CUSTOMERS.length; i++) {
        list += `<li><span>${CUSTOMERS[i].name}; ${CUSTOMERS[i].discount}%</span></li>`;
    }
    list += '</ul>';
    document.getElementById('customers_list').innerHTML = list;
}
=======
>>>>>>> master
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
<<<<<<< HEAD
function getCustomersOptions() {
    //TODO: функция заполнения выпадающего списка покупателей
    let kol = CUSTOMERS.length,
        optList = '<option value="">-=Выберите покупателя=-</option>';
    for (let i = 0; i < kol; i++) {
        optList += '<option value="' + CUSTOMERS[i].name + '">' + CUSTOMERS[i].name + '</option>';
    }
    document.getElementById('customers_select').innerHTML = optList;
}
viewCustomersList();
=======

//TODO: написать функцию, которая будет выводить список покупателей
function viewCustomersList() {
    let list = '<ul>';
    for (let i = 0; i < CUSTOMERS.length; i++){
        list += `<li><span>${CUSTOMERS[i].name}; ${CUSTOMERS[i].discount}%</span><button type="button" onclick="processCustomer()">Скупиться</button></li>`;
    }
    list +='</ul>';
    document.getElementById('customers_list').innerHTML = list;
}
>>>>>>> master
