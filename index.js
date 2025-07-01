// console.log("Hello World");
// function sayHello(){
//     console.log("Hello from sayHello function");
// }
// sayHello();
// console.log("This is a Simple JavaScript program");

// console.log("one");
// console.log("two");
// setTimeout(() =>{
//     console.log("Hello World");
// },4000); //1000ms is => 1 sec
// console.log("three")
// console.log("four")

// call back function example

// type-1:
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(5,10,sum);

//type-2:
// calculator(5,10,(a,b)=>{
//     console.log(a+b);
// });

 //nested for loop
//   for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++){
//         str +=j;
//     }
//     console.log(i,str);
//   }

// function getData(dataid){
//     setTimeout(()=>{
//     console.log("feteching data for id :",dataid);
// },5000);
// }
// getData(1);
// getData(2);
// getData(3);
 
// function getData(dataid,getnextdata){
//     setTimeout(() =>{
//         console.log("fetching data for id:",dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     },2000);
// }

// getData(1,()=>{
//     console.log("getting data 2...")
//     getData(2,() =>{
//         console.log("getting data 3...")
//         getData(3);
//     });
// });

 //promise

// 1.to over come the this we will use promises.
// 2.promises for eventually completion of an operation.
// 3.promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. it allows you to write asynchronous code in a  more manageable way,avoiding callback hell.

// //promise syntax
 
//      const myPromise=new Promise
//      ((reslove, reject) => {..})

// .reslove is called when the asynchronous operation is successfull 
// .reject is called when the asynchronous operation is fails

//promise code

// const myPromise=new Promise((reslove,reject) =>{    //asynchronous operation
//     setTimeout(()=>{
//         const success=true;
//         if(success){
//             reslove("data fetched successfully");
//         }else{
//             reject("error fetching data");
//         }
//     },2000);
// });
// myPromise
// .then((data) =>{
//     console.log("promise resloved with data:",data);
// })
// .catch((error) =>{
//     console.log("promise rejected with an error:",error);

// });

//using promises methods

// 1.the then() method is called when the promise is resloved successfully.
// 2.the catch()method is called when the promise is rejected with an error.
// 3.the finally()method is called when the promise is settled regardless of whether it was resloved or rejected.



//using promises

// let promise=new Promise((reslove,reject) =>{
//     console.log(" i am promise");
//     if(1<0){
//         reslove(123);
//     }
//     reject("something went wrong");
// }
// );

function getData(dataid){
    return new Promise((reslove,reject) =>{
        setTimeout(() =>{
        console.log("fetching data for id:",dataid);
    reslove("success");
},2000);
});
}
let result=getData(123);
result;
//chaining multiple dat fetches
getData(101)
.then(result=>{
    console.log("first fetch:",result);
    return getData(102);
})
.then(result=>{
    console.log("second fetch:",result);
    return getData(103);
  
})
.then(result=>{
    console.log("second fetch:",result);    
})
