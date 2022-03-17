// String
var message = "Hello World";
console.log(message);
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
var fnmae = "John";
var title = "WebDeveloper";
var profile = "I'm ".concat(fnmae, ".I'm a ").concat(title);
console.log(profile);
//Boolean
var pending;
pending = true;
console.log(pending);
//Object
var emp;
emp = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTItle: 'Web Developer'
};
console.log(emp);
//Empty Object
var vaccant;
//Arrary
//let arrayname:type[];
// let skills:string[];//string Array
// let roll:number[];//Number Arrary;
// skills[1]="Problem Solving";
// skills[2]="Programming";
// skills.push('Software Desgin');
// console.log(skills);
//Tuple
var skill;
skill = ['Problme Solving', 5];
console.log(skill);
//enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
})(Month || (Month = {}));
//Any Type
var y;
//void type
function test() {
}
//never type
var x;
x = 'abc';
x = 100;
var ab;
var a;
//string literal
var course;
course = 'Angular';
course = 'DotNet'; //Error
