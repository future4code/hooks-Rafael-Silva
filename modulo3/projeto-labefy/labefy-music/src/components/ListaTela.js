import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardMusica = styled.div`
    border: 4px solid black;
    padding: 13px;
    margin: 11px;
    display:flex;
    justify-content: space-between;
`

export default class ListaTela extends React.Component {
    state = {
        listaMusicas: []
    }


    componentDidMount () {
        this.pegarMusica()
    }

    pegarMusica = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"

        const headers = {
            headers: {
                Authorization: "RafaelSilva-hooks"
            }
        }

        try {
            const response = await axios.get(url, headers)
            this.setState({listaMusicas:response.data})
        } catch (error) {
            alert("Algo deu errado")
        }


    }

    deletarPlaylist = async(id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId${id}`

        const headers = {
            headers: {
                Authorization: "RafaelSilva-hooks"
            }
        }

        try {
            await axios.delete(url, headers)
            alert("playlist deletada com sucesso")
            this.pegarMusica()
        } catch (error) {
            alert(error.response.data.message)
        }

        
    }

    render() {
        const musicas = this.state.listaMusicas.map((musicas) => {
            return (
                <CardMusica key={musicas.id}>
                    {musicas.name}
                    <button onClick={() => this.deletarplayList(musicas.id)}>X</button>
                </CardMusica>
            )
        })

        return (
            <div>
                <button onClick={this.props.paraMusicas}>Ir para criar playlist</button>
                <h2>Lista de playlist</h2>
                {musicas}
            </div>
        )
    }
}