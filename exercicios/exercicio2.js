export function executarExercicio() {
  alert("Executando Exercicio 2!!");


//   Operadores: Crie um programa que solicite ao usuário dois números e exiba
//  o resultado da soma, subtração, multiplicação e divisão desses números.

  let num1 = Number(prompt("Por favor, digite o primeiro número: "));
  let num2 = Number(prompt("Por favor, digite o segundo número: "));
  let soma = num1 + num2;
  let subtracao = num1 - num2;
  let multiplicar = num1 * num2;
  let divisao = num1 / num2;

  alert(`Resultados:\n Soma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicar}\nDivisão: ${divisao}`);
}
