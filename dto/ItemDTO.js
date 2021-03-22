function ItemDTO(itemCode, description, qtyOnHand, price) {
    let __itemCode = itemCode;
    let __description = description;
    let __qtyOnHand = qtyOnHand;
    let __price = price;

    this.getItemCode = function () {
        return __itemCode;
    }
    this.getDescription = function () {
        return __description;
    }
    this.getQtyOnHand = function () {
        return __qtyOnHand;
    }
    this.getPrice = function () {
        return __price;
    }

    this.setItemCode = function (itemCode) {
        __itemCode = itemCode;
    }
    this.setDescription = function (description) {
        __description = description;
    }
    this.setQtyOnHand = function (qtyOnHand) {
        __qtyOnHand = qtyOnHand;
    }
    this.setPrice = function (price) {
        __price = price;
    }

}