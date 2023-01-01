function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(2, 5));

type Human = {
  height: number;
  weight: number;
};

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2;
};

const riku: Human = { height: 95, weight: 16 };

console.log(calcBMI(riku));

const calcBMIArrow = (human: Human): number => {
  return human.weight / human.height ** 2;
};
