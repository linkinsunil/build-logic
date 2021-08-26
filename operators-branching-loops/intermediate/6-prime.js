
function isPrime(n) {

    let flag = true;

    for (let i = 2; i <= n / 2; i++) {

        if (n % i == 0) { // 9 % 3 == 0 //false
            flag = false;
            break;
        }

    }
   
    if (flag == true)
    console.log(n + " is prime");
    else
    console.log(n + " is not prime");

}


isPrime()
