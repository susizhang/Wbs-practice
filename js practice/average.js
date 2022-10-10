function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const arr1 = classPoints.push(yourPoints);
  const sum = arr1.reduce((x, y) => x + y, 0);
  const average = sum / (classPoints.length + 1);

  return yourPoints > average ? True : False;
}

console.log(betterThanAverage([25, 36, 59, 85], 78));

function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  return (
    yourPoints >
    classPoints.reduce((classAverage, grade) => classAverage + grade) /
      classPoints.length
  );
}
