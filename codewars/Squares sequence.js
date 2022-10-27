function squares(x, n) {
  let newArr = [];
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      newArr.push(x);
      x = Math.pow(x, 2);
    }
    return newArr;
  }
}
console.log(squares(2, 5));

// function squares(x, n) {
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     res.push(x);
//     x = Math.pow(x, 2);
//   }
//   return res;
// }

// function squares(x, n) {
//   return Array.from({ length: n }, (v, k) => Math.pow(x, Math.pow(2, k)));
// }

// function squares(x, n) {
//   var ret = [];
//   for (var i = 0; i < n; i++) {
//     ret.push(x);
//     x *= x;
//   }
//   return ret;
// }

// console.log(squares(2, 0));
