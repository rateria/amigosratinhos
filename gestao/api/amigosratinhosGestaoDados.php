<?php

//amigosratinhosGestaoDados.php
//autor: Salaminho
//descrição: Contém as funções para busca e alteração de dados no banco amigosratinhos

include "../../api/amigosratinhosConexaoSQL.php";
include "../../api/amigosratinhosConsultasSQL.php";

//----------------- Recepção da camada de dados ----------------------------------------------------------------//

$conexao = mysqli_connect($bdServidor, $bdUsuario, $bdSenha, $bdBanco);
if (mysqli_connect_errno($conexao)){
	echo "Ratinho, não consegui conectar ao banco. Verifique os dados inseridos ou peça ajuda a outro ratinho mais experiente! (--')";
	die();
}
mysqli_set_charset($conexao, "utf8");

if(isset($_POST['args'])){
	$JSON_arg = $_POST['args'];
	echo $_POST['funcao']($conexao, $JSON_arg);
}
else{
	echo $_POST['funcao']($conexao);
}

//----------------- Funções da camada de dados -----------------------------------------------------------------//

function obtem_item_por_id($conexao, $args){
	
	$categoria = json_decode($args)->categoria;
	$id = json_decode($args)->id;
	
	if($categoria == 'Viradas')
		$query = ViradasSQL\obter_por_id($id);
	else if($categoria == 'Ritmos')
		$query = RitmosSQL\obter_por_id($id);
	else if($categoria == 'Músicas')
		$query = MusicasSQL\obter_por_id($id);
	else if($categoria == 'Elementos')
		$query = ElementosSQL\obter_por_id($id);
	
	$resultado = mysqli_query($conexao, $query);
	
	$itens = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$itens[] = $item;
	}
	
	if(isset($itens[1]))
		echo "Erro de PK: A busca retornou mais de um resultado!";
	else
		echo json_encode($itens[0]);
}

function obtem_tabela_por_nome($conexao, $nome){
	
	$tabela_nome = json_decode($nome)->tabela;
	
	if($tabela_nome == 'Viradas')
		$query = ViradasSQL\listar();
	else if($tabela_nome == 'Ritmos')
		$query = RitmosSQL\listar();
	else if($tabela_nome == 'Músicas')
		$query = MusicasSQL\listar();
	else if($tabela_nome == 'Elementos')
		$query = ElementosSQL\listar();
	
	$resultado = mysqli_query($conexao, $query);
	
	$itens = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$itens[] = $item;
	}
	
	echo json_encode($itens);
}

function adicionar($conexao, $args){
	
	$categoria = json_decode($args)->categoria;
	$item = json_decode($args)->item;
	
	if($categoria == 'Viradas')
		$query = ViradasSQL\adicionar($item);
	else if($categoria == 'Ritmos')
		$query = RitmosSQL\adicionar($item);
	else if($categoria == 'Músicas')
		$query = MusicasSQL\adicionar($item);
	else if($categoria == 'Elementos')
		$query = ElementosSQL\adicionar($item);
	
	$resultado = mysqli_query($conexao, $query);
	
	if(!$resultado){
		echo 'Algo não correu bem: ' . mysqli_error($conexao);
	}
	else{
		echo 'Parabéns! A gravação aconteceu!';
	}
}

function alterar($conexao, $args){
	
	$categoria = json_decode($args)->categoria;
	$item = json_decode($args)->item;
	
	if($categoria == 'Viradas')
		$query = ViradasSQL\alterar($item);
	else if($categoria == 'Ritmos')
		$query = RitmosSQL\alterar($item);
	else if($categoria == 'Músicas')
		$query = MusicasSQL\alterar($item);
	else if($categoria == 'Elementos')
		$query = ElementosSQL\alterar($item);
	
	$resultado = mysqli_query($conexao, $query);
	
	if(!$resultado){
		echo 'Algo não correu bem: ' . mysqli_error($conexao);
	}
	else{
		echo 'Parabéns! A alteração foi realizada!';
	}
}

function remover($conexao, $args){
	
	$categoria = json_decode($args)->categoria;
	$id = json_decode($args)->id;
	
	if($categoria == 'Viradas')
		$query = ViradasSQL\remover($id);
	else if($categoria == 'Ritmos')
		$query = RitmosSQL\remover($id);
	else if($categoria == 'Músicas')
		$query = MusicasSQL\remover($id);
	else if($categoria == 'Elementos')
		$query = ElementosSQL\remover($id);
	
	$resultado = mysqli_query($conexao, $query);
	
	if(!$resultado){
		echo 'Algo não correu bem: ' . mysqli_error($conexao);
	}
	else{
		echo 'Parabéns! A remoção aconteceu!';
	}
}
?>