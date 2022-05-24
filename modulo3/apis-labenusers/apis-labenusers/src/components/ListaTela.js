import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 2px solid black;
    padding: 13px;
    margin: 11px;
    display:flex;
    justify-content: space-between;
`

export default class TelaLista extends React.Component {
    state = {
        listaUsuarios: []
    }


    componentDidMount () {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const headers = {
            headers: {
                Authorization: "pedro-saldanha-hooks"
            }
        }

        try {
            const response = await axios.get(url, headers)
            this.setState({listaUsuarios:response.data})
        } catch (error) {
            alert("Algo deu errado")
        }


        
    }

    deletarUsuario = async(id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        const headers = {
            headers: {
                Authorization: "pedro-saldanha-hooks"
            }
        }

        try {
            await axios.delete(url, headers)
            alert("Usuário deletado com sucesso")
            this.pegarUsuarios()
        } catch (error) {
            alert(error.response.data.message)
        }

        

    }

    render() {
        const usuarios = this.state.listaUsuarios.map((usuario) => {
            return (
                <CardUsuario key={usuario.id}>
                    {usuario.name}
                    <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
                </CardUsuario>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de usuários</h2>
                {usuarios}
            </div>
        )
    }
}