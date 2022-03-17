function display() {
    console.log("Hello World");
}
function sum(x, y) {
    var c = x + y;
    return c;
}
display();
var a = sum(2, 3);
console.log(a);
var greeting = function () {
    console.log("Hello TypeScript");
};
var sum1 = function (b, e, f) {
    return b + e + f;
};
greeting();
var g = sum1(2, 4);
console.log(g);
function Greet(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
console.log(Greet('Sri'));
console.log(Greet('Srikanth', 'Hi'));
//()(param1, param2, ..., paramN) => expression
var sum2 = function (x, y) {
    return x + y;
};
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
console.log(add("Hello ", "World"));
//Rest Parameters
function Greet1(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet1('Hi', 'Sri'));
console.log(Greet1('Hi', 'Srikanth', 'B'));
