let n1 = 0, n2 = 1, sum;

console.log(n1)
console.log(n2)
for (let i= 1; i< 10; i++){ // i = 1
    sum = n1 + n2; // 0+1 =1
    n1=n2;  //n1 =1
    n2=sum;  // n2 = 1
    console.log(sum) //sum = 1
}
