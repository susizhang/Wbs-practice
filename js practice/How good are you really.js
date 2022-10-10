function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;

  return yourPoints > average ? true : false;
}
