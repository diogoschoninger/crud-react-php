import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

export function Home() {
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost:8080/crud-react-php/api/index.php")
    .then((response) => response.json())
    .then((responseJson) => (
      setData(responseJson)
    ));
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Listar</h1>
        <Link to="/cadastrar">
          <button>Cadastrar</button>
        </Link>
      </Header>

      <table border="1" style={{width: '100%', margin: 'auto'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
                <Link to={"/visualizar/" + produto.id}>
                  <button>Visualizar</button>
                </Link>
                <Link to={"/editar/" + produto.id}>
                  <button>Editar</button>
                </Link>
                Excluir
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
