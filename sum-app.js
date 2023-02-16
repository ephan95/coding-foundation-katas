function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

class SumApp {
  constructor(numbers) {
    this.numbers = [];
  }

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    if (this.numbers.length > 0) {
      return sumArray(this.numbers);
    } else {
      return 0;
    }
  }

  reset() {
    this.numbers = [];
  }
}
