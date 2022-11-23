module.exports = {
    calculator: function (a,b,opr){
        switch (opr) {
            case '+':
                return a + b;
                break;
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
    },
    printArrSize: function (arr) {
        console.log(arr.length);
    },
    printObject: function (object) {
        for (const key in object) {
            const element = object[key];
            console.log(element)   ;
        }
    }
}