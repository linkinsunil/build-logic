function powerOf(a,b){
     //console.log(Math.pow(a,b))
     
     var power = 1;
     for (let i = 1; i <= b; i++) {
          power = power * a;
     }
     console.log(power)

}

powerOf(4, 4)