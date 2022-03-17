function display()
{
  console.log("Hello World");
}

function sum(x:number, y:number):number
{
  let c = x+y;
  return c;
}

display();
let a=sum(2,3);

console.log(a);

let greeting= function(){
  console.log("Hello TypeScript");
}
let sum1=function(b:number,e:number,f?:number):number{
  return b+e+f;
}

greeting();
let g=sum1(2,4);
console.log(g);

function Greet(name: string, greeting: string = "Hello") : string {
  return greeting + ' ' + name + '!';
}

console.log(Greet('Sri'));
console.log(Greet('Srikanth','Hi'));


//()(param1, param2, ..., paramN) => expression


let sum2 = (x: number, y: number): number => {
  return x + y;
}
//Function Overloadig

function add(a:string, b:string):string;

function add(a:number, b:number): number;

function add(a: any, b:any): any {
    return a + b;
}


console.log(add(10,20));

console.log(add("Hello ","World"));

//Rest Parameters
function Greet1(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

console.log(Greet1('Hi','Sri'));
console.log(Greet1('Hi','Srikanth','B'));









