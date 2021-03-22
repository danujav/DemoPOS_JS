//button
let btnCustomerAdd = $('#btnCustomerAdd');
let btnCustomerUpdate = $('#btnCustomerUpdate');
let btnCustomerDelete = $('#btnCustomerDelete');
let btnCancel = $('#btnCancel');


//...................events.........................

btnCustomerAdd.click(function () {
    //input text-fields
    let customerId = $('#customerId').val();
    let customerName = $('#custName').val();
    let customerAddress = $('#custAddress').val();
    let customerSalary = $('#custSalary').val();

    //send argument to the saveCustomer method to save objects in the array
    let res = saveCustomer(customerId, customerName, customerAddress, customerSalary);

    if(res){
        clearFields();
    }else{
        alert("oops....! Something Wrong..!")
    }

});

//...................function.........................
function clearFields() {
    $('#customerId').val("");
    $('#custName').val("");
    $('#custAddress').val("");
    $('#custSalary').val("");
}

function saveCustomer(customerId, customerName, customerAddress, customerSalary) {

    //create customer object for push that to array
    let customer = new CustomerDTO(customerId, customerName, customerAddress, customerSalary);

    //push customer object to array
    customerObjectsArray.push(customer);

    //load customer detail to the customer table
    loadAllCustomerToTable();

    return true
}
function loadAllCustomerToTable() {
    //get the customerDTO array
    let customer = getAllCustomerDTOs();

    $('#tblCustomerBody').empty();

    //get the one by one object from the array
    for (let i in customer){
        let customerId = customer[i].getCustomerId();
        let customerName = customer[i].getCustomerName();
        let customerAddress = customer[i].getCustomerAddress();
        let customerSalary = customer[i].getCustomerSalary();

        //set values for the html element
        let row = "<tr><td>" +customerId + "</td><td>" +customerName+ "</td><td>" +customerAddress + "</td><td>"+customerSalary+"</td></tr>";

        //set above row to the table body.
        $('#tblCustomerBody').append(row);
    }
}

//return customer Objects array
function getAllCustomerDTOs() {
    return customerObjectsArray;
}