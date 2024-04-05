
// console.log('Hello');

// 'let', 'const', 'var' is used to declare a variable
// javascript is loosely typed ,dynamic typed
//hosting is when a code is runned first time it gives space to0 the variables then in second time it runs the other part code

// var msg = 'Hello Apurv';
// console.log(msg);

// function env(){
//     console.log(message)
//     var message="Hello Apurv";
//     console.log(message)
//     message="else";
// }
// env();

// function env() {
//     for (var i = 0; i < 5; i++) {
//         console.log('--', i)
//     }
//     console.log(i);
// }
// env();


//let keyword: scope within in the block 
// redeclaration is not allowd in using let'
// reassigning is allowed

// let message='hello';
// let message="else";
// console.log(message);

//const: No Redeclaration , No reassigning
// const msg='else';
// console.log(msg);

//By Default value is 'Var'


// Data Types

// let age = 20;
// console.log(typeof (age))

// mutable means it can change 
// immutable means it cannot be change once used then it can be deleted only

// It is of 8 types:
// String,number,boolean,bigint,undefined,null,symbol,object

// let arr = ['a', 'b', 'c']
// arr[0] = 'abc';
// console.log(arr);

// let str = "123";
// let age = 50;
// let ans = age + str;
// console.log(ans)

//In case of Multiplication and Division it convert string into number 
// In case of Addition it will concatenate both the string 

//For Addition of two number
// let age='12';
// let str=20;
// let ans=age- - (str);
// console.log(ans);

// const str="Saraswat"
// // const  usrName='My name is Apurv'
// // const ans=usrName+str;
// const usrName=`My name is: ${str}`;
// console.log(usrName)

// const a ='a';
// const b ='p';
// const c ='u';
// const d ='r';
// const e ='v';
// const ans=`${a}${b}${c}${d}${e}`;
// console.log(ans);

// function print(str='nothing is here')
// {
// console.log(str);
// }

// const s='Hello';
// print(s);

//logical operators in javascript

// Sum of two variable using function
// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(10,20)

// 0,false,undefined,' ',null: gives zero
// let a=' ';
// if(a){
//     console.log('yes')
// }
// else{
//     console.log('no');
// }

// function sum(a=0, b=0)
// {
//     console.log(a+b);
// }
// sum(1,2)

//function declaration
// function print()
// {
//     console.log('--');
// }

// //function assignment(named)
// const a=function print(){
//     console.log('--');
// }

// //function assignment(anonymous)
//     const b=function()
//     {
//         console.log('--')
//     }


//     //arrow function assignment
//     let c=() =>{
//         console.log('--');
//     }
//     print() 
//     a();
//     b();
//     c();

// Switch case

// let a=2;
// switch(a)
// {
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     default:{
//         console.log('not 1,2,3');
//     }
// }

//METHODS OF ASSIGNING VALUE TON AN OBJECT
// const obj= new Object();
// obj[12]='twelve';
// obj[10]='ten';
// obj['name']='Apurv';
// console.log(obj);

// const obj={};
// obj[1]='one';
// obj['name']='Apurv';
// console.log(obj);

// const obj={
//     1:'one',
//     'fname':'Apurv',
//     'lname':'Saraswat'
// };
// const fullname=obj.fname+' ' + obj.lname;
// console.log(fullname);
// console.log(obj);

//Used to dynamically access an object 
const obj={
    'fname':'Aman',
    'lname':'Rajbhar',
    'age':99,
    'address':'Delhi'
};
const x =prompt('Please tell the property to know');
console.log(obj[x]);
