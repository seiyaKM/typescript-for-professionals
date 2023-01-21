type Option681<T> =
  | {
      tag: "something";
      value: T;
    }
  | {
      tag: "none";
    };

function showNumberIfExists(obj: Option681<number>): void {
  if (obj.tag === "something") {
    console.log(obj.value);
  }
}

const four: Option681<number> = {
  tag: "something",
  value: 4,
};

const nothing: Option681<number> = {
  tag: "none",
};

showNumberIfExists(four);
showNumberIfExists(nothing);
