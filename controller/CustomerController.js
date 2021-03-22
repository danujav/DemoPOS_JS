//button
let btnCustomerAdd = $('#btnCustomerAdd');
let btnCustomerUpdate = $('#btnCustomerUpdate');
let btnCustomerDelete = $('#btnCustomerDelete');
let btnCancel = $('#btnCancel');


//...................events.........................


btnCustomerAdd.click(function () {
   // $('#tblCustomerBody>tr').off('click');    // i use this here to of click event to the table row.

    //input text-fields
    let customerId = $('#customerId').val();
    let customerName = $('#custName').val();
    let customerAddress = $('#custAddress').val();
    let customerSalary = $('#custSalary').val();

    //send argument to the saveCustomer method to save objects in the array
    let res = saveCustomer(customerId, customerName, customerAddress, customerSalary);

    if(res){

        //bind event to the table row

       /* $('#tblCustomerBody>tr').click(function(){
            console.log($(this).children('td:eq(0)'))
        })*/

        $('#tblCustomerBody>tr').on('click', function(){
            let id = $(this).children('td:eq(0)').text();
            let name = $(this).children('td:eq(1)').text();
            let address = $(this).children('td:eq(2)').text();
            let salary = $(this).children('td:eq(3)').text();

            $('#customerId').val(id);
            $('#custName').val(name);
            $('#custAddress').val(address);
            $('#custSalary').val(salary);

        });

    }else{
        alert("oops....! Something Wrong..!")
    }
    clearFields();

});

btnCustomerUpdate.click( function () {

    let id = $('#customerId').val();
    let name = $('#custName').val();
    let address = $('#custAddress').val();
    let salary = $('#custSalary').val();

    let option=confirm(`Do you want to Update Customer ID: ${id}`);

    if(option) {
        let res = updateCustomer(id, name, address, salary);
        if (res) {
            alert("Customer Updated..!");
            $('#tblCustomerBody>tr').on('click', function(){
                let id = $(this).children('td:eq(0)').text();
                let name = $(this).children('td:eq(1)').text();
                let address = $(this).children('td:eq(2)').text();
                let salary = $(this).children('td:eq(3)').text();

                $('#customerId').val(id);
                $('#custName').val(name);
                $('#custAddress').val(address);
                $('#custSalary').val(salary);

            });

        } else {
            alert("Something went Wrong..!")
        }

        loadAllCustomerToTable();
        $('#tblCustomerBody>tr').on('click', function(){
            let id = $(this).children('td:eq(0)').text();
            let name = $(this).children('td:eq(1)').text();
            let address = $(this).children('td:eq(2)').text();
            let salary = $(this).children('td:eq(3)').text();

            $('#customerId').val(id);
            $('#custName').val(name);
            $('#custAddress').val(address);
            $('#custSalary').val(salary);

        });

        clearFields();
    }

  //loadAllCustomerToTable();
});

btnCustomerDelete.click(function () {
    let id = $('#customerId').val();
    let res = deleteCustomer(id);

    let option=confirm(`Do you want to Delete Customer : ${id}`);

    if(option){
        if(res){
            alert("Customer Deleted..!");
            $('#tblCustomerBody>tr').on('click', function(){
                let id = $(this).children('td:eq(0)').text();
                let name = $(this).children('td:eq(1)').text();
                let address = $(this).children('td:eq(2)').text();
                let salary = $(this).children('td:eq(3)').text();

                $('#customerId').val(id);
                $('#custName').val(name);
                $('#custAddress').val(address);
                $('#custSalary').val(salary);

            });
        }else {
            alert("Something went wrong..!");
        }

        loadAllCustomerToTable();

        $('#tblCustomerBody>tr').on('click', function(){
            let id = $(this).children('td:eq(0)').text();
            let name = $(this).children('td:eq(1)').text();
            let address = $(this).children('td:eq(2)').text();
            let salary = $(this).children('td:eq(3)').text();

            $('#customerId').val(id);
            $('#custName').val(name);
            $('#custAddress').val(address);
            $('#custSalary').val(salary);

        });
        clearFields();
    }else{

    }


});

//...................function.........................
function deleteCustomer(id) {
    let customer = searchId(id);
    if(customer != null){
        let indexNumber = customerObjectsArray.indexOf(customer);
        customerObjectsArray.splice(indexNumber, 1);
        return true;
    }else {
        return false;
    }
}

function searchId(id) {
    for (var i in customerObjectsArray) {
        if (customerObjectsArray[i].getCustomerId() == id) return customerObjectsArray[i];
    }
    return null;

}

function updateCustomer(id, name, address, salary) {
    let customer = searchId(id);

    if(customer != null){
        customer.setCustomerName(name);
        customer.setCustomerAddress(address);
        customer.setCustomerSalary(salary);

        return true;
    }else{
        return false;
    }

}

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