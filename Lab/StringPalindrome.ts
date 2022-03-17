let str:string;
str="ABCDCBA";
let len:number=str.length;
let pal:boolean=true;
for (let i = 0; i < len / 2; i++) {
  if (str[i] !== str[len - 1 - i]) {
      pal=false;
      break;
  }
}
if(pal)
console.log('It is a palindrome:', str);
else
console.log('It is not a palindrome:',str);
