const demo = document.getElementById('demo');

function createCounter2(p) {
    return function () {
        return p++;
    }
}

const count2 = createCounter2(4);

console.log(count2());
console.log(count2());


const counter = function createCounter(n) {
    return function () {
        return n++;
    }
}

const c = counter(10);
console.log(c());
console.log(c());


const word = function w() {
    return 5;
}

demo.innerHTML = word();


const increment = function increment(e) {
    return function () {
        return e++;
    }
}

const number = increment(7);
demo.innerHTML = number();
demo.innerHTML = number();
demo.innerHTML = number();


const nameSub = function (n) {
    if (n.length >= 4) {
        const res = n.substring(0, 6);
        return res;
    }
}

const name = nameSub('mehedi hasan shato');
demo.innerHTML = name;


// 2704. To Be Or Not To Be

function expect(expectedvalue) {
    return {
        toBe: function (value) {
            if (value === expectedvalue) {
                return true;
            }
        },
        notToBe: function (value) {
            if (value != expectedvalue) {
                return false;
            }
        }
    }
}

const promt = parseInt(prompt('expectedvalue'));
const value = parseInt(prompt('value'));
const result = expect(promt).notToBe(value);
alert(result);


function tobeOrnot(expect) {
    if (expectedvalue === value) {
        return res.innerHTML = 'true';
    }
    return res.innerHTML = 'false';
}


function createCounter(Initvalue) {
    const orginValue = Initvalue;

    let value = Initvalue;

    return {
        // Increment
        increment: function () {
            value = value + 1;
            return value;
        },

        reset: function () {
            value = orginValue;
            return value;
        },

        // Decrement
        decrement: function () {
            value = value - 1;
            return value;
        }
    }
}

const counter2 = createCounter(0);

console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());
console.log(counter2.reset());

const counter3 = createCounter(5);
const number1 = counter3.increment();
const number3 = counter3.reset();
const number2 = counter3.decrement();

console.log(number1, number2, number3);


function createCounter(initialValue) {
    let value = initialValue;  // Store the current value
    const originalValue = initialValue;  // Store the initial value for reset

    return {
        // Increment
        increment: function () {
            return value++;
        },

        // Decrement
        decrement: function () {
            return value--;
        },

        // Reset
        reset: function () {
            value = originalValue;  // Reset the value to the initial value
            return value;
        }
    };
}

// Example Usage:

const counter4 = createCounter(7);

console.log(counter4.increment()); // Outputs 7, value becomes 8
console.log(counter4.increment()); // Outputs 8, value becomes 9
console.log(counter4.reset());     // Resets value to 7, outputs 7
console.log(counter4.decrement()); // Outputs 7, value becomes 6
