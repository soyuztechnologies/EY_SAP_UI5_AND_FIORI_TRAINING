//console.log('welcome to node js - anubhav trainings');

function calculator (a,b,opr){
    switch (opr) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            if(b === 0){
                return new Error("you are joking");
            }
            return a / b;
        default:
            break;
    }
}

try {
    var x = calculator(10,2,'+');    
} catch (error) {
    console.log(error);
}

console.log(x);