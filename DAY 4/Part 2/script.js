// Diff between node and element

// ----->It will remove only first paragraph
// const res= document.querySelector('div');
// const c= document.querySelector('p');
// res.removeChild(c);

// ----->By changing index we can remove both first and second paragraph
// const res= document.querySelector('div');
// const c= document.querySelectorAll('p');
// res.removeChild(c[1]);


// console.log(res);
// div.innerHTML="<p>Hello</p>";
// res.remove();


// -->Events in JS :They are the things that happen in system

// function getInfo(){
//     console.log("Button is clicked");
//     document.write("I am Apurv");
// }

// ----> On click event append text
function getInfo(e){
    // const d= document.querySelector("div");
    // d.prepend("My name is Apurv");
    // d.append("Saraswat");
    console.log(e);
    // e.target.class='abcd';
    // e.target.setAttribute('style','color:red')
    // e.target.style.setAttribute('style','background-color:green')
    e.target.style.backgroundColor='green';
    e.target.style.color='red';
}


