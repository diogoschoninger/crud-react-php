import React, { useState, useEffect } from 'react';

import { Table, Titulo } from './styles';

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
    <div>
      <Titulo>Listar</Titulo>

      <Table>
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
      </Table>
    </div>
  );
}
