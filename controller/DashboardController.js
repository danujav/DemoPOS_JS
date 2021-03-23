var dashboardController = $('#firstSection');
var manageCustomer = $('#secondSection');
var manageItem = $('#thirdSection')
var order = $('#fourthSection')

manageCustomer.hide();
dashboardController.show();
manageItem.hide();
order.hide();

$('#btnCustomer').click(function () {
    var dashboard = $('#firstSection');
    var manageCustomer = $('#secondSection');
    var manageItem = $('#thirdSection')
    var order = $('#fourthSection')

    manageCustomer.show();
    dashboard.hide();
    manageItem.hide();
    order.hide();
});

$('#btnDashboard').click(function () {
    var dashboard = $('#firstSection');
    var manageCustomer = $('#secondSection');
    var manageItem = $('#thirdSection')
    var order = $('#fourthSection')

    manageCustomer.hide();
    dashboard.show();
    manageItem.hide();
    order.hide();
});

$('#btnItem').click(function () {
    var dashboard = $('#firstSection');
    var manageCustomer = $('#secondSection');
    var manageItem = $('#thirdSection')
    var order = $('#fourthSection')

    manageCustomer.hide();
    dashboard.hide();
    manageItem.show();
    order.hide();
});

/*function loadItemCode() {
    let allItems = itemObjectsArray;
    let count = 0;
    $('#cmbItemCode').children().remove();
    $('#cmbItemCode').append("<option>--Select--</option>");
    $($('#cmbItemCode').children().get(0)).attr('selected', 'true');
    $($('#cmbItemCode').children().get(0)).attr('disabled', 'true');

    allItems.forEach(function () {
        $('#cmbItemCode').append("<option>" + allItems[count].getItemCode() + "</option>");
        count++;
    });
    $('#cmbItemCode').on('change', function () {
        for (var i in allItems) {
            if ($('#cmbItemCode :selected').val() === allItems[i].getItemCode()) {
               /!* $('#txtItemCode').val(allItems[i].getItemCode());
                $('#txtDescription').val(allItems[i].getDescription());
                $('#txtQtyOnHand').val(allItems[i].getQtyOnHand());
                $('#txtUnitPrice').val(allItems[i].getPrice());*!/

                console.log("done")
            }
        }
    });
}*/

function loadItemCode() {
    let allItem = itemObjectsArray;
    let count = 0;
    $('#cmbItemCode').children().remove();
    $('#cmbItemCode').append("<option>--Select--</option>");
    $($('#cmbItemCode').children().get(0)).attr('selected', 'true');
    $($('#cmbItemCode').children().get(0)).attr('disabled', 'true');

    allItem.forEach(function () {
        $('#cmbItemCode').append("<option>" + allItem[count].getItemCode() + "</option>");
        count++;
    });

    $('#cmbItemCode').on('change', function () {
        for (var i in allItem) {
          //  console.log(allItem[i].getItemCode());
            if ($('#cmbItemCode :selected').val() == allItem[i].getItemCode()) {
                $('#itemCodeDetail').val(allItem[i].getItemCode());
                $('#descriptionItem').val(allItem[i].getDescription());
                $('#qtyOnHandItem').val(allItem[i].getQtyOnHand());
                $('#unitPrice').val(allItem[i].getPrice());
            }
        }
    });
}

function getCurrentDate() {
   var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

     today = yyyy + '-' + mm + '-' + dd;
    $("#orderDate").val(today);
}

function loadCustomerId() {
    let allCustomer = customerObjectsArray;
    let count = 0;
    $('#cmbBoxCustomerId').children().remove();
    $('#cmbBoxCustomerId').append("<option>--Select--</option>");
    $($('#cmbBoxCustomerId').children().get(0)).attr('selected', 'true');
    $($('#cmbBoxCustomerId').children().get(0)).attr('disabled', 'true');

    allCustomer.forEach(function () {
        $('#cmbBoxCustomerId').append("<option>" + allCustomer[count].getCustomerId() + "</option>");
        count++;
    });
    $('#cmbBoxCustomerId').on('change', function () {
        for (var i in allCustomer) {
            if ($('#cmbBoxCustomerId :selected').val() === allCustomer[i].getCustomerId()) {
                $('#customId').val(allCustomer[i].getCustomerId());
                $('#customName').val(allCustomer[i].getCustomerName());
                $('#customAddress').val(allCustomer[i].getCustomerAddress());
                $('#customSalary').val(allCustomer[i].getCustomerSalary());
            }
        }
    });
}

$('#btnOrder').click(function () {
    var dashboard = $('#firstSection');
    var manageCustomer = $('#secondSection');
    var manageItem = $('#thirdSection')
    var order = $('#fourthSection')

    manageCustomer.hide();
    dashboard.hide();
    manageItem.hide();
    order.show();

    loadCustomerId();
    loadItemCode();
    getCurrentDate();
    getCurrentDate();
});

