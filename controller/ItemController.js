//button
let btnSave = $('#btnSave');
let btnUpdate = $('#btnUpdate');
let btnDelete = $('#btnDelete');


//...................events.........................

btnSave.click(function () {
    // $('#tblItem>tr').off('click');    // i use this here to of click event to the table row.

    //input text-fields
    let itemCode = $('#txtItemCode').val();
    let description = $('#txtDescription').val();
    let qtyOnHand = $('#txtQtyOnHand').val();
    let price = $('#txtPrice').val();

    //send argument to the saveItem method to save objects in the array
    let res = saveItem(itemCode, description, qtyOnHand, price);

    if(res){

        //bind event to the table row

        /* $('#tblCustomerBody>tr').click(function(){
             console.log($(this).children('td:eq(0)'))
         })*/

        $('#tblItem>tr').on('click', function(){
            let itemCode = $(this).children('td:eq(0)').text();
            let description = $(this).children('td:eq(1)').text();
            let qtyOnHand = $(this).children('td:eq(2)').text();
            let price = $(this).children('td:eq(3)').text();

            $('#txtItemCode').val(itemCode);
            $('#txtDescription').val(description);
            $('#txtQtyOnHand').val(qtyOnHand);
            $('#txtPrice').val(price);

        });
        clearFields();
    }else{
        alert("oops....! Something Wrong..!")
    }

});

btnUpdate.click( function () {

    let itemCode = $('#txtItemCode').val();
    let description = $('#txtDescription').val();
    let qtyOnHand = $('#txtQtyOnHand').val();
    let price = $('#txtPrice').val();

    let option=confirm(`Do you want to Update Item: ${itemCode}`);

    if(option) {
        let res = updateItem(itemCode, description, qtyOnHand, price);
        if (res) {
            alert("Item Updated..!");
            $('#tblItem>tr').on('click', function(){
                let itemCode = $(this).children('td:eq(0)').text();
                let description = $(this).children('td:eq(1)').text();
                let qtyOnHand = $(this).children('td:eq(2)').text();
                let price = $(this).children('td:eq(3)').text();

                $('#txtItemCode').val(itemCode);
                $('#txtDescription').val(description);
                $('#txtQtyOnHand').val(qtyOnHand);
                $('#txtPrice').val(price);

            });

        } else {
            alert("Something went Wrong..!")
        }

        loadAllItemToTable();
        $('#tblItem>tr').on('click', function(){
            let itemCode = $(this).children('td:eq(0)').text();
            let description = $(this).children('td:eq(1)').text();
            let qtyOnHand = $(this).children('td:eq(2)').text();
            let price = $(this).children('td:eq(3)').text();

            $('#txtItemCode').val(itemCode);
            $('#txtDescription').val(description);
            $('#txtQtyOnHand').val(qtyOnHand);
            $('#txtPrice').val(price);

        });

        clearFields();
    }
});

btnDelete.click(function () {
    let itemCode = $('#txtItemCode').val();
    let res = deleteItem(itemCode);

    let option=confirm(`Do you want to Delete Item : ${itemCode}`);

    if(option){
        if(res){
            alert("Item Deleted..!");
            $('#tblItem>tr').on('click', function(){
                let itemCode = $(this).children('td:eq(0)').text();
                let description = $(this).children('td:eq(1)').text();
                let qtyOnHand = $(this).children('td:eq(2)').text();
                let price = $(this).children('td:eq(3)').text();

                $('#txtItemCode').val(itemCode);
                $('#txtDescription').val(description);
                $('#txtQtyOnHand').val(qtyOnHand);
                $('#txtPrice').val(price);

            });
        }else {
            alert("Something went wrong..!");
        }

        loadAllItemToTable();

        $('#tblItem>tr').on('click', function(){
            let itemCode = $(this).children('td:eq(0)').text();
            let description = $(this).children('td:eq(1)').text();
            let qtyOnHand = $(this).children('td:eq(2)').text();
            let price = $(this).children('td:eq(3)').text();

            $('#txtItemCode').val(itemCode);
            $('#txtDescription').val(description);
            $('#txtQtyOnHand').val(qtyOnHand);
            $('#txtPrice').val(price);

        });
        clearFields();
    }else{

    }

});

//...................function.........................
function deleteItem(itemCode) {
    let item = searchId(itemCode);
    if(item != null){
        let indexNumber = itemObjectsArray.indexOf(item);
        itemObjectsArray.splice(indexNumber, 1);
        return true;
    }else {
        return false;
    }
}

function searchId(id) {
    for (let i in itemObjectsArray) {
        if (itemObjectsArray[i].getItemCode() == id) return itemObjectsArray[i];
    }
    return null;

}

function updateItem(itemCode, description, qtyOnHand, price) {
    let item = searchId(itemCode);

    if(item != null){
        item.setDescription(description);
        item.setQtyOnHand(qtyOnHand);
        item.setPrice(price);

        return true;
    }else{
        return false;
    }

}

function clearFields() {
    $('#txtItemCode').val("");
    $('#txtDescription').val("");
    $('#txtQtyOnHand').val("");
    $('#txtPrice').val("");
}

function saveItem(itemCode, description, qtyOnHand, price) {

    //create item object for push that to array
    let item = new ItemDTO(itemCode, description, qtyOnHand, price);

    //push item object to array
    itemObjectsArray.push(item);

    //load item detail to the item table
    loadAllItemToTable();

    return true
}

function loadAllItemToTable() {
    //get the ItemDTO array
    let item = getAllItemDTOs();

    $('#tblItem').empty();

    //get the one by one object from the array
    for (let i in item){
        let itemCode = item[i].getItemCode();
        let description = item[i].getDescription();
        let qtyOnHand = item[i].getQtyOnHand();
        let price = item[i].getPrice();

        //set values for the html element
        let row = "<tr><td>" +itemCode + "</td><td>" +description+ "</td><td>" +qtyOnHand + "</td><td>"+price+"</td></tr>";

        //set above row to the table body.
        $('#tblItem').append(row);
    }
}

//return item Objects array
function getAllItemDTOs() {
    return itemObjectsArray;
}