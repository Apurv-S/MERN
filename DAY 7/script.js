//URL VS URI ,PATH VS ROUTE 
// Must know about file system module and http module 
//Status error code
//convert object into string 
// and json string to object ---->stringify()


// --> Print data as buffer
// const fs = require('node:fs');
// const data =fs.readFileSync('./myReadMe.txt');
// console.log(data);    

//--->Convert data to string 
// const fs = require('fs');
// const data =fs.readFileSync('./myReadMe.txt',{encoding:'utf-8'}); 
// console.log(data.toString());

//--->It will create new file 
// const fs=require('fs')
// fs.writeFileSync('./logs.txt', "10 April 2024: DAY 7");

// const fs = require('fs');
// console.log("Start");   
// const data =fs.readFileSync('./myReadMe.txt',{encoding:'utf-8'}); 
// console.log(data);
// console.log("End");
// console.log(data.toString());


// const fsPromises = require('fs/promises');
// console.log("Start")
// const pr=fsPromises.readFile('./myReadMe.txt',{encoding:'utf8'});
// console.log(pr)
// pr.then((res)=>
// {
//     console.log(res);
// })
// console.log("END")

// //It will print START POMISE END DATA

//API stands for Application Programming Interface 

//callback in file system 
// const fs =require('fs');
// fs.readFile('./myReadMe.txt',{encoding:"utf8"}, (err,data) => {
//     console.log(data);
// });

// fs.readFile <---Synchronous----> const data=fs.readFileSync("./path",{})
// fs.readFileSync <----Asynchronous (callback) ----> fs.readFile(".path")


// --->To create a server 
// const http=require('http');
// const app=http.createServer((req, res)=>{
//     console.log('Request recieved');
//     console.log(req.url);
//     res.end("<h1>hello</h1>")
// });

//to start the app give the number of 4 digits 
// app.listen(1500);

//TO get IP write 'ping websitename' in terminal 
//URLtype on browser---> http://localhost:1500/
// install nodemon  by command---> npm i nodemon -d -->To prevent from refresh browser repetedly

// mini project 
const http = require('http')
const fs = require('fs');
const data = fs.readFileSync('./data.json', "utf-8");
console.log(data)



const dataobj = JSON.parse(data);
// console.log(dataobj)
const product = dataobj.products;
console.log(product)



const htmlTemplate = `
<!DOCTYPE HTML>
<html lang="en">
<head>

</head>
<body>
__PRODUCTS__CARDS__
</body>

</html>
`
const cardTemplate = `
<div class="product_card"><h4>__TITLE__</h4></div>
<p>__INFO__</p>
</div>
`

// const card1=cardTemplate
//                            .replace('__TITLE__',product[0].title)
//                            .replace('__INFO__',product[0].description);

// const card2=cardTemplate
//                            .replace('__TITLE__',product[1].title)
//                            .replace('__INFO__',product[1].description);

// console.log(card1)
// console.log(card2)

// const AllCArd=card1+card2;

const AllCArd = product.map((elem) => {
    let newCard = cardTemplate;
    newCard = newCard.replace('__TITLE__', elem.title)
    newCard = newCard.replace('__INFO__', elem.description);
    return newCard;
});


const allCardsString = AllCArd.join(' ')
console.log(allCardsString)

const page = htmlTemplate
    .replace('__PRODUCTS__CARDS__', allCardsString);

const myServer = http.createServer((req, res) => {

    console.log("request received");
    console.log(req.url);
    //      console.log(Object.keys(req))
    res.writeHead(200, {
        'content-type': 'text/html',
    })
    res.end(page);
});

myServer.listen(4000, () => {
    console.log('---------------server started--------')
});


