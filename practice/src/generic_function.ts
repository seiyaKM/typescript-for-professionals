function repeat<T>(element: T, length: number) {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

console.log(repeat<string>("riku", 5));
console.log(repeat<number>(5, 3));
