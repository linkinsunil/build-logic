// Area of hexagon (A)= (3*1.732) * s*s / 2

const side = prompt("Enter a side length");

function areaOfHexagon(s){

    const aoh = (3*1.732) * (s*s) / 2;
    console.log(`Area of Hexagon for side of length ${side}cm is ${aoh.toFixed(1)}cm²`)

}

areaOfHexagon(side);