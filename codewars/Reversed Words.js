function reverseWords(str) {
  // 1. switch str to arr
  // 2. reverse arr
  // 3. switch arr to str
  // 4. Don't forget the space in " "
  return str.split(" ").reverse().join(" ");
}
