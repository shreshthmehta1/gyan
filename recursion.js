function rangeOfNumbers(startNum, endNum) {
    // return [];
     if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      console.log(numbers, 'in')
      return numbers;
    }
  };

let res = rangeOfNumbers(4,14);
console.log(res);

