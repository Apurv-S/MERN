//Event delegation in javascript 
//Higher order function

const firstNameChange = (e) => {
    const val = e.target.value;
    console.log(val);
    if (val.length > 1) {
        console.log('Correct');
    }
}

// function submitForm(e){
//     e.preventDefault();
//     console.log(e);
// }

//     function submitForm(e){
//     e.preventDefault();
//     const t=e.target
//     for(let i=0;i<2;i++){
//         console.dir(t[i].value);
//     }
//     // console.dir(e.target.value);
// }

// ---> Print an object 
// function submitForm(e){
//     e.preventDefault();
//     const t=e.target;

//     for(let i=0;i<t.length;i++){
//         const ty=t[i].type;
//         const vl=t[i].value;
//         console.log(ty,vl);
//         if(ty=='checkbox'){
//             console.log(t[i].checked)
//         }
//     }
//     // console.dir(e.target.value);
// }

// -->VALIDATION 
// function submitForm(e) {
//     e.preventDefault();
//     const t = e.target;
//     const res = {
//         hobbies: [],
//     };

//     for (let i = 0; i < t.length; i++) {
//         const ty = t[i].type;
//         if (ty != 'submit') {
//             const vl = t[i].value;
//             const nm = t[i].name;

//             if (ty == 'checkbox' && t[i].checked) {
//                 res.hobbies.push(vl);
//             }

//             if (ty != 'checkbox') {
//                 res[nm] = vl;
//             }
//         }
//     }
//     console.log(res);
// }    


