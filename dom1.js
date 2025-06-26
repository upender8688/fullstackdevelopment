 document.title="DOM in javascript";
document.getElementById("a").innerHTML="MRECT ";
document.body.style.backgroundColor="lightGreen";
document.body.style.textAlign="center";
document.getElementById("para").style.color="red";
document.getElementById("para").style.fontSize="30px";
document.getElementsByClassName("b")[0].style.color="brown";;
//  document.getElementsByClassName("ds")[1].style.color=" blue";
//  document.getElementsByClassName("ds")[2].style.color="orange";
//  document.getElementsByClassName("ds")[0].style.fontSize="30px";
//  document.getElementsByClassName("ds")[1].style.fontSize="30px";
//  document.getElementsByClassName("ds")[2].style.fontSize="30px";
let ravi=document.getElementsByClassName("ds");
ravi[0].style.color="green";
ravi[1].style.color="red";
ravi[2].style.color="blue";

document.querySelector(".hi").style.color="red";

// document.querySelectorAll(".bye")[0].style.color="red";
// document.querySelectorAll(".bye")[1].style.color="yellow";
// document.querySelectorAll(".bye")[2].style.color="orange";

 let prabhas=document.querySelectorAll(".bye");
 prabhas[0].style.color="red";
 prabhas[1].style.color="green";
 prabhas[2].style.color="orange";

// function changeBackground() {
//     if(document.body.style.backgroundColor==="lightBlue")
//         {
//         document.body.style.backgroundColor="lightGreen";
//     }
//     else{
//         document.body.style.backgroundColor="lightBlue";
//     }
// alert("Background color to be change to lightBlue")
  
// }
   
function changeBackground(){
    document.body.style.backgroundColor = document.body.style.backgroundColor === "lightGreen" ? "red " : "lightBlue";
}

function changetext(){
    document.getElementById("clg").innerHTML = "MLRD, MRCE";
}
document.getElementById("clg").style.backgroundColor="brown";
document.getElementById("clg").style.fontSize="30px";
document.getElementById("clg").style.padding="30px";
 document.getElementById("clg").style.margin="50px 500px";                                                                                                                                                                                                                                                                            
 
 
 
 
 