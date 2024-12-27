/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

// console.log(argumentsLength(1, 2, 45, 3, null, false, {}, [], "df"));

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, plusone) {
  let array = [];

  for (i = 0; i < arr.length; i++) {
    array.push(plusone(arr[i], i));
  }
  return array;
};

function plusone(num) {
  return num + 1;
}

// console.log(map([5, 7], plusone));

// reduce

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let total = init;

  for (let i = 0; i < nums.length; i++) {
    total = fn(total, nums[i]);
  }
  return total;
};

function sum(accum, curr) {
  return accum + curr;
}

// console.log(reduce([1,4,4] ,sum, 0))

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (const fn of functions) {
      x = fn(x);
    }
    return x;
  };
};

const fn = compose([(x) => 2 * x, (x) => x + 1]);
console.log(fn(4)); // 9


// one fn call 


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {

  let call = false;

  return function (...args) {

      if (!call) {
          call = true;
          result = fn(...args)
          return result

      }
  }


}


let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling 