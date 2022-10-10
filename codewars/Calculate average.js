function findAverage(array) {
  // your code here

  if (array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  return 0;
}
findAverage([1, 2, 3]);
