type HasName = {
  name: string;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

const fromAge = (age: number): HasNameAndAge => ({
  name: "john smith",
  age,
});

// const f: (age: number) => HasName = fromAge;

const obj_1: HasName = fromAge(23);

console.log(obj_1);
