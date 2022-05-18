const start = document.getElementById("start");
const nuevaPalabra = document.querySelector('#nuevaPalabra');
let nuevaPalabraSecreta = '';

start.addEventListener("click", () => {
    window.location.href = "../pages/game.html";
   
  });

nuevaPalabra.addEventListener('click', () => {
   
    swal({
        title: "Ingrese una nueva palabra",
        content: {
          element: "input",
          attributes: {
            placeholder: "palabra secreta shhh...",
            type: "password",
          },
        },
      }).then((value) => {
        if (value === null) return;
        window.location.href = "../pages/game.html";
        localStorage.setItem('palabra', value); 
        nuevaPalabraSecreta = value
        
      }
    );
}
)
