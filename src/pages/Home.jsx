import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../components/Container';

export const Home = () => {
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
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Listar</h1>
        <Link to="/cadastrar">
          <button>Cadastrar</button>
        </Link>
      </div>

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
              <td>Visualizar | Editar | Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
