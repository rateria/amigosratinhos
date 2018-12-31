<?php

//amigosratinhosDados.php
//autor: Salaminho
//descrição: Contém as funções para busca de dados no banco amigosratinhos

include "amigosratinhosConexaoSQL.php";
include "amigosratinhosConsultasSQL.php";

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

function listar_anos_de_viradas($conexao){
	
	$query = ViradasSQL\listar_anos();
	
	$resultado = mysqli_query($conexao, $query);
	
	$anos = array();
	while($ano = mysqli_fetch_assoc($resultado)){
		$anos[] = $ano;
	}
	
	echo json_encode($anos);
}

function listar_viradas_por_ano($conexao, $args){
	$ano = json_decode($args)->ano;
	
	$query = ViradasSQL\listar_por_ano($ano);
	
	$resultado = mysqli_query($conexao, $query);
	
	$viradas = array();
	while($virada = mysqli_fetch_assoc($resultado)){
		$viradas[] = $virada;
	}
	
	echo json_encode($viradas);
}

function listar_viradas($conexao){
	$query = ViradasSQL\listar_simples();
	
	$resultado = mysqli_query($conexao, $query);
	
	$viradas = array();
	while($virada = mysqli_fetch_assoc($resultado)){
		$viradas[] = $virada;
	}
	
	echo json_encode($viradas);
}

function obter_virada_por_id($conexao, $args){
	$idVirada = json_decode($args)->id;
	
	$query = ViradasSQL\obter_por_id($idVirada);
		
	$resultado = mysqli_query($conexao, $query);
	
	$virada = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$virada[] = $item;
	}
	
	if(isset($virada[1]))
		echo "Erro de PK: A busca retornou mais de um resultado!";
	else
		echo json_encode($virada[0]);
}

function listar_ritmos($conexao){
	$query = RitmosSQL\listar_simples();
	
	$resultado = mysqli_query($conexao, $query);
	
	$ritmos = array();
	while($ritmo = mysqli_fetch_assoc($resultado)){
		$ritmos[] = $ritmo;
	}
	
	echo json_encode($ritmos);
}

function obter_ritmo_por_id($conexao, $args){
	$idRitmo = json_decode($args)->id;
	
	$query = RitmosSQL\obter_por_id($idRitmo);
		
	$resultado = mysqli_query($conexao, $query);
	
	$ritmo = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$ritmo[] = $item;
	}
	
	if(isset($ritmo[1]))
		echo "Erro de PK: A busca retornou mais de um resultado!";
	else
		echo json_encode($ritmo[0]);
}

function listar_musicas($conexao){
	$query = MusicasSQL\listar_simples();
	
	$resultado = mysqli_query($conexao, $query);
	
	$musicas = array();
	while($musica = mysqli_fetch_assoc($resultado)){		
		$musicas[] = $musica;
	}
	
	echo json_encode($musicas);
}

function obter_musica_por_id($conexao, $args){
	$idMusica = json_decode($args)->id;
	
	$query = MusicasSQL\obter_por_id($idMusica);
		
	$resultado = mysqli_query($conexao, $query);
	
	$musica = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$musica[] = $item;
	}
	
	if(isset($musica[1]))
		echo "Erro de PK: A busca retornou mais de um resultado!";
	else
		echo json_encode($musica[0]);
}

function listar_elementos_por_instrumento($conexao, $args){
	$instrumento = json_decode($args)->instrumento;
	
	$query = ElementosSQL\listar_por_instrumento($instrumento);
	
	$resultado = mysqli_query($conexao, $query);
	
	$elementos = array();
	while($elemento = mysqli_fetch_assoc($resultado)){
		$elementos[] = $elemento;
	}
	
	echo json_encode($elementos);
}

function obter_elemento_por_id($conexao, $args){
	$idElemento = json_decode($args)->id;
	
	
	$query = ElementosSQL\obter_por_id($idElemento);
	
	$resultado = mysqli_query($conexao, $query);
	
	$elemento = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$elemento[] = $item;
	}
	
	if(isset($elemento[1]))
		echo "Erro de PK: A busca retornou mais de um resultado!";
	else
		echo json_encode($elemento[0]);
}

function obter_texto_por_categoria($conexao, $args){
	$categoria = json_decode($args)->categoria;
	
	$query = TextosSQL\obter_por_categoria($categoria);
	
	$resultado = mysqli_query($conexao, $query);
	
	$texto = array();
	while($item = mysqli_fetch_assoc($resultado)){
		$texto[] = $item;
	}
	
	if(isset($texot[1]))
		echo "Erro de PK: A busca retornou mais de um resultado!";
	else
		echo json_encode($texto[0]);
}
?>