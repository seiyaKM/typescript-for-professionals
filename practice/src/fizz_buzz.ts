for (let index: number = 1; index <= 100; index++) {
  const isFizz: boolean = index % 3 === 0 ? true : false;
  const isBuzz: boolean = index % 5 === 0 ? true : false;

  if (isFizz && isBuzz) {
    console.log("FizzBuzz");
  } else if (isFizz) {
    console.log("Fizz");
  } else if (isBuzz) {
    console.log("Buzz");
  } else {
    console.log(index);
  }
}
