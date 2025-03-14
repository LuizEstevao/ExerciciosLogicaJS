export function executarExercicio() {
  alert("Executando exercicio 5");

  // Escreva um programa que declare um array de suas frutas favoritas
  // e imprima cada fruta na lista usando um loop.

  let fruteira = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];

  for (let mostrarFruta = 0; mostrarFruta < fruteira.length; mostrarFruta++) {
    alert(`Fruta Selecionada: ${fruteira[mostrarFruta]}`);
  }
}
