//1.if  , else if  ,  else 
let age=18;
if (age < 18){
    console.log("you are minor.");
}
else if(age >= 18 && age < 65){
    console.log("you are an adult.");
}
else{
    console.log("you are a senior citizen.");
}
console.log("\n");

//switch
 
let day=3;
switch(day){
    case 1:
    console.log("monday");
break;
case 2:
    console.log("tuesday");
break;
case 3:
    console.log("wednessay");
break;
case 4:
    console.log("thusday");
break;
case 5:
    console.log("friday");
break;
case 6:
    console.log("satday");
break;
case 1:
    console.log("sunday");
break;
default:
    console.log("invalid day")
}

//2.loops

//for loop
let i=5;
for(let i=0;i<5;i++){
    console.log("iteration:",i);
}
console.log("\n");

//while loop
let j=0;
while(j<5){
    console.log("while loop iteration:",j);
}
//do while loop

let k=0;
do{
    console.log( "do while iteration:",k);
k++;
}
while(k<5);
console.log(k);
