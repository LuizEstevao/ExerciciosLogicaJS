# Exercícios de Lógica de Programação em JavaScript

Este repositório contém diversos exercícios de lógica de programação utilizando JavaScript. Os exercícios abordam conceitos fundamentais como variáveis, operadores, estruturas condicionais, loops, funções, arrays, manipulação de strings e consumo de APIs com Fetch.

## Como usar este repositório

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Navegue até o diretório do repositório:
   ```sh
   cd nome-do-repositorio
   ```
3. Abra os arquivos em um editor de código como VS Code e execute os códigos no console do navegador ou no Node.js.

## Exercícios

### 1. Variáveis e Tipos de Dados

*Esta é uma possível solução para o exercício. Outras abordagens também podem ser utilizadas.*
Crie um programa que declare duas variáveis, `nome` e `idade`, e as imprima no console em uma frase formatada:
```js
const nome = "João";
const idade = 25;
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
```

### 2. Operadores
Solicite ao usuário dois números e exiba a soma, subtração, multiplicação e divisão:
```js
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));
console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);
```

### 3. Condicionais
Pergunte ao usuário sua idade e informe se ele é maior ou menor de idade:
```js
const idade = Number(prompt("Digite sua idade:"));
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
```

### 4. Loops
Crie um loop que imprima todos os números de 1 a 100:
```js
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

### 5. Funções
Escreva uma função que aceite dois números como argumentos e retorne sua soma:
```js
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));
```

### 6. Arrays
Declare um array de frutas favoritas e imprima cada fruta usando um loop:
```js
const frutas = ["Maçã", "Banana", "Morango"];
frutas.forEach(fruta => console.log(fruta));
```

### 7. Manipulação de Strings
Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas:
```js
function capitalize(str) {
    return str.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");
}
console.log(capitalize("ola mundo")); // "Ola Mundo"
```

### 8. Promises e Fetch API
Use a Fetch API para buscar dados de uma API pública e exibir os resultados no console:
```js
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro ao buscar dados:", error));
```

## Contribuição
Se desejar contribuir com mais exercícios ou melhorias, fique à vontade para abrir um Pull Request.

## Licença
Este repositório é de uso livre para estudos e aprendizado.

