export function executarExercicio(){
    alert("Executando exercicio 6!!")


    // Manipulação de Strings: Escreva uma função que receba 
    // uma string e retorne a mesma string,
    //  mas com a primeira letra de cada palavra em maiúsculas.

    let palavra = String(prompt("Digite uma palavra qualquer:"))


    function RetornarPrimeiraLetraMaiuscula(palavra){
        return palavra.charAt(0).toLocaleUpperCase() + palavra.slice(1);
    }

    alert(RetornarPrimeiraLetraMaiuscula(palavra));
}