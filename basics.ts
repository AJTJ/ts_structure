// VARIABLES

// TYPE is naturally inferred
const bob = "hey I'm bob";
console.log(bob);

const bob2 = () => {};

// Numbers represent Integers and floats
const a: number = 5.321;

// INTERFACE
// Defines the properties, basically a struct
interface ObInt {
  x: number;
  y: number;
  // z is optional
  z?: string;
}

const obj: ObInt = {
  x: 5.32,
  y: 7,
};

const obj2: ObInt = {
  x: 123,
  y: 5554,
};

obj2.z = "happy";

const addXY = (obj: ObInt): number => {
  return obj.x + obj.y;
};

console.log("addXY:", addXY(obj));

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Sam", 123);

//TYPE

type WindowStates = "open" | "closed" | "minimized";

function getLength(target: string | string[]) {
  if (typeof target === "string") {
    console.log("target is a string");
  } else {
    console.log(target);
  }
}
("parallelizeable");

// GENERICS

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

// const object = backpack.get();

// backpack.add(23);

// console.log(object);

// STRUCTURAL TYPE

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point: Point = { x: 12, y: 44 };
logPoint(point);

// TYPE FUNCTIONS
type AddFunc = (x: number, y: number) => number;
const add: AddFunc = (x, y) => x + y;
console.log(add(2, 3));

const add2 = ({ a, b }: { a: number; b: number }) => a + b;
const add3 = (nums: { a: number; b: number }) => nums.a + nums.b;
console.log(add2({ a: 3, b: 4 }));
console.log(add3({ a: 3, b: 2 }));

// UNION
let maybeNum: number | string | boolean | AddFunc = 5;
maybeNum = false;

interface Dog {
  bark: string;
}
// yeyydfs
interface Cat {
  purr?: string;
}

type DogCat = Dog & Cat;

let dogCat: DogCat = {
  bark: "brooow",
  purr: "mrrrw",
};

// if (typeof dogCat === dogCat) {
//   console.log("ya");
// } else {
//   console.log("nah dogcat not number");
// }

console.log("dogCat", dogCat, typeof dogCat);

// use CASTING to change the types
// console.log(add(dogCat as number, dogCat as number));

// use ANY for any situation
const doesAnything = (x: any) => {
  console.log(x);
};

doesAnything(false);
