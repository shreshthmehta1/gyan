//Solution 1
function syma(...args) {
// console.log(arguments);
//   const args = [];
//   for (let i = 0; i < arguments.length; i++) {
//     args.push(arguments[i]);
//   }
  console.log(args);

  function symDiff(arrayOne, arrayTwo) {
    const result = [];

    arrayOne.forEach(function (item) {
      // console.log(arrayTwo,arrayOne,item,arrayTwo.indexOf(item),"++++++++++++");
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    arrayTwo.forEach(function (item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}
console.log(syma([1, 2, 3], [5, 2, 1, 4], [7,8]));

// ***********************************************************************
//Solution 2
// const diff = (arr1, arr2) => [
//     ...arr1.filter(e => !arr2.includes(e)),
//     ...arr2.filter(e => !arr1.includes(e))
//   ];
// const sym = (...args) => [...new Set(args.reduce(diff))];
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//************************************************************************ 
//set
// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
// console.log([...new Set(numbers)]);

//filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

//reduce
// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// console.log([1, 2, 4, 5].reduce((a, b) => a + b)); // 7