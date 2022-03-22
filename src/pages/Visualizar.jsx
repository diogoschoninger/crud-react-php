import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

export function Visualizar() {
  const id = useParams().id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduto = async () => {
      await fetch("http://localhost:8080/crud-react-php/api/visualizar.php?id=" + id)
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.produto));
    }

    getProduto();
  }, [id]);

  return(
    <Container>
      <Header>
        <h1>Visualizar</h1>

        <Link to="/">
          <button>Listar</button>
        </Link>
      </Header>
      <p>ID: {data.id}</p>
      <p>Título: {data.titulo}</p>
      <p>Descrição: {data.descricao}</p>
    </Container>
  );
}
