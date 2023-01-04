class User561 {
  readonly name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    if (name === "") throw new Error("name can not be empty");
    this.name = name;
    this.age = age;
  }

  public getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const riku561 = new User561("riku", 3);
console.log(riku561.getMessage("rikumaru"));
