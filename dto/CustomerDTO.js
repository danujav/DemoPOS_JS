
function CustomerDTO(id, name, address, salary) {
    let __id = id;
    let __name = name;
    let __address = address;
    let __salary = salary;

    this.getCustomerId = function () {
        return __id;
    }
    this.getCustomerName = function () {
        return __name;
    }
    this.getCustomerAddress = function () {
        return __address;
    }
    this.getCustomerSalary = function () {
        return __salary;
    }

    this.setCustomerId = function (newID) {
        __id = newID;
    }
    this.setCustomerName = function (newName) {
        __name = newName;
    }
    this.setCustomerAddress = function (newAddress) {
        __address = newAddress;
    }
    this.setCustomerSalary = function (newSalary) {
        __salary = newSalary;
    }

}
