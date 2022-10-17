const catchSignChange = (arr) => {
  const filtered = arr.filter((e, i, arr) =>
    i == arr.length - 1 ? false : e < 0 != arr[i + 1] < 0
  );

  console.log(filtered);
  return filtered.length;
};

console.log(catchSignChange([0, 1, -1, 2, 0, 8, 7, 5]));
