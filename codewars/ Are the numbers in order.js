const inAscOrder = (arr) => {
  function compare(a, b) {
    return a - b;
  }
  const newArr = arr.slice().sort(compare);
  return arr.toString() === newArr.toString() ? true : false;
};

// function inAscOrder(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }
console.log(inAscOrder([1, 2, 4, 7, 19]));
