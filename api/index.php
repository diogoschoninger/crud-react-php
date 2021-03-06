<?php
  #Cabeçalhos obrigatórios
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Headers: *");

  #Incluir a conexão
  include_once 'conexao.php';

  #Executa a query
  $query_produtos = "SELECT * FROM produtos ORDER BY id DESC";
  $result_produtos = $conn->prepare($query_produtos);
  $result_produtos->execute();

  #Monta um array com os dados obtidos
  if ($result_produtos && $result_produtos->rowCount() !== 0) {
    while ($row_produto = $result_produtos->fetch(PDO::FETCH_ASSOC)) {
      extract($row_produto);
      $lista_produtos[$id] = [
        'id' => $id,
        'titulo' => $titulo,
        'descricao' => $descricao
      ];
    }
    #Resposta com status 200
    http_response_code(200);
    #Retornar os produtos em formato JSON
    echo json_encode($lista_produtos);
  }
?>
