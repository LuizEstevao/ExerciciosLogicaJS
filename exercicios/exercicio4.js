export function executarExercicio(){
    alert("Executando exercicio 4!!")


    // Funções: Escreva uma função que aceite dois 
    // números como argumentos e retorne sua soma.

    let num1 = Number(prompt("Digite o valor do primeiro numero:"))
    let num2 = Number(prompt("Digite o valor do segundo numero:"))

    function Somar(num1,num2){
        return num1 + num2
    }

    alert(Somar(num1,num2));

}