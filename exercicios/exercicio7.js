export function executarExercicio(){
    alert("Executando exercicio 7")



    // URL da API pública
const url = "https://jsonplaceholder.typicode.com/posts";

// Fazendo uma requisição GET usando Fetch API
fetch(url)
  .then(response => {
    // Verifica se a resposta está OK (status 200-299)
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json(); // Converte a resposta para JSON
  })
  .then(data => {
    console.log("Dados recebidos:", data); // Exibe os dados no console
  })
  .catch(error => {
    console.error("Erro ao buscar os dados:", error); // Captura erros
  });

}