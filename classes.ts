class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("World");

console.log(greeter.greet());

// ABSTRACT

abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

// ERROR: CANNOT CREATE AN INSTANCE OF AN ABSTRACT CLASS
// const b = new Base();

// MUST CREATE A DERIVED CLASS FROM AN ABSTRACT CLASS
class my_derived extends Base {
  getName() {
    return "world";
  }
}

const d = new my_derived();
d.getName();
