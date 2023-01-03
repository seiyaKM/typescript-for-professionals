function map(array: number[], callback: (value: number) => number): number[] {
  const result: number[] = [];
  for (const item of array) {
    result.push(callback(item));
  }
  return result;
}

const data463 = [1, 1, 2, 3, 5, 8, 13];
const result = map(data463, (x) => x * 10);

console.log(result);
