// Buffer is an global object it is imported automatically 
// 'new Buffer' is a global constructor

// const b=new Buffer.from('abc');
// console.log(b);
// ASCII a=97 hexadecimal is 61

//BUFFER MODULE is used to  provides a way of handling streams of binary data.

const b=new Buffer.from('ABCDEFGHIJKLMNO');
console.log(b.toString());
b.write('Other');
console.log(b.toString());
