function zipStrings(strA, strB) {
  let result = "";

  for (let i = 0; i < strA.length || i < strB.length; i++) {
    result += strA.charAt(i) + strB.charAt(i);
  }

  return result;
}
