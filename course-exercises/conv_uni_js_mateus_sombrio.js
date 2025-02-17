function conversor_milhas(x) {
  return x * 0.621371;
}
let entrada = parseFloat(prompt("Digite um valor em Km: "));
console.log("Milhas :", conversor_milhas(entrada));
