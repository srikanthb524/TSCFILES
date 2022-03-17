let num,nextnum:number;
num=20;
let n1:number=0;
let n2:number=1;
console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextnum = n1 + n2;
    n1 = n2;
    n2 = nextnum;
}
