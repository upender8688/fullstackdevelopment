//opertaors:

//1.Arithematic opertaors

let a=20;
let b=10;
console.log("Arithematic Operators")
console.log("a=",a,",b=",b);
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);
console.log(exponent);

//2.assignment operators

let x=10;
x +=5;
x -=3;
x *=2;
x /=4;
x %=3;
console.log("assignment operators:");
console.log("x after assignment:",x);
console.log("\n");

//3.comparsion operators

let isEqual = (a == b);
let isStrictEqual=(a === b);
let isNotEqual=(a != b);
let isStrictNotEqual=(a !== b);
let isGreaterThan=(a > b);
let isLessThan=(a < b);
let isGreaterThanOrEqual=(a >= b);
let isLessThanOrEqual=(a <= b);
console.log("comparsion operator:");
console.log(isEqual);
console.log(isStrictEqual);
console.log(isLessThan);
console.log(isStrictNotEqual);
console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGreaterThanOrEqual);
console.log(isLessThanOrEqual);
console.log("\n");

//4.logical operators
let andOperator=(a > 0&& b > 0);
let orOperator=(a > 0 || b > 0);
let notOperator=!(a < b);
console.log("logical operators:");
console.log(andOperator);
console.log(orOperator);
console.log(notOperator);
console.log("\n");

//5.Bitwise opertor

let bitwiseAnd=a & b;
let bitwiseOr=a | b;
let bitwiseXor=a ^ b;
let bitwiseNot=~a;
let leftShift=a << 1;
let rightShift=a << 1;
console.log("bitwise operator:");
console.log(bitwiseAnd);
console.log(bitwiseOr);
console.log(bitwiseNot);
console.log(bitwiseXor);
console.log(leftShift);
console.log(rightShift);
console.log("\n");


//6.ternary operator 

let age=18;
let eligibility=(age >= 18) ? "eligibie to  vote" :"not eligible to vote";
console.log("ternary operator:")
console.log(eligibility);
console.log("\n");
 
//7.type operator

let variableType=typeof a;
console.log("typeof operator");
console.log(variableType);
console.log("\n");





















