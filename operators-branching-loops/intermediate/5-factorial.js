let number = prompt("Enter a number:")

let result = 1;
for (let i = 1; i <= 5; i++) {
    result = result * i;
    console.log(result)
}

console.log(`Factorial for ${number} is`,result)
