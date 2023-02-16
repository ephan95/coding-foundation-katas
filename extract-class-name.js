function extractClassName(sessionTitle) {
  const array = sessionTitle.split(" ");
  const months =
    /^(Januar|Februar|März|Maerz|April|Mai|Juni|July|August|September|Oktober|November|Dezember)$/;
  const monthNumbers = {
    Januar: 1,
    Februar: 2,
    März: 3,
    Maerz: 3,
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Dezember: 12,
  };

  if (
    array.includes("Class") &&
    array[2].length === 4 &&
    months.test(array[3])
  ) {
    return (
      array[2].toString() +
      "-" +
      monthNumbers[array[3]].toString().padStart(2, "0")
    );
  } else {
    return null;
  }
}
