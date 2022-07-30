interface Greetable {
  readonly name: string; //U can add only readonly

  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Tomek");
// user1.name = "Max";

user1.greet("Hi there - i'm ");

console.log(user1);
