const desistir = document.getElementById("desistir");
const inputMovil = document.getElementById("input");
const inputAux = document.getElementById("inputAux");

let count1 = 0;
let count2 = 0;
let keyPressed = [];

const rendirse = () => {
  window.location.href = "/";
};

const main = () => {
  const words = [
    "lunes",
    "octubre",
    "lasagna",
    "ballena",
    "policia",
    "tallarines",
    "portavasos",
    "televisor",
    "escritorio",
    "comedor",
    "facultad",
    "universidad",
    "cuaderno",
    "ventana",
    "invierno",
    "verano",
    "navidad",
  ];
  const start = document.getElementById("start");
  const palabra = document.getElementById("palabra");
  const random = Math.floor(Math.random() * words.length);

  let newWord = "";

  newWord = localStorage.getItem("palabra");

  const secretWord = words[random];
  newWord = newWord && newWord.replace(/ /g, "");

  let spacesRepetidos = newWord ? newWord.split("") : secretWord.split("");
  spaces = spacesRepetidos.filter((item, index) => {
    return spacesRepetidos.indexOf(item) === index;
  });

  let hola = spacesRepetidos.map((letra) => `<span class='letra'></span>`);
  hola = hola.join("");
  palabra.innerHTML = hola;

  //
  start.addEventListener("click", () => {
    window.location.href = "/game.html";
  });

  events();
  function events() {
    inputMovil.focus();
    inputMovil.addEventListener("keyup", (e) => {
      const inputAux = document.getElementById("inputAux");
      const letterSecret = document.querySelectorAll("#palabra span");
      const key = e.target.value.toLowerCase();
      const img = document.querySelector(".horca");

      let acierto = false;

      for (let i = 0; i < spacesRepetidos.length; i++) {
        if (key === spacesRepetidos[i]) {
          letterSecret[i].innerHTML = key;
          if (!keyPressed.includes(key)) {
            count1++;
          }
          keyPressed.push(key);
          acierto = true;
        }
      }

      if (!acierto) {
        count2++;
        img.src = `../images/image${count2}.svg`;
      }

      if (count1 === spaces.length) {
        swal("You are win", "Good job!", "success").then(() => {
          localStorage.clear();
          window.location.href = "/game.html";
        });
      } else if (count2 === 5) {
        swal("You are Lose", "Oops... try again!", "error").then(() => {
          localStorage.clear();
          window.location.href = "/game.html";
        });
      }
      inputMovil.value = "";
      inputAux.focus();
      inputMovil.focus();
    });
  }
};

window.onload = main();
