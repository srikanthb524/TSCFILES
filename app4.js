var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.getSalary = function () {
        return 1000;
    };
    return Employee;
}());
var emp = new Employee(1, 'Srikanth'); //object creation
