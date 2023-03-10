function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  console.log(something.toString());
}
