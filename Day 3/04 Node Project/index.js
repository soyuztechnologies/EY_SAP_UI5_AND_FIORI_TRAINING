const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get("/employees", function(req,res){
  res.send([{
  "empId": 1000,
  "empName": "Anubhav ",
  "salary": 2500,
  "currency": "USD"
}, {
  "empId": 1001,
  "empName": "Raghav",
  "salary": 9999,
  "currency": "EUR"
}, {
  "empId": 1002,
  "empName": "Syed",
  "salary": 8500,
  "currency": "AED"
}]);
});

app.get("/employees/:id",function (req,res) {
  var id = req.params.id;
  var empTab = [{
  "empId": 1000,
  "empName": "Anubhav ",
  "salary": 2500,
  "currency": "USD"
}, {
  "empId": 1001,
  "empName": "Raghav",
  "salary": 9999,
  "currency": "EUR"
}, {
  "empId": 1002,
  "empName": "Syed",
  "salary": 8500,
  "currency": "AED"
  }];
  for (let i = 0; i < empTab.length; i++) {
      const element = empTab[i];
      if(element.empId == id){
          res.send(element);
          break;
      }
  }
  res.send("could not find employee with id - "+ id);
});


app.listen(8080);
console.log("The webserver is running at:- http://localhost:8080");