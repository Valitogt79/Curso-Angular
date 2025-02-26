import "./style.css";
// import './topics/01-basic-types'   //-> requiriendo el modulo
// import "./topics/02-object-interface.ts"; //-> requiriendo el modulo
import "./topics/03-functions";

document.querySelector<HTMLDivElement>("#app")!;

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `Hola Mundo!`;
