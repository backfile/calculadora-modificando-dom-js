const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", sumarInput);

function sumarInput() {
  const suma = Number(input1.value) + Number(input2.value);
  resultado.innerText = "Resultado: " + suma;
}
