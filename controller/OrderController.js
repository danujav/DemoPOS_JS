

$('#btnAddToCart').click(function(){
    alert("event trigger")
    let itemCode = $('#itemCodeDetail').val();
    let description = $('#descriptionItem').val();
    let unitPrice = $('#unitPrice').val();
    let qty = $('#txtOrderQTY').val();

    let res = placeOrder(itemCode, description, unitPrice, qty);
    if(res){
        alert("done")
    }else {
        alert("error")
    }
})

function placeOrder(itemCode, description, unitPrice, qty) {
    let order = getAllOrder();
    let placeOrderDTO = new PlaceOrderDTO(itemCode, description, unitPrice, qty);

    order.push(placeOrderDTO);

    loadAllOrderDetail();

    return true;

}
function getAllOrder() {
    return orderObjectsArray;
}

function loadAllOrderDetail() {
    //get the CustomerDTO array
    let order = getAllOrder();

    $('#tblOrder').empty();

    //get the one by one object from the array
    for (let i in order){
        let itemCode = order[i].getItemCode();
        let description = order[i].getOderDescription();
        let unitPrice = order[i].getUnitPrice();
        let qty = order[i].getQty();

        //set values for the html element
        let row = "<tr><td>" +itemCode + "</td><td>" +description+ "</td><td>" +unitPrice + "</td><td>"+qty+"</td><td>"+ 10 + "</td></tr>";

        //set above row to the table body.
        $('#tblOrder').append(row);
    }
}