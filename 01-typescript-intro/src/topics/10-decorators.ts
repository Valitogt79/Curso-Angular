// Decorators
//
function classDecorator<T extends { new (...arg: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
export class SuperClase {
  public myProperty: string = "Hello123";
  print() {
    console.log("Hola Mundo!");
  }
}

// Monstrando la definición de la clase
console.log(SuperClase);

const myClass = new SuperClase();
console.log(myClass);
