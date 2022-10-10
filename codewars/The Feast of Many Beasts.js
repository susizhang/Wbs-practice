function feast(beast, dish) {
  //your function here
  const b = beast.split("");
  const d = dish.split("");
  if (b[0] === d[0] && b[b.length - 1] === d[d.length - 1]) {
    return true;
  }
  {
    return false;
  }
}
