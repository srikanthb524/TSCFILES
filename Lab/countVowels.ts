const str:string="Hello World";
const count = str.match(/[aeiou]/gi).length;
console.log(`Total Vowels in ${str} are ${count}`);
