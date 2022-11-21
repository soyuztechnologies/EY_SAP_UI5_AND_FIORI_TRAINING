//console.log('welcome to node js - anubhav trainings');
var obj = require('./util/reuse.js');

var oEmp = {
    "studentId": 10,
    "marks": 100,
    "rollNo": 55886,
    "name": "Ananya"
}

var aFruits = ["apple", "banana"];

obj.printArrSize(aFruits);
obj.printObject(oEmp);

try {
    var x = obj.calculator(10,2,'+');    
} catch (error) {
    console.log(error);
}

console.log(x);