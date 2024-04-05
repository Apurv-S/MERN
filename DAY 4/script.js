// const obj={
//     "name":"Aman",
//     "lname":"rajbhar"
// }
// console.log(obj);
// document.write(obj);
// document.write(JSON.stringify(obj));

//stringify takes input as string 
//cannot reassign const objects

// let arr=[1,2,3,4,5];
// arr=[34,65,89,11,99] ---> Here assignment can be done because of "let" 

// const arr=[1,2,33,4]
// arr[9]=55;    ----> here in arr there is 10 elements 

// const arr=[1,3,4];
// arr.push(0); ---> it will insert 0 in the last of an array .
// console.log(typeof(arr)); -----> It will print the type of arr

// const obj={
//     20:"Apurv",
//     30:"Saraswat"
// };

// console.log(obj);
// console.log(obj[30]); --->It will print the 30 key's value  

// console.log(arr);

// const arr=[1,2,3,4];
// console.log(Array.isArray(obj))
// console.log(Array.isArray(obj))


// --->Check if object is an array or not 
// const obj={
//     20:"Apurv",
//     30:"Saraswat"
// };
// const arr=[1,2,3,4];
// function checkIfObject(obj){
//     if(Array.isArray(obj)){
//         console.log("Not object");
//     }
//     else{
//         console.log("True");
//     }
// }
// checkIfObject(obj);
// checkIfObject(arr);

// -->Null is an object and Undefined is undefined

// -->Check of object 
// function checkIfObject(x){
//     if(Array.isArray(x)){
//         console.log("Not Object");
//     }
//     else if(typeof(x)=="object"){
//         console.log("object")
//     }
//     else{
//         console.log("Not Object");
//     }
// }
// checkIfObject(arr)

// for of,for in, for out---->
// const arr=['name',2];
// const obj={
//     'name':"aman",age:22,1:'else'
// };
// for(let i of arr){
//     console.log(i);
// }

// // "for in" fetch the keys and in array index are the keys 
// for(let i in arr ){
//     console.log(i);
// }

// --->Properties of DOM 
// console.log(Window)
// console.log(innerHeight)
// console.log(innerWidth)
// console.log(window.document)
// console.dir(window.document)
// console.dir(window)

// const res=document.getElementsByTagName('h3')
// console.log(res)

// const res=document.getElementById('t1')
// console.log(res)

// const res=document.querySelectorAll('h3');
// console.log(res);

//----> In case we do not have id or tag name
// const res=document.querySelectorAll('div>h3');
// console.log(res);

// const res=document.getElementById('h3');
// // res.innerText="Apurv "
// res['innerHTML']="Apurv "
// console.log(res);

// const res=document.getElementsByTagName("p")
// console.log(res)
// res[0].tagName="h1";
// res[0].setAttribute('class','c1');

// const ne = document.createElement("h3");
// ne.innerHTML = "Dynamic Text";
// // console.log(ne);
// document.body.appendChild(ne);

// const h=document.createElement("h3");
// const ne= document.getElementsByTagName("div")
// console.log(ne);
// console.log(h);
// h.innerHTML="SARASWAT"
// ne[0].appendChild(h);

// const h=document.createElement("h3");
const ne= document.getElementsByTagName("div");
console.log(ne);
// console.log(h);
ne.innerHTML="SARASAWT"

// --->To remove a paragraph
const a =document.getElementsByTagName("p");
console.log(a)
a[0].remove()
// a[0].innerHTML=" "



