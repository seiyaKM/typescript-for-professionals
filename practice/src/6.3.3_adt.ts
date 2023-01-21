type Animal633 = {
  tag: "animal";
  species: string;
};

type Human633 = {
  tag: "human";
  name: string;
};

type User633 = Animal633 | Human633;

const kai: User633 = {
  tag: "animal",
  species: "dog",
};

const riku633: User633 = {
  tag: "human",
  name: "rikumaru",
};

function getUser633Name(user: User633) {
  if (user.tag === "human") {
    return user.name;
  } else {
    return "no name";
  }
}

console.log(getUser633Name(kai));
console.log(getUser633Name(riku633));
