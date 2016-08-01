// Generated by CoffeeScript 1.10.0
(function() {
  var Employee, add, calculator, product,
    slice = [].slice;

  console.log(this);

  calculator = {
    result: 0,
    add: function(a, b) {
      return this.result = a + b;
    }
  };

  calculator.add(100, 200);

  console.log(calculator.result);

  add = (function(_this) {
    return function() {
      var numbers;
      numbers = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return numbers.reduce(function(x, y) {
        return x + y;
      });
    };
  })(this);

  console.log(add(10, 20, 30, 40));

  Employee = (function() {
    function Employee(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }

    Employee.prototype.print = function() {
      return console.log(this.id, this.name, this.salary);
    };

    return Employee;

  })();

  product = {
    id: 100
  };

}).call(this);
