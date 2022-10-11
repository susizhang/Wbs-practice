function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(2 ** i);
  }
  return result;
}

console.log(powersOfTwo(2));

// map function

function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i);
}

// way 3

powersOfTwo = (n) => [...Array(n + 1)].map((e, i) => Math.pow(2, i));
