 let a = document.createElement("fieldset");
let label = document.createElement("label");
a.innerHTML = "Enter  Name: ";
a.appendChild(label)
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter Name....";

a.appendChild(input);
let br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);


br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);

let label1 = document.createElement("label");
label1.innerHTML = "Enter  Email: ";
input1 = document.createElement("input");
input1.type = "email";
input1.placeholder = "Enter  Email...";
a.appendChild(label1);
a.appendChild(input1);


br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);
br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);
let label2 = document.createElement("label");
label2.innerHTML = "Enter  Password: ";
input2 = document.createElement("input");
input2.type = "password";
input2.placeholder = "Enter  Password...";
a.appendChild(label2);
a.appendChild(input2);

br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);
br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);

let label3 = document.createElement("label");
label3.innerHTML = "Confirm  Password: ";
input3 = document.createElement("input");
input3.type = "password";
input3.placeholder = "Confirm  Password...";
a.appendChild(label3);
a.appendChild(input3);


br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);
br = document.createElement("br");
a.appendChild(br);
a.appendChild(br);

let label4 = document.createElement("label");
label4.innerHTML = "Enter  Phone NO: ";
input4 = document.createElement("input");
input4.type = "tel";
input4.placeholder = "Enter  Number...";
a.appendChild(label4);
a.appendChild(input4);

 

let button = document.createElement("button");
button.textContent = "submit";
// a.appendChild(button)

document.getElementById("form").appendChild(a);
document.getElementById("form").appendChild(button);














