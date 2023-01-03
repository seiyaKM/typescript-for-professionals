class User2 {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge;
  }
}

const user = new User2();
console.log(user.isAdult());

user.setAge(21);

console.log(user.isAdult());
