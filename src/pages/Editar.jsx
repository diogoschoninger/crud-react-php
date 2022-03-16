import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

export function Editar() {
  const id = useParams().id;
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  });

  const editProduto = async e => {
    e.preventDefault();
    
    await fetch("http://localhost:8080/crud-react-php/api/editar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, titulo, descricao})
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.erro) {
        setStatus({
          type: 'error',
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
        type: 'error',
        mensagem: 'Produto não editado com sucesso, tente novamente!'
      })
    })
  }

  useEffect(() => {
    const getProduto = async () => {
      await fetch("http://localhost:8080/crud-react-php/api/visualizar.php?id=" + id)
      .then((response) => response.json())
      .then((responseJson) => {
        setTitulo(responseJson.produto.titulo);
        setDescricao(responseJson.produto.descricao);
      });
    }

    getProduto();
  }, [id]);

  return(
    <Container>
      <Header>
        <h1>Editar</h1>
        <Link to="/">
          <button>Listar</button>
        </Link>
      </Header>

      {status.type ? <p>{status.mensagem}</p> : ""}

      <form onSubmit={editProduto}>
        <label>Título: </label>
        <input type="text" name="titulo" placeholder="Título do produto" value={titulo} onChange={e => setTitulo(e.target.value)}/><br/>
        <label>Descrição: </label>
        <input type="text" name="descricao" placeholder="Descrição do produto" value={descricao} onChange={e => setDescricao(e.target.value)}/><br/>
        <button type="submit">Editar</button>
      </form>
    </Container>
  );
}