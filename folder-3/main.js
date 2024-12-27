/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
// var argumentsLength = function(...args) {

//    return (args.length)

//  };

//    console.log(argumentsLength(1, 2,45, 3 , null , false , {} , [] , "df")); // 3

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, plusone) {
  let array = [];

  for (i = 0; i < arr.length; i++) {
    array.push(plusone(arr[i] , i))
  }
  return array
};

function plusone(num) {
   return num + 1

}

console.log(map([5 , 7], plusone));
