const words = ["lunes", "octubre", "lasagna", "ballena", "policia","tallarines","portavasos","televisor","escritorio","comedor","facultad","universidad","cuaderno","ventana","invierno","verano","navidad"];
const start = document.getElementById("start");
const palabra = document.getElementById("palabra");
const random = Math.floor(Math.random() * words.length);
const desistir = document.getElementById("desistir");

let newWord =''

newWord=localStorage.getItem('palabra')

const rendirse = ()=>{
  window.location.href = "/";
}

start.addEventListener("click", () => {
  window.location.href = "../pages/game.html";
 
});

const secretWord = words[random];
newWord = newWord && newWord.replace(/ /g, "")

let spaces = newWord ? newWord.split('') : secretWord.split('');

let hola = spaces.map( letra => (`<span class='letra'></span>`))
hola = hola.join('');
palabra.innerHTML= hola

let count1 = 0;
let count2 = 0;
document.addEventListener('keyup',(e)  => {
  const letterSecret = document.querySelectorAll('#palabra span')
  const key = e.key;
  const img = document.querySelector('.horca')

  let acierto = false
 
  for(let i=0; i<spaces.length; i++){
    if(key === spaces[i]){
      letterSecret[i].innerHTML = key;
      count1++
      acierto = true
    }
  }

  if(acierto === false){
    count2++
    img.src=`../images/image${count2}.svg`
  }
  

  if(count1 === spaces.length){
    swal("You are win", "Good job!", "success").then( ()=> {
      localStorage.clear()
      window.location.href = "../pages/game.html";
  });
    
  }else if(count2 === 5){
    swal("You are Lose", "Oops... try again!", "error",).then( ()=> {
      localStorage.clear()
      window.location.href = "../pages/game.html";
  });
   
  }

});





