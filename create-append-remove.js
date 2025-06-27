document.body.style.textAlign="center"
let aish=document.createElement("p");
//aish.textContent="I'm chtti";
aish.innerHTML="Memory 1 Tera Byte";
aish.style.color="green";
aish.style.fontSize="20px"
document.getElementById("vasi").appendChild(aish);

let ravi=document.getElementsByClassName("list")[2];
if(ravi){
    ravi.remove();
}

setTimeout(() => { 
let ravi=document.getElementsByClassName("list")[1];
if(ravi){
    ravi.remove();
}
},2000);
 
let newHeading = document.createElement("h2");
newHeading.innerHTML="This is a New Heading added to Javascript";
newHeading.style.color="purple";
newHeading.style.fontSize="30px";
document.body.appendChild(newHeading);

 
setTimeout(() =>{
    let newText=document.createElement("p");
    newText.textContent="This Text is added after 2 Seconds";
    newText.style.color="brown"
    newText.style.fontSize="30PX"
    document.body.appendChild(newText);
},2000);

let newTag= document.createElement("h2");
newTag.innerHTML="This is a New Tag added to Javascript";
newTag.style.color="purple";
newTag.style.fontSize="30px";
document.getElementById("vasi").appendChild(newTag);

let list=document.createElement("ul");
for(let i=1;i<=3;i++){
    let ball=document.createElement("li");
    ball.textContent="Items" +i;
    ball.style.color="blue"
    ball.style.fontSize="20px"
    list.appendChild(li);
    document.body.appendChild(list);
}


