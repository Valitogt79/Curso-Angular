// Si el arreglo NO se sabe si va a cambiar, se recomienda declararlo como una constante
let skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["bash", "counter"],
  hometown: "",
};

strider.hometown = "Rivendell";

console.table(strider);
export {};
