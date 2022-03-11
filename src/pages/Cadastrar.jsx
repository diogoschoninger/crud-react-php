import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container'

export const Cadastrar = () => {
  const [produto, setProduto] = useState({
    titulo: '',
    descricao: ''
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value});

  const cadProduto = async e => {
    e.preventDefault();
    
    await fetch("http://localhost:8080/crud-react-php/api/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({produto})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.erro) {
        setStatus({
          type: 'erro',
          mensagem: responseJson.mensagem
        });
      } else {
        setStatus({
          type: 'success',
          mensagem: responseJson.mensagem
        });
      }
    })
    .catch(() => {
      setStatus({
        type: 'erro',
        mensagem: 'Produto não cadastrado'
      })
    })
  }

  return (
    <Container>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Cadastrar</h1>

        <Link to="/">
          <button>Listar</button>
        </Link>
      </div>

      {status.type ? <p>{status.mensagem}</p> : ""}

      <form onSubmit={cadProduto}>
        <label>Título: </label>
        <input type="text" name="titulo" placeholder="Título do produto" onChange={valorInput}/><br/>
        <label>Descrição: </label>
        <input type="text" name="descricao" placeholder="Descrição do produto" onChange={valorInput}/><br/>
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
}
