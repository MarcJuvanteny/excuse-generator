// Arrays con las partes de la excusa
const who = [
  "Mi perro",
  "Mi vecino",
  "Mi profesor",
  "Mi jefe"
];

const action = [
  "se rompió",
  "se perdió",
  "se apagó de repente",
  "se bloqueó por completo",
  "se estropeó justo antes",
  "se cayó al suelo",
  "se quedó atascado",
  "se desconfiguró solo"
];

const what = [
  "mi tarea",
  "el informe que tenía que entregar",
  "la presentación importante",
  "el archivo donde lo tenía todo guardado",
  "el proyecto final",
  "mis apuntes"
];

const when = [
  "hoy",
  "ayer",
  "esta mañana",
  "anoche",
  "la semana pasada",
  "hace un momento",
  "justo antes de salir",
  "cuando estaba a punto de empezar"
];

// Selección aleatoria usando Math.random() y Math.floor()
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Construcción de la frase final
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

// Imprimir la excusa
console.log(excuse);
