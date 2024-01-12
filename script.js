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

setInterval(horasDigital, 1000);
