const contPadre = document.querySelector(".cont-padre");
const puntero = document.querySelector(".puntero");

const ladopuntero = 75;

puntero.style.width = ladopuntero + "px";
puntero.style.height = ladopuntero + "px";
puntero.style.borderRadius = ladopuntero + "px";

contPadre.addEventListener("mousemove", (e) => {
  puntero.style.top = e.pageY - ladopuntero / 2 + "px";
  puntero.style.left = e.pageX - ladopuntero / 2 + "px";
});
