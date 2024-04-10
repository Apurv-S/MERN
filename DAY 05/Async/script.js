// console.log('GEC start');
// function printP()
// {
//     console.log('prettyP start');
//     let ans =4+5;
//     console.log(ans);
//     console.log('prettyP End');
// }
// setTimeout(printP,10000);
// console.log('GEC End');

// const btn=document.getElementById('btn');
// btn.addEventListener("click",printP);

// -----> Callback are of two type :Synchronous and Asynchronous

//----> API Fetch
// console.log('Start')
// const req =fetch("https://api.github.com/users/apurv-s");
// console.log(req);
// req.then(()=>console.log('Fetched'));
// console.log('End');

//---->Promise has three state:
// pending
// fulfill
// reject
// ---->'fetch' is a promise 

console.log('Start')

const req=fetch('https://dummyjson.com/products/1')
const res=req .then(res => res.json())
res.then((data)=>console.log(data));
// const res=req.then(json => console.log(json))
console.log('End')

