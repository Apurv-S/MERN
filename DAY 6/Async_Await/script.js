//Website to refer for node js is: npm

// const figlet=require('figlet');
// figlet('Hello!',(err,data)=>{
//     console.log(data);  
// });
// fetch('https://api.github.com/users/apurv-s')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log('Error occurred')
// })
// console.log()

//--->Async Await
// async function getApi(){
//     const pr=await fetch('https://api.github.com/users/apurv-s');
//     const data=await pr.json();
//     console.log(data);
// }
// getApi();


console.log('start');
async function callAPI() {
    const pr = await new Promise((res, rej) => {
        console.log("Promise started");
        setTimeout(() => {
            console.log('timeout 1..')
            res('done');
        }, 1000);
    })
    console.log('Promise completed');
}
callAPI();
console.log('END');
