// Encademamiento Opcional
//
export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Juan",
};

const passenger2: Passenger = {
  name: "Pedro",
  children: ["Laura", "Jose"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
