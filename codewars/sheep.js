function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let num = 0;
  //   for (const sheep of arrayOfSheep) {
  //     if (sheep === true) {
  //       num++;
  arrayOfSheep.forEach((x) => (x === true ? num++ : num));
  return num;
}

console.log(
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
  ])
);

// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   const num = 0;

//   for (let i = 0; i < arrayOfSheep.length; i++)
//     if (arrayOfSheep[i] == true) num++;

//   return num;
// }
