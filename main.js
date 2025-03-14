function carregarExercicio() {
  let seletorExercicio = document.getElementById("exercicioSelecionado");

  if (!seletorExercicio || !seletorExercicio.value) {
    console.log("Nenhum exercicio Selecionado");
    return;
  }

  let exercicio = seletorExercicio.value;

  import(`./exercicios/${exercicio}.js`)
    .then((module) => {
      module.executarExercicio();
    })
    .catch((error) => {
      console.error(error);
    });
}
