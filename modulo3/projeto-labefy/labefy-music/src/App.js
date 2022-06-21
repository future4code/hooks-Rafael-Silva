import React from "react";
import CriarMusica from "./components/CriarMusica";
import ListaTela from "./components/ListaTela";

class App extends React.Component {
  state = {
    telaAtual1: "fazerMusica"
  }

  paraMusicas = () => {
    this.setState({ telaAtual1: "fazerMusica" })
  }

  paraLista = () => {
    this.setState({ telaAtual1: "lista" })
  }

  teladeEscolha = () => {
    switch (this.state.telaAtual1) {
      case "fazerMusica":
        return <CriarMusica  paraLista= {this.paraLista} />
          case "lista":
            return <ListaTela  paraMusicas={this.paraMusicas} />
             default: 
               return <p>Error Página não encontrada tente novamente</p>

    }
  }

  render() {
    return (
      <div>
        {this.teladeEscolha()}
      </div>
    );
  }
}

export default App;
