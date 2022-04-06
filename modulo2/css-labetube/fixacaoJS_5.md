 function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
 ˋˋˋ
 
    ]
    Aqui éé a logica do codigo 
    ˋˋˋ
    const nomesAnimais = animais.map(item=>item.nome)
    return nomesAnimais
}
   ˋˋˋ
