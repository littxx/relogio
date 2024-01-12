let digital = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

const formatHour = (numero) => {
  return numero < 10 ? "0" + numero : numero;
};

function horasDigital() {
  let now = new Date();

  let horas = formatHour(now.getHours());
  let minutos = formatHour(now.getMinutes());
  let segundos = formatHour(now.getSeconds());
  digital.innerHTML = `${horas}:${minutos}:${segundos}`;
}

function horasAnal() {
  let now = new Date();

  let segundos = now.getSeconds();
  let minutos = now.getMinutes();
  let horas = now.getHours();

  let anguloSegundos = (segundos / 60) * 360;
  let anguloMinutos = (minutos / 60) * 360;
  let anguloHoras = ((horas % 12) / 12) * 360 + (minutos / 60) * 30; // 30 graus por hora

  sElement.style.transform = `rotate(${anguloSegundos}deg)`;
  mElement.style.transform = `rotate(${anguloMinutos}deg)`;
  hElement.style.transform = `rotate(${anguloHoras}deg)`;
}

setInterval(horasAnal, 1000);

setInterval(horasDigital, 1000);
