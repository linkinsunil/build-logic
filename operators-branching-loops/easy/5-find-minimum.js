const num1 = 35;
const num2 = 29;
const num3 = 46;

// inbuilt method
// console.log(Math.min(num1,num2,num3))

if (num1 < num2) {
    if (num1 < num3) {
        console.log(num1)
    } else {
        console.log(num3)
    }
} else {
    if (num2 < num3) {
        console.log(num2)
    } else {
        console.log(num3)
    }
}