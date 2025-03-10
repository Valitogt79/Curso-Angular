export class Person {
  // public name: string;
  // private address: string;
  //
  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.address = address;
  // }

  constructor(
    public name: string,
    private address: string = "No Adrress",
  ) {}
}

// export class hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string,
//   ) {
//     super(realName, "New York");
//   }
// }

export class hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {
    // this.person = new Person(realName);
  }
}

//
// const ironman = new Person("SpiderMan", "New York");
// console.log(ironman);

const spiderman = new Person("Peter Parker", "Filadelphia");
const ironman = new hero("SpiderMan", 45, "Tony", spiderman);
console.log(ironman);
