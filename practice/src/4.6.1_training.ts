// for (let index = 1; index <= 100; index++) {
//   const message = getFizzBuzzString(index);
//   console.log(message);
// }

for (const index of sequence(1, 100)) {
  const message = getFizzBuzzString(index);
  console.log(message);
}

function getFizzBuzzString(index: number): string | number {
  const isFizz: boolean = index % 3 === 0;
  const isBuzz: boolean = index % 5 === 0;
  if (isFizz && isBuzz) {
    return "FizzBuzz";
  } else if (isFizz) {
    return "Fizz";
  } else if (isBuzz) {
    return "Buzz";
  } else {
    return index;
  }
}

function sequence(start: number, end: number): number[] {
  const result = [];
  for (let index = start; index <= end; index++) {
    result.push(index);
  }
  return result;
}
