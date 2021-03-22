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

    alert("work")
    loadCustomerId();

});

