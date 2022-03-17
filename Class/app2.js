var x = 10;
if (x > 10)
    console.log("Number is greater then 10");
else {
    if (x == 10)
        console.log("Number is equal to 10");
    else
        console.log("Number is less then 10");
}
//Switch
var target = 'btnDelete';
switch (target) {
    case 'btnUpdate':
        console.log("Update Clicked");
        break;
    case 'btnOK':
        console.log("OK Clicked");
        break;
    case 'btnDelete':
        console.log("Delete Clicked");
        break;
    default:
        console.log("No Button Clicked");
}
for (var i = 0; i <= 10; i++) {
    console.log('i Value ', i);
}
var j = 0;
while (j <= 10) {
    console.log('j Value ', j);
    j++;
}
var k = 0;
do {
    console.log('k Value ', k);
    k++;
} while (k <= 10);
