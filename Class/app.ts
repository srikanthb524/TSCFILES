
// String
let message:string=`Hello World`;
console.log(message);
let heading=document.createElement('h1');
heading.textContent=message;
document.body.appendChild(heading);

let fnmae:string=`John`;
let title:string=`WebDeveloper`;
let profile:string=`I'm ${fnmae}.I'm a ${title}`;
console.log(profile);


//Boolean

let pending:boolean;
pending=true;
console.log(pending);


//Object
let emp:object;
emp={
  firstName:'John',
  lastName:'Doe',
  age:25,
  jobTItle:'Web Developer'
}
console.log(emp);

//Empty Object
let vaccant:{}

//Arrary

//let arrayname:type[];

// let skills:string[];//string Array

// let roll:number[];//Number Arrary;

// skills[1]="Problem Solving";
// skills[2]="Programming";

// skills.push('Software Desgin');


// console.log(skills);

//Tuple

let skill:[string,number];
skill=['Problme Solving',5];

console.log(skill);



//enum

enum Month
{
  Jan,
  Feb,
  Mar
}


//Any Type

let y:any;

//void type

function test():void
{

}

//never type

let x: string|number;
x='abc';
x=100;
//x=true;

type chars=string;


let ab:chars;

type alphanumeric=string|number;

let a:alphanumeric;

//string literal

let course:'Angular'|'DotNet';
course='Angular';
course='DotNet';//Error






