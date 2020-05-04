// Number Methods

let number = 9;
console.log(number);

number = 8.9999999;
console.log(number);

number = (1.2345).toPrecision(3); // rounds up number to an amount of digits.
console.log(number);

function parseIntNumber (x, y) {
    const result = Number.parseInt(x, y);
    if (Number.isNaN(result)) { // executes code if result is not a number (NaN).
        return 0;
    } else {
        return result * 10;
    };
};

console.log(parseIntNumber('5', 10));

const numFirst = 1000;
const numSecond = Number(1000);
const numThird = new Number(1000); // creates a number object

console.log(numFirst);
console.log(numSecond);
console.log(numThird);

console.log(numFirst === numSecond);

console.log(numFirst === numThird);
console.log(numSecond === numThird);

console.log(numFirst == numThird);
console.log(numSecond == numThird);

console.log(typeof numThird);

console.log(234.56.toFixed(1));
console.log(234.56.toLocaleString());
console.log(typeof 234.56.toLocaleString());

// Function Literal

(function(x, y) { console.log(x + y)})

// Callbacks

/*
function anyFuncName (data, callback) {
    async-process(data).then( // do async request
        function(result) { // do on resync
            callback(result) // execute callback
        }
    );
};
*/

// String Methods

const text1 = 'first name';
const text2 = 'last name';

const fullName = (text1.concat(text2));
console.log(fullName);

console.log(text1.toUpperCase());

console.log(text1.trim());