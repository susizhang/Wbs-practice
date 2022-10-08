const arr = ["nihaoma", "buhaoya", "zhebudui", "nawohenhao", "nishihaodan"];

const filtered = arr.filter((x) => x.includes("ni"));

console.log(filtered);

const lengthArr = arr.map((x) => x.length);

console.log(lengthArr);

// function f(x) {
//   return x + x;
// }

// console.log(arr.map(f));

console.log(arr.some((x) => x.length < 8));

console.log(arr.every((x) => x.length < 8));

console.log(arr.slice(2, 4));
console.log(arr.slice(2));

console.log("asdf asdf erg ar hsteh".split(" "));

console.log(arr.splice(2, 2)); // 改变原arr, 返回删掉的元素数组
console.log(arr);

const numArray = [2, 5, 2, 3, 8, 3, 5];

const func = (x, y) => x + y;
const s = numArray.reduce(func, 0);
const p = numArray.reduce((x, y) => x * y, 1);
