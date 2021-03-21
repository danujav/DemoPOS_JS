var dashboard = $('#firstSection');
var manageCustomer = $('#secondSection');
var manageItem = $('#thirdSection')
var order = $('#fourthSection')

manageCustomer.hide();
dashboard.show();
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

$('#btnOrder').click(function () {
    var dashboard = $('#firstSection');
    var manageCustomer = $('#secondSection');
    var manageItem = $('#thirdSection')
    var order = $('#fourthSection')

    manageCustomer.hide();
    dashboard.hide();
    manageItem.hide();
    order.show();
});

