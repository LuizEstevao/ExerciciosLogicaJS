export function executarExercicio(){
    alert("Executando Exercicio 1!!")

    // Variáveis e tipos de dados: Escreva um programa que
    //  declare duas variáveis, “nome” e “idade”, 
    // e as imprima em um console em uma frase que diga
    //  “Olá, meu nome é [nome] e eu tenho [idade] anos”.

let nome = String(prompt("Digite seu nome: "));
let idade = Number(prompt("Digite sua idade: "))

alert(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)

}