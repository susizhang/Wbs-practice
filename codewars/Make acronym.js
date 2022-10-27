function toAcronym(inp) {
  return inp
    .split(" ")
    .map((x) => x.slice(0, 1).toUpperCase())
    .join("");
}

console.log(toAcronym("Code Wars"));
