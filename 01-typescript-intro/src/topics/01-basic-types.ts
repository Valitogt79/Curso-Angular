const name: string = "Valitogt";
let hpPoints: number | "FUEL" = 95; //->permite utilizar valores numericos o string o directamente la cadena de texto
const isAlive: boolean = true;

hpPoints = "FUEL";

console.log({ name, hpPoints, isAlive });

export {};
