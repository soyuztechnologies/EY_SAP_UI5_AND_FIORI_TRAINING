//console.log('welcome to node js - anubhav trainings');
var obj = require('./util/reuse.js');
var fs = require('fs');

// Reading the file Asynchronously
fs.readFile('./sample.txt','utf-8',function (err,content) {
    console.log(content);
});

// Reading the file Synchronously
var content = fs.readFileSync('./sample.txt','utf-8');
console.log(content);

// var oEmp = {
//     "studentId": 10,
//     "marks": 100,
//     "rollNo": 55886,
//     "name": "Ananya"
// }

// var aFruits = ["apple", "banana"];

// obj.printArrSize(aFruits);
// obj.printObject(oEmp);

// try {
//     var x = obj.calculator(10,2,'+');    
// } catch (error) {
//     console.log(error);
// }

// console.log(x);