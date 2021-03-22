function loadCustomerId() {
    let allCustomer = customerObjectsArray;
    let count = 0;
    $('#cmbBoxCustomerId').children().remove();
    $('#cmbBoxCustomerId').append("<option>--Select--</option>");
    $($('#cmbBoxCustomerId').children().get(0)).attr('selected', 'true');
    $($('#cmbBoxCustomerId').children().get(0)).attr('disabled', 'true');

    allCustomer.forEach(function () {
        $('#cmbBoxCustomerId').append("<option>" + allCustomer[count].getCode() + "</option>");
        count++;
    });
    $('#cmbBoxCustomerId').on('change', function () {
        for (var i in allCustomer) {
            if ($('#cmbBoxCustomerId :selected').val() === allCustomer[i].getItemCode()) {
                $('#txtItemCode').val(allCustomer[i].getItemCode());
                $('#txtDescription').val(allCustomer[i].getDescription());
                $('#txtQtyOnHand').val(allCustomer[i].getQtyOnHand());
                $('#txtUnitPrice').val(allCustomer[i].getPrice());
            }
        }
    });
}