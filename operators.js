// arithmetic operators

let add = 4 + 5 ; 
let sub = 9 - 5 ;
let mul = 9 * 5;
let div = 8 / 2 ;
let expo = 2**3;


console.log(add);
console.log(sub);
console.log(mul);
console.log(expo);

let score =  102;
let bonus =  25;

let totalScore  = score + bonus ;
console.log(totalScore);

// comparsion operators 
let num1 = 3
let num2 = 5
let num3 = 4
let num4 = 5
let num5 = 3

console.log(num2 == num4);
console.log(num1 != num4)
console.log(num4 > num2);
console.log(num2 < num4) ;


//logical operators

// And  && when both are true 
// or  || when one is true 
// Not  !  when nothing is true  basically reverse


if(num1 == num3 || num2 == num4){
    console.log("this is or operator")
}

if(num1 == num5 && num2 == num4){
    console.log("this is And operator")
}

if(num1 != num3){
    console.log("this is Nor operator")
}


//Assignment operator

num1 += num2 
console.log(num1);

num1 -= num2 
console.log(num1);

num1 *= num2 
console.log(num1);

num1 /= num2 
console.log(num1);

num1 %= num2 
console.log(num1);

// unary -- increment decrement 

let i = 5
console.log(i++,i--,++i,--i,)


// TEMPLATE LITERALS 

let p = 10 ;
let q = 20 ;

let output = `Total price is ${p+q} `

console.log(output);




