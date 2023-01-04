class User542 {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }

  public filterOlder(users: readonly User542[]): User542[] {
    return users.filter((u) => u.#age > this.#age);
  }
}

const seiya542 = new User542("seiya", 29);
const yoko542 = new User542("yoko", 41);
const riku542 = new User542("riku", 3);

const older = seiya542.filterOlder([yoko542, riku542]);

console.log(older);
