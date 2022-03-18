<?php
  #Cabeçalhos obrigatórios
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  #Incluir a conexão
  include_once 'conexao.php';

  $id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

  $query_produto = "DELETE FROM produtos WHERE id = :id LIMIT 1";
  $delete_produto = $conn->prepare($query_produto);
  $delete_produto->bindParam(":id", $id, PDO::PARAM_INT);

  if ($delete_produto->execute()) {
    $response = [
      "erro" => false,
      "mensagem" => "Produto " . $id . " excluido com sucesso!"
    ];
  } else {
    $response = [
      "erro" => true,
      "mensagem" => "Produto " . $id . " não excluído!"
    ];
  }


  http_response_code(200);
  echo json_encode($response);
?>
