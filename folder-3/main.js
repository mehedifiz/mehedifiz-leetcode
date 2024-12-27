/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 45, 3, null, false, {}, [], "df"));

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

console.log(map([5, 7], plusone));

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

console.log(reduce([1,4,4] ,sum, 0))
