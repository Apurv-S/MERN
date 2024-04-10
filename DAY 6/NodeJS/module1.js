const sum = function (a, b) {
    console.log(a + b);
}
const sub = function (a, b) {
    console.log(a - b);
}
// module.exports = {
//     sum,
//     sub,
// };

console.log("MODULE 1....")
const name='Aman'
module.exports={
    sum,
    sub,
    'name':name,
};
