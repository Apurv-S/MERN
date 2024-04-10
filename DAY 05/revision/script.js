//print the array element using functions:
// let arr = [2, 10, 13, 43];

function printP(elem) {
    console.log(': ', elem);
}

function printArray(arr) {
    //--->First method to print element of an Array-- >>// for(let i =0;i<arr.length;i++){
    //     console.log(arr[i]);
    // }

    //--->Second method to print element of an Array// arr.forEach(printP);

    //---->
    // arr.forEach((a) =>{
    //     console.log(': ',a,b);
    // });

    // ----->
    // arr.map((a,b,c)=>{
    //     console.log(':',a,b,c);
    // });

    //-----> time is in milliseconds 

    setTimeout(printP,10000);

}
printArray(arr);
