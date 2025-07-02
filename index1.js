
// const getPromise=()=>{
//     return new Promise((reslove,reject) =>{
//         console.log(" I am a promise");
//         reslove("promised resloved");
//         //reject("something went wrong")
//     });
// }
// let result=getPromise();
// result.then(data => {
//     console.log(data);
// });
// result.catch(error =>{
//     console.error("error occured",error);
// });

//promise chgaining

// function asyncFunc1(){
//     return new Promise((reslove,reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             reslove("success");
//         },2000);
//     })
// }
// function asyncFunc2(){
//     return new Promise((reslove,reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             reslove("success");
//         },4000);
//     })
// }
// console.log("fetching data 1...");
// let p=asyncFunc1();
// p1.then((data) =>{
//     console.log("data fetched:",data);
//     console.log("fetching data 2...");
//     let p2=asyncFunc2();
//     p2.then((data) =>{
//         console.log("data fetched:",data);
//         console.log("fetching data 2..");
//     });
// });


function getData(id){
    return new Promise((reslove,reject) =>{
        setTimeout(() =>{
            console.log("fetching data for id:",id);
            reslove(id);
        },1000);
    })
}
async function fetchData() {
    try{
const data1=await getData(101);
console.log("first fetch:",data1);;
const data2=await getData(102);
console.log("second fetch:",data2);;
const data3=await getData(103);
console.log("third fetch:",data3);;
    } 
    catch(error){
        console.error("error occured:",error);
    }
}
fetchData();
async function  getnextdata() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
}
getnextdata();