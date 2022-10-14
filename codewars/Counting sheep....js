function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let newArrays = arrayOfSheep.filter(function (res) {
    return res == true;
  });
  return newArrays.length;
}

countSheeps([
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]);

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
