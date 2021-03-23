function PlaceOrderDTO(itemCode, description, unitPrice, qty) {
    let __itemCode = itemCode;
    let __description = description;
    let __unitPrice = unitPrice;
    let __qty = qty;

    this.getItemCode = function () {
        return __itemCode;
    }
    this.getOderDescription = function () {
        return __description;
    }
    this.getUnitPrice = function () {
        return __unitPrice;
    }
    this.getQty = function () {
        return __qty;
    }

    this.setItemCode = function (itemCode) {
        __itemCode = itemCode;
    }
    this.setOrderDescription = function (description) {
        __description = description;
    }
    this.setUnitPrice = function (unitPrice) {
        __unitPrice = unitPrice;
    }
    this.setQty = function (qty) {
        __qty = qty;
    }

}