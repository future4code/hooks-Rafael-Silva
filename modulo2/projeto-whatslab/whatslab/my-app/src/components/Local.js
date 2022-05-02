import React from "react";
import {
  Conta,
  Header,
  NovaM,
  Footer,
  Mensagem,
} from "./NovoLocal";

class Local extends React.Component {
  state = {
    messages: [{ sender: "Rafael", text: "Olá mundo" }],
    inputText: "",
    inputSender: "",
    
  };

  onChangeInputSender = (e) => {
    this.setState({ inputSender: e.target.value });
  };

  onClickMessage = () => {
    const menssagem = [...this.state.messages];
    menssagem.push({
      sender: this.state.inputSender,
      text: this.state.inputText
    });
    this.setState({ messages: menssagem });
  };

  onClickSender = () => {
    const m = [...this.state.inputMensagem];
    m.push({
      sender: this.state.inputSender,
      text: this.state.inputSender
    });
    this.setState({ inputSender: m });
  };
 


  render() {
    return (
      <Conta>
        <Header>
          <h2>Conversas</h2>
        </Header>
        <NovaM>
          {this.state.messages.map((m, i) => {
            return (
              <Mensagem key={i}>
                <p>{m.sender}</p>
                <p>{m.text}</p>
              </Mensagem>
            );
          })}
        </NovaM>
        <Footer>
          <input
            value={this.state.inputSender}
            onChange={this.onChangeInputSender}
          />
          <input />
          <button onClick={this.onClickMessage}>Enviar</button>
        </Footer>
      </Conta>
    );
  }
}
export default Local;
