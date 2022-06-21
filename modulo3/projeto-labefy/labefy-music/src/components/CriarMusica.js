import axios from "axios";
import React from "react";

export default class CriarMusica extends React.Component {
    state = {
        nome: "",
        playList: ""
    }

    handleNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    handleplayList = (event) => {
        this.setState({ playList: event.target.value })
    }

    fazerPlaylist = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.nome,
            playList: this.state.playList
        }

        const headers = {
            headers: {
                Authorization:"RafaelSilva-hooks"
            }
        }

        try {
            const response = await axios.post(url, body, headers)
            alert("PlayList criada com sucesso")
            this.setState({ nome: "", playList: "" })
        } catch (error) {
            alert(error.response.data.message)
            this.setState({ nome: "", playList: "" })
        }

        
    }

    render() {
        return (
            <div>
                <button onClick={this.props.paraLista}>Ir para Lista</button>
                <h2>Criar playList</h2>
                <input
                    placeholder="Nome da musica"
                    value={this.state.nome}
                    onChange={this.handleNome}
                />
                <input
                    placeholder="Nome da Banda"
                    value={this.state.playList}
                    onChange={this.handleplayList}
                />
                <button onClick={this.paraLista}>Criar playList</button>
            </div>
        )
    }
}