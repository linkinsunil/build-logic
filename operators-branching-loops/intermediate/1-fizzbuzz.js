function getArr(){
    const arr = [];

    for(let i = 1; i <= 100; i++) {
        arr.push(i)
    }

    for(let j = 2; j <= 100; j+=3){
        arr[j]= "fizz";
    }

    for(let k = 4; k <= 100; k+=5){
        arr[k]= "buzz";
    }

    for(let l = 14; l <= 100; l+=15){
        arr[l]= "fizzbuzz";
    }

    return arr

}


console.log(getArr())