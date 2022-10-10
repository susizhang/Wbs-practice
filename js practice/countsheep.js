const countSheep = function (num) {
  //your code here
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};
console.log(countSheep(8));
